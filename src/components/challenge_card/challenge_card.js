import React from "react";
import "./chalenge_card.css";
const Card = (props) => {
   

    return(
            <div className="card" style={{width:"12rem"}} onClick={event => window.location.href=props.link}>
                <img src={props.image} alt="" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">
                        {props.title}
                    </h5>
                    <p className="card-text">
                        {props.disc}
                    </p>
                </div>
            </div>
        
        
    );
}

export default Card;
