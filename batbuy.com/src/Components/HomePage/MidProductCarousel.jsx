import React from "react";
import "./MidProductCarousel.css";
import ProductCard from "../Products/ProductCard";
import { useRef } from "react";

const products = [
  {
    isNew: true,
    id: 26,
    image: "https://m.media-amazon.com/images/I/51LHi3QLL4L._AC_UY218_.jpg",
    url: "https://www.amazon.com/MSI-Creator-M16-Content-Creation/dp/B09T1HTGDQ/ref=sr_1_22?crid=177RUHTKQSP6I&keywords=laptops+black&qid=1671009716&sprefix=laptops+blac%2Caps%2C448&sr=8-22",
    name: 'MSI Creator M16 16" Content Creation Laptop: Intel Core i7-12650H RTX 3060 32GB 1TB NVMe SSD, QHD+ 16:10 60Hz 100% DCI-P3, 180-Degree Lay-Flat, Cooler Boost Trinity+, Win 11 Home: Black A12UEV-468',
    name_url:
      "https://www.amazon.com/MSI-Creator-M16-Content-Creation/dp/B09T1HTGDQ/ref=sr_1_22?crid=177RUHTKQSP6I&keywords=laptops+black&qid=1671009716&sprefix=laptops+blac%2Caps%2C448&sr=8-22",
    price: 1619,
    price_url:
      "https://www.amazon.com/MSI-Creator-M16-Content-Creation/dp/B09T1HTGDQ/ref=sr_1_22?crid=177RUHTKQSP6I&keywords=laptops+black&qid=1671009716&sprefix=laptops+blac%2Caps%2C448&sr=8-22",
    rating: 4.2,
  },
  {
    isNew: true,
    id: 27,
    image: "https://m.media-amazon.com/images/I/71PnneF5LRL._AC_UY218_.jpg",
    url: "https://www.amazon.com/MSI-Thin-10UE-Gaming-Laptop/dp/B095L9QXMM/ref=sr_1_23?crid=177RUHTKQSP6I&keywords=laptops+black&qid=1671009716&sprefix=laptops+blac%2Caps%2C448&sr=8-23",
    name: 'MSI GF65 Thin 10UE Gaming Laptop: 15.6" 144hz IPS-Level Screen, Intel 10th Gen i5-10500H, NVIDIA GeForce RTX3060, 512GB SSD, 8GB Memory, Black',
    name_url:
      "https://www.amazon.com/MSI-Thin-10UE-Gaming-Laptop/dp/B095L9QXMM/ref=sr_1_23?crid=177RUHTKQSP6I&keywords=laptops+black&qid=1671009716&sprefix=laptops+blac%2Caps%2C448&sr=8-23",
    price: 799,
    price_url:
      "https://www.amazon.com/MSI-Thin-10UE-Gaming-Laptop/dp/B095L9QXMM/ref=sr_1_23?crid=177RUHTKQSP6I&keywords=laptops+black&qid=1671009716&sprefix=laptops+blac%2Caps%2C448&sr=8-23",
    rating: 4.2,
  },
  {
    isNew: true,
    id: 46,
    image: "https://m.media-amazon.com/images/I/61ZNIHIEUqL._AC_UY218_.jpg",
    url: "https://www.amazon.com/Samsung-Unlocked-Smartphone-Intelligent-Graphite/dp/B09BFTMQH9/ref=sr_1_8?crid=149YJHLUZWX28&keywords=phones&qid=1671010881&sprefix=phon%2Caps%2C575&sr=8-8",
    name: "SAMSUNG Galaxy S21 FE 5G Cell Phone, Factory Unlocked Android Smartphone, 128GB, 120Hz Display Screen, Pro Grade Camera, All Day Intelligent Battery, US Version, Graphite",
    name_url:
      "https://www.amazon.com/Samsung-Unlocked-Smartphone-Intelligent-Graphite/dp/B09BFTMQH9/ref=sr_1_8?crid=149YJHLUZWX28&keywords=phones&qid=1671010881&sprefix=phon%2Caps%2C575&sr=8-8",
    price: 597,
    price_url:
      "https://www.amazon.com/Samsung-Unlocked-Smartphone-Intelligent-Graphite/dp/B09BFTMQH9/ref=sr_1_8?crid=149YJHLUZWX28&keywords=phones&qid=1671010881&sprefix=phon%2Caps%2C575&sr=8-8",
    rating: 4.5,
  },
  {
    isNew: true,
    id: 47,
    image: "https://m.media-amazon.com/images/I/61ACu5xcNpL._AC_UY218_.jpg",
    url: "https://www.amazon.com/Stylus-Battery-Unlocked-Motorola-Emerald/dp/B092BYTXM3/ref=sr_1_9?crid=149YJHLUZWX28&keywords=phones&qid=1671010881&sprefix=phon%2Caps%2C575&sr=8-9",
    name: "Moto G Stylus 5G | 2021 | 2-Day battery | Unlocked | Made for US by Motorola | 6/256GB | 48MP Camera | Cosmic Emerald",
    name_url:
      "https://www.amazon.com/Stylus-Battery-Unlocked-Motorola-Emerald/dp/B092BYTXM3/ref=sr_1_9?crid=149YJHLUZWX28&keywords=phones&qid=1671010881&sprefix=phon%2Caps%2C575&sr=8-9",
    price: 199,
    price_url:
      "https://www.amazon.com/Stylus-Battery-Unlocked-Motorola-Emerald/dp/B092BYTXM3/ref=sr_1_9?crid=149YJHLUZWX28&keywords=phones&qid=1671010881&sprefix=phon%2Caps%2C575&sr=8-9",
    rating: 4.4,
  },
  {
    isNew: true,
    id: 29,
    image: "https://m.media-amazon.com/images/I/81Gm69I-LyL._AC_UY218_.jpg",
    url: "https://www.amazon.com/Samsung-Electronics-Computer-Processor-Long-Lasting/dp/B09J8V32X4/ref=sr_1_25?crid=177RUHTKQSP6I&keywords=laptops+black&qid=1671009716&sprefix=laptops+blac%2Caps%2C448&sr=8-25",
    name: "SAMSUNG Galaxy Book Odyssey Laptop Computer, 15.6”, 32GB, 1TB, Intel Core i7 Processor, Customized Gaming, Full HD Screen, Pro Keyboard, Surround Sound, US Version, Mystic Black",
    name_url:
      "https://www.amazon.com/Samsung-Electronics-Computer-Processor-Long-Lasting/dp/B09J8V32X4/ref=sr_1_25?crid=177RUHTKQSP6I&keywords=laptops+black&qid=1671009716&sprefix=laptops+blac%2Caps%2C448&sr=8-25",
    price: 1736,
    price_url:
      "https://www.amazon.com/Samsung-Electronics-Computer-Processor-Long-Lasting/dp/B09J8V32X4/ref=sr_1_25?crid=177RUHTKQSP6I&keywords=laptops+black&qid=1671009716&sprefix=laptops+blac%2Caps%2C448&sr=8-25",
    rating: 4.2,
  },
  {
    isNew: true,
    id: 30,
    image: "https://m.media-amazon.com/images/I/71Wbbw-Nd4L._AC_UY218_.jpg",
    url: "https://www.amazon.com/LG-Lightweight-Display-Processor-Thunderbolt/dp/B09XGR8D8K/ref=sr_1_26?crid=177RUHTKQSP6I&keywords=laptops+black&qid=1671009716&sprefix=laptops+blac%2Caps%2C448&sr=8-26",
    name: 'LG gram (2022) 17Z90Q Ultra Lightweight Laptop, 17" (2560 x 1600) IPS Display, Intel Evo 12th Gen i7 1260P Processor, 32GB LPDDR5, 2TB NVMe SSD, FHD Webcam, WiFi 6E, Thunderbolt 4, Windows 11, Black',
    name_url:
      "https://www.amazon.com/LG-Lightweight-Display-Processor-Thunderbolt/dp/B09XGR8D8K/ref=sr_1_26?crid=177RUHTKQSP6I&keywords=laptops+black&qid=1671009716&sprefix=laptops+blac%2Caps%2C448&sr=8-26",
    price: 1796,
    price_url:
      "https://www.amazon.com/LG-Lightweight-Display-Processor-Thunderbolt/dp/B09XGR8D8K/ref=sr_1_26?crid=177RUHTKQSP6I&keywords=laptops+black&qid=1671009716&sprefix=laptops+blac%2Caps%2C448&sr=8-26",
    rating: 4.6,
  },
  {
    isNew: true,
    id: 61,
    image: "https://m.media-amazon.com/images/I/817aOXLoNpL._AC_UY218_.jpg",
    url: "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_next_aps_sr_pg2_1?ie=UTF8&adId=A02571833IZTKDP5OEUHW&qualifier=1671011281&id=6593312416113584&widgetName=sp_atf_next&url=%2FSAMSUNG-Smartphone-Unlocked-Brightest-Processor%2Fdp%2FB09MW1HJ9T%2Fref%3Dsr_1_17_sspa%3Fcrid%3D149YJHLUZWX28%26keywords%3Dphones%26qid%3D1671011281%26sprefix%3Dphon%252Caps%252C575%26sr%3D8-17-spons%26psc%3D1",
    name: "SAMSUNG Galaxy S22 Ultra Cell Phone, Factory Unlocked Android Smartphone, 128GB, 8K Camera & Video, Brightest Display Screen, S Pen, Long Battery Life, Fast 4nm Processor, US Version, Phantom White",
    name_url:
      "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_next_aps_sr_pg2_1?ie=UTF8&adId=A02571833IZTKDP5OEUHW&qualifier=1671011281&id=6593312416113584&widgetName=sp_atf_next&url=%2FSAMSUNG-Smartphone-Unlocked-Brightest-Processor%2Fdp%2FB09MW1HJ9T%2Fref%3Dsr_1_17_sspa%3Fcrid%3D149YJHLUZWX28%26keywords%3Dphones%26qid%3D1671011281%26sprefix%3Dphon%252Caps%252C575%26sr%3D8-17-spons%26psc%3D1",
    price: 949,
    price_url:
      "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_next_aps_sr_pg2_1?ie=UTF8&adId=A02571833IZTKDP5OEUHW&qualifier=1671011281&id=6593312416113584&widgetName=sp_atf_next&url=%2FSAMSUNG-Smartphone-Unlocked-Brightest-Processor%2Fdp%2FB09MW1HJ9T%2Fref%3Dsr_1_17_sspa%3Fcrid%3D149YJHLUZWX28%26keywords%3Dphones%26qid%3D1671011281%26sprefix%3Dphon%252Caps%252C575%26sr%3D8-17-spons%26psc%3D1",
    rating: 4.5,
  },
  {
    isNew: true,
    id: 62,
    image: "https://m.media-amazon.com/images/I/51K7abmErwL._AC_UY218_.jpg",
    url: "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_next_aps_sr_pg2_1?ie=UTF8&adId=A05528271ZKB43L32HKFY&qualifier=1671011281&id=6593312416113584&widgetName=sp_atf_next&url=%2FSAMSUNG-Unlocked-Smartphone-Foldable-Informative%2Fdp%2FB0B3T9D5T8%2Fref%3Dsr_1_18_sspa%3Fcrid%3D149YJHLUZWX28%26keywords%3Dphones%26qid%3D1671011281%26sprefix%3Dphon%252Caps%252C575%26sr%3D8-18-spons%26psc%3D1",
    name: "SAMSUNG Galaxy Z Flip 4 Cell Phone, Factory Unlocked Android Smartphone, 256GB, Flex Mode, Hands Free Camera, Compact, Foldable Design, Informative Cover Screen, US Version, Bora Purple",
    name_url:
      "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_next_aps_sr_pg2_1?ie=UTF8&adId=A05528271ZKB43L32HKFY&qualifier=1671011281&id=6593312416113584&widgetName=sp_atf_next&url=%2FSAMSUNG-Unlocked-Smartphone-Foldable-Informative%2Fdp%2FB0B3T9D5T8%2Fref%3Dsr_1_18_sspa%3Fcrid%3D149YJHLUZWX28%26keywords%3Dphones%26qid%3D1671011281%26sprefix%3Dphon%252Caps%252C575%26sr%3D8-18-spons%26psc%3D1",
    price: 959,
    price_url:
      "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_next_aps_sr_pg2_1?ie=UTF8&adId=A05528271ZKB43L32HKFY&qualifier=1671011281&id=6593312416113584&widgetName=sp_atf_next&url=%2FSAMSUNG-Unlocked-Smartphone-Foldable-Informative%2Fdp%2FB0B3T9D5T8%2Fref%3Dsr_1_18_sspa%3Fcrid%3D149YJHLUZWX28%26keywords%3Dphones%26qid%3D1671011281%26sprefix%3Dphon%252Caps%252C575%26sr%3D8-18-spons%26psc%3D1",
    rating: 4.6,
  },
  {
    isNew: true,
    id: 7,
    image: "https://m.media-amazon.com/images/I/61r9ZvR-vqL._AC_UY218_.jpg",
    url: "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_mtf_aps_sr_pg1_1?ie=UTF8&adId=A008333714AVFYMPH54WB&qualifier=1671008165&id=982970843785837&widgetName=sp_mtf&url=%2FComputer-Adjustable-Foldable-Portable-191280029512%2Fdp%2FB09KRHWTMZ%2Fref%3Dsr_1_7_sspa%3Fcrid%3D177RUHTKQSP6I%26keywords%3Dlaptops%2Bblack%26qid%3D1671008165%26sprefix%3Dlaptops%2Bblac%252Caps%252C448%26sr%3D8-7-spons%26psc%3D1%26smid%3DA2UHWCRWCRB55R",
    name: "Laptop Desk, Computer Tray for Bed Laptop Table Adjustable Lap Desks for Eating Working Study Foldable and Portable (Black) (191280029512)",
    name_url:
      "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_mtf_aps_sr_pg1_1?ie=UTF8&adId=A008333714AVFYMPH54WB&qualifier=1671008165&id=982970843785837&widgetName=sp_mtf&url=%2FComputer-Adjustable-Foldable-Portable-191280029512%2Fdp%2FB09KRHWTMZ%2Fref%3Dsr_1_7_sspa%3Fcrid%3D177RUHTKQSP6I%26keywords%3Dlaptops%2Bblack%26qid%3D1671008165%26sprefix%3Dlaptops%2Bblac%252Caps%252C448%26sr%3D8-7-spons%26psc%3D1%26smid%3DA2UHWCRWCRB55R",
    price: 26,
    price_url:
      "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_mtf_aps_sr_pg1_1?ie=UTF8&adId=A008333714AVFYMPH54WB&qualifier=1671008165&id=982970843785837&widgetName=sp_mtf&url=%2FComputer-Adjustable-Foldable-Portable-191280029512%2Fdp%2FB09KRHWTMZ%2Fref%3Dsr_1_7_sspa%3Fcrid%3D177RUHTKQSP6I%26keywords%3Dlaptops%2Bblack%26qid%3D1671008165%26sprefix%3Dlaptops%2Bblac%252Caps%252C448%26sr%3D8-7-spons%26psc%3D1%26smid%3DA2UHWCRWCRB55R",
    rating: 4.7,
  },
  {
    isNew: true,
    id: 8,
    image: "https://m.media-amazon.com/images/I/719AiBIW+FL._AC_UY218_.jpg",
    url: "https://www.amazon.com/Microsoft-Surface-Laptop-Touch-Screen-Memory/dp/B07YNK9T9Z/ref=sr_1_8?crid=177RUHTKQSP6I&keywords=laptops+black&qid=1671008165&sprefix=laptops+blac%2Caps%2C448&sr=8-8",
    name: 'Microsoft Surface Laptop 3 – 13.5" Touch-Screen – Intel Core i5 - 8GB Memory - 256GB Solid State Drive – Matte Black',
    name_url:
      "https://www.amazon.com/Microsoft-Surface-Laptop-Touch-Screen-Memory/dp/B07YNK9T9Z/ref=sr_1_8?crid=177RUHTKQSP6I&keywords=laptops+black&qid=1671008165&sprefix=laptops+blac%2Caps%2C448&sr=8-8",
    price: 899,
    price_url:
      "https://www.amazon.com/Microsoft-Surface-Laptop-Touch-Screen-Memory/dp/B07YNK9T9Z/ref=sr_1_8?crid=177RUHTKQSP6I&keywords=laptops+black&qid=1671008165&sprefix=laptops+blac%2Caps%2C448&sr=8-8",
    rating: 4.5,
  },
  {
    isNew: true,
    id: 9,
    image: "https://m.media-amazon.com/images/I/61mFsTOtVVL._AC_UY218_.jpg",
    url: "https://www.amazon.com/Dell-Inspiron-i5-1135G7-Quad-Core-Processor/dp/B081FDK94Y/ref=sr_1_9?crid=177RUHTKQSP6I&keywords=laptops+black&qid=1671008165&sprefix=laptops+blac%2Caps%2C448&sr=8-9",
    name: '2021 Newest Dell Inspiron 15 3000 3501 Laptop, 15.6" Full HD 1080P Screen, 11th Gen Intel Core i5-1135G7 Quad-Core Processor, 16GB RAM, 256GB SSD + 1TB HDD, Webcam, HDMI, Wi-Fi, Windows 10 Home, Black',
    name_url:
      "https://www.amazon.com/Dell-Inspiron-i5-1135G7-Quad-Core-Processor/dp/B081FDK94Y/ref=sr_1_9?crid=177RUHTKQSP6I&keywords=laptops+black&qid=1671008165&sprefix=laptops+blac%2Caps%2C448&sr=8-9",
    price: 521,
    price_url:
      "https://www.amazon.com/Dell-Inspiron-i5-1135G7-Quad-Core-Processor/dp/B081FDK94Y/ref=sr_1_9?crid=177RUHTKQSP6I&keywords=laptops+black&qid=1671008165&sprefix=laptops+blac%2Caps%2C448&sr=8-9",
    rating: 4.2,
  },
  {
    isNew: true,
    id: 10,
    image: "https://m.media-amazon.com/images/I/71NkhRKdoQL._AC_UY218_.jpg",
    url: "https://www.amazon.com/Dell-Inspiron-Touchscreen-i5-1035G1-Windows/dp/B09Z37QYFB/ref=sr_1_10?crid=177RUHTKQSP6I&keywords=laptops+black&qid=1671008165&sprefix=laptops+blac%2Caps%2C448&sr=8-10",
    name: '2022 Newest Dell Inspiron 15 3511 Laptop, 15.6" FHD Touchscreen, Intel Core i5-1035G1, 16GB RAM, 1TB PCIe NVMe M.2 SSD, SD Card Reader, Webcam, HDMI, WiFi, Windows 11 Home, Black',
    name_url:
      "https://www.amazon.com/Dell-Inspiron-Touchscreen-i5-1035G1-Windows/dp/B09Z37QYFB/ref=sr_1_10?crid=177RUHTKQSP6I&keywords=laptops+black&qid=1671008165&sprefix=laptops+blac%2Caps%2C448&sr=8-10",
    price: 588,
    price_url:
      "https://www.amazon.com/Dell-Inspiron-Touchscreen-i5-1035G1-Windows/dp/B09Z37QYFB/ref=sr_1_10?crid=177RUHTKQSP6I&keywords=laptops+black&qid=1671008165&sprefix=laptops+blac%2Caps%2C448&sr=8-10",
    rating: 4.2,
  },
  {
    isNew: true,
    id: 11,
    image: "https://m.media-amazon.com/images/I/71A1fFf1vOL._AC_UY218_.jpg",
    url: "https://www.amazon.com/Microsoft-Surface-Laptop-Touch-Screen-Matte-Black/dp/B08YWZ5G7L/ref=sr_1_11?crid=177RUHTKQSP6I&keywords=laptops+black&qid=1671008165&sprefix=laptops+blac%2Caps%2C448&sr=8-11",
    name: "Microsoft Surface Laptop 4 15” Touch-Screen – AMD Ryzen 7 Surface Edition - 8GB - 512GB Solid State Drive - Matte Black",
    name_url:
      "https://www.amazon.com/Microsoft-Surface-Laptop-Touch-Screen-Matte-Black/dp/B08YWZ5G7L/ref=sr_1_11?crid=177RUHTKQSP6I&keywords=laptops+black&qid=1671008165&sprefix=laptops+blac%2Caps%2C448&sr=8-11",
    price: 799,
    rating: 4.6,
  },
  {
    isNew: true,
    id: 12,
    image: "https://m.media-amazon.com/images/I/71CuLL3QTzL._AC_UY218_.jpg",
    url: "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_mtf_aps_sr_pg1_1?ie=UTF8&adId=A07837193BUQD5CQUJABW&qualifier=1671008165&id=982970843785837&widgetName=sp_mtf&url=%2FWindows-EcoHero-i3-5005U-Computer-Functional%2Fdp%2FB0BG4SNFSD%2Fref%3Dsr_1_12_sspa%3Fcrid%3D177RUHTKQSP6I%26keywords%3Dlaptops%2Bblack%26qid%3D1671008165%26sprefix%3Dlaptops%2Bblac%252Caps%252C448%26sr%3D8-12-spons%26psc%3D1",
    name: "Windows 11 Laptop, EcoHero 15.6 inches FHD(1920 x 1080) IPS Display, Intel Core i3-5005U, 12GB RAM and 512GB SSD Laptop Computer, 2.4G/5G WiFi, BT4.2 and RJ45, Full Functional Type C, Space Gray",
    name_url:
      "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_mtf_aps_sr_pg1_1?ie=UTF8&adId=A07837193BUQD5CQUJABW&qualifier=1671008165&id=982970843785837&widgetName=sp_mtf&url=%2FWindows-EcoHero-i3-5005U-Computer-Functional%2Fdp%2FB0BG4SNFSD%2Fref%3Dsr_1_12_sspa%3Fcrid%3D177RUHTKQSP6I%26keywords%3Dlaptops%2Bblack%26qid%3D1671008165%26sprefix%3Dlaptops%2Bblac%252Caps%252C448%26sr%3D8-12-spons%26psc%3D1",
    price: 349,
    price_url:
      "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_mtf_aps_sr_pg1_1?ie=UTF8&adId=A07837193BUQD5CQUJABW&qualifier=1671008165&id=982970843785837&widgetName=sp_mtf&url=%2FWindows-EcoHero-i3-5005U-Computer-Functional%2Fdp%2FB0BG4SNFSD%2Fref%3Dsr_1_12_sspa%3Fcrid%3D177RUHTKQSP6I%26keywords%3Dlaptops%2Bblack%26qid%3D1671008165%26sprefix%3Dlaptops%2Bblac%252Caps%252C448%26sr%3D8-12-spons%26psc%3D1",
    rating: 4.9,
  },
];

const MidProductCarousel = () => {
  const box = useRef(null);

  const btnpressprev = () => {
    if (box.current === null) return;
    let width = box.current.clientWidth;
    box.current.scrollLeft = box.current.scrollLeft - width;
    console.log(width);
  };

  const btnpressnext = () => {
    if (box.current === null) return;
    let width = box.current.clientWidth;
    box.current.scrollLeft = box.current.scrollLeft + width;
    console.log(width);
  };
  return (
    <div className="product-carousel">
      <button className="pre-btn" onClick={btnpressprev}>
        <p>&lt;</p>
      </button>
      <button className="next-btn" onClick={btnpressnext}>
        <p>&gt;</p>
      </button>

      <div ref={box} className="product-container">
        {products.map((el) => {
          return (
            <ProductCard
              key={el.id}
              name={el.name}
              price={el.price}
              image={el.image}
              rating={el.rating}
              isNew={el.isNew}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MidProductCarousel;
