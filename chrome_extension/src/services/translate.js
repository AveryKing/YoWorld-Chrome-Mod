import google from 'translate-google';

export default async function translate(text, language) {
    return new Promise((resolve) => {
         fetch("https://libretranslate.com/translate", {
            method: "POST",
            body: JSON.stringify({
                q: text,
                source: "en",
                target: language,
                format: "text"
            }),
            headers: { "Content-Type": "application/json" }
        }).then(translatedText => resolve(translatedText))
    });
}
