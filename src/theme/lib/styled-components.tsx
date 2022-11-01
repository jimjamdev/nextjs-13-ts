import React from 'react';
import { ThemeProvider } from '~theme/index';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { GlobalStyle } from '~theme/globalStyle';

export function useStyledComponentsRegistry() {
  const [styledComponentsStyleSheet] = React.useState(
    () => new ServerStyleSheet(),
  );

  const styledComponentsFlushEffect = () => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.seal();
    return <>{styles}</>;
  };

  const StyledComponentsRegistry = ({
    children,
  }: {
    children: JSX.Element;
  }) => (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      <ThemeProvider theme={{}}>
        <>
          <GlobalStyle />
          {children as React.ReactElement}
        </>
      </ThemeProvider>
    </StyleSheetManager>
  );

  return [StyledComponentsRegistry, styledComponentsFlushEffect] as const;
}
