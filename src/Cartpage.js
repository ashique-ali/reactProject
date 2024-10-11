import { useDispatch, useSelector } from "react-redux";

const CartPage = () => {
    const { cart } = useSelector((item) => item.cartItem);
    const dispatch = useDispatch();
    console.log("cart ::>>", cart);
    return (
        <div className="col-lg-4">
            {cart.map((item) => (
                <div>
                    <img src={item.image} />
                </div>
            ))}
        </div>
    )
}
export default CartPage;