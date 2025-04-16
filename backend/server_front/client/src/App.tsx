import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [list, setList] = useState([])
  const GetUsersList = () => {
    fetch('http://localhost:3000/api')
    .then((res) => res.json())
    .then((res) => {
      setList(res.users)
      console.log('ree', res);
    })
  }

  useEffect(() => GetUsersList(), [])

  return (
    <>
      {list?.map((el) => (
        <p key={el}>
          {el}
        </p>
      ))}
    </>
  )
}

export default App
