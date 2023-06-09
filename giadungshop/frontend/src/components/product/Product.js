import React from 'react'
import { Link } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from '../../actions/cartActions'
import NumberFormat from 'react-number-format'

const Product = ({ product, col, history }) => {
    const dispatch = useDispatch()
    const { userLogin } = useSelector(state => state.auth)
    const alert = useAlert()
    const uid = userLogin ? userLogin._id : null
    let size = product.category === 'Kitchen' ? 'S' : product.category === 'tulanh' ? '38' : 'Oversize'
    const addToCart = () => {
        if (uid) {
            dispatch(addItemToCart(product._id, 1, size, uid))
            alert.success('Item Added to Cart')
        }
        else {
            history.push('/login')
        }
    }

    return (
        <div className={`col-${col} product-item`}>
            <div className="product-img">
                <a href={`/product/${product._id}`}>
                    <img src={product.images[0].url} alt={product.name} />
                </a>
                <div className="product-action">
                    <i className='bx bxs-cart-add' onClick={addToCart}></i>
                    <Link to={`/product/${product._id}`}><i className='bx bx-show'></i></Link>
                </div>
            </div>
            <Link to={`/product/${product._id}`}><h4>{product.name}</h4></Link>

            <div className="ratings">
                <div className="rating-outer">
                    <div className="rating-inner" style={{ width: `${(product.ratings / 5) * 100}%` }}></div>
                </div>
                <span id="no_of_reviews">({product.numOfReviews} Đánh giá)</span>
            </div>
            <div className="d-flex" style={{ justifyContent: 'space-between' }}>
                <p>
                    <NumberFormat value={product.price} displayType={'text'} thousandSeparator={true} prefix={'đ '} />
                </p>
                <span>Đã bán: {product.sold}</span>
            </div>

        </div>
    )
}

export default Product
