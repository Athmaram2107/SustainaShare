import './index.css'
import { useEffect,useState } from 'react';
import axios from 'axios';


function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
  /*  fetch("http://localhost:4000/") // Fetch from your backend
    .then((response) => response.text()) // Convert response to text
    .then((data) => setMessage(data)) // Store the response in state
    .catch((error) => console.error("Error:", error));
  }, []);*/
  axios.get("http://localhost:4000/") // Fetch from backend
  .then((response) => setMessage(response.data)) // Store response
  .catch((error) => console.error("Error:", error));

 
},[]);
return <div className="p-10 bg-green-600 text-xl">{message || "Loading..."}</div>;
}


export default App;
