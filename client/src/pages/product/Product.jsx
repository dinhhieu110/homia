import Slider from "../../components/shared/slider/Slider"
import "./product.scss"
import { singlePost, userData } from "../../libs/dummyData"
import Price from "../../components/shared/price/Price"
import Map from "../../components/shared/map/Map"

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
                <Price price={singlePost.price} />
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
        <div className="wrapper">
          <p className="title">Thông tin chung</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Tiện ích</span>
                <p>Người thuê tự chi trả</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Thú cưng</span>
                <p>Cho phép</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Khoản Phí</span>
                <p>Tổng thu nhập của hộ gia đình phải gấp ít nhất 3 lần tiền thuê nhà.</p>
              </div>
            </div>
          </div>
          <p className="title">Kích cỡ tài sản</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>80m2</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>2 phòng ngủ</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>1 phòng tắm</span>
            </div>
          </div>
          <p className="title">Những địa điểm gần đó</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>Trường học</span>
                <p> Cách 250m</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Trạm xe buýt</span>
                <p> Cách 150m</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Nhà hàng</span>
                <p> Cách 200m</p>
              </div>
            </div>
          </div>
          <p className="title">Vị trí</p>
          <div className="mapContainer">
            <Map list={[singlePost]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              Gửi tin nhắn
            </button>
            <button>
              <img src="/save.png" alt="" />
              Lưu vị trí
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
