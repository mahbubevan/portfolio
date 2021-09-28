import { getProjectIds,getProjectDetails } from "../../lib/project";
import Layout from "../../component/layout";
import Image from 'next/image'

export async function getStaticPaths()
{
    const paths = getProjectIds()
    
    return {
      paths,
      fallback:false
    }
}


export async function getStaticProps({params})
{
    const list = await getProjectDetails(params.id)
    return {
        props:{
            list
        }
    }
}

  export default function ProjectDetail({list}) {
    const data = list[0][1]
    return (
      <Layout>
          <div className='container'>
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            Quality - {data.projectQuality}
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <span className="card-title display-3">{data.projectName}</span>
                                    <p className="card-text">
                                        <span className="h4 d-block">About this project</span>
                                        {data.about}
                                    </p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <span className="h5">Functionalities</span>
                                            <ul className="list-group">
                                                {
                                                    data.functionality.map((val,id)=>(
                                                        <li key={id} className="list-group-item">{val}</li>
                                                    ))
                                                }                                        
                                            </ul>
                                        </div>    
                                        <div className="col-md-6">
                                        <span className="h5">Technology Used</span>
                                            <ul className="list-group">
                                                {
                                                    data.tech.map((val,id)=>(
                                                        <li key={id} className="list-group-item">{val}</li>
                                                    ))
                                                }                                        
                                            </ul>    
                                        </div>    
                                    </div>                                 
                                </div>
                                <div className="col-md-6">
                                    <span className="h6 d-block">Screenshot</span>
                                    {
                                        data.thumbnail && <Image                                         
                                        src={data.thumbnail}
                                        alt="thumbnail"
                                        width={300}
                                        height={300}
                                        />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </Layout>
    )
  }