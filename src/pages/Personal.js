import React from 'react';

const Personal = () => {
  return (
    <div id="personal">
      <img id="profile" src={require('../images/profile2.jpg')} alt="" />
      <p className="profile-desc">Hey there! Thanks for stopping by. Feel free to send me a note if you have an encouraging word (or any words at all). I begin every day with my goal to become better at something than I was yesterday. Sometimes that looks unattainable, but the long term outlook exceeds.</p>
      <p className="profile-desc">I guess that's just symbiotic of life in general.</p>
      <p className="profile-desc">-Logan</p>
    </div>
  )
}

export default Personal