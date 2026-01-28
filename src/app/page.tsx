import Image from 'next/image';
import Link from 'next/link';
import { Truck, Package, Container, ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import AiSuggestions from '@/components/ai-suggestions';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-truck');

  const services = [
    {
      icon: <Truck className="h-10 w-10 text-primary" />,
      title: 'Transporte de Materiales',
      description: 'Ofrecemos transporte seguro y eficiente para todo tipo de materiales de construcción.',
    },
    {
      icon: <Container className="h-10 w-10 text-primary" />,
      title: 'Transporte de Contenedores',
      description: 'Servicios de logística y transporte de contenedores a nivel nacional.',
    },
    {
      icon: <Package className="h-10 w-10 text-primary" />,
      title: 'Venta de Áridos',
      description: 'Proveemos áridos y materiales de construcción de alta calidad para sus proyectos.',
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] min-h-[400px] w-full">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-headline">Transportes Parra e Hijos</h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-primary-foreground/80">
            Su socio de confianza en transporte y logística para la construcción.
          </p>
          <Button asChild className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contacto">
              Contáctenos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <section id="services" className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Nuestros Servicios</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Soluciones integrales para sus necesidades de transporte y construcción.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit">{service.icon}</div>
                  <CardTitle className="mt-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Sobre Nosotros</h2>
              <p className="mt-4 text-muted-foreground">
                Con años de experiencia en el sector, Transportes Parra e Hijos se ha consolidado como un líder en el transporte de materiales de construcción y servicios logísticos en Los Ángeles y sus alrededores. Nuestro compromiso es con la puntualidad, la seguridad y la satisfacción del cliente.
              </p>
              <p className="mt-4 text-muted-foreground">
                Contamos con una flota moderna y un equipo de profesionales dedicados a brindar un servicio de excelencia, adaptándonos a las necesidades específicas de cada proyecto.
              </p>
              <Button asChild variant="link" className="mt-4 px-0 text-primary">
                <Link href="/flota">
                  Ver nuestra flota <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            {/* <div>
              <AiSuggestions />
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
