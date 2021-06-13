import {  useContext } from 'react';
import { productContext} from '../productContext/context';
import { Link } from 'react-router-dom';
import '../styles/dragDrop.css'
const DragAndDrop=()=>{
    const {products, dropProducts, setDropProducts}=useContext(productContext);
    const handleDragover=(e)=>{
        e.preventDefault();
    }
    const handleDragStart=(e,id)=>{
        e.dataTransfer.setData("id",id);
    }
    const handleDrop=(e)=>{
        const droppedProducts = [...dropProducts];
        const id = e.dataTransfer.getData("id");
        const product = products.find(prd=>prd.id === parseInt(id));
        if(product){
            if(undefined === droppedProducts.find(prd=>prd.id === product.id)){
                droppedProducts.push(product);
                setDropProducts(droppedProducts);
            }            
        }
        
    }
 
    return(
        <div className="drag-drop-conatiner">
            <div className="verticalView">
                {products.length > 0 ? products.map((prd,index)=>{
                    return(
                        <div onDragStart={e=>handleDragStart(e,prd.id)} draggable className="products-to-drag" key={index}>
                            <img src={prd.path} alt="prd-x"/>
                            <p>{prd.chairPart}</p>
                        </div>
                    )
                }) : 
                <div>You have not selected any products</div>
                }
            </div>
            <div className="assemble-zone">
                <div className="droppable-zone" onDrop={handleDrop} onDragOver={handleDragover}>
                    {dropProducts.map((drpPrd,index)=>{
                        return(
                            <div className="droppable-prodcuts" key={index}>
                            <img src={drpPrd.path} alt="drpPrd-x"/>
                            <p>{drpPrd.chairPart}</p>
                        </div>
                        );
                    })}
                </div>
                <Link to="/final-product" ><button>See final product</button></Link>
            </div>
             
        </div>
    )
}

export default DragAndDrop;