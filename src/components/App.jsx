/* eslint-disable no-unused-vars */
import FriendList from './FriendList';
import Profile from './Profile';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {/* React homework template first */}
      <Profile />
      <FriendList />
    </div>
  );
};
