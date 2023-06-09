import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import MetaData from '../layouts/MetaData'
import CheckoutSteps from './CheckoutSteps'
import NumberFormat from 'react-number-format'
import { useSelector } from 'react-redux'

const ConfirmOrder = ({ history }) => {

    const { cartItems, shippingInfo } = useSelector(state => state.cart)
    const { userLogin } = useSelector(state => state.auth)

    // Calculate Order Prices
    const itemsPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    const shippingPrice = itemsPrice > 500000 ? 0 : 50000
    const taxPrice = Number((0.1 * itemsPrice))
    const totalPrice = (itemsPrice + shippingPrice + taxPrice)

    const processToPayment = () => {
        const data = {
            itemsPrice: itemsPrice,
            shippingPrice,
            taxPrice,
            totalPrice
        }

        sessionStorage.setItem('orderInfo', JSON.stringify(data))
        history.push('/order/payment')
    }

    return (
        <Fragment>

            <MetaData title={'Confirm Order'} />

            <div className="container">
                <CheckoutSteps shipping confirmOrder />
                <div className="order-confirm">
                    <div className="row">
                        <div className="col-8">

                            <h4 className="mb-3">Thông tin vận chuyển</h4>
                            <p><b>Tên:</b> {userLogin && userLogin.name}</p>
                            <p><b>SĐT:</b> {shippingInfo.phone}</p>
                            <p className="mb-4"><b>Address:</b> {`${shippingInfo.address}, ${shippingInfo.city}`}</p>

                            <hr />
                            <h4 className="mt-4">Các mặt hàng:</h4>

                            {cartItems.map(item => (
                                <Fragment>
                                    <hr />
                                    <div className="cart-item" key={item.product}>
                                        <div className="row">
                                            <div className="col-4 col-lg-2">
                                                <img src={item.image} alt={item.name} height="80" width="80" />
                                            </div>

                                            <div className="col-6 col-lg-6">
                                                <Link to={`/product/${item.product}`}>{item.name}</Link>
                                                <p>Size: {item.size}</p>
                                            </div>


                                            <div className="col-2 col-lg-4 mt-4 mt-lg-0">

                                                <p>{item.quantity} x <NumberFormat value={item.price} displayType={'text'} thousandSeparator={true} prefix={'đ '} /> = <b><NumberFormat value={(item.quantity * item.price)} displayType={'text'} thousandSeparator={true} prefix={'đ '} /></b></p>
                                            </div>

                                        </div>
                                    </div>
                                    <hr />
                                </Fragment>
                            ))}



                        </div>

                        <div className="col-4">
                            <div id="order_summary">
                                <h4>Tóm tắt</h4>
                                <hr />
                                <p>Tổng phụ:  <span className="order-summary-values"><NumberFormat value={itemsPrice} displayType={'text'} thousandSeparator={true} prefix={'đ '} /></span></p>
                                <p>Shipping: <span className="order-summary-values"><NumberFormat value={shippingPrice} displayType={'text'} thousandSeparator={true} prefix={'đ '} /></span></p>
                                <p>Tax:  <span className="order-summary-values"><NumberFormat value={taxPrice} displayType={'text'} thousandSeparator={true} prefix={'đ '} /></span></p>

                                <hr />

                                <h5>Tổng: <span className="order-summary-values"><NumberFormat value={totalPrice} displayType={'text'} thousandSeparator={true} prefix={'đ '} /></span></h5>

                                <hr />
                                <button id="checkout_btn" className="btn btn-block btn-order-summary" onClick={processToPayment}>Tiến hành thanh toán</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ConfirmOrder
