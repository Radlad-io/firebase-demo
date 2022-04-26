import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Loader from '../components/Loader'

export default function Home({}) {
  return (
    <main>
      <h1>Edit Post</h1>
      <Link prefetch={true} href={{
        pathname: '/[username]',
        query: { username: 'radlad' },
      }}>
        <a>RadLad</a>
      </Link>
      <Loader show={true}/>
    </main>
  )
}