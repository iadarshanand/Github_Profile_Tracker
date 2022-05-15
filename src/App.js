import { useState } from "react";
import "./App.css";
import Form from "./Component/Form";
import Github from "./Component/Github";

function App() {
  const [user, setUser] = useState("");
  const userProfile = (userName) => {
    setUser(userName);
  };
  return (
    <div className="App">
      <h1>GitHub Card</h1>
      <Form userProfile={userProfile} />
      <Github userName={user} />
    </div>
  );
}

export default App;

// https://illustrious-cucurucho-724583.netlify.app/  hoisted link
