import Image from 'next/image'
import Link from 'next/link'
import utilStyle from '../styles/utils.module.css'

export default function Additional({list}){   
    const data = list.fileObject     
    return(
        <div className="text-white">
            <div className="row">
                <div className="col-md-12">
                    <h3> Projects done when worked as </h3>
                    <span className="display-4">JR. Software Developer</span>
                    <span className="display-6 d-block">At Work</span>
                </div>            
            </div>
            <div className="row mt-4">
                {
                    data.map((val,id)=>(
                        <div className="col-md-12" key={id}>
                          <div className={`card ${utilStyle.addCardWidth} text-dark shadow-lg p-3 mb-5  rounded`}>
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
                            {val[1].about}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))
                }
            </div>
        </div>
    )
}