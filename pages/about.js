import Link from 'next/link'
import Layout from '../components/Layout'
const About = () => (

  <Layout title='About'>
    <Link href='/'>
      <a>Go to home</a>
    </Link>
    <p>This is page that uses Next.js</p>
    <img src='/static/next.png' alt='next' height='150px' />
  </Layout>
)

export default About
