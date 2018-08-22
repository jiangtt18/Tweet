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
      <div className='reviewComment'>
      <li >
        <p id='reviewer'>{username}</p>
        <p id='date'>
          {dates[1]} {dates[2]} {date.getHours()} : {date.getMinutes()}
        </p>
        <p id = 'comment'>{body}</p>
      </li>
      </div>
    );
  }
}

export default TweetIndexItem;
