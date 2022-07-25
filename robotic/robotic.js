var attachPlayEventInterval = false;

var audio = $("body").append('<div style="display:none;" id="audio"></div>');

var script = document.createElement('script');
script.setAttribute('src', "./robotic/speakClient.js");
document.body.appendChild(script)
script.addEventListener('load', function () {
    $('#play').html('<i class="fa fa-volume-up" aria-hidden="true"></i> Speak');
    $(document).ready(function () {
        $("#play").click(function () {
            if ($("#input-text").val().length > 0) {
                $("#audio audio").remove();
                window.speak($("#input-text").val(), {
                    pitch: voice_pitch,
                    speed: voice_speed
                });
                $("#download_link").css('opacity', 0.1);
                $("#download_link").css('pointer-events', 'none');
                attachPlayEventInterval = setInterval(function () {
                    if ($("#audio audio").length > 0) {
                        clearInterval(attachPlayEventInterval);
                        $("#download_link").css('opacity', 1);
                        $("#download_link").attr("href", $("#audio audio").attr(
                            'src'));
                        $("#download_link").css('pointer-events', 'auto');
                    }
                }, 100)
            }
        });
    });
}, false);
