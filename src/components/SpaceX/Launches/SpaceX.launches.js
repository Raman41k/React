import React, {useEffect, useState} from 'react';

import "./SpaceX.launches.css"
import {getLaunches} from "../../../services/spacex.data";
import SpaceXLaunch from "../Launch/SpaceX.launch";

const SpaceXLaunches = () => {

    let [launches,setLaunches] = useState([]);

    useEffect(() => {
        getLaunches().then(value => setLaunches(value.data))
    }, [])

    return (
        <div className={"spaceXFather"}>
            {launches.slice(0,86).map(value => <SpaceXLaunch key={value.flight_number} launches={value}/>)}
        </div>
    );
};

export default SpaceXLaunches;