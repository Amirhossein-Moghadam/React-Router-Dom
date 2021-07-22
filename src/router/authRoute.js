import { Redirect } from "react-router-dom";

const AuthRoute = ({ isAuthenticated, children }) => {
  if (isAuthenticated) {
    return children;
  }
  return <Redirect to="/register" />;
};

export default AuthRoute;
