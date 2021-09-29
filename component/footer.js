export default function Footer()
{
    return(
        <footer className="text-light">        
            <div className="container">
                <div className="row mb-2">
                    <div className="col-md-12 text-center">
                        Build with <span className="bg-white text-dark p-1 h6"> NEXT JS </span>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-md-12 text-center">
                        Code By <span className="bg-white text-dark p-1 h6"><code> Mahbub Alam Evan </code></span> , 
                         Copyright @ {Date()}
                    </div>
                </div>
            </div>
        </footer>
    )
}