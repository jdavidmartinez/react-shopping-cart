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
            <h2> Your </h2>
        </ Wrapper>
        
    );
}

