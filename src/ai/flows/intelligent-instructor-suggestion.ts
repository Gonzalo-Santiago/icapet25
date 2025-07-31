'use server';

/**
 * @fileOverview This file implements the intelligent instructor suggestion flow.
 *
 * It allows users to type in a partial or misspelled name of an instructor or course,
 * and suggests the most relevant instructors based on the input using AI.
 *
 * - intelligentInstructorSuggestion - The main function to get instructor suggestions.
 * - IntelligentInstructorSuggestionInput - The input type for the function.
 * - IntelligentInstructorSuggestionOutput - The output type for the function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const IntelligentInstructorSuggestionInputSchema = z.object({
  query: z.string().describe('The partial or misspelled name of an instructor or course.'),
});
export type IntelligentInstructorSuggestionInput = z.infer<typeof IntelligentInstructorSuggestionInputSchema>;

const IntelligentInstructorSuggestionOutputSchema = z.object({
  instructorNames: z.array(
    z.string().describe('The suggested instructor names based on the query.')
  ).describe('List of suggested instructor names'),
});
export type IntelligentInstructorSuggestionOutput = z.infer<typeof IntelligentInstructorSuggestionOutputSchema>;

export async function intelligentInstructorSuggestion(input: IntelligentInstructorSuggestionInput): Promise<IntelligentInstructorSuggestionOutput> {
  return intelligentInstructorSuggestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'intelligentInstructorSuggestionPrompt',
  input: {schema: IntelligentInstructorSuggestionInputSchema},
  output: {schema: IntelligentInstructorSuggestionOutputSchema},
  prompt: `You are an AI assistant that suggests instructor names based on a user's search query.
  The user may provide a partial or misspelled name of an instructor or a course.
  Your goal is to suggest the most relevant instructor names based on the query.

  Query: {{{query}}}

  Suggest instructor names:
  `, // Removed Handlebars call here.
});

const intelligentInstructorSuggestionFlow = ai.defineFlow(
  {
    name: 'intelligentInstructorSuggestionFlow',
    inputSchema: IntelligentInstructorSuggestionInputSchema,
    outputSchema: IntelligentInstructorSuggestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
