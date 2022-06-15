import { useDispatch } from "react-redux"
import { login, logout } from '../features/user'

export const Login = () => {
  const dispatch = useDispatch();

  return (
  <>
    <button onClick={() => dispatch(login({name: "David", age: 24, email: "drh697@gmail.com"}))}>Login</button>
    <button onClick={() => dispatch(logout())}>Login</button>
  </>
  )
}

