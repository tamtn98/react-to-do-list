import { FormatListBulleted } from "@mui/icons-material";
import { Navigation } from "@toolpad/core";
import { createBrowserRouter } from "react-router";
import App from "src/App";
import Layout from "src/Dashboard";
import TodoList from "src/TodoList";

const router = createBrowserRouter([
  {
    Component: App, // root layout route
    children: [
      {
        path: "",
        Component: Layout,
        children: [
          {
            index: true,
            path: "todo-list",
            Component: TodoList,
          },
        ],
      },
    ],
  },
]);

const NAVIGATION: Navigation = [
  {
    segment: "todo-list",
    title: "TO-DO List",
    icon: <FormatListBulleted />
  },
];

export { router, NAVIGATION };
