import React, { useState } from "react";

const LookbookItem = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="relative group    ">
      <img
        src={item.image}
        alt={item.name}
        className="max-w-4xl h-96 relative  group-hover:opacity-50 transition-opacity "
      />
      <div className="absolute inset-0 flex items-center left-32 w-full  justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div>
          {isHovered && (
            <div className="bg-white px-4 py-2 w-32   shadow-lg">
              <img
                className="  ease-in duration-500     "
                src="https://ps-beautyshop.myshopify.com/cdn/shop/products/image_22_157x.png?v=1579673742  "
                alt="Hovered Image"
              />
              <p className="text-lg text-center font-bold text-cyan-400  ">
                {item.name}
              </p>
              <p className="text-center text-gray-500">{item.price}</p>
            </div>
          )}
        </div>

        <p
          onMouseEnter={() => setIsHovered(true)}
          className="text-gray-500 relative left-32 ease-in duration-500 bg-white px-4 py-2 rounded-full shadow-lg   mt-5"
        >
          1
        </p>
      </div>
      <a href={item.link} className="absolute inset-0" />
    </div>
  );
};

const LookBookItems = () => {
  const items = [
    {
      name: "Item 1",
      image:
        "https://ps-beautyshop.myshopify.com/cdn/shop/files/cosmetics-1543276_640_1024x1024.jpg?v=1613679351",
      price: "$20",
      //   link: 'https://example.com/item1',
    },
    {
      name: "Item 2",
      image:
        "https://ps-beautyshop.myshopify.com/cdn/shop/files/cosmetics-1367779_640_1024x1024.jpg?v=1613679352",
      price: "$30",
      //   link: 'https://example.com/item2',
    },
    // Add more items as needed
  ];

  return (
    <div className="grid   ps-10  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[40%]   ml-32 mt-14   top-10  ">
      {items.map((item, index) => (
        <LookbookItem key={index} item={item} />
      ))}
    </div>
  );
};

export default LookBookItems;
