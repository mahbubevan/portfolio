import Layout from '../component/layout'
import Image from 'next/image'

export default function Home() {

  return (
    <Layout>
        <div className='container'>
          <div className="row">
            <div className="col-md-7">
            <Image 
                src='/image/profile.jpg'
                height={600}
                width={600}
                alt='Profile Picture'
              />
            </div>
            <div className="col-md-5 text-white">
              <p className="display-4">Hello, Everyone</p>
              <p className="display-3"> I am Md. Mahbub Alam Evan </p>
              <p className="blockquote"> I prefer to say myself Backend Developer. But most of the time have to work as FullStack Develper. </p>
              <p> Optimistic To Learn New Technology. Currently Favourite Stack Is: <span className="h6"> MERN</span> </p>
              <p> Love To Code With - </p>
              <ul>
                <li> JavaScript </li>
                <li> PHP </li>          
              </ul>
            </div>            
          </div>          
        </div>
    </Layout>
  )
}
