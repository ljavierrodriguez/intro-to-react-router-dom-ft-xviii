import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

const ServiceUserDetail = () => {

    const [user, setUser] = useState(null);

    const { id } = useParams();

    const navigate = useNavigate();

    console.log(id);
    
    useEffect(() => {
        getUserById(id);
    }, [])

    const getUserById = id => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(data => setUser(data));
    }


    return (
        <section className="bg-light" id="ServiceUserDetail">
            <div className="container px-4">
                <div className="row gx-4 justify-content-center">
                    <div className="col-lg-8">
                        <h2>ID: {id}</h2>
                        <p className="lead">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut optio
                            velit inventore, expedita quo laboriosam possimus ea consequatur
                            vitae, doloribus consequuntur ex. Nemo assumenda laborum vel, labore
                            ut velit dignissimos.
                        </p>
                        {
                            !!user ?
                                (
                                    <>
                                        <p>{user?.name}</p>
                                        <p>{user?.email}</p>
                                    </>
                                ) : (
                                    <div className="spinner-border text-danger" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                )
                        }
                        <button className="btn btn-warning btn-sm" onClick={() => navigate(-1)}>
                            Regresar
                        </button>

                        <button className="btn btn-warning btn-sm" onClick={() => navigate('/services')}>
                            Regresar a Services
                        </button>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceUserDetail