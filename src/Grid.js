/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import amazon from './images/amazonP.svg';
import backend from './images/backend.svg';
import design from './images/designWoL.svg';
import gdpr from './images/Gdpr.svg';
import logos from './images/logos.svg';
import database from './images/noDatabases.svg';
import nologin from './images/noLogin.svg';

const picStyles = css`
  margin: 16px auto;
  justify-self: center;
  display: flex;
`;
const paraStyle = css`
  justify-content: center;
  display: flex;
  font-size: 17px;
  color: rgb(224, 231, 255);
`;
const gridstyles = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px 50px;
  margin: 100px 0 0 160px;
  width: 1080px;
  height: 450px;
`;
const gridDivStyle = css`
  width: 360px;
  height: 210px;
  margin: 0;
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
`;
const imageStyles = css`
  width: 25px;
  height: 25px;
`;
const para2Styles = css`
  color: rgba(199, 210, 254, 0.7);
  font-size: 18px;
  line-height: 30px;
`;
const header3Styles = css`
  font-weight: 500;
  color: #fff;
  font-size: 20px;
`;
export function Grid() {
  return (
    <section>
      <div css={paraStyle}>
        <p>Host anywhere</p>
      </div>
      <div>
        <img css={picStyles} src={logos} alt="logos" />
      </div>
      <div css={gridstyles}>
        <div css={gridDivStyle}>
          <div css={spanStyle}>
            <img css={imageStyles} src={backend} alt="backend" />
          </div>
          <h3 css={header3Styles}>No Backend Code</h3>
          <p css={para2Styles}>
            You already know! Setting up form is pain. Web3Forms works without
            any Server or backend code like PHP.
          </p>
        </div>
        <div css={gridDivStyle}>
          <div css={spanStyle}>
            <img css={imageStyles} src={database} alt="backend" />
          </div>
          <h3 css={header3Styles}>No Databases</h3>
          <p css={para2Styles}>
            All emails are sent directly to your email address. We never store
            your form submissions.
          </p>
        </div>
        <div css={gridDivStyle}>
          <div css={spanStyle}>
            <img css={imageStyles} src={nologin} alt="backend" />
          </div>
          <h3 css={header3Styles}>No Login Needed</h3>
          <p css={para2Styles}>
            There is no login or dashboard for Web3Forms. We authenticate users
            based on the access key.
          </p>
        </div>
        <div css={gridDivStyle}>
          <div css={spanStyle}>
            <img css={imageStyles} src={design} alt="backend" />
          </div>
          <h3 css={header3Styles}>Design without Limits</h3>
          <p css={para2Styles}>
            Web3Forms is an API based form backend. We can seamlessly integrate
            to any custom design or style.
          </p>
        </div>
        <div css={gridDivStyle}>
          <div css={spanStyle}>
            <img css={imageStyles} src={amazon} alt="backend" />
          </div>
          <h3 css={header3Styles}>Amazon Powered</h3>
          <p css={para2Styles}>
            Our API Systems are powered by Amazon Cloud Infrastructure. High
            Deliverability and Uptime Guaranteed.
          </p>
        </div>
        <div css={gridDivStyle}>
          <div css={spanStyle}>
            <img css={imageStyles} src={gdpr} alt="backend" />
          </div>
          <h3 css={header3Styles}>GDPR Compliant</h3>
          <p css={para2Styles}>
            We only store your email address for authentication. We don’t share
            or sell any information with 3rd parties.
          </p>
        </div>
      </div>
    </section>
  );
}
