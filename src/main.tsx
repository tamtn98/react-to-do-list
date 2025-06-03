import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import styled from "styled-components";
import "./index.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import App from "./App";

const StyledContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StyledContainer>
      <App />
    </StyledContainer>
  </StrictMode>
);
