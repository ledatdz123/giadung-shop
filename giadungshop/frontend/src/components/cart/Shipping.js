import React, { Fragment, useState } from 'react'
// import { countries } from 'countries-list'

import MetaData from '../layouts/MetaData'
import CheckoutSteps from './CheckoutSteps'

import { useDispatch, useSelector } from 'react-redux'
import { saveShippingInfo } from '../../actions/cartActions'

const Shipping = ({ history }) => {

    // const countriesList = Object.values(countries)

    const { shippingInfo } = useSelector(state => state.cart)

    const [address, setAddress] = useState(shippingInfo.address)
    const [city, setCity] = useState(shippingInfo.city)
    const [phone, setPhone] = useState(shippingInfo.phone)

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault()

        dispatch(saveShippingInfo({ address, city, phone }))
        history.push('/order/confirm')
    }

    return (
        <Fragment>

            <MetaData title={'Shipping Info'} />
            <div className="container">
                <CheckoutSteps shipping />
                <div className="shipping">
                    <form className="shadow-lg" onSubmit={submitHandler}>
                        <h1 className="mb-4">Thông tin vận chuyển</h1>
                        <div className="form-group">
                            <label htmlFor="address_field">Địa chỉ</label>
                            <input
                                type="text"
                                id="address_field"
                                className="form-control"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="city_field">Thành phố</label>
                            <input
                                type="text"
                                id="city_field"
                                className="form-control"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone_field">Số điện thoại</label>
                            <input
                                type="number"
                                id="phone_field"
                                className="form-control"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required />
                        </div>
                        {/* 
                        <div className="form-group">
                            <label htmlFor="postal_code_field">Postal Code</label>
                            <input
                                type="number"
                                id="postal_code_field"
                                className="form-control"
                                value={postalCode}
                                onChange={(e) => setPostalCode(e.target.value)}
                                required
                            />
                        </div> */}

                        {/* <div className="form-group">
                            <label htmlFor="country_field">Country</label>
                            <select
                                id="country_field"
                                className="form-control"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                required
                            >

                                {countriesList.map(country => (
                                    <option key={country.name} value={country.name}>
                                        {country.name}
                                    </option>
                                ))}

                            </select>
                        </div> */}

                        <button
                            id="shipping_btn"
                            type="submit"
                            className="btn btn-block py-3">
                            CONTINUE
                        </button>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Shipping
