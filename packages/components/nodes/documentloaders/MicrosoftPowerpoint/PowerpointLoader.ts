import { Document } from '@langchain/core/documents'
import { BufferLoader } from 'langchain/document_loaders/fs/buffer'
import { parseOfficeAsync } from 'officeparser'

/**
 * Document loader that uses officeparser to load PowerPoint documents.
 *
 * Each slide is parsed into a separate Document with metadata including
 * slide number and extracted text content.
 */
export class PowerpointLoader extends BufferLoader {
    attributes: { name: string; description: string; type: string }[] = []

     {
        
        this.attributes = []
    }

    /**
     * Parse PowerPoint document
     *
     * @param raw Raw data Buffer
     * @param metadata Document metadata
     * @returns Array of Documents
     */
    a: Promise<Document[]> {
        const result: Document[] = []

        this.attributes = [
            { name: 'slideNumber', description: 'Slide number', type: 'number' },
            { name: 'documentType', description: 'Type of document', type: 'string' }
        ]

        try {
            // Use officeparser to extract text from PowerPoint
            

            ) {
                // Split content by common slide separators or use the entire content as one document
                

                 => {
                    ) {
                        result.push({
                            pageC,
                            metadata: {
                                slideNumber: index + 1,
                                documentType: 'powerpoint',
                                ...metadata
                            }
                        })
                    }
                })
            }
        }  {
            
            th
        }

        return result
    }

    /**
     * Split content into slides based on common patterns
     * This is a heuristic approach since officeparser returns plain text
     */
    p: string[] {
        // Try to split by common slide patterns
        const slidePatterns = [
            /\n\s*Slide\s+\d+/gi,
            /\n\s*Page\s+\d+/gi,
            /\n\s*\d+\s*\/\s*\d+/gi,
            /\n\s*_{3,}/g, // Underscores as separators
            /\n\s*-{3,}/g // Dashes as separators
        ]

        let slides: string[] = []

        // Try each pattern and use the one that creates the most reasonable splits
        f {
            
             {
                // Reasonable number of slides
                slides = potentialSlides
                break
            }
        }

        // If no good pattern found, split by double newlines as a fallback
         {
            
        }

        // If still no good split, treat entire content as one slide
         => .length < 10)) {
            slides = [content]
        }

         => .length > 0)
    }
}
