import { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import Swal from "sweetalert2";


const PaypalCheckoutButton = (props) => {
    const { product } = props;
    // const amount = useSelector(selectCartTotal);
    // const currentUser = useSelector(selectCurrentUser);

    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);

    const handleApprove = (orderId) => {
        //call backend function to fulfill order

        //if response successful
        setPaidFor(true);

        //refresh user account or subscription status

        //if the response error
        // setError("your payment was processed succesful, however, we are unable to fulfill your purchase. please contact us at support@comixmanga.io for assistance")
    };

    if (paidFor) {
        // dispaly success meassage 
         Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: "Thank you for your purchase!",
            showConfirmButton: false,
            timer: 2500
          });
    }
    if (error) {
        //dispaly error
        alert(error);
    }
    return (
        <PayPalButtons

        createOrder={(data, actions) => {
            return actions.order.create({
                purchase_units: [
                    {
                        description: product.description,
                        amount: {
                            value: product.price
                        }
                    }
                ]
            })
        }}
        onApprove= {async(data, actions) => {
            const order = await actions.order.capture();
            console.log("order", order)

            handleApprove(data.orderID);
        }}

        onCancel={() => {
            //display cancel message
        }}

        onError={(err) => {
            setError(err);
            console.error("PayPal checkout onError", err);
        }}
        />
    );
};

export default PaypalCheckoutButton;