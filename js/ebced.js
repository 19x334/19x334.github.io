// IN THE NAME OF THE GOD RAHMAN THE MERCIFUL!
// SACRED & SUPREME RAHMAN YOUR NAME IS SACRED & SUPREME!

var browser = detectBrowser();
var lineHeight;

if(browser == "Firefox" || browser == "Firefox-Android")
	lineHeight = 79;
else
	lineHeight = 92;

var sure1 = document.getElementById('sure');
var ayet1 = document.getElementById('ayet');
var sure2 = document.getElementById('sure2');
var ayet2 = document.getElementById('ayet2');
var sırano1 = document.getElementById('sırano1');
var sırano2 = document.getElementById('sırano2');
var ifade = document.getElementById('ifade');
var playing = false;
var linkUpdate = false;
// for reloading single page application page when user clicks back/forward button of browser
// ayrıca aşağıdaki fonksiyon, tüm kuranda ALLAH'ın isimlerinin renklendirilip sayılması ile harf sayımı linkleri arasında geçiş yapılırken
// uygulamanın hızını ve kararlılığını dramatik artırıyor
// bu olmadan single page application çok bekleme yapıyor aralarında büyük metin farkı olan geçişlerde
jQuery( document ).ready(function( $ )
{
	//Use this inside your document ready jQuery 
	$(window).on('popstate', function() {
		/*
		ALLAH İSTERSE Sesli olarak oynatılan surenin sesinin Uygulama kullanılırken kesilmemesi
		ve aynı zamanda surenin sesi oynatılmazken linke tıklandığında sayfanın yenilenerek
		gereksiz olarak uygulamanın değişkenlerinin hafızada şişmesinin önlenmesi için Flag kullanılması fikri:
		*/
		if(!playing && !linkUpdate)
			location.reload(true); // this default and after playing of sura audio ended behavior has massive performance gains like coloring sura 13 with e+l+m+r letters after colored all QURAN with 2698 occurence of NAME OF ALLAH in chrome for example..
		else if(!linkUpdate) getfromlink(); // otherwise while playing it can not finish the coloring process of sura 13 with e+l+m+r letters even after 3 minutes! after colored all QURAN with 2698 occurence of NAME OF ALLAH in chrome for example..
	});
});

function randombg()
{
	var genişlik = screen.width,
		yükseklik = screen.height,
		biggestSide;

	if(genişlik > yükseklik)
		biggestSide = genişlik;
	else
		biggestSide = yükseklik;
	
	var bigSize;

	if(biggestSide < 425)
		bigSize = [
		"url('/pic/size/425/space2.png')",
		"url('/pic/size/425/space4.png')",
		"url('/pic/size/425/space5.png')",
		"url('/pic/size/425/space8.jpg')",
		"url('pic/size/425/El-Konstantiniyye.png')",
		"url('pic/size/425/moonEarthSun.png')",
		"url('pic/size/425/resurrection.png')",
		"url('/pic/size/425/heavenandhell.png')",
		"url('/pic/size/425/tree-and-star-prostrate.png')",
		];
	else if(biggestSide < 886)
		bigSize = [
		"url('/pic/size/886/space2.png')",
		"url('/pic/size/886/space4.png')",
		"url('/pic/size/886/space5.png')",
		"url('/pic/size/886/space8.png')",
		"url('pic/size/886/El-Konstantiniyye.png')",
		"url('pic/size/886/moonEarthSun.png')",
		"url('pic/size/886/resurrection.png')",
		"url('/pic/size/886/heavenandhell.png')",
		"url('/pic/size/886/tree-and-star-prostrate.png')",
		];
	else if(biggestSide < 1024)
		bigSize = [
		"url('/pic/size/1024/space2.png')",
		"url('/pic/size/1024/space4.png')",
		"url('/pic/size/1024/space5.png')",
		"url('/pic/size/1024/space8.jpg')",
		"url('pic/size/1024/El-Konstantiniyye.png')",
		"url('pic/size/1024/moonEarthSun.png')",
		"url('pic/size/1024/resurrection.png')",
		"url('/pic/size/1024/heavenandhell.png')",
		"url('/pic/size/1024/tree-and-star-prostrate.png')",
		];
	else if(biggestSide < 1585)
		bigSize = [
		"url('/pic/size/1585/space2.png')",
		"url('/pic/size/1585/space4.png')",
		"url('/pic/size/1585/space5.png')",
		"url('/pic/size/1585/space8.jpg')",
		"url('pic/size/1585/El-Konstantiniyye.png')",
		"url('pic/size/1585/moonEarthSun.png')",
		"url('pic/size/1585/resurrection.png')",
		"url('/pic/size/1585/heavenandhell.png')",
		"url('/pic/size/1585/tree-and-star-prostrate.png')",
		];
	else
		bigSize = [
		"url('pic/space2.png')",
		"url('pic/space4.png')",
		"url('pic/space5.png')",
		"url('pic/space8.jpg')",
		"url('pic/El-Konstantiniyye.png')",
		"url('pic/moonEarthSun.png')",
		"url('pic/resurrection.png')",
		"url('/pic/heavenandhell.png')",
		"url('/pic/tree-and-star-prostrate.png')",
		];

	var random = Math.floor(Math.random() * 9);
	while(localStorage.getItem("lastBgIndex") == random) random = Math.floor(Math.random() * 9); // FOR DIFFERENT BACKGROUND IF ALLAH WILLS
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

function nosuzayetlerisil() {
	var str = ifade.value;
	if (document.getElementById('sn').checked) {
		str = str.replace(/^.*(:0).*$\n/gm, ''); // 0 nolu ayetleri sil
		// delete verses which doesn't begin with numbers
		ifade.value = str.replace(/^(?![1-9]).*$\n/gm, '');
	}
	loaded();
}

$('#sn').on('change', function(){
	loading();
	isColorMuqatta = 0;
	if(sure1.value) {
		loadXMLDoc();
		yataylaştırıcı();
	}
	else
		nosuzayetlerisil();	// sure, ayet ve sıranolar boş olsa bile
});

function kalem(){
	windowWidth = window.innerWidth; // bunu kaldırma ilk ana sayfa yüklendiğinde boş textareanın arkaplanının doğru yüklenmesi/karışmaması için!

	if(ifade.value != '' && ifade.value != ekleme){
		if(browser == "Firefox" || browser == "Firefox-Android")
			ifade.style.background = "linear-gradient(transparent 78px, #999 1px), url(/pic/pen-50.png)";
		else
			ifade.style.background = "linear-gradient(transparent 91px, #999 1px), url(/pic/pen-50.png)";
		ifade.style.backgroundRepeat = "repeat, no-repeat";
		ifade.style.backgroundPosition = "0px 0px, center center";
	}
	else{
		ifade.style.background = "url(/pic/pen_full.png)";
		ifade.style.backgroundRepeat = "no-repeat";
	}
	lineKeeper();
}

$("#ifade").on("input", function(){
	if(!sure1.value)
	{
		if(ifade.value == ekleme)
		{
			document.getElementById("satirlar").style.display = "none";
			// below is bug fix for dangling 0 showing div of "toplam" only when ifade.value cleaned after scrolling until to the middle of the first line of textarea:
			toplam.style.display = "none";
			ifadeWidther(heightIfade);
			ifade.value = '';
			ortaHeighter();
		}
		kalem(); // "sitenin" orijinal KURAN metni üzerinde kullanıcı kaynaklı değişiklik yapıldığını gösterir kullanıcıya
	}
})

function loading()
{
	document.documentElement.style.cursor = "wait";
	resizeFlag = 1;

	if(browser == "Firefox" || browser == "Firefox-Android") {
		ifade.style.background = "linear-gradient(transparent 78px, #999 1px), url(/pic/loading.gif)";
		if(886 <= windowWidth)
			ifade.style.setProperty('background-size', '100% 79px, 57px auto', 'important');
		else
			ifade.style.setProperty('background-size', '100% 79px, auto 46px', 'important');
	}
	else {
		ifade.style.background = "linear-gradient(transparent 91px, #999 1px), url(/pic/loading.gif)";
		if(886 <= windowWidth)
			ifade.style.setProperty('background-size', '100% 92px, 57px auto', 'important');
		else
			ifade.style.setProperty('background-size', '100% 92px, auto 46px', 'important');
	}
	ifade.style.backgroundRepeat = "repeat, no-repeat";
	ifade.style.backgroundPosition = "0px 0px, center center";
}

function loaded()
{
	if(!sure1.value) kalem();
	else{
		if(browser == "Firefox" || browser == "Firefox-Android") {
			if(886 <= windowWidth)
				ifade.style.background = "linear-gradient(transparent 78px, #999 1px), url(/pic/book-arabic-019-190p.png)";
			else
				ifade.style.background = "linear-gradient(transparent 78px, #999 1px), url(/pic/book-arabic-019-152p.png)";
		}
		else {
			if(886 <= windowWidth)
				ifade.style.background = "linear-gradient(transparent 91px, #999 1px), url(/pic/book-arabic-019-190p.png)";
			else
				ifade.style.background = "linear-gradient(transparent 91px, #999 1px), url(/pic/book-arabic-019-152p.png)";
		}
		ifade.style.backgroundRepeat = "repeat, no-repeat";
		ifade.style.backgroundPosition = "0px 0px, center center";
	}
	document.documentElement.style.cursor = "unset";
}

function opener(){
	ifadeFlag = 0;
	randombg();
	if(document.activeElement === sure1 || document.activeElement === sure2){
		if (document.activeElement.value) {
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

var yazmayaBaşlamaTemizliği = false;

// var ifadeArr; // for proof of 66 x 165 IF GOD WILLS i will continue to make the tool be able to count both number of chapters and number of verses containing selected letters or names

function bölümaçıcı(xml)
{
	ifadeArr = [];

	var ayet, firstverses, lastverses, birsure, ayetbir, ikisure, ayetiki, ikiayet, ayet1bir, ayet2iki, s, a, xmlDoc, txt, aralık;
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
									ayet = xmlDoc.querySelector('sura[index=s'+s+']').querySelector('aya[index=a'+a+']').getAttribute('text') + "\n";
									aralık += ayet;
									// ifadeArr.push(ayet);
									// later you can flush ifadeArr by:
									// ifadeArr = [];
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
	ifade.value = aralık + ekleme;
	
	$('#ifade').trigger('input');

	document.getElementById('açıklama').innerHTML = txt;

	resizeFlag = 0; // resize bug fix for true background in all window widths
	if(nameFlag == 1) loaded();

	if(isColorMuqatta == 1)	colorMuqatta();
	isColorMuqatta = 1; // bu atamanın bu konumda, bölümaçıcı(xml) fonksiyonunun en son satırında olması, linkten bölüm açıldıktan sonra açılan yeni surelerin renklendirilebilmesi ve linkten sure özel harflerle bir muqatta  suresi açıldıktan sonra colorMuqatta() fonksiyonunun tetiklenip özel harflerin üzerine ekleme yapmaması için önemli!

	yazmayaBaşlamaTemizliği = true;
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

var cursorPosition, windowTopScroll;

document.getElementById("ifade").addEventListener("keydown",
	function noları_sil(event)
	{
		windowTopScroll = window.scrollY;
		cursorPosition = $('#ifade').caret();

		if(event.keyCode == 13) cursorPosition++; // if char is '\n' then do not wait in the same position
		
		setTimeout(function(){$('#ifade').caret(cursorPosition)}, 0); // settimeout 0 eklemezsen çalışmıyor

		if(yazmayaBaşlamaTemizliği)
		{
			sure1.value = '';
			ayet1.value = '';
			sure2.value = '';
			ayet2.value = '';
			sırano1.value = '';
			sırano2.value = '';
			document.getElementById('açıklama').innerHTML = '';

			renkleri_temizle();

			if(browser == "Firefox" || browser == "Firefox-Android")
				setTimeout(function(){window.scrollTo(window.scrollX, (windowTopScroll - (window.innerHeight / 2) + 39.5 - 4 * 79))}, 0); // settimeout 0 eklemezsen çalışmıyor
			else
				setTimeout(function(){window.scrollTo(window.scrollX, (windowTopScroll - (window.innerHeight / 2) + 46 - 4 * 92))}, 0); // settimeout 0 eklemezsen çalışmıyor
			
			yazmayaBaşlamaTemizliği = false;
		}
	}
)

function yazarkennosuzayetlerisil() {
	var str = ifade.value;
	if (document.getElementById('sn').checked) {
		str = str.replace(/^.*(:0).*$/gm, ''); // 0 nolu ayetleri sil
		// delete verses which doesn't begin with numbers
		ifade.value = str.replace(/^(?![1-9]).*$/gm, '')
	}
}

$('#ifade').on('input', yazarkennosuzayetlerisil) // numarasız ayet yazımına izin verme

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

var switchFlag = true;

$("#count-switch").change(function ()
{
	selectorFlag = false;

	if(switchFlag)
	{
		var idSelector = function() { return this.id; };
		var selections = $("input[class=seçenekler]:checked").map(idSelector).get();

		if(document.getElementById('count-switch').checked)
		{
			// when turning into name counting behavior:

			$('#sn').prop("checked", true);
			$('#sn').trigger("change");

			for(harf in selections){
				if(selections[harf] == 'ا') {
					clrltrs[0] = [];
					clrltrs[35] = [];
				}
				else if(selections[harf] == 'ب') clrltrs[1] = [];
				else if(selections[harf] == 'ج') clrltrs[2] = [];
				else if(selections[harf] == 'د') clrltrs[3] = [];
				else if(selections[harf] == 'ه') clrltrs[4] = [];
				else if(selections[harf] == 'و') clrltrs[5] = [];
				else if(selections[harf] == 'ز') clrltrs[6] = [];
				else if(selections[harf] == 'ح') clrltrs[7] = [];
				else if(selections[harf] == 'ط') clrltrs[8] = [];
				else if(selections[harf] == 'ي') clrltrs[9] = [];
				else if(selections[harf] == 'ك') clrltrs[10] = [];
				else if(selections[harf] == 'ل') {
					clrltrs[11] = [];
					clrltrs[34] = [];
				}
				else if(selections[harf] == 'م') clrltrs[12] = [];
				else if(selections[harf] == 'ن') clrltrs[13] = [];
				else if(selections[harf] == 'س') clrltrs[14] = [];
				else if(selections[harf] == 'ع') clrltrs[15] = [];
				else if(selections[harf] == 'ف') clrltrs[16] = [];
				else if(selections[harf] == 'ص') clrltrs[17] = [];
				else if(selections[harf] == 'ق') clrltrs[18] = [];
				else if(selections[harf] == 'ر') clrltrs[19] = [];
				else if(selections[harf] == 'ش') clrltrs[20] = [];
				else if(selections[harf] == 'ت') clrltrs[21] = [];
				else if(selections[harf] == 'ث') clrltrs[22] = [];
				else if(selections[harf] == 'خ') clrltrs[23] = [];
				else if(selections[harf] == 'ذ') clrltrs[24] = [];
				else if(selections[harf] == 'ض') clrltrs[25] = [];
				else if(selections[harf] == 'ظ') clrltrs[26] = [];
				else if(selections[harf] == 'غ') clrltrs[27] = [];
				document.getElementById(selections[harf]).checked = false;	$("#"+selections[harf]).trigger('change');	colorButton(selections[harf]);
			}
		}
		else {
			// when turning back to default letter counting behavior:

			$('#sn').prop("checked", false);
			$('#sn').trigger("change");

			for(harf in selections){
				if(selections[harf] == 'الله') {
					clrltrs[28] = [];
					clrltrs[29] = [];
				}
				else if(selections[harf] == 'الرحمن') clrltrs[30] = [];
				else if(selections[harf] == 'الرحيم') clrltrs[31] = [];
				else if(selections[harf] == 'اسم') {
					clrltrs[32] = [];
					clrltrs[33] = [];
				}
				document.getElementById(selections[harf]).checked = false;	$("#"+selections[harf]).trigger('change');	colorButton(selections[harf]);
			}
		}
		rengarenk();
	}
	selectorFlag = true;
});

var selectorFlag = true;

$(".seçenekler").change(countSelector);

function countSelector()
{
	switchFlag = false;

	if(selectorFlag && (document.getElementById('اسم').checked || document.getElementById('الله').checked || document.getElementById('الرحمن').checked || document.getElementById('الرحيم').checked))
	{
		if(!document.getElementById("sn").checked)
		{
			document.getElementById('sn').checked = true;
			$('#sn').trigger("change");
		}

		document.getElementById('count-switch').checked = true;
		$('#count-switch').trigger('change');
	}

	switchFlag = true;
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
		
		bottomRightBox.style.display = "block";
	}
	else{
		bottomRightBox.style.display = "none";
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
			html: "HonourableQURAN.com<br>",
			imageUrl: "pic/66619.png",
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

const toplam = document.getElementById("toplam");

$('.seçenekler').on('change', function(){
	document.getElementById("satirlar").style.display = "inline-block";
	// below is bug fix for dangling 0 showing div of "toplam" only when ifade.value cleaned after scrolling until to the middle of the first line of textarea:
	document.getElementById("satirlar").scrollTop = "0px";
	toplam.style.display = "inline-block";
	resize_ob.observe(ifade);
	ifadeWidther();
});

var initial_IfadeHeight;
var ekleme = "";
const container = document.getElementsByClassName("container")[0];
const bottomRightBox = document.getElementById("bottomRightBox");

function elementsOverlap(el1, el2) {
	var domRect1 = el1.getBoundingClientRect();
	var domRect2 = el2.getBoundingClientRect();
  
	return (domRect1.top < domRect2.bottom && domRect1.bottom > domRect2.top);
}

var orta = document.getElementById("orta");


function ortaHeighter(ifadeHeight)
{
	if(ifade.value)
	{
		if(browser == "Firefox" || browser == "Firefox-Android")
		{
			if(windowWidth >= 1585) {
				if(ifadeHeight > initial_IfadeHeight)
					orta.style.setProperty("height", ifadeHeight - initial_IfadeHeight - 1 + 4 + 'px');
				else
					orta.style.setProperty("height", '4px');
			}
			else if(1525 <= windowWidth && windowWidth <= 1584) {
				if(ifadeHeight > initial_IfadeHeight)
					orta.style.setProperty("height", ifadeHeight - initial_IfadeHeight - 1 + (-0.440678 * windowWidth) + 702.034 + 'px');
				else
					orta.style.setProperty("height", (-0.440678 * windowWidth) + 702.034 + 'px');
			}
			else if(1334 <= windowWidth && windowWidth <= 1524) {
				if(ifadeHeight > initial_IfadeHeight)
					orta.style.setProperty("height", ifadeHeight - initial_IfadeHeight - 1 + (-0.168421 * windowWidth) + 256.674 + 'px');
				else
					orta.style.setProperty("height", (-0.168421 * windowWidth) + 256.674 + 'px');
			}
			else if(1144 <= windowWidth && windowWidth <= 1333) {
				if(ifadeHeight > initial_IfadeHeight)
					orta.style.setProperty("height", ifadeHeight - initial_IfadeHeight - 1 + (-0.174603 * windowWidth) + 232.746 + 'px');
				else
					orta.style.setProperty("height", (-0.174603 * windowWidth) + 232.746 + 'px');
			}
			else if(954 <= windowWidth && windowWidth <= 1143) {
				if(ifadeHeight > initial_IfadeHeight)
					orta.style.setProperty("height", ifadeHeight - initial_IfadeHeight - 1 + (-0.190476 * windowWidth) + 217.714 + 'px');
				else
					orta.style.setProperty("height", (-0.190476 * windowWidth) + 217.714 + 'px');
			}
			else if(886 <= windowWidth && windowWidth <= 953) {
				if(ifadeHeight > initial_IfadeHeight)
					orta.style.setProperty("height", ifadeHeight - initial_IfadeHeight - 1 + 'px');
				else
					orta.style.setProperty("height", '0px');
			}
			else if(757 <= windowWidth && windowWidth <= 885) {
				if(ifadeHeight > initial_IfadeHeight)
					orta.style.setProperty("height", ifadeHeight - initial_IfadeHeight - 1 + (-0.53125 * windowWidth) + 470.156 + 'px');
				else
					orta.style.setProperty("height", (-0.53125 * windowWidth) + 470.156 + 'px');
			}
			else if(743 <= windowWidth && windowWidth <= 756) {
				if(ifadeHeight > initial_IfadeHeight)
					orta.style.setProperty("height", ifadeHeight - initial_IfadeHeight - 1 + 'px');
				else
					orta.style.setProperty("height", '0px');
			}
			else if(296 <= windowWidth && windowWidth <= 742) {
				if(ifadeHeight > initial_IfadeHeight)
					orta.style.setProperty("height", ifadeHeight - initial_IfadeHeight - 1 + (-0.692825 * windowWidth) + 514.076 + 'px');
				else
					orta.style.setProperty("height", (-0.692825 * windowWidth) + 514.076 + 'px');
			}
			else {
				if(ifadeHeight > initial_IfadeHeight)
					orta.style.setProperty("height", ifadeHeight - initial_IfadeHeight - 1 + (windowWidth * windowWidth * -0.000138739) - (0.615664 * windowWidth) + 502.695 + 'px');
				else
					orta.style.setProperty("height", (windowWidth * windowWidth * -0.000138739) - (0.615664 * windowWidth) + 502.695 + 'px');
			}
		}
		else {
			if(windowWidth >= 1582) {
				if(ifadeHeight > initial_IfadeHeight)
					orta.style.setProperty("height", ifadeHeight - initial_IfadeHeight - 1 + 15 + 'px');
				else
					orta.style.setProperty("height", '15px');
			}
			else if(1554 <= windowWidth && windowWidth <= 1581) {
				if(ifadeHeight > initial_IfadeHeight)
					orta.style.setProperty("height", ifadeHeight - initial_IfadeHeight - 1 + (-0.481481 * windowWidth) + 776.222 + 'px');
				else
					orta.style.setProperty("height", (-0.481481 * windowWidth) + 776.222 + 'px');
			}
			else if(1332 <= windowWidth && windowWidth <= 1553) {
				if(ifadeHeight > initial_IfadeHeight)
					orta.style.setProperty("height", ifadeHeight - initial_IfadeHeight - 1 + (-0.140271 * windowWidth) + 217.842 + 'px');
				else
					orta.style.setProperty("height", (-0.140271 * windowWidth) + 217.842 + 'px');
			}
			else if(1110 <= windowWidth && windowWidth <= 1331) {
				if(ifadeHeight > initial_IfadeHeight)
					orta.style.setProperty("height", ifadeHeight - initial_IfadeHeight - 1 + (-0.171946 * windowWidth) + 228.86 + 'px');
				else
					orta.style.setProperty("height", (-0.171946 * windowWidth) + 228.86 + 'px');
			}
			else if(888 <= windowWidth && windowWidth <= 1109) {
				if(ifadeHeight > initial_IfadeHeight)
					orta.style.setProperty("height", ifadeHeight - initial_IfadeHeight - 1 + (-0.190045 * windowWidth) + 210.76 + 'px');
				else
					orta.style.setProperty("height", (-0.190045 * windowWidth) + 210.76 + 'px');
			}
			else if(886 <= windowWidth && windowWidth <= 887) {
				if(ifadeHeight > initial_IfadeHeight)
					orta.style.setProperty("height", ifadeHeight - initial_IfadeHeight - 1 + 'px');
				else
					orta.style.setProperty("height", '0px');
			}
			else if(757 <= windowWidth && windowWidth <= 885) {
				if(ifadeHeight > initial_IfadeHeight)
					orta.style.setProperty("height", ifadeHeight - initial_IfadeHeight - 1 + (-0.71875 * windowWidth) + 702.094 + 'px');
				else
					orta.style.setProperty("height", (-0.71875 * windowWidth) + 702.094 + 'px');
			}
			else if(470 <= windowWidth && windowWidth <= 756) {
				if(ifadeHeight > initial_IfadeHeight)
					orta.style.setProperty("height", ifadeHeight - initial_IfadeHeight - 1 + (-0.678322 * windowWidth) + 578.811 + 'px');
				else
					orta.style.setProperty("height", (-0.678322 * windowWidth) + 578.811 + 'px');
			}
			else if(280 <= windowWidth && windowWidth <= 469) {
				if(ifadeHeight > initial_IfadeHeight)
					orta.style.setProperty("height", ifadeHeight - initial_IfadeHeight - 1 + (-0.730159 * windowWidth) + 636.444 + 'px');
				else
					orta.style.setProperty("height", (-0.730159 * windowWidth) + 636.444 + 'px');
			}
			else if(168 <= windowWidth && windowWidth <= 279) {
				if(ifadeHeight > initial_IfadeHeight)
					orta.style.setProperty("height", ifadeHeight - initial_IfadeHeight - 1 + (-0.720721 * windowWidth) + 661.081 + 'px');
				else
					orta.style.setProperty("height", (-0.720721 * windowWidth) + 661.081 + 'px');
			}
			else {
				if(ifadeHeight > initial_IfadeHeight)
					orta.style.setProperty("height", ifadeHeight - initial_IfadeHeight - 1 + (windowWidth * windowWidth * -0.0110193) + (1.2562 * windowWidth) + 668.532 + 'px');
				else
					orta.style.setProperty("height", (windowWidth * windowWidth * -0.0110193) + (1.2562 * windowWidth) + 668.532 + 'px');
			}
		}
	}
	else {
		if(windowWidth <= 885)
			orta.style.setProperty("height", (windowWidth * windowWidth * 0.000850837) - (1.57216 * windowWidth) + 724.966 + 'px');
		else
			orta.style.setProperty("height", '0px'); // removes div#orta when you click to sure1 and by doing so making sure1.value = '' and by doing so removing all text WITH WILL OF THE SACRED SUPREME KING RAHMAN ALLAH
	}
}

function containerHeighter()
{
	if(1585 <= windowWidth) {
		if(browser == "Firefox" || browser == "Firefox-Android")
			container.style.height =  (8 * lineHeight) + 'px'; // 8 * 79px = "632px";
		else
			container.style.height =  (7 * lineHeight) + 'px'; // 7 * 92px = "644px";
	}
	else if(886 <= windowWidth && windowWidth < 1585)
		container.style.height = "calc(41.5vw - 1px)";
	if(886 > windowWidth && windowWidth > 756)
		container.style.height = ((6 * lineHeight) - 1) + 'px'; // (6 * 79) - 1 = 467px  or  (6 * 92) - 1 = 545px
	else if(756 >= windowWidth)
		container.style.height = ((5 * lineHeight) - 1) + 'px';  // (5 * 79) - 1 = 388px  or  (5 * 92) - 1 = 453px // sure1 değerini boşaltıp tekrar doldurduktan sonra renklendirme yapılmasa dahi ve ifadenin genişliği artırılsa dahi container'ın yüksekliğini güncelle ki aşağıdaki harf sayımları yukarı kaymasın
}

let heightIfade;

const resize_ob = new ResizeObserver(function(entries) {
	// since we are observing only a single element, so we access the first element in entries array
	let rect = entries[0].contentRect;

	// current width & height
	heightIfade = rect.height;
	document.getElementById("satirlar").style.setProperty("height", heightIfade + 'px');

	ifade.value = ifade.value.replace(ekleme, "");
	ekleme = "";

	var num_of_nl;

	if(browser == "Firefox" || browser == "Firefox-Android")
		num_of_nl = parseInt(heightIfade / 79) + 1; // textarea'nın sonuna kadar toplamın gösterilebilmesi için +1 gerekli
	else
		num_of_nl = parseInt(heightIfade / 92) + 1; // textarea'nın sonuna kadar toplamın gösterilebilmesi için +1 gerekli

	for(var i = 0; i < num_of_nl; i++)
		ekleme += "\n";

	ifade.value += ekleme;

	getAndroidVersion();
	if (androidVersion >= 11) $('#ifade').trigger('input'); // for samsung devices which has android 11 or higher

	if(document.getElementsByClassName("hwt-backdrop")[0]) // for to do not throw error when first called by load event function
		document.getElementsByClassName("hwt-backdrop")[0].style.setProperty("padding-bottom", heightIfade + 'px');
	document.getElementById("satirlar").style.setProperty("padding-bottom", heightIfade-1 + 'px'); // -1 for esthetic reason of to not see the unnecessary bottom line at the loading
	
	if(sure1.value == '' && ifade.value == ekleme){
		document.getElementById("satirlar").style.display = "none";
		// below is bug fix for dangling 0 showing div of "toplam" only when ifade.value cleaned after scrolling until to the middle of the first line of textarea:
		toplam.style.display = "none";
		ifadeWidther(heightIfade);
		ifade.value = '';
	}
	
	ortaHeighter(heightIfade);

	containerHeighter();

	if(elementsOverlap(ifade, bottomRightBox)) bottomRightBox.style.visibility = "hidden";
	else bottomRightBox.style.visibility = "visible";

	colorTable(); // bu fonksiyonun burada çağrılmasının nedeni linkten yükleme yapıldığında VAHİD, ZU'L FADL'İL AZİM, MECİD, CAMİ isimlerinin ebced değeri kontrol edilirken BISMILLAHIRRAHMANIRRAHIM tablosunu gösterebilmek
});

$(".ayetbox").on("input", function(){
	if(sure1.value == '' && ifade.value == ekleme){
		document.getElementById("satirlar").style.display = "none";
		// below is bug fix for dangling 0 showing div of "toplam" only when ifade.value cleaned after scrolling until to the middle of the first line of textarea:
		toplam.style.display = "none";
		ifadeWidther();
		ifade.value = '';
		containerHeighter();
	}
})

var windowWidth;

$(window).load(function(){
	windowWidth = window.innerWidth;
	ifadeWidther();
	ifadeHeighter();
	initial_IfadeHeight = ifade.offsetHeight;
	resize_ob.observe(ifade); // en baştan hiç renklendirme yapılmayan bir sure açıldıktan sonra ifadenin genişliği artırılsa dahi container'ın yüksekliğini güncelle ki aşağıdaki harf sayımları yukarı kaymasın
});

var resizeFlag = 1;

window.addEventListener("resize", function() {
    windowWidth = window.innerWidth;
	ifadeWidther();
	ifadeHeighter();
	initial_IfadeHeight = ifade.offsetHeight;

	if(ifade.value) resizeFlag = 0;
	else resizeFlag = 1;
	
	if(resizeFlag == 0) loaded();
});

function copyTextSizer()
{
	var width = ifade.clientWidth;

	document.getElementById("copyText").style.setProperty("width", width + "px");

	if(ovpl.checked && document.getElementById("coloredDiv"))
	{
		document.getElementsByClassName("hwt-backdrop")[0].style.setProperty('width', 'max-content', 'important');
		document.getElementsByClassName("hwt-highlights")[0].style.setProperty('width', 'max-content', 'important');
	}
	// jquery ile genişlik ataması yapma inşALLAH çünkü floating point arithmetic hatasına neden oluyor
	// ve bu nedenle renklendirmeler kayıyor bazı genişliklerde chrome ve mobil safari'de
	else if(document.getElementById("coloredDiv"))
		document.getElementById("coloredDiv").style.setProperty("width", width + "px");
}

jQuery(document).ready(function($) {

    // Store the window width
    var windowWidth = $(window).width();

    // Resize Event
    $(window).resize(function()
	{
        // Check window width has actually changed and it's not just iOS triggering a resize event on scroll:
        if ($(window).width() != windowWidth) { // only when window width is change WITH WILL OF THE SACRED SUPREME KING RAHMAN 1 GOD
            
			// Update the window width for next time:
            windowWidth = $(window).width();

            // Do stuff here:

			// hence mobile safari counts scrolling as a resize event so exclude it WITH WILL OF THE SACRED SUPREME KING RAHMAN!
			copyTextSizer(); // is a very cruical for preventing massive color slippings when window is resized WITH WILL OF THE SACRED SUPREME KING RAHMAN MERCIFUL 1 AND ONLY GOD!

			
        }
        // Otherwise do nothing

    });

	copyTextSizer();
});

function ifadeWidther()
{
	var widthC = container.offsetWidth;
	var widthS = document.getElementById("satirlar").offsetWidth;
	ifade.style.width = widthC - widthS + 'px';
	copyTextSizer();
}

function ifadeHeighter()
{
	ortaHeighter(heightIfade);
	containerHeighter();

	var heightC = container.offsetHeight;
	var heightO = orta.offsetHeight;
	
	var artık = (heightC + heightO) % lineHeight;
	
	var yükseklik = heightC + heightO - artık - 1; // 1 px en alttaki satırın çizgisi gözükmesin diye estetik nedenlerle çıkarılıyor KUTSAL KRAL ULU ZARİF 'İN İSTEĞİYLE <3
	
	if(windowWidth >= 886) {
		ifade.style.setProperty("height", yükseklik + 'px');
		ifade.style.setProperty("min-height", yükseklik + 'px');
		document.getElementById("nextSura").style.marginTop = -1 * (heightC % lineHeight) + "px";
		document.getElementById("notFirefox").style.marginTop = -1 * (heightC % lineHeight) + "px";
	}
	else if(886 > windowWidth && windowWidth > 756){
		ifade.style.setProperty("height", ((6 * lineHeight) - 1) + 'px'); // (6 * 79) - 1 = 467px  or  (6 * 92) - 1 = 545px
		ifade.style.setProperty("min-height", ((6 * lineHeight) - 1) + 'px'); // (6 * 79) - 1 = 467px  or  (6 * 92) - 1 = 545px
		document.getElementById("nextSura").style.marginTop = "0px";
		document.getElementById("notFirefox").style.marginTop = "0px";
	}
	else {
		ifade.style.setProperty("height", ((5 * lineHeight) - 1) + 'px'); // (5 * 79) - 1 = 388px  or  (5 * 92) - 1 = 453px
		ifade.style.setProperty("min-height", ((5 * lineHeight) - 1) + 'px'); // (5 * 79) - 1 = 388px  or  (5 * 92) - 1 = 453px
		document.getElementById("nextSura").style.marginTop = "0px";
		document.getElementById("notFirefox").style.marginTop = "0px";
	}
}

var lttrs = ['ا','ب','ج','د','ه','و','ز','ح','ط','ي','ك','ل','م','ن','س','ع','ف','ص','ق','ر','ش','ت','ث','خ','ذ','ض','ظ','غ','الله','الرحمن','الرحيم','اسم'];

function killColors() {
	if(document.getElementById("coloredDiv"))
		$('#ifade').highlightWithinTextarea('destroy');
}

function renkleri_temizle()
{
	var idSelector = function() { return this.id; };
	var selections = $("input[class=seçenekler]:checked").map(idSelector).get();

	for(harf in selections){
		if(selections[harf] == 'ا') {
			clrltrs[0] = [];
			clrltrs[35] = [];
		}
		else if(selections[harf] == 'ب') clrltrs[1] = [];
		else if(selections[harf] == 'ج') clrltrs[2] = [];
		else if(selections[harf] == 'د') clrltrs[3] = [];
		else if(selections[harf] == 'ه') clrltrs[4] = [];
		else if(selections[harf] == 'و') clrltrs[5] = [];
		else if(selections[harf] == 'ز') clrltrs[6] = [];
		else if(selections[harf] == 'ح') clrltrs[7] = [];
		else if(selections[harf] == 'ط') clrltrs[8] = [];
		else if(selections[harf] == 'ي') clrltrs[9] = [];
		else if(selections[harf] == 'ك') clrltrs[10] = [];
		else if(selections[harf] == 'ل') {
			clrltrs[11] = [];
			clrltrs[34] = [];
		}
		else if(selections[harf] == 'م') clrltrs[12] = [];
		else if(selections[harf] == 'ن') clrltrs[13] = [];
		else if(selections[harf] == 'س') clrltrs[14] = [];
		else if(selections[harf] == 'ع') clrltrs[15] = [];
		else if(selections[harf] == 'ف') clrltrs[16] = [];
		else if(selections[harf] == 'ص') clrltrs[17] = [];
		else if(selections[harf] == 'ق') clrltrs[18] = [];
		else if(selections[harf] == 'ر') clrltrs[19] = [];
		else if(selections[harf] == 'ش') clrltrs[20] = [];
		else if(selections[harf] == 'ت') clrltrs[21] = [];
		else if(selections[harf] == 'ث') clrltrs[22] = [];
		else if(selections[harf] == 'خ') clrltrs[23] = [];
		else if(selections[harf] == 'ذ') clrltrs[24] = [];
		else if(selections[harf] == 'ض') clrltrs[25] = [];
		else if(selections[harf] == 'ظ') clrltrs[26] = [];
		else if(selections[harf] == 'غ') clrltrs[27] = [];
		else if(selections[harf] == 'الله') {
			clrltrs[28] = [];
			clrltrs[29] = [];
		}
		else if(selections[harf] == 'الرحمن') clrltrs[30] = [];
		else if(selections[harf] == 'الرحيم') clrltrs[31] = [];
		else if(selections[harf] == 'اسم') {
			clrltrs[32] = [];
			clrltrs[33] = [];
		}
		document.getElementById(selections[harf]).checked = false;
		colorButton(selections[harf]);
	}
	
	document.getElementById("satirlar").style.display = "none";
	// below is bug fix for dangling 0 showing div of "toplam" only when ifade.value cleaned after scrolling until to the middle of the first line of textarea:
	toplam.style.display = "none";
	
	killColors();

	ifadeWidther();
}

function tüm_renkleri_temizle()
{
	for(harf in lttrs){
		if(lttrs[harf] == 'ا') {
			clrltrs[0] = [];
			clrltrs[35] = [];
		}
		else if(lttrs[harf] == 'ب') clrltrs[1] = [];
		else if(lttrs[harf] == 'ج') clrltrs[2] = [];
		else if(lttrs[harf] == 'د') clrltrs[3] = [];
		else if(lttrs[harf] == 'ه') clrltrs[4] = [];
		else if(lttrs[harf] == 'و') clrltrs[5] = [];
		else if(lttrs[harf] == 'ز') clrltrs[6] = [];
		else if(lttrs[harf] == 'ح') clrltrs[7] = [];
		else if(lttrs[harf] == 'ط') clrltrs[8] = [];
		else if(lttrs[harf] == 'ي') clrltrs[9] = [];
		else if(lttrs[harf] == 'ك') clrltrs[10] = [];
		else if(lttrs[harf] == 'ل') {
			clrltrs[11] = [];
			clrltrs[34] = [];
		}
		else if(lttrs[harf] == 'م') clrltrs[12] = [];
		else if(lttrs[harf] == 'ن') clrltrs[13] = [];
		else if(lttrs[harf] == 'س') clrltrs[14] = [];
		else if(lttrs[harf] == 'ع') clrltrs[15] = [];
		else if(lttrs[harf] == 'ف') clrltrs[16] = [];
		else if(lttrs[harf] == 'ص') clrltrs[17] = [];
		else if(lttrs[harf] == 'ق') clrltrs[18] = [];
		else if(lttrs[harf] == 'ر') clrltrs[19] = [];
		else if(lttrs[harf] == 'ش') clrltrs[20] = [];
		else if(lttrs[harf] == 'ت') clrltrs[21] = [];
		else if(lttrs[harf] == 'ث') clrltrs[22] = [];
		else if(lttrs[harf] == 'خ') clrltrs[23] = [];
		else if(lttrs[harf] == 'ذ') clrltrs[24] = [];
		else if(lttrs[harf] == 'ض') clrltrs[25] = [];
		else if(lttrs[harf] == 'ظ') clrltrs[26] = [];
		else if(lttrs[harf] == 'غ') clrltrs[27] = [];
		else if(lttrs[harf] == 'الله') {
			clrltrs[28] = [];
			clrltrs[29] = [];
		}
		else if(lttrs[harf] == 'الرحمن') clrltrs[30] = [];
		else if(lttrs[harf] == 'الرحيم') clrltrs[31] = [];
		else if(lttrs[harf] == 'اسم') {
			clrltrs[32] = [];
			clrltrs[33] = [];
		}
		document.getElementById(lttrs[harf]).checked = false;
		colorButton(lttrs[harf]);
	}

	document.getElementById("satirlar").style.display = "none";
	// below is bug fix for dangling 0 showing div of "toplam" only when ifade.value cleaned after scrolling until to the middle of the first line of textarea:
	toplam.style.display = "none";
	
	killColors();
	
	ifadeWidther();
}

function renkle(ltrArray)
{
	loading();

	let harf;

	nameFlag = 0;
	setTimeout(function(){
		for (var j = 0; j < ltrArray.length; j++) {
			harf = ltrArray[j];
			renklendirr(harf);
		}
		rengarenk();
		for (var j = 0; j < ltrArray.length; j++) {
			harf = ltrArray[j];
			document.getElementById(harf).checked = true;    $("#"+harf).trigger('change');    colorButton(harf); // mukatta harfinin/harflerinin toplam sayısı için
		}
		nameFlag = 1;
		setTimeout(loaded, 1000);
	}, 1000);	
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
		document.getElementsByClassName("caption")[0].style.display = "none";
		document.getElementsByClassName("caption")[1].style.display = "none";
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
	// for to not showing its ::before pseudo element in unwanted letter counting pages at some browsers one is firefox, #isim-table should always be hidden when clearing tables..:
	document.getElementById("isim-table").style.display = "none";
}

function checkLetter(array){
	for(var i = 0; i < array.length; i++) 
		if(ifade.value == array[i] || ifade.value == array[i] + ekleme)
			return true;
	return false;
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
	clearTable(lastTable);
	
	if(checkLetter(['ا','م','س','ب','ل','ه','ر','ح','ن','ي',"واحد","ذوالفضل العظیم","مجید","جامع","بسم","الله","الرحمن","الرحيم","بسم الله الرحمن الرحيم","بس","بسم","بسم ا","بسم ال","بسم الل","بسم الله","بسم الله ا","بسم الله ال","بسم الله الر","بسم الله الرح","بسم الله الرحم","بسم الله الرحمن","بسم الله الرحمن ا","بسم الله الرحمن ال","بسم الله الرحمن الر","بسم الله الرحمن الرح","بسم الله الرحمن الرحي"]) || document.getElementById('اسم').checked == true || document.getElementById('الله').checked == true || document.getElementById('الرحمن').checked == true || document.getElementById('الرحيم').checked == true)
	{
		document.querySelector('#BISMILLAHIRRAHMANIRRAHIM-table').querySelector('.flip-card-inner').classList.add('is-flipped');
		document.getElementById("BISMILLAHIRRAHMANIRRAHIM").style.display = "inline-table";
		document.getElementById("BISMILLAHIRRAHMANIRRAHIM-2").style.display = "inline-table";
		document.getElementById("uyarı").style.display = "block";
		document.getElementsByClassName("caption")[0].style.display = "block";
		document.getElementsByClassName("caption")[1].style.display = "block";
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
		document.querySelector('#Q-table').querySelector('.flip-card-inner').classList.add('is-flipped');
		document.getElementById("Q").style.display = "block";
		document.getElementById("r"+sure1.value).classList.add('selectedRow');

		if(document.getElementById('ق').checked == true) document.getElementById("r"+sure1.value).children.item(0).classList.add('قق');
		lastTable = "#Q";
		localStorage.setItem('lastTable', lastTable);
	}
	else if(!ayet1.value && sure1.value == 68 && document.getElementById('اسم').checked == false && document.getElementById('الله').checked == false && document.getElementById('الرحمن').checked == false && document.getElementById('الرحيم').checked == false)
	{
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
		document.getElementsByClassName("caption")[0].style.display = "none";
		document.getElementsByClassName("caption")[1].style.display = "none";
		document.getElementById("isim-table").style.display = "none";
		document.getElementById("bismTable19").style.display = "none";
	}
}

function colorMuqatta()
{
	if(sure1.value && !ayet1.value)
	{
		if(sure1.value == 2 || sure1.value == 3 || (29 <= sure1.value && sure1.value <= 32)) renkle(['ا','ل','م']);
		else if(sure1.value == 7) renkle(['ا','ل','م','ص']);
		else if(sure1.value != 13 && 10 <= sure1.value && sure1.value <= 15) renkle(['ا','ل','ر']);
		else if(sure1.value == 13) renkle(['ا','ل','م','ر']);
		else if(sure1.value == 19) renkle(['ك','ه','ي','ع','ص']);
		else if(sure1.value == 20) renkle(['ط','ه']);
		else if(sure1.value == 26 || sure1.value == 28) renkle(['ط','س','م']);
		else if(sure1.value == 27) renkle(['ط','س']);
		else if(sure1.value == 36) renkle(['ي','س']);
		else if(sure1.value == 38) renkle(['ص']);
		else if(sure1.value != 42 && 40 <= sure1.value && sure1.value <= 46) renkle(['ح','م']);
		else if(sure1.value == 42) renkle(['ح','م','ع','س','ق']);
		else if(sure1.value == 50) renkle(['ق']);
		else if(sure1.value == 68) renkle(['ن']);
	}
}

var clrltrs = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];

function renklendirr(ltr)
{
	var varmı = false;
	for(var r = 0; r < clrltrs.length; r++) // 33 harf + İSİM'den oluşan clrltrs renklendirme matrisi içinde
		if(clrltrs[r][0] == ltr) // harf ya da İSİM varsa
			varmı = true; // vardır

	if(!varmı) // harf ya da İSİM yoksa, o harf ya da İSMİ renklendirilecek harf veya İSİM'lere kat
	{
		if(ltr == 'ا') {
			clrltrs[0].push('ا','ء','ـٔ','آ','ٱ','أ','إ');
			clrltrs[35] = ['ﻻ','ﻹ','ﻷ','ﻵ','لَا','لِأ','لْأ','لَّا','لَٱ','لًا','لْإ','لَأ','لِٱ','لًّا','لَّٱ','لِّأ','لَإ','لِإ','لا'];
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
			clrltrs[34] = ['ﻻ','ﻹ','ﻷ','ﻵ','لَا','لِأ','لْأ','لَّا','لَٱ','لًا','لْإ','لَأ','لِٱ','لًّا','لَّٱ','لِّأ','لَإ','لِإ','لا'];
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
}

const ovpl = document.getElementById("ovpl"),
	  ovplBox = document.getElementById("ovplBox");

$("body").on('click', placeHolder);
$(window).resize(placeHolder);

function placeHolder(){  // refreshes placeholder if you don't enter sura value and click on body
	if(403 < windowWidth && windowWidth < 1162)
		ifade.placeholder = "copy & paste your own QURAN text\n...or start writing arabic";
	else
		ifade.placeholder = "...copy & paste your own QURAN text or start writing arabic";
}

function renklendir(ltr)
{
	loading();

	var varmı = false;
	for(var r = 0; r < clrltrs.length; r++) // 33 harf + İSİM'den oluşan clrltrs renklendirme matrisi içinde
		if(clrltrs[r][0] == ltr) // harf ya da İSİM varsa
			varmı = true;

	if(varmı){ // harf ya da İSİM varsa o harf ya da İSMİ çıkar/sil:
		if(ltr == 'ا') {
			clrltrs[0] = [];
			clrltrs[35] = [];
		}
		else if(ltr == 'ب') clrltrs[1] = [];
		else if(ltr == 'ج') clrltrs[2] = [];
		else if(ltr == 'د') clrltrs[3] = [];
		else if(ltr == 'ه') clrltrs[4] = [];
		else if(ltr == 'و') clrltrs[5] = [];
		else if(ltr == 'ز') clrltrs[6] = [];
		else if(ltr == 'ح') clrltrs[7] = [];
		else if(ltr == 'ط') clrltrs[8] = [];
		else if(ltr == 'ي') clrltrs[9] = [];
		else if(ltr == 'ك') clrltrs[10] = [];
		else if(ltr == 'ل') {
			clrltrs[11] = [];
			clrltrs[34] = [];
		}
		else if(ltr == 'م') clrltrs[12] = [];
		else if(ltr == 'ن') clrltrs[13] = [];
		else if(ltr == 'س') clrltrs[14] = [];
		else if(ltr == 'ع') clrltrs[15] = [];
		else if(ltr == 'ف') clrltrs[16] = [];
		else if(ltr == 'ص') clrltrs[17] = [];
		else if(ltr == 'ق') clrltrs[18] = [];
		else if(ltr == 'ر') clrltrs[19] = [];
		else if(ltr == 'ش') clrltrs[20] = [];
		else if(ltr == 'ت') clrltrs[21] = [];
		else if(ltr == 'ث') clrltrs[22] = [];
		else if(ltr == 'خ') clrltrs[23] = [];
		else if(ltr == 'ذ') clrltrs[24] = [];
		else if(ltr == 'ض') clrltrs[25] = [];
		else if(ltr == 'ظ') clrltrs[26] = [];
		else if(ltr == 'غ') clrltrs[27] = [];
		else if(ltr == 'الله') {
			clrltrs[28] = [];
			clrltrs[29] = [];
		}
		else if(ltr == 'الرحمن') clrltrs[30] = [];
		else if(ltr == 'الرحيم') clrltrs[31] = [];
		else if(ltr == 'اسم') {
			clrltrs[32] = [];
			clrltrs[33] = [];
		}
	}
	else{ // harf ya da İSİM yoksa o harf ya da İSMİ renklendirilecek harf veya İSİM'lere kat
		if(ltr == 'ا') {
			clrltrs[0].push('ا','ء','ـٔ','آ','ٱ','أ','إ');
			clrltrs[35] = ['ﻻ','ﻹ','ﻷ','ﻵ','لَا','لِأ','لْأ','لَّا','لَٱ','لًا','لْإ','لَأ','لِٱ','لًّا','لَّٱ','لِّأ','لَإ','لِإ','لا'];
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
			clrltrs[34] = ['ﻻ','ﻹ','ﻷ','ﻵ','لَا','لِأ','لْأ','لَّا','لَٱ','لًا','لْإ','لَأ','لِٱ','لًّا','لَّٱ','لِّأ','لَإ','لِإ','لا'];
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

	setTimeout(() => {
		message(); // for updating url address of browser WITH WILL OF THE SACRED SUPREME KING RAHMAN		
	}, 570);
}

function rengarenk()
{
	loading();

	$('textarea').highlightWithinTextarea({
		highlight:
		[
			{ highlight: clrltrs[35], className: 'lamelifinElifi' },
			{ highlight: clrltrs[34], className: 'lamelifinLamı' },
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
			{ highlight: clrltrs[33], className: 'endSuffixedSoNotCounted' },
			{ highlight: ["r"], className: 'newLine' } // special newLine reset character "r" for linebreak point detection with WILL OF THE SACRED SUPREME KING RAHMAN!
		]
	});

	yazmayaBaşlamaTemizliği = true;

	setTimeout(function(){
		loaded();
	}, 1000);
}

var currentURL;

$("#kopyala").on('click', message);

function message() {

	var surebir = sure1.value;
	var sureiki = sure2.value;
	var ayetbir1 = ayet1.value;
	var ayetiki2 = ayet2.value;
	var sn = document.getElementById('sn');

    var kopyalamaLinki = "19x334.com/#"
    
    if (surebir) {
		if (ayetbir1) {
			if (sureiki) {
				if (ayetiki2) {
					if (sayı == 0) {
						if (ovpl.checked) {
							if (sn.checked) {
								currentURL = kopyalamaLinki+"ovpl=1"+"&onv=1"+"&sura="+surebir+"&verse="+ayetbir1+"&sura2="+sureiki+"&verse2="+ayetiki2;
								mesaj = currentURL + "\n\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
							}
							else{
								currentURL = kopyalamaLinki+"ovpl=1"+"&onv=0"+"&sura="+surebir+"&verse="+ayetbir1+"&sura2="+sureiki+"&verse2="+ayetiki2;
								mesaj = currentURL + "\n\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
							}
						}
						else {
							if (sn.checked) {
								currentURL = kopyalamaLinki+"ovpl=0"+"&onv=1"+"&sura="+surebir+"&verse="+ayetbir1+"&sura2="+sureiki+"&verse2="+ayetiki2;
								mesaj = currentURL + "\n\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
							}
							else{
								currentURL = kopyalamaLinki+"ovpl=0"+"&onv=0"+"&sura="+surebir+"&verse="+ayetbir1+"&sura2="+sureiki+"&verse2="+ayetiki2;
								mesaj = currentURL + "\n\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
							}
						}
					}
					else {
						if (ovpl.checked) {
							if (sn.checked) {
								currentURL = kopyalamaLinki+"ovpl=1"+"&onv=1"+"&sura="+surebir+"&verse="+ayetbir1+"&sura2="+sureiki+"&verse2="+ayetiki2+"&count="+sclnhrf;
								mesaj = currentURL + "\n\n" + "Total " + metin + sayı + "\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
							}
							else{
								currentURL = kopyalamaLinki+"ovpl=1"+"&onv=0"+"&sura="+surebir+"&verse="+ayetbir1+"&sura2="+sureiki+"&verse2="+ayetiki2+"&count="+sclnhrf;
								mesaj = currentURL + "\n\n" + "Total " + metin + sayı + "\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
							}
						}
						else {
							if (sn.checked) {
								currentURL = kopyalamaLinki+"ovpl=0"+"&onv=1"+"&sura="+surebir+"&verse="+ayetbir1+"&sura2="+sureiki+"&verse2="+ayetiki2+"&count="+sclnhrf;
								mesaj = currentURL + "\n\n" + "Total " + metin + sayı + "\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
							}
							else{
								currentURL = kopyalamaLinki+"ovpl=0"+"&onv=0"+"&sura="+surebir+"&verse="+ayetbir1+"&sura2="+sureiki+"&verse2="+ayetiki2+"&count="+sclnhrf;
								mesaj = currentURL + "\n\n" + "Total " + metin + sayı + "\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
							}
						}
					}
				}
				else {
					if (sayı == 0) {
						if (ovpl.checked) {
							if (sn.checked) {
								currentURL = kopyalamaLinki+"ovpl=1"+"&onv=1"+"&sura="+surebir+"&verse="+ayetbir1+"&sura2="+sureiki;
								mesaj = currentURL + "\n\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
							}
							else{
								currentURL = kopyalamaLinki+"ovpl=1"+"&onv=0"+"&sura="+surebir+"&verse="+ayetbir1+"&sura2="+sureiki;
								mesaj = currentURL + "\n\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
							}
						}
						else {
							if (sn.checked) {
								currentURL = kopyalamaLinki+"ovpl=0"+"&onv=1"+"&sura="+surebir+"&verse="+ayetbir1+"&sura2="+sureiki;
								mesaj = currentURL + "\n\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
							}
							else{
								currentURL = kopyalamaLinki+"ovpl=0"+"&onv=0"+"&sura="+surebir+"&verse="+ayetbir1+"&sura2="+sureiki;
								mesaj = currentURL + "\n\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
							}
						}
					}
					else {
						if (ovpl.checked) {
							if (sn.checked) {
								currentURL = kopyalamaLinki+"ovpl=1"+"&onv=1"+"&sura="+surebir+"&verse="+ayetbir1+"&sura2="+sureiki+"&count="+sclnhrf;
								mesaj = currentURL + "\n\n" + "Total " + metin + sayı + "\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
							}
							else{
								currentURL = kopyalamaLinki+"ovpl=1"+"&onv=0"+"&sura="+surebir+"&verse="+ayetbir1+"&sura2="+sureiki+"&count="+sclnhrf;
								mesaj = currentURL + "\n\n" + "Total " + metin + sayı + "\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
							}	
						}
						else {
							if (sn.checked) {
								currentURL = kopyalamaLinki+"ovpl=0"+"&onv=1"+"&sura="+surebir+"&verse="+ayetbir1+"&sura2="+sureiki+"&count="+sclnhrf;
								mesaj = currentURL + "\n\n" + "Total " + metin + sayı + "\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
							}
							else{
								currentURL = kopyalamaLinki+"ovpl=0"+"&onv=0"+"&sura="+surebir+"&verse="+ayetbir1+"&sura2="+sureiki+"&count="+sclnhrf;
								mesaj = currentURL + "\n\n" + "Total " + metin + sayı + "\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
							}
						}
					}
				}
			}
			else {
				if (sayı == 0) {
					if (ovpl.checked) {
						if (sn.checked) {
							currentURL = kopyalamaLinki+"ovpl=1"+"&onv=1"+"&sura="+surebir+"&verse="+ayetbir1;
							mesaj = currentURL + "\n\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime;
						}
						else{
							currentURL = kopyalamaLinki+"ovpl=1"+"&onv=0"+"&sura="+surebir+"&verse="+ayetbir1;
							mesaj = currentURL + "\n\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime;
						}
					}
					else {
						if (sn.checked) {
							currentURL = kopyalamaLinki+"ovpl=0"+"&onv=1"+"&sura="+surebir+"&verse="+ayetbir1;
							mesaj = currentURL + "\n\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime;
						}
						else{
							currentURL = kopyalamaLinki+"ovpl=0"+"&onv=0"+"&sura="+surebir+"&verse="+ayetbir1;
							mesaj = currentURL + "\n\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime;
						}
					}
				}
				else {
					if (ovpl.checked) {
						if (sn.checked) {
							currentURL = kopyalamaLinki+"ovpl=1"+"&onv=1"+"&sura="+surebir+"&verse="+ayetbir1+"&count="+sclnhrf;
							mesaj = currentURL + "\n\n" + "Total " + metin + sayı + "\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime;
						}
						else{
							currentURL = kopyalamaLinki+"ovpl=1"+"&onv=0"+"&sura="+surebir+"&verse="+ayetbir1+"&count="+sclnhrf;
							mesaj = currentURL + "\n\n" + "Total " + metin + sayı + "\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime;
						}
					}
					else{
						if (sn.checked) {
							currentURL = kopyalamaLinki+"ovpl=0"+"&onv=1"+"&sura="+surebir+"&verse="+ayetbir1+"&count="+sclnhrf;
							mesaj = currentURL + "\n\n" + "Total " + metin + sayı + "\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime;
						}
						else{
							currentURL = kopyalamaLinki+"ovpl=0"+"&onv=0"+"&sura="+surebir+"&verse="+ayetbir1+"&count="+sclnhrf;
							mesaj = currentURL + "\n\n" + "Total " + metin + sayı + "\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime;
						}
					}
				}
			}
		}
		else {
			if (sayı == 0) {
				if (ovpl.checked) {
					if (sn.checked) {
						currentURL = kopyalamaLinki+"ovpl=1"+"&onv=1"+"&sura="+surebir;
						mesaj = currentURL + "\n\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
					}
					else{
						currentURL = kopyalamaLinki+"ovpl=1"+"&onv=0"+"&sura="+surebir;
						mesaj = currentURL + "\n\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
					}
				}
				else{
					if (sn.checked) {
						currentURL = kopyalamaLinki+"ovpl=0"+"&onv=1"+"&sura="+surebir;
						mesaj = currentURL + "\n\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
					}
					else{
						currentURL = kopyalamaLinki+"ovpl=0"+"&onv=0"+"&sura="+surebir;
						mesaj = currentURL + "\n\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
					}
				}
			}
			else {
				if (ovpl.checked) {
					if (sn.checked) {
						currentURL = kopyalamaLinki+"ovpl=1"+"&onv=1"+"&sura="+surebir+"&count="+sclnhrf;
						mesaj = currentURL + "\n\n" + "Total " + metin + sayı + "\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
					}
					else{
						currentURL = kopyalamaLinki+"ovpl=1"+"&onv=0"+"&sura="+surebir+"&count="+sclnhrf;
						mesaj = currentURL + "\n\n" + "Total " + metin + sayı + "\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
					}
				}
				else {
					if (sn.checked) {
						currentURL = kopyalamaLinki+"ovpl=0"+"&onv=1"+"&sura="+surebir+"&count="+sclnhrf;
						mesaj = currentURL + "\n\n" + "Total " + metin + sayı + "\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
					}
					else{
						currentURL = kopyalamaLinki+"ovpl=0"+"&onv=0"+"&sura="+surebir+"&count="+sclnhrf;
						mesaj = currentURL + "\n\n" + "Total " + metin + sayı + "\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
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
						currentURL = kopyalamaLinki +"ovpl=1"+"&onv=1"+ "&statement=" + inputValue.replace(/[ ]+/gim, "_").replace(/[\n]+/gim, "-");
						mesaj = currentURL + "\n\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
					}
					else{
						currentURL = kopyalamaLinki +"ovpl=1"+"&onv=0"+ "&statement=" + inputValue.replace(/[ ]+/gim, "_").replace(/[\n]+/gim, "-");
						mesaj = currentURL + "\n\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
					}
				}
				else {
					if (sn.checked) {
						currentURL = kopyalamaLinki +"ovpl=0"+"&onv=1"+ "&statement=" + inputValue.replace(/[ ]+/gim, "_").replace(/[\n]+/gim, "-");
						mesaj = currentURL + "\n\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
					}
					else{
						currentURL = kopyalamaLinki +"ovpl=0"+"&onv=0"+ "&statement=" + inputValue.replace(/[ ]+/gim, "_").replace(/[\n]+/gim, "-");
						mesaj = currentURL + "\n\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
					}
				}
			}
			else {
				if (ovpl.checked) {
					if (sn.checked) {
						currentURL = kopyalamaLinki +"ovpl=1"+"&onv=1"+ "&statement=" + inputValue.replace(/[ ]+/gim, "_").replace(/[\n]+/gim, "-");
						mesaj = currentURL + "\n\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime;
					}
					else{
						currentURL = kopyalamaLinki +"ovpl=1"+"&onv=0"+ "&statement=" + inputValue.replace(/[ ]+/gim, "_").replace(/[\n]+/gim, "-");
						mesaj = currentURL + "\n\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime;
					}
				}
				else {
					if (sn.checked) {
						currentURL = kopyalamaLinki +"ovpl=0"+"&onv=1"+ "&statement=" + inputValue.replace(/[ ]+/gim, "_").replace(/[\n]+/gim, "-");
						mesaj = currentURL + "\n\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime;
					}
					else{
						currentURL = kopyalamaLinki +"ovpl=0"+"&onv=0"+ "&statement=" + inputValue.replace(/[ ]+/gim, "_").replace(/[\n]+/gim, "-");
						mesaj = currentURL + "\n\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime;
					}
				}
			}
		}
		else {
			if (ayet_sayisi) {
				if (ovpl.checked) {
					if (sn.checked) {
						currentURL = kopyalamaLinki +"ovpl=1"+"&onv=1"+ "&statement=" + inputValue.replace(/[ ]+/gim, "_").replace(/[\n]+/gim, "-")+"&count="+sclnhrf;
						mesaj = currentURL + "\n\n" + "Total " + metin + sayı + "\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
					}
					else{
						currentURL = kopyalamaLinki +"ovpl=1"+"&onv=0"+ "&statement=" + inputValue.replace(/[ ]+/gim, "_").replace(/[\n]+/gim, "-")+"&count="+sclnhrf;
						mesaj = currentURL + "\n\n" + "Total " + metin + sayı + "\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
					}
				}
				else {
					if (sn.checked) {
						currentURL = kopyalamaLinki +"ovpl=0"+"&onv=1"+ "&statement=" + inputValue.replace(/[ ]+/gim, "_").replace(/[\n]+/gim, "-")+"&count="+sclnhrf;
						mesaj = currentURL + "\n\n" + "Total " + metin + sayı + "\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
					}
					else{
						currentURL = kopyalamaLinki +"ovpl=0"+"&onv=0"+ "&statement=" + inputValue.replace(/[ ]+/gim, "_").replace(/[\n]+/gim, "-")+"&count="+sclnhrf;
						mesaj = currentURL + "\n\n" + "Total " + metin + sayı + "\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime + "\n" + "number of verses: " + ayet_sayisi;
					}
				}
			}
			else {
				if (ovpl.checked) {
					if (sn.checked) {
						currentURL = kopyalamaLinki +"ovpl=1"+"&onv=1"+ "&statement=" + inputValue.replace(/[ ]+/gim, "_").replace(/[\n]+/gim, "-")+"&count="+sclnhrf;
						mesaj = currentURL + "\n\n" + "Total " + metin + sayı + "\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime;
					}
					else{
						currentURL = kopyalamaLinki +"ovpl=1"+"&onv=0"+ "&statement=" + inputValue.replace(/[ ]+/gim, "_").replace(/[\n]+/gim, "-")+"&count="+sclnhrf;
						mesaj = currentURL + "\n\n" + "Total " + metin + sayı + "\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime;
					}
				}
				else {
					if (sn.checked) {
						currentURL = kopyalamaLinki +"ovpl=0"+"&onv=1"+ "&statement=" + inputValue.replace(/[ ]+/gim, "_").replace(/[\n]+/gim, "-")+"&count="+sclnhrf;
						mesaj = currentURL + "\n\n" + "Total " + metin + sayı + "\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime;
					}
					else{
						currentURL = kopyalamaLinki +"ovpl=0"+"&onv=0"+ "&statement=" + inputValue.replace(/[ ]+/gim, "_").replace(/[\n]+/gim, "-")+"&count="+sclnhrf;
						mesaj = currentURL + "\n\n" + "Total " + metin + sayı + "\n" + "abjad value: " + ebced + "\n" + "number of letters: " + harf_sayisi + "\n" + "number of words: " + kelime;
					}
				}
			}
		}
	}
	linkUpdate = true;
	window.location.hash = currentURL.slice(12, currentURL.length); // remove "19x334.com/#" section from start IF SACRED SUPREME KING RAHMAN WILLS
	linkUpdate = false;
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

	if (window.location.hash)
	{
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
			else if (p[0] === 'count') renkle(p[1].split('+'));
			else if (p[0] == 'ovpl') {
				if (p[1] == '1') ovpl.checked = true;
				else ovpl.checked = false;
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

	rengarenk(); // for renumbering stars in case of resizing in order to prevent newlines starting from any other number than 1 WITH WILL OF THE SACRED SUPREME KING RAHMAN

	// ULU ALLAH İSTERSE satırlar gösterildikten sonra daralan textarea satır genişliği nedeniyle alt satırlara taşan renklendirilen harflerin altındaki ve üstündeki yıldızlar içerisindeki satır sıra numaralarının satır başında sıfırlanacak şekilde tekrar hesaplanması gerekiyor yeni oluşan satır genişliklerine göre chrome dışındaki tarayıcılar safari, edge ve firefox'ta satır sıra numaralarının doğru gösterilmesi/hesaplanması için ... bunun içinde rengarenk(); fonksiyonu çağrılarak jquery.highlight-within-textarea.js içerisinde ULU ALLAH'IN İZNİYLE yaptığım değişikliklerle satır sıra numaralarının yeniden hesaplanması sağlanması gerekiyor ULU ALLAH'IN İZNİYLE doğru satır sıra numaralarının gözükmesi için chrome dışındaki tarayıcılar bu yenilemeyi kendileri yapmaları gerektiğini düşünemiyorlar ve benim burada manuel olarak rengarenk(); fonksiyonunu çağırmam gerekiyor firefox edge ve safari için ULU ALLAH'IN İZNİYLE :) bu rengarenk(); çağrısı aynı zamanda window resize durumunda da tetikleniyor olması gerektiği gibi ULU ALLAH'IN İSTEĞİYLE!

	document.getElementById("0").style.setProperty('border-top', '0px', 'important');
	document.getElementById("0").style.setProperty('margin-top', '-1px', 'important');
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

var alertFlag = 1;

$(window).load(function(){
	if(alertFlag == 1) alertt();
});

// önce "satır başına 1 ayet"i seçtiğimizde ve sonra renklendirecek harf seçtiğimizde
// hwt classlı katmanların daha sonradan aktif olmasından dolayı
// renklendirmenin tüm yatay yazı alanı boyunca etkili olabilmesi için
// değişiklikleri burada değil renkleriSay() fonksiyonunun içinde yapıyoruz:
$('.seçenekler').on('change', renkleriSay);


// do not put this in "jquery ready > resize" event beacuse it is not working properly maybe because it is too far from definition line of renkleriSay(); function or something else... research by testing IF SACRED SUPREME KING RAHMAN WILLS
$(window).resize(renkleriSay);

function playerHeighter()
{
	var playerHeight = 255;

	if(532 < window.innerWidth)
		playerHeight = 288;
	else if(286 <= window.innerWidth && window.innerWidth <= 532)
		playerHeight = Math.floor(0.560976 * window.innerWidth - 10.439);
	else
		playerHeight = 150;

	return playerHeight;
}

function playerHeighter2()
{
	var playerHeight = 383;

	if(530 < window.innerWidth)
		playerHeight = 383;
	else if(286 <= window.innerWidth && window.innerWidth <= 530)
		playerHeight = Math.floor(0.75 * window.innerWidth - 14.5);
	else
		playerHeight = 200;

	return playerHeight;
}

function playerHeighter3()
{
	var playerHeight = 512;

	if(532 < window.innerWidth)
		playerHeight = 512;
	else
		playerHeight = Math.floor(window.innerWidth - 20);

	return playerHeight;
}

// there is a good concern here for project https://github.com/aWordFromALLAH/unnamedWebProgrammingLanguage/ for ordering hustle of controlling heights of players in alerts in edge case of resizing of browser window by Grace of Supreme Rahman
// $(window).load(playerHeighter);
// $(window).resize(playerHeighter);
// $(window).load(playerHeighter2);
// $(window).resize(playerHeighter2);

var direction;

var notifications = [
	{
		imageUrl: "pic/book-arabic.png",
		title: "''<span class='inlineLtr ااا'>T</span><span class='inlineLtr ببب'>h</span><span class='inlineLtr ججج'>e</span><span class='inlineLtr ددد'>s</span><span class='inlineLtr ههه'>e</span> <span class='inlineLtr ووو'>A</span><span class='inlineLtr ززز'>r</span><span class='inlineLtr ححح'>e</span> <span class='inlineLtr ططط'>M</span><span class='inlineLtr ييي'>i</span><span class='inlineLtr ككك'>r</span><span class='inlineLtr ممم'>a</span><span class='inlineLtr للل'>c</span><span class='inlineLtr ننن'>l</span><span class='inlineLtr سسس'>e</span><span class='inlineLtr ععع'>s</span> <span style='display: block;'><span class='inlineLtr ففف'>O</span><span class='inlineLtr صصص'>f</span> <span class='inlineLtr ققق'>T</span><span class='inlineLtr ررر'>H</span><span class='inlineLtr ششش'>E</span> <span class='inlineLtr تتت'>B</span><span class='inlineLtr ثثث'>O</span><span class='inlineLtr خخخ'>O</span><span class='inlineLtr ضضض'>K</span><span class='inlineLtr ذذذ'>!</span>''</span>&\n<a href='/Appendix%2024,%20Tampering%20with%20the%20Word%20of%20God.html' target='_blank' class='red'>9:128-129 are from satan! NOT FROM THE SUPREME GOD!</a>",
		html: "<a target='_blank' href='http://honourableQURAN.blogspot.com/p/10.html?m=1#1'>10:1</a>, <a target='_blank' href='http://honourableQURAN.blogspot.com/p/12.html?m=1#1'>12:1</a>, <a target='_blank' href='http://honourableQURAN.blogspot.com/p/13.html?m=1#1'>13:1</a>, <a target='_blank' href='http://honourableQURAN.blogspot.com/p/15.html?m=1#1'>15:1</a>, <a target='_blank' href='http://honourableQURAN.blogspot.com/p/26.html?m=1#1'>26:1-2</a>, <a target='_blank' href='http://honourableQURAN.blogspot.com/p/27.html?m=1#1'>27:1</a>, <a target='_blank' href='http://honourableQURAN.blogspot.com/p/28.html?m=1#1'>28:1-2</a>, <a target='_blank' href='http://honourableQURAN.blogspot.com/p/31.html?m=1#1'>31:1-2</a><br><br><iframe height='" + playerHeighter().toString() + "' style='margin-left: -30.77px; width: calc(100% + 61.44px);' src='https://www.youtube.com/embed/e2myxJRz58Q' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe><br><h2><a class='red' target='_blank' href='/Appendix%2024,%20Tampering%20with%20the%20Word%20of%20God.html'>GOD HAS PRESERVED QURAN against alterations with THE MIRACLE OF 19! BY EXPOSING 2 human made additions: 9:128-129</a></h2><b>Sura 9 is 127 Verses <a target='_blank' href='/Appendix%2024,%20Tampering%20with%20the%20Word%20of%20God.html'>NOT 129 verses!</a> and <a target='_blank' href='http://honourableQURAN.blogspot.com/p/1.html'>QURAN</a> is Total 6346 = 19 x 334 Verses! (6+3+4+6 = 19) <a target='_blank' href='/Appendix%2024,%20Tampering%20with%20the%20Word%20of%20God.html'>NOT 6348 verses!</a> GOD HAS PRESERVED <a target='_blank' href='http://honourableQURAN.blogspot.com/p/1.html'>QURAN</a> against alterations by THE MIRACLE OF 19 and REVEALED that <a target='_blank' href='/Appendix%2024,%20Tampering%20with%20the%20Word%20of%20God.html'>2 fabrications added by hypocrites and idolaters</a> to THE QURAN after nabiyy's death.</b> <a target='_blank' href='/Appendix%2024,%20Tampering%20with%20the%20Word%20of%20God.html'><b>For More Information READ HERE!</a><br><br>< 19 ><br><br><a target='_blank' href='http://honourableQURAN.blogspot.com/p/3.html?m=1#78'>3:78</a> and from among them is a group who twist their tongues with The Book so that you may think it(9:128-129) is from The Book, while <a target='_blank' href='/Appendix%2024,%20Tampering%20with%20the%20Word%20of%20God.html'>it(9:128-129) is NOT FROM THE BOOK</a>, and they say it(9:128-129) is from GOD while <a target='_blank' href='/Appendix%2024,%20Tampering%20with%20the%20Word%20of%20God.html'>it(9:128-129) is NOT FROM GOD</a>, and they say lies about GOD while they know.<br><br><a target='_blank' href='http://honourableQURAN.blogspot.com/p/3.html?m=1#79'>3:79</a> <a target='_blank' href='/Appendix%2024,%20Tampering%20with%20the%20Word%20of%20God.html'>NEVER would a human being whom GOD blessed with the SCRIPTURE and nabiyyhood say to the people</a>, ''idolize me beside GOD.'' Instead, (He would say), ''DEVOTE yourselves ABSOLUTELY to your LORD ALONE,'' According to the SCRIPTURE you preach and The Teachings you learn.<br><br><a target='_blank' href='http://honourableQURAN.blogspot.com/p/3.html?m=1#80'>3:80</a> nor would he command you to idolize the angels and the nabiyys as lords. <a target='_blank' href='/Appendix%2024,%20Tampering%20with%20the%20Word%20of%20God.html'>would he exhort you to disbelieve after Becoming Surrenderers?</a><br><br><a target='_blank' href='http://honourableQURAN.blogspot.com/p/3.html?m=1#81'>3:81</a> GOD took a covenant from the nabiyys, saying, ''I will give you THE SCRIPTURE and Wisdom. Afterwards, A Messenger(<a target='_blank' href='https://www.youtube.com/watch?v=j6jVD6actVc'>Rashad Khalifa</a>) will come to confirm all existing SCRIPTURES. You shall BELIEVE IN Him(<a target='_blank' href='https://www.youtube.com/watch?v=j6jVD6actVc'>Rashad Khalifa</a>) and SUPPORT Him(<a target='_blank' href='https://www.youtube.com/watch?v=j6jVD6actVc'>Rashad Khalifa</a>).'' HE SAID, ''DO YOU AGREE WITH THIS, AND PLEDGE TO FULFILL THIS COVENANT?'' They said, ''WE AGREE.'' HE SAID, ''YOU HAVE THUS BORNE WITNESS, AND I BEAR WITNESS ALONG WITH YOU.''<br><br>< 19 ><br><br><a target='_blank' href='http://honourableQURAN.blogspot.com/p/10.html?m=1#15'>10:15</a> When OUR REVELATIONS are recited to them, those who do not expect to meet US say, <a target='_blank' href='/Appendix%2024,%20Tampering%20with%20the%20Word%20of%20God.html'>''bring a quran other than THIS(<a target='_blank' href='http://honourableQURAN.blogspot.com/p/1.html'>QURAN</a>), or change IT(<a target='_blank' href='http://honourableQURAN.blogspot.com/p/1.html'>QURAN</a>)!''</a> Say, ''I can NOT possibly change IT(<a target='_blank' href='http://honourableQURAN.blogspot.com/p/1.html'>QURAN</a>) on my own. I simply follow WHAT IS REVEALED to me(<a target='_blank' href='http://honourableQURAN.blogspot.com/p/1.html'>QURAN</a>). I fear, if I disobey my LORD, The Retribution of An Awesome Day.''<br><br><a target='_blank' href='http://honourableQURAN.blogspot.com/p/10.html?m=1#16'>10:16</a> Say, ''Had GOD willed, I would not have recited it to you, nor would you have known anything about IT(<a target='_blank' href='http://honourableQURAN.blogspot.com/p/1.html'>QURAN</a>). I have lived among you a whole life before this. do you not understand?''<br><br><a target='_blank' href='http://honourableQURAN.blogspot.com/p/10.html?m=1#17'>10:17</a> <a target='_blank' href='/Appendix%2024,%20Tampering%20with%20the%20Word%20of%20God.html'>who is more evil than one who fabricates lies about GOD, or rejects HIS REVELATIONS.</a> Certainly, the transgressors NEVER succeed.<br><br><a target='_blank' href='http://honourableQURAN.blogspot.com/p/10.html?m=1#61'>10:61</a> you do not get into any situation, nor do you recite from anything from <a target='_blank' href='http://honourableQURAN.blogspot.com/p/1.html'>QURAN</a>, nor do you do from any work, without US being witnesses up on <a target='_blank' href='/Appendix%2024,%20Tampering%20with%20the%20Word%20of%20God.html'>when you have overflowed(9:128-129) into IT(QURAN)</a>. not even an atom's weight is out of your LORD'S CONTROL, be it in the heavens or the earth. nor is there anything smaller than an atom, or larger, that is not recorded in a Profound Record.<br><br>< 19 ><br><br><a target='_blank' href='http://honourableQURAN.blogspot.com/p/11.html?m=1#13'>11:13</a> If they say, ''He(Muhammad) fabricated (<a target='_blank' href='http://honourableQURAN.blogspot.com/p/1.html'>THE QURAN</a>),'' tell them, ''Then produce ten suras like these, fabricated, and invite whomever you can, other than THE GOD, if you are truthful.''<br><br><a target='_blank' href='http://honourableQURAN.blogspot.com/p/11.html?m=1#14'>11:14</a> If they fail to meet your challenge, THEN KNOW THAT <a target='_blank' href='http://honourableQURAN.blogspot.com/p/1.html'>THIS(QURAN)</a> IS REVEALED WITH GOD'S KNOWLEDGE, AND THAT THERE IS NO GOD EXCEPT HE. Will you Then Surrender?<br><br><a target='_blank' href='http://honourableQURAN.blogspot.com/p/11.html?m=1#15'>11:15</a> those who pursue this worldly life and its material vanities(<a target='_blank' href='http://honourableQURAN.blogspot.com/p/3.html?m=1#75'>3:75</a>,<a target='_blank' href='http://honourableQURAN.blogspot.com/p/3.html?m=1#77'>77</a>,<a target='_blank' href='http://honourableQURAN.blogspot.com/p/3.html?m=1#78'>78</a>), WE will pay them for their works in this life, without the least reduction.<br><br><a target='_blank' href='http://honourableQURAN.blogspot.com/p/11.html?m=1#16'>11:16</a> it is they who gave up their share in THE HEREAFTER(<a target='_blank' href='http://honourableQURAN.blogspot.com/p/3.html?m=1#75'>3:75</a>,<a target='_blank' href='http://honourableQURAN.blogspot.com/p/3.html?m=1#77'>77</a>,<a target='_blank' href='http://honourableQURAN.blogspot.com/p/3.html?m=1#78'>78</a>), and, consequently, HELL is their lot(<a target='_blank' href='http://honourableQURAN.blogspot.com/p/3.html?m=1#82'>3:82</a>,<a target='_blank' href='http://honourableQURAN.blogspot.com/p/3.html?m=1#83'>83</a>). all their works are in vain; everything they have done is NULLIFIED!<br><br><a target='_blank' href='http://honourableQURAN.blogspot.com/p/11.html?m=1#17'>11:17</a> AS FOR THOSE WHO ARE GIVEN <a target='_blank' href='https://github.com/Rashad-Khalifa/QURAN-VISUAL-PRESENTATION-OF-THE-MIRACLE/blob/main/English.pdf'>SOLID PROOF(MIRACLE 19) FROM THEIR LORD</a>, <a target='_blank' href='https://www.youtube.com/watch?v=j6jVD6actVc'>REPORTED BY A WITNESS(RASHAD KHALIFA) FROM HIM</a>, AND BEFORE IT(<a target='_blank' href='https://github.com/Rashad-Khalifa/QURAN-VISUAL-PRESENTATION-OF-THE-MIRACLE/blob/main/English.pdf'>MIRACLE 19 IN THE QURAN</a>), <a target='_blank' href='https://www.google.com/search?client=safari&rls=en&q=sefer+gematriot&ie=utf-8&oe=utf-8'>THE BOOK OF MOSES HAS SET A PRECEDENT(19 IN THE TORAH) AND A MERCY</a>, THEY WILL SURELY BELIEVE(INTO <a target='_blank' href='https://github.com/Rashad-Khalifa/QURAN-VISUAL-PRESENTATION-OF-THE-MIRACLE/blob/main/English.pdf'>MIRACLE 19</a>). As for those who DISBELIEVE(INTO <a target='_blank' href='https://github.com/Rashad-Khalifa/QURAN-VISUAL-PRESENTATION-OF-THE-MIRACLE/blob/main/English.pdf'>MIRACLE 19</a>) among the various groups, HELL is awaiting them(DISBELIEVERS OF <a target='_blank' href='https://github.com/Rashad-Khalifa/QURAN-VISUAL-PRESENTATION-OF-THE-MIRACLE/blob/main/English.pdf'>MIRACLE 19</a>). Do NOT harbor any doubt; <a target='_blank' href='https://github.com/Rashad-Khalifa/QURAN-VISUAL-PRESENTATION-OF-THE-MIRACLE/blob/main/English.pdf'>THIS(MIRACLE 19) IS THE TRUTH FROM YOUR LORD</a>, but most people DISBELIEVE(INTO <a target='_blank' href='https://github.com/Rashad-Khalifa/QURAN-VISUAL-PRESENTATION-OF-THE-MIRACLE/blob/main/English.pdf'>MIRACLE 19</a>).<br><br><a target='_blank' href='http://honourableQURAN.blogspot.com/p/11.html?m=1#18'>11:18</a> <a target='_blank' href='/Appendix%2024,%20Tampering%20with%20the%20Word%20of%20God.html'>who are more evil than those who fabricate lies(9:128-129) about GOD?</a> <a target='_blank' href='/Appendix%2024,%20Tampering%20with%20the%20Word%20of%20God.html'>they(fabricators of 9:128-129)</a> will be presented before their LORD, and <a target='_blank' href='/Appendix%2024,%20Tampering%20with%20the%20Word%20of%20God.html'>The Witnesses will say; ''these are the ones who lied(9:128-129) about their LORD!</a> GOD'S CONDEMNATION has befallen <a target='_blank' href='/Appendix%2024,%20Tampering%20with%20the%20Word%20of%20God.html'>the transgressors</a>!''<br><br><a target='_blank' href='http://honourableQURAN.blogspot.com/p/11.html?m=1#19'>11:19</a> <a target='_blank' href='/Appendix%2024,%20Tampering%20with%20the%20Word%20of%20God.html'>they repel from the way of GOD and seek to make it crooked(by fabricating 9:128-129), and they are disbelievers in THE HEREAFTER!</a><br><br><a target='_blank' href='http://honourableQURAN.blogspot.com/p/11.html?m=1#20'>11:20</a> <a target='_blank' href='/Appendix%2024,%20Tampering%20with%20the%20Word%20of%20God.html'>these(fabricators of 9:128-129)</a> will NEVER escape, nor will <a target='_blank' href='/Appendix%2024,%20Tampering%20with%20the%20Word%20of%20God.html'>they(fabricators of 9:128-129)</a> find any lords or masters to help them against GOD. RETRIBUTION WILL BE DOUBLED for <a target='_blank' href='/Appendix%2024,%20Tampering%20with%20the%20Word%20of%20God.html'>(fabricators of 9:128-129)them. they(fabricators of 9:128-129)</a> have failed to hear, and <a target='_blank' href='/Appendix%2024,%20Tampering%20with%20the%20Word%20of%20God.html'>they(fabricators of 9:128-129)</a> have failed to see.<br><br><a target='_blank' href='http://honourableQURAN.blogspot.com/p/11.html?m=1#21'>11:21</a> <a target='_blank' href='/Appendix%2024,%20Tampering%20with%20the%20Word%20of%20God.html'>these(fabricators of 9:128-129) are the ones who lose their souls, and the idols they had fabricated(Muhammad) WILL DISOWN THEM.</a><br><br><a target='_blank' href='http://honourableQURAN.blogspot.com/p/11.html?m=1#22'>11:22</a> THERE IS NO DOUBT THAT, IN THE HEREAFTER, <a target='_blank' href='/Appendix%2024,%20Tampering%20with%20the%20Word%20of%20God.html'>they(fabricators of 9:128-129)</a> WILL BE THE WORST losers!<br><br><a target='_blank' href='http://honourableQURAN.blogspot.com/p/11.html?m=1#23'>11:23</a> As For Those Who Believe(INTO <a target='_blank' href='https://github.com/Rashad-Khalifa/QURAN-VISUAL-PRESENTATION-OF-THE-MIRACLE/blob/main/English.pdf'>MIRACLE 19</a>) And Lead A Righteous Life, And Devote Themselves To Their OWNER, They Are The Dwellers Of PARADISE; THEY ABIDE THEREIN FOREVER!<br><br><a target='_blank' href='http://honourableQURAN.blogspot.com/p/11.html?m=1#24'>11:24</a> The example of these two groups is like the blind and deaf, Compared To The Seer and Hearer. Are they equal? Would you not Take Heed?<br><br>< 19 ><br><br><a target='_blank' href='http://honourableQURAN.blogspot.com/p/17.html?m=1#73'>17:73</a> they almost diverted you from THE REVELATIONS WE HAVE GIVEN you. they wanted you to fabricate something else, in order to consider you a friend.<br><br><a target='_blank' href='http://honourableQURAN.blogspot.com/p/17.html?m=1#74'>17:74</a> If it were not that WE STRENGTHENED you, you almost leaned towards them just a little bit.<br><br><a target='_blank' href='http://honourableQURAN.blogspot.com/p/17.html?m=1#75'>17:75</a> Had you done that, WE would have doubled the retribution for you in this life, and after death, and you would have found no one to help you against US.<br><br>< 19 ><br><br><a target='_blank' href='http://honourableQURAN.blogspot.com/p/46.html?m=1#8'>46:8</a> When they say, ''He(<a target='_blank' href='https://www.youtube.com/watch?v=j6jVD6actVc'>Rashad Khalifa</a>) fabricated this(<a target='_blank' href='https://github.com/Rashad-Khalifa/QURAN-VISUAL-PRESENTATION-OF-THE-MIRACLE/blob/main/English.pdf'>MIRACLE 19</a>),'' Say, ''If I fabricated this(<a target='_blank' href='https://github.com/Rashad-Khalifa/QURAN-VISUAL-PRESENTATION-OF-THE-MIRACLE/blob/main/English.pdf'>MIRACLE 19</a>), then you can NOT protect me from GOD. <a target='_blank' href='/Appendix%2024,%20Tampering%20with%20the%20Word%20of%20God.html'>HE IS FULLY AWARE OF what(9:128-129) you have overflowed(9:128-129) into IT(<a target='_blank' href='http://honourableQURAN.blogspot.com/p/1.html'>QURAN</a>). HE SUFFICES AS A WITNESS between me and you.</a> HE IS ''<span class='yeşil'>THE FORGIVER(EL-GHAFUR)</span>!'', ''<span class='yeşil'>THE MERCIFUL(EL-RAHIM)</span>!'' ''<br><br><a target='_blank' href='http://honourableQURAN.blogspot.com/p/46.html?m=1#9'>46:9</a> Say,''I am not different from other messengers. I have no idea what will happen to me or to you. I only follow what is REVEALED to me(<a target='_blank' href='https://github.com/Rashad-Khalifa/QURAN-VISUAL-PRESENTATION-OF-THE-MIRACLE/blob/main/English.pdf'>MIRACLE 19</a>). I (<a target='_blank' href='https://www.youtube.com/watch?v=j6jVD6actVc'>Rashad Khalifa</a>) am no more than a Profound Warner.''<br><br><a target='_blank' href='http://honourableQURAN.blogspot.com/p/46.html?m=1#10'>46:10</a> Say, ''What if IT(<a target='_blank' href='https://github.com/Rashad-Khalifa/QURAN-VISUAL-PRESENTATION-OF-THE-MIRACLE/blob/main/English.pdf'>MIRACLE 19</a>) IS FROM GOD and you disbelieved in IT(<a target='_blank' href='https://github.com/Rashad-Khalifa/QURAN-VISUAL-PRESENTATION-OF-THE-MIRACLE/blob/main/English.pdf'>MIRACLE 19</a>)? A Witness from The Children of Israel(<a target='_blank' href='https://www.google.com/search?client=safari&rls=en&q=judah+ben+samuel&ie=utf-8&oe=utf-8'>Judah ben Samuel</a>) has Borne Witness to A Similar Phenomenon(<a target='_blank' href='https://www.google.com/search?client=safari&rls=en&q=sefer+gematriot&ie=utf-8&oe=utf-8'>19 IN THE TORAH</a>), and He has Believed, while you have turned arrogant! Surely, GOD DOES NOT guide the wicked people.''<br><br><a target='_blank' href='http://honourableQURAN.blogspot.com/p/46.html?m=1#11'>46:11</a> Those who disbelieved(into <a target='_blank' href='https://github.com/Rashad-Khalifa/QURAN-VISUAL-PRESENTATION-OF-THE-MIRACLE/blob/main/English.pdf'>MIRACLE 19</a>) said about those who believed(into <a target='_blank' href='https://github.com/Rashad-Khalifa/QURAN-VISUAL-PRESENTATION-OF-THE-MIRACLE/blob/main/English.pdf'>MIRACLE 19</a>), ''If IT(<a target='_blank' href='https://github.com/Rashad-Khalifa/QURAN-VISUAL-PRESENTATION-OF-THE-MIRACLE/blob/main/English.pdf'>MIRACLE 19</a>) were anything good, they(Children of Israel) would not have accepted IT(<a target='_blank' href='https://github.com/Rashad-Khalifa/QURAN-VISUAL-PRESENTATION-OF-THE-MIRACLE/blob/main/English.pdf'>MIRACLE 19</a>) before us.'' Because they were not guided to IT(<a target='_blank' href='https://github.com/Rashad-Khalifa/QURAN-VISUAL-PRESENTATION-OF-THE-MIRACLE/blob/main/English.pdf'>MIRACLE 19</a>), they said, ''THIS(<a target='_blank' href='https://github.com/Rashad-Khalifa/QURAN-VISUAL-PRESENTATION-OF-THE-MIRACLE/blob/main/English.pdf'>MIRACLE 19</a>) is an old fabrication!''<br><br><a target='_blank' href='http://honourableQURAN.blogspot.com/p/46.html?m=1#12'>46:12</a> Before THIS(<a target='_blank' href='http://honourableQURAN.blogspot.com/p/1.html'>QURAN</a>), THE BOOK of Moses(TORAH) Provided Guidance and Mercy. THIS(<a target='_blank' href='http://honourableQURAN.blogspot.com/p/1.html'>QURAN</a>) too is a SCRIPTURE that confirms, in Arabic, to warn those who transgressed, and to give good news to the righteous.<br><br><a target='_blank' href='http://honourableQURAN.blogspot.com/p/48.html?m=1#15'>46:13</a> Surely, those who say, ''Our Lord is GOD'' then lead a righteous life, will have no fear, nor will they grieve.<br><br><a target='_blank' href='http://honourableQURAN.blogspot.com/p/48.html?m=1#15'>46:14</a> They have deserved Paradise, where they abide forever; a Reward for their works.<br><br>< 19 ><br><br><a target='_blank' href='http://honourableQURAN.blogspot.com/p/48.html?m=1#15'>48:15</a> those who lagged behind will say, when you venture out to collect the spoils: ''let us follow you!'' <a href='/Appendix%2024,%20Tampering%20with%20the%20Word%20of%20God.html' target='_blank'>they want to change GOD'S WORDS(these hypocrites want to add 9:128-129 into QURAN).</a> Say, ''YOU WILL NOT FOLLOW US; THIS IS WHAT GOD HAS DECREED BEFOREHAND.'' they will then say, ''no, you are envious of us.'' Alas, they rarely understood anything!</b>"
	}
	,
	{
		imageUrl: "pic/clean-up.png",
		title: "<span class='red'>NEVER TOUCH</span> <span class='blue'>QURAN</span><span class='red'>! WITHOUT</span> <span class='blue'>CLEAN</span><span class='red'>ED UP! EVEN WITH MOUSE!</span>",
		text: '<br><b><a target="_blank" href="http://honourableQURAN.blogspot.com/p/56.html?m=1#74">56:74</a> YOU SHALL GLORIFY THE NAME OF YOUR OWNER, THE GREAT! (SACRED & SUPREME RAHMAN YOUR NAME IS SACRED & SUPREME! (<a target="_blank" href="http://honourableQURAN.blogspot.com/p/56.html?m=1#74">56:74</a>, <a target="_blank" href="http://honourableQURAN.blogspot.com/p/56.html?m=1#96">56:96</a>, <a target="_blank" href="http://honourableQURAN.blogspot.com/p/87.html?m=1#1">87:1</a>))<br><br><a target="_blank" href="http://honourableQURAN.blogspot.com/p/56.html?m=1#75">56:75</a> I SWEAR TO THE FALLING PLACES OF THE STARS! (<a target="_blank" href="https://www.youtube.com/watch?v=kOEDG3j1bjs">BLACK HOLES!</a>)<br><br><a target="_blank" href="http://honourableQURAN.blogspot.com/p/56.html?m=1#76">56:76</a> THIS IS AN OATH, IF ONLY YOU KNEW, THAT IS AWESOME!<br><br><a target="_blank" href="http://honourableQURAN.blogspot.com/p/56.html?m=1#77">56:77</a> THIS IS HONOURABLE <a target="_blank" href="http://honourableQURAN.blogspot.com/p/1.html">QURAN</a>!<br><br><a target="_blank" href="http://honourableQURAN.blogspot.com/p/56.html?m=1#78">56:78</a> IN A PROTECTED BOOK!<br><br><a target="_blank" href="http://honourableQURAN.blogspot.com/p/56.html?m=1#79">56:79</a> NONE can touch <a target="_blank" href="http://honourableQURAN.blogspot.com/p/1.html">IT</a> EXCEPT THE CLEANED UP!<br><br><a target="_blank" href="http://honourableQURAN.blogspot.com/p/56.html?m=1#80">56:80</a> A REVELATION FROM THE OWNER OF THE UNIVERSES!<br><br><a target="_blank" href="http://honourableQURAN.blogspot.com/p/56.html?m=1#81">56:81</a> Do you dissemble this speech?<br><br><a target="_blank" href="http://honourableQURAN.blogspot.com/p/56.html?m=1#82">56:82</a> Do you make your disbelieve your sustenance?<br><br><a target="_blank" href="http://honourableQURAN.blogspot.com/p/56.html?m=1#83">56:83</a> When the time comes and it (your soul) reaches your throat -<br><br><a target="_blank" href="http://honourableQURAN.blogspot.com/p/56.html?m=1#84">56:84</a> you will then look around.<br><br><a target="_blank" href="http://honourableQURAN.blogspot.com/p/56.html?m=1#85">56:85</a> WE ARE CLOSER to it than you are, but you do not see.<br><br><a target="_blank" href="http://honourableQURAN.blogspot.com/p/56.html?m=1#86">56:86</a> If it is true that you do not owe any accounting -<br><br><a target="_blank" href="http://honourableQURAN.blogspot.com/p/56.html?m=1#87">56:87</a> why do you not restore (your soul), if you are truthful?<br><br><a target="_blank" href="http://honourableQURAN.blogspot.com/p/56.html?m=1#88">56:88</a> If he is one of those close to ME -<br><br><a target="_blank" href="http://honourableQURAN.blogspot.com/p/56.html?m=1#89">56:89</a> then joy, flowers, and gardens of bliss.<br><br><a target="_blank" href="http://honourableQURAN.blogspot.com/p/56.html?m=1#90">56:90</a> And if he is one of the right -<br><br><a target="_blank" href="http://honourableQURAN.blogspot.com/p/56.html?m=1#91">56:91</a> peace is the lot of those on the right.<br><br><a target="_blank" href="http://honourableQURAN.blogspot.com/p/56.html?m=1#92">56:92</a> But if he is one of the disbelievers, the strayers -<br><br><a target="_blank" href="http://honourableQURAN.blogspot.com/p/56.html?m=1#93">56:93</a> then an abode of INFERNO -<br><br><a target="_blank" href="http://honourableQURAN.blogspot.com/p/56.html?m=1#94">56:94</a> and burning in HELL!<br><br><a target="_blank" href="http://honourableQURAN.blogspot.com/p/56.html?m=1#95">56:95</a> THIS IS THE ABSOLUTE TRUTH!<br><br><a target="_blank" href="http://honourableQURAN.blogspot.com/p/56.html?m=1#96">56:96</a> YOU SHALL GLORIFY THE NAME OF YOUR OWNER, THE GREAT! (SACRED & SUPREME RAHMAN YOUR NAME IS SACRED & SUPREME! (<a target="_blank" href="http://honourableQURAN.blogspot.com/p/56.html?m=1#74">56:74</a>, <a target="_blank" href="http://honourableQURAN.blogspot.com/p/56.html?m=1#96">56:96</a>, <a target="_blank" href="http://honourableQURAN.blogspot.com/p/87.html?m=1#1">87:1</a>))</b>'
	}
	,
	{
		imageUrl: "pic/rashad.jpg",
		title: "<a target='_blank' href='/Quran Hadith Islam/Quran, Hadith, and Islam by Rashad Khalifa, Ph.D.; Submission (Islam).html'>QURAN hadith and ISLAM</a>",
		text: "<iframe height='"+playerHeighter2().toString()+"' style='margin-left: -30.77px; width: calc(100% + 61.44px);' src='https://www.youtube.com/embed/j6jVD6actVc' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe><br><br><b>AFTER MORE THAN 12 YEARS OF COMPUTERIZED RESEARCH OF <a target='_blank' href='http://honourableQURAN.blogspot.com/p/1.html'>QURAN</a>, <a target='_blank' href='https://github.com/Rashad-Khalifa/QURAN-VISUAL-PRESENTATION-OF-THE-MIRACLE/blob/main/English.pdf'>PHYSICAL EVIDENCE</a> WAS DISCOVERED <a target='_blank' href='/Appendix%2024,%20Tampering%20with%20the%20Word%20of%20God.html'>PROVING THAT QURAN IS INDEED THE INFALLIBLE AND UNALTERABLE WORD OF GOD.</b></a><br><br>The Continued Research then Unveiled a startling FACT; that the extremely popular ''hadith & sunna'' have nothing to do with the nabiyy muhammad, and that adherence thereto Represents Flagrant Disobedience of GOD and HIS Messengers (<a target='_blank' href='http://honourableQURAN.blogspot.com/p/1.html'>QURAN</a> <a target='_blank' href='http://honourableQURAN.blogspot.com/p/6.html?m=1#112'><b>6:112</b></a> & <a target='_blank' href='http://honourableQURAN.blogspot.com/p/25.html?m=1#31'><b>25:31</b></a>).<br><br>This Finding Contradicts the beliefs of muslim masses everywhere. As it turned out, Telling the muslims that ''hadith & sunna'' are satanic inventions is the same as telling the christians that jesus is NOT the son of GOD.<br><br>Since the recognition of ''hadith & sunna'' as satanic innovations is <b>SUPPORTED BY <a target='_blank' href='https://github.com/Rashad-Khalifa/QURAN-VISUAL-PRESENTATION-OF-THE-MIRACLE/blob/main/English.pdf'>PHYSICAL EVIDENCE</b></a>, All Freethinking People will Accept <a target='_blank' href='/Quran Hadith Islam/Quran, Hadith, and ISLAM by Rashad Khalifa, Ph.D.; Submission (Islam).html'><b>THE FINDINGS REPORTED IN THIS BOOK(QURAN hadith and ISLAM)</b></a>. For Such People, The Results Include a Totally New Sense of Salvation, and Full Awareness that the muslim masses have fallen victim to satan's schemes.<br><br>August 19, 1982<br><br>Proclaimer of 1 Unified Religion for All the People<br><br><a href='https://www.masjidtucson.org' target='blank'>Founder of Masjid Tucson</a><br><br><a target='_blank' href='https://www.youtube.com/watch?v=j6jVD6actVc'><b>Dr. Rashad Khalifa</b></a>"
	}
	,
	{
		imageUrl: "pic/firefox.png",
		imageWidth: 'auto',
		imageHeight: 301,
		imageAlt: "Slipping of row color countings or color markings may occur in " + browser + "!",
		title: "Coloring Markings or Row Coloring Countings May Slip in " + ((browser == "Firefox" || browser == "Firefox-Android") ? "other browsers" : browser) + "!",
		html: "<p style='font-size: x-large;'>In That Case " + ((browser == "iPad-Safari" || browser == "iPhone-Safari" || browser == "iPod-Safari" || browser.includes("Android")) ? "Rotate Your Device" : "Resize Width of Your Browser Window") + " and Then Continue Counting From Unslipped Verse You Remained or Just <a href='https://www.mozilla.org/en/firefox/new/' target='_blank'>Use Firefox</a>" + ((browser == "Firefox") ? "!</p>" : (" Instead of " + browser + "!</p>"))
	}
	,
	{
		imageUrl: "pic/ISTE_73-5_TEKI_SOZ_73-9.PNG",
		imageAlt: "İŞTE 73:5 AYETİNDEKİ TANRI SÖZÜ",
		title: "İŞTE 73:5 AYETİNDE VAAT EDİLEN TANRI SÖZÜ!",
		html: "<p style='font-size: x-large;'>Doğunun ve batının Rabb'idir O. O'ndan başka ilah yoktur. Öyleyse yalnız O'nu vekil edin. <span class='blue'>73:9</span><br><br><b>İŞTE <span class='blue'>73:5</span> AYETİNDEKİ TANRI SÖZÜ:</b><br><br>Rahman ve Rahim olan ALLAH'ın Adıyla,<br><br><u><b style='font-size: xxx-large;'>''<span class='red'>ORTAK KOŞAN HERKES CEHENNEME GİRECEK!</span>''</u></b><br><br><img src='pic/nun_vel_kalemu_ve_ma_yesterun.png' style='margin-left: -30.77px; width: calc(100% + 61.44px);'></img><br><br><span class='blue'>73</span>. Sure: ''Örtüsüne Bürünen''<br><br>Rahman ve Rahim olan ALLAH'ın Adıyla,<br><br><span class='blue'>1</span>. Ey örtüsüne bürünen!<br><br><span class='blue'>2</span>. Gecenin birazında kalk!<br><br><span class='blue'>3</span>. Gecenin yarısında veya ondan biraz önce.<br><br><span class='blue'>4</span>. Ya da yarısından biraz sonra… Kuran'ı da özenle düşüne düşüne oku.<br><br><span class='blue'>5</span>. Şüphesiz ki Biz, senin üzerine ağır bir söz bırakacağız.<br><br><span class='blue'>6</span>. Kuşkusuz gece, fikir inşası çok daha etkili ve ifade açısından daha uygundur.<br><br><span class='blue'>7</span>. Gündüz, uzun süre uğraşacağın işler var.<br><br><span class='blue'>8</span>. Rabb'inin adını an ve bütün benliğinle yalnızca O'na yönel.<br><br><span class='blue'>9</span>. Doğunun ve batının Rabb'idir O. O'ndan başka ilah yoktur. Öyleyse yalnız O'nu vekil edin.<br><br><span class='blue'>10</span>. Onların söylediklerine sabret. Ve onlardan güzellikle uzaklaş.<br><br><span class='blue'>11</span>. Varlık sahibi, yalanlayıcıları Bana bırak. Onlara biraz süre tanı.<br><br><span class='blue'>12</span>. Bizim yanımızda prangalar ve Cehennem var.<br><br><span class='blue'>13</span>. Ve boğazı tıkayan yiyecek ve acı bir azap vardır.<br><br><span class='blue'>14</span>. O gün yeryüzü ve dağlar şiddetle sarsılır ve dağlar dağılmış kum yığınları gibi olur.<br><br><span class='blue'>15</span>. Size tanıklık edecek bir resul gönderdik. Tıpkı Firavun'a da bir resul gönderdiğimiz gibi.<br><br><span class='blue'>16</span>. Firavun Resul'e isyan etti. Bunun üzerine onu çok zorlu bir tutuşla tutuverdik.<br><br><span class='blue'>17</span>. Eğer Kafirlerden olursanız, çocukların saçlarını ağartan o günden kendinizi nasıl koruyacaksınız?<br><br><img src='pic/heavenandhell.png' style='margin-left: -30.77px; width: calc(100% + 61.44px);'></img><br><br><span class='blue'>18</span>. Gök, o günün şiddeti ile çatlayıp parçalanacak ve O'nun uyarısı gerçekleşecektir.<br><br><span class='blue'>19</span>. Bu bir öğüttür. Dileyen Rabb'ine götüren bir yol edinir.<br><br><span class='blue'>20</span>. Hiç kuşkun olmasın, Rabbin senin durumunu biliyor. Gecenin üçte ikisinden daha azını, yarısını, üçte birini ayakta geçiriyorsun. Seninle beraber olanlardan bir grup da öyle. ALLAH, geceyi de gündüzü de ölçüye bağlamıştır. Sizin onu kuşatamayacağınızı bildi de size tövbe nasip etti. O halde Kur'an'dan, kolay geleni okuyun. Sizden hastalar olacağını bildi. Bir kısmının yeryüzünde dolaşıp ALLAH'ın lütfundan bir şeyler isteyeceklerini, diğer bir kısmının da ALLAH yolunda çarpışacaklarını bildi. O halde Kur'an'dan, kolay geleni okuyun! Namazı kılın! Zekatı verin. Güzel bir ödünçle ALLAH'a ödünç verin! Öz benlikleriniz için önden gönderdiğiniz iyiliğin, ALLAH katında hayrını daha çok, ödülünü daha büyük olarak bulacaksınız. ALLAH'tan af dileyin. Hiç kuşkusuz, ALLAH çok affedici, çok esirgeyicidir.</p>"
	}
	,
	{
		imageUrl: "pic/Furkan.jpg",
		imageWidth: 'auto',
		imageHeight: 'auto',
		imageAlt: "Supreme ALLAH has send new book named Furkan to His Servant Muhammad Nabiyy Eren Şentürk in 21st Century!",
		title: "Supreme ALLAH has send new book named Furkan to His Servant Muhammad Nabiyy Eren Şentürk in 21st Century!",
		html: "<p style='font-size: x-large;'>You can read it from: <a href='https://Oku.FurkanHikmet.com' target='blank'>Oku.FurkanHikmet.com</a><br><br>''<a href='https://www.OnurluKURAN.com/3#3' target='blank'>3-</a> Sana Kitabı hakla indirdi önündekileri doğrulayıcı olarak... Tevrat'ı ve İncil'i de indirdi,<br><br><a href='https://www.OnurluKURAN.com/3#4' target='blank'>4-</a> Daha önce insanlara yol gösterici olarak... Ve <b>Furkan</b>'ı da indirdi... Şüphesiz ALLAH’ın ayetlerini inkâr edenler, onlar için şiddetli bir azap vardır. ALLAH, Aziz'dir! İntikam Sahibidir!''<br><br><a href='https://www.OnurluKURAN.com/' target='blank'>Onurlu KURAN</a> - <a href='https://www.OnurluKURAN.com/3' target='blank'>Sure 3 : Al-i İmran</a></p>"
	}
	,
	{
		title: "Rahman Ve Rahim Olan ALLAH'ın Adıyla",
		html: "<p style='font-size: x-large;'><span style='font-size: xx-large;' class='blue'>Hamd, Övgü, Yüceltme, 7 Kat Evrenlerin, Göklerin, Kainatın Eşsiz Ortaksız Tek <a target='_blank' class='red' href='https://www.OnurluKURAN.com/p/6.html?m=1#18'>Kahreden</a> <a target='_blank' class='red' href='https://www.OnurluKURAN.com/p/59.html?m=1#23'>Zorlayan</a> <a target='_blank' class='red' href='https://www.OnurluKURAN.com/p/2.html?m=1#165'>Azabı Şiddetli</a> <a target='_blank' class='red' href='https://www.OnurluKURAN.com/p/41.html?m=1#43'>Elim Azap Sahibi</a> <a target='_blank' class='red' href='https://www.OnurluKURAN.com/p/3.html?m=1#4'>İntikam Sahibi</a> Efendisi ALLAH'adır!</span><br><br><a target='_blank' style='font-size: xx-large; color: black;' href='https://www.OnurluKURAN.com/p/53.html?m=1#1'>2018 Senesi'nde, <span class='blue'>Ulu Azim Yüce Eşsiz Ortaksız Tek Rabbim Rahman ve Rahim Olan ALLAH</span> 'ı Gördüğüm Yer:</a><br><br><img alt='Kainatın Efendisi ALLAH'a Övgüler Olsun!' src='pic/Ulu_Azim_Yüce_Rabbim_Rahimi_Gordugum_Yer.jpeg' style='margin-left: -30.77px; width: calc(100% + 61.44px);'></img><br><br><span class='blue'>Rahman Ve Rahim Olan ALLAH'ın Adıyla,</span><br><br>Burcu, RAB senden özel tam olarak ne isteyecek bilmiyorum ama ben kuluna görünerek seninle evlenmemi emretti:<br><br>Seninle ayrılmamızdan sonra benim cebimde 1 kuruş para yokken Ankara'nın Etimesgut ilçesi yapracık semtinin kopyası bir gezegende tek başıma apaçık masmavi bir gündüzün gökyüzünün altında güneşin konumundan anladığım kadarıyla saat 10-11 civarlarında etrafta hiç bir yol insan veya bayındırlık izi ne bir hayvan ne bir insan ne bir ev hiç birşey olmayan bakir bir gezegenin göbeğinde cebimde 1 kuruş yokken ki olsa ne yapayım onu tek başıma, adem ile havvanın dünyaya ilk indiği bakir haliyle gezegenin ortasında bir dağın tepesinde önümde karşımda ardı ardına yusyuvarlak tepeli 2 dağ ve her yer yem yeşil çimenken ve ben ne yeyip içeceğimi düşünüp üzülür ve üstümdeki kıyafetlerin varlığına sevinirken, birden masmavi gökyüzünde TANRI yani Evrenlerin Yaratıcısı Olduğunu Anladığım Bembeyaz PasParlak Beyaz 1 Işık Parıltısı'nın gökyüzünde Kendi Varlığı'nı Işığı'nın Beyazlığı ve Parlaklığıyla gündüze Rağmen Apaçık Belli Ederek gökyüzünden Işınlanarak bulunduğum gezegene hatta 2 dağ ilerimdeki tepeye İndiğini ve Sonra da o dağların yüzeyi üzerinden Işık Halinde 2 metre önüme toplamda 1-2 saniye içinde Evrenin En üstündeki Yüce Tahtı'ndan Gelerek Beyaz Işıktan, Kendi Sureti'ne Dönüşmesi ki Bembeyaz Tek Parça Dümdüz Omuzdan Ayaklarına Kadar Sade 1 Elbise Giyiyor ve ayakkabı ve çorap giymiyor çıplak Ayakla Çimenlere Basıyor ki Zaten Her Yer Pırıl Pırıl Tertemiz 35-40 lı yaşlarda Görünen Gerçekte Başı ve Sonu Olmayan Uzay-Zaman'ın Yaratıcısı Şefkatli Merhametli Rabbim Azim Ulu Yüce RAHMAN gözlerime Bakarak Sevgiyle Gülümseyen Kahverengi Saçları ve Kahverengi Sakalları olan Benzersiz Eşsiz bir İnsan Suretinde Görünüyor bana -ki Tevrat'ta insanı, Kendi Suretinde Yarattığı Geçiyor- ve gözlerim içine o içimi ısıtan Güven Veren Şefkat ve Merhamet ve Üstün Aklını Yansıtan Görünüşüyle ve O Gözleriyle gözlerime Bakarken ve Gülümserken, ben kuluna: ''burcuyla evlen'' diyor hepsi bu kadar 2 kelime ve bense O’na bakmaktan hipnoz olmuş halde gözlerimi bakışlarımı Yüce Eşsiz Tek Olan ALLAH’tan ve etkisinden ayıramıyorum... ve O Ulu Yüce RAHMAN, benim içimdeki herşeyi Bilen EŞSİZ TEK TANRI bana gülümsemeye devam ediyor Kıyaslanamaz Üstün Güç Sahibi<br><br><br><b><a target='_blank' href='https://www.OnurluKURAN.com/p/53.html?m=1'>53 - <span class='red'>Yıldız</span></a></b><br><br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/53.html?m=1#0'>53:0</a> RAHMAN ve Rahim olan ALLAH'ın Adıyla,<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/53.html?m=1#1'>53:1</a> Düşerken yıldıza and olsun.<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/53.html?m=1#2'>53:2</a> Arkadaşınız ne sapmıştır, ne de azmıştır.<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/53.html?m=1#3'>53:3</a> Ne de fanteziden konuşmaktadır.<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/53.html?m=1#4'>53:4</a> O ancak ve ancak bildirilen bir vahiydir.<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/53.html?m=1#5'>53:5</a> Onu, büyük güce sahip olan öğretmiştir.<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/53.html?m=1#6'>53:6</a> Üstün otoritenin sahibi göründü,<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/53.html?m=1#7'>53:7</a> En yüksek ufukta.<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/53.html?m=1#8'>53:8</a> Sonra inip yaklaştı.<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/53.html?m=1#9'>53:9</a> Mesafe iki yay kadar veya daha yakın oldu.<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/53.html?m=1#10'>53:10</a> Ve sonra kuluna ne bildirilecekse onu vahyetti.<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/53.html?m=1#11'>53:11</a> Gördüğünü gönlü yalanlamadı.<br><br><img alt='Kainatın Efendisi ALLAH a Övgüler Olsun!' src='pic/ankara.JPG' style='margin-left: -30.77px; width: calc(100% + 61.44px);'></img><br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/53.html?m=1#12'>53:12</a> Onun gördüğü hakkında kendisiyle tartışıyor musunuz?<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/53.html?m=1#13'>53:13</a> Onu bir kez daha görmüştü.<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/53.html?m=1#14'>53:14</a> Son sedir ağacının yanında.<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/53.html?m=1#15'>53:15</a> Ki yanında barınılacak bahçe vardır.<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/53.html?m=1#16'>53:16</a> Sedir ağacını örtten örttüğünde,<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/53.html?m=1#17'>53:17</a> Göz şaşmadı, sınırı da aşmadı.<br><br><img src='pic/27-12-2014.png' style='margin-left: -30.77px; width: calc(100% + 61.44px);'></img><br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/53.html?m=1#18'>53:18</a> Efendisinin büyük işaretlerini gördü.<br><br><img alt='Kainatın Efendisi Rabbim ALLAH a Övgüler Olsun!' src='pic/kible-kabeye-dogru.jpg' style='margin-left: -30.77px; width: calc(100% + 61.44px);'></img><br><br><b class='red'><br><br>🕋 🛐  TANRI'NIN O'NA Kulluk Eden Kabe'ye Bakıp Namaz Kılarak O'NA TAPINAN, O’NU HAMD İLE TESBİH EDEN, O’NU ÖVGÜYLE YÜCELTEN Ve O'NUN ADI'NI TAKDİS EDEN VE O'NDAN Yardım İsteyen Kulu İstanbul'um Ben Meryemoğlu İsa Mesih AbdurRAHMAN Ayyıldız<br><br>Rabbim RAHMAN, sadece SANA Kul olma şerefini kulun bana lutfettiğin için SANA Çok Teşekkür Ederim! Ne kadar SANA Şükretsem Az! ❤️<br><br><img alt='Kainatın Efendisi Rabbim ALLAH a Övgüler Olsun!' src='pic/AbdurRAHMAN-AyYıldız.png' style='margin-left: -30.77px; width: calc(100% + 61.44px);'></img><br><br>Rabbimiz RAHMAN Azim'sin Yüce'sin! ❤️<br>Rabbimiz RAHİM Azim'sin Yüce'sin! ❤️<br>Rabbimiz ALLAH’ımız Azim'sin Yüce'sin! ❤️<br>Rabbimiz RAHMAN Ulu'sun Yüce'sin! ❤️<br>Rabbimiz ALLAH’ımız Kutsal’sın Yüce'sin! ❤️<br><br><a target='_blank' href='http://Kıyamet.net'>Kıyamet.net</a></b><br><a target='_blank' href='http://TrueClock.org'>TrueClock.org</a><b><br><br><span class='n5356'><a target='_blank' href='https://www.OnurluKURAN.com/p/53.html?m=1#55'>53:55</a> Artık sen Rabbinin işinden şüpheleniyor musun?</span><br><br><span class='n5356'><a target='_blank' href='https://www.OnurluKURAN.com/p/53.html?m=1#56'>53:56</a> Bu uyarıcı evvelki uyarıcılardandır.</span><br><br><span class='n5356'><a target='_blank' href='https://www.OnurluKURAN.com/p/56.html?m=1'>56 VAKIA</a> / <a target='_blank' href='http://TrueClock.org'>KIYAMET SAATİNİN BİLGİSİ</a> <span class='blue'>KUL ABD</span></span><br><span class='n5356'><a target='_blank' href='https://www.OnurluKURAN.com/p/55.html?m=1'>55 RAHMAN</a></span><br><span class='n5356'><a target='_blank' href='https://www.OnurluKURAN.com/p/54.html?m=1'>54 AY</a></span><br><span class='n5356'><a target='_blank' href='https://www.OnurluKURAN.com/p/53.html?m=1'>53 YILDIZ</a></span><br><br><a target='_blank' href='https://twitter.com/aWordFromALLAH'>BENİM!</a><br><br><img alt='Kainatın Efendisi Rabbim ALLAH a Övgüler Olsun! Selam tüm hayatlarımda üzerime olsun!' src='pic/ABDURRAHMAN-AYYILDIZ.jpeg' style='margin-left: -30.77px; width: calc(100% + 61.44px);'></img><br><br><br><a target='_blank' href='https://Oku.FurkanHikmet.com/5'>Oku.FurkanHikmet.com/5 . Kul Suresi</a>:<br><br><br><a target='_blank' href='https://Oku.FurkanHikmet.com/5#30'>30-</a> Tek ALLAH’a kul olmak, bir insanın yeryüzünde elde edebileceği en büyük şereftir.<br><br><a target='_blank' href='https://Oku.FurkanHikmet.com/5#31'>31-</a> Ulu olan tek ALLAH’a tapınmak, insan’ın yeryüzünde en güzel şekilde onore edilmesidir ki tapındığı ALLAH, yerleri ve gökleri yaratan, her şeye kadir olan tek bir İlah’tır.<br><br><a target='_blank' href='https://Oku.FurkanHikmet.com/5#32'>32-</a> Eğer bilirseniz, O’na kul olabilme şerefine nail olmak, çok güzel bir şeydir. Size, Kendisine kul olabilme fırsatı verdiği için, O’na şükretmeniz gerekir.<br><br><a target='_blank' href='https://Oku.FurkanHikmet.com/5#33'>33-</a> Tek ALLAH’ın kulları, O’na severek ve isteyerek ibadet etsinler.<br><br><a target='_blank' href='https://Oku.FurkanHikmet.com/5#34'>34-</a> Tek ALLAH’ın kulları, yalnız kendilerini yeniden diriltecek olan tek ALLAH’a ibadet etsinler.<br><br><a target='_blank' href='https://Oku.FurkanHikmet.com/5#35'>35-</a> İbadet ederlerken bilsinler ki, ALLAH’ın onların ibadetlerine ihtiyacı yoktur, ibadet etmeye ihtiyacı olanlar, kendileridir. O, Ganidir.<br><br><a target='_blank' href='https://Oku.FurkanHikmet.com/5#36'>36-</a> O’nun sizden ibadet etmenizi istemesi boşuna değildir. Hanginizin Kendisine bağlı ve sadık kaldığının ortaya çıkmasını istemiştir.<br><br><br><span class='blue'>Rabbim RAHMAN, sadece SANA Kul olma şerefini kulun bana lutfettiğin için SANA Çok Teşekkür Ederim! Ne kadar SANA Şükretsem Az! ❤️ Yüce'sin! Azim'sin! Ulu'sun!</span><br><br><span class='blue'>Rabbimiz RAHMAN Azim'sin Yüce'sin! ❤️</span><br><span class='blue'>Rabbimiz RAHİM Azim'sin Yüce'sin! ❤️</span><br><span class='blue'>Rabbimiz ALLAH’IMIZ Azim'sin Yüce'sin! ❤️</span><br><span class='blue'>Rabbimiz RAHMAN Ulu'sun Yüce'sin! ❤️</span></b><br><br><br><b><a target='_blank' href='https://www.OnurluKURAN.com/p/81.html?m=1'>81 - <span class='red'>Yuvarlama</span></b></a><br><br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/81.html?m=1#0'>81:0</a> RAHMAN ve Rahim olan ALLAH'ın Adıyla,<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/81.html?m=1#1'>81:1</a> Güneş yuvarlandığı zaman,<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/81.html?m=1#2'>81:2</a> Yıldızlar solduğu zaman,<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/81.html?m=1#3'>81:3</a> Dağlar yürütüldüğü zaman,<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/81.html?m=1#4'>81:4</a> En değerli mallar terkedildiği zaman,<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/81.html?m=1#5'>81:5</a> Vahşiler toplandığı zaman,<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/81.html?m=1#6'>81:6</a> Denizler kaynatıldığı zaman,<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/81.html?m=1#7'>81:7</a> Ruhlar eşleştirildiği zaman,<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/81.html?m=1#8'>81:8</a> Doğduktan hemen sonra öldürülen kız çocuğu sorulduğu zaman:<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/81.html?m=1#9'>81:9</a> Hangi suçtan ötürü öldürüldü diye.<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/81.html?m=1#10'>81:10</a> Kayıtlar yayımlandığı zaman,<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/81.html?m=1#11'>81:11</a> Gök yerinden oynatıldığı zaman,<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/81.html?m=1#12'>81:12</a> Cehennem alevlendirildiği zaman,<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/81.html?m=1#13'>81:13</a> Bahçe yaklaştırıldığı zaman,<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/81.html?m=1#14'>81:14</a> Her kişi ne yapıp getirdiğini bilir.<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/81.html?m=1#15'>81:15</a> And olsun gizlenen yıldızlara,<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/81.html?m=1#16'>81:16</a> Akıp deliklerine girenlere.<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/81.html?m=1#17'>81:17</a> And olsun kararmaya başlayan geceye,<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/81.html?m=1#18'>81:18</a> Ve nefes almaya başlayan sabaha,<br><br><img src='pic/AbdurRAHMAN.png' style='margin-left: -30.77px; width: calc(100% + 61.44px);'></img><br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/81.html?m=1#19'>81:19</a> Bu, onurlu bir elçinin sözüdür.<br><br><img src='True_Clock_of_Resurrection/pic/405.jpeg' style='margin-left: -30.77px; width: calc(100% + 61.44px);'></img><br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/81.html?m=1#20'>81:20</a> Güçlüdür; Yönetimin Sahibi katından yetkilidir.<br><br><img src='pic/900.jpeg' style='margin-left: -30.77px; width: calc(100% + 61.44px);'></img><br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/81.html?m=1#21'>81:21</a> Kendisine uyulmalı ve güvenilmeli.<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/81.html?m=1#22'>81:22</a> Arkadaşınız deli değildir.<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/81.html?m=1#23'>81:23</a> Onu apaçık bir ufukta görmüştür.<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/81.html?m=1#24'>81:24</a> O, hiçbir haberi gizlemiyor.<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/81.html?m=1#25'>81:25</a> O, kovulan sapkının sözü olamaz.<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/81.html?m=1#26'>81:26</a> Öyleyse nereye gidiyorsunuz?<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/81.html?m=1#27'>81:27</a> Bu, tüm evrenlere bir mesajdır.<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/81.html?m=1#28'>81:28</a> Sizden doğrulmayı dileyen kimseler için…<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/81.html?m=1#29'>81:29</a> Ve siz dileyemezsiniz ancak Evrenlerin Efendisi olan TANRI diler.<b style='font-size: xx-large;'><br><br><br>Ve Şüphesiz ALLAH, Rabbim ve Rabbinizdir. Artık O'na Kulluk Edin! Bu Doğru Yoldur. <a target='_blank' href='https://www.OnurluKURAN.com/p/19.html?m=1#36'>19:36</a><br><br>Şüphesiz ALLAH, O Rabbim ve Rabbinizdir. Artık O'na Kulluk Edin! Bu Doğru Yoldur. <a target='_blank' href='https://www.OnurluKURAN.com/p/43.html?m=1#64'>43:64</a><br><br><br></b><img alt='Kainatın Efendisi ALLAH'a Övgüler Olsun!' src='pic/RASHAD-AND-ABDURRAHMAN.png' style='margin-left: -30.77px; width: calc(100% + 61.44px);'></img><br><br>Selam, Yüce Ulu Eşsiz Tek ALLAH’ın, <a target='_blank' href='/True_Clock_of_Resurrection'>ben Kulu Nebisi Meryemoğlu İsa Mesih Abdurrahman Ayyıldız</a>'a <a target='_blank' href='https://github.com/aWordFromALLAH/Revelations_of_Supreme_Rahman/tree/main/Burcuyla%20evlen'>Göklerdeki Yüce Tahtından İnip 2 Metre Önüme Kadar Gelerek Evlenmemi Emrettiği</a> Kulu Resulü Burcu Bildirik’in ve <a target='_blank' href='/True_Clock_of_Resurrection'>ben Kulu Nebisi'nin</a> ve <a target='_blank' href='http://furkanhikmet.blogspot.com/p/sayfa-11-istanbul_5.html'>Nebilerle Yaptığı</a> <a target='_blank' href='https://www.OnurluKURAN.com/p/3.html?m=1#81'>Misak</a>'ın <a target='_blank' href='https://www.OnurluKURAN.com/p/33.html?m=1#7'>Resulü Reşad Halife</a>'nin, <a target='_blank' href='https://web.archive.org/web/20110724205931/http://www.66619.org'>Lemek oğlu Nuh Nebi Bahattin Uzunkaya</a>'nın, <a target='_blank' href='https://web.archive.org/web/20230201072040/https://universalunity.org/'>İbrahim Nebi İmam Keyhüsrev'in (Keikhosrow Emami'nin)</a>, <a target='_blank' href='https://web.archive.org/web/20210730033549/http://hanif.de/'>Zekeriya oğlu Yahya Nebi Hasan Öztürk</a>'ün ve <a target='_blank' href='http://furkanhikmet.blogspot.com/p/sayfa-2.html'>Abdullah oğlu Muhammed Nebi Eren Şentürk</a>'ün ve Tüm Resullerinin Üzerimize Olsun Tüm Hayatlarımızda!<br><br><br><img src='pic/khalifa.jpg' style='margin-left: -30.77px; width: calc(100% + 61.44px);'></img><br><br><br><img src='pic/66619.png' style='margin-left: -30.77px; width: calc(38% + 61.44px);'></img><br><br><br><br><img src='pic/rashad.jpg' style='margin-left: -30.77px; width: calc(100% + 61.44px);'></img><br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/3.html?m=1#81'>3:81</a> TANRI nebilerden şöyle misak almıştı: ''Size kitap ve hikmet vereceğim. Daha sonra, beraberinizdekileri doğrulayan bir elçi (resul) geldiğinde ona inanacak ve onu destekleyeceksiniz. Bunu kabul ettiniz mi ve bu sözleşmeyi yerine getireceğinize söz verdiniz mi'' demişti. Onlar ''Kabul ettik'' deyince, ''Öyleyse Şahit Olun, BEN De Sizinle Beraber Şahit Olanlardanım'' demişti.<br><br><img src='pic/Messenger_Of_The_Covenant_Of_GOD_With_His_Nabiyys.jpg' style='margin-left: -30.77px; width: calc(100% + 61.44px);'></img><br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/33.html?m=1#7'>33:7</a> Nebilerden misak (söz) almıştık. Senden, Nuh'tan, İbrahim'den, Musa'dan ve Meryemoğlu İsa'dan… Onlardan sapasağlam bir söz almıştık.<br><br><img src='pic/resuller.png' style='margin-left: -30.77px; width: calc(100% + 61.44px);'></img><br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/33.html?m=1#8'>33:8</a> Böylece doğrulardan doğruluklarını soracağız. İnkarcılar içinse acı bir azap hazırlamıştır.<br><br><iframe height='"+playerHeighter2().toString()+"' style='margin-left: -30.77px; width: calc(100% + 61.44px);' src='https://www.youtube.com/embed/Bq134tqv1oE?si=umnn4kC0r6imbKeC' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe><br><br>In Fulfillment of the Covenant. [<a target='_blank' href='https://www.OnurluKURAN.com/p/3.html?m=1#81'>3:81</a>] 1988 Conference. By: Rashad Khalifa<br><br><img src='pic/kent.png' style='margin-left: -30.77px; width: calc(100% + 61.44px);'></img><b style='font-size: xx-large;'><br><a target='_blank' class='red' href='http://furkanhikmet.blogspot.com/p/sayfa-11.html'>Namaz</a>larınızı Sürekli Olarak Tam Zamanında, <a target='_blank' class='red' href='https://www.OnurluKURAN.com/p/107.html?m=1#5'>Söylediklerinizi Anlayarak ve Dikkatinizi Tam Vererek</a>, <a target='_blank' class='blue' href='https://www.OnurluKURAN.com/p/17.html?m=1#110'>Sesinizi Belli Etmeden Ve De Kısmadan Bu İkisi Arasında Bir Ses Tonuyla Kılın!</a><br><br>Ve ALLAH'a Ortak Koşmayın!<br><br><a target='_blank' class='blue' href='http://furkanhikmet.blogspot.com/p/sayfa-11.html'>Namaz</a>larda ALLAH'tan Başkasının Adını Anmak Ve ALLAH'tan Başkasına Hitap Etmek Ve Mescidlere ALLAH'tan Başkasının Adını Yazmak, KESİNLİKLE ALLAH'a Ortak Koşmaktır!<br><br><span class='red'>Her Vakit Namaz</span> = <span class='blue'>1 Kıyam 1 Rüku ve 1 Secde’dir!</span><br><br><a target='_blank' href='https://Oku.FURKANHikmet.com/8#10'>Kutsal FURKAN Hikmet 8:10</a> - İbrahim, Rabbi için ayakta durdu, rüku ve secde etti sonra da O’na şöyle dua etti “Ey Rabbim! Beni ve soyumdan gelecekleri namazı devamlı kılanlardan eyle; ey Rabbimiz! Duamı kabul eyle.”<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/4.html?m=1#101'>4:101</a> Yeryüzünde yolculuğa çıktığınız zaman, inkâr eden kimselerin sizi fitnelendirmesinden korkarsanız, namazı kısaltmanızda size bir günah yok. Şüphesiz inkâr edenler, sizin için apaçık düşmandır.<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/4.html?m=1#102'>4:102</a> Ve sen onların içindeyken onlara namaz kıldırdığında, onlardan bir kısım seninle birlikte kılsınlar ve silahlarını alsınlar. Artık secde ettikleri zaman, artık arkanızdan kılmamış olan diğer kısım gelsin, artık seninle birlikte namaz kılsınlar ve hazırlıklarını ve silahlarını alsınlar. İnkâr eden kimseler istedi ki, keşke siz silahlarınızdan ve eşyanızdan gafil olsanız da artık üzerinize birleşmiş bir meyledişle meyletseler. Yağmurdan veya hasta olmanızdan ötürü eziyet çekerseniz silahlarınızı bırakmanızdan ötürü size bir günah yok. Ve hazırlıklarınızı alın. Şüphesiz ALLAH, inkarcılara alçaltıcı bir azap hazırladı…<br><br>Ortak Koşmayın!<br>———————————<br><br>Rabbim Rahman Yüce’dir!<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/4.html?m=1#101'>4:101</a> ayetinde kast edilen namazın kısaltmasından kasıt, <a target='_blank' href='https://www.OnurluKURAN.com/p/4.html?m=1#102'>4:102</a> ayetinde açıklanıyor: “namaz esnasında düşman kafirlerin saldırması durumunda namazı kesip düşmanın saldırısına silahlı olarak cevap vermek!”<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/4.html?m=1#102'>4:102</a> ayetinde, Namaz esnasında hastalık bitkinliğinden ya da yağmur nedeniyle toprağın çamuruna batmamak için silahın ağırlığına namaz esnasında katlanamayanlara dahi silahlarını namaz esnasında bırakmalarına izin verdiğini ancak saldırıya hazır olmalarını (dolayısıyla silahlarının yanlarında yerde yakında namaz kıldıkları yerin ön kenarında vb. olması) detayını dahi bildiriyor Rabbimiz Rahman!<br><br><a target='_blank' href='https://Oku.FURKANHikmet.com/8#10'>Furkan 8:10</a> ayetinde olduğu gibi Kuran <a target='_blank' href='https://www.OnurluKURAN.com/p/4.html?m=1#102'>4:102</a> ayetinde de namazda her vaktin 1 kıyam 1 rüku 1 secde ‘den oluştuğu bildiriliyor. Ordu’nun namaz esnasında 2’ye bölünme nedeni namaz esnasında düşman kafirlerin baskınına cevap verebilmek!<br><br>Ancak eğer namaz esnasında düşman kafirler saldırmazlarsa ve kafir düşmanın fitnesinden o yer ve zamanda çekinilmiyorsa namazı olması gerektiği şekilde kısaltmadan normal uzunluğunda 1 kıyam 1 rüku ve 1 secde olarak kılmış oluyor ordunun ilk yarısı. Namazı kılmayan ve namaz kılınması esnasında gözcülük yapan ordunun 2. yarısı, ilk yarısıyla yer değiştirip, ordunun 2. yarısı da namazı kılınca, Sadece Nebi 2 kere namaz kılmış oluyor. Diğer tüm askerler tam uzunlukta kısaltmadan namazlarını kılmış oluyorlar bir baskın olmaması halinde!<br><br>Yani baskın olmazsa ordu namazı kısaltmıyor! Ancak Eğer Baskın Olursa, Namazı Olduğu Gibi Bırakıp Düşman kafirlerle TopYekün Savaşılıyor Ve Bu Durumda <a target='_blank' href='https://www.OnurluKURAN.com/p/4.html?m=1#101'>4:101</a> ayetinde belirtildiği gibi mecburen Kısaltılmış Olunuyor Namaz! Ve <a target='_blank' href='https://www.OnurluKURAN.com/p/4.html?m=1#101'>4:101</a> ayetinde bu kısaltmadan ötürü inananlara bir günah olmadığını bildiriyor Rabbimiz Rahman! Ve <a target='_blank' href='https://www.OnurluKURAN.com/p/4.html?m=1#103'>4:103</a> ayetinde namazı kıldıktan sonra ayakta otururken ve yanlarımız üzerinde iken ALLAH’ı anmaya devam etmemiz emrediliyor!<br><br><span class='blue'>Rabbimiz Rahman Azim’sin! Yüce’sin!</span><br><span class='red'>Rabbimiz Rahman Azim’sin! Yüce’sin!</span><br><span class='blue'>Rabbimiz Rahman Azim’sin! Yüce’sin!</span><br><span class='red'>Rabbimiz Rahman Ulu’sun! Yüce’sin!</span><br><span class='blue'>Rabbimiz Rahman Kutsal’sın! Yüce’sin!</span><br><br>Ve ALLAH İzin Verirse Güvene Erişince Vakitli 1 Emir Olan Namazı Kılmaya Devam Etmemiz Emrediliyor:<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/4.html?m=1#103'>4:103</a> Namazı kaza ettiğiniz zaman, ALLAH'ı ayakta, otururken ve yanlarınız üzerinde anın. Artık Güvene kavuştuğunuzda artık namazı kılın. Şüphesiz Namaz, inananlar üzerine vakitli olarak yazılmıştır.<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/4.html?m=1#104'>4:104</a> O topluluğu izlemekte gevşeklik göstermeyin. Siz acı çekiyorsanız onlar da sizin gibi acı çekiyor. Fakat siz, onların ALLAH'tan ummadığını umuyorsunuz. ALLAH Bilendir, Bilgedir.<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/4.html?m=1#105'>4:105</a> Biz, insanlar arasında, ALLAH'ın sana gösterdiği gibi hükmedesin diye, Kitap'ı hakikat olarak indirdik. Hainlerin savunucusu olma.<br><br><a target='_blank' href='https://Oku.FURKANHikmet.com/8'>Oku.FurkanHikmet.com/8</a><br><br><a target='_blank' href='https://Oku.FURKANHikmet.com/8'>Sayfa 8</a> - <span class='red'>NAMAZ</span><br><br>NAMAZ<br><br>Rahman ve Rahim olan ALLAH'ın adıyla;<br><br><a target='_blank' href='https://Oku.FURKANHikmet.com/8#1'>1-</a> Ortak koşanlara “Gelin, ALLAH’ın indirdiğine uyun” dendiği zaman, O’nun indirdiği kitap da namazın nasıl kılınacağını ALLAH’ın eksik bıraktığını söylüyorlar. O zalimler, bilgisizce ALLAH’a noksan muamelesi yapıyorlar! ALLAH, her türlü noksanlıktan uzak’tır.<br><br><a target='_blank' href='https://Oku.FURKANHikmet.com/8#2'>2-</a> Yoksa ilah edindikleri beşerler, ALLAH’a bilmediği bir şeyi mi haber veriyorlar?<br><br><a target='_blank' href='https://Oku.FURKANHikmet.com/8#3'>3-</a> Öncekilere farz kılınan namaz, sonrakilere de farz kılınmıştır.<br><br><a target='_blank' href='https://Oku.FURKANHikmet.com/8#4'></a>4- Namaz, ALLAH’ın Nebisi ve Resul’ü olan İbrahim’den beri süregelen ibadetlerdendir.<br><br><a target='_blank' href='https://Oku.FURKANHikmet.com/8#5'>5-</a> İslam olan Müslümanların erkek çocuklarını sünnet ettirmek de şüphesiz yine İbrahim’den beri süregelenlerdendir.<br><br><a target='_blank' href='https://Oku.FURKANHikmet.com/8#6'>6-</a> İnsanlar içinde tek bir İlah olan ALLAH’ın vahyetmesiyle, O’na namaz kılan ilk insan, İbrahim’dir<br><br><a target='_blank' href='https://Oku.FURKANHikmet.com/8#7'>7-</a> Putperestler putlarına ibadet ederlerken, İbrahim ibadet edilmeye asıl layık olan tek ALLAH’a ibadet edenlerdendir.<br><br><a target='_blank' href='https://Oku.FURKANHikmet.com/8#8'>8-</a> İbrahim, dinini yalnız ALLAH’a has kılmış ve hanif olarak sadece O’na yönelmiştir.<br><br><a target='_blank' href='https://Oku.FURKANHikmet.com/8#9'>9-</a> Şüphesiz namaz’dan sonra dua etmek de İbrahim’den beri süregelenlerdendir.<br><br><a target='_blank' href='https://Oku.FURKANHikmet.com/8#10'>10-</a> İbrahim, Rabbi için ayakta durdu, rüku ve secde etti sonra da O’na şöyle dua etti “Ey Rabbim! Beni ve soyumdan gelecekleri namazı devamlı kılanlardan eyle; ey Rabbimiz! Duamı kabul eyle.”<br><br><a target='_blank' href='https://Oku.FURKANHikmet.com/8#11'>11-</a> Namaz’ı hangi ses tonunda kılacağınız, kılarken nasıl bir durum içinde olacağınız, kılmadan önce nasıl abdest alacağınız, hangi durumlarda yaklaşacağınız ve hangi durumlarda uzak kalacağınız, elinizde yazılı olan apaçık bir Kur’an’da dır. Ayrıntılı olarak açıklanmıştır.<br><br><a target='_blank' href='https://Oku.FURKANHikmet.com/8#12'>12-</a> ALLAH, Kur'an'da bir şeyi eksik bırakmamıştır. O, her türlü eksiklikten uzak’tır.<br><br><a target='_blank' href='https://Oku.FURKANHikmet.com/8#13'>13-</a> Nebi’ye vahyolunan apaçık bir Kur’an ve Nebi’nin de uyduğu sadece kendisine vahyolunan olduğu halde, Nebi’ye kendisine vahyolunan Kur’an’ın dışında din adına bir takım şeyler yaptığını iddia edenler, ancak Nebi’ye iftira etmişlerdir.<br><br><a target='_blank' href='https://Oku.FURKANHikmet.com/8#14'>14-</a> Din, yalnız ALLAH’ın dini’dir ve sadece O’nun indirdiği gibidir. Kulluk, yalnız ALLAH’a ve sadece O’nun emrettiği şekilde edilir.<br><br><a target='_blank' href='https://Oku.FURKANHikmet.com/8#15'>15-</a> Kur’an’ı, ALLAH indirmiştir. O halde siz de dininizi yalnız Kur’an’a has kılın ve sadece size Kur’an’da ALLAH’ın emrettiğini yapın! İşte bu, halis din’dir.<br><br><a target='_blank' href='https://Oku.FURKANHikmet.com/8#16'>16-</a> ALLAH’ın emrettiğinden başkasını yapmak veya emrettiğine, emretmediği bir şeyi de katarak yapmak, ALLAH’a ortak koşmaktır.<br><br><a target='_blank' href='https://Oku.FURKANHikmet.com/8#17'>17-</a> Şüphesiz Kur'an ancak anlaşılsın, düşünüp öğüt alınsın diye Arapça olarak indirilmiş bir kitap’dır.<br><br><a target='_blank' href='https://Oku.FURKANHikmet.com/8#18'>18-</a> Eğer Araplara, başka bir dil’de Kur’an gelmiş olsaydı ve ALLAH’ın Nebisi, Araplara Kur’an’ı yabancı bir dilden okusaydı “Ayetleri anlaşılır olmalı değil miydi? Arab’a yabancı dilden olur mu?” diyeceklerdi.<br><br><a target='_blank' href='https://Oku.FURKANHikmet.com/8#19'>19-</a> Senin kavmin, Kur’an’ı anlamadan okumayı kendine din edindi ve “Ayetleri anlaşılır olmalı değil mi? Türk’e yabancı dilden olur mu?” bile demedi.<br><br><a target='_blank' href='https://Oku.FURKANHikmet.com/8#20'>20-</a> Şüphesiz senin kavmin dışında, insanların çoğu da anlamadan okumayı kendine din edindi.<br><br><a target='_blank' href='https://Oku.FURKANHikmet.com/8#21'>21-</a> Bu gerçekten şaşılacak bir iştir ve apaçık bir şeytan işidir. Çünkü şeytanlar, vahyi işitmekten uzak kılındığı gibi insanları da onu işitmekten uzak kılmak istemiştir.<br><br><a target='_blank' href='https://Oku.FURKANHikmet.com/8#22'>22-</a> ALLAH’ın Hak dini olan İslam, şüphesiz akıl dinidir. Aklını kullanmayı emretmektedir.<br><br><a target='_blank' href='https://Oku.FURKANHikmet.com/8#23'>23-</a> Dünya hayatı çok az bir yararlanma, oyun ve eğlenceden başka bir şey değildir. Rabbinin katında olanlar daha güzel ve süreklidir. Sonunda dönüş, alemlerin Rabbinedir.<br><br><a target='_blank' href='https://Oku.FURKANHikmet.com/8#24'>24-</a> Sana verilen bu sahifeler, insanlara gelen yeni bir uyarı’dan başka bir şey değildir. İnsanları tek bir İlah’a kulluk etmeye ve O’ndan başkasına kulluk etmemeye davet etmektedir. Vekil olarak, ALLAH yeterlidir.<br><br><br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/73.html?m=1#5'style='font-size: xxx-large;' class='red'><span class='blue'>''</span>ORTAK KOŞAN HERKES CEHENNEME GİRECEK!<span class='blue'>''</span><br><br><span class='blue'>TANRIDAN 1 KELİME!</span></a><br><br><br><br></b>Yüce Ulu Eşsiz Benzersiz Tek Rahman Ve Rahim Olan ALLAH’ın, Biz Resullerini Yalanlamanız Nedeniyle, ULU RAB, Üzerinize 27 Temmuz 2017’de <a target='_blank' href='https://www.OnurluKURAN.com/p/44.html?m=1'>44. Duman Suresi</a>'nde Vaat Ettiği Duman Azabı’nı Gönderdi Ey İstanbul Artık Tövbe Edin!<img src='duman/istanbul.jpg' style='margin-left: -30.77px; width: calc(100% + 61.44px);'></img><iframe height='"+playerHeighter3().toString()+"' style='margin-left: -30.77px; width: calc(100% + 61.44px);' src='https://www.youtube.com/embed/lyG8NJLr_hk?si=2c-99WaV5wr5lg68' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe><br><br><br><b><a target='_blank' href='https://www.OnurluKURAN.com/p/85.html?m=1'>85 - <span class='red'>Büruc (Galaksiler)</span></a></b><br><br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/85.html?m=1#0'>85:0</a> Rahman Ve Rahim Olan ALLAH'ın İsmiyle,<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/85.html?m=1#1'>85:1</a> And olsun galaksiler sahibi göğe.<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/85.html?m=1#2'>85:2</a> Söz verilen güne,<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/85.html?m=1#3'>85:3</a> Ve tanığa da tanık olunana da and olsun.<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/85.html?m=1#4'>85:4</a> Kanyon halkına yazıklar olsun.<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/85.html?m=1#5'>85:5</a> Tutuşturulmuş ateşin-<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/85.html?m=1#6'>85:6</a> Başında oturmuşlar,<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/85.html?m=1#7'>85:7</a> Ve inananlara yaptıkları işkenceyi seyrediyorlar.<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/85.html?m=1#8'>85:8</a> İnananlardan nefret ediyorlardı. Sadece, onlar Üstün ve Övgüye layık olan TANRI’ya inandıkları için…<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/85.html?m=1#9'>85:9</a> Göklerin ve yerin yönetimi O'na aittir. Ve TANRI her şeye Tanıktır.<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/85.html?m=1#10'>85:10</a> İnanan erkeklere ve kadınlara zulüm ve işkencede bulunan ve daha sonra tövbe etmeyenler cehennem azabını haketmişlerdir. Onlar için yakıcı bir azap vardır.<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/85.html?m=1#9'>85:11</a> İnanan ve doğru davrananlar ise içlerinden ırmaklar akan bahçeleri haketmişlerdir. Büyük başarı budur.<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/85.html?m=1#12'>85:12</a> Doğrusu, Efendinin yakalaması pek çetindir.<br><br><img src='duman/duman1.jpeg' style='margin-left: -30.77px; width: calc(100% + 61.44px);'></img><br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/85.html?m=1#13'>85:13</a> Başlatan ve tekrarlayan O'dur.<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/85.html?m=1#14'>85:14</a> O Bağışlayandır, Sevendir.<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/85.html?m=1#15'>85:15</a> Şanlı yönetimin sahibidir.<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/85.html?m=1#16'>85:16</a> Dilediğini yapandır.<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/85.html?m=1#17'>85:17</a> Orduların tarihinden haberin var mı?<br><br><img src='duman/duman3.jpeg' style='margin-left: -30.77px; width: calc(100% + 61.44px);'></img><br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/85.html?m=1#18'>85:18</a> Firavunun, Semud'un?<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/85.html?m=1#19'>85:19</a> İnkarcılar, kronik yalanlayıcılardır.<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/85.html?m=1#20'>85:20</a> TANRI, onları arkalarından kuşatmıştır.<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/85.html?m=1#21'>85:21</a> Gerçekten o, şanlı bir Kuran'dır.<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/85.html?m=1#22'>85:22</a> Korunmuş bir ana levhadadır.<br><br><img src='duman/duman4.JPG' style='margin-left: -30.77px; width: calc(100% + 61.44px);'></img><br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/19.html?m=1#88'>19:88</a> Ve Diyorlar! ''RAHMAN, veledi evlatlık edin''<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/19.html?m=1#89'>19:89</a> Kesinlikle Korkunç Bir Şeyi İşliyorsunuz!<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/19.html?m=1#90'>19:90</a> Neredeyse Gökler Yarılacak Ondan! Ve Yer Çatlayacak! Ve Dağlar Batıp Yerle Bir Olacak!<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/19.html?m=1#91'>19:91</a> RAHMAN’a, veledi davet Etmelerinden!<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/19.html?m=1#92'>19:92</a> Ve Yakışmaz RAHMAN İçin Veledi Evlatlık Edinmek!<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/19.html?m=1#93'>19:93</a> Göklerde Ve Yerde Kim Varsa, Ancak RAHMAN'a Kul Olarak Gelecektir!<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/19.html?m=1#94'>19:94</a> Kesinlikle Onları Saymış Ve Sayıyla Numaralandırmıştır!<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/19.html?m=1#95'>19:95</a> Ve Onların Hepsi Kıyamet Günü O'na Ayrılmış Olarak Gelecektir!<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/19.html?m=1#96'>19:96</a> Şüphesiz İnanan Ve İyilik Yapan Kimseler İçin; RAHMAN, Sevgi Yaratacaktır!<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/19.html?m=1#97'>19:97</a> Artık Şüphesiz Biz Onu Senin Lisanına Kolaylaştırdık; Onunla, Korunanları Müjdelemen Ve Şaşkın Bir Kavmi Uyarman İçin!<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/19.html?m=1#98'>19:98</a> Ve Kuşaklardan Nicelerini Helak Ettik Onlardan Önce, Onlardan Birini Hissediyor Musun? Veya Fısıltılarını İşitiyor Musun?<br><br><img src='pic/ISTE_73-5_TEKI_SOZ_73-9.PNG' style='margin-left: -30.77px; width: calc(100% + 61.44px);'></img><br><br><br><br><b><span class='blue'>''</span>Dinle, Ey İsrail! Tanrımız RAB Tek RAB’dir!<span class='blue'>''</span><br><br><span class='blue'>Tevrat - Yasa’nın Tekrarı 6:4</span></b><br><br><br><br>Yüce Eşsiz Tek Ulu ALLAH 'ın Resulü Burcu Bildirik ‘in Hazırladığı<br><br>“<a href='KURAN_TEVRAT_KARŞILAŞTIRMASI.pdf' target='blank'>KURAN TEVRAT KARŞILAŞTIRMASI.pdf</a>” Çalışmasına<br><br>Şu Linkten Ulaşabilirsiniz:<br><br><a href='KURAN_TEVRAT_KARŞILAŞTIRMASI.pdf' target='blank'>19x334.com/KURAN_TEVRAT_KARŞILAŞTIRMASI.pdf</a><br><br><img src='pic/burcu_bildirik_resulden.jpg' style='margin-left: -30.77px; width: calc(100% + 61.44px);'></img><br><br><img src='pic/43-61.png' style='margin-left: -30.77px; width: calc(100% + 61.44px);'></img><br><br><a target='_blank' class='blue' href='https://19x334.com'>19x334.com</a><br><a target='_blank' class='red' href='http://Kıyamet.Net'>Kıyamet.Net</a><br><a target='_blank' class='blue' href='http://TrueClock.Org'>TrueClock.Org</a><br><br><a target='_blank' class='blue' href='https://www.OnurluKURAN.com/p/43.html?m=1#61'>43:61</a> Ve Şüphesiz O, Kesinlikle Saatin Bilgisidir! Artık Ondan Şüphe Etmeyin! Ve Bana Tabi Olun! Bu Doğru Yoldur!<br><br><a target='_blank' class='blue' href='https://www.OnurluKURAN.com/p/43.html?m=1#62'>43:62</a> Ve Şeytan Sizi Çevirmesin! Şüphesiz O, Sizin İçin Apaçık Düşmandır!<br><br><a target='_blank' class='blue' href='https://www.OnurluKURAN.com/p/43.html?m=1#63'>43:63</a> Ve İsa Apaçık Kanıtlarla Geldiğinde Dedi Ki: ''Ben, Size Hikmetle, Kendisi İçinde Ayrılığa Düştüklerinizin Bazılarını Açıklamaya Geldim. ALLAH'tan Korkun Ve Bana İtaat Edin.''<br><br><a target='_blank' class='blue' href='https://www.OnurluKURAN.com/p/43.html?m=1#64'>43:64</a> ''Şüphesiz ALLAH, O Rabbim Ve Rabbinizdir. Artık O'na Kulluk Edin! Bu Doğru Yoldur.''<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/43.html?m=1#74'>43:74</a> Şüphesiz Suçlular, Cehennem Azabında Sonsuza Dek Kalıcıdırlar!<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/43.html?m=1#75'>43:75</a> Onlardan Hafifletilmez Ve Onlar Orada Ümitsizdirler!<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/43.html?m=1#76'>43:76</a> Ve Biz, Zulmetmedik Onlara Velakin Onlar Zalimlerdi!<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/43.html?m=1#77'>43:77</a> Ve Seslendiler: ''Ey Malik, Rabbin Bizi Kazısın!'', Dedi: ''Şüphesiz Siz Katranlanacaksınız!''<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/43.html?m=1#78'>43:78</a> Kesinlikle Size Hakkı Getirdik Fakat Çoğunuz Haktan İğreniyorsunuz!<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/43.html?m=1#79'>43:79</a> Yoksa Onlara Bir İşten Bıkkınlık Mı Geldi? Artık Şüphesiz Biz de Bıktık!<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/43.html?m=1#80'>43:80</a> Yoksa Sırlarını Ve Kendi Kendilerine Konuşmalarını İşitmediğimizi Mi Sanıyorlar? Aksine Yanlarındaki Resullerimiz Yazıyorlar!<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/43.html?m=1#81'>43:81</a> De Ki: ''Eğer Rahman’ın Bir Veledi Olsaydı, Artık Ben O'na Tapanların İlkiydim!''<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/43.html?m=1#82'>43:82</a> Göklerin Ve Yerin Rabbi Arşın Rabbi, Yücedir Atfettiklerinden!<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/43.html?m=1#83'>43:83</a> Artık Bırak Onları, Atılsınlar Ve Laubali Olsunlar Ta Ki Vaat Olundukları Günü Deneyimleyinceye Dek!<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/43.html?m=1#84'>43:84</a> Ve O Ki Gökteki İLAH Ve Yerdeki İLAH'tır! Ve O, HAKİM'dir, BİLEN'dir!<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/43.html?m=1#85'>43:85</a> Ve Bereketlidir O Ki, O'nundur Göklerin Ve Yerin Ve 2'si Arasındakilerin Mülkü! Ve O'nun Yanındadır Saatin Bilgisi Ve O'na Döneceksiniz!<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/43.html?m=1#86'>43:86</a> ve O'nun berisinden çağırdıkları hiç bir güce sahip olamazlar şefaatten, ancak hakka ve bilerek şahitlik eden hariç.<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/43.html?m=1#87'>43:87</a> Ve Eğer Onlara Kimin Onları Yarattığını Sorarsan: Kesinlikle ''TANRI'' Diyecekler! O Halde Nasıl Kandırılıyorlar?<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/43.html?m=1#88'>43:88</a> Ve O'nun Deyişine: ''Ey Rabbim! Şüphesiz Bunlar İnanmayan Bir Kavimdir!''<br><br><a target='_blank' href='https://www.OnurluKURAN.com/p/43.html?m=1#89'>43:89</a> Artık Sen, Onlardan Başka Tarafa Dön Ve ''Selam'' De, Artık Yakında Bilecekler!<br><br><a target='_blank' class='blue' href='http://furkanhikmet.blogspot.com/p/sayfa-9-cinar.html'>Furkan 9:12-</a> Ey İnsanlar! Size <a target='_blank' class='red' href='/True_Clock_of_Resurrection'>vakti yaklaşan gün, <span class='blue'>bildirildi</span></a>. İnsanlar uyarıldı ve iman edenler müjdelendi.<br><br>Selam, Ortak Koşmayanların Üzerine Olsun!<br><br><a target='_blank' class='blue' href='https://www.OnurluKURAN.com/p/43.html?m=1#61'>Tek Eşsiz Ortaksız Ulu Yüce Azim Rahman Ve Rahim Olan ALLAH'ın, Kulu Nebisi Resulü Kıyamet Saati'nin Kesin Bilgisi Meryemoğlu İsa Mesih Abdurrahman Ayyıldız</a><br><br><img src='pic/147.jpg' style='margin-left: -30.77px; width: calc(100% + 61.44px);'></img><br><br>Hamd, Tek Eşsiz Ortaksız Rabbim Ve Rabbiniz Olan Ulu Yüce Azim Rahman Ve Rahim Olan ALLAH'adır!"
	}
];

var uyarı = false;

document.getElementById("uyarı").addEventListener("click", function() {
	uyarı = true;
	alertt();
})
document.getElementById("bism2698").addEventListener("click", function() {
	uyarı = true;
	alertt();
})

function alertt()
{
	var today = new Date();
	today = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

	var lastVisit = localStorage.getItem('lastVisit');

	if (lastVisit == null /* || lastVisit != today */ || uyarı) {

		clickLink = false;

		Swal.fire({
			title: notifications[1].title,
			html: notifications[1].text,
			imageUrl: notifications[1].imageUrl,
			imageWidth: 'auto',
			imageHeight: 190,
			imageAlt: 'DO NOT TOUCH QURAN! WITHOUT CLEANED UP! EVEN WITH MOUSE!'
		}).then((value) => {
			Swal.fire({
				title: notifications[6].title,
				html: notifications[6].html,
				imageUrl: notifications[6].imageUrl,	
				imageWidth: '100%',
				imageHeight: 'auto',
				imageAlt: notifications[6].imageAlt
			}).then((value) => {
				Swal.fire({
					title: notifications[4].title,
					html: notifications[4].html,
					imageUrl: notifications[4].imageUrl,
					imageWidth: '100%',
					imageHeight: 'auto',
					imageAlt: 'İŞTE 73:5 AYETİNDEKİ TANRI SÖZÜ'
				}).then((value) => {
					Swal.fire({
						title: notifications[0].title,
						html: notifications[0].html,
						imageUrl: notifications[0].imageUrl,
						imageWidth: 'auto',
						imageHeight: 301,
						imageAlt: 'GOD HAS PRESERVED QURAN BY MIRACLE OF 19!'
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
								imageUrl: notifications[5].imageUrl,
								imageWidth: notifications[5].imageWidth,
								imageHeight: notifications[5].imageHeight,
								imageAlt: notifications[5].imageAlt,
								title: notifications[5].title,
								html: notifications[5].html
							}).then((value) => {
								v = 0; // starts verses from 0
								clickLink = false; // insanları zorlama inşALLAH
								// clickLink = true;
							})
						})
					})
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
	// değişiklikleri burada değil renkleriSay() fonksiyonunun içinde yapıyoruz:
	renkleriSay();
	rengarenk();
	yataylaştırıcı(); // you should call it second time for proper "verse per line" functioning
	lineKeeper(); // after "verse per line" switching and scrolling in textarea then switching "verse per line" again cause line shift between textarea and left column total line coloring countings this lineKeeper(); call fixes that WITH WILL OF THE SACRED SUPREME KING RAHMAN!
})

function yataylaştırıcı(){
	// önce "satır başına 1 ayet"i seçtiğimizde ve sonra renklendirecek harf seçtiğimizde renklendirmenin tüm yatay yazı alanı boyunca etkili olabilmesi için:
	if(ovpl.checked){
		if(browser != "Firefox" && browser != "Firefox-Android") {
			if(windowWidth < 886) document.getElementById("nextSura").style.marginTop = "24px";
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
		if(browser != "Firefox" && browser != "Firefox-Android") {
			if(windowWidth < 886) document.getElementById("nextSura").style.marginTop = "8px";
			else document.getElementById("nextSura").style.marginTop = "0px";
		}
		ifade.style.setProperty('white-space', 'pre-wrap', 'important');
		ifade.style.setProperty('overflow-x', 'hidden', 'important');
		document.getElementById("copyText").style.setProperty('white-space', 'pre-wrap', 'important');
		if(document.getElementById("coloredDiv"))
		{
			document.getElementsByClassName("hwt-backdrop")[0].style.setProperty('width', 'inherit', 'important');
			document.getElementsByClassName("hwt-highlights")[0].style.setProperty('white-space', 'pre-wrap', 'important');

			document.getElementById("coloredDiv").style.setProperty("width", ifade.clientWidth + "px");
		}
	}
}

function contains(array, element)
{
	for(var i = 0; i < array.length; ++i)
		if(array[i] == element)
			return true;
	return false;
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
					if(clrltrs[r][c] == harfler[i] && !contains(seçililer, harfler[i])) // renklendirme matrisi içinde varsa ve seçililere daha önce eklenmemişse (bu kontrolü yapmak önemli asenkron js bazen 2 kat push edebiliyor seçililerin içine ve bu yüzden satır sayımları 2 katına çıkıyordu bu kontrolü yapmadan önce üstelik 6 satır önce seçililer = []; ataması yapmış olmama rağmen)
						seçililer.push(harfler[i]); // o harfleri seç
	
		lineSums = numaralandır(renderedRows, seçililer);
	}
	else{
		for(var i = 0; i < isimler.length; i++) // ALLAH'ın isimlerinden her biri
			for(var r = 28; r <= 33; r++) // r satırlı (clrltrs[28] - clrltrs[33] arası isimler için ayrılmış durumda)
				for(var c = 0; c < clrltrs[r].length; c++) // c sütunlu
					if(clrltrs[r][c] == isimler[i] && !contains(seçililer, isimler[i])) // renklendirme matrisi içinde varsa ve seçililere daha önce eklenmemişse (bu kontrolü yapmak önemli asenkron js bazen 2 kat push edebiliyor seçililerin içine ve bu yüzden satır sayımları 2 katına çıkıyordu bu kontrolü yapmadan önce üstelik 15 satır önce seçililer = []; ataması yapmış olmama rağmen)
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
			toplam.className = "total tamKat";
			toplam.innerHTML = divide19(say_toplam_isimler);
		}
		else {
			toplam.className = "total";
			toplam.innerHTML = say_toplam_isimler;
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
							if((sums[i]+say_toplam_isimler) % 19 == 0) toplam.className = "total tamKat";
							else  toplam.className = "total";
						}
						else{
							if(sums[i] % 19 == 0) toplam.className = "total tamKat";
							else  toplam.className = "total";
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
							if((sums[i]+say_toplam_isimler) % 19 == 0) toplam.className = "total tamKat";
							else  toplam.className = "total";
						}
						else{
							rows.push(sums[i]);
							if(sums[i] % 19 == 0) toplam.className = "total tamKat";
							else  toplam.className = "total";
						}
					}
					else if(i < ogeler.length - 1){
						document.getElementById(i).className = "row";

						if(sure1.value && !ayet1.value && (document.getElementById("اسم").checked || document.getElementById("الله").checked || document.getElementById("الرحمن").checked || document.getElementById("الرحيم").checked)){
							rows.push(sums[i+1]+say_toplam_isimler);
							if((sums[i+1]+say_toplam_isimler) % 19 == 0) toplam.className = "total tamKat";
							else  toplam.className = "total";
						}
						else {
							rows.push(sums[i+1]);
							if(sums[i+1] % 19 == 0) toplam.className = "total tamKat";
							else  toplam.className = "total";
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

function elementsOverlapHorizontally(el1, el2)
{
	var domRect1 = el1.getBoundingClientRect();
	var domRect2 = el2.getBoundingClientRect();

	return (domRect1.right > domRect2.left && domRect1.left < domRect2.right);
}

function hideOverlappedHorizontally(el1, el2)
{
	if(elementsOverlapHorizontally(el1, el2)) el1.style.visibility = "hidden";
	else el1.style.visibility = "visible";
}

function lineKeeper() {
	ifade.style.setProperty("background-position", '0px -' + ifade.scrollTop + 'px, center center');
	document.getElementById("satirlar").scrollTop = ifade.scrollTop;
}

ifade.addEventListener("scroll",function() {
	lineKeeper();
	hideOverlappedHorizontally(ovplBox, toplam);
});

window.addEventListener("resize",function() {
	lineKeeper();
	kalem(); // pencere genişliği değiştirilerek 886 px üstü ve altı arasında geçiş yapıldığında arkaplan tutarlılığını sağlar!
	hideOverlappedHorizontally(ovplBox, toplam);
});

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

	var boş = true;

	for(var i = 0; i < document.getElementsByClassName("seçenekler").length; ++i)
		if(document.getElementsByClassName("seçenekler")[i].checked)
			boş = false;

	if(!boş){
		document.getElementById("satirlar").style.display = "inline-block";
		// below is bug fix for dangling 0 showing div of "toplam" only when ifade.value cleaned after scrolling until to the middle of the first line of textarea:
		document.getElementById("satirlar").scrollTop = "0px";
		toplam.style.display = "inline-block";
		ifadeWidther();
	}
	else {
		document.getElementById("satirlar").style.display = "none";
		// below is bug fix for dangling 0 showing div of "toplam" only when ifade.value cleaned after scrolling until to the middle of the first line of textarea:
		toplam.style.display = "none";
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
		playing = true;
		isMusicPlayed = "true";
		localStorage.setItem('isMusicPlayed', isMusicPlayed);
	}
});

var syncFlag = 0;

$('#play-pause-button').click(function(){
	playing = true; // for while playing, pausing except self ending WITH PERMISSION OF 1
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
	playing = false;
    $("#play-pause-button").removeClass('fa-pause');
    $("#play-pause-button").addClass('fa-play');
};

var versesOf74 = [
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#0">74:0</a>&nbsp;IN THE NAME OF THE GOD RAHMAN THE MERCIFUL!</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#1">74:1</a>&nbsp;o you hidden secret</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#2">74:2</a>&nbsp;Get Up and Warn!</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#3">74:3</a>&nbsp;Magnify your OWNER!</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#4">74:4</a>&nbsp;and Purify your garments.</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#5">74:5</a>&nbsp;and Give Up from punishing.</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#6">74:6</a>&nbsp;and Do Not Make Grateful by increasing.</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#7">74:7</a>&nbsp;and Be Patient for your OWNER.</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#8">74:8</a>&nbsp;then, When The Horn Is Blown.</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#9">74:9</a>&nbsp;That Will Be A Difficult Day.</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#10">74:10</a>&nbsp;For The Disbelievers, Not Easy.</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#11">74:11</a>&nbsp;Leave ME and whom I CREATED ALONE.</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#12">74:12</a>&nbsp;and I GRANTED to him an extensive wealth.</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#13">74:13</a>&nbsp;and children to behold.</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#14">74:14</a>&nbsp;and I HAVE ARRANGED smoothness for him.</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#15">74:15</a>&nbsp;then he coveted for more.</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#16">74:16</a>&nbsp;NEVER! INDEED, he has been stubborn to OUR VERSES.</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#17">74:17</a>&nbsp;soon I WILL GET him closer to a climb.</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#18">74:18</a>&nbsp;INDEED he thought and decided.</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#19">74:19</a>&nbsp;so, may he BE SLAIN, how he decided!</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#20">74:20</a>&nbsp;therefore may he BE SLAIN, how he decided!</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#21">74:21</a>&nbsp;then he looked.</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#22">74:22</a>&nbsp;then he frowned and scowled.</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#23">74:23</a>&nbsp;then he turned away arrogantly.</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#24">74:24</a>&nbsp;so, he said: "THIS is nothing except transmitted sorcery".</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#25">74:25</a>&nbsp;"THIS is nothing except word of a human".</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#26">74:26</a>&nbsp;Soon I WILL BURN him in SAQAR!</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#27">74:27</a>&nbsp;And Do you Know What Is SAQAR?</p>',
	'<p><a target="_blank" class="antique-link" href="http://honourableQURAN.blogspot.com/p/74.html?m=1#28">74:28</a>&nbsp;IT NEITHER Remains (Anything Back) NOR Leaves (Alone).</p>'
]

var verseHead = document.getElementById("versesOf74");
var v = 0;
var clickLink = false; // insanları zorlama inşALLAH
// var clickLink = true;

function expresser() {
	$('#versesOf74').fadeOut("1380", function() {
		verseHead.innerHTML = versesOf74[v];
		v++;
		$('#versesOf74').fadeIn("1380");
		if (v == versesOf74.length)
		{
			$('#versesOf74').removeClass('first-tour');
			$('#v7429').addClass('first-tour');
			if (clickLink && !sure1.value && !ifade.value)
			{
				setTimeout(function(){document.getElementById("start").click()}, 2700); // not 2760 since v=0; should not resulted after click IF 1 WILLS
				clickLink = false;
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

	if(/^((?!chrome|android).)*safari/i.test(navigator.userAgent))
	{
		if (navigator.userAgent.match(/iPhone/i))
			browser = "iPhone-Safari";
		else if (navigator.userAgent.match(/iPod/i))
			browser = "iPod-Safari";
		else if ((navigator.userAgent.match(/Mac/) || navigator.userAgent.match(/iPad/i)) && navigator.maxTouchPoints && navigator.maxTouchPoints >= 1) // even can detect newer ipad pro s WITH WILL OF THE SACRED SUPREME KING RAHMAN!
			browser = "iPad-Safari";
		else
			browser = "Safari";
	}
	else if(navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.toLowerCase().indexOf("android") > -1)
		browser = "Chrome-Android";
	else if(navigator.userAgent.indexOf("Firefox") > -1 && navigator.userAgent.toLowerCase().indexOf("android") > -1)
		browser = "Firefox-Android";
	else if(navigator.userAgent.indexOf("Edge") > -1 && navigator.userAgent.toLowerCase().indexOf("android") > -1)
		browser = "Edge-Android";
	else if(navigator.userAgent.toLowerCase().indexOf("android") > -1)
		browser = "Other-Android";
	else if(navigator.userAgent.indexOf("Chrome") > -1)
		browser = "Chrome";
	else if(navigator.userAgent.indexOf("Firefox") > -1)
		browser = "Firefox";
	else if(navigator.userAgent.indexOf("Edge") > -1)
		browser = "Edge";
	else
		browser = "Other-Desktop";

	var tempBrowser = browser;
	document.getElementById("notFirefox").innerText = "coloring markings or countings may slip in " + (
		tempBrowser.includes("Android") ?
			( tempBrowser.includes("Other") ? "Android" : tempBrowser.slice(0,-8) )
											: tempBrowser) + "!";

	return browser;
}

function linkChanger()
{
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
	var nextSura = document.getElementById("nextSura"),
	sonrakiSure = parseInt(sure1.value) + 1,
	notFirefox = document.getElementById("notFirefox");

	if(document.getElementById("اسم").checked || document.getElementById("الله").checked || document.getElementById("الرحمن").checked || document.getElementById("الرحيم").checked)
	{
		if (sure1.value && !ayet1.value)
		{
			if(1 < sonrakiSure && sonrakiSure <= 114)
			{
				nextSura.style.display = "block";
				notFirefox.style.display = "none";
				if(ovpl.checked)
					nextSura.href = "/#ovpl=1&onv=1&sura="+sonrakiSure+"&count="+sclnhrf;
				else
					nextSura.href = "/#ovpl=0&onv=1&sura="+sonrakiSure+"&count="+sclnhrf;
			}
			else
				nextSura.style.display = "none";
		}
	}
	else {
		nextSura.style.display = "none";
		if(browser != "Firefox" && browser != "Firefox-Android")
			if(sure1.value && $("input[class=seçenekler]:checked").length > 0)
				notFirefox.style.display = "block";
			else
				notFirefox.style.display = "none";
	}
}

$(".seçenekler").on("change", sonrakiSureyeGeç);

function UseFirefox(){
	Swal.fire({
		imageUrl: notifications[3].imageUrl,
		imageWidth: notifications[3].imageWidth,
		imageHeight: notifications[3].imageHeight,
		imageAlt: notifications[3].imageAlt,
		title: notifications[3].title,
		html: notifications[3].html
	});
}