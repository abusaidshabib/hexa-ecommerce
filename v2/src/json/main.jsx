import img1 from "../assets/HomePage/image1.jpg";
import img2 from "../assets/HomePage/image2.jpg";
import img3 from "../assets/HomePage/image3.jpg";
import img4 from "../assets/HomePage/image4.jpg";
import img5 from "../assets/HomePage/image5.jpg";
import img6 from "../assets/HomePage/image6.jpg";
import img7 from "../assets/HomePage/image7.jpg";
import img8 from "../assets/HomePage/image8.jpg";
import img9 from "../assets/HomePage/image9.jpg";
import cat1 from "../assets/Category/blackpodium.png";
import cat2 from "../assets/Category/camera.png";
import cat3 from "../assets/Category/facecare.png";
import cat4 from "../assets/Category/glass.png";
import cat5 from "../assets/Category/headphone.png";
import cat6 from "../assets/Category/headphone2.png";
import cat7 from "../assets/Category/iphone.png";
import col1 from "../assets/Collection/Android.jpg";
import col2 from "../assets/Collection/Bags.jpg";
import col3 from "../assets/Collection/Headphone.jpg";
import col4 from "../assets/Collection/faceProduct.jpg";
import { IoGiftOutline } from "react-icons/io5";
import { TiMessageTyping } from "react-icons/ti";
import { AiOutlineGlobal } from "react-icons/ai";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdSecurity } from "react-icons/md";
import collectionImg1 from "../assets/Collection/BagCol2.jpg";
import collectionImg2 from "../assets/Collection/CurologyCol2.jpg";
import collectionImg3 from "../assets/Collection/ParfumCol2.jpg";
import collectionImg4 from "../assets/Collection/glassbottleCol2.jpg";
import collectionImg5 from "../assets/Collection/headPhoneCol2.jpg";

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
    title: "Mobiles",
  },
];

export const collection = [
  {
    id: 1,
    image: col1,
    title: "Android World",
    subTitle: "Unleashing the Infinite Possibilities of the Android Universe",
  },
  {
    id: 2,
    image: col2,
    title: "Carry in Style",
    subTitle:
      "Discover Fashionable Functionality with Our Trendsetting Bag Designs",
  },
  {
    id: 3,
    image: col3,
    title: "Harmony in Sound",
    subTitle:
      "Immerse Yourself in a Symphony of Precision and Style with Our Premium Range of Headphones",
  },
  {
    id: 4,
    image: col4,
    title: "Radiant Reverie",
    subTitle:
      "Discover the Artistry of Timeless Beauty with Our Exquisite Collection",
  },
];

export const collectionName = [
  {
    id: 0,
    title: "Devices",
  },
  {
    id: 1,
    title: "Beauty Product",
  },
  {
    id: 2,
    title: "Fashions",
  },
];

export const features = [
  {
    id: 0,
    title: "Surprise Gifts",
    subTitle: "Because Everyone Loves a Little Extra",
    icon: <IoGiftOutline />,
  },
  {
    id: 1,
    title: "Instant Chat Assistance",
    subTitle: "Connect with Us Anytime, Anywhere",
    icon: <TiMessageTyping />,
  },
  {
    id: 2,
    title: "Global Shipping",
    subTitle: "Bringing the World to Your Doorstep",
    icon: <AiOutlineGlobal />,
  },
  {
    id: 3,
    title: "Fortified Security",
    subTitle: "Advanced Encryption for a Safe and Secure Shopping Experience",
    icon: <MdSecurity />,
  },
];

export const collectionFeatures = [
  {
    id: 1,
    title: "Bag Collection",
    subtitle: "Explore Elegance: Unveil the Latest in Chic Carryalls",
    img: collectionImg1,
  },
  {
    id: 2,
    title: "Curology Essentials",
    subtitle: "Your Personalized Skincare Journey Begins Here",
    img: collectionImg2,
  },
  {
    id: 3,
    title: "Glass Bottle Elegance",
    subtitle: "Sip in Style: Elevate Your Hydration with Glass",
    img: collectionImg3,
  },
  {
    id: 4,
    title: "Headphone Harmony",
    subtitle: "Immerse Yourself: Discover Sonic Perfection",
    img: collectionImg4,
  },
  {
    id: 5,
    title: "Perfume Panache",
    subtitle: "Scented Stories: Find Your Signature Fragrance",
    img: collectionImg5,
    excss: "col-span-2"
  },
];

export const collection2 = [
  {
    id: 1,
    title: "Bag Collection",
    subtitle: "Explore Elegance: Unveil the Latest in Chic Carryalls",
    img: collectionImg1,
    link: "Shop Now",
  },
  {
    id: 2,
    title: "Curology Essentials",
    subtitle: "Your Personalized Skincare Journey Begins Here",
    img: collectionImg2,
    link: "Shop Now",
  },
];