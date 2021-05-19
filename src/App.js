/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Code } from './Code';
import { Grid } from './Grid';
import { Head } from './Header';

const bodyStyle = css`
  background-color: rgba(15, 23, 42, 1);
  font-family: Graphik, ui-sans-serif, system-ui, -apple-system,
    BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans,
    sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Noto Color Emoji;
  line-height: 1.5;
  color: rgba(203, 213, 225, 1);
`;

function App() {
  return (
    <div css={bodyStyle}>
      <Head />
      <Code />
      <Grid />
    </div>
  );
}

export default App;
