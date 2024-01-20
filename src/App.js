import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import userActions from './actions/userActions';

const App = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();
  
  const user = { name: 'User'};

  useEffect(() => {
    dispatch(userActions.login(user))
  });

  return (
    <div className='app'>
      {currentUser.loggedIn ?
      (<>
        <h1>Hi, {currentUser.user.name}</h1>
        <button onClick={()=> dispatch(userActions.logout())}>logout</button>
      </>
      ) : (
        <>
          <h1>Login</h1>
          <button onClick={()=> dispatch(userActions.login(user))}>
            Logged in as a User
          </button>
        </>
      )}
    </div>
  );
};

export default App;
