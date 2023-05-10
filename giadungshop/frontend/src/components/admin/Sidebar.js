import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="sidebar-wrapper">
            <nav id="sidebar">
                <ul className="list-unstyled components">
                    <li>
                        <Link to="/admin/dashboard"><i className="fas fa-tachometer-alt"></i> Danh mục</Link>
                    </li>
                    <li>
                        <Link to="/admin/users"><i className="fa fa-users"></i> Người dùng</Link>
                    </li>
                    <li>
                        <Link to="/admin/products"><i className="fa fa-clipboard"></i> Sản phẩm</Link>
                    </li>
                    <li>
                        <Link to="/admin/brands"><i class="fas fa-band-aid"></i> Thương hiệu</Link>
                    </li>
                    <li>
                        <Link to="/admin/categories"><i class="fas fa-bacteria"></i> Loại</Link>
                    </li>
                    <li>
                        <Link to="/admin/orders"><i className="fa fa-shopping-basket"></i> Đơn hàng</Link>
                    </li>
                    <li>
                        <Link to="/admin/receipts"><i className="fa fa-shopping-basket"></i> Biên nhận</Link>
                    </li>
                    <li>
                        <Link to="/admin/reviews"><i className="fa fa-star"></i> Đánh giá</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar
