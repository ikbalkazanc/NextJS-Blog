import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="/posts/main">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="/posts/main" className={styles.card}>
            <h3>My Modular Example Blog Page&rarr;</h3>
            <p> Require to execute fake json API in back server for effective experience.</p>
          </a>
          <a href="/posts/main" className={styles.card}>
            <h3> Fake Json API executing command&rarr;</h3>
            <p> json-server --watch db.json --port 3001 </p>
            <p> You have to in project file directory</p>
          </a>
       

          <a
            href="https://github.com/ikbalkazanc"
            className={styles.card}
          >
            <h3>My Github Profile &rarr;</h3>
            <p>
              My Repositories
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
