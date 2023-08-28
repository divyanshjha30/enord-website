import { Link } from 'react-router-dom';
import { SearchCard, SearchImgWrapper } from '../common/SearchCard';

const ShowCard = ({ name, image }) => {
  return (
    <SearchCard>
      <Link to={`/contact/${name}`}>
        <SearchImgWrapper>
          <img src={image} alt={name} />
        </SearchImgWrapper>
      </Link>
      <h1>{name}</h1>
    </SearchCard>
  );
};

export default ShowCard;
