import Link from 'next/link'
import Layout from '../components/Layout'
const Index = () => (
  <Layout title='Home'>
    <div>Welcome to the page</div>
    <Link href='/about'>
      <a>Go to about</a>
    </Link>
  </Layout>
)
export default Index
