import { useTranslation } from "react-i18next"
import "./languageSwitcher.scss"

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()
  const isVI = i18n.language === "vi"

  const toggle = () => i18n.changeLanguage(isVI ? "en" : "vi")

  return (
    <button
      className="langSwitcher"
      onClick={toggle}
      title={isVI ? "Switch to English" : "Chuyển sang Tiếng Việt"}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
      <span className="langCode">{isVI ? "VI" : "EN"}</span>
    </button>
  )
}

export default LanguageSwitcher
