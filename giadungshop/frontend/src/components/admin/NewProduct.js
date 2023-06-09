import React, { Fragment, useState, useEffect } from 'react'

import MetaData from '../layouts/MetaData'
import Sidebar from './Sidebar'
import axios from 'axios'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { newProduct, clearErrors } from '../../actions/productActions'
import { getBrands } from '../../actions/brandActions'
import { getCategories } from '../../actions/categoryActions'
import { NEW_PRODUCT_RESET } from '../../constants/productConstants'

const NewProduct = ({ history }) => {

    const { brands } = useSelector(state => state.brands)
    const { categories } = useSelector(state => state.categories)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [brand, setBrand] = useState('')
    const [images, setImages] = useState([])
    const [image1, setImage1] = useState('')
    const [image2, setImage2] = useState('')
    const [image3, setImage3] = useState('')
    const [image4, setImage4] = useState('')
    const [imagesPreview1, setImagesPreview1] = useState('/images/no-image.png')
    const [imagesPreview2, setImagesPreview2] = useState('/images/no-image.png')
    const [imagesPreview3, setImagesPreview3] = useState('/images/no-image.png')
    const [imagesPreview4, setImagesPreview4] = useState('/images/no-image.png')

    const alert = useAlert()
    const dispatch = useDispatch()

    const { loading, error, success } = useSelector(state => state.newProduct)

    useEffect(() => {
        dispatch(getBrands())
        dispatch(getCategories())
        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (success) {
            history.push('/admin/products');
            alert.success('Product created successfully')
            dispatch({ type: NEW_PRODUCT_RESET })
        }

    }, [dispatch, alert, error, success, history])

    const submitHandler = (e) => {
        e.preventDefault()
        if (name === '') {
            alert.error('Please enter a name!')
            return
        }
        if (price === '') {
            alert.error('Please enter the price greater than 0!')
            return
        }

        if (description === '') {
            alert.error('Please enter a description!')
            return
        }
        if (images.length === 0) {
            alert.error('Please add images!')
            return
        }

        dispatch(newProduct(name, price, description, category, brand, images))
    }

    const onChange1 = async e => {
        const file = e.target.files[0]
        if (!file) {
            return alert.error('File not exist!')
        }
        if (file.type !== 'image/jpeg' && file.type !== 'image/jpg' && file.type !== 'image/png') {
            return alert.error('File format is incorrect!')
        }
        if (file.size > 1024 * 1024 * 5) {
            return alert.error('File too large!')
        }
        let formData = new FormData()
        formData.append('file', file)

        const res = await axios.post('/api/upload', formData, {
            headers: { 'content-type': 'multipart/form-data' }
        })
        setImages(oldArray => [...oldArray, res.data])
        setImage1(res.data.public_id)

        const reader = new FileReader()
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImagesPreview1(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }
    const onChange2 = async e => {
        const file = e.target.files[0]
        if (!file) {
            return alert.error('File not exist!')
        }
        if (file.type !== 'image/jpeg' && file.type !== 'image/jpg' && file.type !== 'image/png') {
            return alert.error('File format is incorrect!')
        }
        if (file.size > 1024 * 1024 * 5) {
            return alert.error('File too large!')
        }

        let formData = new FormData()
        formData.append('file', file)

        const res = await axios.post('/api/upload', formData, {
            headers: { 'content-type': 'multipart/form-data' }
        })
        setImages(oldArray => [...oldArray, res.data])
        setImage2(res.data.public_id)

        const reader = new FileReader()
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImagesPreview2(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }
    const onChange3 = async e => {
        const file = e.target.files[0]
        if (!file) {
            return alert.error('File not exist!')
        }
        if (file.type !== 'image/jpeg' && file.type !== 'image/jpg' && file.type !== 'image/png') {
            return alert.error('File format is incorrect!')
        }
        if (file.size > 1024 * 1024 * 5) {
            return alert.error('File too large!')
        }

        let formData = new FormData()
        formData.append('file', file)

        const res = await axios.post('/api/upload', formData, {
            headers: { 'content-type': 'multipart/form-data' }
        })
        setImages(oldArray => [...oldArray, res.data])
        setImage3(res.data.public_id)

        const reader = new FileReader()
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImagesPreview3(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }
    const onChange4 = async e => {
        const file = e.target.files[0]
        if (!file) {
            return alert.error('File not exist!')
        }
        if (file.type !== 'image/jpeg' && file.type !== 'image/jpg' && file.type !== 'image/png') {
            return alert.error('File format is incorrect!')
        }
        if (file.size > 1024 * 1024 * 5) {
            return alert.error('File too large!')
        }

        let formData = new FormData()
        formData.append('file', file)

        const res = await axios.post('/api/upload', formData, {
            headers: { 'content-type': 'multipart/form-data' }
        })
        setImages(oldArray => [...oldArray, res.data])
        setImage4(res.data.public_id)

        const reader = new FileReader()
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImagesPreview4(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }
    const deleteImage1 = async () => {
        setImagesPreview1('/images/no-image.png')
        setImages(images.filter(item => item.public_id !== image1))
        setImage1('')

    }
    const deleteImage2 = async () => {
        setImagesPreview2('/images/no-image.png')
        setImages(images.filter(item => item.public_id !== image2))
        setImage2('')
    }
    const deleteImage3 = async () => {
        setImagesPreview3('/images/no-image.png')
        setImages(images.filter(item => item.public_id !== image3))
        setImage3('')
    }
    const deleteImage4 = async () => {
        setImagesPreview4('/images/no-image.png')
        setImages(images.filter(item => item.public_id !== image4))
        setImage4('')
    }

    return (
        <Fragment>
            <MetaData title={'New Product'} />
            <div className="row admin-products">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>
                <div className="col-12 col-md-10">
                <div >
                    <Fragment>
                        <div className="my-4">
                            <h3>Sản phẩm mới</h3>
                        </div>
                        <div className="wrapper">
                            <form className="" onSubmit={submitHandler} encType='multipart/form-data'>
                                <div className="form-group">
                                    <label htmlFor="name_field">Tên sản phẩm</label>
                                    <input
                                        type="text"
                                        id="name_field"
                                        className="form-control"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="price_field">Giá</label>
                                    <input
                                        type="number"
                                        id="price_field"
                                        className="form-control"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="description_field">Mô tả</label>
                                    <textarea className="form-control" id="description_field" rows="6" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                                </div>
                                <div className="row">
                                    <div className="col-6 col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="category_field">Loại</label>
                                            <select className="form-control" id="category_field" value={category} onChange={(e) => setCategory(e.target.value)}>
                                                {categories.map(category => (
                                                    <option key={category._id} value={category._id} >{category.name}</option>
                                                ))}

                                            </select>
                                            {category === '' && setCategory(categories[0]._id)}
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="brand_field">Thương hiệu</label>
                                            <select className="form-control" id="brand_field" value={brand} onChange={(e) => setBrand(e.target.value)}>
                                                {brands.map(brand => (
                                                    <option key={brand._id} value={brand._id} >{brand.name}</option>
                                                ))}

                                            </select>
                                            {brand === '' && setBrand(brands[0]._id)}
                                        </div>
                                    </div>
                                </div>

                                <button
                                    id="create_button"
                                    type="submit"
                                    className="btn btn-update btn-block">
                                    Thêm mới
                                </button>

                            </form>
                        </div>

                    </Fragment>
                </div>
                <div >
                    <div className="new-img" >
                        <div className="row">
                            <div className="col-6 col-md-6 img-preview">
                                <img src={imagesPreview1} alt="" />
                                <input
                                    type='file'
                                    name='avatar'
                                    className='custom-file-input'
                                    id='customFile'
                                    accept='images/*'
                                    onChange={onChange1}
                                />
                                <span className="delete-img" onClick={deleteImage1}>X</span>
                            </div>
                            <div className="col-6 col-md-6 img-preview">
                                <img src={imagesPreview2} alt="" />
                                <input
                                    type='file'
                                    name='avatar'
                                    className='custom-file-input'
                                    id='customFile'
                                    accept='images/*'
                                    onChange={onChange2}
                                />
                                <span className="delete-img" onClick={deleteImage2}>X</span>
                            </div>
                            <div className="col-6 col-md-6 img-preview">
                                <img src={imagesPreview3} alt="" />
                                <input
                                    type='file'
                                    name='avatar'
                                    className='custom-file-input'
                                    id='customFile'
                                    accept='images/*'
                                    onChange={onChange3}
                                />
                                <span className="delete-img" onClick={deleteImage3}>X</span>
                            </div>
                            <div className="col-6 col-md-6 img-preview">
                                <img src={imagesPreview4} alt="" />
                                <input
                                    type='file'
                                    name='avatar'
                                    className='custom-file-input'
                                    id='customFile'
                                    accept='images/*'
                                    onChange={onChange4}
                                />
                                <span className="delete-img" onClick={deleteImage4}>X</span>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div >

        </Fragment >
    )
}

export default NewProduct
