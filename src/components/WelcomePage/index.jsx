const WelcomePage = ({ user, setIsLoggedIn }) => {
  const HandleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <>
      <span>Welcome, {user}!</span>
      <button onClick={HandleLogout}>Enter</button>
    </>
  );
};

export default WelcomePage;
