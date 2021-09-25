import Head from 'next/head'
import { getSiteSetting } from '../lib/site'
import Navbar from '../component/navbar'

export default function Layout({children,prop}){
    return(
    <div>
      <Head>
        <title>{getSiteSetting().siteName}</title>
        <meta name="description" content={getSiteSetting().seo.content} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gradient-to-r from-purple-600 via-purple-200 to-purple-100 min-h-screen">
        <Navbar />
        <div class="max-w-screen-lg bg-white shadow-2xl rounded-lg mx-auto text-center py-12 mt-4 max-h-full text-black">
          <h2 class="text-3xl leading-9 font-bold tracking-tight sm:text-4xl sm:leading-10">
              {prop}
          </h2>
          <div class="mt-8 flex justify-center">
            {children}
          </div>
        </div>
      </main>
    </div>
    )
}