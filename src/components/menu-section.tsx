import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const plats = [
    {
        title: "Filet de boeuf",
        description: "Un succulent filet de boeuf grillé à la perfection, servi avec une sauce au poivre.",
        image: "/filetdeboeuf.jpeg",
    },
    {
        title: "Saumon grillé",
        description: "Un filet de saumon grillé, accompagné d'une sauce citronnée et de légumes de saison.",
        image: "/saumongrillé.jpeg",
    },
    {
        title: "Magret de canard",
        description: "Un magret de canard tendre et juteux, servi avec une sauce aux cerises et des pommes de terre rôties.",
        image: "/magret-de-canard.jpeg",
    }
]

export default function Carte() {
    return (
        <section className="bg-foreground text-white py-16 px-4">
            <h2 className="text-center text-4xl mb-12">Notre Carte</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {plats.map((plat, index) => (
                    <Card
                    key={index}
                    className="transition-all duration-300 hover:border-yellow-400 bg-neutral-900 border border-yellow-700/60 rounded-md overflow-hidden"
                  >
                    <Image
                      src={plat.image}
                      alt={plat.title}
                      width={1920}
                      height={1080}
                      className="w-full h-64 object-cover"
                    />
                    <CardContent className="p-6">
                      <h3 className="text-xl text-yellow-500 font-semibold">
                        {plat.title}
                      </h3>
                      <p className="text-gray-300 text-sm mt-2">{plat.description}</p>
                    </CardContent>
                  </Card>
                ))}
            </div>
        </section>
    )
}