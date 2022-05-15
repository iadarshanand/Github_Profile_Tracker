import React, { useState, useEffect } from "react";
import "./Github.css";

const Github = (props) => {
  const [user, setUser] = useState({
    userImg: "",
    reposUrl: "",
    publicRepo: 0,
    followers: 0,
    following: 0,
  });
  //   const[isvalid,setvalid]=useState(true);

  useEffect(() => {
    async function getUser(url) {
      const response = await fetch(url);
      const data = await response.json();
      //   console.log(data);
      if (data.message === "Not Found" && props.userName) {
        setUser({
          userImg: "",
          reposUrl: "",
          publicRepo: 0,
          followers: 0,
          following: 0,
        });
        alert("User is not valid");
        return;
      }

      const { avatar_url, public_repos, followers, following, repos_url } =
        data;

      setUser({
        userImg: avatar_url,
        publicRepo: public_repos,
        followers,
        following,
        reposUrl: repos_url,
      });
    }

    getUser(`https://api.github.com/users/${props.userName}`);
  }, [props.userName]);

  return (
    <div className="userProfile">
      <img src={`${user.userImg}`} alt="profile-pic"></img>
      <h3> {props.userName}</h3>
      <div>Public Repository: {user.publicRepo}</div>
      <div>Followers: {user.followers}</div>
      <div>following: {user.following}</div>
    </div>
  );
};

export default Github;
