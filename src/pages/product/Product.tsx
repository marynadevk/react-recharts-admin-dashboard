import { Single } from '../../components/single/Single';
import { singleProductData } from '../../data';
import './product.scss';

export const Product = () => {
  return (
    <div className="product">
      <Single {...singleProductData} />
    </div>
  );
};
