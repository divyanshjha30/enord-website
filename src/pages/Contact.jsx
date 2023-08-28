import { styled } from 'styled-components';

const Contact = () => {
  return (
    <Div>
      <Big>
        To buy any products or to get a free consultation, kindly contact us.
        <br />
        Our expert team members are trained to provide you the best possible
        experience,
        <br />
        and will make your journey as smooth and simple as buying a pair of
        jeans!
      </Big>
      <Brown>Address</Brown>
      <White>
        Head Office: Cabin no- 523,
        <br /> 5th floor, Innovation & Incubation Centre, <br />
        IIIT-Delhi <br /> New Delhi, <br /> Delhi-110020
      </White>
      <Brown>Contact</Brown>
      <White>
        +91 9818447424 <br /> info@enord.co
      </White>
    </Div>
  );
};

export default Contact;

const Div = styled.div`
  text-align: center;
  justify-content: center;
  animation: fadein 0.5s ease-in forwards;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Brown = styled.p`
  color: #5a3a22;
  font-size: larger;
`;
const White = styled.p`
  color: #fff;
  font-size: small;
`;
const Big = styled.p`
  color: #fff;
  font-size: large;
`;
