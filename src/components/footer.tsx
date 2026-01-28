import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/TpEh-HD.png" alt="Transportes Parra e Hijos" width={400} height={83} className="h-24 object-contain" />
            </Link>
            <p className="text-sm text-muted-foreground">
              Líderes en transporte y logística para la construcción.
            </p>
          </div>
          <div className="md:col-span-1">
            <h4 className="font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li><Link href="/flota" className="text-sm text-muted-foreground hover:text-primary">Flota</Link></li>
              <li><Link href="/galeria" className="text-sm text-muted-foreground hover:text-primary">Galería</Link></li>
              <li><Link href="/contacto" className="text-sm text-muted-foreground hover:text-primary">Contacto</Link></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-muted-foreground mr-3 mt-0.5 shrink-0" />
                <span className="text-muted-foreground">Los Claveles 729, Los Ángeles, Chile</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-muted-foreground mr-3 shrink-0" />
                <a href="tel:+5643326347" className="text-muted-foreground hover:text-primary">(43) 326347</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-muted-foreground mr-3 shrink-0" />
                <a href="mailto:contacto@transportesparraehijos.cl" className="text-muted-foreground hover:text-primary">contacto@transportesparraehijos.cl</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2010 - {year} Transportes Parra e Hijos. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
