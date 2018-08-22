import React from 'react';
import { Link,withRouter } from 'react-router-dom';


class NavBar extends React.Component{
  constructor(props){
    super(props);
    this.state={
      location:''
    };
  }

  update(property) {
    return e => {
      this.setState({[property]: e.target.value});
    };
  }


  render(){
    const {
      currentUser,
      login,
      logout,
      openModal,
    } = this.props;

    const sessionLinks = () => (
      <header className='header'>
        <nav className="header_nav">
          <ul >
            <li>
              <button onClick={() => openModal('login')}>Login</button>
            </li>
            <li>
              <button onClick={() => openModal('signup')}>Signup </button>
            </li>
            <li>
              <button
                onClick={
                  ()=>login({username: 'DemoUser', password:'PASSWORD'})
                }> demo
              </button>
            </li>
          </ul>
        </nav>
      </header>
    );

    const personalGreeting = () => (
      <header className='header'>
        <nav className="header_nav">
          <ul className='right_nav'>
            <li  id= 'welcome'>Hi, {currentUser.username}!</li>
            <li><button onClick={logout}>Log Out</button></li>
          </ul>
        </nav>
      </header>
    );

    return (
      currentUser ?
      personalGreeting(currentUser, logout) :
      sessionLinks()
    );
  }

}

export default withRouter(NavBar);
