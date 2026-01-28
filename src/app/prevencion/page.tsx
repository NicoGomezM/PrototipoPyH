import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HardHat, Activity, ClipboardCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Prevención de Riesgos - Transportes Parra e Hijos',
  description: 'Conozca nuestro compromiso con la seguridad y la prevención de riesgos en todas nuestras operaciones.',
};

export default function PrevencionPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Prevención de Riesgos</h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          La seguridad de nuestro equipo y de su carga es nuestra máxima prioridad.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <Card>
          <CardHeader>
            <HardHat className="h-10 w-10 text-primary mb-2" />
            <CardTitle>Cultura de Seguridad</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Fomentamos una cultura proactiva de seguridad en todos los niveles de la organización.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Activity className="h-10 w-10 text-primary mb-2" />
            <CardTitle>Capacitación Continua</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Nuestros conductores y personal reciben formación constante en manejo defensivo y protocolos de emergencia.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <ClipboardCheck className="h-10 w-10 text-primary mb-2" />
            <CardTitle>Inspecciones Rigurosas</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Realizamos inspecciones técnicas periódicas a toda nuestra flota para garantizar su óptimo funcionamiento.
            </p>
          </CardContent>
        </Card>
      </div>

       <div className="mt-12 text-center p-6 bg-background rounded-lg">
          <p className="text-muted-foreground">
            Estamos preparando una sección detallada sobre nuestro programa de prevención. Contenido próximamente...
          </p>
      </div>
    </div>
  );
}
