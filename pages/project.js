import Layout from '../component/layout'
import Image from 'next/image'
import utilStyle from '../styles/utils.module.css'
import { projectLists } from '../lib/project'


export async function getStaticProps()
{
    const lists = await projectLists()
    return {
        props:{
            lists
        }
    }
}

export default function Home({lists}) {
  console.log(lists);
  return (
    <Layout>
        <div className='container'>
          <div className="row">
          {
            lists.fileObject.map((val,id)=>{
              return (
                <div className="col-md-4">
                    <div key={id} className={`card ${utilStyle.cardWidth} bg-dark text-white shadow-lg p-3 mb-5  rounded`}>
                    {/* <Image 

                    /> */}
                    <div className="card-body">
                      <h5 className="card-title">{val[1].projectName}</h5>
                      <p className="card-text">
                      {val[1].about}
                      </p>
                      <a href="#" className="btn btn-primary">Project Link</a>
                    </div>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
    </Layout>
  )
}
