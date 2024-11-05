import "./App.css";
import Header from "./components/Header";
import ImgCarousel from "./components/ImgCarousel";
import Categories from "./components/Categories";

function App() {
  const gamingProducts = [
    {
      image:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_2x._SY232_CB667159060_.jpg",
      description: "Headphones",
    },
    {
      image:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_2x._SY232_CB667159063_.jpg",
      description: "Keyboard",
    },
    {
      image:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_2x._SY232_CB667159063_.jpg",
      description: "Mouse",
    },
    {
      image:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_2x._SY232_CB667159060_.jpg",
      description: "Chair",
    },
  ];
  const homeProducts = [
    {
      image:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/CleaningTool_2x._SY232_CB563137408_.jpg",
      description: "Cleaning Tools",
    },
    {
      image:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/HomeStorage_2x._SY232_CB563137408_.jpg",
      description: "Home Storage",
    },
    {
      image:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/HomeDecor_2x._SY232_CB563137408_.jpg",
      description: "Home Decor",
    },
    {
      image:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/Bedding_2x._SY232_CB563137408_.jpg",
      description: "Bedding",
    },
  ];
  const fashionProducts = [
    {
      image:
        "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_BOTTOMS_2x._SY232_CB624172947_.jpg",
      description: "Jeans Under 50$",
    },
    {
      image:
        "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_TOPS_2x._SY232_CB623353881_.jpg",
      description: "tops under 25$",
    },
    {
      image:
        "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_DRESSES_2x._SY232_CB623353881_.jpg",
      description: "Dresses under 30$",
    },
    {
      image:
        "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_SHOES_2x._SY232_CB624172947_.jpg",
      description: "Shoes under 50$",
    },
  ];

  return (
    <>
      <Header />
      <div style={{ position: "relative" }}>
        <ImgCarousel />
        <div
          style={{
            position: "absolute",
            top: "20rem",
            left: "2rem",
            zIndex: 1,
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <Categories title="Gaming Accessories" products={gamingProducts} />
          <Categories title="Home Essentials" products={homeProducts} />
          <Categories title="Fashion Products" products={fashionProducts} />
          <Categories title="Gaming Accessories" products={gamingProducts} />
          <Categories title="Home Essentials" products={homeProducts} />
          <Categories title="Fashion Products" products={fashionProducts} />
        </div>
      </div>
    </>
  );
}

export default App;
