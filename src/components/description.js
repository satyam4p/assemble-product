import React from 'react';
import product from "../media/assemble/fullChair.jpg";
import '../styles/description.css';
import {Link} from 'react-router-dom';
const DescriptionComp=()=>{

    return(
        <div className="main-conatiner">
        <p>Assemble Your Own Chair</p>
        <div className="description">
        
        <div className="img-container">
            <img src={product} alt="original product"/>
        </div>
        <div className="details">
        <p className="product-description-p">
            Lay chair is the result of searching for an alternative way of an assemblable seating solution that aimed to improve sustainable 
            values starting from its reduced volume for transport up to its assembly. The main attention is given to the backrest of the chair
            and to a unidirectional assembly of parts starting from the backrest. The chair is made by layering a seat that fits perfectly
            on an L-shaped backrest and joined together on the chair structure and legs. The layering of the seat and backrest characterizes 
            the aesthetical appearance where the chair exhibits a simple and effortless combination of plywood layers.
        </p>
        <Link to="/product-parts"><button class="start-btn">Start</button></Link>
        </div>
        </div>
        </div>
        
    )
}

export default DescriptionComp;