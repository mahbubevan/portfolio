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
                height={700}
                width={700}
                alt='Profile Picture'
              />
            </div>
            <div className="col-md-5 text-white">
              <p className="display-4">Hello, I am</p>
              <p className="display-3"> Mahbub Alam Evan </p>
              <blockquote className="blockquote text-wrap text-end">I prefer to say myself Backend Developer. But most of the time have to work as FullStack Develper. Optimistic To Learn New Technology.  </blockquote>
              <p className="display-4 text-end">
                MERN stack developer.
              </p>
              <div className="row mt-5">
                <div className="col-md-5">
                  <p className="display-4"> Love To Code With </p>
                </div>
                <div className="col-md-7">
                <ul className="list-group">
                <li className="list-group-item">
                  <div className="row p-1">
                    <div className="col-md-12">
                      <div className="progress">
                        <div className="progress-bar bg-dark w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <br/>
                      <span className="row justify-content-center fw-bold">                        
                        JavaScript   
                      </span>
                    </div> 
                  </div>
                </li>
                <br/>
                <li className="list-group-item">
                  <div className="row p-1">
                    <div className="col-md-12">
                      <div className="progress">
                        <div className="progress-bar bg-info w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <br/>
                      <span className="row justify-content-center fw-bold">                        
                        PHP   
                      </span>
                    </div> 
                  </div>
                </li>      
              </ul>
                </div>
              </div>
            </div>            
          </div>          
        </div>
    </Layout>
  )
}
