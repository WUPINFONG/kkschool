import React,{useState} from 'react';
function Mycomponent5(){

const[cars,setCar]=useState([]);
const[carYear,setCarYear]=useState(new Date().getFullYear());
const[carMake,setCarMake]=useState("");
const[carModel,setCarModel]=useState("");

function handleAddcar(){
const newCar={year:carYear,
    make:carMake,
    model:carModel};
setCar(c=>[...cars,newCar]);

setCarYear(new Date().getFullYear());

setCarMake();
setCarModel();


}


function handleRemovercar(index){
setCar(c=>c.filter((_,i)=>i !==index));

}
function handleYearcarChange(event){
setCarYear(event.target.value);

}
function handleMakecarChange(event){
    setCarMake(event.target.value);

}
function handleModelcarChange(event){
    setCarModel(event.target.value);
}





return(<div>

<h2>List of Car objects</h2>
<ul>

{cars.map((car,index)=>

<li key={index} onClick={()=>handleRemovercar(index)}>
    {car.year}{car.make}{car.model}

</li>

)}



</ul>
<input type="number" value={carYear} onChange={handleYearcarChange}/><br/>
<input type="text" value={carMake} onChange={handleMakecarChange}
                placeholder='Enter car make'/><br/>

<input type="text" value={carModel} onChange={handleModelcarChange}
                placeholder='Enter car model'/><br/>
<button onClick={handleAddcar}>Add Car</button>


</div>);

}

export default Mycomponent5