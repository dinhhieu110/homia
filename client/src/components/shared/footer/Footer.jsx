import "./footer.scss"
import { Link } from "react-router-dom"

const FOUNDING_YEAR = 2026

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footerWrapper">

        <div className="footerTop">

          {/* Brand */}
          <div className="brand">
            <div className="logo">
              <img src="/logo.png" alt="Homia" />
              <span>Homia</span>
            </div>
            <p>Nền tảng bất động sản uy tín, kết nối hàng triệu người mua và bán trên khắp Việt Nam.</p>
            <div className="socials">
              <a href="/" aria-label="Facebook" className="socialBtn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="/" aria-label="YouTube" className="socialBtn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon fill="#1a1a1a" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
              </a>
              <a href="/" aria-label="Zalo" className="socialBtn zalo">
                <span>Z</span>
              </a>
            </div>
          </div>

          {/* Properties */}
          <div className="linkGroup">
            <h4>Bất Động Sản</h4>
            <ul>
              <li><Link to="/product-list">Nhà phố</Link></li>
              <li><Link to="/product-list">Chung cư cao cấp</Link></li>
              <li><Link to="/product-list">Biệt thự</Link></li>
              <li><Link to="/product-list">Đất nền</Link></li>
              <li><Link to="/product-list">Nhà cho thuê</Link></li>
              <li><Link to="/product-list">Dự án mới</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="linkGroup">
            <h4>Dịch Vụ</h4>
            <ul>
              <li><Link to="/">Định giá BĐS</Link></li>
              <li><Link to="/">Tư vấn mua bán</Link></li>
              <li><Link to="/">Hỗ trợ pháp lý</Link></li>
              <li><Link to="/">Vay vốn ngân hàng</Link></li>
              <li><Link to="/">Quản lý tài sản</Link></li>
              <li><Link to="/">Đầu tư sinh lời</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="contactGroup">
            <h4>Liên Hệ</h4>
            <div className="contactItem">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16z"/>
              </svg>
              <span>0702 772 251</span>
            </div>
            <div className="contactItem">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
              <span>hieu.tran11002@gmail.vn</span>
            </div>
            <div className="contactItem">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              <span>Đà Nẵng, Việt Nam</span>
            </div>
            <div className="contactItem">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              <span>Phục vụ 24/7</span>
            </div>
          </div>
        </div>

        <div className="signature">
          <div className="sigLeft">
            <div className="monogram">
              <span>H</span>
            </div>
          </div>
          <div className="sigCenter">
            <p className="quoteVi">An cư, lạc nghiệp</p>
            <p className="quoteEn">Settle your home · Prosper your life</p>
          </div>
          <div className="sigRight">
            <div className="sigDivider" />
            <p className="sigTag">est. {FOUNDING_YEAR} · Homia Vietnam</p>
          </div>
        </div>

        <div className="footerBottom">
          <span>© {currentYear} Homia. Bảo lưu mọi quyền.</span>
          <span className="craft">Crafted with <span className="heart">♥</span> in Việt Nam</span>
          <div className="bottomLinks">
            <a href="/">Chính sách</a>
            <span className="dot">·</span>
            <a href="/">Điều khoản</a>
            <span className="dot">·</span>
            <a href="/">Cookie</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
