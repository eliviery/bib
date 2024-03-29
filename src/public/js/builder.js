
/** @returns {String} Uma String com a primeira letra em maiúsculo */
	function ucfirst(s){return s.charAt(0).toUpperCase() + s.slice(1);}

/** @const {number} column quantidade de capítulos por linha a serem exibidos no painel central 
 *  @var {Array} indexes lista de abreviações dos livros em sua ordem bíblica
	@var {OBject} version Bible object required at DOM script tags
	@var {OBject} meta <meta> element
	@var {OBject} link <link> element favicon
	@var {OBject} css <link> element css principal
	@constant {String} mainFrameId Id do frame principal
	@constant {number} column tamanho do frame de capítulos
*/

	var version = a21;

	const column = 20;
	const mainFrameId = "refferences";
	var indexes = [];
	var meta = document.createElement("meta");
	meta.setAttribute("charset", "UTF-8");
	document.getElementsByTagName("head")[0].appendChild(meta);
	var ico = document.createElement("link");
	ico.rel = "shortcut icon";
	ico.type = "icon";
	ico.href = "img/book.png";
	document.getElementsByTagName("head")[0].appendChild(ico);
	var css = document.createElement("link");
	css.rel = "stylesheet";
	css.type = "text/css";
	css.href = "style/desktop_main.css";
	document.getElementsByTagName("head")[0].appendChild(css);

	/** Cria a caixa de cabecalho */
	var frame = document.createElement("div");// <DIV> que contem o painel de navegação <NAV>
	frame.id = "box-left";
	document.getElementById(mainFrameId).appendChild(frame);

	frame.onload = inner_select( version );

/** 
 *  @param {Array}  list Array de Strings com os títulos das abas a serem inclusas no painel de abas
 *  @param {String} iD id oficial da caixa de menu
 *  @param {String} panel id do frame recebedor
 *  @param {Array}  into Array de Strings relacionadas a cada aba clicada
 *  @param {number} Largura da caixa de titulo da aba
 * */
	function aba( list, iD, panel, into, wdth ){
		var menu = document.createElement("nav"); // Painel de navegação <NAV> que contem a <UL> com as <LI>'s do VT e do NT
		menu.id = iD;
		menu.className = "menu-drop";
		var ul = document.createElement("ul"); // <UL> que contem as <LI>'s do VT e do NT
		ul.id = "nav-content";
		ul.className = "nav-content";
		for(var i = 0; i < list.length; i++){// Estruturando a <NAV> de navegação do VT e NT
			var li = document.createElement("li"); // <LI> que contem o <INPUT type='COMBOBOX'>, <LABEL>, <H2> E <ARTICLE> com cada metadado do Livro
			li.id = "ul-item-" + list[i];
			li.className = "ul-item";
			var input = document.createElement("input");// <INPUT type='RADIOBUTTOM'> para selecionar VT ou NT
			input.type = "radio";
			input.id = list[i];
			input.className = "li-radio";
			input.name = iD;
			input.checked = (i == 0)?true:false;
			li.appendChild(input); // Encabeça <INPUT type='RADIOBUTTOM'> na <LI>
			var label = document.createElement("label"); // <LABEL> para identificar VT ou NT
			label.htmlFor = list[i];
			label.className = "li-label";
			label.onclick = function(){
				var radiobuttoms = document.getElementsByClassName("li-radio");
				for(radio in radiobuttoms)
					if(radiobuttoms[radio].name == this.name)
						radiobuttoms[radio].checked = false;
				document.getElementById(this.htmlFor).checked = true;
			}
			label.innerHTML = list[i].toUpperCase();
			label.title = list[i].toUpperCase();
			label.style.width = (wdth / list.length) + "px"; // LARGURA DAS <LABEL>'s, FICA EM OBSERVAÇÃO
			li.appendChild(label); // Encabeça <LABEL> na <LI>
			var div = document.createElement("div"); // <DIV> para o conteúdo do menu referente a cada aba
			div.id = "li-div-"+list[i];
			div.className = "li-div";
			div.innerHTML = into[i];
			li.appendChild(div); // Encabeça <DIV> na <LI>
			ul.appendChild(li); // Encabeça <LI> na <UL>
		}
		menu.appendChild(ul); // Encabeça <UL> na <NAV>
		document.getElementById(panel).appendChild(menu); // Encabeça <NAV> no painel principal
	}

/** @param {OBject} obj JSON da Bíblia 
	@description Cria um menu com os livros do Velho e do Novo Testamento da Bíblia
*/
	function inner_select( obj ){
		aba(["vt","nt"], "menu-vt-nt", "box-left", ["",""], 196);
		for(var i = 0; i < obj.length; i++){
			var aliance = (i < 39) ? "vt" : "nt"; // O velho testamento tem 39 livros, se (i < 39) aliance será concatenada ao id
			var div = document.createElement("div"); //Uma <DIV> para cada livro da Bíblia inteira
			div.id = obj[i].abbrev;//a id da <UL> recebe a abreviação do livro
			div.className = "sublist";
			div.title = obj[i].name;//o titulo da <UL> recebe o nome do livro
			indexes[i] = obj[i].abbrev;
			var p = document.createElement("p");
			p.id = i;
			p.className = "sublist-item";
			p.innerHTML = obj[i].name;
			p.onclick = function(){ constructor(obj, this.id, this.innerHTML); };
			div.appendChild(p);
			document.getElementById("li-div-"+aliance).appendChild(div);
		}
	};

/** 
 *  @param {Object} vtMatrix Índices da matriz de referências
 *  @param {Object} vtObj Capítulo com versículos acessados
 *  @param {Boolean} bold Se forem vários versículos no mesmo capítulo, os números dos versículos ficarão em negrito
 *  @returns {String} Retorna uma String com os versículos pesquisados em ordem.
 *  @description Percorre o 2º parâmetro com os índices do 1º e concatena as strings encontradas para retornar.
 */
	function reftxt(vtMatrix, vtObj, bold){
		strTxt = "";
		for(var a = vtMatrix[0]; a <= vtMatrix[vtMatrix.length - 1]; a++){ //Percorre os indices do vetor contido em matrix[abb][chap]
				strTxt += (bold) ? "<b><i><sup>" + a + "</sup></i></b>"+ vtObj[a - 1] : "<i><sup>" + a + "</sup></i>"+ vtObj[a - 1];
				strTxt += (a > 1) ? " ":"";
			}
		return "<p>" + strTxt + "</p>";
	}

/** 
 *  @param {Object} ob JSON da Bíblia (recebido por parâmetro)
 *  @param {String} idParam indice numérica do livro
 *  @param {String} innerParam
 */
function constructor( ob, idParam, innerParam ){
	const len = ob[idParam].chapters.length; //Acesso direto no JSON da Bíblia
	var pshow = document.getElementById("box-center");
	pshow.innerHTML = "";
	var ch = document.createElement("div");
	var cb = document.createElement("div");
	ch.className = "center-header";
	cb.className = "center-body";
	ch.innerHTML = "<div id=\"row-0\" class=\"row\"><p id=\"book-chapter\">"+innerParam.toUpperCase()+"</p></div>";// TITLE CENTER-HEADER
	var row = (len - (len % column)) / column + 1; // Número de linhas da tabela de capítulos
	for(var l = 1; l <= row; l++){
		var lin = document.createElement("div"); // Criando primeira linha da tabela
		lin.id = "row-"+ l;
		lin.className = "row";
		for(var j = (l - 1) * column; j < (l * column) && (j + 1) <= len; j++){ // Preenchendo as row linhas da tabela
			var col = document.createElement("nav"); //col é cada botão a ser clicado, que conterá o identificador dos capítulos
			col.id = j;
			col.title = innerParam + " " + (j + 1);
			col.className = idParam;
			col.innerHTML = "<p>" + (j + 1) + "</p>";
			col.style.width = (len < column)?((960 / len) - 2) + "px":((960 / column) - 2) + "px";
			col.onclick = function(){
				cb.innerHTML = "";
				document.getElementsByClassName("main-title")[0].title = this.title; // A descrição do título principal recebe o Livro e o capítulo selecionado
				document.getElementById("book-chapter").innerHTML = this.title.toUpperCase();
	/** 
	 *  @var {String} ob[this.className].chapters[this.id] acessa o JSON [ idParam (que é a abreviatura do livro) ].chapters[ j (que é o capitulo) ]
	 *  @var {String} verseIndex indice do versículo para o acesso ao JSON da 'biblia' */
				for(var verseIndex in ob[this.className].chapters[this.id]){
				/** 
				 *  @var {OBject} matrix Matriz de referências
				 *  @var {OBject} reflist Matriz com dois vetores, a primeira contem as referências (Livro capítulo:versículo) abreviadas em texto, a segunda contem o conteúdo do JSON, apontado pela referencia
				 *  @var {OBject} vnum Element <div> vai receber o elemento <p> com o número do versiculo
				 *  @var {OBject} vtxt Element <div> vai receber o elemento <p> com o texto do versiculo
				 *  @var {OBject} nav Element <nav> vai conter os elementos <div> para exposição do versiculo
				*/
					var matrix = refferences[this.className].chapters[this.id][verseIndex];
					 //matrix pega um Object especifico em refferences assim que col é clicada. Este Object contêm todos as referências citadas num único versículo (que possua referências).
					var reflist = [[],[]];
					var vnum = document.createElement("div");
					vnum.className = this.title;
					var vtxt = document.createElement("div");
					var nav = document.createElement("nav");
					nav.id = parseInt(verseIndex) + 1;
					nav.className = (nav.id % 2 == 0) ? "dirty-smooke":"clean-smooke";
					/**  @var {String} abb Abreviação dos nomes dos livros para navegarem em matrix (que é a Matriz de Referências) */
					for (var abb in matrix){
						/** @var {number} chap Índice de varredura na Matriz de referências (matrix[abb])
						 *  @var {String} reftxt Referências abreviadas em texto para serem enviadas no parâmetro reflist */
						for (var chapindex in matrix[abb]){
							var chap = parseInt(chapindex);
							if(typeof matrix[abb][chap] == "object"){//Se houver versículos no capítulo referenciado por matrix então matrix[abb][chap] é um vetor
								var finalString = "";
							/** @var {String} listItemName Referência escrita para uma aba */
								var listItemName = "";
								if(matrix[abb][chap][0] == null){//Se matrix tiver um capítulo inteiro como referência e não especificar versículos
									matrix[abb][chap].push(1);//então adiciona dois indices, o primeiro contem o número do primeiro versículo...
									matrix[abb][chap].push(ob[indexes.indexOf(abb)].chapters[chap-1].length);//...e outro indice com o número do versículo final
									finalString = reftxt(matrix[abb][chap], ob[indexes.indexOf(abb)].chapters[chap - 1], false);
									listItemName = (matrix[abb][chap].length > 1) ?
									ucfirst(abb) + " " + chap + ":" + matrix[abb][chap][0] + "-" + matrix[abb][chap][(matrix[abb][chap].length - 1)]:
									ucfirst(abb) + " " + chap + ":" + matrix[abb][chap][0].toString();
								}else{
									if(typeof matrix[abb][chap][0] == "object"){//Se matrix tiver em um de seus índices, várias referências no mesmo capítulo
										var subvector = matrix[abb][chap];//então cria um novo vetor
										var subvectorStr = "";
										var sublistItemName= ucfirst(abb)+" ";
										for(var a = 0; a < subvector.length; a++){// e aqui, preenche este vetor.
											subvectorStr += reftxt(subvector[a], ob[indexes.indexOf(abb)].chapters[chap - 1], true) + "<br>";//chama a função de impressão dos versículos
											sublistItemName += (subvector[a].length > 1) ? chap+":"+subvector[a][0]+ "-"+subvector[a][subvector[a].length - 1]+"":chap+":"+subvector[a][0].toString() + "";
											sublistItemName += (a < subvector.length-1)?", ":"";
										}
										finalString = subvectorStr;
										listItemName = sublistItemName;
									}else{
										finalString = reftxt(matrix[abb][chap], ob[indexes.indexOf(abb)].chapters[chap - 1], false);
										listItemName = (matrix[abb][chap].length > 1) ?
										ucfirst(abb) + " " + chap + ":" + matrix[abb][chap][0] + "-" + matrix[abb][chap][(matrix[abb][chap].length - 1)]:
										ucfirst(abb) + " " + chap + ":" + matrix[abb][chap][0].toString();
									}
								}
								//popula a lista de versículos das referências (mesmo tamanho que reflist)
								reflist[1].push( finalString );//chama a função de impressão dos versículos
								reflist[0].push( listItemName );//popula a lista de referencias
								nav.title += listItemName + "; ";
							}
						}
					}
					nav.name = reflist; //MANTER COMO ESTÁ PARA O REPASSE DOS VERSÍCULOS
					nav.title = vnum.className + ":" + nav.id + " - Referências: " + nav.title;
					nav.style.cursor = (reflist[0] != "")?"pointer":"";
					nav.onclick = function(){
						document.getElementById("book-chapter").innerHTML = vnum.className.toUpperCase() + ":" +this.id;
						if(document.getElementById("box-right")){
							document.getElementById("box-right").innerHTML = "";
						}else{
							var view = document.createElement("div");
							view.id = "box-right";
							document.getElementById(mainFrameId).appendChild(view);
						}
						aba(this.name[0], "reference", "box-right", this.name[1], 650);//CONSTRUIR VISUALIZAÇÃO CSS
					};
					vnum.innerHTML = (reflist[0] == "")?"<p>"+nav.id+"</p>":"<b><p>"+nav.id+"<p></b>";
					vnum.style.backgroundColor = (reflist[0] == "")?"":"whitesmoke";
					vtxt.innerHTML = "<p>" + ob[this.className].chapters[this.id][verseIndex] + "</p>";
					nav.appendChild(vnum);
					nav.appendChild(vtxt);
					cb.appendChild(nav);
				}
			};
			lin.appendChild(col);
		}
		ch.appendChild(lin);
	};
	pshow.appendChild(ch);
	pshow.appendChild(cb);
};

//var searcher = /(((quarenta[\s]e[\s]dois)|(42))[\s]meses)|(((mil[\s]duzentos[\s]e[\s]sessenta)|(1260))[\s]dias)|(três[\s]anos[\s]e[\s]((meio)|(seis[\s]meses)))|(um[\s]tempo,[\s]dois[\s]tempos,[\s]e[\s]metade[\s]de[\s]um[\s]tempo)|(tempo,[\s]tempos([\,]|())[\s]e[\s]metade[\s]de[\s]um[\s]tempo)/g;