//try {
                var reverseIsDisabled = false;
                //<![CDATA[
                var attachPlayEventInterval = false;
$("#ghetto-text").css("display","none");
var audio = $("body").append( "<div style='display:none;' id='audio'></div>" );




var script = document.createElement( 'script' );
script.setAttribute( 'src', "./js/speakClient.js" );
document.body.appendChild( script )
script.addEventListener('load', function() {
  $('#play').text("Speak");
  $(document).ready(function() {
    $("#play").click(function() {
      $("#audio audio").remove();
      window.speak( $("#english-text").val(), { pitch: voice_pitch, speed: voice_speed }  );
      $("#download_link").css('opacity',0.1);
      attachPlayEventInterval = setInterval(function() {
        if($("#audio audio").length > 0) {
           clearInterval(attachPlayEventInterval);
           $("#download_link").css('opacity',1);
           $("#download_link").attr("href", $("#audio audio").attr('src') );
        }
      },100)
    });
  });
}, false);




$("#english-text").on('keypress', function() {
  $("#download_link").css('opacity',0.1);
  //$("#download_link").attr("href", "#" );
})




var play_button = $(".transdiv.ghetto").append("<div id='button_container'><button id='play'>LOADING...</button><br/><a style='color:#0070FF;opacity:0.1;margin-bottom:0.5em; display:block;' download='audio' id='download_link' target='_blank'>Download Audio File<br/><span style='font-size:80%;'>(right click and save as <b>audio.mp3</b>)</span></a></div>");
$("#button_container").css({
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)",
    display: "block",
    margin: "110px auto",
    width: "90%",
    textAlign: "center"
});
$("#play").css("margin-bottom","0.9rem");
$("#play").css("font-size", "2rem");




var voice_speed = 158;
$("#button_container").append("Speed: <input style='position: relative; top: 0.3rem;' id='voice_speed' type='range' min='5' max='300' value='158' step='1'><br/>")
$("#voice_speed").on("input", function(){ voice_speed = this.value; });
var voice_pitch = 20;
$("#button_container").append("Pitch: <input style='position: relative; top: 0.3rem;' id='voice_pitch' type='range' min='0.1' max='100' value='20' step='0.1'>")
$("#voice_pitch").on("input", function(){ voice_pitch = this.value; });

                
reverseIsDisabled = true;
function backward(text) { return $('#english-text').val(); }                //]]>
            //} catch(e) {
            //    alert("There's an error in the custom script of this translator. Error:"+e);
            //}


			try {
			

			var jsonData = {"phrases1":"","phrases2":"","words1":"","words2":"","intraword1":"","intraword2":"","prefixes1":"","prefixes2":"","suffixes1":"","suffixes2":"","regex1":"","regex2":"","rev_regex1":"","rev_regex2":"","ordering1":"","ordering2":""};
			phrases1 = jsonData.phrases1.split("\n");
			phrases2 = jsonData.phrases2.split("\n");
			words1 = jsonData.words1.split("\n");
			words2 = jsonData.words2.split("\n");
			intraword1 = jsonData.intraword1.split("\n");
			intraword2 = jsonData.intraword2.split("\n");
			prefixes1 = jsonData.prefixes1.split("\n");
			prefixes2 = jsonData.prefixes2.split("\n");
			suffixes1 = jsonData.suffixes1.split("\n");
			suffixes2 = jsonData.suffixes2.split("\n");
			regex1 = jsonData.regex1.split("\n");
			regex2 = jsonData.regex2.split("\n");
			rev_regex1 = jsonData.rev_regex1.split("\n");
			rev_regex2 = jsonData.rev_regex2.split("\n");
            ordering1 = jsonData.ordering1.split("\n");
            ordering2 = jsonData.ordering2.split("\n");

			} catch(err) {
				alert("Ahh an error! Please contact me via reddit.com/r/lingojam and I'll fix it asap. Error log: "+err.message);
			}

			evenUpSizes(phrases1,phrases2);
			evenUpSizes(words1,words2);
			evenUpSizes(intraword1,intraword2);
			evenUpSizes(prefixes1,prefixes2);
			evenUpSizes(suffixes1,suffixes2);

			//fix for mysql trailing newline deletion problem
			function evenUpSizes(a,b) {
				if(a.length > b.length) {
					while(a.length > b.length) b.push("");
				} else if(b.length > a.length) {
					while(b.length > a.length) a.push("");
				}
			}

			handleDuplicates(words1, words2);
			/* Initial translate for default text */
			if($('#english-text').val() != "") {
				var english = $('#english-text').val();
				var ghetto = translate(english);
				$('#ghetto-text').val(ghetto);
			}
