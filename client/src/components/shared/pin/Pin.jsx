import { Marker, Popup } from 'react-leaflet'
import { Link } from "react-router-dom"
import './pin.scss'
import { formatVND } from '../../../../utils/currency'
import Price from '../price/Price'

const Pin = ({ item }) => {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="popupContainer">
          <img src={item.img} alt="" />
          <div className="textContainer">
            <Link to={`/${item.id}`}>{item.title}</Link>
          </div>
          <div className="details">
            <span>{item.bedRoom} phòng ngủ</span>
            <Price price={item.price} sm />
          </div>
        </div>
      </Popup>
    </Marker>
  )
}

export default Pin
