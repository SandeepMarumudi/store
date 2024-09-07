import { Link, NavLink, Outlet } from "react-router-dom"





const Categories=()=>{

    return(
        <>
      <NavLink to="jewelery"><button>Jewelery</button></NavLink>
      <NavLink to="electronics"><button>Electronics</button></NavLink>
      <NavLink to="men's"><button>Men's clothing</button></NavLink>
      <NavLink to="women's"><button>Women's clothing</button></NavLink>
      <Outlet/>
        
        </>

    )
}
export default Categories