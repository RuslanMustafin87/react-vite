import { useEffect, useState } from 'react'
import Spinner from "./Spinner.jsx"

import "./App.scss";

function App() {
  const [people, setPeople] = useState({});

  useEffect(() => {
    fetch("https://reqres.in/api/users?delay=1.5")
      .then( response => response.json())
      .then( data => setPeople(data))
      .catch(() => console.log("Нет данных"))
  },[])

  return (
    <>
      <div className="container">
        <div className="box-center">       
            {
              people.data ? 
                <ul> {people.data.map((item) => (
                  <li key={item.id}>{item.first_name}</li>))} 
                </ul> 
              : <Spinner /> 
            }
        </div>
      </div>
    </>
  )
}

export default App
