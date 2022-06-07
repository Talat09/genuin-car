import React, { useEffect, useState } from 'react';

const Footer = () => {
    const [date, setDate] = useState();

    const getYear = () => setDate(new Date().getFullYear())


    useEffect(() => {
        getYear();
    }, [])
    return (
        <footer>
            <p><small>&copy; Talat Mahmud - {date}</small></p>
        </footer>
    );
};

export default Footer;