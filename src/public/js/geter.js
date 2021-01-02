var booksOfBible = [];

function counting(bib){
	var report = [];
	var metadata = {'totalbooks':['Bible', bib.length], 'book':['',''], 'ch':[0,0], 'vs':['','']};

	for(let i=0; i<bib.length; i++){
		report.push({});
		var id = bib[i].abbrev;
		var chMin = chMax = bib[i].chapters[0].length;
		var vsMax = vsMin = bib[i].chapters[0][0].length;
		var check = [[],[]], indexCheck=[], checkCount = 0;

		report[i][id] = {'name':bib[i].name, 'size':0, 'bksize':bib[i].chapters.length, 'chmax':[],'chmin':[], 'vsmax':[], 'vsmin':[], 'sizes':[]};

        for(let j = 0; j < bib[i].chapters.length; j++){
			let ch = bib[i].chapters[j].length;

			check[0] = [ch, `${id} ${j + 1}`];

			for(let n = j + 1; n < bib[i].chapters.length; n++){
				if(bib[i].chapters[n].length == ch){
					check[0][1] += `, ${id} ${n + 1}`;
					indexCheck.push(n);
				}
			}
			
			for(let l = 0;l < bib[i].chapters[j].length; l++){
				if (l > 0 && bib[i].chapters[j][l].length > vsMax){
					vsMax = bib[i].chapters[j][l].length;
					check[1][0] = [`${id}${j + 1}:${l + 1}`, vsMax];
				}
				if (l > 0 && bib[i].chapters[j][l].length <= vsMin){
					//console.log(`Min ${id}${j + 1}:${l+1}=${vsMin}`);
					vsMin = bib[i].chapters[j][l].length;
					check[1][1] = [`${id}${j + 1}:${l + 1}`, vsMin];
				}
				report[i][id]['size'] += bib[i].chapters[j][l].length;
				//if(id == 'jd') console.log(`${l} - ${report[i][id]['size'][1]}`);
			}
			
			
			if(!indexCheck.includes(j)){
				report[i][id]['sizes'].push(check[0]);
				report[i][id]['vsmax'] = check[1][0];
				report[i][id]['vsmin'] = check[1][1];

				if (check[0][0] >= chMax){
					chMax = ch;
					report[i][id]['chmax'] = [check[0][1],chMax];
				}
				if (check[0][0] <= chMin){
					chMin = ch;
					report[i][id]['chmin'] = [check[0][1], chMin];
				}
				
			}
			check[0] = [];
		}
    }
	
	

	console.log(report);
	//console.log(JSON.stringify(report));
}

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

function definedb(bib){
	var data = [];
	
	for (let i = 0; i < bib.length; i++)
		data.push([bib[i].abbrev, bib[i].chapters.length]);

	for (let i in data)
      for (let j = 1; j <= data[i][1]; j++)
        console.log(`${data[i][0]}_${j}`);

	console.log(data);
}
//replaced(ntlh, issuesJSON(ntlh));
//console.log(replaced(ntlh, issue));
//console.log(issuesJSON(ntlh));
//counting(aa);
definedb(nvt);
