
const nullthrows = (v) => {
    if (v == null) throw new Error("it's a null");
    return v;
}

function injectCode() {
    const script = document.createElement('script');
    // This is why it works!
    script.src = 'https://raw.githubusercontent.com/AveryKing/YoWorld-Bot/main/script.js?token=ASIUOQTPAIZWPQELHCQ7LG3B37HD2';
    script.onload = function() {
       let avery = 'wow leet!'
    };

    // This script runs before the <head> element is created,
    // so we add the script to <html> instead.
    nullthrows(document.head || document.documentElement).appendChild(script);
}


injectCode()