import Layout from '../component/layout'
import Image from 'next/image'
import utilStyle from '../styles/utils.module.css'
import { projectLists } from '../lib/project'
import { shortDetails } from '../lib/helper'
import Link from 'next/link'
import Additional from '../component/additional'
import {additionaLists } from '../lib/additional'




export async function getStaticProps()
{
    const lists = await projectLists()
    const additonalList = await additionaLists()
    return {
        props:{
            lists,
            additonalList
        }
    }
}

export default function Home({lists,additonalList}) {
  return (
    <Layout>
        <div className='container'>
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                {
                  lists.fileObject.map((val,id)=>{
                    return (
                      <div className="col-md-6" key={id}>
                          <div className={`card ${utilStyle.cardWidth} bg-dark text-white shadow-lg p-3 mb-5  rounded`}>
                          {
                            val[1].thumbnail && <Image 
                            src={val[1].thumbnail}
                            alt="thumbnail"
                            width={300}
                            height={200}
                        />
                          }
                          <div className="card-body">
                            <h5 className="card-title">{val[1].projectName}</h5>
                            <p className="card-text">
                            {shortDetails(val[1].about,135)}
                            </p>
                            <div className="d-flex justify-content-between">
                              <Link href={`project/${val[0]}`}>
                                <a href="#" className="btn btn-light">
                                  <span className="me-2">
                                  <i className="las la-info-circle"></i>
                                  </span>
                                  Details
                                </a>
                              </Link>
                              <a target="_blank" rel="noreferrer" href={val[1].github} className="btn btn-light">
                                <span className="me-2">
                                  <i className="lab la-github"></i>
                                </span>
                                Github
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div className="col-md-6">
              <Additional list={additonalList}/>
            </div>
          </div>
        </div>
    </Layout>
  )
}
