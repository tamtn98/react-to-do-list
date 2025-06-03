import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import styled from "styled-components";
import "./index.css";

import App from "./App";

import { Provider } from "react-redux";
import store from "./store";

const StyledContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 2rem 0;
`;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <StyledContainer>
        <App />
      </StyledContainer>
    </Provider>
  </StrictMode>
);
