import React from 'react';

const Cart = ({ carts }) => {
    console.log('carts data', carts);
    return (
        <div className='p-10 space-y-4'>
            <h1 className="text-2xl font-bold">Your cart</h1>
            {
                carts.map((item, i) => <div className='flex items-center justify-between border-gray-300 rounded-lg bg-base-200 p-5' key={i}>
                    <div className="">
                        <img className='h-40 w-40 object-contain ' src={item.image} alt="" />
                    </div>
                    <div className="">
                        <h2 className="text-xl font-bold">{item.title}</h2>
                    </div>
                    <div className="">
                        <p className="text-xl font-bold text-orange-600">${item.price}/Month</p>
                    </div>
                </div>)
            }
            <div className="flex justify-between bg-black text-white p-5 rounded-xl text-2xl">
                <div className="font-bold">Total: 0</div>
            </div>
        </div>
    );
};

export default Cart;