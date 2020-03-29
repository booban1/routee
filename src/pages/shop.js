import React, {useState, useEffect} from 'react';
import {link, Link} from 'react-router-dom'
function Shop() {

     useEffect(
        ()=> {
            fetchItems();
        },[]
    );

    const [items, setItems] = useState([]);

    const fetchItems = async () =>{
        const data = await fetch('https://fortnite-public-api.theapinetwork.com/prode9/upcoming/get');
        
        const items = await data.json();
        console.log(items); 
        setItems(items.items);
    };

      return (
      <div>
        {items.map(item => (
            <h1> {item.name}</h1>
                       
        ))}
      </div>
    
  );
}

export default Shop;
