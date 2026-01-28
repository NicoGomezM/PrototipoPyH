import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Leaf, Users, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Rol Social - Transportes Parra e Hijos',
  description: 'Nuestro compromiso con la comunidad y el desarrollo sostenible de nuestra región.',
};

export default function RolSocialPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Nuestro Rol Social</h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          Creemos en retribuir a la comunidad que nos ha visto crecer. Nuestro compromiso va más allá de la carretera.
        </p>
      </div>

       <div className="grid gap-8 md:grid-cols-3">
        <Card>
          <CardHeader>
            <Users className="h-10 w-10 text-primary mb-2" />
            <CardTitle>Apoyo a la Comunidad Local</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Participamos activamente en iniciativas locales que promueven el desarrollo social y económico.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Leaf className="h-10 w-10 text-primary mb-2" />
            <CardTitle>Sostenibilidad</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Implementamos prácticas sostenibles para proteger nuestro entorno para las futuras generaciones.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Heart className="h-10 w-10 text-primary mb-2" />
            <CardTitle>Bienestar del Equipo</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Priorizamos el bienestar y el desarrollo profesional de todos nuestros colaboradores.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 text-center p-6 bg-background rounded-lg">
          <p className="text-muted-foreground">
            Estamos documentando nuestras actividades y programas sociales. Más información próximamente.
          </p>
      </div>
    </div>
  );
}
