import React, { useContext } from "react";
import { GoogleLogin } from "react-google-login";
import { GoogleLogout } from "react-google-login";
import "./admin.css";
import { AuthContext } from "../../contexts/AuthContext";
import { StudentForm } from "../Student/StudentForm";
import { Link } from "react-router-dom";

export const Admin = () => {
  // user context
  const { handleUser, user } = useContext(AuthContext);

  const responseGoogle = (response) => {
    handleUser(response.accessToken);
  };

  const logout = () => {
    handleUser("");
    console.log("logout successfull");
  };

  return (
    <>
      {!user ? (
        <div>
          <h2>Admin Panel</h2>
        </div>
      ) : (
        ""
      )}
      <div>
        {!user ? (
          <div className="mainbox">
            <h4 className="login-text">Login using google</h4>
            <GoogleLogin
              clientId="684561352095-ug33u9j6h8c6scve0d86lh42qd7v6osc.apps.googleusercontent.com"
              render={(renderProps) => (
                <button
                  className="btn btn-primary login-btn"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  Login
                </button>
              )}
              // buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
              // hostedDomain={"masai.school"}
            />
          </div>
        ) : (
          <>
            <div className="mainbox-logout">
              <h3>Admin Panel</h3>

              <Link to="/students">
                <button className="btn btn-dark mx-4">Students</button>
              </Link>
              <Link to="/contests">
                <button className="btn btn-dark mx-2">Contests</button>
              </Link>

              <GoogleLogout
                clientId="684561352095-ug33u9j6h8c6scve0d86lh42qd7v6osc.apps.googleusercontent.com"
                // buttonText="Logout"
                render={(renderProps) => (
                  <button
                    className="login-btn btn btn-danger"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    Logout
                  </button>
                )}
                onLogoutSuccess={logout}
              ></GoogleLogout>
            </div>

            <div>
              <StudentForm></StudentForm>
            </div>
          </>
        )}
      </div>
    </>
  );
};
