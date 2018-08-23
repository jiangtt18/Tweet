import React from 'react';
import { withRouter } from 'react-router';
import { merge } from 'lodash';

class TweetForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {body:''};
    this.baseState = merge({},{body:''});
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearState = this.clearState.bind(this);
  }

  componentWillUnmount(){
    this.clearState();
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
      <form ref='form' className='form' >
        <fieldset className='form-fieldset'>
          <div className="input">
            <label htmlFor="form-textarea">Post Body</label>
              <textarea
                id="form-textarea"
                value={this.state.body}
                onChange={this.update('body')}
              />
          </div>
          <div className='submit'>
            <button onClick={this.handleSubmit}> Post To Wall</button>
            <span
              className='button-alternative'>
              or <button onClick={this.clearState}><strong >Cancel</strong></button>
          </span>
          </div>
        </fieldset>
      </form>
    );
  }
}

export default TweetForm;
