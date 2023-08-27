import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const LINKS = [
  {
    text: 'Products',
    to: '/',
  },
  {
    text: 'Contact us',
    to: '/contact',
  },
];

const Navs = () => {
  return (
    <div>
      <NavList>
        {LINKS.map(item => (
          <li key={item.to}>
            <LinkStyled to={item.to}>{item.text}</LinkStyled>
          </li>
        ))}
      </NavList>
    </div>
  );
};

export default Navs;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0 0 30px;
  padding: 0;
  li {
    margin: 0 10px;
  }
`;

const LinkStyled = styled(NavLink)`
  font-size: small;
  display: block;
  padding: 3px 15px;
  position: relative;
  text-decoration: none;
  color: #666060;
  &.active {
    color: #bfb6b6;
    &:after {
      content: '';
      position: absolute;
      display: block;
      height: 2px;
      left: 0%;
      bottom: 0;
      background-color: #5a3a22;
      animation: slide-in 0.3s ease-in forwards;
      @keyframes slide-in {
        from {
          left: 50%;
          width: 0;
        }
        to {
          left: 0%;
          width: 100%;
        }
      }
    }
  }
`;
