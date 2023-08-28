import { FlexGrid } from '../common/FlexGrid';
import { data } from './productDetails.js';
import ShowCard from './ShowCard';

const Products = () => {
  return (
    <FlexGrid>
      {data.map(data => (
        <ShowCard
          key={data.id}
          id={data.id}
          name={data.name}
          image={data.image}
          price={data.price}
        />
      ))}
    </FlexGrid>
  );
};

export default Products;
