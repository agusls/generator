var maxLength = 200;

$("textarea").attr('maxlength', maxLength);
$('#info').text( '0/' + maxLength);

$('textarea').keyup(function() {
	var currLength = $(this).val().length;
	var textlen = maxLength - currLength;
	$('#info').text(currLength + '/' + maxLength);
});

function eraseText() {
    document.getElementById("english-text").value = "";
    document.getElementById("english-text").focus();
    document.getElementById("btnClear").style.display = "none";
    $('#info').text( '0/' + maxLength);
    $("#download-qr").css('opacity',0.1);
    $("#download-qr").css('pointer-events', 'none');
    $("#download-qr").css('cursor', 'default');
    document.querySelector("#tResult").innerHTML = '';
}

function bold(text) {
    var wide = {"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"𝓪","b":"𝓫","c":"𝓬","d":"𝓭","e":"𝓮","f":"𝓯","g":"𝓰","h":"𝓱","i":"𝓲","j":"𝓳","k":"𝓴","l":"𝓵","m":"𝓶","n":"𝓷","o":"𝓸","p":"𝓹","q":"𝓺","r":"𝓻","s":"𝓼","t":"𝓽","u":"𝓾","v":"𝓿","w":"𝔀","x":"𝔁","y":"𝔂","z":"𝔃","A":"𝓐","B":"𝓑","C":"𝓒","D":"𝓓","E":"𝓔","F":"𝓕","G":"𝓖","H":"𝓗","I":"𝓘","J":"𝓙","K":"𝓚","L":"𝓛","M":"𝓜","N":"𝓝","O":"𝓞","P":"𝓟","Q":"𝓠","R":"𝓡","S":"𝓢","T":"𝓣","U":"𝓤","V":"𝓥","W":"𝓦","X":"𝓧","Y":"𝓨","Z":"𝓩"};
    var charArray = text.split("");
    for(var i = 0; i < charArray.length; i++) {
      if( wide[charArray[i].toLowerCase()] ) {
        charArray[i] = wide[charArray[i]];
      }
    }
    text = charArray.join("");
    return text;
  }
  
  
  function normal(text) {
    var map = {"0":"𝟢","1":"𝟣","2":"𝟤","3":"𝟥","4":"𝟦","5":"𝟧","6":"𝟨","7":"𝟩","8":"𝟪","9":"𝟫","a":"𝒶","b":"𝒷","c":"𝒸","d":"𝒹","e":"𝑒","f":"𝒻","g":"𝑔","h":"𝒽","i":"𝒾","j":"𝒿","k":"𝓀","l":"𝓁","m":"𝓂","n":"𝓃","o":"𝑜","p":"𝓅","q":"𝓆","r":"𝓇","s":"𝓈","t":"𝓉","u":"𝓊","v":"𝓋","w":"𝓌","x":"𝓍","y":"𝓎","z":"𝓏","A":"𝒜","B":"𝐵","C":"𝒞","D":"𝒟","E":"𝐸","F":"𝐹","G":"𝒢","H":"𝐻","I":"𝐼","J":"𝒥","K":"𝒦","L":"𝐿","M":"𝑀","N":"𝒩","O":"𝒪","P":"𝒫","Q":"𝒬","R":"𝑅","S":"𝒮","T":"𝒯","U":"𝒰","V":"𝒱","W":"𝒲","X":"𝒳","Y":"𝒴","Z":"𝒵"};
    var charArray = text.split("");
    for(var i = 0; i < charArray.length; i++) {
      if( map[charArray[i].toLowerCase()] ) {
        charArray[i] = map[charArray[i]];
      }
    }
    text = charArray.join("");
    return text;
  }

  
$(document).ready(function() {

    function getCurvize() {

        var text = $('#english-text').val();

        style = $("input[name='style']:checked").val();

        if( style == 'bold' ) {
            rText = bold(text);
        } else {
            rText = normal(text);
        }

        var tResult = document.querySelector("#tResult");
        tResult.className = "";
        tResult.innerHTML = '<span class="resultStr">' + rText + '</span>';

    }

    $("#english-text").on('keypress', function() {        
        if($("#english-text").length > 0) {
          document.getElementById("btnClear").style.display = "block";
        }        
    })

    $("input[name='style']").change(function(){
        getCurvize();
    });
    
    $('#english-text').bind('input propertychange', function() {
        getCurvize();
    });    

});