function Button2(){
let count =0;
const handleClick= (e) =>e.target.textContent ="OUCH";

    

    return(<button onDoubleClick={(e) =>handleClick(e)}>click me 11</button>);
}
export default Button2