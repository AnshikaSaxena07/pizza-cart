import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Product from '../components/Product';
import { BiFoodTag } from 'react-icons/bi';

const HomeWrapper = styled.section`
  background-color: #a8a8a5;
  z-index: 1;
  padding: 0 2em 3em 2em;
  .header {
    display: flex;
    justify-content: space-between;
    padding: 1.5em 0;
    .heading {
      font-size: 2rem;
      font-weight: bold;
    }
    .sort-actions {
      .inner {
        font-size: 1.5rem;
        h3 {
          display: flex;
        }
      }
    }
  }
  .product-list {
    display: grid;
    grid-gap: 1.75rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

const HomeScreen = ({ history }) => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const sortRating = () => {
    products.sort((a, b) => parseFloat(a.rating) - parseFloat(b.rating));
    console.log(products);
  };

  const sortPrice = () => {
    products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    console.log(products);
  };

  return (
    <HomeWrapper>
      {error ? <h3>{error}</h3> : null}
      {loading ? <h3>Loading ...</h3> : null}
      <div className="header">
        <div className="heading">
          <h2>🍕 Pizzas</h2>
        </div>
      </div>
      <div className="product-list">
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            imgUrl={product.img_url}
            price={product.price}
            rating={product.rating}
            isVeg={product.isVeg}
            size={product.size[0]}
            toppings={product.toppings[0]}
            historyMain={history}
          />
        ))}
      </div>
    </HomeWrapper>
  );
};

export default HomeScreen;
