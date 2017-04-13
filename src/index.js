import dva from "dva";
import "./index.css";
import Users from "./models/users";
import router from "./router";
// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// registerModel(app, Users);
//move to route.js
// 4. Router
app.router(router);

// 5. Start
app.start('#root');
