import dva from "dva";
import "./index.css";
import router from "./router";
import createLoading from 'dva-loading';

// 1. Initialize
const app = dva();

// 2. Plugins
app.use(createLoading());

// 3. Model
// registerModel(app, Users);
//move to route.js
// 4. Router
app.router(router);

// 5. Start
app.start('#root');
