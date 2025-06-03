const LogoutButton = () => {
  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    window.location.href = '/login';
  };

  return (
    <button className="cursor-pointer" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;