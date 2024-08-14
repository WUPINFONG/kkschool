import React,{useState} from 'react';


function MyComponent2(){

const[name,setName] =useState("Bob")

const[quantity,setQuantity]=useState(1);
const[comment,setComment]=useState("");
const[payment, setPayment]=useState ("");
const[shipping,setshipping]=useState();
function handleNameChage(event){
    setName(event.target.value);
}
function handleQuantityChange(event){
    setQuantity(event.target.value);

} 
function handleCommentChange(event){
    setComment(event.target.value);

}
function handlepaymentChange(event){
    setPayment(event.target.value);
}

function handleShippingChang(event){
    setshipping(event.target.value);
}


return(
        <div>
            <input value={name} onChange={handleNameChage}/>
            <p>Name:{name}</p>
            <input value={quantity} onChange={handleQuantityChange} type='number'/>
            <p>Quantity:{quantity}</p>
             <textarea value={comment} onChange={handleCommentChange}
             placeholder='Enter delivery instructions'/>
             <p>comment:{comment}</p>
            <select value={payment} onChange={handlepaymentChange}>

            <option value="">select an option</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment:{payment}</p>
        
            <label>
                <input type="radio" value="Pick up"
                    checked={shipping === "Pick up"}
                    onChange={handleShippingChang}/>
                    
                    Pick up
                    
                    </label>
            <label>
            <input type="radio" value="Delivery"
                    checked={shipping === "Delivery"}
                    onChange={handleShippingChang}/>
             Delivery
            </label>
            <p>shipping:{shipping}</p>
        
        </div>
    );
}
export default MyComponent2