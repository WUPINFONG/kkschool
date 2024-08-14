import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx"
import Card from "./Card.jsx"
import Button from "./Button.jsx"
import Student from "./Student.jsx"
import UserGreeting from "./UserGreeting.jsx"
import List from "./List.jsx"
import Button2 from "./Button2.jsx"
import ProfilePicture from "./ProfilePicture.jsx"
import MyComponent from "./MyComponent.jsx"
import Counter from "./Counter.jsx"
import MyComponent2 from "./MyComponent2.jsx"
import Colorpicker from "./Colorpicker.jsx"
import MyComponent3 from "./Mycomponent3.jsx"
import Mycomponent4 from "./Mycomponent4.jsx"
import Mycomponent5 from "./Mycomponent5.jsx"
import ToDoList from "./ToDoList.jsx"
import Mycomponent6 from "./Mycomponent6.jsx"
import Mycomponent7 from "./Mycomponent7.jsx"
import DigitalClock from "./DigitalClock.jsx"
import ComponentA from "./ComponentA.jsx"
import Mycomponent8 from "./Mycomponent8.jsx"
import React from 'react';
import Stopwatch from "./Stopwatch.jsx"





function App() {
   const fruits=[{id:1,name:"apple",calories:110},
      {id:2,name:"orange",calories:45},
      {id:3,name:"banana",calories:105},
      {id:4,name:"coconut",calories:159},
      {id:5,name:"pineapple",calories:37}];
   const vegyables=[{id:6,name:"potatoes",calories:110},
      {id:7,name:"celery",calories:15},
      {id:8,name:"carrots",calories:25},
      {id:9,name:"corn",calories:63},
      {id:10,name:"broccoli",calories:50}];
      

   return(
  <>
  <Header></Header>
  <Food></Food>
  <Card></Card>
  <Card></Card>
  
  <Student  name="Spongebob" age="30" isStudent={true}></Student>
  <Student  name="Patriack" age={40} isStudent={false}></Student>
  <Student  name="Squidward" age={50} isStudent={false}></Student>
  <Student  name="Sandy" age={20} isStudent={true}></Student>
  <Student  name="Larry"></Student>
  {/*<UserGreeting isLoggedIn={false} ></UserGreeting>
  {fruits.length >0 && <List items={fruits} category="Fruits"></List>}
  {vegyables.length>0 &&<List items={vegyables} category="vegyable"></List>}*/} 

  <DigitalClock />
  <MyComponent/>
  <MyComponent2/>
  <MyComponent3/>
  <Mycomponent4/>
  <Mycomponent5/>
  <Mycomponent6/>
   <Mycomponent7/>
   <Mycomponent8/>
   <Colorpicker/>
  <Counter/>
  <Stopwatch/>
  <Button/>
  <Button2/>
<ToDoList/>
<ComponentA/>

  <ProfilePicture/>
  <Footer></Footer>
  
  
  </>
      
  
  

    
     
    
 

   );
}

export default App
