import React, { Fragment, Suspense, lazy } from "react";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import theme from "./theme";
import GlobalStyles from "./GlobalStyles";
import Pace from "./shared/components/Pace";
import reducer from "./reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { applyMiddleware } from "redux";
import { appMiddleware } from "./middlewares/app";
import { apiMiddleware } from "./middlewares/core";
import AuthRoute from "./components/AuthRoute";

const LoggedInComponent = lazy(() => import("./logged_in/components/Main"));

const LoggedOutComponent = lazy(() => import("./logged_out/components/Main"));
const createStoreWithMiddleware = applyMiddleware(
  appMiddleware,
  apiMiddleware
)(createStore);

const store = createStoreWithMiddleware(reducer);
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      <Pace color={theme.palette.primary.light} />
      <Suspense fallback={<Fragment />}>
        <Provider store={store}>
          <Router>
            <Switch>
              <AuthRoute path="/c" type="private">
                <LoggedInComponent />
              </AuthRoute>

              <Route>
                <LoggedOutComponent />
              </Route>
            </Switch>
          </Router>
        </Provider>
      </Suspense>
    </MuiThemeProvider>
  );
}

export default App;
