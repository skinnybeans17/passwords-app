import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPassword } from './features/passwords/passwordsSlice'
import zxcvbn from 'zxcvbn'
import './password.css';

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

function strengthCheck(password) {
    const passwordStrength = zxcvbn(this.state.password)
    return passwordStrength(password)
}
console.log(strengthCheck)

function Password() {
  const dispatch = useDispatch()
  const [password, setPassword] = useState('p@$$w0rd')
  const [name, setName] = useState('')
  const [importance, setImportance] = useState('')
  const [date, setDate] = useState('')

  return (
  <div>
    <input
      placeholder="Enter Your Name"
      type="text"
      onChange={(e) => setName(e.target.value)}
      value={name}
    />
    <input 
      type="text"
      onChange={(e) => setPassword(e.target.value)}
      value={password}
    />
    <input
      placeholder="How Important?"
      type="text"
      onChange={(e) => setImportance(e.target.value)}
      value={importance}
    />
    <input
      placeholder="Date Made"
      type="date"
      onChange={(e) => setDate(e.target.value)}
      value={date}
    />
    <div>
      <button className='button' onClick={(e) => {
        setPassword(generatePassword())
      }}>Generate</button>
      <button className='button' onClick={() => dispatch(addPassword({ name, password, importance, date }))}
        >Save</button>
    </div>
  </div>
  )
}

export default Password