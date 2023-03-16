import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart,AiOutlineHome } from 'react-icons/ai';


const NavbarWrapper = styled.nav`
  background: linear-gradient(to right, #e4eb17, #243b55);
  ul {
    padding: 15px 0;
    display: flex;
    justify-content: space-around;
    li {
      a {
        text-decoration: none;
        font-weight: 600;
        font-size: 1.5rem;
        color: white;
        .cart-link {
          display: flex;
        }
      }
    }
  }
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <ul>
        <li>
        <Link to="/">
            <div className="cart-link">
              <div className="cart-icon">
                <AiOutlineHome />
              </div>
              <div>Home</div>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <div className="cart-link">
              <div className="cart-icon">
                <AiOutlineShoppingCart />
              </div>
              <div>Cart</div>
            </div>
          </Link>
        </li>
      </ul>
    </NavbarWrapper>
  );
};

export default Navbar;
