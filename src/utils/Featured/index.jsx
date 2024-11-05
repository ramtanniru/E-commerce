import React from 'react';

export default function Featured() {
    const products = [
        {
            title: "PlayStation 5",
            description: "Black and White version of the PS5 coming out on sale.",
            image: "/home/featured/playstation.png", // Replace with your image path
            large: true,
        },
        {
            title: "Women's Collections",
            description: "Featured woman collections that give you another vibe.",
            image: "/home/featured/women.png", // Replace with your image path
        },
        {
            title: "Speakers",
            description: "Amazon wireless speakers",
            image: "/home/featured/speakers.png", // Replace with your image path
        },
        {
            title: "Perfume",
            description: "GUCCI INTENSE OUD EDP",
            image: "/home/featured/perfume.png", // Replace with your image path
        },
    ];

    return (
        <div className="grid grid-cols-4 gap-4 w-full h-screen">
            <div
                className="relative col-span-2 row-span-2 rounded-lg overflow-hidden shadow-lg bg-black"
                style={{ backgroundImage: `url(${products[0].image})`, backgroundSize: 'cover' }}
            >
                <div className="absolute bottom-4 left-4 text-white flex flex-col justify-start items-start gap-1">
                    <h2 className="text-2xl font-bold">{products[0].title}</h2>
                    <p className='text-sm'>{products[0].description}</p>
                    <button className="underline-offset-4 underline text-base font-medium">Shop Now</button>
                </div>
            </div>
            <div
                className="relative col-span-2 row-span-1 rounded-lg overflow-hidden shadow-lg bg-black"
                style={{ backgroundImage: `url(${products[1].image})`, backgroundSize: 'cover' }}
            >
                <div className="absolute bottom-4 left-4 text-white flex flex-col justify-start items-start gap-1">
                    <h2 className="text-2xl font-bold">{products[1].title}</h2>
                    <p className='text-sm'>{products[1].description}</p>
                    <button className="underline-offset-4 underline text-base font-medium">Shop Now</button>
                </div>
            </div>
            {products.slice(2).map((product, index) => (
                <div
                    key={index}
                    className="relative col-span-1 row-span-1 rounded-lg overflow-hidden shadow-lg bg-black"
                    style={{ backgroundImage: `url(${product.image})`, backgroundSize: 'cover' }}
                >
                    <div className="absolute bottom-4 left-4 text-white flex flex-col justify-start items-start gap-1">
                        <h2 className="text-2xl font-bold">{product.title}</h2>
                        <p className='text-sm'>{product.description}</p>
                        <button className="underline-offset-4 underline text-base font-medium">Shop Now</button>
                    </div> 
                </div>
            ))}
        </div>
    );
}
