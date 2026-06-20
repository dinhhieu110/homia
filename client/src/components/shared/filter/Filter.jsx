import { useTranslation } from "react-i18next"
import './filter.scss'

const Filter = () => {
  const { t } = useTranslation()

  return (
    <div className='filter'>
      <h1>{t("filter.searchIn")} <b>Đà Nẵng</b></h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">{t("filter.location")}</label>
          <input type="text" id="city" name="city" placeholder={t("filter.locationPlaceholder")} />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">{t("filter.type")}</label>
          <select name="type" id="type">
            <option value="any">{t("filter.any")}</option>
            <option value="buy">{t("filter.buy")}</option>
            <option value="rent">{t("filter.rent")}</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">{t("filter.property")}</label>
          <select name="property" id="property">
            <option value="any">{t("filter.any")}</option>
            <option value="apartment">{t("filter.apartment")}</option>
            <option value="house">{t("filter.house")}</option>
            <option value="condo">{t("filter.condo")}</option>
            <option value="land">{t("filter.land")}</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">{t("filter.minPrice")}</label>
          <input type="number" id="minPrice" name="minPrice" placeholder={t("filter.anyPlaceholder")} />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">{t("filter.maxPrice")}</label>
          <input type="number" id="maxPrice" name="maxPrice" placeholder={t("filter.anyPlaceholder")} />
        </div>
        <div className="item">
          <label htmlFor="bedroom">{t("filter.bedroom")}</label>
          <input type="text" id="bedroom" name="bedroom" placeholder={t("filter.anyPlaceholder")} />
        </div>
        <button><img src="/search.png" alt="" /></button>
      </div>
    </div>
  )
}

export default Filter
