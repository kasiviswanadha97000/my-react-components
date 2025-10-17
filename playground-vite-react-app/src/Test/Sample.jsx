import React from "react";

export default function Sample() {
    const [userList, setUserList] = React.useState([]);

    React.useEffect(() => {
        getUserList();
    }, [])

    function getUserList() {
    try{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(resp => resp.json())       
        .then(resp => setUserList(resp))
        .catch(err => console.log("Error ------>", err))
        }
        catch(error) {
           console.log("error - userList", error);
        }
    }
    
  return (
      <>
          <h2>Hellow</h2>
     
          {
              userList?.map((_) => (
                  <li key={_?.id}>{_?.name}</li>
              ))               
          }        
     
    </>
  );
}