import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PremiumFeatures = () => {
    const [selectedPlan, setSelectedPlan] = useState('freeTrial'); // default selection

    const handlePlanChange = (event) => {
        setSelectedPlan(event.target.value);
    };

    return (
        <div className="bg-gray-100 py-8 mt-24 pt-24">
            <div className="container mx-auto py-20 px-20">
                <h2 className="text-3xl font-semibold mb-10">Premium Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-40">
                    {/* Premium feature cards */}
                    <div className="bg-white text-center rounded-lg shadow-md">
                        <input 
                            type="radio"
                            id="freeTrial"
                            name="plan"
                            value="freeTrial"
                            checked={selectedPlan === 'freeTrial'}
                            onChange={handlePlanChange}
                            className=" h-6 w-6"
                        />
                        <label htmlFor="freeTrial">Select</label>
                        <h3 className="text-2xl p-5 font-semibold mb-2">7 - Day <br />Free Trial</h3>
                        <h2 className='font-semibold text-xl'><span className='text-green-900'>Pay</span><br /> After Free Trial</h2>
                        <p className="p-5 text-gray-600">Pay via <span className='text-green-900'>UPI</span> or Credit Card / Debit Card</p>
                        <div className='mb-5 text-xl '>
                            <Link to='/upi'> <button className='rounded-xl bg-red-500 px-4 py-1 hover:bg-blue-600 hover:text-white' >Start Free Trial</button></Link>
                        </div>
                    </div>
                    <div className="bg-white text-center rounded-lg shadow-md">
                        <input
                            type="radio"
                            id="monthlySubscription"
                            name="plan"
                            value="monthlySubscription"
                            checked={selectedPlan === 'monthlySubscription'}
                            onChange={handlePlanChange}
                        />
                        <label htmlFor="monthlySubscription">Select</label>
                        <h3 className="text-2xl p-5 font-semibold mb-2">Monthly<br />Subscription</h3>
                        <h2 className='font-semibold text-xl'><span className='text-green-900'>Pay</span><br /> After Free Trial</h2>
                        <p className="p-5 text-gray-600">Pay via <span className='text-green-900'>UPI</span> or Credit Card / Debit Card</p>
                        <div className='mb-5 text-xl '>
                            <Link to='/upi'> <button className='rounded-xl bg-red-500 px-4 py-1 hover:bg-blue-600 hover:text-white' >Join Monthly</button></Link>
                        </div>
                    </div>
                    <div className="bg-white text-center rounded-lg shadow-md">
                        <input
                            type="radio"
                            id="yearlySubscription"
                            name="plan"
                            value="yearlySubscription"
                            checked={selectedPlan === 'yearlySubscription'}
                            onChange={handlePlanChange}
                        />
                        <label htmlFor="yearlySubscription">Select</label>
                        <h3 className="text-2xl p-5 font-semibold mb-2">Yearly<br />subscription</h3>
                        <h2 className='font-semibold text-xl'><span className='text-green-900'>Pay</span><br /> After Free Trial</h2>
                        <p className="p-5 text-gray-600">Pay via <span className='text-green-900'>UPI</span> or Credit Card / Debit Card</p>
                        <div className='mb-5 text-xl '>
                            <Link to='/upi'> <button className='rounded-xl bg-red-500 px-4 py-1 hover:bg-blue-600 hover:text-white' >Join Yearly</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PremiumFeatures;
