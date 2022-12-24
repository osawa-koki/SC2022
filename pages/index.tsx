import Link from 'next/link'
import { Setting } from '../common/Setting'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout>
    <div id='Index'>
      <div id='MainTopic'>
        <h1>Hello 情報処理安全確保支援士試験 👋</h1>
        <img id='Logo' src={`${Setting.IMG_ROOT_PATH}/Logo.png`} alt="Logo" />
      </div>
    </div>
  </Layout>
)

export default IndexPage
