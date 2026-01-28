import { Metadata } from 'next';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Rol Social - Transportes Parra e Hijos',
  description: 'Nuestro compromiso con la comunidad y el desarrollo sostenible de nuestra región.',
};

export default function RolSocialPage() {
  const socialImage = PlaceHolderImages.find((img) => img.id === 'rol-social-team');

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Nuestro Rol Social</h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          Creemos en retribuir a la comunidad que nos ha visto crecer. Nuestro compromiso va más allá de la carretera.
        </p>
      </div>

       <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-4 text-muted-foreground">
          <p>
            TRANSPORTES PARRA E HIJOS Y CIA. LIMITADA dentro de sus operaciones y de los movimientos propios de su giro, cuenta con una red de apoyo laboral a una serie de distintos y pequeños empresarios de transporte, a los cuales se les reune y trabajan bajo nuestro amparo, se les ofrece trabajo y en algunos casos se administra sus camiones sumándolos a nuestra flota y generando empleo para sus familias, las cuales cuentan con una fuente de trabajo segura para gran parte del año.
          </p>
        </div>
        <div>
          {socialImage && (
            <Image
              src={socialImage.imageUrl}
              alt={socialImage.description}
              width={600}
              height={450}
              className="rounded-lg object-cover shadow-lg mx-auto"
              data-ai-hint={socialImage.imageHint}
            />
          )}
        </div>
      </div>

    </div>
  );
}
