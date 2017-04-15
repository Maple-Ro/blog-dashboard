import dva from "dva";
import "./index.css";
import router from "./router";
import { browserHistory } from 'dva/router';
import createLoading from 'dva-loading';
import { message } from 'antd';
const ERROR_MSG_DURATION = 3;
// 1. Initialize
const app = dva({
  history:browserHistory,
  onError(e){
    message.error(e.message, ERROR_MSG_DURATION);
  },
});

// 2. Plugins
app.use(createLoading());

// 3. Model
// registerModel(app, Users);
//move to route.js
// 4. Router
app.router(router);

// 5. Start
app.start('#root');
