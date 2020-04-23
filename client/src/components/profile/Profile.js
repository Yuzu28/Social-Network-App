import React, { Fragment, useEffect}from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getProfileById} from '../../actions/profile';
import ProfileTop from '../profile/ProfileTop'
import ProfileAbout from '../profile/ProfileAbout';
import ProfileEducation from '../profile/ProfileEducation';
import ProfileExperience from '../profile/ProfileExperience';
 
const Profile = ({getProfileById, profile: { profile, loading }, auth, match}) => {
    useEffect(() => {
      getProfileById(match.params.id);
    }, [getProfileById, match.params.id]);

    return (
      <Fragment>
        <div className="margins">
        {profile === null || loading ? (
          <Spinner />
        ) : (
          <Fragment>
            <Link to='/profiles' className='btn btn-success'>
              Back To Profiles
            </Link>
            {auth.isAuthenticated &&
              auth.loading === false &&
              auth.user._id === profile.user._id && (
                <Link to='/edit-profile' className='btn btn-dark'>
                  Edit Profile
                </Link>
              )}
            <div className='profile-grid my-1'>
                <ProfileTop profile={profile} />
                <ProfileAbout profile={profile} />
            </div>

            {/* experience section */}
            <div className='profile-exp bg-white p-2'>
                <h2 className='text-primary'>Experience</h2>
                {profile.experience.length > 0 ? (
                <Fragment>
                {profile.experience.map(experience => (
                <ProfileExperience
                key={experience._id}
                experience={experience}
                />
                ))}
                </Fragment>
                ) : (
                <h4>No experience credentials</h4>
              )}
            </div>

            {/* education section */}
            <div className='profile-edu bg-white p-2'>
              <h2 className='text-primary'>Education</h2>
              {profile.education.length > 0 ? (
                <Fragment>
                  {profile.education.map(education => (
                    <ProfileEducation
                      key={education._id}
                      education={education}
                    />
                  ))}
                </Fragment>
              ) : (
                <h4>No education credentials</h4>
              )}
            </div>

          </Fragment>
        )}
        </div>
      </Fragment>
    );
  };

Profile.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
  };

const mapStateToProps = state => ({
    profile: state.profile,
    //see if the user is logged in
    auth: state.auth
})
export default connect(mapStateToProps, { getProfileById })(Profile);