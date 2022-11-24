import React from "react";
import CarritoItem from "./CarritoItem";

const CarritoList = ({items}) => {
    return (
        <section className="products">
            {
                items.map((item)=>{
                    return <CarritoItem key={item.id} {...item}/>
                })
            }
        </section>
    )
    
}

export default CarritoList