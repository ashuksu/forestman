interface ProductCardProps {
    product: {
        id: number;
        name: string;
        imageUrl: string;
    };
}

export default function ProductCard({product}: ProductCardProps) {
    return (
        <div
            className="flex flex-col bg-white rounded-lg sm:rounded-xl cursor-pointer group
                    shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="aspect-[4/3] overflow-hidden">
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <h3 className="flex-1 flex items-center justify-center px-2 py-1 w-full
                    text-center text-lg font-semibold text-gray-800">
                <span className="limited-text limited-text-2">
                    {product.name}
                </span>
            </h3>
        </div>
    );
}