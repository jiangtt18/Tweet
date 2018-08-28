import React from 'react';
import { Link,withRouter, Redirect } from 'react-router-dom';


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
          <div className='left_nav'>
           <a href='#'>
             <img
             src='http://res.cloudinary.com/doohtqbau/image/upload/v1534984701/10wmt-articleLarge-v4_kzakqj.jpg'
             alt='logo'/>
          </a>
          </div>
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
                    .then(() => this.props.history.push('/tweets'))
                }> demo
              </button>
            </li>
          </ul>
        </nav>
        <Redirect to="/" />
      </header>

    );

    const personalGreeting = () => (
      <header className='header'>
        <nav className="header_nav">

          <div className='left_nav'>
           <a href='#'>
             <img
             src='http://res.cloudinary.com/doohtqbau/image/upload/v1534984701/10wmt-articleLarge-v4_kzakqj.jpg'
             alt='logo'/>
          </a>
          </div>

          <ul className='right_nav'>
            <li  id= 'welcome'>Hi, {currentUser.username}!</li>
            <li><button onClick={()=>this.props.history.push('/tweets')}>
              My Tweet Wall</button></li>
            <li><button
              onClick={logout}>
              Log Out</button>
            </li>
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
