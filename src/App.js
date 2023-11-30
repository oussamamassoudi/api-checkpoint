
import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import Userelist from './components/Userelist';

function App() {
  const [users, setusers] = useState([]);
  useEffect(() => {
   axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>setusers(res.data));
  }, [])
  
  return (
    <Userelist users={users}/>
  );
}

export default App;
