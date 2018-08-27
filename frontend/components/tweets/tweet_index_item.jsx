import React from 'react';
import Parser from 'html-react-parser';

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



  parseWords(arr) {
    return arr.map((word)=>{
      return word[0] === '@'
      ? <button onClick={()=>this.props.createTweet({body: word})}> {` ${word}`}</button>
      : ` ${word}`;
    }
  );
  }



  render(){
    const {full_text,created_at} = this.props.tweet;

    const words = full_text.split(' ');
    const parsed = this.parseWords(words);

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
      <p id = 'comment'>{parsed}</p>
      </div>
      </li>
    );
  }
}

export default TweetIndexItem;
