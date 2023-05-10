const express = require('express')
const router = express.Router()
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth')

const {
    newCategory,
    getCategories,
    getCategoryById,
    getCategoryByName,
    updateCategory,
    deleteCategory
} = require('../controllers/categoryController')


router.route('/categories')
    .get(getCategories)
router.route('/category/:id')
    .get(getCategoryById)

router.route('/category/name/:name')
    .get(getCategoryByName)
router.route('/admin/category/new')
    .post(newCategory)
router.route('/admin/category/:id')
    .put(updateCategory)
    .delete(deleteCategory)
module.exports = router
