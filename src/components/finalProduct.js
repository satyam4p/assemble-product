import React,{ useState,  useContext, useEffect } from 'react';
import {productContext} from '../productContext/context';
import fullChair from '../media/assemble/fullChair.jpg';
import halfChair1 from "../media/assemble/fourLegsSeat.jpg";
import halfChair2 from "../media/assemble/withoutFrontLegs.jpg";
import halfChair3 from "../media/assemble/withoutBackLegs.jpg";
import unscrewed from '../media/assemble/withoutScrew.jpg';
import withoutLegs from '../media/assemble/withoutLegs.jpg';
import '../styles/finalProduct.css';
const FinalProduct=()=>{
    const [finalProduct,setFinalProduct] = useState("");
    const { data, dropProducts } = useContext(productContext);
    useEffect(()=>{
        let prods = [];
        for(let prd of dropProducts){
            prods.push(prd.id);
        }
        if(prods.length === data.length){
            setFinalProduct(fullChair);
        }
        if(!prods.includes(6)){
            setFinalProduct(unscrewed);
        }
        else if(!prods.includes(1)){
            setFinalProduct(halfChair1);
        }
        else if(!prods.includes(4) && !prods.includes(3)){
            setFinalProduct(withoutLegs);
        }
        else if(!prods.includes(3)){
            setFinalProduct(halfChair2);
        }
         else if(!prods.includes(4)){
            setFinalProduct(halfChair3);
        }else{
            setFinalProduct(fullChair);
        }
    },[dropProducts,data.length]); 
    return(
        <div className="final-product-container">
            <p>Final Product </p>
            {finalProduct===unscrewed ?
                <div className="final-product-img">
                <img src={finalProduct} alt="chair-x"/>
                <p>Please choose screws to assemble items</p>            
                </div> : 
                <div className="final-product-img">
                    <img src={finalProduct} alt="chair-x"/>
                </div>
            }
        </div>
    );
}

export default FinalProduct;