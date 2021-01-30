import CartItem from '../CartItem/CatItem';
import {Wrapper } from './Cart.styles'; //
import {CartItemType} from '../App';
import { Http2ServerRequest } from 'http2';
import { Divider } from '@material-ui/core';

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({cartItems, addToCart, removeFromCart}) =>{
    return(
        < Wrapper>
            <h2>Your Shopping Cart </h2>
            {cartItems.length === 0 ? <p>No items in cart</p> : null}
            {cartItems.map(item => (
                <CartItem 
                    key={item.id}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
            ))}
        </ Wrapper>
        
    );
};

export default Cart;

