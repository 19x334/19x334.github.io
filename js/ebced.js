// IN THE NAME OF THE GOD THE GRACIOUS THE MERCIFUL

var sure1 = document.getElementById('sure');
var ayet1 = document.getElementById('ayet');
var sure2 = document.getElementById('sure2');
var ayet2 = document.getElementById('ayet2');
var sırano1 = document.getElementById('sırano1');
var sırano2 = document.getElementById('sırano2');
var ifade = document.getElementById('ifade');

// for reloading single page application page when user clicks back/forward button of browser
// ayrıca aşağıdaki fonksiyon, tüm kuranda ALLAH'ın isimlerinin renklendirilip sayılması ile harf sayımı linkleri arasında geçiş yapılırken
// uygulamanın hızını ve kararlılığını dramatik artırıyor
// bu olmadan single page application çok bekleme yapıyor aralarında büyük metin farkı olan geçişlerde
jQuery( document ).ready(function( $ )
{
	//Use this inside your document ready jQuery 
	$(window).on('popstate', function() {
		// exclude verse 74 click links here inşALLAH
		location.reload(true);
	});
});

function randombg(){
	var random = Math.floor(Math.random() * 10);
	var bigSize = ["url('/pic/space.png')",
				   "url('/pic/space2.png')",
				   "url('/pic/space3.png')",
				   "url('/pic/space4.png')",
				   "url('/pic/space5.png')",
				   "url('/pic/space6.png')",
				   "url('/pic/space7.png')",
				   "url('/pic/space8.jpg')",
				   "url('/pic/heavenandhell.png')",
				   "url('/pic/tree-and-star-prostrate.png')"];
	while(localStorage.getItem("lastBgIndex") == random) random = Math.floor(Math.random() * 10);
    document.getElementById("bg").style.backgroundImage = bigSize[random];
    document.getElementById("vücut").style.backgroundImage = bigSize[random];
	localStorage.setItem("lastBgIndex", random);
}

function divide19(numberDividableBy19){
	if(numberDividableBy19 == 0) return '0';
	else {
		var str = numberDividableBy19 + " = ";
		while(numberDividableBy19 % 19 == 0) {
			numberDividableBy19 /= 19;
			str += "19 x "
		}
		if(numberDividableBy19 == 1) str = str.slice(0,-3);
		else str += numberDividableBy19;
		if(str == "19 = 19") return "19";
		return str;
	}
}

var sadece_nolu = [0, 7, 293, 493, 669, 789, 954, 1160, 1235, 1362, 1471, 1594, 1705, 1748, 1800, 1899, 2027, 2138, 2248, 2346, 2481, 2593, 2671, 2789, 2853, 2930, 3157, 3250, 3338, 3407, 3467, 3501, 3531, 3604, 3658, 3703, 3786, 3968, 4056, 4131, 4216, 4270, 4323, 4412, 4471, 4508, 4543, 4581, 4610, 4628, 4673, 4733, 4782, 4844, 4899, 4977, 5073, 5102, 5124, 5148, 5161, 5175, 5186, 5197, 5215, 5227, 5239, 5269, 5321, 5373, 5417, 5445, 5473, 5493, 5549, 5589, 5620, 5670, 5710, 5756, 5798, 5827, 5846, 5882, 5907, 5929, 5946, 5965, 5991, 6021, 6041, 6056, 6077, 6088, 6096, 6104, 6123, 6128, 6136, 6144, 6155, 6166, 6174, 6177, 6186, 6191, 6195, 6202, 6205, 6211, 6214, 6219, 6223, 6228, 6234];
var tümü = [0, 7, 294, 495, 672, 793, 959, 1166, 1242, 1369, 1479, 1603, 1715, 1759, 1812, 1912, 2041, 2153, 2264, 2363, 2499, 2612, 2691, 2810, 2875, 2953, 3181, 3275, 3364, 3434, 3495, 3530, 3561, 3635, 3690, 3736, 3820, 4003, 4092, 4168, 4254, 4309, 4363, 4453, 4513, 4551, 4587, 4626, 4656, 4675, 4721, 4782, 4832, 4895, 4951, 5030, 5127, 5157, 5180, 5205, 5219, 5234, 5246, 5258, 5277, 5290, 5303, 5334, 5387, 5440, 5485, 5514, 5543, 5564, 5621, 5662, 5694, 5745, 5786, 5833, 5876, 5906, 5926, 5963, 5989, 6012, 6030, 6050, 6077, 6108, 6129, 6145, 6167, 6179, 6188, 6197, 6217, 6223, 6232, 6241, 6253, 6265, 6274, 6278, 6288, 6294, 6299, 6307, 6311, 6318, 6322, 6328, 6333, 6339, 6346];

$('.inputs2').on('input blur', from_sırano1and2_to_sureayet);

function from_sırano1and2_to_sureayet() {
	
	var divider1, divider2;

	if(document.getElementById('sn').checked) {

		if(parseInt(sırano1.value)) {
			divider1 = Math.max.apply(Math, sadece_nolu.filter(function(x){return x < sırano1.value}));
			sure1.value = sadece_nolu.indexOf(divider1) + 1;
			ayet1.value = sırano1.value - divider1;
		}
		else {
			sure1.value = ''; ayet1.value = ''; sure2.value = ''; ayet2.value = ''; sırano2.value = '';
		}

		if(parseInt(sırano2.value)) {
			divider2 = Math.max.apply(Math, sadece_nolu.filter(function(x){return x < sırano2.value}));
			sure2.value = sadece_nolu.indexOf(divider2) + 1;
			ayet2.value = sırano2.value - divider2;
			$('#sure2').trigger('input');
		}
		else {
			sure2.value = ''; ayet2.value = '';
			$('#sure2').trigger('input');
		}

	}
	else {
		if(parseInt(sırano1.value)) {
			divider1 = Math.max.apply(Math, tümü.filter(function(x){return x < sırano1.value}));
			sure1.value = tümü.indexOf(divider1) + 1;
			if(sure1.value == 1 || sure1.value == 9) {
				ayet1.value = sırano1.value - divider1;
			}
			else {
				ayet1.value = sırano1.value - divider1 - 1;
			}
		}
		else {
			sure1.value = ''; ayet1.value = ''; sure2.value = ''; ayet2.value = ''; sırano2.value = '';
		}

		if(parseInt(sırano2.value)) {
			divider2 = Math.max.apply(Math, tümü.filter(function(x){return x < sırano2.value}));
			sure2.value = tümü.indexOf(divider2) + 1;
			if(sure2.value == 1 || sure2.value == 9) {
				ayet2.value = sırano2.value - divider2;
			}
			else {
				ayet2.value = sırano2.value - divider2 - 1;
			}
			$('#sure2').trigger('input');
		}
		else {
			sure2.value = ''; ayet2.value = '';
			$('#sure2').trigger('input');
		}
	}
	
};

$('#sn').on('change', function(){
	isColorMuqatta = 0;
	loadXMLDoc();
});

function kalem(){
	windowWidth = window.innerWidth; // bunu kaldırma ilk ana sayfa yüklendiğinde boş textareanın arkaplanının doğru yüklenmesi/karışmaması için!

	if(768 <= windowWidth){
		if(ifade.value != '' && ifade.value != ekleme){
			ifade.style.background = "linear-gradient(transparent 45px, #999 1px), url(/pic/pen-50.png)";
			ifade.style.backgroundRepeat = "repeat, no-repeat";
			ifade.style.backgroundPosition = "0px 0px, center center";
		}
		else{
			ifade.style.background = "url(/pic/pen_full.png)";
			ifade.style.backgroundRepeat = "no-repeat";
		}
	}
	else{
		if(ifade.value != '' && ifade.value != ekleme){
			ifade.style.background = "linear-gradient(transparent 45px, #999 1px), url(/pic/pen-50.png), url(/pic/background.png)";
			ifade.style.backgroundRepeat = "repeat, no-repeat, repeat";
			ifade.style.backgroundPosition = "0px 0px, center center, center center";
		}
		else{
			ifade.style.background = "url(/pic/pen_full.png), url(/pic/background.png)";
			ifade.style.backgroundRepeat = "no-repeat, repeat";
		}
	}
	lineKeeper(); // for keeping row lines of textarea aligned at the end of window resizing event
}

$("#ifade").on("input", function(){
	if(!sure1.value) {
		window.addEventListener("resize", kalem);
		kalem(); // bunu kaldırma resize etmediğinde de çalışabilmesi için!
	}
})

function loading(){
	resizeFlag = 1;
	if(768 <= windowWidth){
		ifade.style.background = "linear-gradient(transparent 45px, #999 1px), url(/pic/loading.gif)";
		ifade.style.backgroundRepeat = "repeat, no-repeat";
		ifade.style.backgroundPosition = "0px 0px, center center";
		ifade.style.setProperty('background-size', '100% 46px, 57px auto', 'important');
	}
	else{
		ifade.style.background = "linear-gradient(transparent 45px, #999 1px), url(/pic/loading.gif), url(/pic/background.png)";
		ifade.style.backgroundRepeat = "repeat, no-repeat, repeat";
		ifade.style.backgroundPosition = "0px 0px, center center, center center";
		ifade.style.setProperty('background-size', '100% 46px, auto 46px, auto auto', 'important');
	}
}

function loaded()
{
	if(!sure1.value) kalem();
	else{
		if(768 <= windowWidth){
			ifade.style.background = "linear-gradient(transparent 45px, #999 1px), url(/pic/book-arabic-019-190p.png)";
			ifade.style.backgroundRepeat = "repeat, no-repeat";
			ifade.style.backgroundPosition = "0px 0px, center center";
		}
		else{
			ifade.style.background = "linear-gradient(transparent 45px, #999 1px), url(/pic/book-arabic-019-152p.png), url(/pic/background.png)";
			ifade.style.backgroundRepeat = "repeat, no-repeat, repeat";
			ifade.style.backgroundPosition = "0px 0px, center center, center center";
		}
	}
}

function opener(){
	ifadeFlag = 0;
	randombg();
	if(document.activeElement === sure1 || document.activeElement === sure2){
		if (document.activeElement.value) {
			document.documentElement.style.cursor = "wait";
			loading();
			document.getElementById('açıklama').innerHTML = "Verses are loading ... Please wait ...";
			ifade.placeholder = " Verses are loading\n... Please wait";
		}
		else{
			document.getElementById('açıklama').innerHTML = "Please select a sura or enter a sura number ...";
			ifade.placeholder = " Please select a sura or\n... enter a sura number";
		}
	}
	else if(document.activeElement === ayet1){
		if (ayet1.value) {
			document.documentElement.style.cursor = "wait";
			loading();
			document.getElementById('açıklama').innerHTML = "Verse is loading ... Please wait ...";
			ifade.placeholder = " Verse is loading\n... Please wait";
		}
		else{
			document.getElementById('açıklama').innerHTML = "Please enter a verse number or wait for loading of sura ...";
			ifade.placeholder = " Please enter a verse number or\n... wait for loading of sura";
		}
	}
	else if(document.activeElement === ayet2){
		if (ayet2.value) {
			document.documentElement.style.cursor = "wait";
			loading();
			document.getElementById('açıklama').innerHTML = "Verses are loading ... Please wait ...";
			ifade.placeholder = " Verses are loading\n... Please wait";
		}
		else{
			document.getElementById('açıklama').innerHTML = "Please enter a verse number ...";
			ifade.placeholder = " Please enter a verse number ...";
		}
	}
	renkleri_temizle();
	setTimeout(function(){loadXMLDoc()}, 500); // yeni neden: mesela 2. sureyi yazıp peşine hemen ayet için 1 ya da herhangi bir sayı yazabilmene aracın fırsat verebilmesi için aksi taktirdebaya bekliyorsun renklendirmenin ve satır sayımlarının bitmesini...
	// eski neden: buraya 0.5 saniyelik bir gecikme eklememin nedeni örneğin 15. sureyi açıp sonra ayet kutusuna yavaş değil ama çok hızlı bir şekilde 92 yazdığında satırların değerlerini sıfırlamadan eski değerin üzerine eklemesi ve yanlış satır sayımı yapması ve sonra 15. sureye dönsen de tüm satır sayımları yaklaşık 2 katına çıkmış oluyor ya da herhangi başka bir mukatta harfli sureye gitsen de... gecikme verilince bu sorun ortadan kalkıyor...
}

$("#sure").on("input", function(){ if(sure1.value == "") opener(); }); // for deleting ifade.value
// opener fonksiyonunun sure de çalışmasını istemiyorum çünkü mesela 2:1 ile 68:1 arasını rahatça açıp istediğim isimleri saydırabilmek istiyorum rahatça inşALLAH
$("#ayet").on("focus", opener); // bunu eklemezsen sure value da değişiklik yaptıktan sonra metin yüklenmiyor
$("#ayet").on("input", opener);
$("#sure2").on("input", opener);
$("#ayet2").on("input", opener);

// renkleri_temizle() 'yi loadXMLDoc() 'un içinde çağırma, çağırırsan linklerden yükleme yaparken yapılan renklendirmeler silinir 500ms'lik gecikme nedeniyle
function loadXMLDoc() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
			bölümaçıcı(this);
    	}
	}
	xmlhttp.open("GET", "quran-uthmani.xml", true);
	xmlhttp.send();
}

function bölümaçıcı(xml) {

	var firstverses, lastverses, birsure, ayetbir, ikisure, ayetiki, ikiayet, ayet1bir, ayet2iki, s, a, xmlDoc, txt, aralık;
	firstverses = [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	lastverses = [0, 7, 286, 200, 176, 120, 165, 206, 75, 127, 109, 123, 111, 43, 52, 99, 128, 111, 110, 98, 135, 112, 78, 118, 64, 77, 227, 93, 88, 69, 60, 34, 30, 73, 54, 45, 83, 182, 88, 75, 85, 54, 53, 89, 59, 37, 35, 38, 29, 18, 45, 60, 49, 62, 55, 78, 96, 29, 22, 24, 13, 14, 11, 11, 18, 12, 12, 30, 52, 52, 44, 28, 28, 20, 56, 40, 31, 50, 40, 46, 42, 29, 19, 36, 25, 22, 17, 19, 26, 30, 20, 15, 21, 11, 8, 8, 19, 5, 8, 8, 11, 11, 8, 3, 9, 5, 4, 7, 3, 6, 3, 5, 4, 5, 6];
	xmlDoc = xml.responseXML;
	txt = "";
	aralık = "";

	birsure = parseInt(sure1.value);
	ayetbir = ayet1.value;
	ikisure = parseInt(sure2.value);
	ayetiki = ayet2.value;
	
	ikiayet = parseInt(ayetiki) + 1;

	ayet1bir = parseInt(ayet1.value);
	ayet2iki = parseInt(ayet2.value);

	// from sure_ayet, to sıra_no başlangıcı

	if (document.getElementById('sn').checked) {
		if(birsure && ayetbir)
			sırano1.value = sadece_nolu[birsure-1] + ayet1bir;
		else
			sırano1.value = '';
		
		if(ikisure && ayetiki)
			sırano2.value = sadece_nolu[ikisure-1] + ayet2iki;
		else
			sırano2.value = '';
	}
	else {
		if (birsure && ayet1bir >= 0) {
			if (birsure==1 || birsure==9)
				sırano1.value = tümü[birsure-1] + ayet1bir;
			else
				sırano1.value = tümü[birsure-1] + ayet1bir + 1;
		}
		else
			sırano1.value = '';
		
		if (ikisure && ayet2iki >= 0) {
			if (ikisure==1 || ikisure==9)
				sırano2.value = tümü[ikisure-1] + ayet2iki;
			else
				sırano2.value = tümü[ikisure-1] + ayet2iki + 1;
		}
		else
			sırano2.value = '';
	}

	// from sure_ayet, to sıra_no sonu

	if (document.getElementById('sn').checked) {
		if (birsure) {
			if (ayetbir) {
				if (ikisure) {
					if (ikiayet) {
						if (ayetbir == 0) {
							if (ayetiki == 0) {
								var geçici = ikisure-1;
								txt = 'from verse 1 of sura '+birsure+' to last verse('+lastverses[geçici]+') of sura '+geçici;
							}
							else {
								txt = 'from verse 1 of sura '+birsure+' to verse '+ayetiki+' of sura '+ikisure;
							}
						}
						else if (ayetiki == 0) {
							var geçici1 = ikisure-1;
							txt = 'from verse '+ayetbir+' of sura '+birsure+' to last verse('+lastverses[geçici]+') of sura '+geçici1;
						}
						else {
							txt = 'from verse '+ayetbir+' of sura '+birsure+' to verse '+ayetiki+' of sura '+ikisure;
						}
						if (birsure==ikisure && ikiayet<=ayetbir) {}
						else {
							for (s=birsure; s<=ikisure; s++) {
								for (a=0; a<=lastverses[s]; a++) {
									if (s == birsure && a < ayetbir) { continue; }
									if (a == "0") { continue; }
									if (s == ikisure && a == ikiayet) { break; }
									aralık += xmlDoc.querySelector('sura[index=s'+s+']').querySelector('aya[index=a'+a+']').getAttribute('text') + "\n";
								}
							}
						}
					}
					else {
						var sura2 = parseInt(ikisure)-1;
						if (ikisure < birsure) { }
						else if (ikisure == birsure) {
							if (ayetbir == 0) {
								txt = 'from verse 1 of sura '+birsure+' to ...(specify the verse number) of sura '+ikisure;
							}
							else {
								txt = 'from verse '+ayetbir+' of sura '+birsure+' to ...(specify the verse number) of sura '+ikisure;
							}
						}
						else if (ikisure == birsure+1) {
							if (ayetbir == lastverses[birsure]) {
								txt = 'only verse '+ayetbir+' of sura '+birsure;
							}
							else {
								txt = 'from verse '+ayetbir+' of sura '+birsure+' to last verse('+lastverses[birsure]+') of sura '+birsure;
							}
						}
						else {
							if (ayetbir == 0) {
								txt = 'from verse 1 of sura '+birsure+' to last verse('+lastverses[sura2]+') of sura '+sura2;
							}
							else {
								txt = 'from verse '+ayetbir+' of sura '+birsure+' to last verse('+lastverses[sura2]+') of sura '+sura2;
							}
						}
						for (s=birsure; s<ikisure; s++) {
							for (a=0; a<=lastverses[s]; a++) {
								if (s == birsure && a < ayetbir) { continue; }
								if (a == "0") { continue; }
								aralık += xmlDoc.querySelector('sura[index=s'+s+']').querySelector('aya[index=a'+a+']').getAttribute('text') + "\n";
							}
						}
					}
				}
				else {
					if (ayetbir == 0) {
						txt = ''
					}
					else {
						txt = 'only verse '+ayetbir+' of sura '+birsure;
					}
					if (ayetbir == "0") {}
					else {
						aralık += xmlDoc.querySelector('sura[index=s'+birsure+']').querySelector('aya[index=a'+ayetbir+']').getAttribute('text') + "\n";
					}
				}
			}
			else {
				txt = 'from verse 1 to last verse('+lastverses[birsure]+') of sura '+birsure;
				for (a=0; a<=lastverses[birsure]; a++) {
					if (a == "0") { continue; }
					aralık += xmlDoc.querySelector('sura[index=s'+birsure+']').querySelector('aya[index=a'+a+']').getAttribute('text') + "\n";
				}
			}
		}
		else {
			txt = '';
		}
	}
	else {
		if (birsure) {
			if (ayetbir) {
				if (ikisure) {
					if (ikiayet) {
						txt = 'from verse '+ayetbir+' of sura '+birsure+' to verse '+ayetiki+' of sura '+ikisure;
						if (birsure==ikisure && ikiayet<=ayetbir) {}
						else {
							for (s=birsure; s<=ikisure; s++) {
								for (a=0; a<=lastverses[s]; a++) {
									if (s == birsure && a < ayetbir) { continue; }
									if (s == "1" && a == "0") { continue; }
									if (s == "9" && a == "0") { continue; }
									if (s == ikisure && a == ikiayet) { break; }
									aralık += xmlDoc.querySelector('sura[index=s'+s+']').querySelector('aya[index=a'+a+']').getAttribute('text') + "\n";
								}
							}
						}
					}
					else {
						var sura2 = parseInt(ikisure)-1;
						if (ikisure < birsure) { }
						else if (ikisure == birsure) { txt = 'from verse '+ayetbir+' of sura '+birsure+' to ...(specify the verse number) of sura '+ikisure; }
						else if (ikisure == birsure+1) {
							if (ayetbir == lastverses[birsure]) {
								txt = 'only verse '+ayetbir+' of sura '+birsure;
							}
							else {
								txt = 'from verse '+ayetbir+' of sura '+birsure+' to last verse('+lastverses[birsure]+') of sura '+birsure;
							}
						}
						else { txt = 'from verse '+ayetbir+' of sura '+birsure+' to last verse('+lastverses[sura2]+') of sura '+sura2; }
						for (s=birsure; s<ikisure; s++) {
							for (a=0; a<=lastverses[s]; a++) {
								if (s == birsure && a < ayetbir) { continue; }
								if (s == "1" && a == "0") { continue; }
								if (s == "9" && a == "0") { continue; }
								aralık += xmlDoc.querySelector('sura[index=s'+s+']').querySelector('aya[index=a'+a+']').getAttribute('text') + "\n";
							}
						}
					}
				}
				else {
					txt = 'only verse '+ayetbir+' of sura '+birsure;
					if (birsure == "1" && ayetbir == "0") {}
					else if (birsure == "9" && ayetbir == "0") {}
					else {
						aralık += xmlDoc.querySelector('sura[index=s'+birsure+']').querySelector('aya[index=a'+ayetbir+']').getAttribute('text') + "\n";
					}
				}
			}
			else {
				txt = 'from verse '+firstverses[birsure]+' to last verse('+lastverses[birsure]+') of sura '+birsure;
				for(a=0; a<=lastverses[birsure]; a++) {
					if (birsure == "1" && a == "0") { continue; }
					if (birsure == "9" && a == "0") { continue; }
					aralık += xmlDoc.querySelector('sura[index=s'+birsure+']').querySelector('aya[index=a'+a+']').getAttribute('text') + "\n";
				}
			}
		}
		else {
			txt = '';
		}
	}
	ifade.value = aralık;
	document.getElementById('açıklama').innerHTML = txt;
	resizeFlag = 0; // resize bug fix for true background in all window widths
	if(nameFlag == 1){
		document.documentElement.style.cursor = "unset";
		loaded();
	}
	$('#ifade').trigger('input');
	if(isColorMuqatta == 1)	colorMuqatta();
	else ifade.value += ekleme; // linkten yükleme yapıldıktan sonra gerekli boşluk miktarınca ekleme yapılması için bu atama burada yapılmalı getfromlink() 'in içinde değişiklikleri
	isColorMuqatta = 1; // bu atamanın bu konumda, bölümaçıcı(xml) fonksiyonunun en son satırında olması, linkten bölüm açıldıktan sonra açılan yeni surelerin renklendirilebilmesi ve linkten sure özel harflerle bir muqatta  suresi açıldıktan sonra colorMuqatta() fonksiyonunun tetiklenip özel harflerin üzerine ekleme yapmaması için önemli!
}

var isColorMuqatta = 1;

function bckgrndclrchanger(x) { document.getElementById(x).style.background = "#ffffff"; };
function bckgrndclrchangr(x) { document.getElementById(x).style.background = "#99ffff"; };

function getSum(total,num){return total + num};

function val(yazı,harf,değer){
	rgxp = new RegExp(değer,'gim');
	var text = yazı.replace(/[0-9]/igm, "");
	if (text.indexOf(harf) > -1) {
		sonuc = text.split(harf).join(değer).match(rgxp).map(Number).reduce(getSum)
	}
	else {
		sonuc = 0
	}
	return sonuc;
}

function ayetsay(str) {
	var ayetsayısı = str.match(/[:]/igm);
	if(ayetsayısı!==null && ayetsayısı.length!==0){
		var versecount = parseInt(ayetsayısı.length)
		return versecount
	}
}

function letters(counts) { /* sanırım bu fonksiyon düzeltilmeli number of letters'ın hatalı çalışmasına neden oluyor olabilir*/
	var sum = 0;
	for (ch in counts) {
		if(counts[ch] > 0) {
			if(ch == 'ﻹ' || ch == 'ﻷ' || ch == 'ﻵ' || ch == 'ﻻ') sum++;
			sum += counts[ch];
		}
	}
	return sum;
}
function words(string) {
	y = string.split(/\s+/).filter(
		function (string) {
			word = string.match(/[ء-يﻻﻹﻷﻵپچژڨڢڤیکگڭٱ]+/igm)
			return word && word[0].length > 0
		}
	)
	return y.length
}
function abjad (string) {
	ـٔ = val(string,'ـٔ','1');
	ء = val(string,'ء','1');
	ا = val(string,'ا','1');
	آ = val(string,'آ','1');
	ٱ = val(string,'ٱ','1');
	أ = val(string,'أ','1');
	إ = val(string,'إ','1');
	ب = val(string,'ب','2');
	پ = val(string,'پ','2');
	ج = val(string,'ج','3');
	چ = val(string,'چ','3');
	د = val(string,'د','4');
	ه = val(string,'ه','5');
	ة = val(string,'ة','5');
	و = val(string,'و','6');
	ؤ = val(string,'ؤ','6');
	ز = val(string,'ز','7');
	ژ = val(string,'ژ','7');
	ح = val(string,'ح','8');
	ط = val(string,'ط','9');
	ی = val(string,'ی','10');
	ي = val(string,'ي','10');
	ئ = val(string,'ئ','10');
	ى = val(string,'ى','10');
	ک = val(string,'ک','20');
	ك = val(string,'ك','20');
	گ = val(string,'گ','20');
	ڭ = val(string,'ڭ','20');
	ل = val(string,'ل','30');
	م = val(string,'م','40');
	ن = val(string,'ن','50');
	س = val(string,'س','60');
	ع = val(string,'ع','70');
	ف = val(string,'ف','80');
	ڢ = val(string,'ڢ','80');
	ڤ = val(string,'ڤ','80');
	ص = val(string,'ص','90');
	ق = val(string,'ق','100');
	ڨ = val(string,'ڨ','100');
	ر = val(string,'ر','200');
	ش = val(string,'ش','300');
	ت = val(string,'ت','400');
	ث = val(string,'ث','500');
	خ = val(string,'خ','600');
	ذ = val(string,'ذ','700');
	ض = val(string,'ض','800');
	ظ = val(string,'ظ','900');
	غ = val(string,'غ','1000');
	ﻻ = val(string,'ﻻ','31');
	ﻹ = val(string,'ﻹ','31');
	ﻷ = val(string,'ﻷ','31');
	ﻵ = val(string,'ﻵ','31');
	return ـٔ+ء+ا+آ+ٱ+أ+إ+ب+پ+ج+چ+د+ه+ة+و+ؤ+ز+ژ+ح+ط+ی+ي+ئ+ى+ک+ك+گ+ڭ+ل+م+ن+س+ع+ف+ڢ+ڤ+ص+ق+ڨ+ر+ش+ت+ث+خ+ذ+ض+ظ+غ+ﻻ+ﻹ+ﻷ+ﻵ
}

$(document).keypress( function otomatikyazıcı () {

	var yazı = String.fromCharCode(event.keyCode)
	if (sırano2 !== document.activeElement && sırano1 !== document.activeElement && sure2 !== document.activeElement && ayet2 !== document.activeElement && sure1 !== document.activeElement && ayet1 !== document.activeElement && ifade !== document.activeElement) {
		if (yazı.match(/[\d]/gim)) {
			ifade.value = '';
			$('#ifade').trigger('input');
			sure1.focus();
		}
		else { // ifadeye yazarken noları sil, paylaşım linkinin düzgün üretilebilmesi için
			ifade.focus();
			sure1.value = '';
			ayet1.value = '';
			sure2.value = '';
			ayet2.value = '';
			sırano1.value = '';
			sırano2.value = '';
			document.getElementById('açıklama').innerHTML = '';
		}
	}
});

var cursorPosition;
var ifadeTopScroll;

$('#ifade').on('keypress', function noları_sil(event)
{
	ifadeTopScroll = ifade.scrollTop; // for getting back to first typed position after char \n

	cursorPosition = $('#ifade').caret();

	sure1.value = '';
	ayet1.value = '';
	sure2.value = '';
	ayet2.value = '';
	sırano1.value = '';
	sırano2.value = '';
	document.getElementById('açıklama').innerHTML = '';

	var idSelector = function() { return this.id; };
	var selections = $("input[class=seçenekler]:checked").map(idSelector).get();

	if(selections.length > 0) renkleri_temizle();

	if(event.keyCode == 13) // if char is '\n'
	{
		cursorPosition++; // do not wait in the same position
		ifade.scrollTop = ifadeTopScroll; // for getting back to first typed position after char \n typed
	}
	
	setTimeout(function() {
		$('#ifade').caret(cursorPosition);
	}, 0); // settimeout 0 eklemezsen çalışmıyor
})

$('#sn').on('change', nosuzayetlerisil) // sure, ayet ve sıranolar boş olsa bile
$('#ifade').on('input', yazarkennosuzayetlerisil) // numarasız ayet yazımına izin verme

function nosuzayetlerisil() {
	var str = ifade.value;
	if (document.getElementById('sn').checked) {
		str = str.replace(/^.*(:0).*$\n/gm, ''); // 0 nolu ayetleri sil
		// delete verses which doesn't begin with numbers
		ifade.value = str.replace(/^(?![1-9]).*$\n/gm, '')
	}
}
function yazarkennosuzayetlerisil() {
	var str = ifade.value;
	if (document.getElementById('sn').checked) {
		str = str.replace(/^.*(:0).*$/gm, ''); // 0 nolu ayetleri sil
		// delete verses which doesn't begin with numbers
		ifade.value = str.replace(/^(?![1-9]).*$/gm, '')
	}
}

function copyToClipboard(text) {
	if (window.clipboardData && window.clipboardData.setData) {
		return clipboardData.setData("Text", text);
	}
	else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
		textarea = document.createElement("textarea");
  		textarea.textContent = text;
  		textarea.style.position = "fixed";
  		document.body.appendChild(textarea); textarea.select();
  		try {return document.execCommand("copy")}
  		catch (ex) {console.warn("copy to clipboard failed.", ex); return false;}
		finally {document.body.removeChild(textarea)}
	}
}

$('#ifade').on('input', function (event) {
	ifadeTopScroll = ifade.scrollTop; // for getting back to first typed position after swal alert
	var pattern = /[^\u0600-\u06FF\n ﻻﻹﻷﻵ0-9:]/gimu;
	if(pattern.test(this.value) == true) Swal.fire({
		title: "only arabic letters allowed!",
		html: "you can't write nor count nor calculate gematrical values of non-arabic letters!",
		imageUrl: "pic/pen_full.png",
		imageWidth: 'auto',
		imageHeight: 190,
		imageAlt: 'only arabic letters allowed!'
	});
    this.value = this.value.replace(/[^\u0600-\u06FF\n ﻻﻹﻷﻵ0-9:]/gimu, '');
	ifade.scrollTop = ifadeTopScroll; // for getting back to first typed position after swal alert
	if(this.value == "" || this.value == ekleme) loaded();
});

$(function() {
	$("#ifade").trigger('input');
	$("#ifade").trigger('keyup');
});

var counts = {ـٔ:0,ء:0,ا:0,آ:0,ٱ:0,أ:0,إ:0,ب:0,پ:0,ج:0,چ:0,د:0,ه:0,ة:0,و:0,ؤ:0,ز:0,ژ:0,ح:0,ط:0,ی:0,ي:0,ئ:0,ى:0,ک:0,ك:0,گ:0,ڭ:0,ل:0,م:0,ن:0,س:0,ع:0,ف:0,ڢ:0,ڤ:0,ص:0,ق:0,ڨ:0,ر:0,ش:0,ت:0,ث:0,خ:0,ذ:0,ض:0,ظ:0,غ:0,ﻻ:0,ﻹ:0,ﻷ:0,ﻵ:0};
/* don't count name الله because you already counting name لله */
/* don't count name الرحمن because you already counting name رحمن */
/* don't count name ٱلرَّحْمَـٰن because you already counting name رَّحْمَـٰن */
/* don't count name الرحيم because you already counting name رحيم */
/* don't count name ٱلرَّحِيم because you already counting name رَّحِيم */
/* don't count name اسمه because you already counting name اسم */
/* don't count name ٱسْمُه because you already counting name ٱسْم */

var countsOfNames = {لله:0,ٱللَّه:0,لِلَّه:0,لِّلَّه:0,آللَّه:0,اللهم:0,ٱللَّهُم:0,اللهو:0,ٱللَّهْو:0,اللهب:0,ٱللَّهَب:0,رحمن:0,رَّحْمَـٰن:0,رحيم:0,رَّحِيم:0,رَحِيم:0,اسم:0,ٱسْم:0,اسمه:0,ٱسْمُه:0,ٱسْمَع:0};
var isimler = ['لله','ٱللَّه','لِلَّه','لِّلَّه','آللَّه','اللهم','ٱللَّهُم','اللهو','ٱللَّهْو','اللهب','ٱللَّهَب','رحمن','رَّحْمَـٰن','رحيم','رَّحِيم','رَحِيم','اسم','ٱسْم','اسمه','ٱسْمُه','ٱسْمَع'];

$('.seçenekler').on('change', sayım);

var say_toplam;
var sayı = 0;
var metin;

function sayım()
{
	var countOfNameALLAH, TotalCountOfNameALLAH, countOfNameRAHMAN, TotalCountOfNameRAHMAN;

	say_toplam = $("input[class=seçenekler]:checked").map(function()
	{
		if (this.id === 'د' || this.id === 'ح' || this.id === 'ط' || this.id === 'م' || this.id === 'ن' || this.id === 'س' || this.id === 'ع' || this.id === 'ص' || this.id === 'ر' || this.id === 'ش' || this.id === 'ت' || this.id === 'ث' || this.id === 'خ' || this.id === 'ذ' || this.id === 'ض' || this.id === 'ظ' || this.id === 'غ') {
			return counts[this.id];
		}
		else if (this.id === 'ب') {
			return counts['ب'] + counts['پ'];
		}
		else if (this.id === 'ج') {
			return counts['ج'] + counts['چ'];
		}
		else if (this.id === 'ه') {
			return counts['ه'] + counts['ة'];
		}
		else if (this.id === 'و') {
			return counts['و'] + counts['ؤ'];
		}
		else if (this.id === 'ز') {
			return counts['ز'] + counts['ژ'];
		}
		else if (this.id === 'ق') {
			return counts['ق'] + counts['ڨ'];
		}
		else if (this.id === 'ف') {
			return counts['ف'] + counts['ڢ'] + counts['ڤ'];
		}
		else if (this.id === 'ي') {
			return counts['ي'] + counts['ی'] + counts['ئ'] + counts['ى'];
		}
		else if (this.id === 'ك') {
			return counts['ك'] + counts['ک'] + counts['گ'] + counts['ڭ'];
		}
		else if (this.id === 'ل') {
			return counts['ل'] + counts['ﻻ'] + counts['ﻹ'] + counts['ﻷ'] + counts['ﻵ'];
		}
		else if (this.id === 'ا') {
			return counts['ا'] + counts['ﻻ'] + counts['ء'] + counts['إ'] + counts['ﻹ'] + counts['ﻷ'] + counts['ﻵ'] + counts['آ'] + counts['ٱ'] + counts['أ'] + counts['ـٔ'];
		}
		else if (this.id === 'الله') {
			countOfNameALLAH = countsOfNames['لله'] + countsOfNames['ٱللَّه'] + countsOfNames['لِلَّه'] + countsOfNames['لِّلَّه'] + countsOfNames['آللَّه'] - countsOfNames['اللهم'] - countsOfNames['ٱللَّهُم'] - countsOfNames['اللهو'] - countsOfNames['ٱللَّهْو'] - countsOfNames['اللهب'] - countsOfNames['ٱللَّهَب'];
			TotalCountOfNameALLAH = countOfNameALLAH + countsOfNameALLAH[sure1.value-1];

			if(sure1.value && !ayet1.value) return TotalCountOfNameALLAH;
			else return countOfNameALLAH;
		}
		else if(this.id == 'الرحمن') {
			countOfNameRAHMAN = countsOfNames['رحمن'] + countsOfNames['رَّحْمَـٰن'];
			TotalCountOfNameRAHMAN = countOfNameRAHMAN + countsOfNameRAHMAN[sure1.value-1];

			if(sure1.value && !ayet1.value) return TotalCountOfNameRAHMAN;
			else return countOfNameRAHMAN;
		}
		else if(this.id == 'الرحيم') {
			if(sure1.value && !ayet1.value) return countsOfNames['رحيم'] + countsOfNames['رَّحِيم'] + countsOfNames['رَحِيم'] + countsOfNameRAHİM[sure1.value-1];
			else return countsOfNames['رحيم'] + countsOfNames['رَّحِيم'] + countsOfNames['رَحِيم'];
		}
		else if(this.id == 'اسم') {
			if(sure1.value && !ayet1.value) return countsOfNames['اسم'] + countsOfNames['ٱسْم'] - countsOfNames['اسمه'] - countsOfNames['ٱسْمُه']  - countsOfNames['ٱسْمَع'] + countsOfNameİSİM[sure1.value-1];
			else return countsOfNames['اسم'] + countsOfNames['ٱسْم'] - countsOfNames['اسمه'] - countsOfNames['ٱسْمُه']  - countsOfNames['ٱسْمَع'];
		}
	}).get().reduce((pv, cv) => pv+cv, 0);

	if (say_toplam !== 0 || document.getElementById('اسم').checked) {
		if (say_toplam % 19 === 0) {
			sayı = divide19(say_toplam);
			$("#say").html("<span style=\"color: yellow;\">" + sayı + "</span>");
		}
		else {
			sayı = say_toplam;
			document.getElementById('say').innerHTML = say_toplam;
		}
		document.querySelector("p[id=str]").style.display = "inline";
		document.querySelector("p[id=say]").style.display = "inline";
		document.querySelector("p[id=abjad]").style.setProperty('margin-top', '20px');
	}
	else {
		sayı = ''
		document.getElementById('say').innerHTML = sayı;
		document.querySelector("p[id=say]").style.display = "none";
		document.querySelector("p[id=str]").style.display = "none";
		document.querySelector("p[id=abjad]").style.setProperty('margin-top', '6px');
	}
}

var switchFlag = 1;

$("#count-switch").change(function(){
	selectorFlag = 0;
	if(switchFlag == 1) {
		if(document.getElementById('count-switch').checked == true){
			var idSelector = function() { return this.id; };
			var selections = $("input[class=seçenekler]:checked").map(idSelector).get();
	
			for(harf in selections){
				if(selections[harf] == 'ا') {
					clrltrs[0].splice(0,clrltrs[0].length);
					clrltrs[34].splice(0,clrltrs[34].length);
					clrltrs[36].splice(0,clrltrs[36].length);
				}
				else if(selections[harf] == 'ب') clrltrs[1].splice(0,2);
				else if(selections[harf] == 'ج') clrltrs[2].splice(0,2);
				else if(selections[harf] == 'د') clrltrs[3].pop();
				else if(selections[harf] == 'ه') clrltrs[4].splice(0,2);
				else if(selections[harf] == 'و') clrltrs[5].splice(0,2);
				else if(selections[harf] == 'ز') clrltrs[6].splice(0,2);
				else if(selections[harf] == 'ح') clrltrs[7].pop();
				else if(selections[harf] == 'ط') clrltrs[8].pop();
				else if(selections[harf] == 'ي') clrltrs[9].splice(0,4);
				else if(selections[harf] == 'ك') clrltrs[10].splice(0,4);
				else if(selections[harf] == 'ل') {
					clrltrs[11].splice(0,clrltrs[11].length);
					clrltrs[34].splice(0,clrltrs[34].length);
					clrltrs[35].splice(0,clrltrs[35].length);
				}
				else if(selections[harf] == 'م') clrltrs[12].pop();
				else if(selections[harf] == 'ن') clrltrs[13].pop();
				else if(selections[harf] == 'س') clrltrs[14].pop();
				else if(selections[harf] == 'ع') clrltrs[15].pop();
				else if(selections[harf] == 'ف') clrltrs[16].splice(0,3);
				else if(selections[harf] == 'ص') clrltrs[17].pop();
				else if(selections[harf] == 'ق') clrltrs[18].splice(0,2);
				else if(selections[harf] == 'ر') clrltrs[19].pop();
				else if(selections[harf] == 'ش') clrltrs[20].pop();
				else if(selections[harf] == 'ت') clrltrs[21].pop();
				else if(selections[harf] == 'ث') clrltrs[22].pop();
				else if(selections[harf] == 'خ') clrltrs[23].pop();
				else if(selections[harf] == 'ذ') clrltrs[24].pop();
				else if(selections[harf] == 'ض') clrltrs[25].pop();
				else if(selections[harf] == 'ظ') clrltrs[26].pop();
				else if(selections[harf] == 'غ') clrltrs[27].pop();
				document.getElementById(selections[harf]).checked = false;	$("#"+selections[harf]).trigger('change');	colorButton(selections[harf]);
			}
		}
		else {
			var idSelector = function() { return this.id; };
			var selections = $("input[class=seçenekler]:checked").map(idSelector).get();
	
			for(harf in selections){
				if(selections[harf] == 'الله') {
					clrltrs[28].splice(0,6);
					clrltrs[29].splice(0,6);
				}
				else if(selections[harf] == 'الرحمن') clrltrs[30].splice(0,4);
				else if(selections[harf] == 'الرحيم') clrltrs[31].splice(0,5);
				else if(selections[harf] == 'اسم') {
					clrltrs[32].splice(0,8);
					clrltrs[33].splice(0,4);
				}
				document.getElementById(selections[harf]).checked = false;	$("#"+selections[harf]).trigger('change');	colorButton(selections[harf]);
			}
		}
		rengarenk();
	}
	selectorFlag = 1;
});

var selectorFlag = 1;

$(".seçenekler").change(countSelector);

function countSelector(){
	switchFlag = 0;
	if(selectorFlag == 1) {
		if(document.getElementById('اسم').checked || document.getElementById('الله').checked || document.getElementById('الرحمن').checked || document.getElementById('الرحيم').checked)
			document.getElementById('count-switch').checked = true;
		else
			document.getElementById('count-switch').checked = false;
	
		$('#count-switch').trigger('change');
	}
	switchFlag = 1;
}

$('.seçenekler').on('change', seçilen_harfler)

var seçilmişler;
var sclnhrf;
var seçilenİsimler;

function seçilen_harfler()
{
	var seçiliİsimSayısı;

	if($("input[class=seçenekler]:checked").length)
	{
		seçiliİsimSayısı = $("input[class=seçenekler]:checked").map(function() {
			if (this.id === 'الله') return 1;
			else if(this.id == 'الرحمن') return 1;
			else if(this.id == 'الرحيم') return 1;
			else if(this.id == 'اسم') return 1;
		}).get().reduce((pv, cv) => pv+cv, 0);

		seçilmişler = $("input[class=seçenekler]:checked").map(function() {return this.id});
		sclnhrf = seçilmişler.get().join('+'); // bu değişken her durumda + ile toplanmış şekilde linkler için ve isimlerin ayrı ayrı surelerde sayılmasında kullanılan linkler için lazım

		if(sclnhrf == "ه+ي+ك+ع+ص") sclnhrf = "ك+ه+ي+ع+ص";
		else if(sclnhrf == "ه+ط") sclnhrf = "ط+ه";
		else if(sclnhrf == "ط+م+س") sclnhrf = "ط+س+م";
		else if(sclnhrf == "ح+م+س+ع+ق") sclnhrf = "ح+م+ع+س+ق";

		seçilenİsimler = seçilmişler.get().join(' and ');

		if(seçiliİsimSayısı > 1)  metin = 'count of names ' + seçilenİsimler + ' until to end of sura ' + sure1.value + ' is: ';
		else if(sure1.value && !ayet1.value && (sclnhrf == 'الله' || sclnhrf == 'الرحمن' || sclnhrf == 'الرحيم' || sclnhrf == 'اسم')) metin = 'count of name ' + sclnhrf + ' until to end of sura ' + sure1.value + ' is: ';
		else if(sclnhrf == 'الله' || sclnhrf == 'الرحمن' || sclnhrf == 'الرحيم' || sclnhrf == 'اسم') metin = 'count of name ' + sclnhrf + ' is: ';
		else metin = sclnhrf + ' count: ';

		if (say_toplam !== 0 || document.getElementById('اسم').checked) {
			if (say_toplam % 19 === 0) {
				$("#str").html("<span style=\"color: yellow;\">" + metin + "</span>");
			}
			else {
				document.getElementById('str').innerHTML = metin;
			}
		}
		else {
			seçilmişler = '';
			metin = '';
			document.getElementById('str').innerHTML = metin;
		}
	}
	else {
		metin = '';
		document.getElementById('str').innerHTML = metin;
	}
}

var harf_sayisi;
var ayet_sayisi;
var mesaj;
var ebced;
var kelime;
var inputValue;

$("#ifade").on('input', function()
{
	inputValue = $(this).val();

	if(abjad(inputValue) > 0)
	{
		function name3R (n1, n2, n3) {
			if (names == n1 || names == n2 || names == n3) {
				sonuc = countsOfNames[n1] + countsOfNames[n2] + countsOfNames[n3];
				if (sonuc == 0 && !(sure1.value && !ayet1.value)) {
					document.querySelector("p[id='الرحيم']").innerHTML = "";
					document.querySelector("p[id='الرحيم']").style.display = "none";
					document.querySelector("p[id='الرحيم']").parentNode.style.flexGrow = "0";
				}
				else {
					document.querySelector("p[id='الرحيم']").style.display = "block";
					document.querySelector("p[id='الرحيم']").parentNode.style.flexGrow = "1";
					if (sonuc % 19 === 0 && sonuc != 0) {
						harf = divide19(sonuc);
						if(sure1.value && !ayet1.value) $("p[id='الرحيم']").html("<span style=\"color: blue;\">" + 'count of name الرحيم in sura ' + sure1.value + ' is: ' + harf + "</span>");
						else $("p[id='الرحيم']").html("<span style=\"color: blue;\">" + 'count of name الرحيم is: ' + harf + "</span>");
					}
					else {
						harf = sonuc;
						if(sure1.value && !ayet1.value) $("p[id='الرحيم']").html('count of name الرحيم in sura ' + sure1.value + ' is: ' + sonuc);
						else $("p[id='الرحيم']").html('count of name الرحيم is: ' + sonuc);
					}
				}
			}
		}

		function name2 (n1, n2) {
			if (names == n1 || names == n2) {
				sonuc = countsOfNames[n1] + countsOfNames[n2];
				if (sonuc == 0 && !(sure1.value && !ayet1.value)) {
					document.querySelector("p[id='الرحمن']").innerHTML = "";
					document.querySelector("p[id='الرحمن']").style.display = "none";
					document.querySelector("p[id='الرحمن']").parentNode.style.flexGrow = "0";
				}
				else {
					document.querySelector("p[id='الرحمن']").style.display = "block";
					document.querySelector("p[id='الرحمن']").parentNode.style.flexGrow = "1";
					if (sonuc % 19 === 0 && sonuc != 0) {
						harf = divide19(sonuc);
						if(sure1.value && !ayet1.value) $("p[id='الرحمن']").html("<span style=\"color: blue;\">" + 'count of name الرحمن in sura ' + sure1.value + ' is: ' + harf + "</span>");
						else $("p[id='الرحمن']").html("<span style=\"color: blue;\">" + 'count of name الرحمن is: ' + harf + "</span>");
					}
					else {
						harf = sonuc;
						if(sure1.value && !ayet1.value) $("p[id='الرحمن']").html('count of name الرحمن in sura ' + sure1.value + ' is: ' + sonuc);
						else $("p[id='الرحمن']").html('count of name الرحمن is: ' + sonuc);
					}
				}
			}
		}

		function name5İ (n1, n2, n3, n4, n5) {
			if (names == n1 || names == n2 || names == n3 || names == n4 || names == n5) {
				sonuc = countsOfNames[n1] + countsOfNames[n2] - countsOfNames[n3] - countsOfNames[n4] - countsOfNames[n5];
				if (sonuc == 0 && !(sure1.value && !ayet1.value)) {
					document.querySelector("p[id='اسم']").innerHTML = "";
					document.querySelector("p[id='اسم']").style.display = "none";
					document.querySelector("p[id='اسم']").parentNode.style.flexGrow = "0";
				}
				else {
					document.querySelector("p[id='اسم']").style.display = "block";
					document.querySelector("p[id='اسم']").parentNode.style.flexGrow = "1";
					if (sonuc % 19 === 0 && sonuc != 0) {
						harf = divide19(sonuc);
						if(sure1.value && !ayet1.value) $("p[id='اسم']").html("<span style=\"color: blue;\">" + 'count of name اسم in sura ' + sure1.value + ' is: ' + harf + "</span>");
						else $("p[id='اسم']").html("<span style=\"color: blue;\">" + 'count of name اسم is: ' + harf + "</span>");
					}
					else {
						harf = sonuc;
						if(sure1.value && !ayet1.value) $("p[id='اسم']").html('count of name اسم in Sura ' + sure1.value + ' is: ' + sonuc);
						else $("p[id='اسم']").html('count of name اسم is: ' + sonuc);
					}
				}
			}
		}
		
		function name11 (n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {
			if (names == n1 || names == n2 || names == n3 || names == n4 || names == n5 || names == n6 || names == n7 || names == n8 || names == n9 || names == n10 || names == n11) {
				sonuc = countsOfNames[n1] + countsOfNames[n2] + countsOfNames[n3] + countsOfNames[n4] + countsOfNames[n5] - countsOfNames[n6] - countsOfNames[n7] - countsOfNames[n8] - countsOfNames[n9] - countsOfNames[n10] - countsOfNames[n11];
				if (sonuc == 0 && !(sure1.value && !ayet1.value)) {
					document.querySelector("p[id='الله']").innerHTML = "";
					document.querySelector("p[id='الله']").style.display = "none";
					document.querySelector("p[id='الله']").parentNode.style.flexGrow = "0";
				}
				else {
					document.querySelector("p[id='الله']").style.display = "block";
					document.querySelector("p[id='الله']").parentNode.style.flexGrow = "1";
					if (sonuc % 19 === 0 && sonuc != 0) {
						harf = divide19(sonuc);
						if(sure1.value && !ayet1.value) $("p[id='الله']").html("<span style=\"color: blue;\">" + 'count of name الله in sura ' + sure1.value + ' is: ' + harf + "</span>");
						else $("p[id='الله']").html("<span style=\"color: blue;\">" + 'count of name الله is: ' + harf + "</span>");
					}
					else {
						harf = sonuc;
						if(sure1.value && !ayet1.value) $("p[id='الله']").html('count of name الله in sura ' + sure1.value + ' is: ' + sonuc);
						else $("p[id='الله']").html('count of name الله is: ' + sonuc);
					}
				}
			}
		}

		function harfGenel () {
			var sonuc = 0, condition = false;
			for (const arg of arguments) { condition = condition || (ch == arg) }
			if (condition) {
				for (const arg of arguments) { sonuc += counts[arg] }
				if (sonuc == 0) {
					document.querySelector("p[id=" + arguments[0] + "]").innerHTML = "";
					document.querySelector("p[id=" + arguments[0] + "]").style.display = "none";
					document.querySelector("p[id=" + arguments[0] + "]").parentNode.style.flexGrow = "0";
				}
				else {
					document.querySelector("p[id=" + arguments[0] + "]").style.display = "block";
					document.querySelector("p[id=" + arguments[0] + "]").parentNode.style.flexGrow = "1";
					if (sonuc % 19 === 0) {
						harf = divide19(sonuc);
						$("p[id=" + arguments[0] + "]").html("<span style=\"color: blue;\">" + arguments[0] + ' count: ' + harf + "</span>");
					}
					else {
						harf = sonuc;
						$("p[id=" + arguments[0] + "]").html(arguments[0] + ' count: ' + sonuc);
					}
				}
			}
		}
		
		counts = {ـٔ:0,ء:0,ا:0,آ:0,ٱ:0,أ:0,إ:0,ب:0,پ:0,ج:0,چ:0,د:0,ه:0,ة:0,و:0,ؤ:0,ز:0,ژ:0,ح:0,ط:0,ی:0,ي:0,ئ:0,ى:0,ک:0,ك:0,گ:0,ڭ:0,ل:0,م:0,ن:0,س:0,ع:0,ف:0,ڢ:0,ڤ:0,ص:0,ق:0,ڨ:0,ر:0,ش:0,ت:0,ث:0,خ:0,ذ:0,ض:0,ظ:0,غ:0,ﻻ:0,ﻹ:0,ﻷ:0,ﻵ:0};
		countsOfNames = {لله:0,ٱللَّه:0,لِلَّه:0,لِّلَّه:0,آللَّه:0,اللهم:0,ٱللَّهُم:0,اللهو:0,ٱللَّهْو:0,اللهب:0,ٱللَّهَب:0,رحمن:0,رَّحْمَـٰن:0,رحيم:0,رَّحِيم:0,رَحِيم:0,اسم:0,ٱسْم:0,اسمه:0,ٱسْمُه:0,ٱسْمَع:0};
		var ch, i;

		for (i = 0; i < inputValue.length; i++) // fill counts array
		{
			ch = inputValue.charAt(i);
			if(ch.charCodeAt(0) == 1620) counts['ـٔ']++
			else counts[ch]++;
		}

		for(var n = 0; n < isimler.length; n++) // countsOfNames içerisindeki her bir ismi
			countsOfNames[isimler[n]] = occurrences(inputValue, isimler[n]); // say

		for (names in countsOfNames) {
			if(names == 'لله' || names == 'ٱللَّه' || names == 'لِلَّه' || names == 'لِّلَّه' || names == 'آللَّه' || names == 'اللهم' || names == 'ٱللَّهُم' || names == 'اللهو' || names == 'ٱللَّهْو' || names == 'اللهب' || names == 'ٱللَّهَب') name11('لله','ٱللَّه','لِلَّه','لِّلَّه','آللَّه','اللهم','ٱللَّهُم','اللهو','ٱللَّهْو','اللهب','ٱللَّهَب');
			else if(names == 'رحمن' || names == 'رَّحْمَـٰن') name2('رحمن','رَّحْمَـٰن');
			else if(names == 'رحيم' || names == 'رَّحِيم' || names == 'رَحِيم') name3R('رحيم','رَّحِيم','رَحِيم');
			else if(names == 'اسم' || names == 'ٱسْم' || names == 'اسمه' || names == 'ٱسْمُه' || names == 'ٱسْمَع') name5İ('اسم','ٱسْم','اسمه','ٱسْمُه','ٱسْمَع');
		}

		for (ch in counts) {
			if(ch == 'د' || ch == 'ح' || ch == 'ط' || ch == 'م' || ch == 'ن' || ch == 'س' || ch == 'ع' || ch == 'ص' || ch == 'ر' || ch == 'ش' || ch == 'ت' || ch == 'ث' || ch == 'خ' || ch == 'ذ' || ch == 'ض' || ch == 'ظ' || ch == 'غ') harfGenel(ch);
			else if(ch == 'ب' || ch == 'پ') harfGenel('ب','پ');
			else if(ch == 'ج' || ch == 'چ') harfGenel('ج','چ');
			else if(ch == 'ه' || ch == 'ة') harfGenel('ه','ة');
			else if(ch == 'و' || ch == 'ؤ') harfGenel('و','ؤ');
			else if(ch == 'ز' || ch == 'ژ') harfGenel('ز','ژ');
			else if(ch == 'ق' || ch == 'ڨ') harfGenel('ق','ڨ');
			else if(ch == 'ف' || ch == 'ڢ' || ch == 'ڤ') harfGenel('ف','ڢ','ڤ');
			else if(ch == 'ي' || ch == 'ی' || ch == 'ئ' || ch == 'ى') harfGenel('ي','ی','ئ','ى');
			else if(ch == 'ك' || ch == 'ک' || ch == 'گ' || ch == 'ڭ') harfGenel('ك','ک','گ','ڭ');
			else if(ch == 'ل' || ch == 'ﻻ' || ch == 'ﻹ' || ch == 'ﻷ' || ch == 'ﻵ') harfGenel('ل','ﻻ','ﻹ','ﻷ','ﻵ');
			else if(ch == 'ا' || ch == 'ﻻ' || ch == 'ﻹ' || ch == 'ﻷ' || ch == 'ﻵ' || ch == 'ـٔ' || ch == 'ء' || ch == 'آ' || ch == 'ٱ' || ch == 'أ' || ch == 'إ') harfGenel('ا','ﻻ','ﻹ','ﻷ','ﻵ','ـٔ','ء','آ','ٱ','أ','إ');
		}

		sayım();
		seçilen_harfler();

		document.querySelector("#kopyala").style.display = "block";
		document.querySelector("#nameCountWrapper").style.display = "inline-block";
		
		if (abjad(inputValue) % 19 === 0) {
			ebced = divide19(abjad(inputValue));
			$("#abjad").html("<span style=\"color: yellow;\">" + "abjad value: " + ebced + "</span>");
		}
		else {
			ebced = abjad(inputValue);
			$("#abjad").html("abjad value: " + ebced);
		}
		
		if (letters(counts) % 19 === 0) {
			harf_sayisi = divide19(letters(counts));
			$("#letters").html("<span style=\"color: yellow;\">" + "number of letters: " + harf_sayisi + "</span>");
		}
		else {
			harf_sayisi = letters(counts);
			$("#letters").html("number of letters: " + harf_sayisi);
		}
		
		if (words(inputValue) % 19 === 0) {
			kelime = divide19(words(inputValue));
			$("#words").html("<span style=\"color: yellow;\">" + "number of words: " + kelime + "</span>");
		}
		else {
			kelime = words(inputValue);
			$("#words").html("number of words: " + kelime);
		}
		if (ayetsay(inputValue)) {
			if (ayetsay(inputValue) % 19 === 0) {
				ayet_sayisi = divide19(ayetsay(inputValue));
				$("#verses").html("<span style=\"color: yellow;\">" + "number of verses: " + ayet_sayisi + "</span>");
			}
			else {
				ayet_sayisi = ayetsay(inputValue);
				$("#verses").html("number of verses: " + ayet_sayisi);
			}
		}
		else {
			ayet_sayisi = ''
			$("#verses").html("");
		}
		
	}
	else{
		if (ifade === document.activeElement) {
			document.getElementById('açıklama').innerHTML = '';
			sure1.value = '';
			ayet1.value = '';
			sure2.value = '';
			ayet2.value = '';
			sırano1.value = '';
			sırano2.value = '';
		}
		document.getElementById('abjad').innerHTML = '';
		document.getElementById('letters').innerHTML = '';
		document.getElementById('words').innerHTML = '';
		document.getElementById('verses').innerHTML = '';
		mesaj = "";
		document.getElementById('say').innerHTML = '';
		document.getElementById('str').innerHTML = '';
		$('.seçenekler').prop("checked", false);
		
		tüm_renkleri_temizle(); // bu fonksiyonu burada çağırma nedenin şu: textareadaki son kalan harf olan ve renkli olan o harfi sildikten sonra yeniden o harften eklediğinde aşağıdaki seçili harflerle yukarıdaki renklendirilen ve sayılan harfler arasında tutarsızlık oluştu
		if(this.value == "" || this.value == ekleme) loaded();

		document.querySelector("#kopyala").style.display = "none";
		document.querySelector("#nameCountWrapper").style.display = "none";
		document.querySelector(".isim").style.display = "none";

		for(var i=0; i<28; i++) {
			document.querySelector("p[id="+lttrs[i]+"]").style.display = "none";
		}
		document.querySelector("p[id='اسم']").style.display = "none";
		document.querySelector("p[id='الله']").style.display = "none";
		document.querySelector("p[id='الرحمن']").style.display = "none";
		document.querySelector("p[id='الرحيم']").style.display = "none";
		document.getElementById("nextSura").style.display = "none";
	}

	document.querySelector("#kopyala").onclick = function() {
		var result = copyToClipboard(mesaj);
		console.log("copied?", result);
		Swal.fire({
			title: "Results Copied!",
			html: "HonourableQuran.blogspot.com<br>",
			imageUrl: "pic/abjad.png",
			imageWidth: 'auto',
			imageHeight: 190,
			imageAlt: 'Results Copied!',
			timer: 1450,
			showConfirmButton: false
		});
	};

	if($("input[class=seçenekler]:checked").length > 0) $('.seçenekler').trigger('change');
});

var androidVersion;

function getAndroidVersion() {
    var ua = navigator.userAgent.toLowerCase(); 
    var match = ua.match(/android\s([0-9\.]*)/i);
	if(match != undefined) {
		androidVersion = parseInt(match[1], 10); // like 4...
	}
};

$('.seçenekler').on('change', function(){
	document.getElementById("satirlar").style.display = "inline-block";
	// below is bug fix for dangling 0 showing div of "toplam" only when ifade.value cleaned after scrolling until to the middle of the first line of textarea:
	document.getElementById("satirlar").scrollTop = "0px";
	document.getElementById("toplam").style.display = "inline-block";
	resize_ob.observe(ifade);
	ifadeWidther();
});

var initialHeight;
var ekleme = "";

const resize_ob = new ResizeObserver(function(entries) {
	// since we are observing only a single element, so we access the first element in entries array
	let rect = entries[0].contentRect;

	// current width & height
	let height = rect.height;
	document.getElementsByClassName("rows")[0].style.setProperty("height", height + 2 + 'px');

	ifade.value = ifade.value.replace(ekleme, "");
	ekleme = "";

	var num_of_nl = parseInt(height / 46) + 1; // textarea'nın sonuna kadar toplamın gösterilebilmesi için +1 gerekli 
	for(var i = 0; i < num_of_nl; i++)
		ekleme += "\n";

	ifade.value += ekleme;

	getAndroidVersion();
	if (androidVersion >= 11) $('#ifade').trigger('input'); // for samsung devices which has android 11 or higher

	if(document.getElementsByClassName("hwt-backdrop")[0]) // for to do not throw error when first called by load event function
		document.getElementsByClassName("hwt-backdrop")[0].style.setProperty("padding-bottom", height + 'px');
	document.getElementById("satirlar").style.setProperty("padding-bottom", height + 'px');
	
	if(sure1.value == '' && ifade.value == ekleme){
		document.getElementById("satirlar").style.display = "none";
		// below is bug fix for dangling 0 showing div of "toplam" only when ifade.value cleaned after scrolling until to the middle of the first line of textarea:
		document.getElementById("toplam").style.display = "none";
		ifadeWidther();
		ifade.value = '';
	}
		
	if(height > initialHeight)
		document.getElementById("orta").style.setProperty("height", height - initialHeight - 1 + 'px');
	else
		document.getElementById("orta").style.setProperty("height", '0px');

	if(windowWidth < 768) {
		$("#orta").css({ 'display': 'none' });
		document.getElementsByClassName("container")[0].style.height = ifade.offsetHeight + "px"; // sure1 değerini boşaltıp tekrar doldurduktan sonra renklendirme yapılmasa dahi ve ifadenin genişliği artırılsa dahi container'ın yüksekliğini güncelle ki aşağıdaki harf sayımları yukarı kaymasın
	}
	else if(768 <= windowWidth && windowWidth < 1585){
		document.getElementsByClassName("container")[0].style.height = "calc(41.5vw - 46px)";
		$("#orta").css({ 'display': 'block' });
	}
	else if(1585 <= windowWidth){
		document.getElementsByClassName("container")[0].style.height = "598px";
		$("#orta").css({ 'display': 'block' });
	}
	colorTable(); // bu fonksiyonun burada çağrılmasının nedeni linkten yükleme yapıldığında VAHİD, ZU'L FADL'İL AZİM, MECİD, CAMİ isimlerinin ebced değeri kontrol edilirken BISMILLAHIRRAHMANIRRAHIM tablosunu gösterebilmek
});

$(".ayetbox").on("input", function(){
	if(sure1.value == '' && ifade.value == ekleme){
		document.getElementById("satirlar").style.display = "none";
		// below is bug fix for dangling 0 showing div of "toplam" only when ifade.value cleaned after scrolling until to the middle of the first line of textarea:
		document.getElementById("toplam").style.display = "none";
		ifadeWidther();
		ifade.value = '';
		if(windowWidth < 768)
			document.getElementsByClassName("container")[0].style.height = ifade.offsetHeight + "px";
		else if(windowWidth >= 768 && windowWidth < 1585)
			document.getElementsByClassName("container")[0].style.height = "calc(41.5vw - 46px)";
		else if(1585 <= windowWidth)
			document.getElementsByClassName("container")[0].style.height = "598px";
	}
})

var windowWidth;

$(window).load(function(){
	windowWidth = window.innerWidth;
	labelChanger();
	ifadeWidther();
	ifadeHeighter();
	initialHeight = ifade.offsetHeight;
	resize_ob.observe(ifade); // en baştan hiç renklendirme yapılmayan bir sure açıldıktan sonra ifadenin genişliği artırılsa dahi container'ın yüksekliğini güncelle ki aşağıdaki harf sayımları yukarı kaymasın
});

var resizeFlag = 1;

window.addEventListener("resize", function() {
    windowWidth = window.innerWidth;
	labelChanger();
	ifadeWidther();
	ifadeHeighter();
	initialHeight = ifade.offsetHeight;

	if(ifade.value) resizeFlag = 0;
	else resizeFlag = 1;
	
	if(resizeFlag == 0) loaded();
});

function labelChanger(){
	if(windowWidth < 768){
		document.getElementById("snl").innerHTML = "only numbered";
		document.getElementById("ovpll").innerHTML = "verse per line";
	}
	else{
		document.getElementById("snl").innerHTML = "only numbered verses";
		document.getElementById("ovpll").innerHTML = "one verse per line";
	}
}

function ifadeWidther()
{
	var widthC = document.getElementsByClassName("container")[0].offsetWidth;
	var widthS = document.getElementById("satirlar").offsetWidth;
	ifade.style.width = widthC - widthS + 'px';
	copyTextSizer();
}

function ifadeHeighter()
{
	var heightC = document.querySelector(".container").offsetHeight;
	var heightO = document.querySelector("#orta").offsetHeight;
	var yükseklik = (heightC + heightO) - ((heightC + heightO) % 46);
	if(windowWidth >= 768) {
		ifade.style.setProperty("height", yükseklik + 'px');
		ifade.style.setProperty("min-height", yükseklik + 'px');
	}
	else
		ifade.style.setProperty("min-height", '322px');
}

var lttrs = ['ا','ب','ج','د','ه','و','ز','ح','ط','ي','ك','ل','م','ن','س','ع','ف','ص','ق','ر','ش','ت','ث','خ','ذ','ض','ظ','غ','الله','الرحمن','الرحيم','اسم'];

function renkleri_temizle()
{
	var idSelector = function() { return this.id; };
	var selections = $("input[class=seçenekler]:checked").map(idSelector).get();

	for(harf in selections){
		if(selections[harf] == 'ا') {
			clrltrs[0].splice(0,clrltrs[0].length);
			clrltrs[34].splice(0,clrltrs[34].length);
			clrltrs[36].splice(0,clrltrs[36].length);
		}
		else if(selections[harf] == 'ب') clrltrs[1].splice(0,2);
		else if(selections[harf] == 'ج') clrltrs[2].splice(0,2);
		else if(selections[harf] == 'د') clrltrs[3].pop();
		else if(selections[harf] == 'ه') clrltrs[4].splice(0,2);
		else if(selections[harf] == 'و') clrltrs[5].splice(0,2);
		else if(selections[harf] == 'ز') clrltrs[6].splice(0,2);
		else if(selections[harf] == 'ح') clrltrs[7].pop();
		else if(selections[harf] == 'ط') clrltrs[8].pop();
		else if(selections[harf] == 'ي') clrltrs[9].splice(0,4);
		else if(selections[harf] == 'ك') clrltrs[10].splice(0,4);
		else if(selections[harf] == 'ل') {
			clrltrs[11].splice(0,clrltrs[11].length);
			clrltrs[34].splice(0,clrltrs[34].length);
			clrltrs[35].splice(0,clrltrs[35].length);
		}
		else if(selections[harf] == 'م') clrltrs[12].pop();
		else if(selections[harf] == 'ن') clrltrs[13].pop();
		else if(selections[harf] == 'س') clrltrs[14].pop();
		else if(selections[harf] == 'ع') clrltrs[15].pop();
		else if(selections[harf] == 'ف') clrltrs[16].splice(0,3);
		else if(selections[harf] == 'ص') clrltrs[17].pop();
		else if(selections[harf] == 'ق') clrltrs[18].splice(0,2);
		else if(selections[harf] == 'ر') clrltrs[19].pop();
		else if(selections[harf] == 'ش') clrltrs[20].pop();
		else if(selections[harf] == 'ت') clrltrs[21].pop();
		else if(selections[harf] == 'ث') clrltrs[22].pop();
		else if(selections[harf] == 'خ') clrltrs[23].pop();
		else if(selections[harf] == 'ذ') clrltrs[24].pop();
		else if(selections[harf] == 'ض') clrltrs[25].pop();
		else if(selections[harf] == 'ظ') clrltrs[26].pop();
		else if(selections[harf] == 'غ') clrltrs[27].pop();
		else if(selections[harf] == 'الله') {
			clrltrs[28].splice(0,6);
			clrltrs[29].splice(0,6);
		}
		else if(selections[harf] == 'الرحمن') clrltrs[30].splice(0,4);
		else if(selections[harf] == 'الرحيم') clrltrs[31].splice(0,5);
		else if(selections[harf] == 'اسم') {
			clrltrs[32].splice(0,8);
			clrltrs[33].splice(0,4);
		}
		document.getElementById(selections[harf]).checked = false;
		colorButton(selections[harf]);
	}
	
	document.getElementById("satirlar").style.display = "none";
	// below is bug fix for dangling 0 showing div of "toplam" only when ifade.value cleaned after scrolling until to the middle of the first line of textarea:
	document.getElementById("toplam").style.display = "none";
	
	$('#ifade').highlightWithinTextarea('destroy');
	ifadeWidther();
}

function tüm_renkleri_temizle()
{
	for(harf in lttrs){
		if(lttrs[harf] == 'ا') {
			clrltrs[0].splice(0,clrltrs[0].length);
			clrltrs[34].splice(0,clrltrs[34].length);
			clrltrs[36].splice(0,clrltrs[36].length);
		}
		else if(lttrs[harf] == 'ب') clrltrs[1].splice(0,2);
		else if(lttrs[harf] == 'ج') clrltrs[2].splice(0,2);
		else if(lttrs[harf] == 'د') clrltrs[3].pop();
		else if(lttrs[harf] == 'ه') clrltrs[4].splice(0,2);
		else if(lttrs[harf] == 'و') clrltrs[5].splice(0,2);
		else if(lttrs[harf] == 'ز') clrltrs[6].splice(0,2);
		else if(lttrs[harf] == 'ح') clrltrs[7].pop();
		else if(lttrs[harf] == 'ط') clrltrs[8].pop();
		else if(lttrs[harf] == 'ي') clrltrs[9].splice(0,4);
		else if(lttrs[harf] == 'ك') clrltrs[10].splice(0,4);
		else if(lttrs[harf] == 'ل') {
			clrltrs[11].splice(0,clrltrs[11].length);
			clrltrs[34].splice(0,clrltrs[34].length);
			clrltrs[35].splice(0,clrltrs[35].length);
		}
		else if(lttrs[harf] == 'م') clrltrs[12].pop();
		else if(lttrs[harf] == 'ن') clrltrs[13].pop();
		else if(lttrs[harf] == 'س') clrltrs[14].pop();
		else if(lttrs[harf] == 'ع') clrltrs[15].pop();
		else if(lttrs[harf] == 'ف') clrltrs[16].splice(0,3);
		else if(lttrs[harf] == 'ص') clrltrs[17].pop();
		else if(lttrs[harf] == 'ق') clrltrs[18].splice(0,2);
		else if(lttrs[harf] == 'ر') clrltrs[19].pop();
		else if(lttrs[harf] == 'ش') clrltrs[20].pop();
		else if(lttrs[harf] == 'ت') clrltrs[21].pop();
		else if(lttrs[harf] == 'ث') clrltrs[22].pop();
		else if(lttrs[harf] == 'خ') clrltrs[23].pop();
		else if(lttrs[harf] == 'ذ') clrltrs[24].pop();
		else if(lttrs[harf] == 'ض') clrltrs[25].pop();
		else if(lttrs[harf] == 'ظ') clrltrs[26].pop();
		else if(lttrs[harf] == 'غ') clrltrs[27].pop();
		else if(lttrs[harf] == 'الله') {
			clrltrs[28].splice(0,6);
			clrltrs[29].splice(0,6);
		}
		else if(lttrs[harf] == 'الرحمن') clrltrs[30].splice(0,4);
		else if(lttrs[harf] == 'الرحيم') clrltrs[31].splice(0,5);
		else if(lttrs[harf] == 'اسم') {
			clrltrs[32].splice(0,8);
			clrltrs[33].splice(0,4);
		}
		document.getElementById(lttrs[harf]).checked = false;
		colorButton(lttrs[harf]);
	}

	document.getElementById("satirlar").style.display = "none";
	// below is bug fix for dangling 0 showing div of "toplam" only when ifade.value cleaned after scrolling until to the middle of the first line of textarea:
	document.getElementById("toplam").style.display = "none";
	
	$('#ifade').highlightWithinTextarea('destroy');
	ifadeWidther();
}

function renkle(ltr){
	renklendirr(ltr);
	rengarenk();
	document.getElementById(ltr).checked = true;    $("#"+ltr).trigger('change');    colorButton(ltr); // mukatta harfinin/harflerinin toplam sayısı için
}
function renkle2(ltr1, ltr2){
	renklendirr(ltr1);	renklendirr(ltr2);
	rengarenk();
	document.getElementById(ltr1).checked = true;    $("#"+ltr1).trigger('change');    colorButton(ltr1); // mukatta harfinin/harflerinin toplam sayısı için
	document.getElementById(ltr2).checked = true;    $("#"+ltr2).trigger('change');    colorButton(ltr2);
}
function renkle3(ltr1, ltr2, ltr3){
	renklendirr(ltr1);	renklendirr(ltr2);	renklendirr(ltr3);
	rengarenk();
	document.getElementById(ltr1).checked = true;    $("#"+ltr1).trigger('change');    colorButton(ltr1); // mukatta harfinin/harflerinin toplam sayısı için
	document.getElementById(ltr2).checked = true;    $("#"+ltr2).trigger('change');    colorButton(ltr2);
	document.getElementById(ltr3).checked = true;    $("#"+ltr3).trigger('change');    colorButton(ltr3);
}
function renkle4(ltr1, ltr2, ltr3, ltr4){
	renklendirr(ltr1);	renklendirr(ltr2);	renklendirr(ltr3);	renklendirr(ltr4);
	rengarenk();
	document.getElementById(ltr1).checked = true;    $("#"+ltr1).trigger('change');    colorButton(ltr1); // mukatta harfinin/harflerinin toplam sayısı için
	document.getElementById(ltr2).checked = true;    $("#"+ltr2).trigger('change');    colorButton(ltr2);
	document.getElementById(ltr3).checked = true;    $("#"+ltr3).trigger('change');    colorButton(ltr3);
	document.getElementById(ltr4).checked = true;    $("#"+ltr4).trigger('change');    colorButton(ltr4);
}
function renkle5(ltr1, ltr2, ltr3, ltr4, ltr5){
	renklendirr(ltr1);	renklendirr(ltr2);	renklendirr(ltr3);	renklendirr(ltr4);	renklendirr(ltr5);
	rengarenk();
	document.getElementById(ltr1).checked = true;    $("#"+ltr1).trigger('change');    colorButton(ltr1); // mukatta harfinin/harflerinin toplam sayısı için
	document.getElementById(ltr2).checked = true;    $("#"+ltr2).trigger('change');    colorButton(ltr2);
	document.getElementById(ltr3).checked = true;    $("#"+ltr3).trigger('change');    colorButton(ltr3);
	document.getElementById(ltr4).checked = true;    $("#"+ltr4).trigger('change');    colorButton(ltr4);
	document.getElementById(ltr5).checked = true;    $("#"+ltr5).trigger('change');    colorButton(ltr5);
}

var lastTable;

function clearTable(Id){
	$(".is-flipped").removeClass('is-flipped');
	$(".selectedRow").removeClass("selectedRow");
	if(Id == "#ELMRŜ"){
		$("#ELMRŜ").find("*").removeClass("اا");
		$("#ELMRŜ").find("*").removeClass("لل");
		$("#ELMRŜ").find("*").removeClass("مم");
		$("#ELMRŜ").find("*").removeClass("رر");
		$("#ELMRŜ").find("*").removeClass("صص");
		document.getElementById("ELMRŜ").style.display = "none";
	}
	else if(Id == "#KHYAŜ"){
		$("#KHYAŜ").find("*").removeClass("كك");
		$("#KHYAŜ").find("*").removeClass("هه");
		$("#KHYAŜ").find("*").removeClass("يي");
		$("#KHYAŜ").find("*").removeClass("عع");
		$("#KHYAŜ").find("*").removeClass("صص");
		document.getElementById("KHYAŜ").style.display = "none";
	}
	else if(Id == "#THSM"){
		$("#THSM").find("*").removeClass("طط");
		$("#THSM").find("*").removeClass("هه");
		$("#THSM").find("*").removeClass("سس");
		$("#THSM").find("*").removeClass("مم");
		document.getElementById("THSM").style.display = "none";
	}
	else if(Id == "#YS"){
		$("#YS").find("*").removeClass("يي");
		$("#YS").find("*").removeClass("سس");
		document.getElementById("YS").style.display = "none";
	}
	else if(Id == "#Ŝ"){
		$("#Ŝ").find("*").removeClass("صص");
		document.getElementById("Ŝ").style.display = "none";
		document.getElementById("Ŝ_caption").style.display = "none";
	}
	else if(Id == "#ĤM"){
		$(".ĤM").find("*").removeClass("حح");
		$(".ĤM").find("*").removeClass("مم");
		document.getElementById("ĤM4042").style.display = "none";
		document.getElementById("ĤM4346").style.display = "none";
		document.getElementById("ĤM4046").style.display = "none";
		document.getElementById("ĤM4143").style.display = "none";
		document.getElementById("ĤM4143-wrapper").style.display = "none";
		document.getElementById("ĤM-wrapper").style.display = "none";
	}
	else if(Id == "#ASQ"){
		$("#ASQ").find("*").removeClass("عع");
		$("#ASQ").find("*").removeClass("سس");
		$("#ASQ").find("*").removeClass("قق");
		document.getElementById("ASQ").style.display = "none";
	}
	else if(Id == "#Q") {
		document.getElementById("Q").style.display = "none";
		$("#Q").find("*").removeClass("قق");
	}
	else if(Id == "#N") {
		document.getElementById("N").style.display = "none";
		document.getElementById("N_caption").style.display = "none";
		$("#N").find("*").removeClass("نن");
	}
	else if(Id == "#BISMILLAHIRRAHMANIRRAHIM") {
		document.getElementById("BISMILLAHIRRAHMANIRRAHIM").style.display = "none";
		document.getElementById("BISMILLAHIRRAHMANIRRAHIM-2").style.display = "none";
		document.getElementById("uyarı").style.display = "none";
		document.getElementById("caption").style.display = "none";
		document.getElementById("isim-table").style.display = "none";
		document.getElementById("bismTable19").style.display = "none";

		$("#BISMILLAHIRRAHMANIRRAHIM").find("*").removeClass("اسم19");
		$("#BISMILLAHIRRAHMANIRRAHIM").find("*").removeClass("الله19");
		$("#BISMILLAHIRRAHMANIRRAHIM").find("*").removeClass("الرحمن19");
		$("#BISMILLAHIRRAHMANIRRAHIM").find("*").removeClass("الرحيم19");
		$("#BISMILLAHIRRAHMANIRRAHIM-2").find("*").removeClass("اسم19");
		$("#BISMILLAHIRRAHMANIRRAHIM-2").find("*").removeClass("الله19");
		$("#BISMILLAHIRRAHMANIRRAHIM-2").find("*").removeClass("الرحمن19");
		$("#BISMILLAHIRRAHMANIRRAHIM-2").find("*").removeClass("الرحيم19");
		
		$("#bismTable19").find("*").removeClass("اسم1");
		$("#bismTable19").find("*").removeClass("الله1");
		$("#bismTable19").find("*").removeClass("الرحمن1");
		$("#bismTable19").find("*").removeClass("الرحيم1");
		$("#bismTable19").find("*").removeClass("بب");
		$("#bismTable19").find("*").removeClass("سس");
		$("#bismTable19").find("*").removeClass("مم");
		$("#bismTable19").find("*").removeClass("اا");
		$("#bismTable19").find("*").removeClass("لل");
		$("#bismTable19").find("*").removeClass("هه");
		$("#bismTable19").find("*").removeClass("رر");
		$("#bismTable19").find("*").removeClass("حح");
		$("#bismTable19").find("*").removeClass("نن");
		$("#bismTable19").find("*").removeClass("يي");
	}
}

function checkLetter(array){
	for(var i = 0; i < array.length; i++) 
		if(ifade.value == array[i] || ifade.value == array[i] + ekleme) return true;
	return false
}

function colorBism(string) {
	var tillNe;
	if(checkLetter([string])) {
		for(var n = 1; n <= string.replace(/ /g,"").length; n++) {
			for(var e = 0; e < document.getElementsByClassName("till-"+n).length; e++)
			{
				tillNe = document.getElementsByClassName("till-"+n)[e];

				if(tillNe.classList.contains("Be")) tillNe.classList.add('بب');
				else if(tillNe.classList.contains("Sin")) tillNe.classList.add('سس');
				else if(tillNe.classList.contains("Mim")) tillNe.classList.add('مم');
				else if(tillNe.classList.contains("Elif")) tillNe.classList.add('اا');
				else if(tillNe.classList.contains("Lam")) tillNe.classList.add('لل');
				else if(tillNe.classList.contains("He")) tillNe.classList.add('هه');
				else if(tillNe.classList.contains("Ra")) tillNe.classList.add('رر');
				else if(tillNe.classList.contains("Ha")) tillNe.classList.add('حح');
				else if(tillNe.classList.contains("Nun")) tillNe.classList.add('نن');
				else if(tillNe.classList.contains("Ye")) tillNe.classList.add('يي');
				else if(tillNe.classList.contains("İSİM-19")) tillNe.classList.add('اسم1');
				else if(tillNe.classList.contains("ALLAH-19")) tillNe.classList.add('الله1');
				else if(tillNe.classList.contains("RAHMAN-19")) tillNe.classList.add('الرحمن1');
				else if(tillNe.classList.contains("RAHİM-19")) tillNe.classList.add('الرحيم1');
			}
		}
	}
}

$(".seçenekler").on("change", colorTable);
$("#ifade").on("input", colorTable);

function colorTable() // colorMuqatta fonksiyonundan ayrı olmalı ki link yüklemesi yapıldığında çalışsın...
{
	if(checkLetter(['ا','م','س','ب','ل','ه','ر','ح','ن','ي',"واحد","ذوالفضل العظیم","مجید","جامع","بسم","الله","الرحمن","الرحيم","بسم الله الرحمن الرحيم","بس","بسم","بسم ا","بسم ال","بسم الل","بسم الله","بسم الله ا","بسم الله ال","بسم الله الر","بسم الله الرح","بسم الله الرحم","بسم الله الرحمن","بسم الله الرحمن ا","بسم الله الرحمن ال","بسم الله الرحمن الر","بسم الله الرحمن الرح","بسم الله الرحمن الرحي"]) || document.getElementById('اسم').checked == true || document.getElementById('الله').checked == true || document.getElementById('الرحمن').checked == true || document.getElementById('الرحيم').checked == true)
	{
		clearTable(lastTable);
		document.querySelector('#BISMILLAHIRRAHMANIRRAHIM-table').querySelector('.flip-card-inner').classList.add('is-flipped');
		document.getElementById("BISMILLAHIRRAHMANIRRAHIM").style.display = "inline-table";
		document.getElementById("BISMILLAHIRRAHMANIRRAHIM-2").style.display = "inline-table";
		document.getElementById("uyarı").style.display = "block";
		document.getElementById("caption").style.display = "block";
		document.getElementById("isim-table").style.display = "flex";
		document.getElementById("bismTable19").style.display = "block";

		if(document.getElementById('اسم').checked == true) document.getElementById("İSİM").classList.add('اسم19');
		if(document.getElementById('الله').checked == true) document.getElementById("ALLAH").classList.add('الله19');
		if(document.getElementById('الرحمن').checked == true) document.getElementById("RAHMAN").classList.add('الرحمن19');
		if(document.getElementById('الرحيم').checked == true) document.getElementById("RAHİM").classList.add('الرحيم19');
		if(ifade.value == "واحد" + ekleme) document.getElementById("واحد").classList.add('اسم19');
		if(ifade.value == "ذوالفضل العظیم" + ekleme) document.getElementById("ذوالفضل العظیم").classList.add('الله19');
		if(ifade.value == "مجید" + ekleme) document.getElementById("مجید").classList.add('الرحمن19');
		if(ifade.value == "جامع" + ekleme) document.getElementById("جامع").classList.add('الرحيم19');

		for(var i = 1; i <= 22; i++) colorBism("بسم الله الرحمن الرحيم".slice(0, i));

		if(checkLetter(['ا'])) for(var e = 0; e < document.getElementsByClassName("letter Elif").length; e++) document.getElementsByClassName("letter Elif")[e].classList.add('اا');
		else if(checkLetter(['م'])) for(var e = 0; e < document.getElementsByClassName("letter Mim").length; e++) document.getElementsByClassName("letter Mim")[e].classList.add('مم');
		else if(checkLetter(['س'])) for(var e = 0; e < document.getElementsByClassName("letter Sin").length; e++) document.getElementsByClassName("letter Sin")[e].classList.add('سس');
		else if(checkLetter(['ب'])) for(var e = 0; e < document.getElementsByClassName("letter Be").length; e++) document.getElementsByClassName("letter Be")[e].classList.add('بب');
		else if(checkLetter(['ل'])) for(var e = 0; e < document.getElementsByClassName("letter Lam").length; e++) document.getElementsByClassName("letter Lam")[e].classList.add('لل');
		else if(checkLetter(['ه'])) for(var e = 0; e < document.getElementsByClassName("letter He").length; e++) document.getElementsByClassName("letter He")[e].classList.add('هه');
		else if(checkLetter(['ر'])) for(var e = 0; e < document.getElementsByClassName("letter Ra").length; e++) document.getElementsByClassName("letter Ra")[e].classList.add('رر');
		else if(checkLetter(['ح'])) for(var e = 0; e < document.getElementsByClassName("letter Ha").length; e++) document.getElementsByClassName("letter Ha")[e].classList.add('حح');
		else if(checkLetter(['ن'])) for(var e = 0; e < document.getElementsByClassName("letter Nun").length; e++) document.getElementsByClassName("letter Nun")[e].classList.add('نن');
		else if(checkLetter(['ي'])) for(var e = 0; e < document.getElementsByClassName("letter Ye").length; e++) document.getElementsByClassName("letter Ye")[e].classList.add('يي');

		else if(checkLetter(['بسم'])) for(var e = 0; e < document.getElementsByClassName("name-1").length; e++) document.getElementsByClassName("name-1")[e].classList.add('اسم1');
		else if(checkLetter(['الله'])) for(var e = 0; e < document.getElementsByClassName("name-2").length; e++) document.getElementsByClassName("name-2")[e].classList.add('الله1');
		else if(checkLetter(['الرحمن'])) for(var e = 0; e < document.getElementsByClassName("name-3").length; e++) document.getElementsByClassName("name-3")[e].classList.add('الرحمن1');
		else if(checkLetter(['الرحيم'])) for(var e = 0; e < document.getElementsByClassName("name-4").length; e++) document.getElementsByClassName("name-4")[e].classList.add('الرحيم1');

		lastTable = "#BISMILLAHIRRAHMANIRRAHIM";
		localStorage.setItem('lastTable', lastTable);
	}
	else if(!ayet1.value && (sure1.value == 2 || sure1.value == 3 || (29 <= sure1.value && sure1.value <= 32)) && document.getElementById('اسم').checked == false && document.getElementById('الله').checked == false && document.getElementById('الرحمن').checked == false && document.getElementById('الرحيم').checked == false)
	{
		clearTable(lastTable);
		document.querySelector('#ELMRŜ-table').querySelector('.flip-card-inner').classList.add('is-flipped');
		document.getElementById("ELMRŜ").style.display = "block";
		document.getElementById("r"+sure1.value).classList.add('selectedRow');

		if(document.getElementById("ا").checked == true) document.getElementById("r"+sure1.value).children.item(1).classList.add('اا');
		if(document.getElementById("ل").checked == true) document.getElementById("r"+sure1.value).children.item(2).classList.add('لل');
		if(document.getElementById("م").checked == true) document.getElementById("r"+sure1.value).children.item(3).classList.add('مم');
		lastTable = "#ELMRŜ";
		localStorage.setItem('lastTable', lastTable);
	}
	else if(!ayet1.value && sure1.value == 7 && document.getElementById('اسم').checked == false && document.getElementById('الله').checked == false && document.getElementById('الرحمن').checked == false && document.getElementById('الرحيم').checked == false)
	{
		clearTable(lastTable);
		if(localStorage.getItem('lastTable') != "#Ŝ") // #ELMRŜ ya da null da olabilir ve herhangi bir harf seçili olabilir
		{
			document.querySelector('#ELMRŜ-table').querySelector('.flip-card-inner').classList.add('is-flipped');
			document.getElementById("ELMRŜ").style.display = "block";
			document.getElementById("r"+sure1.value).classList.add('selectedRow');
			
			if(document.getElementById("ا").checked == true) document.getElementById("r"+sure1.value).children.item(1).classList.add('اا');
			if(document.getElementById("ل").checked == true) document.getElementById("r"+sure1.value).children.item(2).classList.add('لل');
			if(document.getElementById("م").checked == true) document.getElementById("r"+sure1.value).children.item(3).classList.add('مم');
			if(document.getElementById("ص").checked == true) document.getElementById("r"+sure1.value).children.item(5).classList.add('صص');
			lastTable = "#ELMRŜ";
			localStorage.setItem('lastTable', lastTable); // bunu ortak tanımlarsan sapıtıyor asenkron çalışması nedeniyle o nedenle ayrı ayrı tanıt inşALLAH böyle
		}
		else // if(localStorage.getItem('lastTable') == "#Ŝ")
		{
			document.querySelector('#Ŝ-table').querySelector('.flip-card-inner').classList.add('is-flipped');
			document.getElementById("Ŝ").style.display = "block";
			document.getElementById("r"+sure1.value+"Ŝ").classList.add('selectedRow');
			document.getElementById("Ŝ_caption").style.display = "block";

			if(document.getElementById("ص").checked == true) document.getElementById("r"+sure1.value+"Ŝ").children.item(1).classList.add('صص');
			lastTable = "#Ŝ";
			localStorage.setItem('lastTable', lastTable); // bunu ortak tanımlarsan sapıtıyor asenkron çalışması nedeniyle o nedenle ayrı ayrı tanıt inşALLAH böyle
		}
	}
	else if(!ayet1.value && sure1.value != 13 && 10 <= sure1.value && sure1.value <= 15 && document.getElementById('اسم').checked == false && document.getElementById('الله').checked == false && document.getElementById('الرحمن').checked == false && document.getElementById('الرحيم').checked == false)
	{
		clearTable(lastTable);
		document.querySelector('#ELMRŜ-table').querySelector('.flip-card-inner').classList.add('is-flipped');
		document.getElementById("ELMRŜ").style.display = "block";
		document.getElementById("r"+sure1.value).classList.add('selectedRow');

		if(document.getElementById("ا").checked == true) document.getElementById("r"+sure1.value).children.item(1).classList.add('اا');
		if(document.getElementById("ل").checked == true) document.getElementById("r"+sure1.value).children.item(2).classList.add('لل');
		if(document.getElementById("ر").checked == true) document.getElementById("r"+sure1.value).children.item(4).classList.add('رر');
		lastTable = "#ELMRŜ";
		localStorage.setItem('lastTable', lastTable);
	}
	else if(!ayet1.value && sure1.value == 13 && document.getElementById('اسم').checked == false && document.getElementById('الله').checked == false && document.getElementById('الرحمن').checked == false && document.getElementById('الرحيم').checked == false)
	{
		clearTable(lastTable);
		document.querySelector('#ELMRŜ-table').querySelector('.flip-card-inner').classList.add('is-flipped');
		document.getElementById("ELMRŜ").style.display = "block";
		document.getElementById("r"+sure1.value).classList.add('selectedRow');

		if(document.getElementById("ا").checked == true) document.getElementById("r"+sure1.value).children.item(1).classList.add('اا');
		if(document.getElementById("ل").checked == true) document.getElementById("r"+sure1.value).children.item(2).classList.add('لل');
		if(document.getElementById("م").checked == true) document.getElementById("r"+sure1.value).children.item(3).classList.add('مم');
		if(document.getElementById("ر").checked == true) document.getElementById("r"+sure1.value).children.item(4).classList.add('رر');
		lastTable = "#ELMRŜ";
		localStorage.setItem('lastTable', lastTable);
	}
	else if(!ayet1.value && sure1.value == 19 && document.getElementById('اسم').checked == false && document.getElementById('الله').checked == false && document.getElementById('الرحمن').checked == false && document.getElementById('الرحيم').checked == false)
	{
		clearTable(lastTable);

		if((localStorage.getItem('lastTable') != "#Ŝ" && document.getElementById('ص').checked == true) || (localStorage.getItem('lastTable') != "#THSM" && document.getElementById('ه').checked == true) || document.getElementById('ك').checked == true || document.getElementById('ي').checked == true || document.getElementById('ع').checked == true) // null ya da #KHYAŜ ya da başka bir durumda
		{
			document.querySelector('#KHYAŜ-table').querySelector('.flip-card-inner').classList.add('is-flipped');
			document.getElementById("KHYAŜ").style.display = "block";
			document.getElementById("r"+sure1.value).classList.add('selectedRow');

			if(document.getElementById('ك').checked == true) document.getElementById("r"+sure1.value).children.item(1).classList.add('كك');
			if(document.getElementById('ه').checked == true) document.getElementById("r"+sure1.value).children.item(2).classList.add('هه');
			if(document.getElementById('ي').checked == true) document.getElementById("r"+sure1.value).children.item(3).classList.add('يي');
			if(document.getElementById('ع').checked == true) document.getElementById("r"+sure1.value).children.item(4).classList.add('عع');
			if(document.getElementById('ص').checked == true) document.getElementById("r"+sure1.value).children.item(5).classList.add('صص');
			lastTable = "#KHYAŜ";
			localStorage.setItem('lastTable', lastTable); // bunu ortak tanımlarsan sapıtıyor asenkron çalışması nedeniyle o nedenle ayrı ayrı tanıt inşALLAH böyle
		}
		else if(localStorage.getItem('lastTable') != "#KHYAŜ" && document.getElementById('ه').checked == true)
		{
			document.querySelector('#THSM-table').querySelector('.flip-card-inner').classList.add('is-flipped');
			document.getElementById("THSM").style.display = "block";
			document.getElementById("r"+sure1.value+"h").classList.add('selectedRow');

			document.getElementById("r"+sure1.value+"h").children.item(2).classList.add('هه');
			lastTable = "#THSM";
			localStorage.setItem('lastTable', lastTable); // bunu ortak tanımlarsan sapıtıyor asenkron çalışması nedeniyle o nedenle ayrı ayrı tanıt inşALLAH böyle
		}
		else if(localStorage.getItem('lastTable') != "#KHYAŜ" && document.getElementById('ص').checked == true)
		{
			document.querySelector('#Ŝ-table').querySelector('.flip-card-inner').classList.add('is-flipped');
			document.getElementById("Ŝ").style.display = "block";
			document.getElementById("r"+sure1.value+"Ŝ").classList.add('selectedRow');
			document.getElementById("Ŝ_caption").style.display = "block";
			
			document.getElementById("r"+sure1.value+"Ŝ").children.item(1).classList.add('صص');
			lastTable = "#Ŝ";
			localStorage.setItem('lastTable', lastTable); // bunu ortak tanımlarsan sapıtıyor asenkron çalışması nedeniyle o nedenle ayrı ayrı tanıt inşALLAH böyle
		}
	}
	else if(!ayet1.value && sure1.value == 20 && document.getElementById('اسم').checked == false && document.getElementById('الله').checked == false && document.getElementById('الرحمن').checked == false && document.getElementById('الرحيم').checked == false)
	{
		clearTable(lastTable);
		document.querySelector('#THSM-table').querySelector('.flip-card-inner').classList.add('is-flipped');
		document.getElementById("THSM").style.display = "block";
		document.getElementById("r"+sure1.value).classList.add('selectedRow');

		if(document.getElementById('ط').checked == true) document.getElementById("r"+sure1.value).children.item(1).classList.add('طط');
		if(document.getElementById('ه').checked == true) document.getElementById("r"+sure1.value).children.item(2).classList.add('هه');
		lastTable = "#THSM";
		localStorage.setItem('lastTable', lastTable);
	}
	else if(!ayet1.value && (sure1.value == 26 || sure1.value == 28) && document.getElementById('اسم').checked == false && document.getElementById('الله').checked == false && document.getElementById('الرحمن').checked == false && document.getElementById('الرحيم').checked == false)
	{
		clearTable(lastTable);
		document.querySelector('#THSM-table').querySelector('.flip-card-inner').classList.add('is-flipped');
		document.getElementById("THSM").style.display = "block";
		document.getElementById("r"+sure1.value).classList.add('selectedRow');

		if(document.getElementById('ط').checked == true) document.getElementById("r"+sure1.value).children.item(1).classList.add('طط');
		if(document.getElementById('س').checked == true) document.getElementById("r"+sure1.value).children.item(3).classList.add('سس');
		if(document.getElementById('م').checked == true) document.getElementById("r"+sure1.value).children.item(4).classList.add('مم');
		lastTable = "#THSM";
		localStorage.setItem('lastTable', lastTable);
	}
	else if(!ayet1.value && sure1.value == 27 && document.getElementById('اسم').checked == false && document.getElementById('الله').checked == false && document.getElementById('الرحمن').checked == false && document.getElementById('الرحيم').checked == false)
	{
		clearTable(lastTable);
		document.querySelector('#THSM-table').querySelector('.flip-card-inner').classList.add('is-flipped');
		document.getElementById("THSM").style.display = "block";
		document.getElementById("r"+sure1.value).classList.add('selectedRow');

		if(document.getElementById('ط').checked == true) document.getElementById("r"+sure1.value).children.item(1).classList.add('طط');
		if(document.getElementById('س').checked == true) document.getElementById("r"+sure1.value).children.item(3).classList.add('سس');
		lastTable = "#THSM";
		localStorage.setItem('lastTable', lastTable);
	}
	else if(!ayet1.value && sure1.value == 36 && document.getElementById('اسم').checked == false && document.getElementById('الله').checked == false && document.getElementById('الرحمن').checked == false && document.getElementById('الرحيم').checked == false)
	{
		clearTable(lastTable);
		document.querySelector('#YS-table').querySelector('.flip-card-inner').classList.add('is-flipped');
		document.getElementById("YS").style.display = "block";
		document.getElementById("r"+sure1.value).classList.add('selectedRow');

		if(document.getElementById('ي').checked == true) document.getElementById("r"+sure1.value).children.item(1).classList.add('يي');
		if(document.getElementById('س').checked == true) document.getElementById("r"+sure1.value).children.item(2).classList.add('سس');
		lastTable = "#YS";
		localStorage.setItem('lastTable', lastTable);
	}
	else if(!ayet1.value && sure1.value == 38 && document.getElementById('اسم').checked == false && document.getElementById('الله').checked == false && document.getElementById('الرحمن').checked == false && document.getElementById('الرحيم').checked == false)
	{
		clearTable(lastTable);
		document.querySelector('#Ŝ-table').querySelector('.flip-card-inner').classList.add('is-flipped');
		document.getElementById("Ŝ").style.display = "block";
		document.getElementById("r"+sure1.value).classList.add('selectedRow');
		document.getElementById("Ŝ_caption").style.display = "block";

		if(document.getElementById('ص').checked == true) document.getElementById("r"+sure1.value).children.item(1).classList.add('صص');
		lastTable = "#Ŝ";
		localStorage.setItem('lastTable', lastTable);
	}
	else if(!ayet1.value && 41 <= sure1.value && sure1.value <= 43 && document.getElementById('ع').checked == false && document.getElementById('س').checked == false && document.getElementById('ق').checked == false && document.getElementById('اسم').checked == false && document.getElementById('الله').checked == false && document.getElementById('الرحمن').checked == false && document.getElementById('الرحيم').checked == false)
	{
		clearTable(lastTable);
		document.querySelector('#ĤM-table').querySelector('.flip-card-inner').classList.add('is-flipped');
		document.getElementById("ĤM4042").style.display = "block";
		document.getElementById("ĤM4346").style.display = "block";
		document.getElementById("ĤM4046").style.display = "inline-table";
		document.getElementById("ĤM4143").style.display = "block";
		document.getElementById("ĤM4143-wrapper").style.display = "inline-table";
		document.getElementById("ĤM-wrapper").style.display = "flex";
		document.getElementsByClassName("r"+sure1.value)[0].classList.add('selectedRow');
		document.getElementsByClassName("r"+sure1.value)[1].classList.add('selectedRow');

		if(document.getElementById('ح').checked == true) {
			document.getElementsByClassName("r"+sure1.value)[0].children.item(1).classList.add('حح');
			document.getElementsByClassName("r"+sure1.value)[1].children.item(1).classList.add('حح');
		}
		if(document.getElementById('م').checked == true) {
			document.getElementsByClassName("r"+sure1.value)[0].children.item(2).classList.add('مم');
			document.getElementsByClassName("r"+sure1.value)[1].children.item(2).classList.add('مم');
		}
		lastTable = "#ĤM";
		localStorage.setItem('lastTable', lastTable);
	}
	else if(!ayet1.value && (sure1.value == 40 || (44 <= sure1.value && sure1.value <= 46)) && document.getElementById('ع').checked == false && document.getElementById('س').checked == false && document.getElementById('ق').checked == false && document.getElementById('اسم').checked == false && document.getElementById('الله').checked == false && document.getElementById('الرحمن').checked == false && document.getElementById('الرحيم').checked == false)
	{
		clearTable(lastTable);
		document.querySelector('#ĤM-table').querySelector('.flip-card-inner').classList.add('is-flipped');
		document.getElementById("ĤM4042").style.display = "block";
		document.getElementById("ĤM4346").style.display = "block";
		document.getElementById("ĤM4046").style.display = "inline-table";
		document.getElementById("ĤM4143").style.display = "block";
		document.getElementById("ĤM4143-wrapper").style.display = "inline-table";
		document.getElementById("ĤM-wrapper").style.display = "flex";
		document.getElementById("r"+sure1.value).classList.add('selectedRow');

		if(document.getElementById('ح').checked == true) document.getElementById("r"+sure1.value).children.item(1).classList.add('حح');
		if(document.getElementById('م').checked == true) document.getElementById("r"+sure1.value).children.item(2).classList.add('مم');
		lastTable = "#ĤM";
		localStorage.setItem('lastTable', lastTable);
	}
	else if(!ayet1.value && sure1.value == 42 && document.getElementById('ح').checked == false && document.getElementById('م').checked == false && document.getElementById('اسم').checked == false && document.getElementById('الله').checked == false && document.getElementById('الرحمن').checked == false && document.getElementById('الرحيم').checked == false)
	{
		clearTable(lastTable);
		document.querySelector('#ASQ-table').querySelector('.flip-card-inner').classList.add('is-flipped');
		document.getElementById("ASQ").style.display = "block";
		document.getElementById("r"+sure1.value).classList.add('selectedRow');

		if(document.getElementById('ع').checked == true) document.getElementById("r"+sure1.value).children.item(1).classList.add('عع');
		if(document.getElementById('س').checked == true) document.getElementById("r"+sure1.value).children.item(2).classList.add('سس');
		if(document.getElementById('ق').checked == true) document.getElementById("r"+sure1.value).children.item(3).classList.add('قق');
		lastTable = "#ASQ";
		localStorage.setItem('lastTable', lastTable);
	}
	else if(!ayet1.value && sure1.value == 50 && document.getElementById('اسم').checked == false && document.getElementById('الله').checked == false && document.getElementById('الرحمن').checked == false && document.getElementById('الرحيم').checked == false)
	{
		clearTable(lastTable);
		document.querySelector('#Q-table').querySelector('.flip-card-inner').classList.add('is-flipped');
		document.getElementById("Q").style.display = "block";
		document.getElementById("r"+sure1.value).classList.add('selectedRow');

		if(document.getElementById('ق').checked == true) document.getElementById("r"+sure1.value).children.item(0).classList.add('قق');
		lastTable = "#Q";
		localStorage.setItem('lastTable', lastTable);
	}
	else if(!ayet1.value && sure1.value == 68 && document.getElementById('اسم').checked == false && document.getElementById('الله').checked == false && document.getElementById('الرحمن').checked == false && document.getElementById('الرحيم').checked == false)
	{
		clearTable(lastTable);
		document.querySelector('#N-table').querySelector('.flip-card-inner').classList.add('is-flipped');
		document.getElementById("N").style.display = "block";
		document.getElementById("r"+sure1.value).classList.add('selectedRow');
		document.getElementById("N_caption").style.display = "block";

		if(document.getElementById('ن').checked == true) document.getElementById("r"+sure1.value).children.item(0).classList.add('نن');
		lastTable = "#N";
		localStorage.setItem('lastTable', lastTable);
	}
	else{
		$(".is-flipped").removeClass('is-flipped');
		$(".selectedRow").removeClass("selectedRow");
		document.getElementById("ELMRŜ").style.display = "none";
		document.getElementById("KHYAŜ").style.display = "none";
		document.getElementById("THSM").style.display = "none";
		document.getElementById("YS").style.display = "none";
		document.getElementById("Ŝ").style.display = "none";
		document.getElementById("Ŝ_caption").style.display = "none";
		document.getElementById("ĤM4042").style.display = "none";
		document.getElementById("ĤM4346").style.display = "none";
		document.getElementById("ĤM4046").style.display = "none";
		document.getElementById("ĤM4143").style.display = "none";
		document.getElementById("ĤM4143-wrapper").style.display = "none";
		document.getElementById("ĤM-wrapper").style.display = "none";
		document.getElementById("ASQ").style.display = "none";
		document.getElementById("Q").style.display = "none";
		document.getElementById("N").style.display = "none";
		document.getElementById("N_caption").style.display = "none";
		document.getElementById("BISMILLAHIRRAHMANIRRAHIM").style.display = "none";
		document.getElementById("BISMILLAHIRRAHMANIRRAHIM-2").style.display = "none";
		document.getElementById("uyarı").style.display = "none";
		document.getElementById("caption").style.display = "none";
		document.getElementById("isim-table").style.display = "none";
		document.getElementById("bismTable19").style.display = "none";
	}
}

function colorMuqatta()
{
	if(sure1.value && !ayet1.value)
	{
		if(sure1.value == 2 || sure1.value == 3 || (29 <= sure1.value && sure1.value <= 32)) renkle3('ا','ل','م');
		else if(sure1.value == 7) renkle4('ا','ل','م','ص');
		else if(sure1.value != 13 && 10 <= sure1.value && sure1.value <= 15) renkle3('ا','ل','ر');
		else if(sure1.value == 13) renkle4('ا','ل','م','ر');
		else if(sure1.value == 19) renkle5('ك','ه','ي','ع','ص');
		else if(sure1.value == 20) renkle2('ط','ه');
		else if(sure1.value == 26 || sure1.value == 28) renkle3('ط','س','م');
		else if(sure1.value == 27) renkle2('ط','س');
		else if(sure1.value == 36) renkle2('ي','س');
		else if(sure1.value == 38) renkle('ص');
		else if(sure1.value != 42 && 40 <= sure1.value && sure1.value <= 46) renkle2('ح','م');
		else if(sure1.value == 42) renkle5('ح','م','ع','س','ق');
		else if(sure1.value == 50) renkle('ق');
		else if(sure1.value == 68) renkle('ن');
	}
}

var clrltrs = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];

function renklendirr(ltr)
{
	if(ltr == 'ا') {
		clrltrs[0].push('ا','ء','ـٔ','آ','ٱ','أ','إ');
		if(clrltrs[11][0] == 'ل') clrltrs[34] = ['ﻻ','ﻹ','ﻷ','ﻵ','لَا','لِأ','لْأ','لَّا','لَٱ','لًا','لْإ','لَأ','لِٱ','لًّا','لَّٱ','لِّأ','لَإ','لِإ','لا'];
		clrltrs[36] = ['ﻻ','ﻹ','ﻷ','ﻵ','لَا','لِأ','لْأ','لَّا','لَٱ','لًا','لْإ','لَأ','لِٱ','لًّا','لَّٱ','لِّأ','لَإ','لِإ','لا'];
	}
	else if(ltr == 'ب') clrltrs[1].push('ب','پ');
	else if(ltr == 'ج') clrltrs[2].push('ج','چ');
	else if(ltr == 'د') clrltrs[3].push('د');
	else if(ltr == 'ه') clrltrs[4].push('ه','ة');
	else if(ltr == 'و') clrltrs[5].push('و','ؤ');
	else if(ltr == 'ز') clrltrs[6].push('ز','ژ');
	else if(ltr == 'ح') clrltrs[7].push('ح');
	else if(ltr == 'ط') clrltrs[8].push('ط');
	else if(ltr == 'ي') clrltrs[9].push('ي','ی','ئ','ى');
	else if(ltr == 'ك') clrltrs[10].push('ك','ک','گ','ڭ');
	else if(ltr == 'ل') {
		clrltrs[11].push('ل');
		if(clrltrs[0][0] == 'ا') clrltrs[34] = ['ﻻ','ﻹ','ﻷ','ﻵ','لَا','لِأ','لْأ','لَّا','لَٱ','لًا','لْإ','لَأ','لِٱ','لًّا','لَّٱ','لِّأ','لَإ','لِإ','لا'];
		clrltrs[35] = ['ﻻ','ﻹ','ﻷ','ﻵ','لَا','لِأ','لْأ','لَّا','لَٱ','لًا','لْإ','لَأ','لِٱ','لًّا','لَّٱ','لِّأ','لَإ','لِإ','لا'];
	}
	else if(ltr == 'م') clrltrs[12].push('م');
	else if(ltr == 'ن') clrltrs[13].push('ن');
	else if(ltr == 'س') clrltrs[14].push('س');
	else if(ltr == 'ع') clrltrs[15].push('ع');
	else if(ltr == 'ف') clrltrs[16].push('ف','ڢ','ڤ');
	else if(ltr == 'ص') clrltrs[17].push('ص');
	else if(ltr == 'ق') clrltrs[18].push('ق','ڨ');
	else if(ltr == 'ر') clrltrs[19].push('ر');
	else if(ltr == 'ش') clrltrs[20].push('ش');
	else if(ltr == 'ت') clrltrs[21].push('ت');
	else if(ltr == 'ث') clrltrs[22].push('ث');
	else if(ltr == 'خ') clrltrs[23].push('خ');
	else if(ltr == 'ذ') clrltrs[24].push('ذ');
	else if(ltr == 'ض') clrltrs[25].push('ض');
	else if(ltr == 'ظ') clrltrs[26].push('ظ');
	else if(ltr == 'غ') clrltrs[27].push('غ');
	else if(ltr == 'الله' || ltr == 'ٱللَّهِ' || ltr == 'لِلَّهِ' || ltr == 'ٱللَّهُ' || ltr == 'ٱللَّهَ' || ltr == 'لِّلَّهِ') {
		clrltrs[28].push('الله','لله','ٱللَّه','لِلَّه','لِّلَّه','آللَّه');
		clrltrs[29].push('اللهم','ٱللَّهُم','اللهو','ٱللَّهْو','اللهب','ٱللَّهَب');
	}
	else if(ltr == 'الرحمن' || ltr == 'رحمن' || ltr == 'ٱلرَّحْمَـٰن' || ltr == 'رَّحْمَـٰن') clrltrs[30].push('الرحمن','رحمن','ٱلرَّحْمَـٰن','رَّحْمَـٰن');
	else if(ltr == 'الرحيم' || ltr == 'رحيم' || ltr == 'ٱلرَّحِيم' || ltr == 'رَّحِيم' || ltr == 'رَحِيم') clrltrs[31].push('الرحيم','رحيم','ٱلرَّحِيم','رَّحِيم','رَحِيم');
	else if(ltr == 'اسم' || ltr == 'ٱسْم' || ltr == 'باسم' || ltr == 'بٱسْم' || ltr == 'الاسم' || ltr == 'ٱلٱسْم') {
		clrltrs[32].push('اسم','ٱسْم','باسم','بٱسْم','الاسم','ٱلٱسْم','ٱلِٱسْم','بِٱسْم');
		clrltrs[33].push('اسمه','ٱسْمُه','ٱسْمَع','ٱسْمَعُوا');
	}
}

$("body").on('click', function(){ifade.placeholder = "copy & paste your own QURAN text\n...or start writing arabic";}); // refreshes placeholder if you don't enter sura value and click on body

function renklendir(ltr)
{
	document.documentElement.style.cursor = "wait";
	loading();

	var varmı = 0;
	for(var r = 0; r < 29; r++) // 29 harfli renklendirme matrisi içinde
		if(clrltrs[r][0] == ltr) // harf varsa
			varmı = 1;
		
	if(varmı == 1){ // harf varsa o harfi çıkar/sil:
		if(ltr == 'ا') {
			clrltrs[0].splice(0,clrltrs[0].length);
			clrltrs[34].splice(0,clrltrs[34].length);
			clrltrs[36].splice(0,clrltrs[36].length);
		}
		else if(ltr == 'ب') clrltrs[1].splice(0,2);
		else if(ltr == 'ج') clrltrs[2].splice(0,2);
		else if(ltr == 'د') clrltrs[3].pop();
		else if(ltr == 'ه') clrltrs[4].splice(0,2);
		else if(ltr == 'و') clrltrs[5].splice(0,2);
		else if(ltr == 'ز') clrltrs[6].splice(0,2);
		else if(ltr == 'ح') clrltrs[7].pop();
		else if(ltr == 'ط') clrltrs[8].pop();
		else if(ltr == 'ي') clrltrs[9].splice(0,4);
		else if(ltr == 'ك') clrltrs[10].splice(0,4);
		else if(ltr == 'ل') {
			clrltrs[11].splice(0,clrltrs[11].length);
			clrltrs[34].splice(0,clrltrs[34].length);
			clrltrs[35].splice(0,clrltrs[35].length);
		}
		else if(ltr == 'م') clrltrs[12].pop();
		else if(ltr == 'ن') clrltrs[13].pop();
		else if(ltr == 'س') clrltrs[14].pop();
		else if(ltr == 'ع') clrltrs[15].pop();
		else if(ltr == 'ف') clrltrs[16].splice(0,3);
		else if(ltr == 'ص') clrltrs[17].pop();
		else if(ltr == 'ق') clrltrs[18].splice(0,2);
		else if(ltr == 'ر') clrltrs[19].pop();
		else if(ltr == 'ش') clrltrs[20].pop();
		else if(ltr == 'ت') clrltrs[21].pop();
		else if(ltr == 'ث') clrltrs[22].pop();
		else if(ltr == 'خ') clrltrs[23].pop();
		else if(ltr == 'ذ') clrltrs[24].pop();
		else if(ltr == 'ض') clrltrs[25].pop();
		else if(ltr == 'ظ') clrltrs[26].pop();
		else if(ltr == 'غ') clrltrs[27].pop();
		else if(ltr == 'الله') {
			clrltrs[28].splice(0,6);
			clrltrs[29].splice(0,6);
		}
		else if(ltr == 'الرحمن') clrltrs[30].splice(0,4);
		else if(ltr == 'الرحيم') clrltrs[31].splice(0,5);
		else if(ltr == 'اسم') {
			clrltrs[32].splice(0,8);
			clrltrs[33].splice(0,4);
		}
	}
	else{ // harf yoksa o harfi renklendirilecek harflere kat
		if(ltr == 'ا') {
			clrltrs[0].push('ا','ء','ـٔ','آ','ٱ','أ','إ');
			if(clrltrs[11][0] == 'ل') clrltrs[34] = ['ﻻ','ﻹ','ﻷ','ﻵ','لَا','لِأ','لْأ','لَّا','لَٱ','لًا','لْإ','لَأ','لِٱ','لًّا','لَّٱ','لِّأ','لَإ','لِإ','لا'];
			clrltrs[36] = ['ﻻ','ﻹ','ﻷ','ﻵ','لَا','لِأ','لْأ','لَّا','لَٱ','لًا','لْإ','لَأ','لِٱ','لًّا','لَّٱ','لِّأ','لَإ','لِإ','لا'];
		}
		else if(ltr == 'ب') clrltrs[1].push('ب','پ');
		else if(ltr == 'ج') clrltrs[2].push('ج','چ');
		else if(ltr == 'د') clrltrs[3].push('د');
		else if(ltr == 'ه') clrltrs[4].push('ه','ة');
		else if(ltr == 'و') clrltrs[5].push('و','ؤ');
		else if(ltr == 'ز') clrltrs[6].push('ز','ژ');
		else if(ltr == 'ح') clrltrs[7].push('ح');
		else if(ltr == 'ط') clrltrs[8].push('ط');
		else if(ltr == 'ي') clrltrs[9].push('ي','ی','ئ','ى');
		else if(ltr == 'ك') clrltrs[10].push('ك','ک','گ','ڭ');
		else if(ltr == 'ل') {
			clrltrs[11].push('ل');
			if(clrltrs[0][0] == 'ا') clrltrs[34] = ['ﻻ','ﻹ','ﻷ','ﻵ','لَا','لِأ','لْأ','لَّا','لَٱ','لًا','لْإ','لَأ','لِٱ','لًّا','لَّٱ','لِّأ','لَإ','لِإ','لا'];
			clrltrs[35] = ['ﻻ','ﻹ','ﻷ','ﻵ','لَا','لِأ','لْأ','لَّا','لَٱ','لًا','لْإ','لَأ','لِٱ','لًّا','لَّٱ','لِّأ','لَإ','لِإ','لا'];
		}
		else if(ltr == 'م') clrltrs[12].push('م');
		else if(ltr == 'ن') clrltrs[13].push('ن');
		else if(ltr == 'س') clrltrs[14].push('س');
		else if(ltr == 'ع') clrltrs[15].push('ع');
		else if(ltr == 'ف') clrltrs[16].push('ف','ڢ','ڤ');
		else if(ltr == 'ص') clrltrs[17].push('ص');
		else if(ltr == 'ق') clrltrs[18].push('ق','ڨ');
		else if(ltr == 'ر') clrltrs[19].push('ر');
		else if(ltr == 'ش') clrltrs[20].push('ش');
		else if(ltr == 'ت') clrltrs[21].push('ت');
		else if(ltr == 'ث') clrltrs[22].push('ث');
		else if(ltr == 'خ') clrltrs[23].push('خ');
		else if(ltr == 'ذ') clrltrs[24].push('ذ');
		else if(ltr == 'ض') clrltrs[25].push('ض');
		else if(ltr == 'ظ') clrltrs[26].push('ظ');
		else if(ltr == 'غ') clrltrs[27].push('غ');
		else if(ltr == 'الله') {
			clrltrs[28].push('الله','لله','ٱللَّه','لِلَّه','لِّلَّه','آللَّه');
			clrltrs[29].push('اللهم','ٱللَّهُم','اللهو','ٱللَّهْو','اللهب','ٱللَّهَب');
		}
		else if(ltr == 'الرحمن') clrltrs[30].push('الرحمن','رحمن','ٱلرَّحْمَـٰن','رَّحْمَـٰن');
		else if(ltr == 'الرحيم') clrltrs[31].push('الرحيم','رحيم','ٱلرَّحِيم','رَّحِيم','رَحِيم');
		else if(ltr == 'اسم') {
			clrltrs[32].push('اسم','ٱسْم','باسم','بٱسْم','الاسم','ٱلٱسْم','ٱلِٱسْم','بِٱسْم');
			clrltrs[33].push('اسمه','ٱسْمُه','ٱسْمَع','ٱسْمَعُوا');
		}
	}
	rengarenk();
}

function rengarenk()
{
	$('textarea').highlightWithinTextarea({
		highlight:
		[
			{ highlight: clrltrs[34], className: 'lamelif' },
			{ highlight: clrltrs[36], className: 'lamelifinElifi' },
			{ highlight: clrltrs[35], className: 'lamelifinLamı' },
			{ highlight: clrltrs[0], className: 'ا' },
			{ highlight: clrltrs[1], className: 'ب' },
			{ highlight: clrltrs[2], className: 'ج' },
			{ highlight: clrltrs[3], className: 'د' },
			{ highlight: clrltrs[4], className: 'ه' },
			{ highlight: clrltrs[5], className: 'و' },
			{ highlight: clrltrs[6], className: 'ز' },
			{ highlight: clrltrs[7], className: 'ح' },
			{ highlight: clrltrs[8], className: 'ط' },
			{ highlight: clrltrs[9], className: 'ي' },
			{ highlight: clrltrs[10], className: 'ك' },
			{ highlight: clrltrs[11], className: 'ل' },
			{ highlight: clrltrs[12], className: 'م' },
			{ highlight: clrltrs[13], className: 'ن' },
			{ highlight: clrltrs[14], className: 'س' },
			{ highlight: clrltrs[15], className: 'ع' },
			{ highlight: clrltrs[16], className: 'ف' },
			{ highlight: clrltrs[17], className: 'ص' },
			{ highlight: clrltrs[18], className: 'ق' },
			{ highlight: clrltrs[19], className: 'ر' },
			{ highlight: clrltrs[20], className: 'ش' },
			{ highlight: clrltrs[21], className: 'ت' },
			{ highlight: clrltrs[22], className: 'ث' },
			{ highlight: clrltrs[23], className: 'خ' },
			{ highlight: clrltrs[24], className: 'ذ' },
			{ highlight: clrltrs[25], className: 'ض' },
			{ highlight: clrltrs[26], className: 'ظ' },
			{ highlight: clrltrs[27], className: 'غ' },
			{ highlight: clrltrs[28], className: 'الله' },
			{ highlight: clrltrs[29], className: 'endSuffixedSoNotCounted' },
			{ highlight: clrltrs[30], className: 'الرحمن' },
			{ highlight: clrltrs[31], className: 'الرحيم' },
			{ highlight: clrltrs[32], className: 'اسم' },
			{ highlight: clrltrs[33], className: 'endSuffixedSoNotCounted' }
		]
	})
	setTimeout(function(){
		$(window).trigger("resize");
		loaded();
		document.documentElement.style.cursor = "unset";
	}, 1000) // bug fix for: /#ovpl=0&onv=1&sura=10&verse=10&count=الله
}

$("#kopyala").on('click', message);

function message() {

	var surebir = sure1.value;
	var sureiki = sure2.value;
	var ayetbir1 = ayet1.value;
	var ayetiki2 = ayet2.value;
	var ovpl = document.getElementById('ovpl');
	var sn = document.getElementById('sn');

    var kopyalamaLinki = "19x334.github.io/#"
    
    if (surebir) {
		if (ayetbir1) {
			if (sureiki) {
				if (ayetiki2) {
					if (sayı == 0) {
						if (ovpl.checked) {
							if (sn.checked) {
								mesaj = kopyalamaLinki+"ovpl=1"+"&onv=1"+"&sura="+surebir+"&verse="+ayetbir1+"&sura2="+sureiki+"&verse2="+ayetiki2 + "\n\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
							}
							else{
								mesaj = kopyalamaLinki+"ovpl=1"+"&onv=0"+"&sura="+surebir+"&verse="+ayetbir1+"&sura2="+sureiki+"&verse2="+ayetiki2 + "\n\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
							}
						}
						else {
							if (sn.checked) {
								mesaj = kopyalamaLinki+"ovpl=0"+"&onv=1"+"&sura="+surebir+"&verse="+ayetbir1+"&sura2="+sureiki+"&verse2="+ayetiki2 + "\n\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
							}
							else{
								mesaj = kopyalamaLinki+"ovpl=0"+"&onv=0"+"&sura="+surebir+"&verse="+ayetbir1+"&sura2="+sureiki+"&verse2="+ayetiki2 + "\n\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
							}
						}
					}
					else {
						if (ovpl.checked) {
							if (sn.checked) {
								mesaj = kopyalamaLinki+"ovpl=1"+"&onv=1"+"&sura="+surebir+"&verse="+ayetbir1+"&sura2="+sureiki+"&verse2="+ayetiki2+"&count="+sclnhrf + "\n\n" + "Total " + metin + sayı + "\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
							}
							else{
								mesaj = kopyalamaLinki+"ovpl=1"+"&onv=0"+"&sura="+surebir+"&verse="+ayetbir1+"&sura2="+sureiki+"&verse2="+ayetiki2+"&count="+sclnhrf + "\n\n" + "Total " + metin + sayı + "\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
							}
						}
						else {
							if (sn.checked) {
								mesaj = kopyalamaLinki+"ovpl=0"+"&onv=1"+"&sura="+surebir+"&verse="+ayetbir1+"&sura2="+sureiki+"&verse2="+ayetiki2+"&count="+sclnhrf + "\n\n" + "Total " + metin + sayı + "\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
							}
							else{
								mesaj = kopyalamaLinki+"ovpl=0"+"&onv=0"+"&sura="+surebir+"&verse="+ayetbir1+"&sura2="+sureiki+"&verse2="+ayetiki2+"&count="+sclnhrf + "\n\n" + "Total " + metin + sayı + "\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
							}
						}
					}
				}
				else {
					if (sayı == 0) {
						if (ovpl.checked) {
							if (sn.checked) {
								mesaj = kopyalamaLinki+"ovpl=1"+"&onv=1"+"&sura="+surebir+"&verse="+ayetbir1+"&sura2="+sureiki + "\n\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
							}
							else{
								mesaj = kopyalamaLinki+"ovpl=1"+"&onv=0"+"&sura="+surebir+"&verse="+ayetbir1+"&sura2="+sureiki + "\n\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
							}
						}
						else {
							if (sn.checked) {
								mesaj = kopyalamaLinki+"ovpl=0"+"&onv=1"+"&sura="+surebir+"&verse="+ayetbir1+"&sura2="+sureiki + "\n\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
							}
							else{
								mesaj = kopyalamaLinki+"ovpl=0"+"&onv=0"+"&sura="+surebir+"&verse="+ayetbir1+"&sura2="+sureiki + "\n\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
							}
						}
					}
					else {
						if (ovpl.checked) {
							if (sn.checked) {
								mesaj = kopyalamaLinki+"ovpl=1"+"&onv=1"+"&sura="+surebir+"&verse="+ayetbir1+"&sura2="+sureiki+"&count="+sclnhrf + "\n\n" + "Total " + metin + sayı + "\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
							}
							else{
								mesaj = kopyalamaLinki+"ovpl=1"+"&onv=0"+"&sura="+surebir+"&verse="+ayetbir1+"&sura2="+sureiki+"&count="+sclnhrf + "\n\n" + "Total " + metin + sayı + "\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
							}	
						}
						else {
							if (sn.checked) {
								mesaj = kopyalamaLinki+"ovpl=0"+"&onv=1"+"&sura="+surebir+"&verse="+ayetbir1+"&sura2="+sureiki+"&count="+sclnhrf + "\n\n" + "Total " + metin + sayı + "\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
							}
							else{
								mesaj = kopyalamaLinki+"ovpl=0"+"&onv=0"+"&sura="+surebir+"&verse="+ayetbir1+"&sura2="+sureiki+"&count="+sclnhrf + "\n\n" + "Total " + metin + sayı + "\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
							}
						}
					}
				}
			}
			else {
				if (sayı == 0) {
					if (ovpl.checked) {
						if (sn.checked) {
							mesaj = kopyalamaLinki+"ovpl=1"+"&onv=1"+"&sura="+surebir+"&verse="+ayetbir1 + "\n\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime;
						}
						else{
							mesaj = kopyalamaLinki+"ovpl=1"+"&onv=0"+"&sura="+surebir+"&verse="+ayetbir1 + "\n\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime;
						}
					}
					else {
						if (sn.checked) {
							mesaj = kopyalamaLinki+"ovpl=0"+"&onv=1"+"&sura="+surebir+"&verse="+ayetbir1 + "\n\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime;
						}
						else{
							mesaj = kopyalamaLinki+"ovpl=0"+"&onv=0"+"&sura="+surebir+"&verse="+ayetbir1 + "\n\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime;
						}
					}
				}
				else {
					if (ovpl.checked) {
						if (sn.checked) {
							mesaj = kopyalamaLinki+"ovpl=1"+"&onv=1"+"&sura="+surebir+"&verse="+ayetbir1+"&count="+sclnhrf + "\n\n" + "Total " + metin + sayı + "\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime;
						}
						else{
							mesaj = kopyalamaLinki+"ovpl=1"+"&onv=0"+"&sura="+surebir+"&verse="+ayetbir1+"&count="+sclnhrf + "\n\n" + "Total " + metin + sayı + "\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime;
						}
					}
					else{
						if (sn.checked) {
							mesaj = kopyalamaLinki+"ovpl=0"+"&onv=1"+"&sura="+surebir+"&verse="+ayetbir1+"&count="+sclnhrf + "\n\n" + "Total " + metin + sayı + "\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime;
						}
						else{
							mesaj = kopyalamaLinki+"ovpl=0"+"&onv=0"+"&sura="+surebir+"&verse="+ayetbir1+"&count="+sclnhrf + "\n\n" + "Total " + metin + sayı + "\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime;
						}
					}
				}
			}
		}
		else {
			if (sayı == 0) {
				if (ovpl.checked) {
					if (sn.checked) {
						mesaj = kopyalamaLinki+"ovpl=1"+"&onv=1"+"&sura="+surebir + "\n\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
					}
					else{
						mesaj = kopyalamaLinki+"ovpl=1"+"&onv=0"+"&sura="+surebir + "\n\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
					}
				}
				else{
					if (sn.checked) {
						mesaj = kopyalamaLinki+"ovpl=0"+"&onv=1"+"&sura="+surebir + "\n\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
					}
					else{
						mesaj = kopyalamaLinki+"ovpl=0"+"&onv=0"+"&sura="+surebir + "\n\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
					}
				}
			}
			else {
				if (ovpl.checked) {
					if (sn.checked) {
						mesaj = kopyalamaLinki+"ovpl=1"+"&onv=1"+"&sura="+surebir+"&count="+sclnhrf + "\n\n" + "Total " + metin + sayı + "\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
					}
					else{
						mesaj = kopyalamaLinki+"ovpl=1"+"&onv=0"+"&sura="+surebir+"&count="+sclnhrf + "\n\n" + "Total " + metin + sayı + "\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
					}
				}
				else {
					if (sn.checked) {
						mesaj = kopyalamaLinki+"ovpl=0"+"&onv=1"+"&sura="+surebir+"&count="+sclnhrf + "\n\n" + "Total " + metin + sayı + "\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
					}
					else{
						mesaj = kopyalamaLinki+"ovpl=0"+"&onv=0"+"&sura="+surebir+"&count="+sclnhrf + "\n\n" + "Total " + metin + sayı + "\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
					}
				}
			}
		}
	}
	else {
		if (sayı == 0) {
			if (ayet_sayisi) {
				if (ovpl.checked) {
					if (sn.checked) {
						mesaj = kopyalamaLinki +"ovpl=1"+"&onv=1"+ "&statement=" + inputValue.replace(/[ ]+/gim, "_").replace(/[\n]+/gim, "-") + "\n\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
					}
					else{
						mesaj = kopyalamaLinki +"ovpl=1"+"&onv=0"+ "&statement=" + inputValue.replace(/[ ]+/gim, "_").replace(/[\n]+/gim, "-") + "\n\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
					}
				}
				else {
					if (sn.checked) {
						mesaj = kopyalamaLinki +"ovpl=0"+"&onv=1"+ "&statement=" + inputValue.replace(/[ ]+/gim, "_").replace(/[\n]+/gim, "-") + "\n\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
					}
					else{
						mesaj = kopyalamaLinki +"ovpl=0"+"&onv=0"+ "&statement=" + inputValue.replace(/[ ]+/gim, "_").replace(/[\n]+/gim, "-") + "\n\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
					}
				}
			}
			else {
				if (ovpl.checked) {
					if (sn.checked) {
						mesaj = kopyalamaLinki +"ovpl=1"+"&onv=1"+ "&statement=" + inputValue.replace(/[ ]+/gim, "_").replace(/[\n]+/gim, "-") + "\n\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime;
					}
					else{
						mesaj = kopyalamaLinki +"ovpl=1"+"&onv=0"+ "&statement=" + inputValue.replace(/[ ]+/gim, "_").replace(/[\n]+/gim, "-") + "\n\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime;
					}
				}
				else {
					if (sn.checked) {
						mesaj = kopyalamaLinki +"ovpl=0"+"&onv=1"+ "&statement=" + inputValue.replace(/[ ]+/gim, "_").replace(/[\n]+/gim, "-") + "\n\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime;
					}
					else{
						mesaj = kopyalamaLinki +"ovpl=0"+"&onv=0"+ "&statement=" + inputValue.replace(/[ ]+/gim, "_").replace(/[\n]+/gim, "-") + "\n\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime;
					}
				}
			}
		}
		else {
			if (ayet_sayisi) {
				if (ovpl.checked) {
					if (sn.checked) {
						mesaj = kopyalamaLinki +"ovpl=1"+"&onv=1"+ "&statement=" + inputValue.replace(/[ ]+/gim, "_").replace(/[\n]+/gim, "-")+"&count="+sclnhrf + "\n\n" + "Total " + metin + sayı + "\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
					}
					else{
						mesaj = kopyalamaLinki +"ovpl=1"+"&onv=0"+ "&statement=" + inputValue.replace(/[ ]+/gim, "_").replace(/[\n]+/gim, "-")+"&count="+sclnhrf + "\n\n" + "Total " + metin + sayı + "\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
					}
				}
				else {
					if (sn.checked) {
						mesaj = kopyalamaLinki +"ovpl=0"+"&onv=1"+ "&statement=" + inputValue.replace(/[ ]+/gim, "_").replace(/[\n]+/gim, "-")+"&count="+sclnhrf + "\n\n" + "Total " + metin + sayı + "\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
					}
					else{
						mesaj = kopyalamaLinki +"ovpl=0"+"&onv=0"+ "&statement=" + inputValue.replace(/[ ]+/gim, "_").replace(/[\n]+/gim, "-")+"&count="+sclnhrf + "\n\n" + "Total " + metin + sayı + "\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
					}
				}
			}
			else {
				if (ovpl.checked) {
					if (sn.checked) {
						mesaj = kopyalamaLinki +"ovpl=1"+"&onv=1"+ "&statement=" + inputValue.replace(/[ ]+/gim, "_").replace(/[\n]+/gim, "-")+"&count="+sclnhrf + "\n\n" + "Total " + metin + sayı + "\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime;
					}
					else{
						mesaj = kopyalamaLinki +"ovpl=1"+"&onv=0"+ "&statement=" + inputValue.replace(/[ ]+/gim, "_").replace(/[\n]+/gim, "-")+"&count="+sclnhrf + "\n\n" + "Total " + metin + sayı + "\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime;
					}
				}
				else {
					if (sn.checked) {
						mesaj = kopyalamaLinki +"ovpl=0"+"&onv=1"+ "&statement=" + inputValue.replace(/[ ]+/gim, "_").replace(/[\n]+/gim, "-")+"&count="+sclnhrf + "\n\n" + "Total " + metin + sayı + "\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime;
					}
					else{
						mesaj = kopyalamaLinki +"ovpl=0"+"&onv=0"+ "&statement=" + inputValue.replace(/[ ]+/gim, "_").replace(/[\n]+/gim, "-")+"&count="+sclnhrf + "\n\n" + "Total " + metin + sayı + "\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime;
					}
				}
			}
		}
	}
}

function colorButton(ltr) {
	if ($("input[id=" + ltr + "]").prop('checked') == true) {
		$("p[id=" + ltr + "]").removeClass("not-selected");
		$("p[id=" + ltr + "]").addClass(ltr);
	}
	else {
		$("p[id=" + ltr + "]").removeClass(ltr);
		$("p[id=" + ltr + "]").addClass("not-selected");
	}
}

$(window).load(getfromlink);

var nameFlag = 1;
var ifadeFlag = 0;

function getfromlink() {
	var hashParams = window.location.hash.substr(1).replace(/[_]+/gim, " ").replace(/[-]+/gim, "\n").split('&');

	if (window.location.hash) {

		document.documentElement.style.cursor = "wait";
		loading();
		
		alertFlag = 0;
		ifadeFlag = 0;

		var sure, harf;
		for (var i = 0; i < hashParams.length; i++) {
			var p = decodeURIComponent(hashParams[i]).split('=');
			if (p[0] === 'statement') {
				ifadeFlag = 1;
				ifade.value = p[1];
				$("#ifade").trigger('input');
			}
			else if (p[0] === 'sura') {
				isColorMuqatta = 0;
				sure = p[1];
				sure1.value = sure;
				$("#ayet").trigger('input'); // sure değil ayet trigger edilmeli ki opener fonksiyonu istediğim koşullarda çalışsın.. opener fonksiyonunun sure de çalışmasını istemiyorum çünkü mesela 2:1 ile 68:1 arasını rahatça açıp istediğim isimleri saydırabilmek istiyorum rahatça inşALLAH
			}
			else if (p[0] === 'verse') {
				ayet1.value = p[1];
			}
			else if (p[0] === 'sura2') {
				sure2.value = p[1];
			}
			else if (p[0] === 'verse2') {
				ayet2.value = p[1];
			}
			else if (p[0] === 'count') {
				nameFlag = 0;
				setTimeout(function(){
					for (var j = 0; j < p[1].split('+').length; j++) {
						harf = p[1].split('+')[j];
						renklendirr(harf);
					}
					rengarenk();
					for (var j = 0; j < p[1].split('+').length; j++) {
						harf = p[1].split('+')[j];
						document.getElementById(harf).checked = true;    $("#"+harf).trigger('change');    colorButton(harf); // mukatta harfinin/harflerinin toplam sayısı için
					}
					nameFlag = 1;
					setTimeout(function(){
						loaded();
						document.documentElement.style.cursor = "unset";
					}, 1000);
				}, 1000);
			}
			else if (p[0] == 'ovpl') {
				if (p[1] == '1') document.getElementById("ovpl").checked = true;
				else document.getElementById("ovpl").checked = false;
				$('#ovpl').trigger('change'); // bunu kaldırma inşALLAH!
			}
			else if (p[0] == 'onv') {
				if (p[1] == '1') document.getElementById('sn').checked = true;
				else document.getElementById('sn').checked = false;
			}
		}
		resize_ob.observe(ifade);
		$(window).trigger("resize");
		alertt();
		if(ifadeFlag == 1){
			kalem();
			document.documentElement.style.cursor = "unset";
		}
	}
}

/*
  This function copies the text from the textarea to a div 
  so we can check the height and then get the number of lines 
  from that information
*/
function copyText() {
  	"use strict";

  	//variable to hold and manipulate the value of our textarea
  	var txtBoxVal = ifade.value;

  	//regular expression to replace new lines with line breaks
  	txtBoxVal = txtBoxVal.replace(/(?:\r\n|\r|\n)/g, ' <br />');

  	//copies the text from the textarea to the #copyText div
  	document.getElementById('copyText').innerHTML = txtBoxVal;
}

var lineSums;

function addLines(numberOfLines) {
	"use strict";
	var x = 1, holder = '';
	for (x = 0; x < numberOfLines; x++) {
    	holder += '<div class="row" id="' + x + '">' + lineSums[x] + '</div>';
	}
	document.getElementById('satirlar').innerHTML = holder;

	if(windowWidth < 768) document.getElementById("0").style.setProperty('border-top', '1px solid #999', 'important');
	else document.getElementById("0").style.setProperty('border-top', '0px', 'important');
	
	document.getElementById("0").style.setProperty('margin-top', '-1px', 'important');
}

$(window).resize(copyTextSizer);
$(document).ready(copyTextSizer);

function widther(){
	var width = ifade.clientWidth;
	// controlWidth : ctrlWdth
	var ctrlWdth = ifade.getBoundingClientRect().right - ifade.getBoundingClientRect().left;
	
	var browser = detectBrowser();
	// ALLAH'IM, SANA SONSUZ TEŞEKKÜRLER EDERİM SONUNDA BU YÖNTEMLE(dead reckoning ve exception handling ile) RENKLENDİRMELERİN KAYMASI CHROME FLOATİNG POİNT ARITHMETIC BUG'INI TEMELİNDEN DÜZELTEBİLDİM! =) 1483 px genişliğinde 13:41 ayetinin 2. satırının taşması gibi durumları henüz düzeltemedim.. ALLAH dilerse düzelteceğim o gibi durumları da...
	if(browser == "Chrome" || browser == "Edge")
	{ // safari uses different system than edge and chrome, firefox has no issues about shifting of color markings with WILL OF 1
		if(document.getElementById("coloredDiv")) {
			if(document.getElementById("coloredDiv").getBoundingClientRect().height - document.getElementById('copyText').getBoundingClientRect().height != 46)
			{
				console.log("renklendirmelerdeki kayma düzeltilmeye çalışılıyor...");
				if(13 == sure1.value && !ayet1.value && (document.getElementById("ا").checked || document.getElementById("ل").checked || document.getElementById("م").checked || document.getElementById("ر").checked) )
				{
					// if (window.innerWidth == 1522 || 1497 || 1424 || 1325 || 1227 || 833)
					if(933 == ctrlWdth || 917 == ctrlWdth || 870 == ctrlWdth || 807 == ctrlWdth || 744 == ctrlWdth || 492 == ctrlWdth) // when sura is 13 and browser is chrome desktop
						width = ctrlWdth - 14;
					// satırlardaki toplam sayımların denk gelmesi için: if (window.innerWidth == 1422)
					else if(869 == ctrlWdth) // when sura is 13
						width = ctrlWdth - 12.61 * 2;
					/* satırlardaki toplam sayımların denk gelmesi için: if (window.innerWidth == 1583 || 1577 || 1561 || 1524 || 1521 || 1505 || 1499 || 1496
					  || 1464 || 1463 || 1425 || 1341 || 1327 || 1324 || 1305 || 1282
					  || 1267 || 1249 || 1228 || 1225 || 1189 || 1169 || 1147 || 1130
					  || 1125 || 1105 || 1088 || 1086 || 1071 || 1052 || 1049 || 1032
					  || 1024 || 1013 || 1010 || 989 || 972 || 953 || 950
					  || 930 || 914 || 911 || 874 || 869 || 855 || 835
					  || 832 || 816 || 813 || 810 || 796 || 775 || 773
					  || 761)
					*/
					else if(972 == ctrlWdth || 968 == ctrlWdth || 958 == ctrlWdth || 934 == ctrlWdth || 932 == ctrlWdth || 922 == ctrlWdth || 918 == ctrlWdth || 916 == ctrlWdth
						|| 896 == ctrlWdth || 895 == ctrlWdth || 871 == ctrlWdth || 817 == ctrlWdth || 808 == ctrlWdth || 806 == ctrlWdth || 794 == ctrlWdth || 779 == ctrlWdth
						|| 770 == ctrlWdth || 758 == ctrlWdth || 745 == ctrlWdth || 743 == ctrlWdth || 720 == ctrlWdth || 707 == ctrlWdth || 693 == ctrlWdth || 682 == ctrlWdth
						|| 679 == ctrlWdth || 666 == ctrlWdth || 655 == ctrlWdth || 654 == ctrlWdth || 644 == ctrlWdth || 632 == ctrlWdth || 630 == ctrlWdth || 619 == ctrlWdth
						|| 614 == ctrlWdth || 607 == ctrlWdth || 605 == ctrlWdth || 592 == ctrlWdth || 581 == ctrlWdth || 569 == ctrlWdth || 567 == ctrlWdth
						|| 554 == ctrlWdth || 544 == ctrlWdth || 542 == ctrlWdth || 518 == ctrlWdth || 515 == ctrlWdth || 506 == ctrlWdth || 493 == ctrlWdth
						|| 491 == ctrlWdth || 481 == ctrlWdth || 479 == ctrlWdth || 477 == ctrlWdth || 468 == ctrlWdth || 455 == ctrlWdth || 454 == ctrlWdth
						|| 722 == ctrlWdth)
						width = width;
					else {
						width = ctrlWdth - 12.61;
					}
				}
			}
		}
	}
	return width;
}

function copyTextSizer() {

	document.getElementById("copyText").style.setProperty("width", widther() + "px");

	if(document.getElementById("ovpl").checked){
		document.getElementsByClassName("hwt-backdrop")[0].style.setProperty('width', 'max-content', 'important');
		document.getElementsByClassName("hwt-highlights")[0].style.setProperty('width', 'max-content', 'important');
	}
	// jquery ile genişlik ataması yapma inşALLAH çünkü floating point arithmetic hatasına neden oluyor
	// ve bu nedenle renklendirmeler kayıyor bazı genişliklerde chrome ve mobil safari'de
	else if(document.getElementById("coloredDiv"))
		document.getElementById("coloredDiv").style.setProperty("width", widther() + "px");
}
var harfler = ['ء','ـٔ','ا','آ','ٱ','أ','إ','ب','پ','ج','چ','د','ه','ة','و','ؤ','ز','ژ','ح','ط','ی','ي','ئ','ى','ک','ك','گ','ڭ','ل','م','ن','س','ع','ف','ڢ','ڤ','ص','ق','ڨ','ر','ش','ت','ث','خ','ذ','ض','ظ','غ','ﻻ','ﻹ','ﻷ','ﻵ'];

function numaralandır(renderedRows, seçililer){
	var lineSums = new Array(renderedRows.length).fill(0);
	for (var r = 0; r < renderedRows.length; r++) // renderedRows'un ilk satırından son satırına ... kadar
		for(var c = 0; c < renderedRows[r].length; c++) // renderedRows[r] satırının başından sonuna ... kadar
			for(var s = 0; s < seçililer.length; s++) // seçtiğin harfler içerisindeki harflerden
				if(renderedRows[r][c] == seçililer[s] || (renderedRows[r][c].charCodeAt(0) == 1620 && seçililer[s] == 'ـٔ')) // renklendirilmiş her bir karakterin
					lineSums[r]++; // o satırdaki sayısınca o satırın toplam sayısını artır
	return lineSums;
}

function occurrences(string, subString, allowOverlapping) {

    string += "";
    subString += "";
    if (subString.length <= 0) return (string.length + 1);

    var n = 0,
        pos = 0,
        step = allowOverlapping ? 1 : subString.length;

    while (true) {
        pos = string.indexOf(subString, pos);
        if (pos >= 0) {
            ++n;
            pos += step;
        } else break;
    }
    return n;
}

function isimleriNumaralandır(renderedRows, seçililer){
	var lineSums = new Array(renderedRows.length).fill(0);
	for (var r = 0; r < renderedRows.length; r++) // renderedRows'un ilk satırından son satırına ... kadar
		for(var s = 0; s < seçililer.length; s++) // seçtiğin isimler içerisindeki isimler
			if(seçililer[s] == 'اللهم' || seçililer[s] == 'ٱللَّهُم' || seçililer[s] == 'اللهو' || seçililer[s] == 'ٱللَّهْو' || seçililer[s] == 'اللهب' || seçililer[s] == 'ٱللَّهَب' || seçililer[s] == 'اسمه' || seçililer[s] == 'ٱسْمُه' || seçililer[s] == 'ٱسْمَع') lineSums[r] -= occurrences(renderedRows[r], seçililer[s]);
			else lineSums[r] += occurrences(renderedRows[r], seçililer[s]);

	return lineSums;
}

// önce "satır başına 1 ayet"i seçtiğimizde ve sonra renklendirecek harf seçtiğimizde
// hwt classlı katmanların daha sonradan aktif olmasından dolayı
// renklendirmenin tüm yatay yazı alanı boyunca etkili olabilmesi için
// değişiklikleri burada değil renkleriSay() ve renklileriSay() fonksiyonlarının içinde yapıyoruz:
$('.seçenekler').on('change', function(){
	if(document.getElementById("ovpl").checked == true) renkleriSay(); // change this function to renklileriSay() if ALLAH wills;
	else renkleriSay();
});

$(window).resize(function(){
	if(document.getElementById("ovpl").checked == true) renkleriSay(); // change this function to renklileriSay() if ALLAH wills;
	else renkleriSay();
});

var direction;

var alertFlag = 1;

$(window).load(function(){
	if(alertFlag == 1) alertt();
});

var notifications = [];

notifications.push({imageUrl: "pic/book-arabic.png", title: "''These Are Miracles Of THE BOOK!''\n&\n<a href='/Appendix%2024,%20Tampering%20with%20the%20Word%20of%20God.html' target='_blank'>9:128 and 129 are from satan! NOT FROM THE GOD!</a>", html: "<a target='_blank' href='http://honourableQURAN.blogspot.com/p/10.html?m=1#1'>10:1</a>, <a target='_blank' href='http://honourableQURAN.blogspot.com/p/12.html?m=1#1'>12:1</a>, <a target='_blank' href='http://honourableQURAN.blogspot.com/p/13.html?m=1#1'>13:1</a>, <a target='_blank' href='http://honourableQURAN.blogspot.com/p/15.html?m=1#1'>15:1</a>, <a target='_blank' href='http://honourableQURAN.blogspot.com/p/26.html?m=1#1'>26:1-2</a>, <a target='_blank' href='http://honourableQURAN.blogspot.com/p/27.html?m=1#1'>27:1</a>, <a target='_blank' href='http://honourableQURAN.blogspot.com/p/28.html?m=1#1'>28:1-2</a>, <a target='_blank' href='http://honourableQURAN.blogspot.com/p/31.html?m=1#1'>31:1-2</a><br><br><iframe width='100%' height='255' src='https://www.youtube.com/embed/e2myxJRz58Q' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe><br><a target='_blank' href='/Appendix%2024,%20Tampering%20with%20the%20Word%20of%20God.html'><h2 style=' color: red; '>ALLAH HAS PRESERVED QURAN against alterations with THE MIRACLE</a> <a target='_blank' href='https://en.wikipedia.org/wiki/error_correction_code'>Error Correction Code</a> <a target='_blank' href='/Appendix%2024,%20Tampering%20with%20the%20Word%20of%20God.html'>OF 19! BY EXPOSING 2 human made additions: 9:128-129</h2></a><b>Sura 9 is 127 Verses <a target='_blank' href='/Appendix%2024,%20Tampering%20with%20the%20Word%20of%20God.html'>NOT 129 verses!</a> and QURAN is Total 6346 = 19 x 334 Verses! (6+3+4+6 = 19) <a target='_blank' href='/Appendix%2024,%20Tampering%20with%20the%20Word%20of%20God.html'>NOT 6348 verses!</a> ALLAH HAS PRESERVED QURAN against alterations by THE MIRACLE ERROR CORRECTION CODE OF 19 and REVEALED that <a target='_blank' href='/Appendix%2024,%20Tampering%20with%20the%20Word%20of%20God.html'>2 fabrications added by hypocrites and idolaters</a> to THE QURAN after prophet's death.</b> <a target='_blank' href='/Appendix%2024,%20Tampering%20with%20the%20Word%20of%20God.html'><b>For More Information READ HERE!</a><br><br>< 19 ><br><br><a target='_blank' href='http://honourableQURAN.blogspot.com/p/3.html?m=1#78'>3:78</a> and from among them is a group who twist their tongues with The Book so that you may think it(9:128-129) is from The Book, while <a target='_blank' href='/Appendix%2024,%20Tampering%20with%20the%20Word%20of%20God.html'>it(9:128-129) is NOT FROM THE BOOK</a>, and they say it(9:128-129) is from ALLAH while <a target='_blank' href='/Appendix%2024,%20Tampering%20with%20the%20Word%20of%20God.html'>it(9:128-129) is NOT FROM ALLAH</a>, and they say about ALLAH lies while they know.<br><br><a target='_blank' href='http://honourableQURAN.blogspot.com/p/3.html?m=1#79'>3:79</a> <a target='_blank' href='/Appendix%2024,%20Tampering%20with%20the%20Word%20of%20God.html'>NEVER would a human being whom GOD blessed with the Scripture and prophethood say to the people</a>, ''idolize me beside GOD.'' Instead, (he would say), ''Devote yourselves absolutely to your LORD ALONE,'' According to the Scripture you preach and the Teachings you learn.<br><br><a target='_blank' href='http://honourableQURAN.blogspot.com/p/3.html?m=1#80'>3:80</a> nor would he command you to idolize the angels and the prophets as lords. <a target='_blank' href='/Appendix%2024,%20Tampering%20with%20the%20Word%20of%20God.html'>would he exhort you to disbelieve after Becoming Surrenderers?</a><br><br><a target='_blank' href='http://honourableQURAN.blogspot.com/p/3.html?m=1#81'>3:81</a> ALLAH took a covenant from the prophets, saying, ''I will give you the scripture and wisdom. afterwards, a Messenger(<a target='_blank' href='https://www.youtube.com/watch?v=j6jVD6actVc'>Rashad Khalifa</a>) will come to confirm all existing scriptures. you shall believe in Him and support Him.'' HE said, ''Do you Agree with This, and Pledge to Fulfill This Covenant?'' they said, ''we Agree.'' HE Said, ''you have thus borne witness, and I BEAR WITNESS along with you.''<br><br>< 19 ><br><br><a target='_blank' href='http://honourableQURAN.blogspot.com/p/10.html?m=1#15'>10:15</a> When OUR REVELATIONS are recited to them, those who do not expect to meet US say, <a target='_blank' href='/Appendix%2024,%20Tampering%20with%20the%20Word%20of%20God.html'>''bring a quran other than THIS(QURAN), or change IT(QURAN)!'' Say, ''i can NOT possibly change IT(QURAN) on my own. i simply follow WHAT IS REVEALED to me. i fear, if i disobey my LORD, The Retribution of An Awesome Day.''</a><br><br><a target='_blank' href='http://honourableQURAN.blogspot.com/p/10.html?m=1#16'>10:16</a> Say, ''Had GOD willed, i would not have recited it to you, nor would you have known anything about IT(QURAN). i have lived among you a whole life before this. do you not understand?''<br><br><a target='_blank' href='http://honourableQURAN.blogspot.com/p/10.html?m=1#17'>10:17</a> <a target='_blank' href='/Appendix%2024,%20Tampering%20with%20the%20Word%20of%20God.html'>who is more evil than one who fabricates lies about GOD, or rejects HIS REVELATIONS.</a> Certainly, the transgressors never succeed.<br><br><a target='_blank' href='http://honourableQURAN.blogspot.com/p/10.html?m=1#61'>10:61</a> you do not get into any situation, nor do you recite from anything from QURAN, nor do you do from any work, without US being witnesses up on <a target='_blank' href='/Appendix%2024,%20Tampering%20with%20the%20Word%20of%20God.html'>when you have overflowed(9:128-129) into IT(QURAN)</a>. not even an atom's weight is out of your LORD'S CONTROL, be it in the heavens or the earth. nor is there anything smaller than an atom, or larger, that is not recorded in a Profound Record.<br><br>< 19 ><br><br><a target='_blank' href='http://honourableQURAN.blogspot.com/p/17.html?m=1#73'>17:73</a> <a target='_blank' href='/Appendix%2024,%20Tampering%20with%20the%20Word%20of%20God.html'>they almost diverted you from THE REVELATIONS WE HAVE GIVEN you. they wanted you to fabricate something else, in order to consider you a friend.</a><br><br><a target='_blank' href='http://honourableQURAN.blogspot.com/p/17.html?m=1#74'>17:74</a> If it were not that WE STRENGTHENED you, you almost leaned towards them just a little bit.<br><br><a target='_blank' href='http://honourableQURAN.blogspot.com/p/17.html?m=1#75'>17:75</a> Had you done that, WE would have doubled the retribution for you in this life, and after death, and you would have found no one to help you against US.<br><br>< 19 ><br><br><a target='_blank' href='http://honourableQURAN.blogspot.com/p/46.html?m=1#8'>46:8</a> when they say, ''He fabricated this(<a target='_blank' href='https://github.com/Rashad-Khalifa/QURAN-VISUAL-PRESENTATION-OF-THE-MIRACLE/blob/main/English.pdf'>MIRACLE 19</a>),'' say, ''if I fabricated this(<a target='_blank' href='https://github.com/Rashad-Khalifa/QURAN-VISUAL-PRESENTATION-OF-THE-MIRACLE/blob/main/English.pdf'>MIRACLE 19</a>), then you cannot protect me from ALLAH. HE is fully aware of <a target='_blank' href='/Appendix%2024,%20Tampering%20with%20the%20Word%20of%20God.html'>what(9:128-129) you have overflowed into IT(QURAN)</a>. HE SUFFICES AS A WITNESS between me and you. HE IS THE FORGIVER, THE MERCIFUL.''<br><br><a target='_blank' href='http://honourableQURAN.blogspot.com/p/46.html?m=1#10'>46:10</a> say, ''What if IT(<a target='_blank' href='https://github.com/Rashad-Khalifa/QURAN-VISUAL-PRESENTATION-OF-THE-MIRACLE/blob/main/English.pdf'>MIRACLE 19</a>) IS FROM ALLAH and you disbelieved in IT(<a target='_blank' href='https://github.com/Rashad-Khalifa/QURAN-VISUAL-PRESENTATION-OF-THE-MIRACLE/blob/main/English.pdf'>MIRACLE 19</a>)? A Witness from The Children of Israel(<a target='_blank' href='https://www.google.com/search?client=safari&rls=en&q=judah+ben+samuel&ie=utf-8&oe=utf-8'>Judah ben Samuel</a>) has Borne Witness to A Similar Phenomenon(<a target='_blank' href='https://www.google.com/search?client=safari&rls=en&q=sefer+gematriot&ie=utf-8&oe=utf-8'>CODE 19 IN THE TORAH</a>), and He has Believed, while you have turned arrogant! Surely, ALLAH DOES NOT guide the wicked people.''<br><br>< 19 ><br><br><a target='_blank' href='http://honourableQURAN.blogspot.com/p/46.html?m=1#10'>48:15</a> those who lagged behind will say, when you venture out to collect the spoils: ''let us follow you!'' <a href='/Appendix%2024,%20Tampering%20with%20the%20Word%20of%20God.html' target='_blank'>they want to change GOD's words.</a> Say, ''you will not follow us; this is what GOD has decreed beforehand.'' they will then say, ''no, you are envious of us.'' Alas, they rarely understood anything!</b>"});
notifications.push({imageUrl: "pic/clean-up.png", title: "Clean Up First!", text: '<a target="_blank" href="http://honourableQURAN.blogspot.com/p/56.html?m=1#77">56:77</a> This is Honourable QURAN!<br><a target="_blank" href="http://honourableQURAN.blogspot.com/p/56.html?m=1#78">56:78</a> In a Protected Book!<br><a target="_blank" href="http://honourableQURAN.blogspot.com/p/56.html?m=1#79">56:79</a> <b>None</b> can touch it except the Cleaned Up!<br><a target="_blank" href="http://honourableQURAN.blogspot.com/p/56.html?m=1#80">56:80</a> <b>A REVELATION FROM THE OWNER OF THE UNIVERSES!</b>'});
notifications.push({imageUrl: "pic/rashad.jpg", title: "<a target='_blank' href='/Quran Hadith Islam/Quran, Hadith, and Islam by Rashad Khalifa, Ph.D.; Submission (Islam).html'>QURAN hadith and ISLAM</a>", text: "<iframe width='100%' height='255' src='https://www.youtube.com/embed/j6jVD6actVc' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe><br><br><b>AFTER MORE THAN 12 YEARS OF COMPUTERIZED RESEARCH OF QURAN, <a target='_blank' href='https://github.com/Rashad-Khalifa/QURAN-VISUAL-PRESENTATION-OF-THE-MIRACLE/blob/main/English.pdf'>PHYSICAL EVIDENCE</a> WAS DISCOVERED <a target='_blank' href='/Appendix%2024,%20Tampering%20with%20the%20Word%20of%20God.html'>PROVING THAT QURAN IS INDEED THE INFALLIBLE AND UNALTERABLE WORD OF ALLAH.</b></a><br><br>The Continued Research then Unveiled a startling FACT; that the extremely popular ''hadith & sunna'' have nothing to do with the prophet muhammad, and that adherence thereto Represents Flagrant Disobedience of ALLAH and HIS Messengers (QURAN <a target='_blank' href='http://honourableQURAN.blogspot.com/p/6.html?m=1#112'><b>6:112</b></a> & <a target='_blank' href='http://honourableQURAN.blogspot.com/p/25.html?m=1#31'><b>25:31</b></a>).<br><br>This Finding Contradicts the beliefs of muslim masses everywhere. As it turned out, Telling the muslims that ''hadith & sunna'' are satanic inventions is the same as telling the christians that jesus is NOT the son of GOD.<br><br>Since the recognition of ''hadith & sunna'' as satanic innovations is <b>SUPPORTED BY <a target='_blank' href='https://github.com/Rashad-Khalifa/QURAN-VISUAL-PRESENTATION-OF-THE-MIRACLE/blob/main/English.pdf'>PHYSICAL EVIDENCE</b></a>, All Freethinking People will Accept <a target='_blank' href='/Quran Hadith Islam/Quran, Hadith, and ISLAM by Rashad Khalifa, Ph.D.; Submission (Islam).html'><b>THE FINDINGS REPORTED IN THIS BOOK(QURAN hadith and ISLAM)</b></a>. For Such People, The Results Include a Totally New Sense of Salvation, and Full Awareness that the muslim masses have fallen victim to satan's schemes.<br><br><a target='_blank' href='https://www.youtube.com/watch?v=j6jVD6actVc'><b>Rashad Khalifa</b></a><br><br>August 19, 1982"});

var uyarı = false;

document.getElementById("uyarı").addEventListener("click", function() {
	uyarı = true;
	alertt();
})

function alertt()
{
	var today = new Date();
	today = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

	var lastVisit = localStorage.getItem('lastVisit');

	if (lastVisit == null || lastVisit != today || uyarı) {

		expressFlag = 0;

		Swal.fire({
			title: notifications[0].title,
			html: notifications[0].html,
			imageUrl: notifications[0].imageUrl,
			imageWidth: 'auto',
			imageHeight: 301,
			imageAlt: 'ALLAH HAS PRESERVED QURAN BY MIRACLE OF 19!'
		}).then((value) => {
			Swal.fire({
				title: notifications[2].title,
				html: notifications[2].text,
				imageUrl: notifications[2].imageUrl,
				imageWidth: 'auto',
				imageHeight: 'auto',
				imageAlt: notifications[2].text
			}).then((value) => {
				Swal.fire({
					title: notifications[1].title,
					html: notifications[1].text,
					imageUrl: notifications[1].imageUrl,
					imageWidth: 'auto',
					imageHeight: 190,
					imageAlt: 'Clean Up!'
				}).then((value) => {
					v = 0; // starts verses from 0
					expressFlag = 1;
				})
			})
		})
		uyarı = false;
	}

	localStorage.setItem('lastVisit', today);
}

$(window).load(yataylaştırıcı);

$('#ovpl').change(function(){
	yataylaştırıcı();
	// önce "satır başına 1 ayet"i seçtiğimizde ve sonra renklendirecek harf seçtiğimizde
	// hwt classlı katmanların daha sonradan aktif olmasından dolayı
	// renklendirmenin tüm yatay yazı alanı boyunca etkili olabilmesi için
	// değişiklikleri burada değil renkleriSay() ve renklileriSay() fonksiyonlarının içinde yapıyoruz:
	if(document.getElementById("ovpl").checked == true) renkleriSay(); // change this function to renklileriSay() if ALLAH wills;
	else renkleriSay();
})

function yataylaştırıcı(){
	// önce "satır başına 1 ayet"i seçtiğimizde ve sonra renklendirecek harf seçtiğimizde renklendirmenin tüm yatay yazı alanı boyunca etkili olabilmesi için:
	if(document.getElementById("ovpl").checked){
		if(detectBrowser() != "Firefox") {
			if(windowWidth < 768) document.getElementById("nextSura").style.marginTop = "24px";
			else document.getElementById("nextSura").style.marginTop = "15px";
		}
		ifade.style.setProperty('white-space', 'pre', 'important');
		ifade.style.setProperty('overflow-x', 'auto', 'important');
		document.getElementById("copyText").style.setProperty('white-space', 'pre', 'important');
		if(document.getElementById("coloredDiv")){
			document.getElementsByClassName("hwt-backdrop")[0].style.setProperty('width', 'max-content', 'important');
			document.getElementsByClassName("hwt-highlights")[0].style.setProperty('white-space', 'pre', 'important');
			document.getElementsByClassName("hwt-highlights")[0].style.setProperty('width', 'max-content', 'important');
		}
	}
	else{
		if(detectBrowser() != "Firefox") {
			if(windowWidth < 768) document.getElementById("nextSura").style.marginTop = "8px";
			else document.getElementById("nextSura").style.marginTop = "0px";
		}
		ifade.style.setProperty('white-space', 'pre-wrap', 'important');
		ifade.style.setProperty('overflow-x', 'hidden', 'important');
		document.getElementById("copyText").style.setProperty('white-space', 'pre-wrap', 'important');
		if(document.getElementById("coloredDiv")){
			document.getElementsByClassName("hwt-backdrop")[0].style.setProperty('width', 'inherit', 'important');
			document.getElementsByClassName("hwt-highlights")[0].style.setProperty('white-space', 'pre-wrap', 'important');

			document.getElementById("coloredDiv").style.setProperty("width", widther() + "px");
		}
	}
}

function renkleriSay()
{
	copyText();
	var renderedRows = getLineBreaks(document.querySelector('.copiedText'));

	var seçililer = []; // seçililer değişkeninin sıfırlanması ve her seferinde büyümemesi için

	if(clrltrs[28] == '' && clrltrs[30] == '' && clrltrs[31] == '' && clrltrs[32] == ''){
		for(var i = 0; i < 52; i++) // 52 harften biri
			for(var r = 0; r < 28; r++) // 28 satırlı
				for(var c = 0; c < clrltrs[r].length; c++) // c sütunlu
					if(clrltrs[r][c] == harfler[i]) // renklendirme matrisi içinde varsa
						seçililer.push(harfler[i]); // o harfleri seç
	
		lineSums = numaralandır(renderedRows, seçililer);
	}
	else{
		for(var i = 0; i < isimler.length; i++) // ALLAH'ın isimlerinden her biri
			for(var r = 28; r < clrltrs.length; r++) // r satırlı
				for(var c = 0; c < clrltrs[r].length; c++) // c sütunlu
					if(clrltrs[r][c] == isimler[i]) // renklendirme matrisi içinde varsa
						seçililer.push(isimler[i]); // o isimleri seç
		
		lineSums = isimleriNumaralandır(renderedRows, seçililer);
	}

	var total, totals = new Array(renderedRows.length).fill(0);
	for(var i = 0; i < renderedRows.length; i++)
	{
		total = 0;
		for(var j = 0; j < i; j++)
			total += lineSums[j];
		totals[i] = total;
	}

	numberOfLines = renderedRows.length;
	addLines(numberOfLines);

	useFirefox();

	$('#ifade').trigger("scroll"); // örneğin 13.sureyi açıp yazı alanını en alta sürükledikten sonra 36. sure açıldığında satırların solundaki numaraların scrollTop değerinin güncellenmesi ve soldaki numaraların yazı alanı en aşağı sürüklenmemiş olmasına rağmen, yazı alanı en aşağıda sürüklenmiş gibi gözükmemesi/oluşan dikey kaymayı gidermek için

	var page = new Page(".row", totals);

	var oldPosition = 0, newPosition;
	//on textarea scroll get active rows
    $("#ifade").scroll(function(event){
		newPosition = $("#ifade").scrollTop();
		if (newPosition > oldPosition) direction = "down";
		else direction = "up";
		oldPosition = newPosition;
        showActiveRows(page.getActiveItem());
    });
}

function useFirefox() {
	if(detectBrowser() != "Firefox") {
		if(document.getElementById("coloredDiv")) {
			if(document.getElementById("coloredDiv").getBoundingClientRect().height - document.getElementById('copyText').getBoundingClientRect().height != 46)
			{
				console.log("renklendirmelerde veya satır sayımlarında kayma oluştu");
				Swal.fire({
					title: "Error of row color countings or shifting of colorings has occured!",
					html: "<p style='font-size: x-large;'>For solution: Change window width or just <a href='https://www.mozilla.org/en/firefox/new/' target='_blank'>use Firefox</a> instead of " + detectBrowser() + "!</p>",
					imageUrl: "pic/firefox.png",
					imageWidth: 'auto',
					imageHeight: 301,
					imageAlt: "Error of row color countings or shifting of colorings has occured!"
				})
			}
		}
	}
}

function showActiveRows(rows){
	if (rows != 0 && rows % 19 == 0) document.getElementById('toplam').innerHTML = divide19(rows);
	else document.getElementById('toplam').innerHTML = rows;
}

var countsOfNameALLAH = [0,2,284,493,722,869,956,1017,1105,1273,1334,1372,1416,1450,1487,1489,1573,1583,1599,1607,1613,1619,1694,1707,1787,1795,1808,1835,1862,1904,1928,1960,1961,2051,2059,2095,2098,2113,2116,2175,2228,2239,2271,2274,2277,2295,2311,2338,2377,2404,2405,2408,2411,2417,2417,2417,2417,2449,2489,2518,2539,2556,2568,2582,2602,2627,2640,2643,2643,2644,2645,2652,2662,2669,2672,2672,2677,2677,2677,2678,2678,2679,2680,2680,2681,2684,2684,2685,2686,2686,2686,2688,2688,2688,2688,2689,2690,2690,2693,2693,2693,2693,2693,2693,2694,2694,2694,2694,2694,2694,2696,2696,2698,2698];
var countsOfNameRAHMAN = [0,2,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,5,5,21,25,29,29,29,29,34,35,36,36,36,36,36,36,36,36,36,40,40,40,40,40,41,41,48,48,48,48,48,48,48,49,49,49,49,49,50,50,50,50,51,51,51,51,51,51,51,51,55,55,55,55,55,55,55,55,55,55,55,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57];
var countsOfNameRAHİM = [0,2,14,17,28,33,36,38,40,48,49,51,53,53,54,55,61,62,62,62,62,62,63,63,68,70,79,81,82,82,83,83,84,90,91,91,93,93,93,94,94,96,97,97,98,98,99,99,100,103,103,103,104,104,104,104,104,106,107,109,111,111,111,111,112,112,113,113,113,113,113,113,113,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114];
var countsOfNameİSİM = [0,0,0,0,0,1,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,10,10,10,10,10,10,11,13,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,15,15,15,16,16,16,16,16,16,16,16,16,16,16,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19];
var ogeler; // her nedense ... ogeler değişkenini global variable olarak tanımlamazsan, örneğin 13. sureyi açıklayıp en dibe kadar yazı alanını sürükleyip sonra 36. sureyi açar ve en dibe gelir ve 1 yukarı gelirsen son satırdayken 1643,1643,1643,1643,1643,1643..... yazıyor 285 = 19 x 15 yerine

function Page(rowsClass, sums)
{
	var say_toplam_isimler;

	say_toplam_isimler = $("input[class=seçenekler]:checked").map(function()
		{
			if (this.id === 'الله') {
				if(sure1.value && !ayet1.value) return countsOfNameALLAH[sure1.value-1];
				else return 0;
			}
			else if(this.id == 'الرحمن') {
				if(sure1.value && !ayet1.value) return countsOfNameRAHMAN[sure1.value-1];
				else return 0;
			}
			else if(this.id == 'الرحيم') {
				if(sure1.value && !ayet1.value) return countsOfNameRAHİM[sure1.value-1];
				else return 0;
			}
			else if(this.id == 'اسم') {
				if(sure1.value && !ayet1.value) return countsOfNameİSİM[sure1.value-1];
				else return 0;
			}
		}).get().reduce((pv, cv) => pv+cv, 0);

	if(sure1.value && !ayet1.value && (document.getElementById("اسم").checked || document.getElementById("الله").checked || document.getElementById("الرحمن").checked || document.getElementById("الرحيم").checked)){
		if(sure1.value == 1){ /* do nothing skip first sura */ }
		else if(say_toplam_isimler % 19 == 0) {
			document.getElementById("toplam").className = "total tamKat";
			document.getElementById("toplam").innerHTML = divide19(say_toplam_isimler);
		}
		else {
			document.getElementById("toplam").className = "total";
			document.getElementById("toplam").innerHTML = say_toplam_isimler;
		}
	}

    ogeler = [];
    
	var construct = function(rowClass){
        // get all rows
        var rows = $(rowClass);
		var row, row0offSetTop = $(rows[0]).offset().top;
        // map each row top position and height
        for(var i = 0; i < rows.length; i++){
            row = $(rows[i]);
            ogeler.push({top: row.offset().top - row0offSetTop, bottom: row.offset().top - row0offSetTop + row.outerHeight()});
        }
    }

    this.getActiveItem = function(){
        var rwsTopPos = $(".rows").scrollTop(); // current .rows top position, değişken
        var rwsHeight = $(".rows").height();   // .rows height, could stores somewhere, sabit
        // var rwsBotPos = rwsTopPos + rwsHeight; // bottom .rows position
        var rows  = new Array();

        for(var i = 0; i < ogeler.length; i++)
		{	//if top or bottom row position lies between .rows top or bottom position 
            //-> its active row and
            //if window is inside one of rows

			if(ogeler[i].top < rwsTopPos && rwsTopPos <= ogeler[i].bottom){
				if(direction == "down"){
					if(i>0){
						document.getElementById(i-1).className = "okundu row";
						if(sure1.value && !ayet1.value && (document.getElementById("اسم").checked || document.getElementById("الله").checked || document.getElementById("الرحمن").checked || document.getElementById("الرحيم").checked)){
							if((sums[i]+say_toplam_isimler) % 19 == 0) document.getElementById("toplam").className = "total tamKat";
							else  document.getElementById("toplam").className = "total";
						}
						else{
							if(sums[i] % 19 == 0) document.getElementById("toplam").className = "total tamKat";
							else  document.getElementById("toplam").className = "total";
						}
					}
					if(sure1.value && !ayet1.value && (document.getElementById("اسم").checked || document.getElementById("الله").checked || document.getElementById("الرحمن").checked || document.getElementById("الرحيم").checked)) rows.push(sums[i]+say_toplam_isimler);
					else rows.push(sums[i]);
				}
				else if (direction == "up"){
					if(i == ogeler.length - 1){
						document.getElementById(i).className = "row";

						if(sure1.value && !ayet1.value && (document.getElementById("اسم").checked || document.getElementById("الله").checked || document.getElementById("الرحمن").checked || document.getElementById("الرحيم").checked)){
							rows.push(sums[i]+say_toplam_isimler);
							if((sums[i]+say_toplam_isimler) % 19 == 0) document.getElementById("toplam").className = "total tamKat";
							else  document.getElementById("toplam").className = "total";
						}
						else{
							rows.push(sums[i]);
							if(sums[i] % 19 == 0) document.getElementById("toplam").className = "total tamKat";
							else  document.getElementById("toplam").className = "total";
						}
					}
					else if(i < ogeler.length - 1){
						document.getElementById(i).className = "row";

						if(sure1.value && !ayet1.value && (document.getElementById("اسم").checked || document.getElementById("الله").checked || document.getElementById("الرحمن").checked || document.getElementById("الرحيم").checked)){
							rows.push(sums[i+1]+say_toplam_isimler);
							if((sums[i+1]+say_toplam_isimler) % 19 == 0) document.getElementById("toplam").className = "total tamKat";
							else  document.getElementById("toplam").className = "total";
						}
						else {
							rows.push(sums[i+1]);
							if(sums[i+1] % 19 == 0) document.getElementById("toplam").className = "total tamKat";
							else  document.getElementById("toplam").className = "total";
						}
					}
				}
			}
			else if(i == 0 && ogeler[i].top == rwsTopPos && direction == "up")
				document.getElementById("0").className = "row";
			else if(ogeler[ogeler.length-1].bottom < rwsTopPos){
				if(sure1.value && !ayet1.value && (document.getElementById("اسم").checked || document.getElementById("الله").checked || document.getElementById("الرحمن").checked || document.getElementById("الرحيم").checked)) rows.push(sums[ogeler.length-1]+say_toplam_isimler);
				else rows.push(sums[ogeler.length-1]);
			}
        }
		return rows;
    }
    construct(rowsClass);
}

function lineKeeper() {
	document.getElementById("satirlar").scrollTop = ifade.scrollTop;
	if(windowWidth < 768)
		ifade.style.setProperty("background-position", '0px -' + ifade.scrollTop + 'px, center center, center -' + ifade.scrollTop + 'px');
	else
		ifade.style.setProperty("background-position", '0px -' + ifade.scrollTop + 'px, center center');
}

ifade.addEventListener("scroll", lineKeeper);
window.addEventListener("resize", lineKeeper);

function getLineBreaks(elem) {
	// our Range object form which we'll get the characters positions
	const range = document.createRange();
	// here we'll store all our lines
	const lines = [];
	const nodes = grabTextNodes(elem);
	let bottom = 0;
	// initial position
	let prevBottom = null;
	let lineText = "";
	let startRange = null;
	for (const node of nodes) {
		let nodeText = node.textContent;
		const textLength = nodeText.length;
		let rangeIndex = 0;
		let textIndex = 0;
		while (rangeIndex <= textLength) {
			range.setStart(node, rangeIndex);
			if (rangeIndex < textLength - 1) {
				range.setEnd(node, rangeIndex + 1); // wrap the range (for Chrome...)
			}
			bottom = range.getBoundingClientRect().bottom;
			if (prevBottom === null) { // first pass
				prevBottom = bottom;
				startRange = range.cloneRange();
			}
			else if (bottom > prevBottom) { // line break
				// store the current line content
				lineText += nodeText.slice(0, textIndex);
				startRange.setEnd(range.endContainer, range.endOffset);
				const { bottom } = startRange.getBoundingClientRect();
				lines.push(lineText);
				// start a new line
				prevBottom = bottom;
				lineText = "";
				nodeText = nodeText.slice(textIndex);
				textIndex = 0;
				startRange = range.cloneRange();
			}
			rangeIndex++;
			textIndex++;
			prevBottom = bottom;
		}
		// add the remaining text from this node into the current line content
		lineText += nodeText;
	}
	// push the last line
	if(startRange != null){ // for skipping in first pass
		startRange.setEnd(range.endContainer, range.endOffset);
		const { bottom } = startRange.getBoundingClientRect();
	}
	lines.push(lineText);
	lines.push("\n "); // textarea'nın sonuna kadar toplamın gösterilebilmesi için gerekli 

	return lines;
}

function grabTextNodes(elem) {
	const walker = document.createTreeWalker(elem, NodeFilter.SHOW_TEXT, null);
	const nodes = [];
	while (walker.nextNode()) {
	  	nodes.push(walker.currentNode);
	}
	return nodes;
}

$(".seçenekler").change(addRemoveRows);

function addRemoveRows(){
	if(document.getElementById("coloredDiv")){
		document.getElementById("satirlar").style.display = "inline-block";
		// below is bug fix for dangling 0 showing div of "toplam" only when ifade.value cleaned after scrolling until to the middle of the first line of textarea:
		document.getElementById("satirlar").scrollTop = "0px";
		document.getElementById("toplam").style.display = "inline-block";
		ifadeWidther();
	}
	else {
		document.getElementById("satirlar").style.display = "none";
		// below is bug fix for dangling 0 showing div of "toplam" only when ifade.value cleaned after scrolling until to the middle of the first line of textarea:
		document.getElementById("toplam").style.display = "none";
		ifadeWidther();
	}
}

var audio = document.getElementById("player");

$(window).load(function(){
	var isMusicPlayed = "false";

	isMusicPlayed = localStorage.getItem('isMusicPlayed');

	if (isMusicPlayed != "true") {
		audio.play();
		if (!audio.paused) {
			$('#play-pause-button').removeClass('fa-play');
			$('#play-pause-button').addClass('fa-pause');
		}
		isMusicPlayed = "true";
		localStorage.setItem('isMusicPlayed', isMusicPlayed);
	}
});

var syncFlag = 0;

$('#play-pause-button').click(function(){
	if($(this).hasClass('fa-play'))
	{
		$(this).removeClass('fa-play');
		$(this).addClass('fa-pause');
		audio.play();
		if(syncFlag == 1) {
			intervalId = setInterval(expresser, 2760);
		}
		else setTimeout(function(){v = 0;}, 14000) // synchronize audio and text both start at the same time
		syncFlag = 0;
	}
	else
	{
		$(this).removeClass('fa-pause');
		$(this).addClass('fa-play');
		audio.pause();
		clearInterval(intervalId);
		syncFlag = 1;
	}
});

audio.onended = function() {
    $("#play-pause-button").removeClass('fa-pause');
    $("#play-pause-button").addClass('fa-play');
};

var versesOf74 = [
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#0">74:0</a>&nbsp;IN THE NAME OF ALLAH THE GRACIOUS THE MERCIFUL.</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#1">74:1</a>&nbsp;o you hidden secret!</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#2">74:2</a>&nbsp;get up and warn!</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#3">74:3</a>&nbsp;magnify your OWNER!</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#4">74:4</a>&nbsp;and purify your garments.</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#5">74:5</a>&nbsp;and move away from wrath.</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#6">74:6</a>&nbsp;and do not make grateful by increasing.</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#7">74:7</a>&nbsp;and be patient for your OWNER.</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#8">74:8</a>&nbsp;then, when the horn is blown.</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#9">74:9</a>&nbsp;that will be a difficult day.</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#10">74:10</a>&nbsp;for the disbelievers, not easy.</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#11">74:11</a>&nbsp;leave ME and whom I created ALONE.</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#12">74:12</a>&nbsp;and I GRANTED to him an extensive wealth.</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#13">74:13</a>&nbsp;and children to behold.</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#14">74:14</a>&nbsp;and I HAVE ARRANGED smoothness for him.</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#15">74:15</a>&nbsp;then he coveted for more.</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#16">74:16</a>&nbsp;never! indeed, he has been stubborn to OUR VERSES.</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#17">74:17</a>&nbsp;soon I WILL GET him closer to a climb.</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#18">74:18</a>&nbsp;indeed he thought and decided.</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#19">74:19</a>&nbsp;so, may he be slain, how he decided!</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#20">74:20</a>&nbsp;therefore may he be slain, how he decided!</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#21">74:21</a>&nbsp;then he looked.</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#22">74:22</a>&nbsp;then he frowned and scowled.</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#23">74:23</a>&nbsp;then he turned away arrogantly.</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#24">74:24</a>&nbsp;so, he said: "this is nothing except transmitted sorcery".</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#25">74:25</a>&nbsp;"this is nothing except word of a human".</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#26">74:26</a>&nbsp;soon I WILL BURN him in Saqar.</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#27">74:27</a>&nbsp;and do you know what is Saqar?</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#28">74:28</a>&nbsp;It neither remains (anything back) nor leaves (alone).</p>'
]

var verseHead = document.getElementById("versesOf74");
var v = 0;
var expressFlag = 1;

function expresser() {
	$('#versesOf74').fadeOut("1380", function() {
		verseHead.innerHTML = versesOf74[v];
		v++;
		$('#versesOf74').fadeIn("1380");
		if (v == versesOf74.length)
		{
			$('#versesOf74').removeClass('first-tour');
			$('#v7429').addClass('first-tour');
			if (expressFlag == 1 && !sure1.value && !ifade.value)
			{
				setTimeout(function(){document.getElementById("start").click()}, 2760);
			}
			v = 0; // it restarts loop at the end of it
		}
	});
}

document.getElementById("start").addEventListener("click", function() {
	uyarı = true;
	localStorage.setItem('lastVisit', null); // in order to call alertt() function non-spa app correctly
})

var intervalId = setInterval(expresser, 2760);

const HM4042Rows = document.getElementById("ĤM4042").querySelectorAll("tr");
const HM4346Rows = document.getElementById("ĤM4346").querySelectorAll("tr");
const HM4143Rows = document.getElementById("ĤM4143").querySelectorAll("tr");

// this bi-directional css effects only possible with brute force without using loops like below as far as i can resolve with PERMISSION OF 1

for (let r = 0; r < HM4143Rows.length; r++)
{
	if(0 < r && r < HM4143Rows.length - 2)
	{
		HM4143Rows[r].children[0].addEventListener("mouseover", function(e)
		{
			HM4042Rows[r+1].children[0].querySelector('.ĤMcell').classList.add("hover-class");
			HM4042Rows[r+1].children[1].querySelector('.ĤMcell').classList.add("hover-class");
			HM4042Rows[r+1].children[2].querySelector('.ĤMcell').classList.add("hover-class");
			HM4042Rows[r+1].children[3].querySelector('.ĤMcell').classList.add("hover-class");
			for(var c = 0; c < 4; ++c)
				HM4042Rows[r+1].children[c].querySelector('.ĤMcell').classList.add("selectedCell");
		});
		HM4143Rows[r].children[1].addEventListener("mouseover", function(e)
		{
			HM4042Rows[r+1].children[1].querySelector('.ĤMcell').classList.add("حح");
			HM4042Rows[r+1].children[0].querySelector('.ĤMcell').classList.add("hover-class");
			HM4042Rows[r+1].children[2].querySelector('.ĤMcell').classList.add("hover-class");
			HM4042Rows[r+1].children[3].querySelector('.ĤMcell').classList.add("hover-class");
			for(var c = 0; c < 4; ++c)
				HM4042Rows[r+1].children[c].querySelector('.ĤMcell').classList.add("selectedCell");
		});
		HM4143Rows[r].children[2].addEventListener("mouseover", function(e)
		{
			HM4042Rows[r+1].children[2].querySelector('.ĤMcell').classList.add("مم");
			HM4042Rows[r+1].children[0].querySelector('.ĤMcell').classList.add("hover-class");
			HM4042Rows[r+1].children[1].querySelector('.ĤMcell').classList.add("hover-class");
			HM4042Rows[r+1].children[3].querySelector('.ĤMcell').classList.add("hover-class");
			for(var c = 0; c < 4; ++c)
				HM4042Rows[r+1].children[c].querySelector('.ĤMcell').classList.add("selectedCell");
		});
		HM4143Rows[r].children[3].addEventListener("mouseover", function(e)
		{
			HM4042Rows[r+1].children[0].querySelector('.ĤMcell').classList.add("hover-class");
			HM4042Rows[r+1].children[1].querySelector('.ĤMcell').classList.add("hover-class");
			HM4042Rows[r+1].children[2].querySelector('.ĤMcell').classList.add("hover-class");
			HM4042Rows[r+1].children[3].querySelector('.ĤMcell').classList.add("hover-class");
			for(var c = 0; c < 4; ++c)
				HM4042Rows[r+1].children[c].querySelector('.ĤMcell').classList.add("selectedCell");
		});


		HM4143Rows[r].children[0].addEventListener("mouseleave", function(e)
		{
			HM4042Rows[r+1].children[0].querySelector('.ĤMcell').classList.remove("hover-class");
			HM4042Rows[r+1].children[1].querySelector('.ĤMcell').classList.remove("hover-class");
			HM4042Rows[r+1].children[2].querySelector('.ĤMcell').classList.remove("hover-class");
			HM4042Rows[r+1].children[3].querySelector('.ĤMcell').classList.remove("hover-class");
			for(var c = 0; c < 4; ++c)
				HM4042Rows[r+1].children[c].querySelector('.ĤMcell').classList.remove("selectedCell");
		});
		HM4143Rows[r].children[1].addEventListener("mouseleave", function(e)
		{
			HM4042Rows[r+1].children[1].querySelector('.ĤMcell').classList.remove("حح");
			HM4042Rows[r+1].children[0].querySelector('.ĤMcell').classList.remove("hover-class");
			HM4042Rows[r+1].children[2].querySelector('.ĤMcell').classList.remove("hover-class");
			HM4042Rows[r+1].children[3].querySelector('.ĤMcell').classList.remove("hover-class");
			for(var c = 0; c < 4; ++c)
				HM4042Rows[r+1].children[c].querySelector('.ĤMcell').classList.remove("selectedCell");
		});
		HM4143Rows[r].children[2].addEventListener("mouseleave", function(e)
		{
			HM4042Rows[r+1].children[2].querySelector('.ĤMcell').classList.remove("مم");
			HM4042Rows[r+1].children[0].querySelector('.ĤMcell').classList.remove("hover-class");
			HM4042Rows[r+1].children[1].querySelector('.ĤMcell').classList.remove("hover-class");
			HM4042Rows[r+1].children[3].querySelector('.ĤMcell').classList.remove("hover-class");
			for(var c = 0; c < 4; ++c)
				HM4042Rows[r+1].children[c].querySelector('.ĤMcell').classList.remove("selectedCell");
		});
		HM4143Rows[r].children[3].addEventListener("mouseleave", function(e)
		{
			HM4042Rows[r+1].children[0].querySelector('.ĤMcell').classList.remove("hover-class");
			HM4042Rows[r+1].children[1].querySelector('.ĤMcell').classList.remove("hover-class");
			HM4042Rows[r+1].children[2].querySelector('.ĤMcell').classList.remove("hover-class");
			HM4042Rows[r+1].children[3].querySelector('.ĤMcell').classList.remove("hover-class");
			for(var c = 0; c < 4; ++c)
				HM4042Rows[r+1].children[c].querySelector('.ĤMcell').classList.remove("selectedCell");
		});
	}

	if(r == HM4143Rows.length - 2)
	{
		HM4143Rows[r].children[0].addEventListener("mouseover", function(e)
		{
			HM4346Rows[r-2].children[0].querySelector('.ĤMcell').classList.add("hover-class");
			HM4346Rows[r-2].children[1].querySelector('.ĤMcell').classList.add("hover-class");
			HM4346Rows[r-2].children[2].querySelector('.ĤMcell').classList.add("hover-class");
			HM4346Rows[r-2].children[3].querySelector('.ĤMcell').classList.add("hover-class");
			for(var c = 0; c < 4; ++c)
				HM4346Rows[r-2].children[c].querySelector('.ĤMcell').classList.add("selectedCell");
		});
		HM4143Rows[r].children[1].addEventListener("mouseover", function(e)
		{
			HM4346Rows[r-2].children[1].querySelector('.ĤMcell').classList.add("حح");
			HM4346Rows[r-2].children[0].querySelector('.ĤMcell').classList.add("hover-class");
			HM4346Rows[r-2].children[2].querySelector('.ĤMcell').classList.add("hover-class");
			HM4346Rows[r-2].children[3].querySelector('.ĤMcell').classList.add("hover-class");
			for(var c = 0; c < 4; ++c)
				HM4346Rows[r-2].children[c].querySelector('.ĤMcell').classList.add("selectedCell");
		});
		HM4143Rows[r].children[2].addEventListener("mouseover", function(e)
		{
			HM4346Rows[r-2].children[2].querySelector('.ĤMcell').classList.add("مم");
			HM4346Rows[r-2].children[0].querySelector('.ĤMcell').classList.add("hover-class");
			HM4346Rows[r-2].children[1].querySelector('.ĤMcell').classList.add("hover-class");
			HM4346Rows[r-2].children[3].querySelector('.ĤMcell').classList.add("hover-class");
			for(var c = 0; c < 4; ++c)
				HM4346Rows[r-2].children[c].querySelector('.ĤMcell').classList.add("selectedCell");
		});
		HM4143Rows[r].children[3].addEventListener("mouseover", function(e)
		{
			HM4346Rows[r-2].children[0].querySelector('.ĤMcell').classList.add("hover-class");
			HM4346Rows[r-2].children[1].querySelector('.ĤMcell').classList.add("hover-class");
			HM4346Rows[r-2].children[2].querySelector('.ĤMcell').classList.add("hover-class");
			HM4346Rows[r-2].children[3].querySelector('.ĤMcell').classList.add("hover-class");
			for(var c = 0; c < 4; ++c)
				HM4346Rows[r-2].children[c].querySelector('.ĤMcell').classList.add("selectedCell");
		});
		
		HM4143Rows[r].children[0].addEventListener("mouseleave", function(e)
		{
			HM4346Rows[r-2].children[0].querySelector('.ĤMcell').classList.remove("hover-class");
			HM4346Rows[r-2].children[1].querySelector('.ĤMcell').classList.remove("hover-class");
			HM4346Rows[r-2].children[2].querySelector('.ĤMcell').classList.remove("hover-class");
			HM4346Rows[r-2].children[3].querySelector('.ĤMcell').classList.remove("hover-class");
			for(var c = 0; c < 4; ++c)
				HM4346Rows[r-2].children[c].querySelector('.ĤMcell').classList.remove("selectedCell");
		});
		HM4143Rows[r].children[1].addEventListener("mouseleave", function(e)
		{
			HM4346Rows[r-2].children[1].querySelector('.ĤMcell').classList.remove("حح");
			HM4346Rows[r-2].children[0].querySelector('.ĤMcell').classList.remove("hover-class");
			HM4346Rows[r-2].children[2].querySelector('.ĤMcell').classList.remove("hover-class");
			HM4346Rows[r-2].children[3].querySelector('.ĤMcell').classList.remove("hover-class");
			for(var c = 0; c < 4; ++c)
				HM4346Rows[r-2].children[c].querySelector('.ĤMcell').classList.remove("selectedCell");
		});
		HM4143Rows[r].children[2].addEventListener("mouseleave", function(e)
		{
			HM4346Rows[r-2].children[2].querySelector('.ĤMcell').classList.remove("مم");
			HM4346Rows[r-2].children[0].querySelector('.ĤMcell').classList.remove("hover-class");
			HM4346Rows[r-2].children[1].querySelector('.ĤMcell').classList.remove("hover-class");
			HM4346Rows[r-2].children[3].querySelector('.ĤMcell').classList.remove("hover-class");
			for(var c = 0; c < 4; ++c)
				HM4346Rows[r-2].children[c].querySelector('.ĤMcell').classList.remove("selectedCell");
		});
		HM4143Rows[r].children[3].addEventListener("mouseleave", function(e)
		{
			HM4346Rows[r-2].children[0].querySelector('.ĤMcell').classList.remove("hover-class");
			HM4346Rows[r-2].children[1].querySelector('.ĤMcell').classList.remove("hover-class");
			HM4346Rows[r-2].children[2].querySelector('.ĤMcell').classList.remove("hover-class");
			HM4346Rows[r-2].children[3].querySelector('.ĤMcell').classList.remove("hover-class");
			for(var c = 0; c < 4; ++c)
				HM4346Rows[r-2].children[c].querySelector('.ĤMcell').classList.remove("selectedCell");
		});
	}

	if(1 < r && r < 4)
	{
		HM4042Rows[r].children[0].addEventListener("mouseover", function(e)
		{
			HM4143Rows[r-1].children[0].querySelector('.ĤMcell').classList.add("hover-class");
			HM4143Rows[r-1].children[1].querySelector('.ĤMcell').classList.add("hover-class");
			HM4143Rows[r-1].children[2].querySelector('.ĤMcell').classList.add("hover-class");
			HM4143Rows[r-1].children[3].querySelector('.ĤMcell').classList.add("hover-class");
			for(var c = 0; c < 4; ++c)
				HM4143Rows[r-1].children[c].querySelector('.ĤMcell').classList.add("selectedCell");
		});
		HM4042Rows[r].children[1].addEventListener("mouseover", function(e)
		{
			HM4143Rows[r-1].children[1].querySelector('.ĤMcell').classList.add("حح");
			HM4143Rows[r-1].children[0].querySelector('.ĤMcell').classList.add("hover-class");
			HM4143Rows[r-1].children[2].querySelector('.ĤMcell').classList.add("hover-class");
			HM4143Rows[r-1].children[3].querySelector('.ĤMcell').classList.add("hover-class");
			for(var c = 0; c < 4; ++c)
				HM4143Rows[r-1].children[c].querySelector('.ĤMcell').classList.add("selectedCell");
		});
		HM4042Rows[r].children[2].addEventListener("mouseover", function(e)
		{
			HM4143Rows[r-1].children[2].querySelector('.ĤMcell').classList.add("مم");
			HM4143Rows[r-1].children[0].querySelector('.ĤMcell').classList.add("hover-class");
			HM4143Rows[r-1].children[1].querySelector('.ĤMcell').classList.add("hover-class");
			HM4143Rows[r-1].children[3].querySelector('.ĤMcell').classList.add("hover-class");
			for(var c = 0; c < 4; ++c)
				HM4143Rows[r-1].children[c].querySelector('.ĤMcell').classList.add("selectedCell");
		});
		HM4042Rows[r].children[3].addEventListener("mouseover", function(e)
		{
			HM4143Rows[r-1].children[0].querySelector('.ĤMcell').classList.add("hover-class");
			HM4143Rows[r-1].children[1].querySelector('.ĤMcell').classList.add("hover-class");
			HM4143Rows[r-1].children[2].querySelector('.ĤMcell').classList.add("hover-class");
			HM4143Rows[r-1].children[3].querySelector('.ĤMcell').classList.add("hover-class");
			for(var c = 0; c < 4; ++c)
				HM4143Rows[r-1].children[c].querySelector('.ĤMcell').classList.add("selectedCell");
		});


		HM4042Rows[r].children[0].addEventListener("mouseleave", function(e)
		{
			HM4143Rows[r-1].children[0].querySelector('.ĤMcell').classList.remove("hover-class");
			HM4143Rows[r-1].children[1].querySelector('.ĤMcell').classList.remove("hover-class");
			HM4143Rows[r-1].children[2].querySelector('.ĤMcell').classList.remove("hover-class");
			HM4143Rows[r-1].children[3].querySelector('.ĤMcell').classList.remove("hover-class");
			for(var c = 0; c < 4; ++c)
				HM4143Rows[r-1].children[c].querySelector('.ĤMcell').classList.remove("selectedCell");
		});
		HM4042Rows[r].children[1].addEventListener("mouseleave", function(e)
		{
			HM4143Rows[r-1].children[1].querySelector('.ĤMcell').classList.remove("حح");
			HM4143Rows[r-1].children[0].querySelector('.ĤMcell').classList.remove("hover-class");
			HM4143Rows[r-1].children[2].querySelector('.ĤMcell').classList.remove("hover-class");
			HM4143Rows[r-1].children[3].querySelector('.ĤMcell').classList.remove("hover-class");
			for(var c = 0; c < 4; ++c)
				HM4143Rows[r-1].children[c].querySelector('.ĤMcell').classList.remove("selectedCell");
		});
		HM4042Rows[r].children[2].addEventListener("mouseleave", function(e)
		{
			HM4143Rows[r-1].children[2].querySelector('.ĤMcell').classList.remove("مم");
			HM4143Rows[r-1].children[0].querySelector('.ĤMcell').classList.remove("hover-class");
			HM4143Rows[r-1].children[1].querySelector('.ĤMcell').classList.remove("hover-class");
			HM4143Rows[r-1].children[3].querySelector('.ĤMcell').classList.remove("hover-class");
			for(var c = 0; c < 4; ++c)
				HM4143Rows[r-1].children[c].querySelector('.ĤMcell').classList.remove("selectedCell");
		});
		HM4042Rows[r].children[3].addEventListener("mouseleave", function(e)
		{
			HM4143Rows[r-1].children[0].querySelector('.ĤMcell').classList.remove("hover-class");
			HM4143Rows[r-1].children[1].querySelector('.ĤMcell').classList.remove("hover-class");
			HM4143Rows[r-1].children[2].querySelector('.ĤMcell').classList.remove("hover-class");
			HM4143Rows[r-1].children[3].querySelector('.ĤMcell').classList.remove("hover-class");
			for(var c = 0; c < 4; ++c)
				HM4143Rows[r-1].children[c].querySelector('.ĤMcell').classList.remove("selectedCell");
		});
	}

	if(r == 1)
	{
		HM4346Rows[r].children[0].addEventListener("mouseover", function(e)
		{
			HM4143Rows[r+2].children[0].querySelector('.ĤMcell').classList.add("hover-class");
			HM4143Rows[r+2].children[1].querySelector('.ĤMcell').classList.add("hover-class");
			HM4143Rows[r+2].children[2].querySelector('.ĤMcell').classList.add("hover-class");
			HM4143Rows[r+2].children[3].querySelector('.ĤMcell').classList.add("hover-class");
			for(var c = 0; c < 4; ++c)
				HM4143Rows[r+2].children[c].querySelector('.ĤMcell').classList.add("selectedCell");
		});
		HM4346Rows[r].children[1].addEventListener("mouseover", function(e)
		{
			HM4143Rows[r+2].children[1].querySelector('.ĤMcell').classList.add("حح");
			HM4143Rows[r+2].children[0].querySelector('.ĤMcell').classList.add("hover-class");
			HM4143Rows[r+2].children[2].querySelector('.ĤMcell').classList.add("hover-class");
			HM4143Rows[r+2].children[3].querySelector('.ĤMcell').classList.add("hover-class");
			for(var c = 0; c < 4; ++c)
				HM4143Rows[r+2].children[c].querySelector('.ĤMcell').classList.add("selectedCell");
		});
		HM4346Rows[r].children[2].addEventListener("mouseover", function(e)
		{
			HM4143Rows[r+2].children[2].querySelector('.ĤMcell').classList.add("مم");
			HM4143Rows[r+2].children[0].querySelector('.ĤMcell').classList.add("hover-class");
			HM4143Rows[r+2].children[1].querySelector('.ĤMcell').classList.add("hover-class");
			HM4143Rows[r+2].children[3].querySelector('.ĤMcell').classList.add("hover-class");
			for(var c = 0; c < 4; ++c)
				HM4143Rows[r+2].children[c].querySelector('.ĤMcell').classList.add("selectedCell");
		});
		HM4346Rows[r].children[3].addEventListener("mouseover", function(e)
		{
			HM4143Rows[r+2].children[0].querySelector('.ĤMcell').classList.add("hover-class");
			HM4143Rows[r+2].children[1].querySelector('.ĤMcell').classList.add("hover-class");
			HM4143Rows[r+2].children[2].querySelector('.ĤMcell').classList.add("hover-class");
			HM4143Rows[r+2].children[3].querySelector('.ĤMcell').classList.add("hover-class");
			for(var c = 0; c < 4; ++c)
				HM4143Rows[r+2].children[c].querySelector('.ĤMcell').classList.add("selectedCell");
		});
		
		HM4346Rows[r].children[0].addEventListener("mouseleave", function(e)
		{
			HM4143Rows[r+2].children[0].querySelector('.ĤMcell').classList.remove("hover-class");
			HM4143Rows[r+2].children[1].querySelector('.ĤMcell').classList.remove("hover-class");
			HM4143Rows[r+2].children[2].querySelector('.ĤMcell').classList.remove("hover-class");
			HM4143Rows[r+2].children[3].querySelector('.ĤMcell').classList.remove("hover-class");
			for(var c = 0; c < 4; ++c)
				HM4143Rows[r+2].children[c].querySelector('.ĤMcell').classList.remove("selectedCell");
		});
		HM4346Rows[r].children[1].addEventListener("mouseleave", function(e)
		{
			HM4143Rows[r+2].children[1].querySelector('.ĤMcell').classList.remove("حح");
			HM4143Rows[r+2].children[0].querySelector('.ĤMcell').classList.remove("hover-class");
			HM4143Rows[r+2].children[2].querySelector('.ĤMcell').classList.remove("hover-class");
			HM4143Rows[r+2].children[3].querySelector('.ĤMcell').classList.remove("hover-class");
			for(var c = 0; c < 4; ++c)
				HM4143Rows[r+2].children[c].querySelector('.ĤMcell').classList.remove("selectedCell");
		});
		HM4346Rows[r].children[2].addEventListener("mouseleave", function(e)
		{
			HM4143Rows[r+2].children[2].querySelector('.ĤMcell').classList.remove("مم");
			HM4143Rows[r+2].children[0].querySelector('.ĤMcell').classList.remove("hover-class");
			HM4143Rows[r+2].children[1].querySelector('.ĤMcell').classList.remove("hover-class");
			HM4143Rows[r+2].children[3].querySelector('.ĤMcell').classList.remove("hover-class");
			for(var c = 0; c < 4; ++c)
				HM4143Rows[r+2].children[c].querySelector('.ĤMcell').classList.remove("selectedCell");
		});
		HM4346Rows[r].children[3].addEventListener("mouseleave", function(e)
		{
			HM4143Rows[r+2].children[0].querySelector('.ĤMcell').classList.remove("hover-class");
			HM4143Rows[r+2].children[1].querySelector('.ĤMcell').classList.remove("hover-class");
			HM4143Rows[r+2].children[2].querySelector('.ĤMcell').classList.remove("hover-class");
			HM4143Rows[r+2].children[3].querySelector('.ĤMcell').classList.remove("hover-class");
			for(var c = 0; c < 4; ++c)
				HM4143Rows[r+2].children[c].querySelector('.ĤMcell').classList.remove("selectedCell");
		});
	}
}

function countSwitcher() {
	if(document.getElementById('count-switch').checked){
		document.querySelector("#isimler").style.display = "flex";
		document.querySelector("#harfler").style.display = "none";
		document.getElementById("nameLabel").innerHTML = "Count Letters"
		document.getElementById("nameLabel").style.color = "white";
	}
	else {
		document.querySelector("#isimler").style.display = "none";
		document.querySelector("#harfler").style.display = "flex";
		document.getElementById("nameLabel").innerHTML = "count Names of واحد"
		document.getElementById("nameLabel").style.color = "yellow";
	}
}

$("#count-switch").change(countSwitcher);
$(window).load(countSwitcher);
$(window).load(linkChanger);

function detectBrowser()
{
	var browser;
	if(/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) browser = "Safari";
	else if(navigator.userAgent.indexOf("Chrome") > -1) browser = "Chrome";
	else if(navigator.userAgent.indexOf("Firefox") > -1) browser = "Firefox";
	else if(navigator.userAgent.indexOf("Edge") > -1) browser = "Edge";
	else if(navigator.userAgent.toLowerCase().indexOf("android") > -1) browser = "Android"; // if it is android device don't check rest
	else browser = "Other";
	return browser;
}

function linkChanger()
{
	var browser = detectBrowser();

	if(browser == "Chrome" || browser == "Edge")
	{
		document.getElementById("start").href = "#ovpl=0&onv=1&sura=1&verse=1&sura2=114&verse2=6&count=الله";

		document.getElementById("İSİM").children[0].href = "#ovpl=0&onv=1&sura=1&verse=1&sura2=114&verse2=6&count=اسم";
		document.getElementById("İSİM-link").children[0].href = "#ovpl=0&onv=1&sura=1&verse=1&sura2=114&verse2=6&count=اسم";

		document.getElementById("ALLAH").children[0].href = "#ovpl=0&onv=1&sura=1&verse=1&sura2=114&verse2=6&count=الله";
		document.getElementById("ALLAH-link").children[0].href = "#ovpl=0&onv=1&sura=1&verse=1&sura2=114&verse2=6&count=الله";

		document.getElementById("RAHMAN").children[0].href = "#ovpl=0&onv=1&sura=1&verse=1&sura2=114&verse2=6&count=الرحمن";
		document.getElementById("RAHMAN-link").children[0].href = "#ovpl=0&onv=1&sura=1&verse=1&sura2=114&verse2=6&count=الرحمن";

		document.getElementById("RAHİM").children[0].href = "#ovpl=0&onv=1&sura=1&verse=1&sura2=114&verse2=6&count=الرحيم";
		document.getElementById("RAHİM-link").children[0].href = "#ovpl=0&onv=1&sura=1&verse=1&sura2=114&verse2=6&count=الرحيم";
	}
}

function sonrakiSureyeGeç(){
	var ovpl = document.getElementById('ovpl');
	var nextSura = document.getElementById("nextSura");
	var sonrakiSure = parseInt(sure1.value) + 1;

	if (sure1.value && !ayet1.value)
	{
		if(document.getElementById("اسم").checked == true || document.getElementById("الله").checked == true || document.getElementById("الرحمن").checked == true || document.getElementById("الرحيم").checked == true)
		{
			if(1 < sonrakiSure && sonrakiSure <= 114)
			{
				nextSura.style.display = "block";
				if(ovpl.checked)
					nextSura.href = "/#ovpl=1&onv=1&sura="+sonrakiSure+"&count="+sclnhrf;
				else
					nextSura.href = "/#ovpl=0&onv=1&sura="+sonrakiSure+"&count="+sclnhrf;
			}
		}
		else {
			nextSura.style.display = "none";
		}
	}
}

$(".seçenekler").on("change", sonrakiSureyeGeç);