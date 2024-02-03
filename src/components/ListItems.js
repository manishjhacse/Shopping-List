import React, { useState } from "react";
import Item from "./Item";

export default function ListItems({ items,setItems }) {
  const [activeItems, SetactiveItems] = useState([]);
  function onBuyButton(item, event) {
    if (activeItems.includes(item)) {
      let newitems = activeItems.filter((i) => i !== item);
      SetactiveItems(newitems);
    } else {
      let newitems = [...activeItems, item];
      SetactiveItems(newitems);
    }
  }
  function handleClose(item){
    let newitems = activeItems.filter((i) => i !== item);
    SetactiveItems(newitems);
    newitems= items.filter((i)=>i!==item)
    setItems(newitems)
  }

  return (
      <ul>
        {items.map((item) => {
          return (
            <Item
              key={item}
              item={item}
              bought={activeItems.includes(item)}
              handleBuyButton={(event) => onBuyButton(item, event)}
              handleClose={()=>handleClose(item)}
            />
          );
        })}
      </ul>
  );
}
