import React, {useEffect, useState} from 'react'

const App = () => {
  const [name, setName] = useState('');
  const [Lastname, setLastname] = useState('');
  const [Fullname, setFullname] = useState('');

  useEffect(() => {
    setFullname(`${name} ${Lastname}`)
  }, [name, Lastname])

  const handleInputName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleInputLastname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastname(e.target.value)
  }


  return <>
  <div className="app">
    <input type="text" 
    value={name}
    onChange={handleInputName}/>
    <br/> <br/>
    <input type="text" 
    value={Lastname}
    onChange={handleInputLastname}/>
    <br/> <br/>
    <p>Full name: {Fullname}</p>

    <hr/>
  </div>
  </>
}

export default App