import React from 'react';
import { Link, Redirect } from 'react-router-dom';
//to interact with the state/redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>

          <h1 className='x-large'><i className="fa fa-500px"></i>{' '}Zurrow-9</h1>
          <p className='lead'>
          An online forum to share posts and make discussions.
          </p>
          <div className='buttons'>
            <span className="buttons2">
            <Link to='/register' className='btn btn-success'>
              <span>Sign Up</span>
            </Link>
            </span>
            <Link to='/login' className='btn btn-light'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);