/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import playbutton from './images/playbutton.svg';

const section1Style = css`
  padding: 20px;
  > button {
    background-image: linear-gradient(to right, #ec4899, #f87171);
    margin: 15px auto 0 auto;
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
  > h1 {
    font-size: 65px;
    line-height: 1;
    letter-spacing: -0.025em;
    text-align: center;
    font-weight: 500;
    color: rgb(224 231 255);
    margin: 25px 0;
  }
`;

const smallparaStyle = css`
  text-align: center;
  margin: 10px 0 80px 0;
`;
const headerparaStyle = css`
  font-size: 25px;
  text-align: center;
  max-width: 600px;
  line-height: 35px;
  margin: 0 auto 30px auto;
  color: rgb(180 185 202);
`;
const codeDivStyle = css`
  margin: 0 auto;
  width: 700px;
  height: 350px;
  background-color: rgb(28 38 60);
  line-height: 1.5;
  :hover {
  }
`;

const tokenCode1 = css`
  color: white;
`;
const tokenCode2 = css`
  color: #ff8eb7;
`;
const tokenCode3 = css`
  color: #a6e22e;
`;
const tokenCode4 = css`
  color: #e6db74;
`;
const typing = keyframes`
from {
width: 0;
}
to {
width: 45%;
}
`;
const tokenCode5 = css`
  display: inline-flex;
  color: #e6db74;
  overflow: hidden;
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  animation: ${typing} 5s steps(32) forwards;
  width: 0;
`;

const playStyle = css`
  width: 30px;
  height: 30px;
  align-self: center;
  margin-right: 10px;
  fill: rgba(51, 65, 85, 0);
`;
const playSpanStyle = css`
  display: none;
  border-radius: 40px;
  background-color: #fff;
  color: black;
  padding: 14px 20px;
  max-width: 140px;
  max-height: 30px;
  margin: 150px auto;
`;
const hoverStyle = css`
  position: absolute;
  /* display: none; */
  left: 410px;
  bottom: -130px;
  width: 700px;
  height: 350px;
  z-index: 10;
  :hover {
    background-color: rgba(51, 65, 85, 0.4);
  }
  :hover div {
    display: flex;
    background-color: #fff;
    color: black;
  }
`;
const picStyle = css`
  position: absolute;
  left: 225px;
  top: 410px;
`;

export function Code() {
  return (
    <section css={section1Style}>
      <h1>Contact Forms for Static Websites</h1>
      <p css={headerparaStyle}>
        Receive form submissions directly in your email inbox without any server
        or back-end code. Its free!
      </p>
      <button>Create your Access Key</button>
      <p css={smallparaStyle}>
        <small>No Signup required</small>
      </p>
      <div>
        <img
          css={picStyle}
          src="https://web3forms.com/img/how-it-works.svg"
          alt="how it works"
        />
      </div>
      <div css={hoverStyle}>
        <div css={playSpanStyle}>
          <img src={playbutton} alt="button" css={playStyle} /> Run this Code
        </div>
      </div>
      <div css={codeDivStyle}>
        <figure>
          <pre>
            <code>
              <br />
              <br />
              <span css={tokenCode1}>{'<'}</span>
              <span css={tokenCode2}>form </span>
              <span css={tokenCode3}>action</span>
              <span css={tokenCode1}>="</span>
              <span css={tokenCode5}>https://api.web3forms.com/submit</span>
              <span css={tokenCode1}>" </span>
              <span css={tokenCode3}>method</span>
              <span css={tokenCode1}>="</span>
              <span css={tokenCode4}>POST</span>
              <span css={tokenCode1}>"</span>
              <span css={tokenCode1}>{'>'}</span>
              <br />
              <br />
              <span css={tokenCode1}>{'   <'}</span>
              <span css={tokenCode2}>input </span>
              <span css={tokenCode3}>type</span>
              <span css={tokenCode1}>="</span>
              <span css={tokenCode4}>hidden</span>
              <span css={tokenCode1}>" </span>
              <span css={tokenCode3}>name</span>
              <span css={tokenCode1}>="</span>
              <span css={tokenCode4}>apikey</span>
              <span css={tokenCode1}>" </span>
              <span css={tokenCode3}>value</span>
              <span css={tokenCode1}>="</span>
              <span css={tokenCode4}>YOUR_ACCESS_KEY_HERE</span>
              <span css={tokenCode1}>"</span>
              <span css={tokenCode1}>{'>'} </span>
              <br />
              <br />
              <span css={tokenCode1}>{'   <'}</span>
              <span css={tokenCode2}>input </span>
              <span css={tokenCode3}>type</span>
              <span css={tokenCode1}>="</span>
              <span css={tokenCode4}>text</span>
              <span css={tokenCode1}>" </span>
              <span css={tokenCode3}>name</span>
              <span css={tokenCode1}>="</span>
              <span css={tokenCode4}>name</span>
              <span css={tokenCode1}>" </span>
              <span css={tokenCode3}>required</span>
              <span css={tokenCode1}>{'>'} </span>
              <br />
              <span css={tokenCode1}>{'   <'}</span>
              <span css={tokenCode2}>input </span>
              <span css={tokenCode3}>type</span>
              <span css={tokenCode1}>="</span>
              <span css={tokenCode4}>email</span>
              <span css={tokenCode1}>" </span>
              <span css={tokenCode3}>name</span>
              <span css={tokenCode1}>="</span>
              <span css={tokenCode4}>email</span>
              <span css={tokenCode1}>" </span>
              <span css={tokenCode3}>required</span>
              <span css={tokenCode1}>{'>'} </span>
              <br />
              <span css={tokenCode1}>{'   <'}</span>
              <span css={tokenCode2}>textarea </span>
              <span css={tokenCode3}>name</span>
              <span css={tokenCode1}>="</span>
              <span css={tokenCode4}>message</span>
              <span css={tokenCode1}>" </span>
              <span css={tokenCode3}>required</span>
              <span css={tokenCode1}>{'>'}</span>
              <span css={tokenCode1}>{'</'}</span>
              <span css={tokenCode2}>textarea</span>
              <span css={tokenCode1}>{'>'} </span>
              <br />
              <br />
              <span css={tokenCode1}>{'   <'}</span>
              <span css={tokenCode2}>button </span>
              <span css={tokenCode3}>type</span>
              <span css={tokenCode1}>="</span>
              <span css={tokenCode4}>submit</span>
              <span css={tokenCode1}>"</span>
              <span css={tokenCode1}>{'>'}</span>
              <span css={tokenCode1}>Submit Form</span>
              <span css={tokenCode1}>{'</'}</span>
              <span css={tokenCode2}>button</span>
              <span css={tokenCode1}>{'>'}</span>
              <br />
              <br />
              <span css={tokenCode1}>{'</'}</span>
              <span css={tokenCode2}>form</span>
              <span css={tokenCode1}>{'>'} </span>
            </code>
          </pre>
        </figure>
      </div>
    </section>
  );
}
