import img1 from "../assets/HomePage/image1.jpg";
import img2 from "../assets/HomePage/image2.jpg";
import img3 from "../assets/HomePage/image3.jpg";
import img4 from "../assets/HomePage/image4.jpg";
import img5 from "../assets/HomePage/image5.jpg";
import img6 from "../assets/HomePage/image6.jpg";
import img7 from "../assets/HomePage/image7.jpg";

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
    title: "Program1",
  },
  {
    id: 2,
    image: img2,
    title: "Program2",
  },
  {
    id: 3,
    image: img3,
    title: "Program3",
  },
  {
    id: 4,
    image: img4,
    title: "Program4",
  },
  {
    id: 5,
    image: img5,
    title: "Program5",
  },
];
