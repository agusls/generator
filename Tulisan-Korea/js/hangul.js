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

initialjamo = new Object();

initialjamo.b = 7
initialjamo.bb = 8
initialjamo.b̥ = 7
initialjamo.c = 12
initialjamo.cc = 13
initialjamo.ch = 14
initialjamo.cʰ = 14
initialjamo.cː = 13
initialjamo.c̥ = 12
initialjamo.d = 3
initialjamo.dd = 4
initialjamo.d̥ = 3
initialjamo.g = 0
initialjamo.gg = 1
initialjamo.g̊ = 0
initialjamo.h = 18
initialjamo.j = 12
initialjamo.jh = 14
initialjamo.jj = 13
initialjamo.k = 0
initialjamo.kh = 15
initialjamo.kk = 1
initialjamo.kʰ = 15
initialjamo.kː = 1
initialjamo.l = 5
initialjamo.m = 6
initialjamo.n = 2
initialjamo.n̟ = 2
initialjamo.p = 7
initialjamo.ph = 17
initialjamo.pp = 8
initialjamo.pʰ = 17
initialjamo.pː = 8
initialjamo.r = 5
initialjamo.s = 9
initialjamo.ss = 10
initialjamo.sʰ = 10
initialjamo.sː = 10
initialjamo.t = 3
initialjamo.tch = 13
initialjamo.th = 16
initialjamo.ts = 12
initialjamo.tsh = 14
initialjamo.tss = 13
initialjamo.tt = 4
initialjamo.tʰ = 16
initialjamo.ɕ = 9
initialjamo.ɾ = 5
initialjamo["ch'"] = 14
initialjamo["ch’"] = 14
initialjamo["k'"] = 15
initialjamo["k’"] = 15
initialjamo["p'"] = 17
initialjamo["p’"] = 17
initialjamo["t'"] = 16
initialjamo["t’"] = 16

medialjamo = new Object();

medialjamo.a = 0;
medialjamo.ae = 1;
medialjamo.ai = 1;
medialjamo.ay = 1;
medialjamo.e = 5;
medialjamo.eo = 4;
medialjamo.eu = 18;
medialjamo.eui = 19;
medialjamo.ey = 5;
medialjamo.i = 20;
medialjamo.ja = 2;
medialjamo.je = 3;
medialjamo.jo = 12;
medialjamo.ju = 17;
medialjamo.jɔ = 6;
medialjamo.jɛ = 7;
medialjamo.o = 8;
medialjamo.oe = 11;
medialjamo.oi = 11;
medialjamo.oy = 11;
medialjamo.u = 13;
medialjamo.ue = 10;
medialjamo.ui = 19;
medialjamo.uy = 19;
medialjamo.uɑ = 9;
medialjamo.uɔ = 14;
medialjamo.uɛ = 15;
medialjamo.wa = 9;
medialjamo.wae = 10;
medialjamo.wai = 10;
medialjamo.way = 10;
medialjamo.we = 15;
medialjamo.weo = 14;
medialjamo.wey = 15;
medialjamo.wi = 16;
medialjamo.wo = 14;
medialjamo.wu = 13;
medialjamo.wä = 10;
medialjamo.wø = 14;
medialjamo.wŏ = 14;
medialjamo.y = 16;
medialjamo.ya = 2;
medialjamo.yae = 3;
medialjamo.yai = 3;
medialjamo.yay = 3;
medialjamo.ye = 7;
medialjamo.yeo = 6;
medialjamo.yey = 7;
medialjamo.yo = 12;
medialjamo.yu = 17;
medialjamo.yä = 3;
medialjamo.yø = 6;
medialjamo.yŏ = 6;
medialjamo.ä = 1;
medialjamo.ö = 11;
medialjamo.ø = 4;
medialjamo.ŏ = 4;
medialjamo.ŭ = 18;
medialjamo.ŭi = 19;
medialjamo.ɑ = 0;
medialjamo.ɔ = 4;
medialjamo.ɛ = 5;
medialjamo.ɨ = 18;
medialjamo.ɨi = 19;
medialjamo.ɯ = 18;
medialjamo.ʉ = 18;
medialjamo.ʉi = 19;

finaljamo = new Object();

finaljamo.b = 17;
finaljamo.bs = 18;
finaljamo.b̥ = 17;
finaljamo.c = 22;
finaljamo.ch = 23;
finaljamo.cʰ = 23;
finaljamo.c̥ = 22;
finaljamo.d = 7;
finaljamo.d̥ = 7;
finaljamo.g = 1;
finaljamo.gg = 2;
finaljamo.gs = 3;
finaljamo.g̊ = 1;
finaljamo.h = 27;
finaljamo.j = 22;
finaljamo.jh = 23;
finaljamo.k = 1;
finaljamo.kh = 24;
finaljamo.kk = 2;
finaljamo.ks = 3;
finaljamo.kʰ = 24;
finaljamo.kː = 2;
finaljamo.l = 8;
finaljamo.lb = 11;
finaljamo.lg = 9;
finaljamo.lh = 15;
finaljamo.lk = 9;
finaljamo.lm = 10;
finaljamo.lp = 11;
finaljamo.lph = 14;
finaljamo.lpʰ = 14;
finaljamo.ls = 12;
finaljamo.lt = 13;
finaljamo.lth = 13;
finaljamo.ltʰ = 13;
finaljamo.m = 16;
finaljamo.n = 4;
finaljamo.nc = 5;
finaljamo.nch = 6;
finaljamo.ncʰ = 6;
finaljamo.ng = 21;
finaljamo.nh = 6;
finaljamo.nj = 5;
finaljamo.nɟ = 5;
finaljamo.n̟ = 4;
finaljamo.p = 17;
finaljamo.ph = 26;
finaljamo.ps = 18;
finaljamo.pʰ = 26;
finaljamo.r = 8;
finaljamo.s = 19;
finaljamo.ss = 20;
finaljamo.sʰ = 20;
finaljamo.sː = 20;
finaljamo.t = 7;
finaljamo.th = 25;
finaljamo.ts = 22;
finaljamo.tsh = 23;
finaljamo.tʰ = 25;
finaljamo.ŋ = 21;
finaljamo.ɕ = 19;
finaljamo.ɾ = 8;
finaljamo["ch'"] = 23;
finaljamo["ch’"] = 23;
finaljamo["k'"] = 24;
finaljamo["k’"] = 24;
finaljamo["p'"] = 26;
finaljamo["p’"] = 26;
finaljamo["t'"] = 25;
finaljamo["t’"] = 25;

otherspecial = new Object();

otherspecial["-"] = "";
otherspecial["\\-"] = "-";
otherspecial["."] = "";
otherspecial["\\."] = ".";

maxlen = 3;

function performConversion() {
	
	var text = $('#english-text').val();
	
  romanized = text.toLowerCase() + " ";
  hangul = "";
  initialjamovalue = -1;
  medialjamovalue = -1;
  finaljamovalue = -1;
  pos = 0;
  while (pos < romanized.length) {
    if (initialjamovalue == -1) {
      len = maxlen;
      if (romanized.length - pos < len) {
        len = romanized.length - pos;
      }
      while (len > 0 && initialjamovalue == -1) {
        if (initialjamo[romanized.substring(pos, pos + len)] != null) {
          initialjamovalue = initialjamo[romanized.substring(pos, pos + len)];
          pos += len;
        }
        len--;
      }
      if (initialjamovalue == -1) {
        // no initial consonant; see if sequence starts a valid medial jamo
        // and use the placeholder initial jamo (#11)
        len = maxlen;
        if (romanized.length - pos < len) {
          len = romanized.length - pos;
        }
        while (len > 0 && medialjamovalue == -1) {
          if (medialjamo[romanized.substring(pos, pos + len)] != null) {
            medialjamovalue = medialjamo[romanized.substring(pos, pos + len)];
            pos += len;
          }
          len--;
        }
        if (medialjamovalue != -1) {
          initialjamovalue = 11;
        }
      }
      if (initialjamovalue == -1) {
        // didn't find an initial jamo, so see if there's one of the special
        // replacement strings.
        found = false;
        len = maxlen;
        if (romanized.length - pos < len) {
          len = romanized.length - pos;
        }
        while (len > 0 && !found) {
          if (otherspecial[romanized.substring(pos, pos + len)] != null) {
            hangul += otherspecial[romanized.substring(pos, pos + len)];
            pos += len;
            found = true;
          }
          len--;
        }
        if (!found) {
          hangul += romanized.charAt(pos);
          pos++;
        }
      }
    } else if (medialjamovalue == -1) {
      // initial jamo found, so see if there's a medial jamo
      len = maxlen;
      if (romanized.length - pos < len) {
        len = romanized.length - pos;
      }
      while (len > 0 && medialjamovalue == -1) {
        if (medialjamo[romanized.substring(pos, pos + len)] != null) {
          medialjamovalue = medialjamo[romanized.substring(pos, pos + len)];
          pos += len;
        }
        len--;
      }
      if (medialjamovalue == -1) {
        // no valid medial jamo found, so consider the previous initial jamo
        // invalid and look for another, but output the romanized text
        hangul += romanized.charAt(pos - 1);
        initialjamovalue = -1;
      }
    } else {
      // initial and medial jamo found, so see if there's a final jamo
      len = maxlen;
      if (romanized.length - pos < len) {
        len = romanized.length - pos;
      }
      while (len > 0 && finaljamovalue == -1) {
        if (finaljamo[romanized.substring(pos, pos + len)] != null) {
          finaljamovalue = finaljamo[romanized.substring(pos, pos + len)];
          pos += len;
        }
        len--;
      }
      // Add a hangul syllabic block either way
      if (finaljamovalue != -1) {
        hangul += String.fromCharCode(initialjamovalue * 588 + medialjamovalue * 28 + finaljamovalue + 44032);
      } else {
        hangul += String.fromCharCode(initialjamovalue * 588 + medialjamovalue * 28 + 44032);
      }
      // Now that the syllabic block is complete, reset all values to -1 to search for the next one.
      initialjamovalue = -1;
      medialjamovalue = -1;
      finaljamovalue = -1;
    }
  }
  
  rText = hangul.substring(0, hangul.length - 1);
  var tResult = document.querySelector("#tResult");
	tResult.className = "";
	tResult.innerHTML = '<span class="resultStr">' + rText + '</span>';
}
  
$(document).ready(function() {

    $("#english-text").on('keypress', function() {        
        if($("#english-text").length > 0) {
          document.getElementById("btnClear").style.display = "block";
        }        
    });
    
    $('#english-text').bind('input propertychange', function() {
        performConversion();
    });    

});