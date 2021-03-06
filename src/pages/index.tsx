import React from 'react'

import Head from 'next/head'
import { SearchNickForm } from '../components/full-form/full-form'
import { BackgroundVideo } from '../components/background-video/background-video'

export default function Home() {
  return (
    <div>
      <Head>
        <title>dash.gg</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '100vh',
            margin: 'auto',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <BackgroundVideo />
          <SearchNickForm />
        </div>
      </main>
    </div>
  )
}
