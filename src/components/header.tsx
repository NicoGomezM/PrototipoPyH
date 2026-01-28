'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect, useCallback } from 'react';
import { Menu, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navigationLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/flota', label: 'Flota' },
  { href: '/politica', label: 'Política' },
  { href: '/clientes', label: 'Clientes' },
  { href: '/rolsocial', label: 'Rol Social' },
  { href: '/prevencion', label: 'Prevención' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/galeria', label: 'Galería' },
  { href: '/contacto', label: 'Contacto' },
  { href: 'http://www.transportesparraehijos.cl/webmail', label: 'Webmail', external: true },
];

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const navContainerRef = useRef<HTMLDivElement>(null);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScrollability = useCallback(() => {
    const nav = navContainerRef.current;
    if (!nav) return;

    const hasOverflow = nav.scrollWidth > nav.clientWidth;
    setCanScrollLeft(nav.scrollLeft > 0);
    // Add a small buffer to avoid floating point inaccuracies
    setCanScrollRight(hasOverflow && nav.scrollLeft < nav.scrollWidth - nav.clientWidth - 1);
  }, []);

  useEffect(() => {
    const nav = navContainerRef.current;
    if (!nav) return;

    // Initial check
    checkScrollability();

    // Debounced check on resize
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(checkScrollability, 100);
    };

    window.addEventListener('resize', handleResize);
    nav.addEventListener('scroll', checkScrollability);

    // Also check after a short delay to account for font loading, etc.
    const initialCheckTimeout = setTimeout(checkScrollability, 250);

    return () => {
      window.removeEventListener('resize', handleResize);
      nav.removeEventListener('scroll', checkScrollability);
      clearTimeout(resizeTimeout);
      clearTimeout(initialCheckTimeout);
    };
  }, [checkScrollability]);


  const stopScrolling = useCallback(() => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = null;
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const nav = navContainerRef.current;
    if (!nav) return;

    if (nav.scrollWidth <= nav.clientWidth) {
      stopScrolling();
      return;
    }

    const { left, width } = nav.getBoundingClientRect();
    const mouseX = e.clientX - left;
    const scrollThreshold = width * 0.2; // 20% on each side
    const scrollAmount = 8;

    stopScrolling();

    if (mouseX < scrollThreshold) {
      scrollIntervalRef.current = setInterval(() => {
        if (navContainerRef.current) navContainerRef.current.scrollLeft -= scrollAmount;
      }, 25);
    } else if (mouseX > width - scrollThreshold) {
      scrollIntervalRef.current = setInterval(() => {
        if (navContainerRef.current) navContainerRef.current.scrollLeft += scrollAmount;
      }, 25);
    }
  };

  const handleMouseLeave = () => {
    stopScrolling();
  };

  useEffect(() => {
    return () => stopScrolling();
  }, [stopScrolling]);

  const NavLinks = ({ className, onLinkClick }: { className?: string; onLinkClick?: () => void }) => {
    const linkClasses = "relative py-2 text-sm font-medium uppercase tracking-wider transition-colors hover:text-primary after:absolute after:bottom-[-2px] after:left-0 after:h-[3px] after:w-0 after:bg-primary after:transition-all after:duration-250 after:ease-in-out after:content-[''] hover:after:w-full";

    return (
      <nav className={cn('flex items-center gap-x-8', className)}>
        {navigationLinks.map((link) => {
          const isActive = !link.external && pathname === link.href;
          if (link.external) {
            return (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(linkClasses, 'whitespace-nowrap text-muted-foreground')}
                onClick={onLinkClick}
              >
                {link.label}
              </a>
            );
          }
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                linkClasses,
                isActive ? 'text-primary' : 'text-muted-foreground',
                'whitespace-nowrap'
              )}
              onClick={onLinkClick}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-40 items-center justify-between">
        <Link href="/" className="flex-shrink-0 flex items-center gap-2">
          <Image src="/TpEh-HD.png" alt="Transportes Parra e Hijos" width={400} height={83} className="h-36 object-contain" />
        </Link>
        
        <div className="hidden md:flex flex-1 justify-center items-center min-w-0 px-4 relative">
          {canScrollLeft && (
             <div className="absolute left-0 top-1/2 -translate-y-1/2 h-full w-12 bg-gradient-to-r from-background to-transparent pointer-events-none z-10 flex items-center">
              <ChevronLeft className="h-6 w-6 text-primary" />
            </div>
          )}
          <div
            ref={navContainerRef}
            className="w-full overflow-hidden whitespace-nowrap"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <NavLinks className="justify-center px-8" onLinkClick={() => {}} />
          </div>
           {canScrollRight && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-full w-12 bg-gradient-to-l from-background to-transparent pointer-events-none z-10 flex items-center justify-end">
              <ChevronRight className="h-6 w-6 text-primary" />
            </div>
          )}
        </div>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="p-4">
                <Link href="/" className="flex items-center gap-2 mb-8" onClick={() => setMobileMenuOpen(false)}>
                  <Image src="/TpEh-HD.png" alt="Transportes Parra e Hijos" width={400} height={83} className="h-28 object-contain" />
                </Link>
                <NavLinks className="flex-col items-start gap-4" onLinkClick={() => setMobileMenuOpen(false)} />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
