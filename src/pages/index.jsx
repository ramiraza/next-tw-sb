import Head from 'next/head'
import Button from '../components/Button';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <Button text='Clickable'/>
      </div>
    </div>
  )
}
