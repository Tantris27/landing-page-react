/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Header } from './Header';
import logo from './images/logoHead.svg';

const bodyStyle = css`
  background-color: rgba(15, 23, 42, 1);
  font-family: Graphik, ui-sans-serif, system-ui, -apple-system,
    BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans,
    sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Noto Color Emoji;
  line-height: 1.5;
  color: rgba(203, 213, 225, 1);
`;

const section1Style = css`
  padding: 20px;
  > button {
    background-image: linear-gradient(to right, #ec4899, #f87171);
    margin: 15px auto;
    display: block;
    border: none;
    border-radius: 2px;
    padding: 15px 40px 15px 40px;
    color: #fff;
    font-size: 16px;
  }
  > button:hover {
    color: rgba(203, 213, 225, 1);
  }
`;
const header1Styles = css`
  font-size: 65px;
  line-height: 1;
  letter-spacing: -0.025em;
  text-align: center;
  font-weight: 500;
  color: rgb(224 231 255);
  margin: 25px 0;
`;
const headerparaStyle = css`
  font-size: 25px;
  text-align: center;
  max-width: 600px;
  margin: 0 auto 25px auto;
  color: rgb(180 185 202);
`;

function App() {
  return (
    <div css={bodyStyle}>
      <Header />
      <section css={section1Style}>
        <h1 css={header1Styles}>Contact Forms for Static Websites</h1>
        <p css={headerparaStyle}>
          Receive form submissions directly in your email inbox without any
          server or back-end code. Its free!
        </p>
        <button>Create your Access Key</button>
      </section>
    </div>
  );
}

export default App;
