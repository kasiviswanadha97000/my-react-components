import React from 'react'
import Comp2 from './Comp2';

// eslint-disable-next-line react-refresh/only-export-components
export const userContext = React.createContext();

const userList = [
  {
    id: 1,
    name: "Kasi",
    email: 'kasiviswanadha@outlook.com'
  }
]

export default function Comp1() {
  const [usersList, setUsersList] = React.useState(userList || []);
  const newLocal = { usersList, setUsersList };
  return (
    <center style={{ paddingTop: "45px" }}>
      <div>comp-1</div>
      <userContext.Provider value={newLocal}>
        <Comp2 />
      </userContext.Provider>
      <ul>
        {usersList.length > 0 ? usersList.map((user) => (
          <div key={user?.id}>
            {user?.id} {user?.name} {user?.email}
          </div>
        )) : <></>}
      </ul>
    </center>
  )
}
