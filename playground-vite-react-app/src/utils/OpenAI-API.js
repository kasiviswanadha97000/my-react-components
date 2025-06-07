export const fetchOpenAIResponse = async (promptText) => {   
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
    const msg = prompt(promptText);
   
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "user",
                    content: msg
                }
            ],
            temperature: 0.7
        })
    });

    const data = await response.json();
    return data.choices[0].message.content;
};

function prompt(SEARCH_NAME) {
    return `You are an assistant that only responds with JSON and no explanation or extra text.

Given a search query for a name, return a JSON object with the following exact structure and keys:

{
  "query": "${SEARCH_NAME}",
  "results": [
    {
      "fullName": "string",
      "currentRole": "string",
      "company": "string or null",
      "location": "string or null",
      "education": "string or null",
      "certifications": ["string", ...] or [],
      "interests": ["string", ...] or [],
      "linkedin": "string or null"
    }
  ]
}

For any data not found, use null or empty array [] as appropriate.

Do not add any text outside the JSON object. The value of "query" must be exactly the name searched.

Example for query "name":

{
  "query": "name",
  "results": [
    {
      "fullName": "Kasi Viswanadha Sarma Rangavajyula",
      "currentRole": "Packaged App Development Analyst",
      "company": "Accenture",
      "location": "India",
      "education": "Vignan's Lara Institute of Technology & Science",
      "certifications": ["Microsoft Certified: Azure AI Fundamentals"],
      "interests": ["Generative AI", "API Development"],
      "linkedin": "https://in.linkedin.com/in/kasi-viswanadha-sarma-rangavajyula-48582a174"
    },
    {
      "fullName": "A. Kasi Viswanadha Sarma",
      "currentRole": "Manager - Signal Designs",
      "company": "XOrail",
      "location": "Bangalore, India",
      "education": "SERMH School, Khurda Road",
      "certifications": [],
      "interests": [],
      "linkedin": "https://in.linkedin.com/in/a-kasi-viswanadha-sarma-2b0a9039"
    },
    {
      "fullName": "Kasi Viswanadha Sarma Chintalapati",
      "currentRole": "Edible Oil Technologist",
      "company": null,
      "location": "Greater Hyderabad Area",
      "education": null,
      "certifications": [],
      "interests": [],
      "linkedin": "https://www.linkedin.com/pub/dir/viswanadha/chintalapati"
    }
  ]
}
`;
} 
