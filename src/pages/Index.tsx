import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SuccessStories from "@/components/SuccessStories";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <SuccessStories />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
