import styled from 'styled-components';

import golden1 from '../../images/hero/dog/golden1.webp';
import golden2x from '../../images/hero/dog/golden@2x.webp';

import goldenT1 from '../../images/hero/dog/goldenT1.webp';
import goldenT2x from '../../images/hero/dog/goldenT@2x.webp';

import goldenD1 from '../../images/hero/dog/goldenD1.webp';
import goldenD2x from '../../images/hero/dog/goldenD@2x.webp';

import Wav1 from '../../images/hero/waves/Wav1.webp';
import Wav2x from '../../images/hero/waves/Wav@2x.webp';

import WaveT from '../../images/hero/waves/WaveT.webp';
import WaveT2x from '../../images/hero/waves/WaveT@2x.webp';

import WaveD1 from '../../images/hero/waves/WaveD1.webp';
import Wavve2x from '../../images/hero/waves/Wavve@2x.webp';
// import wave_lg2x from "../../images/hero/waves/wave_lg@2x.webp";

import { theme } from '../../globalStyles/theme';

export const Main = styled.main`
  min-height: calc(100vh - 100px);
`;

export const HomeTitle = styled.h1`
  max-width: 280px;
  font-size: ${p => theme.fontSizes[7]};
  //   34px
  line-height: ${p => theme.lineHeights.text};
  font-family: ${p => p.theme.fonts.textMedium};
  color: ${p => theme.colors.black};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    max-width: 607px;
    font-size: ${p => theme.fontSizes[8]};
    font-family: ${p => p.theme.fonts.text};
    line-height: 1.47;
    padding: 0, 32px;
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    padding-left: 16px;
  }
`;

export const HomeSection = styled.section`
padding-top: 118px;
min-height: 100vh;
 width: -webkit-fill-available;
// height: calc(100% - 56px);
background-repeat: no-repeat;
background-position: bottom;

background-image: url(${golden1}), url(${Wav1});
background-size: 265px 350px, 100vw 442px;

@media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${golden2x}), url(${Wav2x});
  }


@media (min-width: ${p => p.theme.breakpoints[1]}) {
    min-height: 100vh;
    width: -webkit-fill-available;
    padding-top: 160px;
    min-height: 100vh;

    background-image: url(${goldenT1}), url(${WaveT});
    // background-size: 636px 760px, 100vw 1085px;
  background-size:  292px 325px, 100vw 460px;


    @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${goldenT2x}), url(${WaveT2x});
    }
  }

  @media (min-width: ${p => p.theme.breakpoints[2]})  {
    padding-top: 160px;
    padding-bottom: 408px;
    min-height: 100vh;
    width: -webkit-fill-available;
   


    background-image: url(${goldenD1}), url(${WaveD1});
  background-size: 485px 580px, 100vw calc(100vw * 0.455);
    background-position-x: calc(50% + 372px), 68%, calc(50% + 142px);
    background-position-y: bottom, 97%, calc(50% - 345px);
  
    // background-size: 505px 580px, 100vw, 580px;
    // background-position-x: 756px,  center, 625px;
    // background-position-y: bottom, bottom, 400px;

    // calc(55% + 330px) 100%, 40% -89%, calc(50% + 118px) calc(50% - 204px)

    @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${goldenD2x}), url(${Wavve2x});
    }

`;
