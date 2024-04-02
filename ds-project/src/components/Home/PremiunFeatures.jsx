// PremiumFeatures.js
import React from 'react';

const PremiumFeatures = () => {
    return (
        <div className="bg-gray-100 py-8 mt-24 pt-24">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold mb-4">Premium Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Premium feature cards */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
                        <p className="text-gray-600">Get free shipping on all orders with premium membership.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Exclusive Deals</h3>
                        <p className="text-gray-600">Access exclusive deals and discounts available only to premium members.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Priority Support</h3>
                        <p className="text-gray-600">Receive priority customer support for all your queries.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PremiumFeatures;
