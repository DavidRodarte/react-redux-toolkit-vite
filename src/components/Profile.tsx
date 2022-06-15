import { useSelector } from "react-redux"

export const Profile = () => {
  const user = useSelector((state: any) => state.user.value);
  const theme = useSelector((state: any) => state.theme.value);
  return (
    <div style={{color: theme}}>
      <h1>Profile page</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  )
}
