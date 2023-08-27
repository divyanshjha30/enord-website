import { styled, keyframes } from 'styled-components';
import enordLogoFull from './lib/enordLogoFULL.png';

export default function AppTitle(props) {
  const {
    title = 'STORE',
    subTitle = `lets build something amazing together.`,
  } = props;

  return (
    <div>
      <ImgWrapper>
        <a href="https://enord.co/" target='_blank' rel='noreferrer' >
          <img src={enordLogoFull} alt="enordLogo" />
        </a>
      </ImgWrapper>

      <TitleWrapper>
        <h1>{title}</h1>
        <p>{subTitle}</p>
      </TitleWrapper>
    </div>
  );
}

const textShineAnimation = keyframes`
  0% {
    background-position: 0% center;
  }
  100% {
    background-position: 100% center;
  }
`;

const ImgWrapper = styled.div`
  float: left;
`;

const TitleWrapper = styled.div`
  text-align: right;
  margin: 0 0 40px;
  h1 {
    color: ${({ theme }) => theme.mainColors.color};
    letter-spacing: 10px;
    text-transform: uppercase;
    margin: 0 0 10px;
  }
  p {
    text-align: center;
    margin: 0;
    background: linear-gradient(
      to right,
      #ffffff 20%,
      #5a3a22 30%,
      #ffffff 70%,
      #ffffff 80%
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent; /* Use color to control the text color */
    background-size: 500% auto;
    animation: ${textShineAnimation} 5s ease-in-out infinite alternate;
  }
`;
