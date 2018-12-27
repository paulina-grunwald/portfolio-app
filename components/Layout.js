import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'

Router.onRouteChangeStart = url => {
  NProgress.start()
}

Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default ({ children, title }) => (
  <div className='main'>
    <Head>
      <title>Portfolio App</title>
      <link rel='stylesheet'
        hrer='https://unpkg.com/nprogress@0.2.0/nprogress.css' />
    </Head>
    <header className='header'>
      <Link href='/'><a className='link'>Home</a></Link>
      <Link href='/about'><a className='link'>About</a></Link>
      <Link href='/contact'><a className='link'>Contact</a></Link>
    </header>
    <h1>{title}</h1>
    {children}
    <footer className='footer'>
      &copy; {new Date().getFullYear()}
    </footer>
    <style jsx>{`
      .main {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction:column;
      }
      .header {
        width: 100%;
        display: flex;
        justify-content: space-around;
        font-size: 1 em;
        background: darkgrey;
      }
      header a {
        color: indigo;
        text-decoration: none;
      }

      header a:hover {
        font-weight: bold;
      }
      .link {
        padding: 10px;
      }
      .footer {
        padding: 1em;
      }

      
    `}
    </style>
    <style global jsx>{`
      body {
        margin: 0;
        font-size:110%;
        background: #F0F0F0;
      }
    `}
    </style>
  </div>
)
