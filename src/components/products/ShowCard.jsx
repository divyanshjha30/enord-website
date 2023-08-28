import { Link } from 'react-router-dom';
import { SearchCard, SearchImgWrapper } from '../common/SearchCard';

const ShowCard = ({ name, image, price }) => {
  return (
    <SearchCard>
      <Link to={`/contact`}>
        <SearchImgWrapper>
          <img src={image} alt={name} />
        </SearchImgWrapper>
      </Link>
      <h1>{name}</h1>
      <h1>{price}</h1>
    </SearchCard>
  );
};

export default ShowCard;
