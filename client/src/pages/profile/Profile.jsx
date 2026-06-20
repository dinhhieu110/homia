import { useTranslation } from "react-i18next"
import "./profile.scss"
import { userData } from "../../libs/dummyData"
import List from "../../components/modules/profile/list/List"
import Chat from "../../components/modules/profile/chat/Chat"

const Profile = () => {
  const { t } = useTranslation()

  return (
    <div className="profile">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>{t("profile.userInfo")}</h1>
            <button>{t("profile.updateInfo")}</button>
          </div>
          <div className="info">
            <span>{t("profile.avatar")}: <img src={userData.img} alt="" /></span>
            <span>{t("profile.username")}: <b>{userData.name}</b></span>
            <span>{t("profile.email")}: <b>{userData.email}</b></span>
          </div>
          <div className="title">
            <h1>{t("profile.myListings")}</h1>
            <button>{t("profile.addPost")}</button>
          </div>
          <List />
          <div className="title">
            <h1>{t("profile.savedListings")}</h1>
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
