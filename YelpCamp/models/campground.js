const mongoose = require("mongoose");
const { campgroundSchema } = require("../validationSchemas");
const Review = require('./review');
const Schema = mongoose.Schema;
const ImageSchema = new Schema({
    url: String,
    filename: String
});

ImageSchema.virtual('thumbnail').get(function(){
    return this.url.replace('/upload','/upload/w_200');
});
const CampgroundSchema = new Schema({
    title: {
        type: String,
    },
    price: {
        type: Number,
    },
    images: [ImageSchema],
    description: {
        type: String,
    },
    location: {
        type: String,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
});

CampgroundSchema.post('findOneAndDelete', async (camp)=>{
    if(camp){
        await Review.deleteMany({
            _id: {
                $in: camp.reviews
            }
        });
    }
});
module.exports = mongoose.model('Campground', CampgroundSchema);