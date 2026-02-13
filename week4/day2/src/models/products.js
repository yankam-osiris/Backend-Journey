const mongoose = require('mongoose')
const slugify = require('slugify')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'product needs a name'],
        unique: true
    },
    price: {
        type: Number,
        required: [true, 'a product needs a price'],
        min: [0, 'price can not be negative']
    },
    stockQuantity: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        required: [true, 'product must have a category'],
        lowercase: true,
        enum: {
            values: ['electronics', 'home', 'food', 'clothing', 'office'],
            message: `{VALUE} is not a supported category`
        }
    },
    discountPrice: {
        type: Number,
        validate: {
            validator: function(v){
                return v < this.price
            },
            message: props => `${props.value} must be less than the original price`
        }
    },
    slug: {
        type: String
    }
}, {
    timestamps: true,
    toJSON:{virtuals : true},
    toObject: {virtuals: true}
})

productSchema.virtual('totalprice').get(function(){
    return this.price * 1.2
})

productSchema.pre('save', async function(){
    if(!this.isModified('name')) return 

        this.slug = slugify(this.name, {lower: true, strict: true})
        
})

const product = mongoose.model('products', productSchema)
module.exports = product