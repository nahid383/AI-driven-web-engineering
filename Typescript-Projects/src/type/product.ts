type Product = {
    id: number;
    name: string;
    price: number;
    description?: string;
};

const products: Product[] = [
    {
        id: 1,
        name: "Laptop",
        price: 75000,
        description: "A powerful laptop for programming and development."
    },
    {
        id: 2,
        name: "Smartphone",
        price: 35000,
        description: "A modern smartphone with a high-quality camera."
    },
    {
        id: 3,
        name: "Headphones",
        price: 5000,
        description: "Wireless headphones with noise cancellation."
    },
    {
        id: 4,
        name: "Keyboard",
        price: 3000,
        description: "Mechanical keyboard suitable for coding and gaming."
    },
    {
        id: 5,
        name: "Mouse",
        price: 1500,
        description: "Ergonomic wireless mouse with precise tracking."
    }
];