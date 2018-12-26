import Link from 'next/link'
import Layout from '../components/Layout'

const Contact = () => (
  <Layout title='Contact'>
    <Link href='/'>
      <a>Go to home</a>
    </Link>
    <p>Contact me at
      <a href='mailto:test@test.com'> test@test.com</a>
    </p>
  </Layout>

)

export default Contact
