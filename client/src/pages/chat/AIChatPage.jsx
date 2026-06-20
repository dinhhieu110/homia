import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './ai-chat-page.scss'

const dummyAiMessages = [
  { id: 1, role: 'ai', text: 'Xin chào! Tôi là Homia AI. Tôi có thể phân tích thị trường, so sánh khu vực, hoặc dự báo xu hướng bất động sản. Bạn muốn tìm hiểu điều gì?', time: '09:00' },
  { id: 2, role: 'user', text: 'Phân tích thị trường quận Sơn Trà, Đà Nẵng cho tôi.', time: '09:01' },
  { id: 3, role: 'ai', text: 'Đã phân tích xong! Xem báo cáo chi tiết ở panel bên phải nhé.', time: '09:02' },
]

const dummyHistories = [
  { id: 1, title: 'Phân tích Sơn Trà, Đà Nẵng', date: 'Hôm nay · 09:02', preview: 'Giá tăng 12%, điểm đầu tư 8.4/10' },
  { id: 2, title: 'So sánh Cầu Giấy & Tây Hồ', date: 'Hôm qua · 14:30', preview: 'Tây Hồ có tiềm năng cao hơn 15%' },
  { id: 3, title: 'Dự báo Q3/2026 – Đà Nẵng', date: '3 ngày trước', preview: 'Xu hướng tăng nhẹ 6–8% toàn thị trường' },
]

const dummyReport = {
  title: 'Phân tích thị trường Sơn Trà, Đà Nẵng',
  date: '20/06/2026',
  description: 'Khu vực Sơn Trà đang trong giai đoạn phát triển mạnh với hạ tầng du lịch và giao thông được đầu tư đồng bộ. Nhu cầu nhà ở tăng cao do dòng di cư từ các tỉnh thành khác và sự phát triển mạnh của ngành dịch vụ – du lịch ven biển.',
  analysis: 'Phân tích xu hướng 12 tháng cho thấy giá BĐS tại Sơn Trà tăng trưởng ổn định ở mức 10–14%/năm. Phân khúc căn hộ ven biển dẫn đầu với mức tăng 18%, trong khi đất nền tăng nhẹ hơn ở mức 8% do hạn chế nguồn cung. Thanh khoản thị trường ở mức tốt với thời gian trung bình bán là 45 ngày, giảm 5 ngày so với cùng kỳ năm trước.',
  kpis: [
    { label: 'Giá trung bình', value: '58 tr/m²', trend: '↑ 12%', up: true },
    { label: 'Tổng giao dịch', value: '142 căn', trend: '↑ 8%', up: true },
    { label: 'Thời gian bán TB', value: '45 ngày', trend: '↓ 5 ngày', up: true },
    { label: 'Điểm đầu tư', value: '8.4 / 10', trend: null, score: true },
  ],
  chartBars: [42, 50, 56, 68, 75, 90],
  chartMonths: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'],
  chartLabel: 'Biến động giá (triệu/m²) – 6 tháng gần nhất',
}

const AIChatPage = () => {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState('ask')
  const [report, setReport] = useState(dummyReport)
  const [input, setInput] = useState('')

  const handleHistoryClick = () => {
    setReport(dummyReport)
    setActiveTab('ask')
  }

  return (
    <div className="aiChatPage">
      <div className="aiLeft">
        <div className="aiTabs">
          <button
            className={activeTab === 'ask' ? 'active' : ''}
            onClick={() => setActiveTab('ask')}
          >
            {t('aiChat.tabAsk')}
          </button>
          <button
            className={activeTab === 'histories' ? 'active' : ''}
            onClick={() => setActiveTab('histories')}
          >
            {t('aiChat.tabHistories')}
          </button>
        </div>

        {activeTab === 'ask' && (
          <>
            <div className="aiMessages">
              {dummyAiMessages.map(msg => (
                <div key={msg.id} className={`bubble ${msg.role === 'user' ? 'own' : 'ai'}`}>
                  <p>{msg.text}</p>
                  <span>{msg.time}</span>
                </div>
              ))}
            </div>
            <div className="aiInput">
              <textarea
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder={t('aiChat.placeholder')}
                rows={1}
              />
              <button>{t('chat.send')}</button>
            </div>
          </>
        )}

        {activeTab === 'histories' && (
          <div className="historyList">
            {dummyHistories.map(item => (
              <div
                key={item.id}
                className="historyItem"
                onClick={handleHistoryClick}
              >
                <div className="historyIcon">✦</div>
                <div className="historyInfo">
                  <span className="historyTitle">{item.title}</span>
                  <span className="historyPreview">{item.preview}</span>
                  <span className="historyDate">{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="aiRight">
        {report ? (
          <div className="reportContent">
            <div className="reportHeader">
              <div>
                <h1 className="reportTitle">{report.title}</h1>
                <span className="reportDate">{report.date}</span>
              </div>
              <span className="reportBadge">AI Generated</span>
            </div>

            <p className="reportDescription">{report.description}</p>

            <div className="reportSection">
              <h3>{t('aiChat.analysis')}</h3>
              <p>{report.analysis}</p>
            </div>

            <div className="kpiRow">
              {report.kpis.map((kpi, i) => (
                <div key={i} className="kpiCard">
                  <span className="kpiLabel">{kpi.label}</span>
                  <span className={`kpiValue ${kpi.score ? 'score' : ''}`}>{kpi.value}</span>
                  {kpi.trend && (
                    <span className={`kpiTrend ${kpi.up ? 'up' : 'down'}`}>{kpi.trend}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="reportSection">
              <h3>{t('aiChat.priceTrend')}</h3>
              <div className="chart">
                {report.chartBars.map((h, i) => (
                  <div key={i} className="chartCol">
                    <div className="chartBar" style={{ height: `${h}%` }} />
                    <span className="chartMonth">{report.chartMonths[i]}</span>
                  </div>
                ))}
              </div>
              <p className="chartLabel">{report.chartLabel}</p>
            </div>
          </div>
        ) : (
          <div className="reportEmpty">
            <div className="emptyIcon">✦</div>
            <h2>{t('aiChat.emptyTitle')}</h2>
            <p>{t('aiChat.emptyDesc')}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default AIChatPage
