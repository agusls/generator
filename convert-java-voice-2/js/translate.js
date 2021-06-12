function eraseText() {
    document.getElementById("english-text").value = "";
	document.getElementById("english-text").focus();
	document.getElementById("btnClear").style.display = "none";
	//$("#download_link").css('opacity',0.1);
	$("#download_box").css('opacity',0.1);
}

var maxLength = 200;

$("textarea").attr('maxlength', maxLength);
$('#info').text( '0/' + maxLength);

$('textarea').keyup(function() {
	var currLength = $(this).val().length;
	var textlen = maxLength - currLength;
	$('#info').text(textlen + '/' + maxLength);
	if( currLength <= 0 ) {
		//$("#download_link").css('opacity',0.1);
		$("#download_box").css('opacity',0.1);
	}
});


var audio = $("body").append( "<div style='display:none;' id='audio'></div>" );

var play_button = $(".transdiv.ghetto").append("<div id='button_container2'><center><a id='play' class='button outline' href='javascript:;' aria-label='Speak' rel='noreferrer' data-ss1623379296='1'><i class='icon speak'></i><span id='play_text' data-text='Loading' data-en='Loading'></span></a></center><center><audio id='speech' src='#' controls='controls' autoplay='autoplay'>Your browser does not support the audio element.</audio></center>");


  $('#play_text').attr('data-text', 'Convert to Voice');
  $(document).ready(function() {
    $("#play").click(function() {
      //$("#download_link").css('opacity',0.1);
      //attachPlayEventInterval = setInterval(function() {
        if($('textarea').val().length > 0) {
           //clearInterval(attachPlayEventInterval);
           //$("#download_link").css('opacity',1);
		   $("#download_box").css('opacity',1);		   
           //$("#download_link").attr("href", "#download-java-voice" );
        } else {
		   //$("#download_link").css('opacity',0.1);
		   $("#download_box").css('opacity',0.1);	
		}
      //},100)
    });
  });


$("#english-text").on('keypress', function() {
  //$("#download_link").css('opacity',0.1);  
  if($("#english-text").length > 0) {
	document.getElementById("btnClear").style.display = "block";
  }  
})

$('#download_link').click(function(e) {
    e.preventDefault();  //stop the browser from following
    var textJava = $("#english-text").val();
	
	var urlTranslate = 'https://translate.google.com/translate_tts?ie=UTF-8&q='+ textJava +'&tl=jv&total=1&idx=0&client=tw-ob&prev=input&ttsspeed=1';
	
	//$("audio").attr('src') = urlTranslate;
	
    window.open(urlTranslate);
	console.log(urlTranslate);
});