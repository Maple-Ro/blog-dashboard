import React from "react";
import {Router} from "dva/router";
import IndexPage from "./routes/IndexPage";
import UserPage from "./routes/Users";
const cached = {};
function registerModel(app, model) {
  if (!cached[model.namespace]) {
    app.model(model);
    cached[model.namespace] = 1;
  }
}

function RouterConfig({history, app}) {
  const routes = [
    {
      path: '/',
      name: 'IndexPage',
      getComponent(nextState, cb){
        require.ensure([], (require) => {
          cb(null, IndexPage);
        });
      },
    },
    {
      path: '/users',
      name: 'UserPage',
      getComponent(nextState, cb){
        require.ensure([], (require) => {
          registerModel(app, require('./models/users'));
          cb(null, UserPage);
        });
      },
    },
  ];
  return (
    <Router history={history} routes={routes}>
    </Router>
  );
}

export default RouterConfig;
