import React from 'react'
import { Button } from './Button';
import cross from '../assets/cross.svg'
import logo from '../assets/logo.svg'



function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = src
        script.onload = () => {
            resolve(true)
        }
        script.onerror = () => {
            resolve(false)
        }
        document.body.appendChild(script)
    })
}

const MoneyModal = ({ isOpen, closeModal, Amount, orderId }) => {



    var options = {
        "key": "rzp_test_xee3l2g0TEEHZM", // Enter the Key ID generated from the Dashboard
        "amount": {Amount}*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Caprise Pvt.Ltd",
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler": async (response) => {
            // alert(response.razorpay_payment_id);
            // alert(response.razorpay_order_id);
            // alert(response.razorpay_signature)
            const data = await fetch("http://localhost:5000/payment/success", {
                method: "POST", // *GET, POST, PUT, DELETE, etc.

                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify({
                    trancid: response.razorpay_payment_id
                }), // body data type must match "Content-Type" header
            })
            const redirectData = await data.json()
            if (redirectData.redirectTo) {
                window.location.href = redirectData.redirectTo
            }

        },
        "prefill": {
            "name": "Gaurav Kumar",
            "email": "gaurav.kumar@example.com",
            "contact": "9098162141"
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    };


    async function displayRazorpay() {

        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

        if (!res) {
            alert('Razropay failed to load!!')
            return
        }

        // // const data = await fetch('http://localhost:5000/payment/success', { method: 'POST' }).then((t) =>
        // //   t.json()
        // // )

        // // console.log(data)

        // const options = {
        //     "key": "rzp_test_xee3l2g0TEEHZM", // Enter the Key ID generated from the Dashboard
        //     "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        //     "currency": "INR",
        //     "name": "Acme Corp",
        //     "description": "Test Transaction",
        //     "image": "https://example.com/your_logo",
        //     "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        //     "callback_url": "http://localhost:5000/payment/success",
        //     "notes": {
        //         "address": "Razorpay Corporate Office"
        //     },
        //     "theme": {
        //         "color": "#3399cc"
        //     },
        // };
        const paymentObject = new window.Razorpay(options);
        paymentObject.on('payment.failed', function (response) {
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
        });

        paymentObject.open();
    }



    if (!isOpen) return null;

    return (
        <div className="w-full h-full flex justify-center  items-end fixed top-0 left-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm z-50">
            <div className="modal-overlay rounded-tl-[40px] rounded-tr-[40px] border-[3px] border-solid border-lightGrey bg-white flex justify-center h-[25rem] z-1000 w-[100vw] relative">
                <div>
                    <button onClick={closeModal} ><div className=' z-50 absolute top-6 right-10'><img src={cross}></img></div></button>
                </div>
                <div className="modal-content absolute w-full  p-4 pr-6 pl-6 flex items-start mt-5 space-y-10 justify-center gap-6">
                    <div className=' w-full space-y-7'>
                        <div>
                            <h2 className='text-lg text-black font-bold flex items-center justify-center'>Add Money</h2>
                        </div>
                        <div className=' '>
                            <h2 className='text-md font-bold flex items-center justify-center'>Money will be added to your Account</h2>
                            <div className='  flex items-center justify-center '>
                                <div>
                                    <div className=' flex items-center justify-center font-semibold text-[40px]'>
                                        <h1>Rs {Amount} /-</h1>
                                    </div>

                                    <div className=' flex items-center justify-center'>
                                        <h1 className='font-semibold'>Order ID : {orderId}</h1>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className=' w-full border-solid border-t border-b p-2 '>
                            <div>
                                <h2 className=' text-[14px] font-semibold'>NOTE*</h2>
                            </div>
                            <div>
                                <h2 className='text-[12px]'>Minimum Amount to add is 100 /-</h2>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <button onClick={displayRazorpay} className=' w-[80%] p-2 text-white rounded-xl drop-shadow-md shadow-md font-semibold bg-[#060F66]'>Procced</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default MoneyModal