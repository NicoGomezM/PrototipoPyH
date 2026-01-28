import { Metadata } from 'next';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import ContactForm from '@/components/contact-form';

export const metadata: Metadata = {
  title: 'Contacto - Transportes Parra e Hijos',
  description: 'Póngase en contacto con nosotros para cotizaciones, consultas o cualquier otra información.',
};

export default function ContactPage() {
  const contactImage = PlaceHolderImages.find((img) => img.id === 'contact-image');

  const contactDetails = [
    {
      title: 'Administración',
      icon: <MapPin className="h-6 w-6 text-primary" />,
      lines: ['Los Claveles #729, Los Ángeles - Chile'],
      href: 'https://www.google.com/maps/search/?api=1&query=Los+Claveles+729+Los+Angeles+Chile',
      aria: 'Ver en mapa',
    },
    {
      title: 'Central Telefónica',
      icon: <Phone className="h-6 w-6 text-primary" />,
      lines: ['(43) 326347'],
      href: 'tel:+5643326347',
      aria: 'Llamar',
    },
    {
      title: 'Correo Electrónico',
      icon: <Mail className="h-6 w-6 text-primary" />,
      lines: ['contacto@transportesparraehijos.cl', 'administracion@transportesparraehijos.cl'],
      href: 'mailto:contacto@transportesparraehijos.cl',
      aria: 'Enviar correo',
    },
  ];

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Póngase en Contacto</h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Estamos aquí para ayudarle. Envíenos un mensaje o llámenos para discutir sus necesidades de transporte.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-background p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Información de Contacto</h2>
            <div className="space-y-8">
              {contactDetails.map((detail) => (
                <div key={detail.title} className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">{detail.icon}</div>
                  <div>
                    <h3 className="font-semibold">{detail.title}</h3>
                    {detail.lines.map((line, index) => (
                      <a
                        key={index}
                        href={detail.href}
                        target={detail.title === 'Administración' ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        aria-label={detail.aria}
                        className="block text-muted-foreground hover:text-primary transition-colors"
                      >
                        {line}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-8 rounded-lg border">
            <h2 className="text-2xl font-bold mb-6">Enviar un Mensaje</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
