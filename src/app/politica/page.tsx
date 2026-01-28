import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Recycle, HeartHandshake } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nuestra Política - Transportes Parra e Hijos',
  description: 'Conozca nuestra política de calidad, seguridad y compromiso con el medio ambiente.',
};

export default function PoliticaPage() {
  const policies = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: 'Política de Calidad y Seguridad',
      description: 'Nuestro compromiso es con la excelencia. Implementamos rigurosos controles de calidad y protocolos de seguridad para proteger a nuestro personal, nuestros clientes y la carga que transportamos. La seguridad es nuestra prioridad número uno en todas las operaciones.',
    },
    {
      icon: <Recycle className="h-8 w-8 text-primary" />,
      title: 'Compromiso Ambiental',
      description: 'Estamos dedicados a minimizar nuestro impacto ambiental. Esto incluye la optimización de rutas para reducir el consumo de combustible, el mantenimiento preventivo de nuestra flota para asegurar emisiones controladas y la gestión responsable de residuos.',
    },
    {
      icon: <HeartHandshake className="h-8 w-8 text-primary" />,
      title: 'Ética y Responsabilidad Social',
      description: 'Operamos con los más altos estándares de ética e integridad. Fomentamos un ambiente de trabajo justo y respetuoso, y nos esforzamos por ser un miembro activo y positivo en las comunidades donde operamos, contribuyendo a su desarrollo sostenible.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Nuestra Política Empresarial</h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          Nuestros principios rectores que aseguran un servicio de calidad, seguro y responsable.
        </p>
      </div>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
        {policies.map((policy) => (
          <Card key={policy.title}>
            <CardHeader className="flex flex-row items-center gap-4">
              {policy.icon}
              <CardTitle>{policy.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{policy.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center p-6 bg-background rounded-lg">
          <p className="text-muted-foreground">El contenido detallado de nuestras políticas estará disponible próximamente.</p>
      </div>
    </div>
  );
}
