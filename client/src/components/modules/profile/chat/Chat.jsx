import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { userData } from '../../../../libs/dummyData'
import './chat.scss'

const Chat = () => {
  const { t } = useTranslation()
  const [chat, setChat] = useState(true)

  return (
    <div className='chat'>
      <div className="messages">
        <h1>{t("chat.messages")}</h1>
        <div className="message">
          <img src={userData.img} alt="" />
          <span>{userData.name}</span>
          <p>Xin chào, tôi là Hiệu!</p>
        </div>
        <div className="message">
          <img src={userData.img} alt="" />
          <span>{userData.name}</span>
          <p>Xin chào, tôi là Hiệu!</p>
        </div>
        <div className="message">
          <img src={userData.img} alt="" />
          <span>{userData.name}</span>
          <p>Xin chào, tôi là Hiệu!</p>
        </div>
        <div className="message">
          <img src={userData.img} alt="" />
          <span>{userData.name}</span>
          <p>Xin chào, tôi là Hiệu!</p>
        </div>
        <div className="message">
          <img src={userData.img} alt="" />
          <span>{userData.name}</span>
          <p>Xin chào, tôi là Hiệu!</p>
        </div>
        <div className="message">
          <img src={userData.img} alt="" />
          <span>{userData.name}</span>
          <p>Xin chào, tôi là Hiệu!</p>
        </div>
        <div className="message">
          <img src={userData.img} alt="" />
          <span>{userData.name}</span>
          <p>Xin chào, tôi là Hiệu!</p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img src={userData.img} alt="" />
              {userData.name}
            </div>
            <span className='close' onClick={() => setChat(null)}>X</span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit.</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit.</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit.</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit.</p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>{t("chat.send")}</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Chat
