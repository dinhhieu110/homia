import { formatVND } from '../../../../utils/currency'
import Price from '../price/Price'
import './card.scss'
import { Link } from "react-router-dom"

const Card = ({ item }) => {
  return (
    <div className="card">
      <Link to={`/product/${item.id}`} className="imageContainer">
        <img src={item.img} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/product/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <Price price={item.price} />
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{item.bedRoom} phòng ngủ</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>{item.bathRoom} phòng tắm</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/save.png" alt="" />
            </div>
            <div className="icon">
              <img src="/chat.png" alt="" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Card
