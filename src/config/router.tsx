import { createBrowserRouter } from "react-router";
import App from "src/components/App";
import TodoList from "src/components/TodoList";

const router = createBrowserRouter([
  {
    // path: "/",
    Component: App,
    children: [
      { index: true, Component: App },
      { path: "todo-list", Component: TodoList },
    ]
  },
]);

export default router;
