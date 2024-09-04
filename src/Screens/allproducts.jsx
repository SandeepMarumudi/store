import React, { useEffect, useState } from "react";
import axios from "axios";


import Card1 from "../components/card";

const Allproducts = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      const result = await axios.get("https://fakestoreapi.com/products");

      if (result.status === 200) {
        setproducts(result.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
    <div style={{display:"flex" ,flexWrap:"wrap",gap:"15px",marginTop:"15px"}}>

      {products.map((each) => (
        <React.Fragment key={each.id}>
          <Card1 title={each.title} text={each.description} img={each.image} id={each.id} />
        </React.Fragment>
      ))}
    </div>
    
    </>
  );
};
export default Allproducts;
