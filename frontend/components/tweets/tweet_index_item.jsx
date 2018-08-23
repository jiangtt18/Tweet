import React from 'react';

class TweetIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const {body,created_at} = this.props.tweet;
    const username = this.props.username;
    const date = new Date(created_at);
    const dates = date.toDateString().split(' ');
    return (
      <li className='post'>
      <div className='post-body'>
      <header className='post-header'>
        <ul className='post-header-info'>
        <li id='reviewer'>{username}</li>
        <li id='date'>
          {dates[1]} {dates[2]} {date.getHours()} : {date.getMinutes()}
        </li>
        </ul>
      </header>
      <p id = 'comment'>{body}</p>
      </div>
      </li>
    );
  }
}

export default TweetIndexItem;
