import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nuestra Flota - Transportes Parra e Hijos',
  description: 'Descubra nuestra moderna y diversa flota de camiones y maquinaria, lista para cualquier desafío.',
};

export default function FlotaPage() {
  const fleetImages = PlaceHolderImages.filter((img) => img.id.startsWith('gallery-')).slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Nuestra Flota</h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          Contamos con una flota de vehículos moderna y bien mantenida para garantizar la seguridad y eficiencia en cada entrega.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {fleetImages.map((image) => (
          <Card key={image.id}>
            <CardHeader className="p-0">
              <Image 
                src={image.imageUrl}
                alt={image.description}
                width={800}
                height={600}
                className="rounded-t-lg object-cover aspect-[4/3]"
                data-ai-hint={image.imageHint}
              />
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="mb-2">Camiones de Alto Tonelaje</CardTitle>
              <p className="text-muted-foreground">
                Equipados para transportar grandes volúmenes de material de construcción de forma segura.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold">Detalles completos de nuestra flota próximamente</h2>
        <p className="text-muted-foreground mt-2">
          Estamos trabajando para brindarle información detallada sobre cada uno de nuestros vehículos y capacidades.
        </p>
        <Button asChild className="mt-6">
          <Link href="/galeria">
            Ver Galería de Imágenes
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
