import google from 'translate-google';

export default async function translate(text, language) {
    return new Promise((resolve) => {
        google(text, {to: language})
            .then(translatedText => resolve(translatedText)
            );
    })
}
