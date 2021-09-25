import Head from 'next/head'
import Navbar from '../component/navbar'
import { getSiteSetting } from '../lib/site'

export default function Layout({children}){
    return(
    <div className="bg-dark">
      <Head>
        <title>{getSiteSetting().siteName}</title>
        <meta name="description" content={getSiteSetting().seo.content} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Navbar />
        <hr/>
        <div className="container jumbotron mx-auto mt-5 shadow-lg p-3 rounded">          
          <div className="mt-8 flex justify-center">
            {children}
          </div>
        </div>
      </main>
    </div>
    )
}