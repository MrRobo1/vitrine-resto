import PageLayout from '@/components/layout';
import Header from '@/components/Header';
import Carte from '@/components/Menu-Section';
import About from '@/components/About';
import RestaurantSection from '@/components/Restaurant-Section';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <PageLayout>
      <Header />
      <RestaurantSection />
      <Carte />
      <About />
      <Footer />
    </PageLayout>
  );
}
