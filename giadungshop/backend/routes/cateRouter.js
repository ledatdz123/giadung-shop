const express = require('express');
const { getCategories, getCategoryById, getCategoryByName, updateCate, deleteCate, postCate } = require('../controllers/cateController');
const router = express.Router()
// router.route('/book')
// .get(getBook)
// .post(postbook);

// router.route('/book/:id')
// .delete(deleteBook)
// .put(updateBook);


router.route('/categories')
    .get(getCategories)
router.route('/category/:id')
    .get(getCategoryById)

router.route('/category/name/:name')
    .get(getCategoryByName)
router.route('/admin/category/new')
    .post(postCate)
router.route('/admin/category/:id')
    .put(updateCate)
    .delete(deleteCate)

module.exports=router;