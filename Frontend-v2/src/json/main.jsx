import img1 from "../assets/HomePage/image1.jpg";
import img2 from "../assets/HomePage/image2.jpg";
import img3 from "../assets/HomePage/image3.jpg";
import img4 from "../assets/HomePage/image4.jpg";
import img5 from "../assets/HomePage/image5.jpg";
import img6 from "../assets/HomePage/image6.jpg";
import img7 from "../assets/HomePage/image7.jpg";
import img8 from "../assets/HomePage/image8.jpg";
import img9 from "../assets/HomePage/image9.jpg";
import cat1 from "../assets/Category/blackpodium.jpg";
import cat2 from "../assets/Category/camera.jpg";
import cat3 from "../assets/Category/facecare.jpg";
import cat4 from "../assets/Category/glass.jpg";
import cat5 from "../assets/Category/headphone.png";
import cat6 from "../assets/Category/headphone2.jpg";
import cat7 from "../assets/Category/iphone.jpg";

export const menu = [
  {
    id: 1,
    name: "home",
    url: "/",
  },
  {
    id: 2,
    name: "catalog",
    children: [
      {
        id: 1,
        name: "airpods",
      },
      {
        id: 2,
        name: "Luxury Watches",
      },
    ],
  },
  {
    id: 3,
    name: "new arrivals",
    url: "/new-arrivals",
  },
  {
    id: 4,
    name: "about",
    url: "/about",
  },
  {
    id: 5,
    name: "contact",
    url: "/contact",
  },
  {
    id: 6,
    name: "blog",
    url: "/blog",
  },
  {
    id: 7,
    name: "shop",
    url: "/shop",
  },
  {
    id: 8,
    name: "faq's",
    url: "/faq",
  },
  {
    id: 9,
    name: "refund policy",
    url: "/refund-policy",
  },
  {
    id: 10,
    name: "privacy policy",
    url: "/privacy-policy",
  },
];

export const images = [
  {
    id: 1,
    image: img1,
    title: "Explore Our Exquisite Watch Collection",
  },
  {
    id: 2,
    image: img8,
    title: "Elevate Your Mornings with Our Exquisite Coffee Packets",
  },
  {
    id: 5,
    image: img6,
    title: "Fresh Tulsi Leaves Packed for Your Wellness Journey",
  },
];

export const heroImg = [
  {
    id: 1,
    image: img2,
    title: "Premium Coffee Packets for a Perfect Brew at Home!",
  },
];

export const heroBtm = [
  {
    id: 1,
    image: img3,
    title: "Watch for Sale – Limited Edition!",
  },
  {
    id: 2,
    image: img4,
    title: "Elevate Your Style with Our Exclusive Bag Collection",
  },
  {
    id: 3,
    image: img5,
    title: "Siri is a virtual assistant developed",
  },
  {
    id: 5,
    image: img9,
    title: "Excellent Condition",
  },
];

export const category = [
  {
    id: 1,
    image: cat6,
    title: "Wired Headphone",
  },
  {
    id: 2,
    image: cat2,
    title: "Camera",
  },
  {
    id: 3,
    image: cat3,
    title: "Face Care",
  },
  {
    id: 4,
    image: cat4,
    title: "Sunglasses",
  },
  {
    id: 5,
    image: cat5,
    title: "Headphone",
  },
  {
    id: 6,
    image: cat1,
    title: "Black Podium",
  },
  {
    id: 7,
    image: cat7,
    title: "Mobiles"
  }
];