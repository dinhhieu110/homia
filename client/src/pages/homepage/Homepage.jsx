import Searchbar from "../../components/shared/searchbar/Searchbar"
import "./homepage.scss"
const Homepage = () => {
  return (
    <div className="homepage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">
            Nơi Khởi Đầu Cho Tổ Ấm Mơ Ước Và Cơ Hội Đầu Tư <span className="accent">Giá Trị</span>
          </h1>
          <p className="description">
            Khám phá những bất động sản phù hợp với nhu cầu của bạn, từ nhà ở, đất nền đến các cơ hội đầu tư sinh lời hấp dẫn.
            Hàng ngàn tin đăng mua bán nhà đất được cập nhật mỗi ngày. Dễ dàng tìm kiếm, so sánh và kết nối trực tiếp với người bán trên toàn quốc.
          </p>
          <Searchbar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Năm Kinh Nghiệm</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Giải Thưởng</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Tài Sản Đã Bán</h2>
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
