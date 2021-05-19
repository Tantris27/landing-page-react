/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import logos from './images/logos.svg';

const picStyles = css`
  margin: 20px auto;
  justify-self: center;
  display: flex;
`;
const paraStyle = css`
  justify-content: center;
  display: flex;
`;
const gridstyles = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
`;
const gridDivStyle = css`
  width: 310px;
  height: 210px;
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
        <div css={gridDivStyle}></div>
        <div css={gridDivStyle}></div>
        <div css={gridDivStyle}></div>
        <div css={gridDivStyle}></div>
        <div css={gridDivStyle}></div>
        <div css={gridDivStyle}></div>
      </div>
    </section>
  );
}
