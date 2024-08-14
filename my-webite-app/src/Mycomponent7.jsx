import React,{useState,useEffect} from 'react';
function Mycomponent7(){
    const[width,setWidth]=useState(window.innerWidth);
    const[height,setHeight]=useState(window.innerHeight);

    useEffect(()=>{
        window.addEventListener( "resize",handleResize);
        console.log("EVENT LISTENER ADDED");

        return() =>{
    
            window.removeEventListener("resize",handleResize);
            console.log("EVENT LISTENER REMOVE");
    
    
    
    
        }  
    },[]);


    useEffect(()=>{
        document.title=`Size:${width} x ${height}`;
    },[width,height]);
    
    function handleResize(){
        
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(<>
    <p>windon width:{width}px</p>
    <p>windon height:{height}px</p>

    
    
    </>);
}
export default Mycomponent7;