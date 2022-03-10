import React from "react";
import axios from 'axios';

const CorsProxy = () => {
    const getAPI = async () => {
        const res = await axios.get('/api/users')
        console.log(res);

    }
    return (<div>
        <button type="button" onClick={getAPI}>localAPI</button>
    </div>);
}

export default CorsProxy;
