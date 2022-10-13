import { Route, Redirect } from "react-router-dom";

function PublicRoute({ component: Component, isAuthenticated, ...rest }) {
  const styles = {
    padding: "6rem 0 0 26rem",
    backgroundColor: "#181818",
    color: "#ffffff",
    minHeight: "calc(100vh - 6rem)",
  };

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated ? (
          <div style={styles}>
            <Component {...props} />
          </div>
        ) : (
          <Redirect
            to={{
              pathname: "/home",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}

export default PublicRoute;
