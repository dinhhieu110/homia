import { useState } from "react"
import "./navbar.scss"
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
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
        <a href="/">Đăng Nhập</a>
        <a href="/" className="register">Đăng Ký</a>

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
