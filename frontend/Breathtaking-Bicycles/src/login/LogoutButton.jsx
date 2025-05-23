//is alleen voor het testen voor inloggen kan gebruikt worden voor uitloggen
const LogoutButton = () => {
  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    window.location.href = '/login';
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
