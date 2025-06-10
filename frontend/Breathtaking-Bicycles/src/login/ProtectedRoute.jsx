import { Navigate, Outlet } from 'react-router-dom';

function isTokenValid () {
  const token = localStorage.getItem('jwtToken');
  if (!token) return false;

  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const isExpired = payload.exp * 1000 < Date.now();
    return !isExpired;
  } catch (error) {
    return false;
  }
};

function ProtectedRoute () {
  const isAuthenticated = isTokenValid();
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
