import React from 'react';
import { withRouter } from 'react-router-dom';

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {password:'', username:''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(type){
    return (e) => {this.setState({[type]: e.target.value});};
  }

  componentWillUnmount(){
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
    this.props.history.push('/tweets');
    this.props.closeModal();
  }

  renderErrors() {
    return(
      <ul className='error' >

        {this.props.errors.map((error,i) => (
          <li key = {`errors-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return(
      <div >
        <form className='session-form' onSubmit={this.handleSubmit}>
          <div className='title'> Log in to Tweets</div>
          <div >
            <br/>
            <div
              onClick={this.props.closeModal}
              className="close-x">
              <i className="fa fa-times"></i>
            </div>

            {this.renderErrors()}
            <br/>

            <input
              placeholder= 'username'
              type='text'
              value={this.state.username}
              onChange={this.update('username')}/>

            <br/>

            <input type="password"
              placeholder=' Password'
              value={this.state.password}
              onChange={this.update('password')}
            />

            <br/>
            <input
              type="submit"
              value={this.props.formType} />
              <div className='redirect'>
                <span> New to Tweets?</span>
                <span>
                  <button
                    style={{'color': '#1c94e0'}}
                    onClick={() => this.props.otherForm()}>
                  Sign up
                  </button><
                /span>
              </div>





          </div>
        </form>

      </div>
    );
  }
}

  export default withRouter(Login);
