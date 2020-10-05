import React from "react";

import { connect } from "react-redux";
import { setUserData } from "../../redux/actions/userActions";
import GoogleLogin from "react-google-login";

import Dashboard from "../Dashboard";

function Home(props) {

  const responseFailure = (data) => {
    console.log("some error occured while Google log in..");
    console.log(data);
  };
  const responseGoogle = async (response) => {
    const { name, email, imageUrl } = response.profileObj;
    props.setUserData({ name, email, imageUrl });
  };
  return !props.loggedIn ? (
    <div className="loginBanner">
      Login to continue <br />
      <GoogleLogin
        clientId="365980861837-9iih8cediglpeut3fj7kc8dtt5ovp6v4.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseFailure}
        cookiePolicy={"single_host_origin"}
      >
        Login with Google
      </GoogleLogin>
    </div>
  ) : (
    <Dashboard />
  );
}

function mapStateToProps({ user }, ownProps) {
  return {
    loggedIn: user.name !== undefined,
    ownProps,
  };
}

const mapDispatchToProps = {
  setUserData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
