import React from "react";
import '../stylesheets/card-overview.css';


function CardOverview({Concept,Amount, snLogo, alt, upDown, classToday, Difference}) {
    return (
            <div className="overview">
                <div className="card-overview">
                    <h5>{Concept}</h5>
                    <h2>{Amount}</h2>
                    <img src={snLogo} alt={alt} />
                    <div className="difference-overview">
                        <img src={upDown} alt='Variances' />
                        <h5 className={`${classToday}`}>{Difference}</h5>
                    </div>
                </div>
            </div>
    )
}

export default CardOverview;