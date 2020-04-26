var booksOfBible = [];

function replaced(bib, n){
    for(let i in bib){
        for(let j in n){
            if(bib[i].abbrev == n[j].abbrev){
                for(var l = 0; l < n[j].data.length; l++){
                    var cap = n[j].data[l][0];
                    var vs  = n[j].data[l][1];
                    //for(let m = vs[0]; m < vs[1]; m++) console.log(bib[i].chapters[cap-1][m]);
                    console.log(n[j].abbrev + " " + cap + ":" + vs[0] + "-" + vs[1]);
                }
            }
        }
    }
	return;
}

function issuesJSON(bib){
	/** @var {number} i Índice do livro pesquisado
	 *  @var {number} j Índice do capítulo pesquisado
	 *  @var {number} l Índice do versículo pesquisado
	 *  @var {number} d Contador (count)
	 *  @var {Array}  a Verso duplicado
	 *  @var {Array}  b Capítulo ao qual pertence o verso duplicado
	 *  @var {Object} c Object final
	 *  @param {Object} bib Object da tradução a ser pesquisada
	 *  @return {String} JSON.string do Object final
	 */
	var a = [];
	var b = [];
	var c = [];
	var d = 1;
	for(let i = 0; i < bib.length; i++){
		for(let j = 0; j < bib[i].chapters.length; j++){
			for(let l = 0; l < bib[i].chapters[j].length; l++){
				var txt1 = bib[i].chapters[j][l];
				var txt2 = bib[i].chapters[j][l + 1];
				if(txt1 == txt2){d++;if(a.length == 0){a.push(txt1);a.push(l+1);}}
				else{if(a.length > 0){ a.push(l+1); a.push(d+1);}}
            }
            d=0;
			if(a.length > 0){b.push({ref:(j+1)+":"+a[1] + "-" + a[2], vs:a[0]});a=[];}
		}
		if(b.length > 0){c.push({name:bib[i].name, data:b});b=[];}
	}
	var regex = [[/\{("name")/g, "\n\t{$1"],[/("data":\[)/g, "\n\t$1"],[/\]\},\n\t(\{"name")/g, "]\n\t},\n\t$1"],[/\[\{/g, "[\n\t\t{"],[/\},\{/g, "},\n\t\t{"],[/\}\]/g, "}\n\t\t]"]];
	var myjson = JSON.stringify(c);
	for(var key in regex)myjson = myjson.replace(regex[key][0], regex[key][1]);
	return myjson;
}
//replaced(ntlh, issuesJSON(ntlh));
//console.log(replaced(ntlh, issue));
console.log(issuesJSON(ntlh));