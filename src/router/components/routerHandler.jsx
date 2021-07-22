import { Route, Switch } from "react-router-dom";
import AuthRoute from "./../authRoute";
import routes from "./../routes";

const RouterHandler = () => {
  const isAuthenticated = false;

  return (
    <Switch>
      {routes
        .filter((route) => route.needAuthentication)
        .map((routeItem, key) => {
          return (
            <AuthRoute isAuthenticated={isAuthenticated} key={key}>
              <Route
                path={routeItem.path}
                exact={routeItem.exact}
                // render={(routeProps) => (
                //   <routeItem.component routeProps={routeProps} />
                // )}
                component={routeItem.component}
              />
            </AuthRoute>
          );
        })}
      {/* {routes.map((routeItem, key) => {
        if (routeItem.needAuthentication) {
          console.log("ddddddddddddddddddddddddd");
          return (
            <AuthRoute isAuthenticated={isAuthenticated} key={key}>
              <Route
                path={routeItem.path}
                exact={routeItem.exact}
                render={(routeProps) => (
                  <routeItem.component routeProps={routeProps} />
                )}
                // component={routeItem.component}
              />
            </AuthRoute>
          );
        }
        return (
          <Route
            key={key}
            path={routeItem.path}
            exact={routeItem.exact}
            component={routeItem.component}
          />
        );
      })} */}

    </Switch>
  );
};

export default RouterHandler;
