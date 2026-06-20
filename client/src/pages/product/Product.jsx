import { useTranslation } from "react-i18next"
import Slider from "../../components/shared/slider/Slider"
import "./product.scss"
import { singlePost, userData } from "../../libs/dummyData"
import Price from "../../components/shared/price/Price"
import Map from "../../components/shared/map/Map"

const Product = () => {
  const { t } = useTranslation()

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
          <p className="title">{t("product.generalInfo")}</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>{t("product.utilities")}</span>
                <p>{t("product.utilitiesValue")}</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>{t("product.pets")}</span>
                <p>{t("product.petsValue")}</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>{t("product.fees")}</span>
                <p>{t("product.feesValue")}</p>
              </div>
            </div>
          </div>
          <p className="title">{t("product.assetSize")}</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>80m2</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>2 {t("product.bedrooms")}</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>1 {t("product.bathrooms")}</span>
            </div>
          </div>
          <p className="title">{t("product.nearbyPlaces")}</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>{t("product.school")}</span>
                <p>{t("product.schoolDistance")}</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>{t("product.busStop")}</span>
                <p>{t("product.busStopDistance")}</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>{t("product.restaurant")}</span>
                <p>{t("product.restaurantDistance")}</p>
              </div>
            </div>
          </div>
          <p className="title">{t("product.location")}</p>
          <div className="mapContainer">
            <Map list={[singlePost]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              {t("product.sendMessage")}
            </button>
            <button>
              <img src="/save.png" alt="" />
              {t("product.saveLocation")}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
