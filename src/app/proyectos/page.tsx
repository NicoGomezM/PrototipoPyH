import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, Truck, Factory } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Proyectos - Transportes Parra e Hijos',
  description: 'Explore los proyectos significativos en los que hemos participado, aportando nuestra experiencia en logística y transporte.',
};

export default function ProyectosPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Proyectos Destacados</h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          Orgullosos de ser parte del crecimiento y desarrollo de la región a través de nuestra participación en proyectos clave.
        </p>
      </div>
       <div className="grid gap-8 md:grid-cols-3">
        <Card>
          <CardHeader>
            <Building className="h-10 w-10 text-primary mb-2" />
            <CardTitle>Proyectos Inmobiliarios</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Colaboración en la construcción de importantes desarrollos residenciales y comerciales.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Truck className="h-10 w-10 text-primary mb-2" />
            <CardTitle>Obras de Infraestructura Vial</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Suministro de materiales para la construcción y mejora de carreteras y puentes.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Factory className="h-10 w-10 text-primary mb-2" />
            <CardTitle>Proyectos Industriales</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Apoyo logístico en la construcción y expansión de plantas industriales.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mt-12 text-center p-6 bg-background rounded-lg">
          <p className="text-muted-foreground">
            Próximamente compartiremos estudios de caso y más detalles sobre nuestros proyectos.
          </p>
      </div>
    </div>
  );
}
