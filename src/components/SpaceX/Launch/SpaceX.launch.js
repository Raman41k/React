import React from 'react';

import "./SpaceX.launch.css"

const SpaceXLaunch = (props) => {

    let {launches} = props;

    return (
        <div className={"spaceXLaunchContainer"}>

                <h2>{launches.mission_name}</h2>
                <h3>{launches.launch_year}</h3>
                <img className={"spaceXLaunchImg"} src={launches.links.mission_patch} alt={launches.mission_name}/>

        </div>
    );
};

export default SpaceXLaunch;