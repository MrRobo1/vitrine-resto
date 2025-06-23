import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function APropos() {
  return (
    <section className="bg-foreground text-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <Card className="bg-foreground flex flex-col md:flex-row items-center gap-8 p-6 rounded-xl shadow-lg">
          <div className="flex-shrink-0">
            <Image
              src="/chef.png"
              alt="Chef d'Épicurien"
              width={300}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>

          <CardContent className="p-0 text-gray-300">
            <h2 className="text-3xl font-serif text-white mb-4">À propos</h2>
            <p className="mb-4">
              Bienvenue chez Épicurien, un restaurant gastronomique où chaque plat est pensé comme 
              une œuvre d’art. 
              Passionnés par les produits de saison et la cuisine française contemporaine, 
              nous mettons à l’honneur le goût, la finesse et l’émotion culinaire.
            </p>
            <p>
              👨‍🍳 Notre chef, formé auprès des plus grandes maisons, allie tradition et créativité 
              pour vous proposer une expérience gustative unique. 
              Son savoir-faire et son exigence transforment chaque assiette en un moment d’exception.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}