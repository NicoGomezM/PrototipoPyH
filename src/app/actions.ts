'use server';

import { z } from 'zod';
import { aiContentSuggestions, AIContentSuggestionsOutput } from '@/ai/flows/ai-content-suggestions';

// --- AI Content Suggestions Action ---
export async function getAiContentSuggestions(content: string): Promise<AIContentSuggestionsOutput> {
  if (!content) {
    return { suggestions: '' };
  }
  try {
    const result = await aiContentSuggestions({ content });
    return result;
  } catch (error) {
    console.error('Error in AI content suggestions flow:', error);
    throw new Error('Failed to get AI suggestions.');
  }
}

// --- Contact Form Action ---
const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres.' }),
  email: z.string().email({ message: 'Por favor, ingrese un correo electrónico válido.' }),
  subject: z.string().min(5, { message: 'El asunto debe tener al menos 5 caracteres.' }),
  message: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' }),
});

export type ContactFormState = {
  message: string;
  status: 'success' | 'error' | 'idle';
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Por favor, corrija los errores en el formulario.',
      status: 'error',
    };
  }

  // Here you would typically send an email or save to a database.
  // For this example, we'll just log the data and simulate success.
  console.log('Contact form submitted:', validatedFields.data);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    message: '¡Gracias por su mensaje! Nos pondremos en contacto con usted pronto.',
    status: 'success',
  };
}
