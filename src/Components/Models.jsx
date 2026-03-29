import React, { use } from 'react';

const Models = ({ modelPromise }) => {
    const models = use(modelPromise)
    console.log('promise', models);

    return (
        <div className='pb-20'>
            <div className="text-center mb-10" >
                <h2 className='text-5xl font-bold pb-3'>Choose Your AI Model</h2>
                <p className="">One Subscription gives you access to all frontier AI:Models </p>
            </div>

            <div className="grid md:grid-cols-3 grid-cols-1 gap-5 w-10/12 mx-auto p-3 mb-20">
                {
                    models.map((model) => 
                        <div className='shadow-lg rounded-lg border border-zinc-200'>
                            <div className="flex justify-center items-center h-56 bg-zinc-200 overflow-hidden">
                                <img className='h-40 w-40 object-contain ' src={model?.image} alt="" />
                            </div>

                            <div className="p-4 space-y-3">
                                <h2 className="text-2xl font-bold">{model.title}</h2>
                                <p className="">{model.description}</p>
                                <div className="text-2xl font-bold">
                                    ${model.price}/month
                                </div>
                            <button className="btn w-full bg-orange-500 text-white rounded-lg mt-5">Subscribe Now</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Models;