import React, { useState } from 'react';

const Card = ({ imageSrc, title, paragraph1, paragraph2 }) => {
    const [hovered, setHovered] = useState(false);
    // hrishi
    return (
        <div className=" bg-gray-200 p-2 rounded-lg shadow-lg overflow-hidden m-2">
            <img
                src={imageSrc}
                alt={title}
                className="w-full rounded-lg mb-2"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            />
            <div
                className="absolute left-0 bottom-0 h-1 bg-blue-500"
                style={{
                    width: hovered ? '100%' : 0,
                    transition: 'width 0.3s',
                }}
            />
            <h2 className="text-lg font-bold mb-1">{title}</h2>
            <p className="text-gray-700 mb-2">{paragraph1}</p>
            <p className="text-gray-700">{paragraph2}</p>
        </div>
    );
};

const Bottom = () => {
    return (
        <div className="flex relative z-10 justify-around bg-white p-4">
            <Card
                imageSrc="https://ps-beautyshop.myshopify.com/cdn/shop/articles/Blog_image_2_570x.png?v=1579672029"
                title="Card 1"
                paragraph1="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                paragraph2="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
            <Card
                imageSrc="https://ps-beautyshop.myshopify.com/cdn/shop/articles/Blog_image_2_570x.png?v=1579672029"
                title="Card 2"
                paragraph1="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                paragraph2="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
            <Card
                imageSrc="https://ps-beautyshop.myshopify.com/cdn/shop/articles/Blog_image_2_570x.png?v=1579672029"
                title="Card 3"
                paragraph1="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                paragraph2="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
        </div>
    );
};

export default Bottom;
