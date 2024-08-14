import React,{useState,useEffect,useRef} from 'react';
function Mycomponent8(){

/*let [number,setNumber]= useState(0);*/
const inputRef1 =useRef(null);

const inputRef2 =useRef(null);
const inputRef3 =useRef(null);



useEffect(()=>{
    console.log("COMONENT RENDEREO");

  
});
function handleClick1(){
inputRef1.current.focus();
inputRef1.current.style.backgroundColor="yellow";
inputRef2.current.style.backgroundColor="";
inputRef3.current.style.backgroundColor="";
}

function handleClick2(){
    inputRef2.current.focus();
    inputRef1.current.style.backgroundColor="";
    inputRef2.current.style.backgroundColor="yellow";
    inputRef3.current.style.backgroundColor="";    
}

    function handleClick3(){
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor="";
        inputRef2.current.style.backgroundColor="";
        inputRef3.current.style.backgroundColor="yellow";
        
    }


    return(
        <div>
        <button onClick={handleClick1}>
            click me1
            </button>
            <input ref={inputRef1}/>
        
            <button onClick={handleClick2}>
            click me2
            </button>
            <input ref={inputRef2}/>

            <button onClick={handleClick3}>
            click me3
            </button>
            <input ref={inputRef3}/>
        
        
        </div>    
    );



}
export default Mycomponent8;