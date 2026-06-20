import { useState, useRef, useEffect } from "react"
import { useTranslation } from "react-i18next"
import "./navbar.scss"
import { userData } from "../../../libs/dummyData"
import { useNavigate } from "react-router-dom"
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher"

const Navbar = () => {
  const { t } = useTranslation()
  const [openMenu, setOpenMenu] = useState(false)
  const [openProfile, setOpenProfile] = useState(false)
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

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>Homia</span>
        </a>
        <a href="/product-list">{t("navbar.niceHouses")}</a>
        <a href="/product-list">{t("navbar.goodLand")}</a>
        <a href="/">{t("navbar.aboutUs")}</a>
        <a href="/">{t("navbar.support")}</a>
      </div>

      <div className="right">
        <LanguageSwitcher />

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
                  <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </button>

                <button className="popupItem">
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
            <a href="/">{t("navbar.login")}</a>
            <a href="/" className="register">{t("navbar.register")}</a>
          </>
        )}

        <div className="menuIcon">
          <img src="/menu.png" alt="" onClick={() => setOpenMenu(!openMenu)} />
        </div>
        <div className={openMenu ? "menu active" : "menu"}>
          <button className="closeBtn" onClick={() => setOpenMenu(false)}>✕</button>
          <a href="/">{t("navbar.niceHouses")}</a>
          <a href="/">{t("navbar.goodLand")}</a>
          <a href="/">{t("navbar.aboutUs")}</a>
          <a href="/">{t("navbar.support")}</a>
          <a href="/">{t("navbar.login")}</a>
          <a href="/">{t("navbar.register")}</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
