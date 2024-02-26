import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Beranda",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Sucor Story",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "Tentang Kami",
        path: "/about",
        newTab: false,
      },
      {
        id: 22,
        title: "Tata Kelola Perusahaan",
        path: "/about",
        newTab: false,
      },
      {
        id: 23,
        title: "Penghargaan",
        path: "/about",
        newTab: false,
      },
      {
        id: 24,
        title: "Karir",
        path: "/about",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "Strategi",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Strategi Investasi",
        path: "/about",
        newTab: false,
      },
      {
        id: 32,
        title: "Tim Kami",
        path: "/about",
        newTab: false,
      },
      {
        id: 33,
        title: "Produk",
        path: "/about",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Perjalanan",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Sucor Klik",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Kegiatan",
        path: "/about",
        newTab: false,
      },
    ],
  },
  {
    id: 5,
    title: "Konten",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "Insight",
        path: "/about",
        newTab: false,
      },
      {
        id: 52,
        title: "Blog",
        path: "/about",
        newTab: false,
      },
      {
        id: 54,
        title: "Pusat Media",
        path: "/about",
        newTab: false,
      },
      {
        id: 55,
        title: "Pengumuman",
        path: "/about",
        newTab: false,
      },
    ],
  },
  {
    id: 6,
    title: "Keberlanjutan",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "ESG",
        path: "/about",
        newTab: false,
      },
      {
        id: 62,
        title: "Dana Kebajikan",
        path: "/contact",
        newTab: false,
      },
      {
        id: 63,
        title: "Box of Happiness",
        path: "/blog",
        newTab: false,
      },
      {
        id: 64,
        title: "Blog Sidebar Page",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 65,
        title: "Blog Details Page",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 66,
        title: "Sign In Page",
        path: "/signin",
        newTab: false,
      },
      {
        id: 67,
        title: "Sign Up Page",
        path: "/signup",
        newTab: false,
      },
      {
        id: 68,
        title: "Error Page",
        path: "/error",
        newTab: false,
      },
    ],
  },
  {
    id: 7,
    title: "Kontak",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
