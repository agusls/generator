//try {
                var reverseIsDisabled = false;
                //<![CDATA[
                function forward(text) {
  text = text.replace(/ /g,"");
  var str = "";
  for(var i = 0; i < 300; i++) {
    if(Math.random() < 0.3 && text !== "") {
      if(Math.random() < 0.5) { str += "@"+randWord()+text.toLowerCase()+"\n"; }
      else { str += "@"+text.toLowerCase()+randWord()+"\n"; }
    } else {
      str += "@"+randWord()+randWord()+"\n";
    }
  }
  return str;
}
function randWord() {
  return word_list[Math.floor(word_list.length*Math.random())].toLowerCase();
}

var word_list = ["kithly","logolepsy","snaffle","toot","Burkina","Faso","button","caprimulgus","whiffle","nappies","glume","kinky","poplin","whimbrel","chiffchaff","hornswoggle","bamboozled","carriwitchet","pyewacket","collywobbles","Bombsy","Wombsy","Kawaiisu","cribbage","brumby","prinky","inglenook","leep","tiggytig","spooky","bug","tiddlywinks","bahookie","wiliwili","thimble","jiggly","bumberell","pachinko","hedgepiglet","jubu","meep","canoodle","hiney","tush","kitten","huffing","frumious","rhubarb","pumpkin","hurdy","gurdy","bumble","boondoggle","frappujacku","teetertotter","froglet","wispy","wordie","sammich","bungle","plonk","paddywack","pipsqueek","pooch","purloin","wallop","schnoogle","wobbly","snickerdoodle","snurf","gobbledygook","frumpous","squeeze","hug","doink","rigmarole","slurp","hullabaloo","higgildy","piggildy","arglebargle","burple","whoopsy","daisy","wubblybuns","chunkymunky","kawaii","kitty","tipsycakes","downsteepy","hubba","hubba","smoochies","befuddled","whiskers","smush","sockembopper","wrixle","foozle","fratchy","snifty","bloop","flarf","scuttle","wigglebop","mumbo","jumbo","cupcake","dunderhead","dobby","lewispoo","chomp","wiggly","snurfle","toesy","woesies","piggy","aglow","air","alive","altruis","amaze","amazed","amazing","amuse","amused","anew","angels","anticipate","anticipation","apples","applepie","apple","pie","autumn","awe","awesome","bask","baby","balloons","carrot","cutie","panda","llama","bird","yellow","popsicle","dust","peppermint","moshi","koshi","luv","hunnie","pop","hehe","tehe","heuhue","bunnie","mitten","mittens","fluff","lol","tickle","bunny","bubble","lolly","bunny","blossom","muffin","muffins","rainbow","rain","toodle","silly","whoops","pink","sparkle","pixel","tiny","tweetie","poodle","boop","angel","schnoopie","schnoop","shoop","blush","fancy","goofy","bean","jellybean","adorable","adore","goofie","chocolate","kind","cake","piglet","shortcake","doodles","doodle","cakes","duh","duhh","doodie","pants","deelish","dazzle","beach","beautiful","birds","birthday","blessed","bliss","blissful","blithe","bloom","blooming","blossom","blush","book","books","breathe","breeze","coolbreeze","bright","brownies","brunch","bubbles","bubblebath","bubbly","butterflies","butterfly","kisses","cake","calm","camaraderie","candlelight","casual","celebrate","celebration","cheer","cheerful","child","childhood","chocolate","clean","colors","comfort","compliments","cookies","milk","cool","cooperate","cooperation","comedy","comic","companion","companionship","compassion","congratulations","content","cozy","cuddle","curlup","cute","daisy","daisies","dad","dance","dawn","day","daylight","dear","delight","delightful","dew","dimples","dreams","drizzle","ecstasy","eat","elated","elation","empathy","energy","enjoy","enthusiastic","euphoric","excellence","exhale","exuberant","fall","family","father","favor","fire","flowers","fly","fortunate","friend","friends","friendship","freckles","free","fresh","full","fun","funny","generosity","give","glad","glee","glitter","glow","glowing","good","garden","gifts","giggles","glee","grace","gracious","grass","gratitude","grin","grow","hallelujah","hands","happiness","harmony","healthy","heart","heaven","hobby","holiday","holidays","home","honey","hope","hopeful","hubby","hug","humor","humorous","icecream","idea","inspiration","inspirational","inspired","jello","jellybeans","joke","jolly","joy","joyful","joyous","jubilant","kindness","kiss","kisses","kittens","lake","leaves","lego","laugh","laughter","life","light","lighthearted","lily","lilies","lollipops","love","lovestruck","love","lovely","lullaby","lunch","magical","marshmallows","melody","merry","mild","mom","mother","music","nap","nature","natural","nostalgic","ocean","open","optimistic","oreos","overjoyed","pancakes","patient","patience","passion","peace","peaceful","pets","pictures","pie","pillows","play","playful","playdough","pleasant","pleased","pleasure","poetry","positive","presents","puppy","puppies","quiet","rain","rainbow","rapture","red","relax","relief","renewal","respect","rest","restore","river","rose","roses","run","safe","sand","shine","silly","sing","singing","simple","sky","sleep","food","roses","rain","smile","smiles","smiling","smitten","smooch","smoochies","snowangels","snowflakes","snowflake","snowman","snuggles","snuggle","soft","song","songs","sooth","soothing","sparkle","special","spiritual","splash","spontaneous","spring","stars","still","strawberries","stretch","success","summer","sun","sunlight","sunshine","sunrise","sunset","surprise","sweet","sweetheart","sweetdreams","swing","tasty","tea","cozy","tickle","tinytoes","thanks","thankyou","thrill","together","togetherness","touch","toys","travel","trees","treehouse","truth","twilight","upbeat","uplifting","useful","vacation","vivacious","walk","warm","warmth","warmweather","water","waterballoons","waterfall","waves","weekend","welcome","welcoming","whole","whoosh","woohoo","win","wish","wishes","wonder","wonderful","yellow","yay","yippee","yum","yummy","zzzzz","sleepy"];

                
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