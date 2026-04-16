const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    description:
      "Premium wireless headphones with noise cancellation and long battery life.",
    category: "audio",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 249.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    description:
      "Feature-rich smartwatch with fitness tracking, heart rate monitor, and notifications.",
    category: "wearables",
  },
  {
    id: 3,
    name: "Laptop Stand",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop",
    description:
      "Adjustable laptop stand for a more ergonomic and comfortable workspace.",
    category: "accessories",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500&h=500&fit=crop",
    description:
      "Responsive mechanical keyboard with tactile switches and clean design.",
    category: "computer",
  },
  {
    id: 5,
    name: "Gaming Mouse",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop",
    description:
      "Ergonomic gaming mouse with high precision sensor and customizable buttons.",
    category: "computer",
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500&h=500&fit=crop",
    description:
      "Portable Bluetooth speaker with rich sound and strong battery performance.",
    category: "audio",
  },
];

export function getProducts(){
  return products;
}

export function getProductById(id){
  return products.find((p) => p.id === Number (id));
}