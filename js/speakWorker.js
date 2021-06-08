importScripts('https://agusls.github.io/generator/js/speakGenerator.js');
onmessage = function (event) {
    postMessage(generateSpeech(event.data.text, event.data.args));
};
