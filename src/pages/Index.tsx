import Navigation from "../components/Navigation";
import PortfolioGrid from "../components/PortfolioGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="container mx-auto px-4 pb-12">
        <div className="py-12 md:py-24 space-y-24">
          <PortfolioGrid />
          <div className="flex items-end justify-center">
            <h1 className="brand-name text-black text-4xl font-bold">
              <span className="inline">SHAME</span>
              <span className="inline text-gray-400">LU</span>
            </h1>
          </div>
        </div>
        <footer className="py-6 text-xs text-gray-400 border-t">
          <div className="flex justify-between items-center">
            <p>© 2025 Lucia Moda</p>
            <p>contact@lucia.com</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
