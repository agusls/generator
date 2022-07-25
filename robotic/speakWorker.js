importScripts('https://agusls.github.io/generator/robotic/speakGenerator.js');
onmessage = function (event) {
    postMessage(generateSpeech(event.data.text, event.data.args));
};
