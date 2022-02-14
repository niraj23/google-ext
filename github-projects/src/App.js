import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [repos, setRepos] = useState("");
  const [avatar, setAvatar] = useState("");
  const [error, setError] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [data, setData] = useState("");

  const handleSubmit = () => {
    fetch(`https://api.github.com/users/${userInput}/repos`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setError(data.message);
        } else {
        }
      });
  };

  return <div className="App"></div>;
}

export default App;
