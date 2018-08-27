import React from 'react';

class TweetIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleTimeOutput = this.handleTimeOutput.bind(this);
  }

  handleDelete(e){
   e.preventDefault();
   this.props.deleteTweet(this.props.tweet.id);
  }

  handleTimeOutput(date){
    let dates = date.toDateString().split(' ');
    let month = dates[1];
    let day = dates[2];
    let hour = date.getHours();
    if(hour < 10) hour = '0'+hour;
    let minute = date.getMinutes();
    if(minute < 10) minute = '0' + minute;
    return `${month} ${day} ${hour} : ${minute}`;
  }


  render(){
    const {full_text,created_at} = this.props.tweet;
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
          {this.handleTimeOutput(date)}
        </li>
        <li><button onClick = {this.handleDelete}>delete</button></li>
        </ul>
      </header>
      <p id = 'comment'>{full_text}</p>
      </div>
      </li>
    );
  }
}

export default TweetIndexItem;
