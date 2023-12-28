const Campground = require('../models/campground');
module.exports.index = async(req,res)=>{
    const campgrounds = await Campground.find({});
    res.render('campgrounds/index', {campgrounds});
};

module.exports.renderNewForm = (req,res)=>{
    res.render('campgrounds/new');
}

module.exports.createCamp = async(req,res,next)=>{
    const newCamp = new Campground(req.body.campground);
    newCamp.author = req.user._id;
    await newCamp.save();
    req.flash('success','Successfully added a new campground!');
    res.redirect('/campgrounds/'+newCamp._id);
};

module.exports.showCamp = async(req,res)=>{
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
};

module.exports.renderEditForm = async(req,res)=>{
    const { id } = req.params;
    const camp = await Campground.findById(id);
    if(!camp){
        req.flash('error','Campground not found!');
        return res.redirect('/campgrounds');
    }
    res.render('campgrounds/edit', {camp});
}

module.exports.updateCamp = async(req,res)=>{
    const {id} = req.params;
    const updatedCamp = await Campground.findByIdAndUpdate(id,{...req.body.campground},{new:true});
    req.flash('success',`Successfully updated ${updatedCamp.title}!`);
    res.redirect(`/campgrounds/${updatedCamp._id}`);
};

module.exports.deleteCamp = async(req,res)=>{
    const {id} = req.params;
    await Campground.findByIdAndDelete(id);
    req.flash('success',`Successfully deleted the campground!`);
    res.redirect(`/campgrounds`);
};