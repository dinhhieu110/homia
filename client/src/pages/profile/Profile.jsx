import "./profile.scss"
import { userData } from "../../libs/dummyData"
import List from "../../components/modules/profile/list/List"
import Chat from "../../components/modules/profile/chat/Chat"
const Profile = () => {
  return (
    <div className="profile">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>Thông tin người dùng</h1>
            <button>Cập nhật thông tin</button>
          </div>
          <div className="info">
            <span>Ảnh đại diện: <img src={userData.img} alt="" /></span>
            <span>Tên người dùng: <b>{userData.name}</b></span>
            <span>E-mail: <b>{userData.email}</b></span>

          </div>
          <div className="title">
            <h1>Danh sách sản phẩm của tôi</h1>
            <button>Thêm bài đăng</button>
          </div>
          <List />
          <div className="title">
            <h1>Danh sách sản phẩm đã lưu</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  )
}

export default Profile
