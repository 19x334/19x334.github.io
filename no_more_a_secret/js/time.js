// İSMİYLE TANRI'NIN ZARİF MERHAMETLİ

/*

aşağıdaki fonksiyonu aktif etme/kullanma,
eğer kullanırsan aşağıdaki smooth scrolling
css özelliği kayboluyor/çalışmıyor:

html, body{ scroll-behavior: smooth; }

tarihe tıklayınca aşağıdaki "But how do I know that?"
e aniden değil sayfayı kaydırarak gitmesini istiyorum

jQuery( document ).ready(function( $ )
{
	//Use this inside your document ready jQuery 
	$(window).on('popstate', function() {
	   location.reload(true);
	});
});

*/

function handleTickInit(tick) {
				
	// set language
	var locale = {
		YEAR_PLURAL: 'Years',
		YEAR_SINGULAR: 'Year',
		MONTH_PLURAL: 'Months',
		MONTH_SINGULAR: 'Month',
		WEEK_PLURAL: 'Weeks',
		WEEK_SINGULAR: 'Week',
		DAY_PLURAL: 'Days',
		DAY_SINGULAR: 'Day',
		HOUR_PLURAL: 'Hours',
		HOUR_SINGULAR: 'Hour',
		MINUTE_PLURAL: 'Minutes',
		MINUTE_SINGULAR: 'Minute',
		SECOND_PLURAL: 'Seconds',
		SECOND_SINGULAR: 'Second',
		MILLISECOND_PLURAL: 'Milliseconds',
		MILLISECOND_SINGULAR: 'Millisecond'
	};

	for (var key in locale) {
		if (!locale.hasOwnProperty(key)) { continue; }
		tick.setConstant(key, locale[key]);
	}

	// format of since date is ISO8601
	// https://en.wikipedia.org/wiki/ISO_8601

	// '2000'                       to count up from 2000
	// '2000-01-31T12:00:00'        to count up from 12 o'clock on the 31st of January 2000
	// '2000-01-15T10:00:00+01:00'  to count up from 10 o'clock GMT+1 on the 15th of January 2000

	// create counter
	Tick.count.down('2280-06-14T00:12:54+03:00', { format: ['y','M','d','h','m','s'] }).onupdate = function (value) {
		tick.value = value;
	};
}

$(document).ready(function() {
	setTimeout(gizleyici, 500);
});
$(window).resize(gizleyici);

var windowWidth = Math.min(window.innerWidth, screen.width);

function gizleyici() {

	windowWidth = Math.min(window.innerWidth, screen.width);
	
	if(windowWidth < 768){
		for(var i = 0; i < 12; i ++) {
			if(3 <= i && i < 9) document.getElementsByClassName("tick-group")[i].style.display = "none";
			else continue;
		}
	}
	else{
		for(var i = 0; i < 12; i ++) {
			if(0 <= i && i < 6) continue;
			else document.getElementsByClassName("tick-group")[i].style.display = "none";
		}		
	}
}

var lastBgIndex, random;

function randombg(choice){
	random = Math.floor(Math.random() * 7); // 0-6
	const backgrounds = [
				   "url('pic/space2.png')",
				   "url('pic/space4.png')",
				   "url('pic/space5.png')",
				   "url('pic/space8.jpg')",
				   "url('pic/El-Konstantiniyye.png')",
				   "url('pic/moonEarthSun.png')",
				   "url('pic/resurrection.png')"
				];
				   
	while(lastBgIndex == random) random = Math.floor(Math.random() * 7); // 0-6
	if (choice != undefined) random = choice;

    document.getElementById("moonEarthSun").style.backgroundImage = backgrounds[random];
	lastBgIndex = random;
}

const timeWrapper = document.getElementById("timeWrapper");
const knowledgeLink = document.getElementById("knowledge-link");
const heaven = document.getElementById("heaven");
const hell = document.getElementById("hell");

var bgIntervalId;

function hover(isReal) {
	clearInterval(bgIntervalId);

	if(random == 6 || random == 4) headLine.innerText = "Knowledge of Time Remaining to The Day of The Resurrection:";
	else headLine.innerText = "Knowledge of Time Remaining to The End of The 7 Universes:";

	if(windowWidth > 767){
		heaven.style.right = "-25%";
		hell.style.left = "-25%";
	}
	else {
		heaven.style.right = "-50%";
		hell.style.left = "-50%";
	}
	if(isReal) {
		$("#timeWrapper").addClass("hovering");
		$("#knowledge-link").addClass("hovering");
	}
}

function unhover(isReal) {
	heaven.style.right = "0";
	hell.style.left = "0";
	if(isReal) {
		$("#timeWrapper").removeClass("hovering");
		$("#knowledge-link").removeClass("hovering");
	}
	bgIntervalId = setInterval(function()
	{	
		if(heaven.getBoundingClientRect().left == (document.documentElement.clientWidth - 2560) / 2) {
			// when heaven and hell images touch together with +-19ms accuracy
			clearInterval(bgIntervalId);
			headLine.innerText = "Knowledge of Time Remaining to The Day of The Resurrection:";
			randombg();
		}
	}, 19);
}

knowledgeLink.addEventListener("mouseover", function(){hover(true)});
knowledgeLink.addEventListener("mouseleave", function(){unhover(true)});

timeWrapper.addEventListener("mouseover", function(){hover(true)});
timeWrapper.addEventListener("mouseleave", function(){unhover(true)});

const syncData75 = [
	{start: '5.125', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/75.html?m=1">Sura 75</a>&nbsp;The Resurrection Al-Qeyaamah</p>'},
	{start: '10.000', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/75.html?m=1#0">75:0</a>&nbsp;IN THE NAME OF THE GOD THE GRACIOUS THE MERCIFUL.</p>'},
	{start: '15.800', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/75.html?m=1#1">75:1</a>&nbsp;I swear by the Day of Resurrection.</p>'},
	{start: '18.721', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/75.html?m=1#2">75:2</a>&nbsp;And I swear by the blaming soul.</p>'},
	{start: '21.784', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/75.html?m=1#3">75:3</a>&nbsp;Does the human being think that WE will not reconstruct his bones?</p>'},
	{start: '26.500', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/75.html?m=1#4">75:4</a>&nbsp;Yes indeed; WE are able to reconstruct his finger tip.</p>'},
	{start: '30.750', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/75.html?m=1#5">75:5</a>&nbsp;But the human being tends to believe only what he sees in front of him.</p>'},
	{start: '35.610', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/75.html?m=1#6">75:6</a>&nbsp;He asks, "When is The Day of The Resurrection?"</p>'},
	{start: '38.902', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/75.html?m=1#7">75:7</a>&nbsp;Once the vision is sharpened.</p>'},
	{start: '40.863', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/75.html?m=1#8">75:8</a>&nbsp;And the moon is eclipsed.</p>'},
	{start: '42.625', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/75.html?m=1#9">75:9</a>&nbsp;And the sun and the moon crash into one another.</p>'},
	{start: '45.875', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/75.html?m=1#10">75:10</a>&nbsp;The human being will say on that day, "Where is the escape?"</p>'},
	{start: '51.000', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/75.html?m=1#11">75:11</a>&nbsp;Absolutely, there is no escape.</p>'},
	{start: '54.000', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/75.html?m=1#12">75:12</a>&nbsp;To your OWNER, on that day, is the final destiny.</p>'},
	{start: '58.000', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/75.html?m=1#13">75:13</a>&nbsp;The human being will be informed, on that day, of everything he did to advance himself, and everything he did to regress himself.</p>'},
	{start: '66.750', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/75.html?m=1#14">75:14</a>&nbsp;The human being will be his own judge.</p>'},
	{start: '69.875', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/75.html?m=1#15">75:15</a>&nbsp;No excuses will be accepted.</p>'},
	{start: '73.750', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/75.html?m=1#16">75:16</a>&nbsp;Do not move your tongue to hasten it.</p>'},
	{start: '76.875', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/75.html?m=1#17">75:17</a>&nbsp;It is WE who will collect it into Quran.</p>'},
	{start: '81.125', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/75.html?m=1#18">75:18</a>&nbsp;Once WE recite it, you shall follow such a Quran.</p>'},
	{start: '85.600', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/75.html?m=1#19">75:19</a>&nbsp;Then it is WE who will explain it.</p>'},
	{start: '89.750', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/75.html?m=1#20">75:20</a>&nbsp;Indeed, you love this fleeting life.</p>'},
	{start: '93.250', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/75.html?m=1#21">75:21</a>&nbsp;While disregarding the Hereafter.</p>'},
	{start: '96.875', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/75.html?m=1#22">75:22</a>&nbsp;Some faces, on that day, will be happy.</p>'},
	{start: '100.154', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/75.html?m=1#23">75:23</a>&nbsp;Looking at their OWNER.</p>'},
	{start: '102.371', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/75.html?m=1#24">75:24</a>&nbsp;Other faces will be, on that day, miserable.</p>'},
	{start: '106.196', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/75.html?m=1#25">75:25</a>&nbsp;Expecting the worst.</p>'},
	{start: '108.750', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/75.html?m=1#26">75:26</a>&nbsp;Indeed, when (the soul) reaches the throat.</p>'},
	{start: '112.250', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/75.html?m=1#27">75:27</a>&nbsp;And it is ordered: "Let go!"</p>'},
	{start: '115.886', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/75.html?m=1#28">75:28</a>&nbsp;He knows it is the end.</p>'},
	{start: '118.000', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/75.html?m=1#29">75:29</a>&nbsp;Each leg will lay motionless next to the other leg.</p>'},
	{start: '122.747', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/75.html?m=1#30">75:30</a>&nbsp;To your OWNER, on that day, is the summoning.</p>'},
	{start: '126.249', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/75.html?m=1#31">75:31</a>&nbsp;For he observed neither the charity, nor the contact prayers (Salat).</p>'},
	{start: '131.589', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/75.html?m=1#32">75:32</a>&nbsp;But he disbelieved and turned away.</p>'},
	{start: '135.000', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/75.html?m=1#33">75:33</a>&nbsp;With his family, he acted arrogantly.</p>'},
	{start: '138.689', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/75.html?m=1#34">75:34</a>&nbsp;You have deserved this.</p>'},
	{start: '141.250', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/75.html?m=1#35">75:35</a>&nbsp;Indeed, you have deserved this.</p>'},
	{start: '145.294', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/75.html?m=1#36">75:36</a>&nbsp;Does the human being think that he will go to nothing?</p>'},
	{start: '149.575', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/75.html?m=1#37">75:37</a>&nbsp;Was he not a drop of ejected semen?</p>'},
	{start: '153.128', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/75.html?m=1#38">75:38</a>&nbsp;Then HE created an embryo out of it!</p>'},
	{start: '156.142', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/75.html?m=1#30">75:39</a>&nbsp;HE made it into male or female!</p>'},
	{start: '160.204', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/75.html?m=1#40">75:40</a>&nbsp;Is HE then unable to revive the dead?</p>'}
];

const syncData89 = [
	{start: '7.795', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/89.html?m=1">Sura 89</a>&nbsp;The Dawn Al-Fajr</p>'},
	{start: '13.583', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/89.html?m=1#0">89:0</a>&nbsp;IN THE NAME OF THE GOD THE GRACIOUS THE MERCIFUL.</p>'},
	{start: '18.861', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/89.html?m=1#1">89:1</a>&nbsp;By the dawn.</p>'},
	{start: '20.313', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/89.html?m=1#2">89:2</a>&nbsp;And the ten nights.</p>'},
	{start: '22.706', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/89.html?m=1#3">89:3</a>&nbsp;By the even and the odd.</p>'},
	{start: '24.945', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/89.html?m=1#4">89:4</a>&nbsp;By the night as it passes.</p>'},
	{start: '27.940', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/89.html?m=1#5">89:5</a>&nbsp;A profound oath, for one who possesses intelligence.</p>'},
	{start: '33.103', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/89.html?m=1#6">89:6</a>&nbsp;Have you noted what your OWNER did to `Aad?</p>'},
	{start: '36.450', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/89.html?m=1#7">89:7</a>&nbsp;Erum; the town with tall buildings.</p>'},
	{start: '39.200', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/89.html?m=1#8">89:8</a>&nbsp;There was nothing like it anywhere.</p>'},
	{start: '42.095', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/89.html?m=1#9">89:9</a>&nbsp;Also Thamoud, who carved the rocks in their valley.</p>'},
	{start: '47.450', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/89.html?m=1#10">89:10</a>&nbsp;And Pharaoh who possessed might.</p>'},
	{start: '51.970', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/89.html?m=1#11">89:11</a>&nbsp;They all transgressed in the land.</p>'},
	{start: '54.426', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/89.html?m=1#12">89:12</a>&nbsp;They spread evil throughout.</p>'},
	{start: '57.533', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/89.html?m=1#13">89:13</a>&nbsp;Consequently, your OWNER poured upon them a whipping retribution.</p>'},
	{start: '63.807', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/89.html?m=1#14">89:14</a>&nbsp;Your OWNER is ever watchful.</p>'},
	{start: '66.145', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/89.html?m=1#15">89:15</a>&nbsp;When the human being is tested by his OWNER, through blessings and joy, he says, "My OWNER is generous towards me."</p>'},
	{start: '74.854', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/89.html?m=1#16">89:16</a>&nbsp;But if HE tests him through reduction in provisions, he says, "My OWNER is humiliating me!"</p>'},
	{start: '82.466', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/89.html?m=1#17">89:17</a>&nbsp;Wrong! It is you who brought it on yourselves by not regarding the orphan.</p>'},
	{start: '87.589', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/89.html?m=1#18">89:18</a>&nbsp;And not advocating charity towards the poor.</p>'},
	{start: '90.872', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/89.html?m=1#19">89:19</a>&nbsp;And consuming the inheritance of helpless orphans.</p>'},
	{start: '94.200', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/89.html?m=1#20">89:20</a>&nbsp;And loving the money too much.</p>'},
	{start: '97.062', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/89.html?m=1#21">89:21</a>&nbsp;Indeed, when the earth is crushed, utterly crushed.</p>'},
	{start: '101.775', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/89.html?m=1#22">89:22</a>&nbsp;And your OWNER comes, together with the angels in row after row.</p>'},
	{start: '107.114', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/89.html?m=1#23">89:23</a>&nbsp;On that day, Gehenna will be brought forth. On that day, the human being will remember - but what a remembrance - it will be too late.</p>'},
	{start: '119.249', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/89.html?m=1#24">89:24</a>&nbsp;He will say, "Oh, I wish I prepared for my (eternal) life."</p>'},
	{start: '125.734', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/89.html?m=1#25">89:25</a>&nbsp;On that day, no retribution could be worse than HIS retribution.</p>'},
	{start: '131.210', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/89.html?m=1#26">89:26</a>&nbsp;And no confinement is as effective as HIS confinement.</p>'},
	{start: '135.589', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/89.html?m=1#27">89:27</a>&nbsp;As for you, O content soul.</p>'},
	{start: '138.247', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/89.html?m=1#28">89:28</a>&nbsp;Return to your OWNER, pleased and pleasing.</p>'},
	{start: '142.583', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/89.html?m=1#29">89:29</a>&nbsp;Welcome into MY servants.</p>'},
	{start: '145.261', text: '<p class="verses"><a target="_blank" class="antique-link" href="http://honourablequran.blogspot.com/p/89.html?m=1#30">89:30</a>&nbsp;Welcome into MY Paradise.</p>'}
];

const audio = document.getElementById("player"), audio2 = document.getElementById("player2");

audio.volume = 1;
audio2.volume = 1;

$(window).load(function(){
	var isTimeMusicPlayed = "false";

	isTimeMusicPlayed = localStorage.getItem('isTimeMusicPlayed');

	if (isTimeMusicPlayed != "true") {
		audio.play();
		audio2.play();
		if (!audio.paused) {
			$('#play-pause-button').removeClass('fa-play');
			$('#play-pause-button').addClass('fa-pause');
		}
		isTimeMusicPlayed = "true";
		localStorage.setItem('isTimeMusicPlayed', isTimeMusicPlayed);
	}
});

$('#play-pause-button').click(function(){
	if($(this).hasClass('fa-play'))
	{
		$(this).removeClass('fa-play');
		$(this).addClass('fa-pause');
		audio.play();
		if(audio2Flag) audio2.play();
	}
	else
	{
		$(this).removeClass('fa-pause');
		$(this).addClass('fa-play');
		audio.pause();
		audio2.pause();
	}
});

var is89played = false, audio2Flag = true;

audio2.onended = function() { audio2Flag = false }

audio.onended = function() {
	//play sura 89 after sura 75
	if(!is89played) {
		is89played = true;
		audio2Flag = true;
		audio.pause();
		audio.src = "89.mp3";
		audio.load();
		audio.play();
		audio2.play();
	}
	else if(is89played) {
		is89played = false;
		audio2Flag = true;
		$("#play-pause-button").removeClass('fa-pause');
		$("#play-pause-button").addClass('fa-play');
		audio.pause();
		audio.src = "75.mp3";
		audio.load();
		intervalId = setInterval(expresser, period);
		document.getElementById("knowledge-link").click();
	}
};

function elementsOverlap(el1, el2) {
	var domRect1 = el1.getBoundingClientRect();
	var domRect2 = el2.getBoundingClientRect();
  
	return (domRect1.top < domRect2.bottom && domRect1.bottom > domRect2.top);
}

const headLine = document.getElementById('headLine');
var verse;

var verseHead = document.getElementById("verses");
var v = 0;
var halfPeriod = "2014";
var period = 4028;

function expresser() {
	$('#verses').fadeOut(halfPeriod, function() {
		if(v < syncData75.length) verseHead.innerHTML = syncData75[v].text;
		else verseHead.innerHTML = syncData89[v - syncData75.length].text;

		verse = document.getElementsByClassName('verses')[0]; // her seferinde güncellenmeli
		if(elementsOverlap(headLine, verse)) headLine.style.visibility = "hidden";
		else headLine.style.visibility = "visible";

		v++;
		$('#verses').fadeIn(halfPeriod);
		if (v == syncData75.length + syncData89.length)
		{
			v = 0; // it restarts loop at the end of it
		}
		else if (v == 2) randombg(6);
		else if (v == syncData75.length + 7) randombg(4); // 89:5
		else if (v == 9 || v == 44 || v == 64 || v == syncData75.length + 15) randombg(5); // ... 89:13
		else if (v == 3 || v == 45 || v == 65) // 75:1 // 89:1 // 89:21
		{
			if(!$("#timeWrapper").hasClass("hovering") && !$("#knowledge-link").hasClass("hovering"))
				hover(false);
		}
		else if (v == 14 || v == 58 || v == 67) // 75:12 // 89:14 // 89:23
		{
			if(!$("#timeWrapper").hasClass("hovering") && !$("#knowledge-link").hasClass("hovering"))
				unhover(false);
		}
	});
}

var intervalId = setInterval(expresser, period);

var currentVerse, lastCurrentVerse;

audio.addEventListener('timeupdate', () => {
	if(audio.duration > 0 && !audio.paused)
	{
		clearInterval(intervalId); // only when audio is not paused/playing

		let vrs = 0;

		if(lastCurrentVerse != undefined) vrs = lastCurrentVerse;

		if(!is89played) {
			if(vrs == syncData89.length - 1) vrs = 0; // at the end of sura 89 restart from verse 0
			while(vrs < syncData75.length) {
				if (audio.currentTime >= syncData75[vrs].start) currentVerse = vrs;
				vrs++;
			}
		}
		else if(is89played) {
			if(vrs == syncData75.length - 1) vrs = 0; // at the end of sura 75 restart from verse 0
			while(vrs < syncData89.length) {
				if (audio.currentTime >= syncData89[vrs].start) currentVerse = vrs;
				vrs++;
			}
		}
		
		if(lastCurrentVerse != currentVerse) // for running once at a time inside 'timeupdate' event
		{
			$('#verses').fadeOut(halfPeriod, function()
			{
				if(!is89played) {
					verseHead.innerHTML = syncData75[currentVerse].text;
	
					if (currentVerse == 1) // 75:0
						randombg(6); // 75:0
					else if (currentVerse == 8) // 75:7
						randombg(5);  // 75:7
					else if (currentVerse == 2 && !$("#timeWrapper").hasClass("hovering") && !$("#knowledge-link").hasClass("hovering")) // 75:1
						hover(false);  // 75:1
					else if (currentVerse == 13 && !$("#timeWrapper").hasClass("hovering") && !$("#knowledge-link").hasClass("hovering")) // 75:12
						unhover(false); // 75:12
				}
				else if(is89played) {
					verseHead.innerHTML = syncData89[currentVerse].text;
	
					if (currentVerse == 1 || currentVerse == 14 || currentVerse == 21) // 89:0 // 89:13 // 89:20
						randombg(5);
					else if (currentVerse == 6) // 89:5
						randombg(4);
					else if ((currentVerse == 2 || currentVerse == 22) && !$("#timeWrapper").hasClass("hovering") && !$("#knowledge-link").hasClass("hovering")) // 89:1 // 89:21
						hover(false);  // 89:1 // 89:21
					else if ((currentVerse == 15 || currentVerse == 24) && !$("#timeWrapper").hasClass("hovering") && !$("#knowledge-link").hasClass("hovering")) // 89:14 // 89:23
						unhover(false); // 89:14 // 89:23
				}
				
				verse = document.getElementsByClassName('verses')[0]; // her seferinde güncellenmeli
			
				if(elementsOverlap(headLine, verse)) headLine.style.visibility = "hidden";
				else headLine.style.visibility = "visible";

				$('#verses').fadeIn(halfPeriod);
			});
		}

		lastCurrentVerse = currentVerse;
	}
})