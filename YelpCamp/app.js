if(process.env.NODE_ENV!='production'){
    require('dotenv').config();
}
console.log(process.env.NODE_ENV,process.env.SECRET);
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const ExpressError = require('./utils/ExpressError');
const path = require('path');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');

const campgroundRoutes = require('./routes/campground');
const reviewRoutes = require('./routes/review');
const userRoutes = require('./routes/user');

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp');
const db = mongoose.connection;
db.on('error',console.error.bind(console, 'Connection error'));
db.once('open', ()=>{
    console.log('Database connected');
});

const app = express();

app.engine('ejs',ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname,'public')));

const session = require('express-session');
const flash = require('connect-flash');
const sessionCfg = {
    secret: 'CAMPGROUNDSECRET123',
    resave:false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        maxAge: 1000*60*60*24*7
    }
}
app.use(session(sessionCfg));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
});

app.get('/fakeuser',async(req,res)=>{
    const user = new User({email:'rrrr@ggg.com',username:'myuser'});
    const newUser = await User.register(user,'chicken');
    res.send(newUser);
});

// Set routers
app.use('/',userRoutes);
app.use('/campgrounds',campgroundRoutes);
app.use('/campgrounds/:id/reviews',reviewRoutes);

// Home route
app.get('/', (req, res) => {
    res.render('home');
});

// Error handler
app.all('*',(req,res,next)=>{
    next(new ExpressError('Page not found!!!',404));
});
app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message)
        err.message = 'Something went wrong';
    res.status(statusCode).render('error', { err });
});

app.listen(3000, function () {
    console.log('Serving on port 3000');
})