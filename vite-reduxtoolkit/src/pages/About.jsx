import { useAuth } from '../store/auth'
const About = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <>
      <h1>
        <div>Welcome, {user ? ` ${ user.username} to our website` : `to our website`}</div>
        This is About pages component
      </h1>
    </>
  )
}

export default About
