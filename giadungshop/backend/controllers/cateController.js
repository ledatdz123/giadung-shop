const Category = require('../models/cateModel')
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncErrors = require('../middleware/catchAsyncErrors')

//Create new brand    POST/api/brand
exports.postCate= catchAsyncErrors(async (req, res, next) => {
    var newCate = new Category(req.body);
    //Save it into the DB.
    newCate.save((err,newCate) => {
        if(err) {
            res.send(err);
        }
        else { //If no errors, send it back to the client
            res.status(200).json({
                success: true,
                newCate
            })
        }
    });
})

//Get all brands   GET/api/brands
exports.getCategories = catchAsyncErrors(async (req, res, next) => {

    const categories = await Category.find().sort('name')
    res.status(200).json({
        success: true,
        categories
    })
})

//Get 1 category by name   GET/api/category/:name
exports.getCategoryByName = catchAsyncErrors(async (req, res, next) => {
    const category = await Category.find({ name: req.params.name })
    if (!category) {
        return next(new ErrorHandler('Category not found', 404))
    }
    res.status(200).json({
        success: true,
        category
    })
})




//Get 1 category by id   GET/api/category/:id
exports.getCategoryById = catchAsyncErrors(async (req, res, next) => {
    const category = await Category.findById(req.params.id)
    if (!category) {
        return next(new ErrorHandler('Category not found', 404))
    }
    res.status(200).json({
        success: true,
        category
    })
})


exports.deleteCate = catchAsyncErrors(async (req, res, next) => {

    Category.remove({_id : req.params.id}, (err, result) => {
        res.status(200).json({
            success: true,
            message: 'Category is deleted',
            result
        })
    });
})
exports.updateCate= catchAsyncErrors(async (req, res, next) => {

    Category.findById({_id: req.params.id}, (err, book) => {
        if(err) res.send(err);
        Object.assign(book, req.body).save((err, book) => {
            if(err) res.send(err);
            res.json({ message: 'Book updated!', book });
        });    
    });
})
