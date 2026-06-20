import { useTranslation } from "react-i18next"
import Searchbar from "../../components/shared/searchbar/Searchbar"
import "./homepage.scss"

const FOUNDING_YEAR = 2026

const Homepage = () => {
  const { t } = useTranslation()
  const yearsOfExperience = new Date().getFullYear() - FOUNDING_YEAR + 1

  return (
    <div className="homepage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">
            {t("homepage.title")} <span className="accent">{t("homepage.titleAccent")}</span>
          </h1>
          <p className="description">{t("homepage.description")}</p>
          <Searchbar />
          <div className="boxes">
            <div className="box">
              <h1>{yearsOfExperience}+</h1>
              <h2>{t("homepage.yearsExperience")}</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>{t("homepage.awards")}</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>{t("homepage.propertiesSold")}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imageContainer">
        <img src="bg.png" alt="" />
      </div>
    </div>
  )
}

export default Homepage
