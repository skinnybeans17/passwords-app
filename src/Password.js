import { useState } from 'react'

function generatePassword() {
  // generate a password here
  console.log('generating password')
  const str = 'abcdefghijklmnopqrstuvwxyzQWERTYUIOPASDFGHJKLZXCVBNM1234567890';
  let strLength = "";
  for (let i = 0; i < 8; i++) {
    strLength += str.charAt(
        Math.floor(Math.random() * str.length)
    )};
  return strLength;
}

function Password() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('p@$$w0rd')

  return (
  <div>
    <input
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}/>
    <input 
    type="text"
    onChange={(e) => setPassword(e.target.value)}
    value={password}
    />
    <div>
      <button onClick={(e) => {
        setPassword(generatePassword())
      }}>Generate</button>
    </div>
  </div>
  )
}

export default Password