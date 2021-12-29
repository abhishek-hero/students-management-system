import React from "react";
import { GoogleLogin } from "react-google-login";
import { GoogleLogout } from "react-google-login";

export const Admin = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  const logout = () => {
    console.log("logout successfull");
  };

  return (
    <>
      <GoogleLogin
        clientId="684561352095-ug33u9j6h8c6scve0d86lh42qd7v6osc.apps.googleusercontent.com"
        render={(renderProps) => (
          <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
            This is my custom Google button
          </button>
        )}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
        hostedDomain={".masaischool.com"}
      />

      <GoogleLogout
        clientId="684561352095-ug33u9j6h8c6scve0d86lh42qd7v6osc.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={logout}
      ></GoogleLogout>
    </>
  );
};
