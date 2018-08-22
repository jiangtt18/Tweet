import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  componentWillUnmount(){
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    this.props.history.push('/tweets');
    this.props.closeModal();
  }

  renderErrors() {
    return(
      <ul className='error'>
        {this.props.errors.map((error,i) => (
          <li key = {`errors-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }


  render() {

    return (
      <div>
        <form className='session-form' onSubmit={this.handleSubmit} >
          <div className='title'>Let’s get you signed up</div>
          <div>

          <div
            onClick={this.props.closeModal}
            className="close-x">
            <i className="fa fa-times"></i>
          </div>

          {this.renderErrors()}
          <br/>

            <input
              placeholder='username'
              type="text"
              value={this.state.username}
              onChange={this.update('username')}
            />
            <br/>

            <input
              placeholder='Password'
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"
            />
            <br/>
            <input type="submit" value={this.props.formType} />

              <div className='redirect'>
                <span> Already have an account?</span>
                <span><button style={{'color': '#008489'}}
                  onClick={() => this.props.otherForm()}>
                  Log in
                </button></span>
              </div>
          </div>
        </form>
      </div>
    );
  }
}
export default withRouter(SessionForm);
