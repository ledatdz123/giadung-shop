import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Loader from '../layouts/Loader'
import MetaData from '../layouts/MetaData'
import Banner from '../../assets/banner.png'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { login, clearErrors } from '../../actions/userActions'


const Login = ({ history, location }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const alert = useAlert()
    const dispatch = useDispatch()

    const { isAuthenticated, error, loading } = useSelector(state => state.auth)

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {

        if (isAuthenticated) {
            alert.success('Login successfully!')
            history.push(redirect)
        }

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

    }, [dispatch, alert, redirect, isAuthenticated, error, history])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
    }

    return (
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                    <MetaData title={'Login'} />
                    <div className="account">
                        <div className="container">
                                    <div className="account-form">
                                        <div className="form-header">
                                            <div className="login">
                                                <span>Đăng nhập</span>
                                            </div>
                                            <span><Link to="/register">Đăng ký</Link></span>
                                        </div>
                                        <form onSubmit={submitHandler}>
                                            <input
                                                type="email"
                                                id="email_field"
                                                className="form-control"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="Email" />
                                            <input
                                                type="password"
                                                id="password_field"
                                                className="form-control"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                placeholder="Password" />
                                            <Link to="/password/forgot"></Link>
                                            <p>Bạn chưa có tài khoản. Hãy Đăng ký ngay.</p>
                                            <button
                                                id="login_button"
                                                type="submit"
                                                className="btn btn-login">
                                                Đăng nhập
                                            </button>
                                        </form>
                                    </div>
                                </div>
                    </div>
                </Fragment >
            )
            }
        </Fragment >
    )
}

export default Login
