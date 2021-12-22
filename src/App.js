import './App.css';
import ServiceCard from './Components/ServiceCard'
import Modal from './Components/Modal';
import 'reactjs-popup/dist/index.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">網路資訊蒐集服務入口平台</a>
        </div>
      </nav>
      <div className="container">

        <div className="row mt-3">
          <div className="col-12 col-md-4 mb-2">
            <ServiceCard
              title={"PTT資訊查詢平台"}
              text={"Service 1 text"}
              serviceUrl={"https://ptt.nlpnchu.org/keyword"}
            >
              <a
                className='btn btn-sm btn-warning me-1 mb-2'
                href={'https://ptt.nlpnchu.org/keyword'}
                target={'_blank'}
                rel="noreferrer"
              >前往服務</a>
              <ul>
                <li>帳號發文推文查詢</li>
                <li>關鍵字查詢</li>
                <li>觀察帳號清單</li>

              </ul>
            </ServiceCard>
          </div>
          <div className="col-12 col-md-4 mb-2">
            <ServiceCard
              title={"PTT訊息通知機器人"}
            >
              <Modal
                trigger={<button className='btn btn-sm btn-secondary'>{'使用方法'}</button>}
              >
                <h3>使用流程</h3>
                <ul>
                  <li>掃瞄QR code加入PTT monitor為好友</li>
                  <li>輸入想要監控的帳號ID</li>
                  <li>每天10點會偵測指定ID昨天的發文次數及內容，然後自動發送通知到Line上</li>
                </ul>
                <img src={require('./Asstes/images/ptt-bot-qrcode.png')} alt="" srcSet="" width={250} />
                <br /><br />

                <h3>Line操作介面</h3>
                <img src={require('./Asstes/images/ptt-bot-ui.png')} alt="" srcSet="" width={250} />
                <br /><br />

                <h3>實際操作畫面</h3>
                <img src={require('./Asstes/images/ptt-bot-1.png')} alt="" srcSet="" width={250} />
                <br />
                <img src={require('./Asstes/images/ptt-bot-2.png')} alt="" srcSet="" width={250} />

                <br /><br />
              </Modal>
              <div className='text-center mt-3'>
                <img src={require('./Asstes/images/ptt-bot-qrcode.png')} alt="" srcSet="" width={120} />
                <br />
                <small>Line Bot</small>
              </div>

            </ServiceCard>
          </div>
          <div className="col-12 col-md-4 mb-2">
            <ServiceCard
              title={"YouTube直播留言蒐集平台"}
              serviceUrl={"http://52.192.134.73:3000"}
            >
              <a
                className='btn btn-sm btn-warning me-1 mb-2'
                href={'http://52.192.134.73:3000'}
                target={'_blank'}
                rel="noreferrer"
              >前往服務</a>
              <Modal
                trigger={<button className='btn btn-sm btn-secondary mb-2'>{'使用方法'}</button>}
              >
                <h3>YouTube直播留言蒐集平台</h3>
                <ul>
                  <li>預設未開啟服務，有需求請通知後開啟</li>
                  <li>預設所有爬蟲都在背景執行，最大可同時存在3個爬蟲任務，每次開啟網頁都會顯示目前正在工作的爬蟲的進度，如爬蟲任務已滿仍需開啟新的爬蟲任務，請先停止現有爬蟲任務</li>

                  <img src={require('./Asstes/images/ytube-ui.png')} alt="" srcSet="" width={'80%'} />
                </ul>
              </Modal>
              <br />
              預設未開啟服務，有需求請通知後開啟
            </ServiceCard>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
