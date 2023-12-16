// ... (import statements)
"use client";

import { useEffect, useState } from "react";

const LanguagePage = () => {
  const [translatedText, setTranslatedText] = useState('');

  const encodedParams = new URLSearchParams();
  encodedParams.set('source_language', 'en');
  encodedParams.set('target_language', 'kn');
  encodedParams.set('text', 'What is you name?');

  const getData = async () => {
    const options = {
      method: 'POST',
      url: 'https://text-translator2.p.rapidapi.com/translate',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '2fc637503fmsh839941a80c82a34p15212djsn2d54e98cd246',
        'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
      },
      data: encodedParams,
    };

    try {
      const response = await axios.request(options);

      // Access the translated text from the response
      const translatedTextFromResponse = response.data.data.translatedText;

      // Set the translated text in the component state
      setTranslatedText(translatedTextFromResponse);

    } catch (error) {
      console.error(error);
    }
  }

  // Call getData inside a useEffect to ensure it runs after the component mounts
  useEffect(() => {
    getData();
  }, []); // Empty dependency array to run the effect only once after mounting

  return (
    <div>
      <h1>Language Page</h1>
      <p>{translatedText}</p>
    </div>
  )
}

export default LanguagePage;
