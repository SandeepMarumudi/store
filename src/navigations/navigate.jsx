import { Route, Routes } from "react-router-dom"
import Navbar1 from "../components/Navbar"
import Homescreen from "../Screens/homescreen"
import Allproducts from "../Screens/allproducts"
import Electronics from "../Screens/Elecronics"
import Mensclothing from "../Screens/mensclothing"
import Womensclothing from "../Screens/womensclothing"
import Jewelery from "../Screens/Jewellery"
import Categories from "../Screens/categories"
import Eachproduct from "../Screens/productdetail"





const Navigationrouter=()=>{
    return(
        <>
        <Navbar1/>
        {
            true?
            <Routes>
                <Route path="/" element={<Homescreen/>}></Route>
                <Route path="all" element={<Allproducts/>}></Route>
                <Route path="/products/:productid" element={<Eachproduct/>}></Route>
                <Route path="electronics" element={<Electronics/>}></Route>
                <Route path="men's" element={<Mensclothing/>}></Route>
                <Route path="women's" element={<Womensclothing/>}></Route>
                <Route path="jewelery" element={<Jewelery/>}></Route>
                <Route path="categories" element={<Categories/>}>
                <Route index element={<Electronics/>}></Route>
                <Route path="jewelery" element={<Jewelery/>}/>
                <Route path="electronics" element={<Electronics/>}/>
                <Route path="men's" element={<Mensclothing/>}></Route>
                <Route path="women's" element={<Womensclothing/>}></Route>
                </Route> 
            </Routes>:<Routes>
                <Route path="/" element={<Homescreen/>}></Route>
            </Routes>

        }
        </>

    )
}
export default Navigationrouter