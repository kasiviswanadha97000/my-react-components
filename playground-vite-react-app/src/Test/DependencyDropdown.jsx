import React from 'react';

const countries = [
    { name: 'India', value: 'IND', cities: ["Delhi", "Mumbai"] },
    { name: 'America', value: 'USA', cities: ["New York", "Washington"] },
    { name: 'Cenada', value: 'CND', cities: ["Torranto", "Mexio"] }
]

function DependencyDropdown() {
    
    const [cities, setCities] = React.useState([]);

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
        </div>
    )
}

export default DependencyDropdown;
