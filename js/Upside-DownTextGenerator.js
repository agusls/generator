//try {
                var reverseIsDisabled = false;
                //<![CDATA[
                var doApplySentenceCase = false;

                                //]]>
            //} catch(e) {
            //    alert("There's an error in the custom script of this translator. Error:"+e);
            //}


			try {
			

			var jsonData = {"phrases1":"","phrases2":"","words1":"","words2":"","intraword1":"\u201e\n`\n1\n2\n3\n4\n5\n6\n7\n8\n9\n0\n-\n_\n=\nq\nw\ne\nr\nt\ny\nu\ni\no\np\n[\n]\na\ns\nd\nf\ng\nh\nj\nk\nl\n;\n'\nz\nx\nc\nv\nb\nn\nm\n,\n.\n\/\n~\n!\n@\n#\n$\n%\n^\n&\n*\n(\n)\n_\n+\nQ\nW\nE\nR\nT\nY\nU\nI\nO\nP\n{\n}\n|\nA\nS\nD\nF\nG\nH\nJ\nK\nL\n:\n;\n'\nZ\nX\nC\nV\nB\nN\nM\n<\n>\n?","intraword2":"\"\n,\n\u21c2\n\u1614\n\u0190\n\u3123\n\u03db\n9\n\u3125\n8\n6\n0\n-\n\u203e\n=\nb\n\u028d\n\u01dd\n\u0279\n\u0287\n\u028e\nn\n\u1d09\no\nd\n]\n[\n\u0250\ns\np\n\u025f\n\u0253\n\u0265\n\u027e\n\u029e\nl\n;\n,\nz\nx\n\u0254\n\u028c\nq\nu\n\u026f\n'\n\u02d9\n\/\n~\n\u00a1\n@\n#\n$\n%\n^\n\u214b\n*\n)\n(\n\u203e\n+\n\u038c\nM\n\u018e\n\u1d1a\n\u2534\n\u2144\n\u2229\nI\nO\n\u0500\n}\n{\n|\n\u2200\nS\n\u15e1\n\u2132\n\u05e4\nH\n\u017f\n\u029e\n\u2142\n:\n\u061b\n,\nZ\nX\n\u0186\n\u039b\n\u1660\nN\nW\n>\n<\n\u00bf","prefixes1":"","prefixes2":"","suffixes1":"","suffixes2":"","regex1":"","regex2":"","rev_regex1":"","rev_regex2":"","ordering1":"","ordering2":""};
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