import { generateAIPrompt } from "../context/Prompt";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const GEMINI_API_URL = import.meta.env.VITE_GEMINI_API_URL;

export const fetchGeminiResult = async (formData: Record<string, any>) => {
  try {
    const promptText = generateAIPrompt(formData); // ✅ Use your function

    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: promptText,
              },
            ],
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`Gemini API error: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Gemini API Response:', data);

    const textResponse =
      data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response from model.';

    return {
      input: formData,
      suggestion: textResponse,
    };
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    throw error;
  }
};
