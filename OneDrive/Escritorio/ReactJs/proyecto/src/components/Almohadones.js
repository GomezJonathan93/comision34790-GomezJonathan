import React from "react";
import AlmohadonesItem from "./AlmohadonesItem";

const Almohadones = ({items}) => {
    return (
        <section className="products">
            {
                items.map((item)=>{
                    return <AlmohadonesItem key={item.id} {...item}/>
                })
            }
        </section>
    )
}

export default Almohadones