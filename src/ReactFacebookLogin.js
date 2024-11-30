import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";

const ReactFacebookLogin = () => {
  const [accessToken, setAccessToken] = useState("");
  const [accessname, setAccessname] = useState("");
  const [accessid, setAccessid] = useState("");

  const componentClicked = (data) => {
    // console.log("data", data);
  };

  const responseFacebook = (response) => {
    // console.log(response);
    setAccessToken(response.accessToken);
    setAccessname(response.name);
    setAccessid(response.id);
  };

  return (
    <div>
      React Facebook Login
      <br />
      User Short-Lived Access Token:
      <br />
      {accessToken}
      <br />
      <br />
      {accessid}
      <br />
      <br />
      {accessname}
      <br />
      <FacebookLogin
        appId="936346908304074"
        autoLoad={false}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
      />
    </div>
  );
};

export default ReactFacebookLogin;
