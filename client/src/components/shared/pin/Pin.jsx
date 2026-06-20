import { useTranslation } from "react-i18next"
import { Marker, Popup } from 'react-leaflet'
import { Link } from "react-router-dom"
import './pin.scss'
import Price from '../price/Price'

const Pin = ({ item }) => {
  const { t } = useTranslation()

  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="popupContainer">
          <img src={item.img} alt="" />
          <div className="textContainer">
            <Link to={`/${item.id}`}>{item.title}</Link>
          </div>
          <div className="details">
            <span>{item.bedRoom} {t("pin.bedrooms")}</span>
            <Price price={item.price} sm />
          </div>
        </div>
      </Popup>
    </Marker>
  )
}

export default Pin
