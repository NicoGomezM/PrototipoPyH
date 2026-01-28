import { Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, Tractor, Road } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Nuestra Flota - Transportes Parra e Hijos',
  description: 'Descubra nuestra moderna y diversa flota de camiones y maquinaria, lista para cualquier desafío.',
};

export default function FlotaPage() {
    const fleet = [
        {
            id: 'flota-forestal',
            title: 'Transporte Forestal',
            description: 'Unidades de transporte equipados con sistemas de carrocería estructural que permite el transporte de maderas en largos desde 2.44 hasta 7.00 metros, satisfaciendo asi los requermientos de nuestros clientes cualquiera sea la necesidad de este.',
            icon: <Truck className="h-10 w-10 text-primary" />,
            imageHint: 'forest truck'
        },
        {
            id: 'flota-carguio',
            title: 'Carguío Forestal',
            description: 'Si la situación lo amerita, nuestra empresa cuenta con unidades de carguío forestal, que tienen la capacidad y autonomía de cargar sus propias unidades de transportes.',
            icon: <Tractor className="h-10 w-10 text-primary" />,
            imageHint: 'logging crane'
        },
        {
            id: 'flota-carretera',
            title: 'Transporte Carretera',
            description: 'La empresa cuenta con camiones de carga equipados para transportar diversos productos a distintos destinos a lo largo de todo Chile.',
            icon: <Road className="h-10 w-10 text-primary" />,
            imageHint: 'highway truck'
        },
    ];

  const fleetImages = PlaceHolderImages.filter(p => fleet.some(f => f.id === p.id));


  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Nuestra Flota</h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          Parra e Hijos y Compañía limitada siempre con el objetivo general de entregar un excelente servicio cuenta con una flota de camiones, grúas, vehículos livianos de apoyo y lógística, todos los cuales forman parte del patrimonio de la empresa, debidamente equipados con sistema de comunicación radial y GPS para de esta forma optimizar los recursos.
        </p>
      </div>

      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
        {fleet.map((item) => {
          const image = fleetImages.find(img => img.id === item.id);
          return (
            <Card key={item.id} className="flex flex-col">
              {image && (
                <CardHeader className="p-0">
                  <Image
                    src={image.imageUrl}
                    alt={item.title}
                    width={800}
                    height={600}
                    className="rounded-t-lg object-cover aspect-[4/3]"
                    data-ai-hint={image.imageHint}
                  />
                </CardHeader>
              )}
              <CardContent className="p-6 flex flex-col flex-grow">
                <CardTitle className="mb-2">{item.title}</CardTitle>
                <p className="text-muted-foreground flex-grow">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
