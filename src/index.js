import dva from "dva";
import "./index.css";
import Users from "./models/users";
import router from "./router";
// 1. Initialize
const app = dva();

const cached = {};
function registerModel(app, model) {
  if (!cached[model.namespace]) {
    app.model(model);
    cached[model.namespace] = 1;
  }
}

// 2. Plugins
// app.use({});

// 3. Model
registerModel(app, Users);
// 4. Router
app.router(router);

// 5. Start
app.start('#root');
