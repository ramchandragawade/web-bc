const Campground = require('../models/campground');
module.exports = {

    // Campgroung index route
    index : async(req,res)=>{
        const campgrounds = await Campground.find({});
        res.render('campgrounds/index', {campgrounds});
    },

    // New campground form route
    renderNewForm: (req,res)=>{
        res.render('campgrounds/new');
    },

    // Add New campground form submission route(POST)
    createCamp: async(req,res,next)=>{
        const newCamp = new Campground(req.body.campground);
        newCamp.images = req.files.map(f=>({url: f.path, filename: f.filename}));
        newCamp.author = req.user._id;
        await newCamp.save();
        req.flash('success','Successfully added a new campground!');
        res.redirect('/campgrounds/'+newCamp._id);
    },

    // Show selected campground route
    showCamp: async(req,res)=>{
        const {id} = req.params;
        const camp = await Campground.findById(id).populate({
            path: 'reviews',
            populate: {
                path: 'author'
            }
        }).populate('author');
        if(!camp){
            req.flash('error','Campground not found!');
            return res.redirect('/campgrounds');
        }
        res.render('campgrounds/show', {camp});
    },

    // Edit campground form route
    renderEditForm: async(req,res)=>{
        const { id } = req.params;
        const camp = await Campground.findById(id);
        if(!camp){
            req.flash('error','Campground not found!');
            return res.redirect('/campgrounds');
        }
        res.render('campgrounds/edit', {camp});
    },

    // Update edited campground route
    updateCamp: async(req,res)=>{
        const {id} = req.params;
        const updatedCamp = await Campground.findByIdAndUpdate(id,{...req.body.campground},{new:true});
        req.flash('success',`Successfully updated ${updatedCamp.title}!`);
        res.redirect(`/campgrounds/${updatedCamp._id}`);
    },

    // delete campground route
    deleteCamp: async(req,res)=>{
        const {id} = req.params;
        await Campground.findByIdAndDelete(id);
        req.flash('success',`Successfully deleted the campground!`);
        res.redirect(`/campgrounds`);
    }
}