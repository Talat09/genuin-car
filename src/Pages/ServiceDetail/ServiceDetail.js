import React from 'react';
import { Link, useParams } from 'react-router-dom'
const ServiceDetail = () => {
    const { serviceId } = useParams()
    return (
        <div>
            <h1>Welcome to service Details:{serviceId}</h1>
            <div className='text-center'>
                <Link to="/cheakout">
                    <button className='btn btn-primary'>Proceed Cheakout</button>
                </Link>
            </div>


        </div>
    );
};

export default ServiceDetail;