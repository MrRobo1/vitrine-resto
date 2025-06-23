import { PageLayout } from "@/components/layout";
import Header  from "@/components/header";
import Carte from "@/components/menu-section";
import APropos from "@/components/about";

export default function Home() {
  return (
    <PageLayout>
      <Header />
      <Carte />
      <APropos />
    </PageLayout>
  );
}
