<script>

// Create HTML Video Element to play the video
var video = document.createElement('video');
video.addEventListener('canplay', function (e) {
    document.body.appendChild( video );
});

video.src = 'https://translate.google.com/translate_tts?ie=UTF-8&q=opo kabare koe wayah iki&tl=jv&total=1&idx=0&client=tw-ob&prev=input&ttsspeed=1';
video.crossOrigin = 'anonymous';
video.loop = true;
video.play();


</script>