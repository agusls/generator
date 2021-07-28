function eraseText() {
    document.getElementById("english-text").value = "";
	document.getElementById("english-text").focus();
	document.getElementById("btnClear").style.display = "none";
	$("#download_link").css('opacity',0.1);
	$("#download_box").css('opacity',0.1);
}

var maxLength = 200;

$("textarea").attr('maxlength', maxLength);
$('#info').text( '0/' + maxLength);

$('textarea').keyup(function() {
	var currLength = $(this).val().length;
	var textlen = maxLength - currLength;
	$('#info').text(currLength + '/' + maxLength);
	if( currLength <= 0 ) {
		$("#download_link").css('opacity',0.1);
		$("#download_box").css('opacity',0.1);
	}
});


var audio = $("body").append( "<div style='display:none;' id='audio'></div>" );

var play_button = $(".transdiv.ghetto").append("<div id='button_container'><div style='display: flex; justify-content: center;width: 100%;'><a id='play' class='button outline' href='javascript:;' aria-label='Speak' rel='noreferrer' data-ss1623379296='1'><i class='icon speak'></i><span id='play_text' data-text='Loading' data-en='Loading'></span></a></div><div  style='opacity:0.1; margin: 0 auto;' id='download_box' class='downloadInfo'><span class='fileType' data-text='mp3'></span><div class='fileName'><!--[ File name ]--><span>audio.mp3</span><span class='fileSize'></span></div><!--[ Download link (change href='...' atribute to add link download) ]--><a class='button fileLink' id='download_link' aria-label='Download' rel='noreferrer' ><i class='icon download'></i></a></div></div>");


  $('#play_text').attr('data-text', 'Convert to Voice');
  $(document).ready(function() {
    $("#play").click(function(e) {
      $("#download_link").css('opacity',0.1);
      //attachPlayEventInterval = setInterval(function() {
        if($('textarea').val().length > 0) {
           //clearInterval(attachPlayEventInterval);
           $("#download_link").css('opacity',1);
		   $("#download_box").css('opacity',1);		   
           $("#download_link").attr("href", "#download-java-voice" );
		   
		   e.preventDefault();  //stop the browser from following
			var textJava = $("#english-text").val();
			var voice = $("#voice").val();
			
			var urlTranslate = 'https://translate.google.com/translate_tts?ie=UTF-8&q='+ textJava +'&tl=' + voice + '&total=1&idx=0&client=tw-ob&ttsspeed=1';
			
			//$("audio").attr('src') = urlTranslate;
			$("#download_link").attr("href", urlTranslate);
			//$("#download_link").attr("target", "_blank");
			$("#download_link").attr("rel", "noreferrer");
			
			//window.open(urlTranslate);
			console.log(urlTranslate);
			
        } else {
		   $("#download_link").css('opacity',0.1);
		   $("#download_box").css('opacity',0.1);	
		}
      //},100)
    });
  });


$("#english-text").on('keypress', function() {
  $("#download_link").css('opacity',0.1);  
  if($("#english-text").length > 0) {
	document.getElementById("btnClear").style.display = "block";
  }  
})