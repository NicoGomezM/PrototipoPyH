'use client';

import { useState } from 'react';
import { Sparkles } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { getAiContentSuggestions } from '@/app/actions';
import { Skeleton } from './ui/skeleton';

export default function AiSuggestions() {
  const [content, setContent] = useState('');
  const [suggestions, setSuggestions] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) {
      setError('Por favor, ingrese algún contenido para analizar.');
      return;
    }
    setError('');
    setIsLoading(true);
    setSuggestions('');

    try {
      const result = await getAiContentSuggestions(content);
      if (result.suggestions) {
        setSuggestions(result.suggestions);
      } else {
        setError('No se pudieron generar sugerencias. Inténtelo de nuevo.');
      }
    } catch (err) {
      setError('Ocurrió un error al contactar al servicio de IA.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 p-2 rounded-full">
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="font-headline">Mejore su Contenido con IASCA</CardTitle>
        </div>
        <CardDescription>
          Pegue el texto de su sitio web a continuación para recibir sugerencias de mejora de SEO y participación del usuario.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Textarea
            placeholder="Escriba o pegue su contenido aquí..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={6}
            className="mb-4"
            disabled={isLoading}
          />
          {error && <p className="text-sm text-destructive mb-4">{error}</p>}
          <Button type="submit" disabled={isLoading} className="w-full bg-accent hover:bg-accent/90">
            {isLoading ? 'Analizando...' : 'Obtener Sugerencias'}
          </Button>
        </form>
        {(isLoading || suggestions) && (
          <div className="mt-6">
            <h4 className="font-semibold mb-2">Sugerencias:</h4>
            {isLoading ? (
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[80%]" />
                <Skeleton className="h-4 w-full" />
              </div>
            ) : (
              <div className="prose prose-sm max-w-none text-muted-foreground p-4 bg-gray-50 rounded-md border">
                {suggestions.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
