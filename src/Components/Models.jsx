import React, { use, useState } from 'react';
import ModelsCard from './ModelsCard';

const Models = ({ modelPromise, carts, setCarts }) => {
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
                    models.map((model, i) =>
                        <ModelsCard
                            key={i}
                            model={model}
                            carts={carts}
                            setCarts={setCarts}
                        ></ModelsCard>
                    )
                }
            </div>
        </div>
    );
};

export default Models;