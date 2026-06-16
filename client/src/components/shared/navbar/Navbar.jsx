import { useState } from "react"
import "./navbar.scss"
import { userData } from "../../../libs/dummyData"
import { Link } from "react-router-dom"
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const user = true;

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>Homia</span>
        </a>
        <a href="/product-list">Nhà Đẹp</a>
        <a href="/product-list">Đất Tốt</a>
        <a href="/">Chúng Tôi</a>
        <a href="/">Hỗ Trợ</a>
      </div>
      <div className="right">
        {user ? <div className="user">
          <img src={userData.img} alt="" />
          <span>{userData.name}</span>
          <Link to="/profile" className="profile" >
            <div className="notification">3</div>
            <span>Hồ sơ</span>
          </Link >
        </div> : <>
          <a href="/">Đăng Nhập</a>
          <a href="/" className="register">Đăng Ký</a>
        </>}

        <div className="menuIcon">
          <img src="/menu.png" alt="" onClick={() => setOpenMenu(!openMenu)} />
        </div>
        <div className={openMenu ? "menu active" : "menu"}>
          <button className="closeBtn" onClick={() => setOpenMenu(false)}>✕</button>
          <a href="/">Nhà Đẹp</a>
          <a href="/">Đất Tốt</a>
          <a href="/">Chúng Tôi</a>
          <a href="/">Hỗ Trợ</a>
          <a href="/">Đăng Nhập</a>
          <a href="/">Đăng Ký</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
