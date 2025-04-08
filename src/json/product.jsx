import camera1 from "../assets/Products/camera1.png";
import camera2 from "../assets/Products/camera2.png";
import camera3 from "../assets/Products/camera3.png";
import camera4 from "../assets/Products/camera4.png";
import camera5 from "../assets/Products/camera5.png";
import camera6 from "../assets/Products/camera6.png";
import face1 from "../assets/Products/face1.png";
import face2 from "../assets/Products/face2.png";
import face3 from "../assets/Products/face3.png";
import corsair1 from "../assets/Products/head1.png";
import corsair2 from "../assets/Products/head2.png";
import corsair3 from "../assets/Products/head3.png";
import corsair4 from "../assets/Products/head4.png";
import corsair5 from "../assets/Products/head5.png";
import head1 from "../assets/Products/headphone1.png";
import head2 from "../assets/Products/headphone2.png";
import head3 from "../assets/Products/headphone3.png";
import head4 from "../assets/Products/headphone4.png";
import laptop1 from "../assets/Products/laptop1.png";
import laptop2 from "../assets/Products/laptop2.png";
import laptop3 from "../assets/Products/laptop3.png";
import laptop4 from "../assets/Products/laptop4.png";
import laptopblack1 from "../assets/Products/laptopblack1.png";
import laptopblack2 from "../assets/Products/laptopblack2.png";
import laptopblack3 from "../assets/Products/laptopblack3.png";
import monitor1 from "../assets/Products/monitor1.png";
import monitor2 from "../assets/Products/monitor2.png";
import monitor3 from "../assets/Products/monitor3.png";
import monitor4 from "../assets/Products/monitor4.png";
import mouse1 from "../assets/Products/mouse1.png";
import mouse2 from "../assets/Products/mouse2.png";
import mouse3 from "../assets/Products/mouse3.png";
import mouse4 from "../assets/Products/mouse4.png";
import mouse5 from "../assets/Products/mouse5.png";
import smartwatch1 from "../assets/Products/smartwatch1.png";
import smartwatch2 from "../assets/Products/smartwatch2.png";
import smartwatch3 from "../assets/Products/smartwatch3.png";
import smartwatch4 from "../assets/Products/smartwatch4.png";
import watch1 from "../assets/Products/watch1.png";
import watch2 from "../assets/Products/watch2.png";
import watch3 from "../assets/Products/watch3.png";
import iphone1 from "../assets/Products/iphone1.png";
import iphone2 from "../assets/Products/iphone2.png";
import iphone3 from "../assets/Products/iphone3.png";
import iphone4 from "../assets/Products/iphone4.png";
import iphone5 from "../assets/Products/iphone5.png";
import iphone6 from "../assets/Products/iphone6.png";
import iphone7 from "../assets/Products/iphone7.png";
import iphone8 from "../assets/Products/iphone8.png";
import iphone9 from "../assets/Products/iphone9.png";
import iphone10 from "../assets/Products/iphone10.png";
import iphone11 from "../assets/Products/iphone11.png";
import iphone12 from "../assets/Products/iphone12.png";

export const products = [
  {
    id: 1,
    name: "Nikon D850 DSLR Camera",
    description:
      "The Nikon D850 is a professional-grade full-frame DSLR camera, perfect for photography enthusiasts and professionals.",
    price: 2799.99,
    currency: "USD",
    category: "Electronics",
    manufacturer: "Nikon",
    availability: true,
    ratings: {
      average: 4.8,
      count: 200,
    },
    features: [
      "45.7 megapixels",
      "4K UHD video recording",
      "High-speed continuous shooting",
      "Tilting touchscreen display",
      "Built-in Wi-Fi and Bluetooth",
      "Weather-sealed construction",
    ],
    images: [camera1, camera2, camera3, camera4, camera5, camera6],
  },
  {
    id: 2,
    name: "Dove Moisturizing Body Lotion",
    description:
      "Indulge your skin with Dove Moisturizing Body Lotion, a luxurious formula designed to nourish and hydrate for smooth and radiant skin.",
    price: 12.99,
    currency: "USD",
    category: "Beauty",
    manufacturer: "Dove",
    availability: true,
    ratings: {
      average: 4.5,
      count: 150,
    },
    features: [
      "Deep hydration for soft skin",
      "Fast-absorbing formula",
      "Enriched with essential nutrients",
      "Subtle and refreshing fragrance",
      "Dermatologist-tested",
      "Suitable for all skin types",
    ],
    images: [face1, face2, face3],
  },
  {
    id: 3,
    name: "Corsair HS70 Wireless Gaming Headset",
    description:
      "Immerse yourself in high-quality audio with the Corsair HS70 Wireless Gaming Headset, designed for gamers seeking a premium audio experience.",
    price: 129.99,
    size: ['xs','s','m','l'],
    currency: "USD",
    category: "Electronics",
    manufacturer: "Corsair",
    availability: true,
    ratings: {
      average: 4.7,
      count: 180,
    },
    features: [
      "Wireless connectivity for freedom of movement",
      "Precision-tuned 50mm neodymium speaker drivers",
      "Virtual 7.1 surround sound",
      "Noise-canceling unidirectional microphone",
      "Plush memory foam ear cups for comfort",
      "Durable construction for long-lasting use",
    ],
    images: [corsair1, corsair2, corsair3, corsair4, corsair5],
  },
  {
    id: 4,
    name: "Corsair Void RGB Elite Wireless Gaming Headset",
    description:
      "Elevate your gaming experience with the Corsair Void RGB Elite Wireless Gaming Headset, featuring immersive sound, customizable RGB lighting, and comfortable design.",
    price: 149.99,
    currency: "USD",
    category: "Electronics",
    manufacturer: "Corsair",
    availability: true,
    ratings: {
      average: 4.6,
      count: 220,
    },
    features: [
      "Wireless freedom with low-latency 2.4GHz wireless connection",
      "Customizable RGB lighting with Corsair iCUE software",
      "Custom-tuned 50mm high-density neodymium drivers",
      "Omnidirectional microphone for clear communication",
      "Microfiber mesh fabric and memory foam ear cushions",
      "Durable build with metal structural components",
    ],
    images: [head1, head2, head3, head4],
  },
  {
    id: 5,
    name: "Dell XPS 13 Ultrabook",
    description:
      "Experience premium performance and portability with the Dell XPS 13 Ultrabook. Sleek design, powerful features, and an InfinityEdge display make it perfect for both work and entertainment.",
    price: 1299.99,
    currency: "USD",
    category: "Electronics",
    manufacturer: "Dell",
    availability: true,
    ratings: {
      average: 4.9,
      count: 250,
    },
    features: [
      "13.4-inch InfinityEdge display with 4K UHD resolution",
      "Intel Core i7 processor for high performance",
      "16GB RAM and 512GB SSD for fast multitasking",
      "Carbon fiber and aluminum construction for durability",
      "Backlit keyboard for comfortable typing in low light",
      "Windows 10 Home operating system",
    ],
    images: [laptop1, laptop2, laptop3, laptop4],
  },
  {
    id: 6,
    name: "HP Spectre x360 Black Edition",
    description:
      "Unleash the power of elegance with the HP Spectre x360 Black Edition. This sleek and versatile black laptop combines premium design with cutting-edge technology for a superior computing experience.",
    price: 1599.99,
    currency: "USD",
    category: "Electronics",
    manufacturer: "HP",
    availability: true,
    ratings: {
      average: 4.7,
      count: 180,
    },
    features: [
      "13.3-inch 4K OLED touch display for vibrant visuals",
      "Intel Core i5 processor for efficient multitasking",
      "8GB RAM and 512GB SSD for fast and responsive performance",
      "360-degree hinge for versatile usage modes",
      "Bang & Olufsen quad speakers for immersive audio",
      "Windows 10 Pro operating system",
    ],
    images: [laptopblack1, laptopblack2, laptopblack3],
  },
  {
    id: 7,
    name: "LG UltraGear 27GL83A-B Gaming Monitor",
    description:
      "Immerse yourself in gaming glory with the LG UltraGear 27GL83A-B Gaming Monitor. Featuring a fast refresh rate, QHD resolution, and vibrant colors, it delivers an exceptional visual experience for gamers and content creators alike.",
    price: 499.99,
    currency: "USD",
    category: "Electronics",
    manufacturer: "LG",
    availability: true,
    ratings: {
      average: 4.8,
      count: 150,
    },
    features: [
      "27-inch QHD Nano IPS display for stunning visuals",
      "Fast 144Hz refresh rate for smooth gaming",
      "1ms response time for reduced motion blur",
      "NVIDIA G-SYNC compatible for tear-free gaming",
      "HDR10 support for lifelike colors",
      "Adjustable stand for ergonomic viewing angles",
    ],
    images: [monitor1, monitor2, monitor3, monitor4],
  },
  {
    id: 8,
    name: "Logitech G Pro X Superlight Wireless Gaming Mouse",
    description:
      "Experience precision and speed with the Logitech G Pro X Superlight Wireless Gaming Mouse. Designed for professional gamers, it features a lightweight design, HERO sensor, and customizable buttons for optimal performance.",
    price: 129.99,
    currency: "USD",
    category: "Electronics",
    manufacturer: "Logitech",
    availability: true,
    ratings: {
      average: 4.9,
      count: 200,
    },
    features: [
      "Ultra-lightweight design for swift movements",
      "HERO sensor with 25,600 DPI sensitivity for accuracy",
      "Wireless connectivity for freedom of movement",
      "Zero-additive PTFE feet for smooth gliding",
      "Customizable buttons with Logitech G HUB software",
      "Long-lasting battery life for extended gaming sessions",
    ],
    images: [mouse1, mouse2, mouse3, mouse4, mouse5],
  },
  {
    id: 9,
    name: "Apple Watch Series 7",
    description:
      "Stay connected and active with the Apple Watch Series 7. With a larger and always-on Retina display, advanced health features, and seamless integration with your Apple devices, it's the perfect companion for a modern lifestyle.",
    price: 349.99,
    currency: "USD",
    category: "Wearable",
    manufacturer: "Apple",
    availability: true,
    ratings: {
      average: 4.7,
      count: 180,
    },
    features: [
      "Always-on Retina display for quick glances",
      "Advanced health monitoring, including ECG and Blood Oxygen",
      "Fitness tracking with GPS and heart rate sensor",
      "Water-resistant design for swim workouts",
      "Seamless integration with iPhone and other Apple devices",
      "Customizable watch faces and bands",
    ],
    images: [smartwatch1, smartwatch2, smartwatch3, smartwatch4],
  },
  {
    id: 10,
    name: "Rolex Submariner Date",
    description:
      "Discover timeless elegance with the Rolex Submariner Date, a classic dive watch that seamlessly combines luxury and functionality. Crafted with precision and attention to detail, it's an iconic timepiece suitable for any occasion.",
    price: 8500.0,
    currency: "USD",
    category: "Watches",
    manufacturer: "Rolex",
    availability: true,
    ratings: {
      average: 4.9,
      count: 150,
    },
    features: [
      "Automatic movement for accurate timekeeping",
      "Oystersteel case with Cerachrom ceramic bezel",
      "Water-resistant up to 300 meters (1000 feet)",
      "Date function with Cyclops lens for easy reading",
      "Iconic Mercedes hands and luminescent hour markers",
      "Oyster bracelet for durability and comfort",
    ],
    images: [watch1, watch2, watch3],
  },
  {
    id: 11,
    name: "iPhone 13",
    description:
      "Experience the next level of innovation with the iPhone 13. Packed with powerful features, an advanced camera system, and a stunning Super Retina XDR display, it's the perfect companion for those who demand the best in technology.",
    price: 799.99,
    currency: "USD",
    category: "Electronics",
    manufacturer: "Apple",
    availability: true,
    ratings: {
      average: 4.8,
      count: 200,
    },
    features: [
      "A15 Bionic chip for lightning-fast performance",
      "6.1-inch Super Retina XDR display with ProMotion technology",
      "Dual-camera system with Night mode and Deep Fusion",
      "Cinematic mode for recording stunning videos",
      "iOS 15 with new privacy features and app enhancements",
      "Ceramic Shield front cover for added durability",
    ],
    images: [
        iphone1, iphone2, iphone3, iphone4, iphone5, iphone6, iphone7, iphone8, iphone9, iphone10, iphone11, iphone12
    ],
  },
];
