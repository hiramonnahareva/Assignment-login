import Login from './pages/Login/Login';
import Navbar from './Components/Navbar';
import { useState } from 'react';

function App() {
//   const adminUser = {
//     email: 'eve.holt@reqres.in',
//     password: '5cityslicka'
//  }
//  const [user, setUser] = useState({name: '', email: ''});
//  const [error, setError] = useState('');
//  const Login = details => {
//   console.log(details);
//  }
//  const LogOut = () => {
//   console.log('Logout')
//  }
  return (
    <div className="App">
     {/* <div className="ratio"> */}
      <div className="content">
      <Navbar/>
      <Login/>
      {/* </div> */}
     </div>

    </div>
  );
}

export default App;
