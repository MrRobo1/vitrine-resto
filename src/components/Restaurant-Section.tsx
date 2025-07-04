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
      <p className="py-16 px-4 mx-auto max-w-6xl">
        Bienvenue chez Épicurien, un lieu où la gastronomie française s’exprime avec modernité et
        passion. Dans un cadre raffiné et chaleureux, notre chef sublime des produits frais et de
        saison pour créer une cuisine inventive et délicate. Que ce soit pour un dîner intime, un
        repas d’affaires ou une célébration, chaque assiette raconte une histoire. Épicurien vous
        invite à vivre une expérience sensorielle unique, entre tradition et créativité.
      </p>
      <div className="flex justify-center">
        <Carousel className="relative w-full max-w-6xl overflow-hidden">
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
          <CarouselPrevious className="absolute left-1 top-1/2 -translate-y-1/2 z-10 text-black" />
          <CarouselNext className="absolute right-1 top-1/2 -translate-y-1/2 z-10 text-black" />
        </Carousel>
      </div>
    </section>
  );
}
