import logo from './logo.svg';
import './App.css';
import LoginButton from './components/LoginButton';
import Profile from './components/Profile';
import LogoutButton from './components/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react'
function App() {
  const { isAuthenticated , isLoading} = useAuth0()
  if(isLoading) return <h1>Loading....</h1>
  return (
    <div className="App">
      <h1>Application</h1>
      <div>
        {

          isAuthenticated ?
            <LogoutButton />
            :
            <LoginButton />
        }


      </div>

      <Profile />

    </div>
  );
}

export default App;
