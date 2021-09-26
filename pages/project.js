import Layout from '../component/layout'
import Image from 'next/image'
import utilStyle from '../styles/utils.module.css'
import { projectLists } from '../lib/project'

export default function Home() {

  return (
    <Layout>
        <div className='container'>
          <div className={`card ${utilStyle.cardWidth} bg-dark text-white shadow-lg p-3 mb-5  rounded`}>
          {/* <Image 

          /> */}
          <div className="card-body">
            <h5 className="card-title">Project Name</h5>
            <p className="card-text">
              Project Description
            </p>
            <a href="#" className="btn btn-primary">Project Link</a>
          </div>
          </div>
        </div>
    </Layout>
  )
}
