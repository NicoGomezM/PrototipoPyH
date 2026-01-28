import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nuestros Clientes - Transportes Parra e Hijos',
  description: 'Conozca algunas de las empresas que confían en nuestros servicios de transporte y logística.',
};

export default function ClientesPage() {
  const clients = [
    'Constructora XYZ',
    'Ingeniería y Proyectos S.A.',
    'Materiales del Sur',
    'Desarrollos Urbanos Chile',
    'Grandes Obras Civiles',
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Nuestros Clientes</h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          La confianza de nuestros clientes es nuestro mayor activo. Nos enorgullece colaborar con empresas líderes en el sector de la construcción.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-6 w-6 text-primary" />
            <span>Empresas que confían en nosotros</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-6 text-muted-foreground">
            A lo largo de nuestra trayectoria, hemos tenido el privilegio de trabajar con una diversa cartera de clientes, desde grandes constructoras hasta proveedores locales. Contenido sobre clientes próximamente...
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
            {clients.map((client) => (
              <div key={client} className="p-4 bg-background rounded-lg border">
                <p className="font-semibold text-sm">{client}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
