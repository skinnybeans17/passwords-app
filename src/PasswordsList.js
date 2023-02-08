import { useSelector, useDispatch } from 'react-redux'
import { deletePassword } from './features/passwords/passwordsSlice'

function PasswordsList() {
  const passwords = useSelector(state => state.passwords.value)
  const dispatch = useDispatch()
  return (
    <ul>
      {passwords.map((password, i) => (
        <li key={`${i}-item`}>{password.name} : {password.password} : {password.importance} : {password.date}
        <button onClick={()=>{
          console.log("delete", i)
          dispatch(deletePassword(i))
        }}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default PasswordsList