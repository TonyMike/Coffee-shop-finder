import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner/Banner'
import styles from '../styles/Home.module.css'

export default function Home () {
  const handleonClick = () => {
    console.log('clicked')
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Banner
          buttonText={'View stores nearby'}
          handleonClick={handleonClick}
        />
      </main>
    </div>
  )
}
