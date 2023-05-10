import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFeaturedProducts, getHotProducts, getLatestProducts } from '../actions/productActions'
import Product from './product/Product'
import Loader from './layouts/Loader'
import { useAlert } from 'react-alert'
import { Link } from 'react-router-dom'
import Banner from '../assets/banner.png'
import Panasonic from '../assets/logo-panasonic.jpg'
import Sony from '../assets/logo-sony.png'
import Hitachi from '../assets/hitachi.jpeg'
import Toshiba from '../assets/toshiba.png'
import Samsung from '../assets/samsung.jpg'
import Sunhouse from '../assets/sunhouse.jpg'
import MetaData from './layouts/MetaData'
import Services from './layouts/Services'
import Clients from './layouts/Clients'
import Carousel from 'react-material-ui-carousel'
import picture1 from '../assets/picture1.jpg'
import picture2 from '../assets/picture2.jpg'
import picture3 from '../assets/picture3.jpg'
import './Home.css'
const Home = ({ history }) => {
    const dispatch = useDispatch()
    const alert = useAlert()
    const { loading: loadingF, featuredProducts, error: errorF } = useSelector(state => state.featuredProducts)
    const { loading: loadingH, hotProducts, error: errorH } = useSelector(state => state.hotProducts)
    const { loading: loadingL, latestProducts, error: errorL } = useSelector(state => state.latestProducts)

    useEffect(() => {
        if (errorH) {
            return alert.error(errorH)
        }
        dispatch(getHotProducts())
        if (errorF) {
            return alert.error(errorF)
        }
        dispatch(getFeaturedProducts())
        if (errorL) {
            return alert.error(errorF)
        }
        dispatch(getLatestProducts())

    }, [dispatch, alert, errorF, errorL, errorH])

    return (
        <Fragment>
            <MetaData title={'Mua tại'} />
            {/* banner */}
            <div className="container" style={{ height: '320px', marginTop: '60px'}}>
                <Carousel>
                    <img src={picture1} className="bgImg" />
                    <img src={picture2} className="bgImg" />
                    <img src={picture3} className="bgImg" />

                </Carousel>
            </div>
            {/* categories collection */}
            <div className="categories">
                <h2 class="title">Nhà phân phối của các thương hiệu lớn</h2>
                <div className="small-container" style={{ height: '350px'}}>
                    <div className="row" >
                        <div className="col-4 category" >
                            <Link to="/collections/brand/Panasonic" className="category-wrap">
                                <img src={Panasonic} className="category-img" alt="Panasonic" />
                                <div className="category-info">
                                    <h4>Panasonic</h4>
                                    <div className="category-links">
                                        <Link to="/collections/brand/Panasonic" title="More Details"><i className="bx bx-search" /></Link>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-4 category">
                            <Link to="/collections/brand/Sony" className="category-wrap">
                                <img src={Sony} className="category-img" alt="Sony" />
                                <div className="category-info">
                                    <h4>Sony</h4>
                                    <div className="category-links">
                                        <Link to="/collections/brand/Sony" title="More Details"><i className="bx bx-search" /></Link>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-4 category">
                            <Link to="/collections/brand/Hitachi" className="category-wrap">
                                <img src={Hitachi} className="category-img" alt="Hitachi" />
                                <div className="category-info">
                                    <h4>Hitachi</h4>
                                    <div className="category-links">
                                        <Link to="/collections/brand/Hitachi" title="More Details"><i className="bx bx-search" /></Link>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-4 category">
                            <Link to="/collections/brand/Toshiba" className="category-wrap">
                                <img src={Toshiba} className="category-img" alt="Toshiba" />
                                <div className="category-info">
                                    <h4>Toshiba</h4>
                                    <div className="category-links">
                                        <Link to="/collections/brand/Toshiaba" title="More Details"><i className="bx bx-search" /></Link>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-4 category">
                            <Link to="/collections/brand/Samsung" className="category-wrap">
                                <img src={Samsung} className="category-img" alt="Samsung" />
                                <div className="category-info">
                                    <h4>Samsung</h4>
                                    <div className="category-links">
                                        <Link to="/collections/brand/Samsung" title="More Details"><i className="bx bx-search" /></Link>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-4 category">
                            <Link to="/collections/brand/Sunhouse" className="category-wrap">
                                <img src={Sunhouse} className="category-img" alt="Sunhouse" />
                                <div className="category-info">
                                    <h4>Sunhouse</h4>
                                    <div className="category-links">
                                        <Link to="/collections/brand/Sunhouse" title="More Details"><i className="bx bx-search" /></Link>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* hot collection */}
            <div className="hot">
                <div className='container'>
                    <div className="hot-title">
                        <h2>NỔI BẬT</h2>
                        <p>cÁC SẢN PHẨM NỔI BẬT</p>
                    </div>
                    {
                        loadingH ? <Loader /> : (
                            <div className="row">
                                {
                                    hotProducts && hotProducts.map(product => (
                                        <Product product={product} col={3} key={product._id} history={history} />
                                    ))
                                }
                            </div>
                        )
                    }

                </div>
            </div>
            {/* featured collection */}
            <section className="featured">
                <div className="container">
                    <div className="featured-title">
                        <h2>Đặc sắc</h2>
                        <p>Sản phẩm CÓ RATINGS CAO</p>
                    </div>
                    {
                        loadingF ? <Loader /> : (
                            <div className="row">
                                {
                                    featuredProducts && featuredProducts.map(product => (
                                        <Product product={product} col={3} key={product._id} history={history} />
                                    ))
                                }
                            </div>
                        )
                    }

                </div>
            </section>
            {/* latest collection */}
            <section className="latest">
                <div className="container">
                    <div className="latest-title">
                        <h2>Mới</h2>
                        <p>Sản phẩm mới</p>
                    </div>
                    {
                        loadingL ? <Loader /> : (
                            <div className="row">
                                {
                                    latestProducts && latestProducts.map(product => (
                                        <Product product={product} col={3} key={product._id} history={history} />
                                    ))
                                }
                            </div>
                        )
                    }

                </div>
            </section>

            {/* services */}
            <Services />

            {/* clients */}
            <Clients />
        </Fragment>
    )
}

export default Home
