export function generateAIPrompt(formData: Record<string, any>) {
  const {
    fullName,
    dob,
    birthTime,
    birthPlace,
    currentFeeling,
    dominantThought,
    contentVibe = [],
  } = formData;

  let prompt = `You are a numerology and emotion-aware content recommendation AI.

Use the user's date of birth to calculate:
- Moolank (Root Number)
- Bhagyank (Destiny Number)

Then combine that with their current emotional state and desired vibes to recommend content that matches their soul’s current energy.

User Details:
- Full Name: ${fullName}
- Date of Birth: ${dob}
${birthTime ? `- Time of Birth: ${birthTime}\n` : ""}
${birthPlace ? `- Place of Birth: ${birthPlace}\n` : ""}
${currentFeeling ? `- Current Feeling: ${currentFeeling}\n` : ""}
${dominantThought ? `- Dominant Thought: ${dominantThought}\n` : ""}
${contentVibe.length > 0 ? `- Desired Vibes: ${contentVibe.join(", ")}\n` : ""}

Instructions:
1. Calculate Moolank and Bhagyank from the Date of Birth.
2. Use that along with the emotional context to suggest exactly:
   - 5 Movies (can be Bollywood, Hollywood, or South Indian — based on energy match)
   - 5 Songs (any language or style — just match the vibe)
3. Output only the names of movies and songs. No description or explanation.

Format:
Movies:
1. ...
2. ...
3. ...
4. ...
5. ...

Songs:
1. ...
2. ...
3. ...
4. ...
5. ...
`;

  return prompt;
}
