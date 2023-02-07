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

const styles = {
    button: {
    width: '100%',
    margin:'0.5em 0',
    padding: '0.5em',
    border: '4px solid #4687D3',
    borderRadius: '6px',
    background: '#4A90E2',
    color: '#fff'
    }
   }

function Password() {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [password, setPassword] = useState('p@$$w0rd')

  return (
  <div>
    <input
        placeholder="Enter Your Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}/>
    <input 
    type="text"
    onChange={(e) => setPassword(e.target.value)}
    value={password}
    />
    <div>
      <button className='button' onClick={(e) => {
        setPassword(generatePassword())
      }}>Generate</button>
      <button style={styles.button} onClick={(e) => dispatch(addPassword(name, password))}
        >Save</button>
    </div>
  </div>
  )
}

    function strengthCheck(password) {
        const passwordStrength = zxcvbn(this.state.password)
        return passwordStrength(password)
    }
    console.log(strengthCheck)

export default Password