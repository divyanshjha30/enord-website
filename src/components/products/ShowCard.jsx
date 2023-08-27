import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { SearchCard, SearchImgWrapper } from '../common/SearchCard';

const ShowCard = ({ id, name, image }) => {
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={image} alt={name} />
      </SearchImgWrapper>

      <h1>{name}</h1>

      <ActionSection>
        <Link to={`/contact`}>
          Read more
        </Link>
      </ActionSection>
    </SearchCard>
  );
};

export default ShowCard;

const ActionSection = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration-color: #000;
    color: #000;
    &:hover {
      text-decoration-color: blue;
      color: blue;
    }
  }
`;
