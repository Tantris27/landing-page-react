/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const divStyles = css`
  display: block;
  align-items: center;
  justify-items: center;
  text-align: center;
  margin-top: 120px;
`;
const worksStyle = css`
  font-size: 38px;
  font-weight: 500;
  color: #fff;
`;
const paraStyle = css`
  color: rgba(199, 210, 254, 0.7);
  font-size: 22px;
  margin-top: -20px;
`;
const spanStyle = css`
  display: flex;
  border-radius: 50px;
  background-color: rgb(19 35 82);
  height: 35px;
  width: 35px;
  color: rgb(165, 180, 252);
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 70px auto;
  font-size: 30px;
`;
const para2Styles = css`
  color: rgba(199, 210, 254, 0.7);
  font-size: 18px;
  line-height: 30px;
  margin-top: -20px;
`;
const header3Styles = css`
  font-weight: 500;
  color: #fff;
  font-size: 22px;
  margin-top: -60px;
`;
const firstDivStyle = css`
  display: block;
  margin: 0 auto;
  text-align: center;
`;
const secondDivStyle = css`
  /* display: flex; */
  margin: 0 auto;
  text-align: center;
  border-radius: 10px;
  background-color: rgb(28 38 60);
  width: 400px;
  padding: 30px 50px 20px;
`;
const inputStyle = css`
  color: grey;
  display: block;
  width: stretch;
  height: 45px;
  margin-bottom: 20px;
  padding-left: 10px;
  border-radius: 2px;
`;
const buttonStyle = css`
  height: 50px;
  border: none;
  border-radius: 2px;
  background-color: rgba(79, 70, 229, 1);
  color: #fff;
  width: stretch;
  margin-bottom: 10px;
`;
const smallParaStyle = css`
  color: rgba(199, 210, 254, 0.7);
  font-size: 12px;
  line-height: 17px;
`;
const codeDivStyle = css`
  margin: 30px auto;
  width: 700px;
  height: 350px;
  background-color: rgb(28 38 60);
  line-height: 1.5;
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
const thirdDivStyle = css`
  /* display: flex; */
  margin: -10px auto;
  text-align: center;
  border-radius: 30px;
  background-color: rgb(28 38 60);
  width: 200px;
  padding: 10px 0;
`;
const para3Styles = css`
  color: rgba(199, 210, 254, 0.7);
  font-size: 16px;
  margin: -5px;
`;
export function Works() {
  return (
    <section>
      <div css={divStyles}>
        <h2 css={worksStyle}>How it works</h2>
        <p css={paraStyle}>
          Easy as 1 2 3. Just follow the steps and you’re done
        </p>
      </div>
      <div css={firstDivStyle}>
        <span css={spanStyle}>1</span>
        <h3 css={header3Styles}>Create Access Key</h3>
        <p css={para2Styles}>Access key will be sent to your email address.</p>
        <div css={secondDivStyle}>
          <input css={inputStyle} type="email" value="   Email Address" />
          <br />
          <button css={buttonStyle}>Create Access Key</button>
          <p css={smallParaStyle}>
            By submitting this form, you agree to our terms and privacy policy
            as well as give consent to reach you for marketing purposes.
          </p>
        </div>
        <div css={firstDivStyle}>
          <span css={spanStyle}>2</span>
          <h3 css={header3Styles}>Create HTML Form</h3>
          <p css={para2Styles}>
            Create a form in your website with our form endpoint inside action
            attribute.
          </p>
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
                <span css={tokenCode4}>https://api.web3forms.com/submit</span>
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
        <div css={thirdDivStyle}>
          <p css={para3Styles}>Show Advanced Example</p>
        </div>
      </div>
    </section>
  );
}
