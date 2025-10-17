import React, { useContext } from 'react';
import { userContext } from './Comp1.jsx';
import { useDebounce, useDebouncedCallback } from '../useCoustemHook/useDebounce.jsx';

const initalAddUser = {
    id: 0,       
    name: "",
    email: ""
};


export default function Comp4() {
  const [addUser, setUser] = React.useState(initalAddUser);
  const [disableBtn, setDisableBtn] = React.useState(false);
  const  debounceName = useDebounce(addUser.name, 500);
  //const debounceEmail = useDebounce(addUser.email, 500);
  const context = useContext(userContext);
  const debounceBtnSubmit = useDebouncedCallback(handleSubmit, 500);//useTest
  
  //Check debounce values
    React.useEffect(() => {
    if (debounceName) {
      console.log('Debounced search query:', debounceName);
      // call API or perform search
    }
  }, [debounceName]);

  if (!context) {
    console.error("userContext is undefined. Make sure Comp1 is wrapping this.");
    return null;
  }

  const { usersList, setUsersList } = context;  
  // Sunmit button
  function handleSubmit() {   
    // simple validation
    if (!addUser.name || !addUser.email) return; 

    setTimeout(() => setDisableBtn(true), 500)

    const newUser = {...addUser, id: usersList.length+1};
    setUsersList([...usersList, newUser]);
    // clear form
    setUser(initalAddUser);
    
    setDisableBtn(false);
  }


// Reset button
  const handleReset = () => {
     setUsersList([]);
  }

  const handleChange = (e, keyName) => {
    console.log(e.target.value)
    setUser({...addUser, [keyName]: e.target.value});
  }

  return (
    <div>
      comp-4    
      <input 
         type="text" 
         value={addUser.name} 
         onChange={(e) => handleChange(e, "name")}
         required
       />
      <input 
         type="email" 
         value={addUser.email}        
         onChange={(e) => handleChange(e, "email")} 
         required
        />
      <button type="button" disabled={disableBtn} onClick={debounceBtnSubmit}>Submit</button>
      <button type="reset" onClick={handleReset}>Reset</button>
    </div>
  )
}
