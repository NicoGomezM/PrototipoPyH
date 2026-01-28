import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nuestra Política - Transportes Parra e Hijos',
  description: 'Conozca nuestra política de calidad, seguridad y compromiso con el medio ambiente.',
};

export default function PoliticaPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Nuestra Política Empresarial</h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          Nuestros principios rectores que aseguran un servicio de calidad, seguro y responsable.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShieldCheck className="h-6 w-6 text-primary" />
            <span>Política de Calidad y Seguridad</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            La gerencia de TRANSPORTES PARRA E HIJOS Y CIA. LIMITADA, está siempre preocupados por la protección de todos los trabajadores que participan en las diversas operaciones que conforman el que hacer de nuestra empresa.
          </p>
          <p>
            La empresa también se preocupa por el mejoramiento permanente de los resultados de su gestión, está comprometido en un esfuerzo continuo para la identificación, evaluación y eliminación o control de los riesgos de accidentes del trabajo y enfermedades profesionales, mediante la participación activa de todo el personal que se desempeña en esta empresa, velando por la integridad física de estos; lo cual contribuye al mantenimiento de la salud y bienestar de su equipo humano, además de la conservación de los recursos materiales y bienes de la empresa.
          </p>
          <p>
            Esta política tendrá verdadero significado cuando esté respaldado por todos los integrantes de la organización.La prevención de riesgos en el trabajo es una parte integrante del proceso productivo y es fundamental para alcanzar una alta productividad.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
