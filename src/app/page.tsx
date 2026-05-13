import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Products from "./components/Products";
import BulkOrders from "./components/BulkOrders";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Categories />
      <Products />
    
    </main>
  );
}