import React from 'react';
import { withRouter } from 'react-router';
import { merge } from 'lodash';

class TweetForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {body:''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearState = this.clearState.bind(this);
  }

  clearState(){
    this.setState({body:''});
  }

  handleSubmit(e){
    e.preventDefault();
    if(Object.values(this.props.currentUser).length!==0){
      const userId = this.props.currentUser.id;
      const tweet = merge({}, this.state,{user_id: userId});
      this.props.createTweet(tweet);
    } else {
      this.props.openModal('login');
    }
  }

  update(field){
    return (e) => this.setState({
        [field]: e.currentTarget.value
      });
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <textarea
          className="tweet-textarea"
          value={this.state.body}
          onChange={this.update('body')}
          />

        <input
          className="submit"
          type="submit"
          value="Submit"
          />
      </form>
    );
  }
}

export default TweetForm
