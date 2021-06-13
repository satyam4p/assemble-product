import React,{ useContext } from 'react';
import chairPart1 from '../media/assemble/ChairPart1.jpg';
import charPart2 from '../media/assemble/charPart2.jpg';
import charLeg1 from '../media/assemble/charLeg1.jpg';
import chariLeg2 from '../media/assemble/chariLeg2.jpg';
import chariPart3 from '../media/assemble/chariPart3.jpg';
import screws from '../media/assemble/screws.jpg';
import '../styles/productParts.css';
import { Link } from 'react-router-dom';
import {productContext} from '../productContext/context';


const objArr = 
[
    {
        id:1,
        chairPart:"back Support",
        path:chairPart1
    },
    {
        id:2,
        chairPart:"Seat Support",
        path:charPart2
    },
    {
        id:3,
        chairPart:"Chair Leg set 1",
        path:charLeg1
    },
    {
        id:4,
        chairPart:"Chair Leg set 2",
        path:chariLeg2
    },
    {
        id:5,
        chairPart:"Chair support 3",
        path:chariPart3
    },
    {
        id:6,
        chairPart:"Screws",
        path:screws
    }
]


const ProductParts =()=>{
    const {data, setData, products, setProducts}=useContext(productContext);
    const handleSelect=(event)=>{
        const productsInCart = [...products];
        const values = [...data];
        const checked=event.target.checked;
        if(checked){
            values.push(event.target.name);
            let item = objArr.find(obj=>obj.id===parseInt((event.target.name)));
            productsInCart.push(item);

        }else{
            const idx = values.findIndex(ix=>ix===event.target.name);
            values.splice(1,idx);
            let itemIdx = objArr.findIndex(obj=>obj.id===event.target.name);
            productsInCart.splice(1,itemIdx);
        }
        setData(values);
        setProducts(productsInCart);
    }

    return(
        <div className="container">
        <p  className="header">Choose your product parts</p>
            <div className="product-parts-container">
                {objArr.map((part,index)=>{
                    return(
                            <div className="product-part">
                                <img src={part.path} alt="part-x"/>
                                <p>{part.chairPart}</p>
                                <input type="checkbox" name={part.id} onChange={handleSelect}/>
                            </div>
                    ) 
                })}
             </div>
             <Link to="/drag-drop"><button className="next-btn">Next</button></Link>
        </div>
    );
}


export default ProductParts;