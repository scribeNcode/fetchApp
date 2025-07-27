import "./App.css";
// import ListComponent from "./components/ListComponent";
import { useEffect, useState } from "react";
import ListComponent from "./components/ListComponent";

function App() {
  let url = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState([]);
  const [errorm, setErrorm] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`an error has occured ${response.status} `);
        }

        const data = await response.json();
        setUsers(data);
        console.log(data)
        setErrorm("");
      } catch (err) {
        console.error("fetching error", err.message);
        setErrorm(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="homeWrapper">
      <h1>List of all our Current Users</h1>
      {errorm && <p>Error : {errorm}</p>}
      {isLoading && <h2>Loading...</h2>}
      <div>{!errorm && !isLoading && <ListComponent items={users} />}</div>
    </div>
  );
}

export default App;
