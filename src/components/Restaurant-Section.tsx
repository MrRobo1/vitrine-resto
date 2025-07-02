'use client';

import * as React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog';

const restaurants = [
  {
    title: 'Photo extérieure',
    image: '/photoexte.png',
  },
  {
    title: 'Salon intérieur',
    image: '/saloninte.png',
  },
  {
    title: 'Salon lounge',
    image: '/salonlounge.png',
  },
  {
    title: 'Terrasse',
    image: '/terrasse.png',
  },
  {
    title: 'Cuisine',
    image: '/cuisine.png',
  },
];

export default function RestaurantSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <section className="bg-foreground text-white py-16 px-4">
      <h2 className="text-center text-4xl">Découvrez notre restaurant</h2>
      <p className="py-16 px-4 mx-auto max-w-4xl">
        Bienvenue chez Épicurien, un restaurant gastronomique où l’art culinaire rencontre
        l’élégance. Niché au cœur de la ville, notre établissement célèbre la cuisine française
        moderne à travers des plats raffinés, élaborés à partir de produits frais, de saison et
        soigneusement sélectionnés. Chaque assiette raconte une histoire, portée par la passion de
        notre chef et son équipe, dans un cadre chaleureux, sobre et contemporain. Que ce soit pour
        un dîner en tête-à-tête, un déjeuner d’affaires ou une célébration, Épicurien vous promet
        une expérience gustative inoubliable, entre tradition et créativité.Bienvenue chez
        Épicurien, un restaurant gastronomique où l’art culinaire rencontre l’élégance. Niché au
        cœur de la ville, notre établissement célèbre la cuisine française moderne à travers des
        plats raffinés, élaborés à partir de produits frais, de saison et soigneusement
        sélectionnés. Chaque assiette raconte une histoire, portée par la passion de notre chef et
        son équipe, dans un cadre chaleureux, sobre et contemporain. Que ce soit pour un dîner en
        tête-à-tête, un déjeuner d’affaires ou une célébration, Épicurien vous promet une expérience
        gustative inoubliable, entre tradition et créativité.
      </p>
      <div className="flex justify-center">
        <Carousel className="w-full max-w-sm">
          <CarouselContent className="-ml-1">
            {restaurants.map((restaurant) => (
              <CarouselItem
                key={`carousel-item-${restaurant.title}`}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-0">
                  <Card className="bg-neutral-900 hover:border-yellow-400">
                    <Dialog>
                      <DialogTrigger asChild>
                        <CardContent
                          className="relative aspect-square overflow-hidden cursor-pointer"
                          onClick={() => setSelectedImage(restaurant.image)}
                        >
                          <Image
                            src={restaurant.image}
                            alt={restaurant.title}
                            fill
                            className="rounded-xl object-cover absolute inset-0 w-full h-full"
                          />
                        </CardContent>
                      </DialogTrigger>

                      <DialogContent className="max-w-6xl p-0 overflow-hidden border-yellow-700/60">
                        <DialogTitle className="sr-only">Image Preview</DialogTitle>
                        <Image
                          src={restaurant.image}
                          alt={restaurant.title}
                          width={1920}
                          height={1080}
                          className="w-full h-auto object-cover"
                        />
                      </DialogContent>
                    </Dialog>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-black" />
          <CarouselNext className="text-black" />
        </Carousel>
      </div>
    </section>
  );
}
