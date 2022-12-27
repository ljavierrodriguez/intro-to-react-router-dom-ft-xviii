import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {

    const [users, setUsers] = useState([]);

    const [active, setActive] = useState(false);

    const getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data));
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <section className="bg-light" id="services">
            <div className="container px-4">
                <div className="row gx-4 justify-content-center">
                    <div className="col-lg-8">
                        <h2>Services we offer</h2>
                        <p className="lead">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut optio
                            velit inventore, expedita quo laboriosam possimus ea consequatur
                            vitae, doloribus consequuntur ex. Nemo assumenda laborum vel, labore
                            ut velit dignissimos.
                            <button className="btn btn-primary" onClick={() => setActive(!active)}>active</button>
                        </p>
                        <ul className="list-group">
                            {
                                users.length > 0 &&
                                users.map((user) => {
                                    return (
                                        <li key={user.id} className="list-group-item d-flex justify-content-between">
                                            { user.name}
                                            <Link className="btn btn-info btn-sm" to={`/services/${user.id}/show`}>
                                                Show
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services