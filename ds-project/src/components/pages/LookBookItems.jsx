import React from 'react';

const LookbookItem = ({ item }) => {
  return (
    <div className="relative group">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-auto group-hover:opacity-50 transition-opacity"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="bg-white px-4 py-2 rounded shadow-lg">
          <p className="text-lg font-bold">{item.name}</p>
          <p className="text-gray-500">{item.price}</p>
        </div>
      </div>
      <a href={item.link} className="absolute inset-0" />
    </div>
  );
};

const LookBookItems = () => {
  const items = [
    {
      name: 'Item 1',
      image: 'https://ps-beautyshop.myshopify.com/cdn/shop/files/cosmetics-1543276_640_1024x1024.jpg?v=1613679351',
      price: '$20',
    //   link: 'https://example.com/item1',
    },
    {
      name: 'Item 2',
      image: 'https://ps-beautyshop.myshopify.com/cdn/shop/files/cosmetics-1367779_640_1024x1024.jpg?v=1613679352',
      price: '$30',
    //   link: 'https://example.com/item2',
    },
    // Add more items as needed
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, index) => (
        <LookbookItem key={index} item={item} />
      ))}
    </div>
  );
};

export default LookBookItems;
