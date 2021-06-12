function eraseText() {
    document.getElementById("english-text").value = "";
	document.getElementById("english-text").focus();
	document.getElementById("btnClear").style.display = "none";
}

var maxLength = 1000;

$("textarea").attr('maxlength', maxLength);
$('#info').text( '0/' + maxLength);

$('textarea').keyup(function() {
  var textlen = maxLength - $(this).val().length;
  $('#info').text(textlen + '/' + maxLength);
});


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
  $('#play_text').attr('data-text', 'Speak');
  $(document).ready(function() {
    $("#play").click(function() {
      $("#audio audio").remove();
      window.speak( $("#english-text").val(), { pitch: voice_pitch, speed: voice_speed }  );
      $("#download_link").css('opacity',0.1);
      attachPlayEventInterval = setInterval(function() {
        if($("#audio audio").length > 0) {
           clearInterval(attachPlayEventInterval);
           $("#download_link").css('opacity',1);
		   $("#download_box").css('opacity',1);		   
           $("#download_link").attr("href", $("#audio audio").attr('src') );
        } else {
		   $("#download_link").css('opacity',0.1);
		   $("#download_box").css('opacity',0.1);	
		}
      },100)
    });
  });
}, false);


$("#english-text").on('keypress', function() {
  $("#download_link").css('opacity',0.1);
  
  if($("#english-text").length > 0) {
	document.getElementById("btnClear").style.display = "block";
  }
  
})


var play_button = $(".transdiv.ghetto").append("<div id='button_container2'><center><a id='play' class='button outline' href='javascript:;' aria-label='Speak' rel='noreferrer' data-ss1623379296='1'><i class='icon speak'></i><span id='play_text' data-text='Loading' data-en='Loading'></span></a></center><div  style='opacity:0.1; margin: 0 auto;' id='download_box' class='downloadInfo'><span class='fileType' data-text='mp3'></span><div class='fileName'><!--[ File name ]--><span>audio.mp3</span><span class='fileSize'></span></div><!--[ Download link (change href='...' atribute to add link download) ]--><a class='button fileLink' download='audio' id='download_link' aria-label='Download'><i class='icon download'></i></a></div></div><div id='button_container'></div>");

$("#button_container").css({
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)",
    display: "block",
    margin: "60px auto",
    width: "90%",
    textAlign: "center"
});


var voice_speed = 158;
$("#button_container").append("Speed: <input style='position: relative; height:4px; margin-bottom: 10px;' id='voice_speed' type='range' min='5' max='300' value='158' step='1'><br/>")
$("#voice_speed").on("input", function(){ voice_speed = this.value; });
var voice_pitch = 20;
$("#button_container").append("Pitch: <input style='position: relative; height:4px; top: 0.3rem;' id='voice_pitch' type='range' min='0.1' max='100' value='20' step='0.1'>")
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