import { getProjectIds,getProjectDetails } from "../lib/project";
import Layout from "../component/layout";

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
    console.log(data);
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
                            <span className="card-title display-3">{data.projectName}</span>
                            <p className="card-text">
                                <span className="h4 d-block">About this project</span>
                                {data.about}
                            </p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </Layout>
    )
  }