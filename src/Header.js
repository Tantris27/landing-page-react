/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import logo from './images/logoHead.svg';

const header = css`
  padding: 32px 0;
  margin: 0 15px 0 0;
  display: flex;
  > img {
  }
`;
const headerDiv = css`
  color: white;
  z-index: 1;
  margin-left: auto;
  font-size: 17px;
  margin-top: 6px;
  > a {
    padding-left: 50px;
    color: rgba(203, 213, 225, 1);
  }
  > a:hover {
    color: #4f46e5;
  }
  > button {
    padding: 10px 18px 10px 18px;
    border-radius: 2px;
    margin: 0 10px 0 45px;
    border: none;
    background-color: #4f46e5;
    color: #fff;
    font-size: 16px;
  }

  > button:hover {
    color: rgba(203, 213, 225, 1);
  }
`;
const blueblur = css`
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  height: 16rem;
  width: 16rem;
  background: #4a61dd;
  opacity: 0.3;
  filter: blur(100px);
  z-index: 0;
`;
export function Head() {
  return (
    <header css={header}>
      <img src={logo} alt="webformlogo" />
      <div css={headerDiv}>
        <a>Features</a>
        <a>Examples</a>
        <a>Pricing</a>
        <a>Blog</a>
        <a>Docs</a>
        <button>Help & Support</button>
      </div>
      <div css={blueblur} />
    </header>
  );
}
