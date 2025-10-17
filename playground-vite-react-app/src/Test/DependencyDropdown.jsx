import React from 'react';
import { useCounter } from '../hooks/useCoustemHook/useCounter';

const countries = [
    { name: 'India', value: 'IND', cities: ["Delhi", "Mumbai"] },
    { name: 'America', value: 'USA', cities: ["New York", "Washington"] },
    { name: 'Cenada', value: 'CND', cities: ["Torranto", "Mexio"] }
];

function DependencyDropdown() {
    
    const [cities, setCities] = React.useState([]);
    const {count, increment, decrement} = useCounter();

    const handleChange = (e) => {
        var i = e.target.value; 
        if(!i)
            return;

        const citiesList = i && countries.filter((x) => x.name === i)[0].cities;
        setCities(citiesList);
        console.log(citiesList);
    }

    return (
        <div style={{ paddingTop: "100px", margin: "0px 25px" }}>
            <select onChange={handleChange}>
                <option key={"option"}></option>              
                {countries.map((item) => (<option key={item.value}>{item.name}</option>))}                
            </select>
            {cities ?
                <select>
                    {cities.map((x) => <option key={x}>{x}</option>)}                    
                </select>
                : <></>}
            <center>
                <button onClick={increment}>+</button>
                <div>{count}</div>
                <button onClick={decrement}>-</button>
            </center>
        </div>
    )
}

export default DependencyDropdown;
