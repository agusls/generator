var attachPlayEventInterval = false;

var audio = $("body").append('<div style="display:none;" id="audio"></div>');

var script = document.createElement('script');
script.setAttribute('src', "https://agusls.github.io/generator/robotic/speakClient.js");
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


$("#input-text").on('keypress', function () {
            $("#download_link").css('opacity', 0.1);
            $("#download_link").css('pointer-events', 'none');
        })

        var play_button = $(".result").append(
            "<div id='button_container'></div>"
        );

        var voice_speed = 158;
        $("#button_container").append(
            '<div class="setting">' +
            '    <div>Speed</div>' +
            '    <div>' +
            '        <input class="slider" id="voice_speed" type="range" min="5" max="300" value="158" step="1">' +
            '    </div>' +
            '</div>'
        )
        $("#voice_speed").on("input", function () {
            voice_speed = this.value;
        });
        var voice_pitch = 20;
        $("#button_container").append(
            '<div class="setting">' +
            '    <div>Pitch</div>' +
            '    <div>' +
            '        <input class="slider" id="voice_pitch" type="range" min="0.1" max="100" value="20" step="0.1">' +
            '    </div>' +
            '</div>'
        )
        $("#voice_pitch").on("input", function () {
            voice_pitch = this.value;
        });

        $("#button_container").append(
            '<div class="btn-voice"><button id="play" class="play">LOADING...</button>' +
            '<a class="download" download="VoiceOfText-' + Date.now() + '" id="download_link">' +
            '<i class="fa fa-download" aria-hidden="true"></i> Download Audio File' +
            '</a></div>'
        );
