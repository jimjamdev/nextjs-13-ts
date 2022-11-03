import type { GlobalProvider } from "@ladle/react";

export const Provider: GlobalProvider = ({ children, globalState }) => (
  <>
    <h1>Theme: {globalState.theme}</h1>
    {children}
  </>
);
