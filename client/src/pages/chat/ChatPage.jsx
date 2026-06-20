import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { userData } from '../../libs/dummyData'
import './chat-page.scss'

const dummyContacts = [
  { id: 2, name: 'Nguyễn Văn An', img: 'https://i.pravatar.cc/40?img=1', lastMessage: 'Nhà này còn không anh?', time: '2p' },
  { id: 3, name: 'Lê Thị Bình', img: 'https://i.pravatar.cc/40?img=2', lastMessage: 'Cho mình xem vào thứ 7 được không?', time: '1h' },
  { id: 4, name: 'Phạm Minh Châu', img: 'https://i.pravatar.cc/40?img=3', lastMessage: 'Giá có thể thương lượng không?', time: '3h' },
]

const dummyMessages = [
  { id: 1, senderId: 2, text: 'Nhà này còn không anh?', time: '10:30' },
  { id: 2, senderId: userData.id, text: 'Dạ còn bạn ơi, bạn muốn xem trực tiếp không?', time: '10:32' },
  { id: 3, senderId: 2, text: 'Cho mình xem vào thứ 7 được không?', time: '10:33' },
  { id: 4, senderId: userData.id, text: 'Được bạn nhé, mình sẽ sắp xếp lịch xem nhà.', time: '10:35' },
]

const ChatPage = () => {
  const { t } = useTranslation()
  const [activeContact, setActiveContact] = useState(dummyContacts[0])
  const [input, setInput] = useState('')

  return (
    <div className="chatPage">
      <div className="chatSidebar">
        <div className="sidebarHeader">
          <h2>{t('chatPage.tabMessages')}</h2>
        </div>
        <div className="contactList">
          {dummyContacts.map(contact => (
            <div
              key={contact.id}
              className={`contactItem ${activeContact?.id === contact.id ? 'active' : ''}`}
              onClick={() => setActiveContact(contact)}
            >
              <img src={contact.img} alt={contact.name} />
              <div className="contactInfo">
                <span className="contactName">{contact.name}</span>
                <span className="contactLast">{contact.lastMessage}</span>
              </div>
              <span className="contactTime">{contact.time}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="chatMain">
        <div className="chatHeader">
          <div className="headerUser">
            <img src={activeContact?.img} alt="" />
            <span>{activeContact?.name}</span>
          </div>
        </div>

        <div className="chatMessages">
          {dummyMessages.map(msg => (
            <div key={msg.id} className={`bubble ${msg.senderId === userData.id ? 'own' : ''}`}>
              <p>{msg.text}</p>
              <span>{msg.time}</span>
            </div>
          ))}
        </div>

        <div className="chatInput">
          <textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder={t('chatPage.placeholder')}
            rows={1}
          />
          <button>{t('chat.send')}</button>
        </div>
      </div>
    </div>
  )
}

export default ChatPage
