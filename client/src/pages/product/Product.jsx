import Slider from "../../components/shared/slider/Slider"
import "./product.scss"
import { singlePost, userData } from "../../libs/dummyData"
import Price from "../../components/shared/price/Price"

const Product = () => {
  return (
    <div className="product">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePost.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePost.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{singlePost.address}</span>
                </div>
                <Price price={singlePost.price} sm />
              </div>
              <div className="user">
                <img src={userData.img} alt="" referrerPolicy="no-referrer" />
                <span className="userName">{userData.name}</span>
              </div>
            </div>
            <div className="bottom">
              {singlePost.description}
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper"></div>
      </div>
    </div>
  )
}

export default Product
