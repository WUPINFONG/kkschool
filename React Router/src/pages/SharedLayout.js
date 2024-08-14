import {Link,Outlet}from "react-router-dom"
import Navar from '../comporents/Navbar';
import StyledNavbar from '../comporents/StyledNavbar';

const Home = () => {
  return (
    <>
    
    <StyledNavbar/>
   
     
      <Outlet/>
    
    </>
  );
};
export default Home;
