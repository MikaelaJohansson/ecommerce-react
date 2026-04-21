const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop", 
    description:
      "Premium wireless headphones with noise cancellation and long battery life.",
    category: "audio",
    details: {
      brand: "SoundMax",
      battery: "Up to 30h Battery Life",
      bluetooth: "Bluetooth 5.3",
      weight: "250g",
      audio: "Built-in Microphone",
      extra: "Active Noise Cancellation",
    },
    shipping: {
      warranty: "2 Year Warranty",
      freeShipping: "Free shipping over €50",
    },
  },

  {
    id: 2,
    name: "Smart Watch",
    price: 249.99,
    image:
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&h=500&fit=crop",
    description:
      "Feature-rich smartwatch with fitness tracking, heart rate monitor, and notifications.",
    category: "wearables",
    details: {
      brand: "TimeTech",
      battery: "Up to 48h Battery Life",
      bluetooth: "Bluetooth 5.2",
      weight: "Lightweight Design",
      audio: "Notifications Support",
      extra: "Heart Rate Monitor",
    },
    shipping: {
      warranty: "2 Year Warranty",
      freeShipping: "Free shipping over €50",
    },
  },

  {
    id: 3,
    name: "Laptop Stand",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1629317480826-910f729d1709?w=500&h=500&fit=crop",
    description:
      "Adjustable laptop stand for a more ergonomic and comfortable workspace.",
    category: "accessories",
    details: {
      brand: "ErgoLift",
      battery: "No Battery",
      bluetooth: "No Bluetooth",
      weight: "1.2kg",
      audio: "No Audio",
      extra: "Adjustable Height",
    },
    shipping: {
      warranty: "1 Year Warranty",
      freeShipping: "Free shipping over €50",
    },
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
    details: {
      brand: "KeyPro",
      battery: "Wired Power",
      bluetooth: "No Bluetooth",
      weight: "Full Size Layout",
      audio: "Quiet Typing Design",
      extra: "Mechanical Switches",
    },
    shipping: {
      warranty: "2 Year Warranty",
      freeShipping: "Free shipping over €50",
    },
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
    details: {
      brand: "ProAim",
      battery: "Wired Power",
      bluetooth: "No Bluetooth",
      weight: "Ergonomic Shape",
      audio: "Silent Click Support",
      extra: "16000 DPI Sensor",
    },
    shipping: {
      warranty: "2 Year Warranty",
      freeShipping: "Free shipping over €50",
    },
  },

  {
    id: 6,
    name: "Bluetooth Speaker",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1507878566509-a0dbe19677a5?w=500&h=500&fit=crop",
    description:
      "Portable Bluetooth speaker with rich sound and strong battery performance.",
    category: "audio",
    details: {
      brand: "SoundBox",
      battery: "Up to 12h Battery Life",
      bluetooth: "Bluetooth 5.0",
      weight: "Portable Design",
      audio: "Strong Bass",
      extra: "Water Resistant",
    },
    shipping: {
      warranty: "2 Year Warranty",
      freeShipping: "Free shipping over €50",
    },
  },

  {
    id: 7,
    name: "4K Monitor",
    price: 399.99,
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&h=500&fit=crop",
    description: "Ultra HD monitor with stunning clarity and color accuracy.",
    category: "computer",
    details: {
      brand: "ViewPro",
      battery: "Cable Powered",
      bluetooth: "No Bluetooth",
      weight: "27 inch",
      audio: "Built-in Display Audio Support",
      extra: "4K UHD Resolution",
    },
    shipping: {
      warranty: "2 Year Warranty",
      freeShipping: "Free shipping over €50",
    },
  },

  {
    id: 8,
    name: "USB-C Hub",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1616578273461-3a99ce422de6?w=500&h=500&fit=crop",
    description:
      "Expand your laptop with multiple ports using a single USB-C connection.",
    category: "accessories",
    details: {
      brand: "HubTech",
      battery: "No Battery",
      bluetooth: "No Bluetooth",
      weight: "Compact Design",
      audio: "No Audio",
      extra: "6-in-1 Ports",
    },
    shipping: {
      warranty: "1 Year Warranty",
      freeShipping: "Free shipping over €50",
    },
  },

  {
    id: 9,
    name: "Webcam HD",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1623949556303-b0d17d198863?w=500&h=500&fit=crop",
    description: "High-definition webcam for streaming and video calls.",
    category: "computer",
    details: {
      brand: "Logi",
      battery: "USB Powered",
      bluetooth: "No Bluetooth",
      weight: "Lightweight Build",
      audio: "Built-in Microphone",
      extra: "1080p Full HD",
    },
    shipping: {
      warranty: "2 Year Warranty",
      freeShipping: "Free shipping over €50",
    },
  },

  {
    id: 10,
    name: "Wireless Charger",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1633381638729-27f730955c23?w=500&h=500&fit=crop",
    description: "Fast wireless charging pad for compatible devices.",
    category: "accessories",
    details: {
      brand: "ChargeX",
      battery: "15W Charging Output",
      bluetooth: "No Bluetooth",
      weight: "Slim Design",
      audio: "Silent Charging",
      extra: "Qi-enabled Devices",
    },
    shipping: {
      warranty: "1 Year Warranty",
      freeShipping: "Free shipping over €50",
    },
  },

  {
    id: 11,
    name: "office chair",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1688578735427-994ecdea3ea4?w=500&h=500&fit=crop",
    description: "Comfortable gaming chair with ergonomic support.",
    category: "furniture",
    details: {
      brand: "GameSeat",
      battery: "No Battery",
      bluetooth: "No Bluetooth",
      weight: "Adjustable Height",
      audio: "No Audio",
      extra: "Lumbar Support",
    },
    shipping: {
      warranty: "2 Year Warranty",
      freeShipping: "Free shipping over €50",
    },
  },

  {
    id: 12,
    name: "External SSD",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1577538926210-fc6cc624fde2?w=500&h=500&fit=crop",
    description: "High-speed external SSD for fast data transfer.",
    category: "computer",
    details: {
      brand: "FastDrive",
      battery: "No Battery",
      bluetooth: "No Bluetooth",
      weight: "Portable Design",
      audio: "No Audio",
      extra: "1TB Storage",
    },
    shipping: {
      warranty: "2 Year Warranty",
      freeShipping: "Free shipping over €50",
    },
  },

  {
    id: 13,
    name: "Smartphone Stand",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1760443728221-0feabf5a0130?w=500&h=500&fit=crop",
    description: "Minimalist stand for smartphones.",
    category: "accessories",
    details: {
      brand: "StandIt",
      battery: "No Battery",
      bluetooth: "No Bluetooth",
      weight: "Lightweight Aluminum",
      audio: "No Audio",
      extra: "Adjustable Viewing Angle",
    },
    shipping: {
      warranty: "1 Year Warranty",
      freeShipping: "Free shipping over €50",
    },
  },

  {
    id: 14,
    name: "Noise Cancelling Earbuds",
    price: 119.99,
    image:
      "https://images.unsplash.com/photo-1505236273191-1dce886b01e9?w=500&h=500&fit=crop",
    description: "True wireless earbuds with noise cancellation.",
    category: "audio",
    details: {
      brand: "SoundMini",
      battery: "Up to 20h Battery Life",
      bluetooth: "Bluetooth 5.3",
      weight: "Compact Charging Case",
      audio: "Built-in Microphone",
      extra: "Noise Cancelling",
    },
    shipping: {
      warranty: "2 Year Warranty",
      freeShipping: "Free shipping over €50",
    },
  },

  {
    id: 15,
    name: "Desk Lamp LED",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&h=500&fit=crop",
    description: "LED desk lamp with adjustable brightness.",
    category: "furniture",
    details: {
      brand: "LightPro",
      battery: "Cable Powered",
      bluetooth: "No Bluetooth",
      weight: "Adjustable Design",
      audio: "No Audio",
      extra: "Energy Efficient LED",
    },
    shipping: {
      warranty: "1 Year Warranty",
      freeShipping: "Free shipping over €50",
    },
  },
];

export function getProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((p) => p.id === Number(id));
}