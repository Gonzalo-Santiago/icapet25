'use server';

/**
 * @fileOverview Summarizes instructor comments using GenAI to quickly understand key feedback.
 *
 * - summarizeInstructorComment - A function that summarizes instructor comments.
 * - SummarizeInstructorCommentInput - The input type for the summarizeInstructorComment function.
 * - SummarizeInstructorCommentOutput - The return type for the summarizeInstructorComment function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeInstructorCommentInputSchema = z.object({
  comment: z
    .string()
    .describe('The comment from the instructor to be summarized.'),
});
export type SummarizeInstructorCommentInput = z.infer<typeof SummarizeInstructorCommentInputSchema>;

const SummarizeInstructorCommentOutputSchema = z.object({
  summary: z.string().describe('A summary of the instructor comment.'),
});
export type SummarizeInstructorCommentOutput = z.infer<typeof SummarizeInstructorCommentOutputSchema>;

export async function summarizeInstructorComment(input: SummarizeInstructorCommentInput): Promise<SummarizeInstructorCommentOutput> {
  return summarizeInstructorCommentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeInstructorCommentPrompt',
  input: {schema: SummarizeInstructorCommentInputSchema},
  output: {schema: SummarizeInstructorCommentOutputSchema},
  prompt: `Summarize the following instructor comment:\n\n{{comment}}`,
});

const summarizeInstructorCommentFlow = ai.defineFlow(
  {
    name: 'summarizeInstructorCommentFlow',
    inputSchema: SummarizeInstructorCommentInputSchema,
    outputSchema: SummarizeInstructorCommentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
