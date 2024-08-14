import React,{useContext} from "react";
import{UserContext}from "./ComponentA.jsx"

function ComponentD(){

    const user=useContext(UserContext);

return(<div className='box'>
    <h1>ComponetD </h1>
    <h2>{`Byb ${user} `}</h2>

</div>)
}
export default ComponentD