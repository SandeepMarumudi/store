import { Link, NavLink, Outlet } from "react-router-dom"





const Categories=()=>{

    return(
        <>
      <NavLink to="jewelery">Jewelery</NavLink>
      <NavLink to="electronics">Electronics</NavLink>
      <NavLink to="men's">Men's clothing</NavLink>
      <NavLink to="women's">Women's clothing</NavLink>
      <Outlet/>
        
        </>

    )
}
export default Categories