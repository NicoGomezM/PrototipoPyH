'use server';

/**
 * @fileOverview A flow that provides AI-powered content suggestions for website improvement.
 *
 * - aiContentSuggestions - A function that takes content as input and returns AI-suggested improvements.
 * - AIContentSuggestionsInput - The input type for the aiContentSuggestions function.
 * - AIContentSuggestionsOutput - The return type for the aiContentSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIContentSuggestionsInputSchema = z.object({
  content: z.string().describe('The website content to be improved.'),
});
export type AIContentSuggestionsInput = z.infer<
  typeof AIContentSuggestionsInputSchema
>;

const AIContentSuggestionsOutputSchema = z.object({
  suggestions: z
    .string()
    .describe(
      'AI-powered suggestions for improving the website content, including SEO and user engagement aspects.'
    ),
});
export type AIContentSuggestionsOutput = z.infer<
  typeof AIContentSuggestionsOutputSchema
>;

export async function aiContentSuggestions(
  input: AIContentSuggestionsInput
): Promise<AIContentSuggestionsOutput> {
  return aiContentSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiContentSuggestionsPrompt',
  input: {schema: AIContentSuggestionsInputSchema},
  output: {schema: AIContentSuggestionsOutputSchema},
  prompt: `You are an AI assistant specialized in providing content improvement suggestions for websites.

  Based on the given website content, generate suggestions to improve its SEO and user engagement.

  Content: {{{content}}}

  Suggestions:`, // Removed 'the following' since there's only one field being input
});

const aiContentSuggestionsFlow = ai.defineFlow(
  {
    name: 'aiContentSuggestionsFlow',
    inputSchema: AIContentSuggestionsInputSchema,
    outputSchema: AIContentSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
