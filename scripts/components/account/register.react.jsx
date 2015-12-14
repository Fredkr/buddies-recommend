import React from 'react';

export default class Register extends React.Component {
    render() {
        return (
          <div className="account-box center-self">
            <div className="content center-items">
                <form className="center-items">
                  <input
                      name="email"
                      placeholder="email"
                      type="email"/>
                  <input
                      name="password"
                      placeholder="password"
                      type="password"/>
                  <div className="btn btn-transparent"
                      type="button">Create Account
                  </div>
                </form>
                <div className="btn btn-transparent"
                    onlogin="checkLoginState();"
                    type="button">
                    Use Facebook
                </div>
            </div>
            <div className="bottom-redirect-message center-items">
                <span>Already have an account? <a href="/login">Log in!</a></span>
            </div>
        </div>);
    }
}
