import React from 'react';



class Home extends React.Component {

  render(){
    return(
      <div className='home-page'>
        <img
          className = 'landing-Pic'
          src='http://res.cloudinary.com/doohtqbau/image/upload/v1534984285/Screen_Shot_2018-08-22_at_5.30.52_PM_j2wbi8.png'
          alt='awesome background picture'
        />

      <div className='home-page-right'>
        <div className='home-page-content'>
        <img
          className='bird'
          src='http://res.cloudinary.com/doohtqbau/image/upload/v1534984701/10wmt-articleLarge-v4_kzakqj.jpg'
          alt ='twitter bird'
        />

        <h1>See what’s happening in the world right now </h1>
        <h2>Join Tweets today</h2>
        </div>
      </div>
    </div>
    );
  }
}

export default Home;
