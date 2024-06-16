import React from "react";
import '../stylesheets/card-highlights.css';

function CardHighlight({classSN, logoSocialNetwork, alt, User, numFollowers, kind, upDown, classToday}) {


    return (
        <div className={`card-highlight ${classSN}`} id="card-highlight">
            <div className="logo-user">
                <img 
                    src={logoSocialNetwork} 
                    alt={alt}  />
                <h4>{User}</h4>
            </div>

            <h1>{numFollowers}</h1>
            <h3>{kind}</h3>
            <div className="difference">
                <img src={upDown} alt='Variances' />
                <h5 className={`${classToday}`}>Today</h5>
            </div>   

        </div>
    )
}

export default CardHighlight;