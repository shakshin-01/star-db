import React from 'react';
import { Redirect } from 'react-router-dom';
import image from '../../images/princess-leia-bikini.png'

const SecretPage = ({ isLoggedIn }) => {

  if (isLoggedIn) {
    return (
      <div className="jumbotron text-center">
        <h3>You are on a secret page!</h3>
        <img src={image} alt={'secret'}/>
      </div>
    );
  }

  return <Redirect to="/login" />;

};

export default SecretPage;
