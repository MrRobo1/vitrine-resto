import PageLayout from '@/components/layout';
import Header from '@/components/Header';
import Carte from '@/components/Menu-Section';
import About from '@/components/About';
import RestaurantSection from '@/components/Restaurant-Section';

export default function Home() {
  return (
    <PageLayout>
      <Header />
      <RestaurantSection />
      <Carte />
      <About />
    </PageLayout>
  );
}
