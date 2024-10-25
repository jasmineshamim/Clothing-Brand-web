import Hero from "@/app/components/Hero";
import MiddleSec from "@/app/components/MiddleSec";
import NewProducts from "@/app/components/NewProducts";
import Testimonial from "@/app/components/Testimonial";

export default function Home() {
  return (
    <main>
      <Hero />
      <NewProducts />
      <Testimonial />
      <MiddleSec />
    </main>
   
  );
}
