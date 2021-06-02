//try {
                var reverseIsDisabled = false;
                //<![CDATA[
                function forward(text) {
  return text.split("😀😂🐘🐰💸").join("    ");
}

var morseStrings = ["·-·-·-","-····-","--··--","---···","··--··","·----·","-··-·","-·--·-","-·--·-","·-··-·","-···-","·--·-·","-----","·----","··---","···--","····-","·····","-····","--···","---··","----·","·-·-","·--·-","·--·-","----","··-··","--·--","---·","··--","·-","-···","-·-·","-··","·","··-·","--·","····","··","·---","-·-","·-··","--","-·","---","·--·","--·-","·-·","···","-","··-","···-","·--","-··-","-·--","--··","·-·-","·--·-","·--·-","----","··-··","--·--","---·","··--","·-","-···","-·-·","-··","·","··-·","--·","····","··","·---","-·-","·-··","--","-·","---","·--·","--·-","·-·","···","-","··-","···-","·--","-··-","-·--","--··"];
var asciiStrings = [".","-",",",":","?","'","/","(",")","\"","=","@","0","1","2","3","4","5","6","7","8","9","Ä","Á","Å","Ch","É","Ñ","Ö","Ü","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","ä","á","å","ch","é","ñ","ö","ü","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var morseToAsciiMap = {};
for(var i = 0; i < morseStrings.length; i++) {
  morseToAsciiMap[morseStrings[i]] = asciiStrings[i];
}
function backward(text) {
  var morseArr = text.replace(/\s{4}/g, " <<SPACE>> ").split(/\s+/g);
  var asciiArr = [];
  for(var i = 0; i < morseArr.length; i++) {
    if(morseArr[i] === "<<SPACE>>") asciiArr.push(" ");
    else asciiArr.push( morseToAsciiMap[morseArr[i]] );
  }
  return asciiArr.join("");
}


function MorseNode(ac, rate) {
    // ac is an audio context.
    this._oscillator = ac.createOscillator();
    this._gain = ac.createGain();
 
    this._gain.gain.value = 0;
    this._oscillator.frequency.value = 750;
 
    this._oscillator.connect(this._gain);
 
    if(rate == undefined)
        rate = 20;
    this._dot = 1.2 / rate; // formula from Wikipedia.
 
    this._oscillator.start(0);
}
 
MorseNode.prototype.connect = function(target) {
    return this._gain.connect(target);
}
 
MorseNode.prototype.MORSE = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "V": "...-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--..",
 
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "0": "-----"
};
 
MorseNode.prototype.playChar = function(t, c) {
    for(var i = 0; i < c.length; i++) {
        switch(c[i]) {
        case '.':
            this._gain.gain.setValueAtTime(1.0, t);
            t += this._dot;
            this._gain.gain.setValueAtTime(0.0, t);
            break;
        case '-':
            this._gain.gain.setValueAtTime(1.0, t);
            t += 3 * this._dot;
            this._gain.gain.setValueAtTime(0.0, t);
            break;
        }
        t += this._dot;
    }
    return t;
}
 
MorseNode.prototype.playString = function(t, w) {
    w = w.toUpperCase();
    for(var i = 0; i < w.length; i++) {
        if(w[i] == ' ') {
            t += 3 * this._dot; // 3 dots from before, three here, and
                                // 1 from the ending letter before.
        }
        else if(this.MORSE[w[i]] != undefined) {
            t = this.playChar(t, this.MORSE[w[i]]);
            t += 2 * this._dot;
        }
    }
    return t;
}

var initializedMorse = false;
window.addEventListener("click", function() {
  if(initializedMorse) return;
  initializedMorse = true;
  var ac = new (window.AudioContext || window.webkitAudioContext)();

  var morse = new MorseNode(ac);
  morse.connect(ac.destination);

  var playButton = $('#random-sentence').clone();
  playButton.attr('id',"morse-play-button")
  playButton.text("▶ Play");
  playButton.css("color","#4AAB56");
  playButton.css("border-color","#4AAB56");
  $(".transdiv.ghetto").append(playButton);

  $('#morse-play-button').click(function() { morse.playString(ac.currentTime, $('#english-text').val() ); })

});

                                //]]>
            //} catch(e) {
            //    alert("There's an error in the custom script of this translator. Error:"+e);
            //}


			try {
			

			var jsonData = {"phrases1":"","phrases2":"","words1":"","words2":"","intraword1":"","intraword2":"","prefixes1":"","prefixes2":"","suffixes1":"","suffixes2":"","regex1":"\/[ ]\/g\n\n\/[.]\/g\n\/[\\-]\/g\n\/[,]\/g\n\/[:]\/g\n\/[?]\/g\n\/[']\/g\n\/[\/]\/g\n\/[(]\/g\n\/[)]\/g\n\/[\"]\/g\n\/[=]\/g\n\/[@]\/g\n\n\/0\/g\n\/1\/g\n\/2\/g\n\/3\/g\n\/4\/g\n\/5\/g\n\/6\/g\n\/7\/g\n\/8\/g\n\/9\/g\n\n\/\u00c4\/g\n\/\u00c1\/g\n\/\u00c5\/g\n\/Ch\/g\n\/\u00c9\/g\n\/\u00d1\/g\n\/\u00d6\/g\n\/\u00dc\/g\n\n\/A\/g\n\/B\/g\n\/C\/g\n\/D\/g\n\/E\/g\n\/F\/g\n\/G\/g\n\/H\/g\n\/I\/g\n\/J\/g\n\/K\/g\n\/L\/g\n\/M\/g\n\/N\/g\n\/O\/g\n\/P\/g\n\/Q\/g\n\/R\/g\n\/S\/g\n\/T\/g\n\/U\/g\n\/V\/g\n\/W\/g\n\/X\/g\n\/Y\/g\n\/Z\/g\n\n\/\u00e4\/g\n\/\u00e1\/g\n\/\u00e5\/g\n\/ch\/g\n\/\u00e9\/g\n\/\u00f1\/g\n\/\u00f6\/g\n\/\u00fc\/g\n\n\/a\/g\n\/b\/g\n\/c\/g\n\/d\/g\n\/e\/g\n\/f\/g\n\/g\/g\n\/h\/g\n\/i\/g\n\/j\/g\n\/k\/g\n\/l\/g\n\/m\/g\n\/n\/g\n\/o\/g\n\/p\/g\n\/q\/g\n\/r\/g\n\/s\/g\n\/t\/g\n\/u\/g\n\/v\/g\n\/w\/g\n\/x\/g\n\/y\/g\n\/z\/g","regex2":"\ud83d\ude00\ud83d\ude02\ud83d\udc18\ud83d\udc30\ud83d\udcb8\n\n \u00b7-\u00b7-\u00b7- \n -\u00b7\u00b7\u00b7\u00b7- \n --\u00b7\u00b7-- \n ---\u00b7\u00b7\u00b7 \n \u00b7\u00b7--\u00b7\u00b7 \n \u00b7----\u00b7 \n -\u00b7\u00b7-\u00b7 \n -\u00b7--\u00b7- \n -\u00b7--\u00b7- \n \u00b7-\u00b7\u00b7-\u00b7 \n -\u00b7\u00b7\u00b7- \n \u00b7--\u00b7-\u00b7 \n  \n ----- \n \u00b7---- \n \u00b7\u00b7--- \n \u00b7\u00b7\u00b7-- \n \u00b7\u00b7\u00b7\u00b7- \n \u00b7\u00b7\u00b7\u00b7\u00b7 \n -\u00b7\u00b7\u00b7\u00b7 \n --\u00b7\u00b7\u00b7 \n ---\u00b7\u00b7 \n ----\u00b7 \n  \n \u00b7-\u00b7- \n \u00b7--\u00b7- \n \u00b7--\u00b7- \n ---- \n \u00b7\u00b7-\u00b7\u00b7 \n --\u00b7-- \n ---\u00b7 \n \u00b7\u00b7-- \n  \n \u00b7- \n -\u00b7\u00b7\u00b7 \n -\u00b7-\u00b7 \n -\u00b7\u00b7 \n \u00b7 \n \u00b7\u00b7-\u00b7 \n --\u00b7 \n \u00b7\u00b7\u00b7\u00b7 \n \u00b7\u00b7 \n \u00b7--- \n -\u00b7- \n \u00b7-\u00b7\u00b7 \n -- \n -\u00b7 \n --- \n \u00b7--\u00b7 \n --\u00b7- \n \u00b7-\u00b7 \n \u00b7\u00b7\u00b7 \n - \n \u00b7\u00b7- \n \u00b7\u00b7\u00b7- \n \u00b7-- \n -\u00b7\u00b7- \n -\u00b7-- \n --\u00b7\u00b7 \n  \n \u00b7-\u00b7- \n \u00b7--\u00b7- \n \u00b7--\u00b7- \n ---- \n \u00b7\u00b7-\u00b7\u00b7 \n --\u00b7-- \n ---\u00b7 \n \u00b7\u00b7-- \n  \n \u00b7- \n -\u00b7\u00b7\u00b7 \n -\u00b7-\u00b7 \n -\u00b7\u00b7 \n \u00b7 \n \u00b7\u00b7-\u00b7 \n --\u00b7 \n \u00b7\u00b7\u00b7\u00b7 \n \u00b7\u00b7 \n \u00b7--- \n -\u00b7- \n \u00b7-\u00b7\u00b7 \n -- \n -\u00b7 \n --- \n \u00b7--\u00b7 \n --\u00b7- \n \u00b7-\u00b7 \n \u00b7\u00b7\u00b7 \n - \n \u00b7\u00b7- \n \u00b7\u00b7\u00b7- \n \u00b7-- \n -\u00b7\u00b7- \n -\u00b7-- \n --\u00b7\u00b7","rev_regex1":"","rev_regex2":"","ordering1":"","ordering2":""};
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