import { useState, useRef, useEffect } from "react"
import { useTranslation } from "react-i18next"
import "./navbar.scss"
import { userData } from "../../../libs/dummyData"
import { useNavigate, Link } from "react-router-dom"
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher"
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher"

const Navbar = () => {
  const { t } = useTranslation()
  const [openMenu, setOpenMenu] = useState(false)
  const [openProfile, setOpenProfile] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const popupRef = useRef(null)
  const navigate = useNavigate()
  const user = true

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setOpenProfile(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="left">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>Homia</span>
        </Link>
        <Link to="/product-list">{t("navbar.niceHouses")}</Link>
        <Link to="/product-list">{t("navbar.goodLand")}</Link>
        <Link to="/">{t("navbar.aboutUs")}</Link>
        <Link to="/">{t("navbar.support")}</Link>
      </div>

      <div className="right">
        <ThemeSwitcher />
        <LanguageSwitcher />

        <Link to="/ai-chat" className="askAi">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
            <path d="M20 3v4M22 5h-4"/>
          </svg>
          <span>{t("navbar.askAI")}</span>
        </Link>

        {user ? (
          <div className="user" ref={popupRef}>
            <div
              className="avatarWrapper"
              onClick={() => setOpenProfile((prev) => !prev)}
            >
              <img src={userData.img} alt={userData.name} />
              <div className="badge">3</div>
            </div>

            {openProfile && (
              <div className="profilePopup">
                <div className="popupArrow" />

                <button
                  className="popupItem name"
                  onClick={() => { navigate("/profile"); setOpenProfile(false) }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                  <span>{userData.name}</span>
                </button>

                <button
                  className="popupItem messages"
                  onClick={() => { navigate("/chat"); setOpenProfile(false) }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                  <span>{t("navbar.messages")}</span>
                </button>

                <button className="popupItem password">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                  <span>{t("navbar.changePassword")}</span>
                </button>

                <div className="popupDivider" />

                <button className="popupItem logout">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                    <polyline points="16 17 21 12 16 7"/>
                    <line x1="21" y1="12" x2="9" y2="12"/>
                  </svg>
                  <span>{t("navbar.logout")}</span>
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link to="/">{t("navbar.login")}</Link>
            <Link to="/" className="register">{t("navbar.register")}</Link>
          </>
        )}

        <div className="menuIcon">
          <img src="/menu.png" alt="" onClick={() => setOpenMenu(!openMenu)} />
        </div>
        <div className={openMenu ? "menu active" : "menu"}>
          <button className="closeBtn" onClick={() => setOpenMenu(false)}>✕</button>
          <Link to="/product-list">{t("navbar.niceHouses")}</Link>
          <Link to="/product-list">{t("navbar.goodLand")}</Link>
          <Link to="/">{t("navbar.aboutUs")}</Link>
          <Link to="/">{t("navbar.support")}</Link>
          <Link to="/">{t("navbar.login")}</Link>
          <Link to="/">{t("navbar.register")}</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
