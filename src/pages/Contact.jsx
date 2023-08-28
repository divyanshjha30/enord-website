import styled from 'styled-components';

const Contact = () => {
  return (
    <Div>
      <Brown>Address</Brown>
      <White>
        Head Office: Cabin no- 523,<br /> 5th floor, Innovation & Incubation Centre, <br />
        IIIT-Delhi <br /> New Delhi, <br /> Delhi-110020
      </White>
      <Brown>Contact</Brown>
      <White>+91 9818447424 <br /> info@enord.co</White>
    </Div>
  );
};

export default Contact;

export const Div = styled.div`
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
`
const White = styled.p`
   color: #fff;
   font-size: small;
`
