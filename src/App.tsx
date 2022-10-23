import { Banner } from "./Components/BannerHomePage/BannerHP";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header/Header";
import { Section } from "./Components/Section/Section";

export function App() {
  const products = [
    {
      id: 1,
      title: "Produto XYZ",
      img: "https://picsum.photos/200/200",
      price: 15.3,
    },
    {
      id: 2,
      title: "Produto XYZ",
      img: "https://picsum.photos/200/200",
      price: 65.3,
    },
    {
      id: 3,
      title: "Produto XYZ",
      img: "https://picsum.photos/200/200",
      price: 56,
    },
    {
      id: 4,
      title: "Produto XYZ",
      img: "https://picsum.photos/200/200",
      price: 65.3,
    },
    {
      id: 5,
      title: "Produto XYZ",
      img: "https://picsum.photos/200/200",
      price: 65.3,
    },
    {
      id: 6,
      title: "Produto XYZ",
      img: "https://picsum.photos/200/200",
      price: 65.3,
    },
    {
      id: 7,
      title: "Produto XYZ",
      img: "https://picsum.photos/200/200",
      price: 65.3,
    },
    {
      id: 8,
      title: "Produto XYZ",
      img: "https://picsum.photos/200/200",
      price: 65.3,
    },
    {
      id: 9,
      title: "Produto XYZ",
      img: "https://picsum.photos/200/200",
      price: 65.3,
    },
  ];

  return (
    <>
      <Header />
      <Banner
        title="Dezembro promocional"
        description="Produtos selecionados com 33% de desconto"
        section="consoles"
      />
      <Section section="Star Wars" products={products} />
      <Section section="Consoles" products={products} />
      <Section section="Diversos" products={products} />
      <Footer />
    </>
  );
}
