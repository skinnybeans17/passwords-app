import { useState } from 'react'

function random(n) {
    return Math.floor(Math.random() * n)
}

function generatePassword() {
  // generate a password here
  console.log('generating password')
  const str = 'abcdefghijklmnopqrstuvwxyzQWERTYUIOPASDFGHJKLZXCVBNM1234567890';
  const strLength = str[random(str.length)];
  return strLength;
}

function Password() {
  const [password, setPassword] = useState('p@$$w0rd')

  return (
  <div>
    <div>{password}</div>
    <div>
      <button onClick={(e) => {
        setPassword(generatePassword())
      }}>Generate</button>
    </div>
  </div>
  )
}

export default Password