import React from 'react'
import { useParams } from 'react-router-dom'

const ServiceDetail = () => {


    const params = useParams();

    console.log(params);

    return (
        <section className="bg-light" id="ServiceDetail">
            <div className="container px-4">
                <div className="row gx-4 justify-content-center">
                    <div className="col-lg-8">
                        <h2>{params.service}: {params.type}</h2>
                        <p className="lead">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut optio
                            velit inventore, expedita quo laboriosam possimus ea consequatur
                            vitae, doloribus consequuntur ex. Nemo assumenda laborum vel, labore
                            ut velit dignissimos.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceDetail