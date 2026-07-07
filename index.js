(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,500,400]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.car_fix = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		var canvas = document.getElementById("canvas");
		var ctx = canvas.getContext("2d", { willReadFrequently: true });
		var stage = new createjs.Stage(canvas);
		
		
		window.addEventListener("message", (event) => {
		  try {
		    // obsługa wiadomości
		  } catch (e) {
		    console.warn("Message channel closed:", e);
		  }
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(240));

	// Flash_efekt2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(50,50,50,0)","#FBA155","rgba(201,16,36,0.988)","rgba(250,165,93,0.988)"],[0,1,1,1],-100,-26.9,100,26.7).s().p("Ega9AmKMAWshUrIfPIYMgWsBUrg");
	this.shape.setTransform(37.975,196.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(50,50,50,0)","#FBA155","rgba(203,21,38,0.988)","rgba(250,165,93,0.988)"],[0,1,1,1],-111.2,-27.4,111.2,27.2).s().p("Egd/Am4MAZPhWQMAiwAIiMgZPBWPg");
	this.shape_1.setTransform(42.75,197.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(50,50,50,0)","#FBA156","rgba(205,26,40,0.988)","rgba(250,165,93,0.988)"],[0,1,1,1],-122.3,-27.9,122.4,27.6).s().p("Egg/AnkMAbwhXzMAmPAIrMgbwBX0g");
	this.shape_2.setTransform(47.525,198.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(50,50,50,0)","#FBA256","rgba(206,32,42,0.988)","rgba(250,165,93,0.988)"],[0,1,1,1],-133.6,-28.4,133.5,28.2).s().p("EgkBAoSMAeUhZZMApvAI2MgeUBZZg");
	this.shape_3.setTransform(52.3,199.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(50,50,50,0)","#FBA256","rgba(208,37,44,0.988)","rgba(250,165,93,0.988)"],[0,1,1,1],-144.8,-28.9,144.7,28.6).s().p("EgnCAo/MAg2ha9MAtPAJAMgg2Ba9g");
	this.shape_4.setTransform(57.1,200.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(50,50,50,0)","#FBA257","rgba(210,42,46,0.992)","rgba(251,165,93,0.992)"],[0,1,1,1],-155.9,-29.3,155.9,29.2).s().p("EgqCApsMAjXhchMAwvAJKMgjZBchg");
	this.shape_5.setTransform(61.85,201.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(50,50,50,0)","#FBA257","rgba(212,47,48,0.992)","rgba(251,165,93,0.992)"],[0,1,1,1],-167.1,-29.8,167.1,29.7).s().p("EgtDAqaMAl5heGMA0PAJTMgl7BeGg");
	this.shape_6.setTransform(66.65,202.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(50,50,50,0)","#FBA257","rgba(214,52,50,0.992)","rgba(251,165,93,0.992)"],[0,1,1,1],-178.3,-30.3,178.3,30.2).s().p("EgwFArHMAodhfqMA3uAJdMgodBfqg");
	this.shape_7.setTransform(71.425,204.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(50,50,50,0)","#FCA357","rgba(215,58,52,0.992)","rgba(251,166,93,0.992)"],[0,1,1,1],-189.4,-30.9,189.5,30.6).s().p("EgzGAr0MAq/hhPMA7OAJoMgq/BhPg");
	this.shape_8.setTransform(76.175,205.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(50,50,50,0)","#FCA358","rgba(217,63,54,0.992)","rgba(251,166,93,0.992)"],[0,1,1,1],-200.7,-31.4,200.7,31.1).s().p("Eg2HAsiMAtihi0MA+tAJyMgtiBiyg");
	this.shape_9.setTransform(80.975,206.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(50,50,50,0)","#FCA358","rgba(219,68,56,0.992)","rgba(251,166,93,0.992)"],[0,1,1,1],-211.9,-31.9,211.8,31.6).s().p("Eg5IAtPMAwEhkYMBCNAJ7MgwEBkYg");
	this.shape_10.setTransform(85.75,207.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(50,50,50,0)","#FCA358","rgba(221,73,58,0.992)","rgba(251,166,93,0.992)"],[0,1,1,1],-223,-32.4,223,32.1).s().p("Eg8JAt8MAymhl8MBFtAKFMgynBl8g");
	this.shape_11.setTransform(90.525,208.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(50,50,50,0)","#FCA359","rgba(223,78,60,0.992)","rgba(251,166,93,0.992)"],[0,1,1,1],-234.3,-32.9,234.2,32.6).s().p("Eg/KAupMA1IhngMBJNAKPMg1JBngg");
	this.shape_12.setTransform(95.3,209.575);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(50,50,50,0)","#FCA459","rgba(224,84,62,0.992)","rgba(251,166,93,0.992)"],[0,1,1,1],-245.4,-33.3,245.4,33.1).s().p("EhCLAvXMA3rhpFMBMsAKZMg3rBpEg");
	this.shape_13.setTransform(100.05,210.675);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(50,50,50,0)","#FCA459","rgba(226,89,64,0.992)","rgba(251,166,93,0.992)"],[0,1,1,1],-256.7,-33.9,256.5,33.6).s().p("EhFMAwEMA6NhqqMBQMAKjMg6NBqqg");
	this.shape_14.setTransform(104.85,211.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(50,50,50,0)","#FCA45A","rgba(228,94,66,0.996)","rgba(252,166,94,0.996)"],[0,1,1,1],-267.8,-34.3,267.8,34.1).s().p("EhINAwxMA8whsOMBTrAKtMg8wBsOg");
	this.shape_15.setTransform(109.625,212.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(50,50,50,0)","#FCA45A","rgba(230,99,68,0.996)","rgba(252,166,94,0.996)"],[0,1,1,1],-279,-34.8,278.9,34.6).s().p("EhLOAxeMA/ShtyMBXLAK3Mg/SBtyg");
	this.shape_16.setTransform(114.425,214.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(50,50,50,0)","#FCA55A","rgba(231,105,70,0.996)","rgba(252,166,94,0.996)"],[0,1,1,1],-290.2,-35.3,290.1,35.1).s().p("EhOPAyLMBB0hvWMBarALBMhB0BvWg");
	this.shape_17.setTransform(119.175,215.125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["rgba(50,50,50,0)","#FCA55B","rgba(233,110,72,0.996)","rgba(252,166,94,0.996)"],[0,1,1,1],-301.4,-35.8,301.3,35.6).s().p("EhRQAy5MBEXhw7MBeLALLMhEXBw6g");
	this.shape_18.setTransform(123.95,216.225);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(50,50,50,0)","#FCA55B","rgba(235,115,74,0.996)","rgba(252,166,94,0.996)"],[0,1,1,1],-312.5,-36.3,312.5,36.1).s().p("EhURAzmMBG5hyfMBhqALVMhG5Byeg");
	this.shape_19.setTransform(128.725,217.325);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["rgba(50,50,50,0)","#FCA55B","rgba(237,120,76,0.996)","rgba(252,166,94,0.996)"],[0,1,1,1],-323.8,-36.9,323.6,36.5).s().p("EhXTA0TMBJch0EMBlLALfMhJdB0Dg");
	this.shape_20.setTransform(133.5,218.45);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(50,50,50,0)","#FCA55C","rgba(239,125,78,0.996)","rgba(252,166,94,0.996)"],[0,1,1,1],-335,-37.4,334.8,37).s().p("EhaTA1BMBL9h1pMBoqALpMhL+B1og");
	this.shape_21.setTransform(138.3,219.55);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(50,50,50,0)","#FDA65C","rgba(240,131,80,0.996)","rgba(252,167,94,0.996)"],[0,1,1,1],-346.1,-37.8,346,37.5).s().p("EhdVA1tMBOhh3MMBsKALzMhOhB3Mg");
	this.shape_22.setTransform(143.05,220.675);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(50,50,50,0)","#FDA65C","rgba(242,136,82,0.996)","rgba(252,167,94,0.996)"],[0,1,1,1],-357.3,-38.4,357.2,38).s().p("EhgWA2bMBRDh4xMBvqAL9MhRDB4wg");
	this.shape_23.setTransform(147.825,221.775);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["rgba(50,50,50,0)","#FDA65C","rgba(244,141,84,0.996)","rgba(252,167,94,0.996)"],[0,1,1,1],-368.5,-38.9,368.4,38.5).s().p("EhjXA3IMBTlh6VMBzKAMGMhTmB6Vg");
	this.shape_24.setTransform(152.625,222.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(50,50,50,0)","#FDA65D","#F69256","#FDA75E"],[0,1,1,1],-379.7,-39.3,379.6,39).s().p("EhmYA31MBWIh75MB2pAMQMhWIB75g");
	this.shape_25.setTransform(157.375,224);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["rgba(50,50,50,0)","#FDA65D","#F89758","#FDA75E"],[0,1,1,1],-390.9,-39.8,390.8,39.5).s().p("EhpZA4jMBYqh9fMB6JAMbMhYrB9eg");
	this.shape_26.setTransform(162.175,225.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["rgba(50,50,50,0)","#FDA75D","#F99D5A","#FDA75E"],[0,1,1,1],-402.1,-40.3,401.9,40).s().p("EhsaA5QMBbNh/DMB9oAMlMhbNB/Bg");
	this.shape_27.setTransform(166.95,226.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["rgba(50,50,50,0)","#FDA75E","#FBA25C","#FDA75E"],[0,1,1,1],-413.3,-40.8,413.1,40.5).s().p("EhvbA59MBdviAnMCBIAMuMhdvCAng");
	this.shape_28.setTransform(171.725,227.325);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-424.5,-41.3,424.3,41).s().p("EhycA6qMBgRiCLMCEoAM4MhgRCCLg");
	this.shape_29.setTransform(176.5,228.425);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-417.3,-41.3,417.1,41).s().p("EhwhA6qMBepiCLMCCZAM4MhepCCLg");
	this.shape_30.setTransform(188.8,228.425);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-410.2,-41.3,410,41).s().p("EhulA6qMBdCiCLMCAJAM4MhdBCCLg");
	this.shape_31.setTransform(201.1,228.425);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-403.1,-41.3,402.8,41).s().p("EhsqA6qMBbaiCLMB97AM4MhbaCCLg");
	this.shape_32.setTransform(213.425,228.425);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-395.8,-41.3,395.7,41).s().p("EhquA6qMBZxiCLMB7sAM4MhZyCCLg");
	this.shape_33.setTransform(225.725,228.425);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-388.7,-41.3,388.5,41).s().p("EhozA6qMBYKiCLMB5dAM4MhYKCCLg");
	this.shape_34.setTransform(238.025,228.425);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-381.5,-41.3,381.4,41).s().p("Ehm3A6qMBWiiCLMB3NAM4MhWiCCLg");
	this.shape_35.setTransform(250.325,228.425);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-374.4,-41.3,374.2,41).s().p("Ehk8A6qMBU7iCLMB0+AM4MhU7CCLg");
	this.shape_36.setTransform(262.65,228.425);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-367.3,-41.3,367.1,41).s().p("EhjBA6qMBTTiCLMBywAM4MhTUCCLg");
	this.shape_37.setTransform(274.95,228.425);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-360.1,-41.3,359.9,41).s().p("EhhFA6qMBRqiCLMBwhAM4MhRrCCLg");
	this.shape_38.setTransform(287.25,228.425);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-352.9,-41.3,352.8,41).s().p("EhfKA6qMBQDiCLMBuSAM4MhQECCLg");
	this.shape_39.setTransform(299.55,228.425);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-345.8,-41.3,345.7,41).s().p("EhdOA6qMBObiCLMBsCAM4MhObCCLg");
	this.shape_40.setTransform(311.875,228.425);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-338.6,-41.3,338.5,41).s().p("EhbTA6qMBM0iCLMBpzAM4MhM0CCLg");
	this.shape_41.setTransform(324.15,228.425);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-331.5,-41.3,331.3,41).s().p("EhZXA6qMBLLiCLMBnkAM4MhLLCCLg");
	this.shape_42.setTransform(336.475,228.425);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-324.3,-41.3,324.2,41).s().p("EhXcA6qMBJkiCLMBlVAM4MhJkCCLg");
	this.shape_43.setTransform(348.75,228.425);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-317.2,-41.3,317,41).s().p("EhVhA6qMBH8iCLMBjHAM4MhH8CCLg");
	this.shape_44.setTransform(361.075,228.425);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-310,-41.3,309.9,41).s().p("EhTlA6qMBGUiCLMBg3AM4MhGUCCLg");
	this.shape_45.setTransform(373.375,228.425);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-302.8,-41.3,302.8,41).s().p("EhRqA6qMBEtiCLMBeoAM4MhEsCCLg");
	this.shape_46.setTransform(385.675,228.425);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-295.7,-41.3,295.6,41).s().p("EhPuA6qMBDEiCLMBcZAM4MhDECCLg");
	this.shape_47.setTransform(397.975,228.425);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-288.6,-41.3,288.4,41).s().p("EhNzA6qMBBdiCLMBaKAM4MhBdCCLg");
	this.shape_48.setTransform(410.3,228.425);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-281.4,-41.3,281.3,41).s().p("EhL4A6qMA/1iCLMBX8AM4Mg/1CCLg");
	this.shape_49.setTransform(422.6,228.425);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-274.3,-41.3,274.1,41).s().p("EhJ8A6qMA+NiCLMBVsAM4Mg+NCCLg");
	this.shape_50.setTransform(434.9,228.425);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-267.1,-41.3,267,41).s().p("EhIBA6qMA8miCLMBTdAM4Mg8lCCLg");
	this.shape_51.setTransform(447.2,228.425);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-259.9,-41.3,259.9,41).s().p("EhGFA6qMA69iCLMBROAM4Mg69CCLg");
	this.shape_52.setTransform(459.525,228.425);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-252.8,-41.3,252.7,41).s().p("EhEKA6qMA5WiCLMBO/AM4Mg5WCCLg");
	this.shape_53.setTransform(471.825,228.425);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-245.6,-41.3,245.6,41).s().p("EhCOA6qMA3uiCLMBMvAM4Mg3tCCLg");
	this.shape_54.setTransform(484.125,228.425);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-239.2,-41.3,239.2,41).s().p("EhAgA6qMA2RiCLMBKwAM4Mg2RCCLg");
	this.shape_55.setTransform(495.125,228.425);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-232.9,-41.3,232.8,41).s().p("Eg+yA6qMA01iCLMBIwAM4Mg00CCLg");
	this.shape_56.setTransform(506.125,228.425);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-226.5,-41.3,226.5,41).s().p("Eg9EA6qMAzYiCLMBGxAM4MgzYCCLg");
	this.shape_57.setTransform(517.1,228.425);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-220.1,-41.3,220.1,41).s().p("Eg7XA6qMAx9iCLMBExAM4Mgx7CCLg");
	this.shape_58.setTransform(528.1,228.425);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-213.8,-41.3,213.7,41).s().p("Eg5pA6qMAwgiCLMBCzAM4MgwgCCLg");
	this.shape_59.setTransform(539.125,228.425);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-207.4,-41.3,207.3,41).s().p("Eg37A6qMAvDiCLMBA0AM4MgvDCCLg");
	this.shape_60.setTransform(550.125,228.425);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-201,-41.3,201,41).s().p("Eg2NA6qMAtniCLMA+0AM4MgtnCCLg");
	this.shape_61.setTransform(561.125,228.425);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-194.6,-41.3,194.6,41).s().p("Eg0fA6qMAsKiCLMA81AM4MgsKCCLg");
	this.shape_62.setTransform(572.125,228.425);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-188.3,-41.3,188.2,41).s().p("EgyxA6qMAquiCLMA61AM4MgquCCLg");
	this.shape_63.setTransform(583.125,228.425);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-181.9,-41.3,181.9,41).s().p("EgxDA6qMApRiCLMA42AM4MgpRCCLg");
	this.shape_64.setTransform(594.125,228.425);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-175.5,-41.3,175.5,41).s().p("EgvVA6qMAn1iCLMA22AM4Mgn0CCLg");
	this.shape_65.setTransform(605.1,228.425);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-169.2,-41.3,169.1,41).s().p("EgtnA6qMAmZiCLMA02AM4MgmXCCLg");
	this.shape_66.setTransform(616.1,228.425);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-162.8,-41.3,162.8,41).s().p("Egr5A6qMAk8iCLMAy3AM4Mgk7CCLg");
	this.shape_67.setTransform(627.1,228.425);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-156.4,-41.3,156.4,41).s().p("EgqLA6qMAjgiCLMAw3AM4MgjfCCLg");
	this.shape_68.setTransform(638.1,228.425);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-150.1,-41.3,150,41).s().p("EgodA6qMAiDiCLMAu4AM4MgiCCCLg");
	this.shape_69.setTransform(649.125,228.425);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-143.7,-41.3,143.6,41).s().p("EgmvA6qMAgmiCLMAs5AM4MggmCCLg");
	this.shape_70.setTransform(660.125,228.425);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-137.3,-41.3,137.3,41).s().p("EglBA6qMAfJiCLMAq6AM4MgfJCCLg");
	this.shape_71.setTransform(671.125,228.425);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-131,-41.3,130.9,41).s().p("EgjUA6qMAduiCLMAo7AM4MgduCCLg");
	this.shape_72.setTransform(682.1,228.425);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-124.6,-41.3,124.5,41).s().p("EghlA6qMAcRiCLMAm7AM4MgcRCCLg");
	this.shape_73.setTransform(693.1,228.425);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-118.2,-41.3,118.2,41).s().p("Egf4A6qMAa1iCLMAk8AM4Mga0CCLg");
	this.shape_74.setTransform(704.1,228.425);
	this.shape_74._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},90).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_74).wait(164).to({_off:false},0).wait(76));

	// Flash_efekt
	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["rgba(50,50,50,0)","#C11E15"],[0,1],-98.9,0,99,0).s().p("EgPdAhdMAAAhC5Ie7AAMAAABC5g");
	this.shape_75.setTransform(38.075,196.075);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.lf(["rgba(50,50,50,0)","#C32318"],[0,1],-105.5,0,105.5,0).s().p("EgQeAhdMAAAhC5MAg9AAAMAAABC5g");
	this.shape_76.setTransform(44.6,196.075);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["rgba(50,50,50,0)","#C5271A"],[0,1],-112.1,0,112,0).s().p("EgRgAhdMAAAhC5MAjAAAAMAAABC5g");
	this.shape_77.setTransform(51.15,196.075);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["rgba(50,50,50,0)","#C72C1D"],[0,1],-118.5,0,118.6,0).s().p("EgShAhdMAAAhC5MAlDAAAMAAABC5g");
	this.shape_78.setTransform(57.675,196.075);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["rgba(50,50,50,0)","#C9311F"],[0,1],-125.1,0,125.1,0).s().p("EgTiAhdMAAAhC5MAnFAAAMAAABC5g");
	this.shape_79.setTransform(64.225,196.075);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.lf(["rgba(50,50,50,0)","#CB3622"],[0,1],-131.7,0,131.6,0).s().p("EgUkAhdMAAAhC5MApJAAAMAAABC5g");
	this.shape_80.setTransform(70.75,196.075);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["rgba(50,50,50,0)","#CD3A24"],[0,1],-138.1,0,138.2,0).s().p("EgVlAhdMAAAhC5MArLAAAMAAABC5g");
	this.shape_81.setTransform(77.275,196.075);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["rgba(50,50,50,0)","#CF3F27"],[0,1],-144.7,0,144.8,0).s().p("EgWmAhdMAAAhC5MAtNAAAMAAABC5g");
	this.shape_82.setTransform(83.825,196.075);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.lf(["rgba(50,50,50,0)","#D24429"],[0,1],-151.3,0,151.2,0).s().p("EgXoAhdMAAAhC5MAvQAAAMAAABC5g");
	this.shape_83.setTransform(90.35,196.075);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["rgba(50,50,50,0)","#D4492C"],[0,1],-157.8,0,157.8,0).s().p("EgYpAhdMAAAhC5MAxTAAAMAAABC5g");
	this.shape_84.setTransform(96.9,196.075);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.lf(["rgba(50,50,50,0)","#D64D2E"],[0,1],-164.3,0,164.4,0).s().p("EgZqAhdMAAAhC5MAzVAAAMAAABC5g");
	this.shape_85.setTransform(103.425,196.075);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.lf(["rgba(50,50,50,0)","#D85231"],[0,1],-170.9,0,170.9,0).s().p("EgasAhdMAAAhC5MA1YAAAMAAABC5g");
	this.shape_86.setTransform(109.95,196.075);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.lf(["rgba(50,50,50,0)","#DA5733"],[0,1],-177.4,0,177.4,0).s().p("EgbtAhdMAAAhC5MA3bAAAMAAABC5g");
	this.shape_87.setTransform(116.5,196.075);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["rgba(50,50,50,0)","#DC5B36"],[0,1],-183.9,0,184,0).s().p("EgcuAhdMAAAhC5MA5dAAAMAAABC5g");
	this.shape_88.setTransform(123.025,196.075);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.lf(["rgba(50,50,50,0)","#DE6038"],[0,1],-190.5,0,190.5,0).s().p("EgdwAhdMAAAhC5MA7hAAAMAAABC5g");
	this.shape_89.setTransform(129.575,196.075);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["rgba(50,50,50,0)","#E0653B"],[0,1],-197,0,197,0).s().p("EgexAhdMAAAhC5MA9jAAAMAAABC5g");
	this.shape_90.setTransform(136.075,196.075);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["rgba(50,50,50,0)","#E26A3D"],[0,1],-203.6,0,203.5,0).s().p("EgfzAhdMAAAhC5MA/nAAAMAAABC5g");
	this.shape_91.setTransform(142.625,196.075);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.lf(["rgba(50,50,50,0)","#E46E40"],[0,1],-210.1,0,210.1,0).s().p("Egg0AhdMAAAhC5MBBpAAAMAAABC5g");
	this.shape_92.setTransform(149.15,196.075);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.lf(["rgba(50,50,50,0)","#E67342"],[0,1],-216.6,0,216.6,0).s().p("Egh1AhdMAAAhC5MBDrAAAMAAABC5g");
	this.shape_93.setTransform(155.7,196.075);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.lf(["rgba(50,50,50,0)","#E87845"],[0,1],-223.2,0,223.1,0).s().p("Egi3AhdMAAAhC5MBFvAAAMAAABC5g");
	this.shape_94.setTransform(162.225,196.075);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["rgba(50,50,50,0)","#EA7C47"],[0,1],-229.7,0,229.7,0).s().p("Egj4AhdMAAAhC5MBHxAAAMAAABC5g");
	this.shape_95.setTransform(168.75,196.075);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["rgba(50,50,50,0)","#EC814A"],[0,1],-236.2,0,236.2,0).s().p("Egk5AhdMAAAhC5MBJ0AAAMAAABC5g");
	this.shape_96.setTransform(175.3,196.075);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.lf(["rgba(50,50,50,0)","#EF864C"],[0,1],-242.8,0,242.7,0).s().p("Egl7AhdMAAAhC5MBL3AAAMAAABC5g");
	this.shape_97.setTransform(181.825,196.075);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.lf(["rgba(50,50,50,0)","#F18B4F"],[0,1],-249.3,0,249.3,0).s().p("Egm8AhdMAAAhC5MBN5AAAMAAABC5g");
	this.shape_98.setTransform(188.375,196.075);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.lf(["rgba(50,50,50,0)","#F38F51"],[0,1],-255.9,0,255.8,0).s().p("Egn9AhdMAAAhC5MBP7AAAMAAABC5g");
	this.shape_99.setTransform(194.9,196.075);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.lf(["rgba(50,50,50,0)","#F59454"],[0,1],-262.4,0,262.4,0).s().p("Ego/AhdMAAAhC5MBR/AAAMAAABC5g");
	this.shape_100.setTransform(201.425,196.075);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.lf(["rgba(50,50,50,0)","#F79956"],[0,1],-268.9,0,268.9,0).s().p("EgqAAhdMAAAhC5MBUBAAAMAAABC5g");
	this.shape_101.setTransform(207.975,196.075);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.lf(["rgba(50,50,50,0)","#F99E59"],[0,1],-275.5,0,275.4,0).s().p("EgrBAhdMAAAhC5MBWEAAAMAAABC5g");
	this.shape_102.setTransform(214.5,196.075);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.lf(["rgba(50,50,50,0)","#FBA25B"],[0,1],-282,0,281.9,0).s().p("EgsDAhdMAAAhC5MBYHAAAMAAABC5g");
	this.shape_103.setTransform(221.05,196.075);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-288.5,0,288.5,0).s().p("EgtEAhdMAAAhC5MBaJAAAMAAABC5g");
	this.shape_104.setTransform(227.575,196.075);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-282.7,0,282.6,0).s().p("EgsKAhdMAAAhC5MBYVAAAMAAABC5g");
	this.shape_105.setTransform(232.725,196.075);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-276.9,0,276.7,0).s().p("EgrQAhdMAAAhC5MBWgAAAMAAABC5g");
	this.shape_106.setTransform(237.9,196.075);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-271.1,0,270.9,0).s().p("EgqVAhdMAAAhC5MBUrAAAMAAABC5g");
	this.shape_107.setTransform(243.025,196.075);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-265.2,0,265,0).s().p("EgpbAhdMAAAhC5MBS3AAAMAAABC5g");
	this.shape_108.setTransform(248.175,196.075);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-259.5,0,259.1,0).s().p("EgohAhdMAAAhC5MBRDAAAMAAABC5g");
	this.shape_109.setTransform(253.35,196.075);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-253.7,0,253.2,0).s().p("EgnmAhdMAAAhC5MBPNAAAMAAABC5g");
	this.shape_110.setTransform(258.5,196.075);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-247.9,0,247.3,0).s().p("EgmrAhdMAAAhC5MBNXAAAMAAABC5g");
	this.shape_111.setTransform(263.65,196.075);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-242.1,0,241.4,0).s().p("EglxAhdMAAAhC5MBLjAAAMAAABC5g");
	this.shape_112.setTransform(268.825,196.075);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-236.2,0,235.6,0).s().p("Egk3AhdMAAAhC5MBJvAAAMAAABC5g");
	this.shape_113.setTransform(273.975,196.075);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-230.4,0,229.7,0).s().p("Egj8AhdMAAAhC5MBH5AAAMAAABC5g");
	this.shape_114.setTransform(279.1,196.075);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-224.6,0,223.8,0).s().p("EgjCAhdMAAAhC5MBGFAAAMAAABC5g");
	this.shape_115.setTransform(284.275,196.075);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-218.8,0,217.9,0).s().p("EgiIAhdMAAAhC5MBERAAAMAAABC5g");
	this.shape_116.setTransform(289.425,196.075);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-213,0,212,0).s().p("EghNAhdMAAAhC5MBCbAAAMAAABC5g");
	this.shape_117.setTransform(294.575,196.075);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-207.1,0,206.2,0).s().p("EggTAhdMAAAhC5MBAnAAAMAAABC5g");
	this.shape_118.setTransform(299.725,196.075);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-201.4,0,200.3,0).s().p("EgfZAhdMAAAhC5MA+zAAAMAAABC5g");
	this.shape_119.setTransform(304.9,196.075);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-195.5,0,194.4,0).s().p("EgeeAhdMAAAhC5MA89AAAMAAABC5g");
	this.shape_120.setTransform(310.025,196.075);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-189.7,0,188.6,0).s().p("EgdkAhdMAAAhC5MA7JAAAMAAABC5g");
	this.shape_121.setTransform(315.175,196.075);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-183.9,0,182.6,0).s().p("EgcqAhdMAAAhC5MA5VAAAMAAABC5g");
	this.shape_122.setTransform(320.35,196.075);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-178.1,0,176.8,0).s().p("EgbvAhdMAAAhC5MA3fAAAMAAABC5g");
	this.shape_123.setTransform(325.5,196.075);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-172.3,0,170.9,0).s().p("Ega0AhdMAAAhC5MA1pAAAMAAABC5g");
	this.shape_124.setTransform(330.65,196.075);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-166.5,0,165,0).s().p("EgZ6AhdMAAAhC5MAz1AAAMAAABC5g");
	this.shape_125.setTransform(335.825,196.075);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-160.6,0,159.1,0).s().p("EgZAAhdMAAAhC5MAyBAAAMAAABC5g");
	this.shape_126.setTransform(340.975,196.075);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-154.9,0,153.2,0).s().p("EgYFAhdMAAAhC5MAwLAAAMAAABC5g");
	this.shape_127.setTransform(346.1,196.075);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-149,0,147.4,0).s().p("EgXLAhdMAAAhC5MAuXAAAMAAABC5g");
	this.shape_128.setTransform(351.275,196.075);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.lf(["rgba(50,50,50,0)","#FDA75E"],[0,1],-143.2,0,141.5,0).s().p("EgWRAhdMAAAhC5MAsjAAAMAAABC5g");
	this.shape_129.setTransform(356.425,196.075);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.lf(["rgba(50,50,50,0)","#FC9F5A"],[0,1],-136,0,134.3,0).s().p("EgVLAhdMAAAhC5MAqXAAAMAAABC5g");
	this.shape_130.setTransform(363.65,196.075);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.lf(["rgba(50,50,50,0)","#FA9755"],[0,1],-128.7,0,127.1,0).s().p("EgUEAhdMAAAhC5MAoJAAAMAAABC5g");
	this.shape_131.setTransform(370.875,196.075);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.lf(["rgba(50,50,50,0)","#F98F51"],[0,1],-121.5,0,119.9,0).s().p("EgS+AhdMAAAhC5MAl9AAAMAAABC5g");
	this.shape_132.setTransform(378.1,196.075);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.lf(["rgba(50,50,50,0)","#F8874C"],[0,1],-114.2,0,112.8,0).s().p("EgR4AhdMAAAhC5MAjxAAAMAAABC5g");
	this.shape_133.setTransform(385.325,196.075);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.lf(["rgba(50,50,50,0)","#F78048"],[0,1],-106.9,0,105.6,0).s().p("EgQxAhdMAAAhC5MAhjAAAMAAABC5g");
	this.shape_134.setTransform(392.575,196.075);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.lf(["rgba(50,50,50,0)","#F57843"],[0,1],-99.7,0,98.4,0).s().p("EgPrAhdMAAAhC5IfXAAMAAABC5g");
	this.shape_135.setTransform(399.8,196.075);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.lf(["rgba(50,50,50,0)","#F4703F"],[0,1],-92.4,0,91.2,0).s().p("EgOlAhdMAAAhC5IdLAAMAAABC5g");
	this.shape_136.setTransform(407.025,196.075);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.lf(["rgba(50,50,50,0)","#F3683A"],[0,1],-85.1,0,84.1,0).s().p("EgNfAhdMAAAhC5Ia+AAMAAABC5g");
	this.shape_137.setTransform(414.25,196.075);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.lf(["rgba(50,50,50,0)","#F26036"],[0,1],-77.9,0,76.9,0).s().p("EgMYAhdMAAAhC5IYxAAMAAABC5g");
	this.shape_138.setTransform(421.475,196.075);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.lf(["rgba(50,50,50,0)","#F15832"],[0,1],-70.6,0,69.8,0).s().p("EgLSAhdMAAAhC5IWlAAMAAABC5g");
	this.shape_139.setTransform(428.7,196.075);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.lf(["rgba(50,50,50,0)","#EF502D"],[0,1],-63.3,0,62.6,0).s().p("EgKMAhdMAAAhC5IUYAAMAAABC5g");
	this.shape_140.setTransform(435.9,196.075);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.lf(["rgba(50,50,50,0)","#EE4829"],[0,1],-56.1,0,55.4,0).s().p("EgJFAhdMAAAhC5ISLAAMAAABC5g");
	this.shape_141.setTransform(443.125,196.075);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.lf(["rgba(50,50,50,0)","#ED4024"],[0,1],-48.8,0,48.3,0).s().p("EgH/AhdMAAAhC5IP/AAMAAABC5g");
	this.shape_142.setTransform(450.35,196.075);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.lf(["rgba(50,50,50,0)","#EC3820"],[0,1],-41.5,0,41.1,0).s().p("EgG5AhdMAAAhC5INzAAMAAABC5g");
	this.shape_143.setTransform(457.575,196.075);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.lf(["rgba(50,50,50,0)","#EA311B"],[0,1],-34.3,0,33.9,0).s().p("EgFyAhdMAAAhC5ILlAAMAAABC5g");
	this.shape_144.setTransform(464.825,196.075);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.lf(["rgba(50,50,50,0)","#E92917"],[0,1],-27,0,26.7,0).s().p("EgEsAhdMAAAhC5IJZAAMAAABC5g");
	this.shape_145.setTransform(472.05,196.075);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.lf(["rgba(50,50,50,0)","#E82112"],[0,1],-19.7,0,19.6,0).s().p("EgDmAhdMAAAhC5IHNAAMAAABC5g");
	this.shape_146.setTransform(479.275,196.075);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.lf(["rgba(50,50,50,0)","#E7190E"],[0,1],-12.5,0,12.4,0).s().p("EgCgAhdMAAAhC5IFBAAMAAABC5g");
	this.shape_147.setTransform(486.5,196.075);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.lf(["rgba(50,50,50,0)","#E51109"],[0,1],-5.2,0,5.2,0).s().p("EgBZAhdMAAAhC5ICzAAMAAABC5g");
	this.shape_148.setTransform(493.725,196.075);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.lf(["rgba(50,50,50,0)","#E40905"],[0,1],2,0,-2,0).s().p("EgATAhdMAAAhC5IAnAAMAAABC5g");
	this.shape_149.setTransform(500.95,196.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_75}]},165).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).wait(1));

	// maska (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AoOHCIIWuMIIHOVg");
	var mask_graphics_1 = new cjs.Graphics().p("AplIDIJuwOIJdQXg");
	var mask_graphics_2 = new cjs.Graphics().p("Aq8JDILGyQIKzSbg");
	var mask_graphics_3 = new cjs.Graphics().p("AsSKEIMd0TIMIUfg");
	var mask_graphics_4 = new cjs.Graphics().p("AtpLEIN22UINdWhg");
	var mask_graphics_5 = new cjs.Graphics().p("AvAMEIPO4WIOzYlg");
	var mask_graphics_6 = new cjs.Graphics().p("AwWNFIQm6YIQIang");
	var mask_graphics_7 = new cjs.Graphics().p("AxtOFIR98aIRecrg");
	var mask_graphics_8 = new cjs.Graphics().p("AzEPFITW+bISzetg");
	var mask_graphics_9 = new cjs.Graphics().p("A0aQGMAUtggeMAUIAgxg");
	var mask_graphics_10 = new cjs.Graphics().p("A0tQfQIgywMguhQMHOuIUS3g");
	var mask_graphics_11 = new cjs.Graphics().p("A1AQ5QGq1TOqsyQOJNDGkVWg");
	var mask_graphics_12 = new cjs.Graphics().p("A1TRSQEz30Q0rEQQMLYE0X1g");
	var mask_graphics_13 = new cjs.Graphics().p("A1mRsQC96XS9pVQSOJsDFaVg");
	var mask_graphics_14 = new cjs.Graphics().p("A14SFQBF85VHnmQURIABUc1g");
	var mask_graphics_15 = new cjs.Graphics().p("A2KSfQgy/cXSl3QWTGWgcfTg");
	var mask_graphics_16 = new cjs.Graphics().p("A2cS5UgCpgh+AZcgEJUAYWAEqgCMAhzg");
	var mask_graphics_17 = new cjs.Graphics().p("A2tTSUgEggkgAbmgCaUAaYAC/gD8AkSg");
	var mask_graphics_18 = new cjs.Graphics().p("A2+TsUgGWgnDAdvgArUAcbABUgFsAmxg");
	var mask_graphics_19 = new cjs.Graphics().p("A3PUGUgIOgplAf6ABEUAedgAYgHcApRg");
	var mask_graphics_20 = new cjs.Graphics().p("A4DUVUgH6gpHAgaAAGUAfCAA0gHPAomg");
	var mask_graphics_21 = new cjs.Graphics().p("A42UlUgHpgoqAg7gA4UAfnACAgHCAn7g");
	var mask_graphics_22 = new cjs.Graphics().p("A5qU2UgHVgoOAhcgB1UAgLADMgG1AnQg");
	var mask_graphics_23 = new cjs.Graphics().p("A6dVGUgHDgnxAh8gCzUAgwAEYgGnAmlg");
	var mask_graphics_24 = new cjs.Graphics().p("A7RVWUgGwgnUAidgDwUAhVAFkgGaAl6g");
	var mask_graphics_25 = new cjs.Graphics().p("A8EVnUgGegm4Ai+gEuUAh5AGwgGNAlPg");
	var mask_graphics_26 = new cjs.Graphics().p("A84V2UgGLgmaAjfgFsUAieAH8gGAAklg");
	var mask_graphics_27 = new cjs.Graphics().p("A9rWHUgF5gl+AkAgGpUAjDAJJgFzAj4g");
	var mask_graphics_28 = new cjs.Graphics().p("A+eWXUgFmglhAkggHmUAjnAKTgFlAjOg");
	var mask_graphics_29 = new cjs.Graphics().p("A/RWoUgFUglFAlBgIkUAkMALggFXAijg");
	var mask_graphics_30 = new cjs.Graphics().p("EggFAW4UgFBgkoAligJiUAkxAMsgFKAh5g");
	var mask_graphics_31 = new cjs.Graphics().p("Egg4AXIUgEugkLAmDgKfUAlVAN4gE9AhNg");
	var mask_graphics_32 = new cjs.Graphics().p("EghrAXYUgEcgjuAmkgLcUAl6APEgEwAghg");
	var mask_graphics_33 = new cjs.Graphics().p("EgieAXoUgEJgjRAnFgMaUAmeAQQgEiAf3g");
	var mask_graphics_34 = new cjs.Graphics().p("EgjRAX4UgD2gizAnlgNZUAnDARcgEVAfMg");
	var mask_graphics_35 = new cjs.Graphics().p("EgkEAYIUgDkgiXAoGgOVUAnoASngEIAeig");
	var mask_graphics_36 = new cjs.Graphics().p("Egk2AYYUgDSgh6AongPTUAoNAT0gD7Ad2g");
	var mask_graphics_37 = new cjs.Graphics().p("EglpAYpUgC/ghdApIgQRUAoxAVAgDuAdLg");
	var mask_graphics_38 = new cjs.Graphics().p("EgmcAY6UgCsghCApogROUApWAWMgDgAchg");
	var mask_graphics_39 = new cjs.Graphics().p("EgnPAZKUgCZgglAqJgSLUAp6AXXgDTAb2g");
	var mask_graphics_40 = new cjs.Graphics().p("Ego9AZYUABtgezAn6gUaUAnnAZlAAtAaGg");
	var mask_graphics_41 = new cjs.Graphics().p("EgqvAZnUAFzgdCAlsgWoUAlSAbxAEtAYXg");
	var mask_graphics_42 = new cjs.Graphics().p("EgsgAZ1UAJ5gbRAjcgY2UAi+Ad+AIuAWng");
	var mask_graphics_43 = new cjs.Graphics().p("EguSAaEUAOAgZhAhMgbEUAgrAgMAMuAU3g");
	var mask_graphics_44 = new cjs.Graphics().p("EgwEAaSQSG3ve+9TUAeWAiaAQvATHg");
	var mask_graphics_45 = new cjs.Graphics().p("Egx1AahQWM1/cv/gUAcCAkmAUvARXg");
	var mask_graphics_46 = new cjs.Graphics().p("EgznAavUAaSgUOAahghuUAZuAm0AYuAPng");
	var mask_graphics_47 = new cjs.Graphics().p("Eg1ZAa+UAeYgScAYRgj9UAXaApAAcwAN4g");
	var mask_graphics_48 = new cjs.Graphics().p("Eg3LAbMUAifgQrAWCgmLUAVGArOAgwAMHg");
	var mask_graphics_49 = new cjs.Graphics().p("Eg49AbbUAmmgO6ATzgoaUASyAtcAkvAKXg");
	var mask_graphics_50 = new cjs.Graphics().p("Eg6uAbqUAqrgNKARlgqoUAQdAvpAowAIog");
	var mask_graphics_51 = new cjs.Graphics().p("Eg8gAb4UAuygLYAPVgs2UAOKAx2AswAG3g");
	var mask_graphics_52 = new cjs.Graphics().p("Eg+SAcGUAy4gJnANGgvEUAL2A0EAwxAFHg");
	var mask_graphics_53 = new cjs.Graphics().p("EhAEAcWUA2+gH3AK4gxTUAJhA2SA0yADXg");
	var mask_graphics_54 = new cjs.Graphics().p("EhB1AckUA7EgGGAIpgzhUAHNA4fA4xABog");
	var mask_graphics_55 = new cjs.Graphics().p("EhB3AczUA3tgIWAL/gxuUAKyA2oA1RAD7g");
	var mask_graphics_56 = new cjs.Graphics().p("EhB5AdAUA0XgKkAPUgv8UAOWA0yAxyAGPg");
	var mask_graphics_57 = new cjs.Graphics().p("EhB7AdPUAxAgM1ASqguIUAR6Ay8AuTAIhg");
	var mask_graphics_58 = new cjs.Graphics().p("EhB9AddUAtpgPEAWAgsWUAVfAxGAqzAK1g");
	var mask_graphics_59 = new cjs.Graphics().p("EhB/AdrUAqSgRTAZWgqkUAZDAvQAnUANJg");
	var mask_graphics_60 = new cjs.Graphics().p("EhCBAd5UAm7gTjAcsgowUAcoAtZAj0APcg");
	var mask_graphics_61 = new cjs.Graphics().p("EhCCAeIUAjkgV0AgBgm9UAgMArkAgVARvg");
	var mask_graphics_62 = new cjs.Graphics().p("EhCEAeWUAgNgYDAjXglKUAjxAptAc1AUDg");
	var mask_graphics_63 = new cjs.Graphics().p("EhCGAekUAc3gaSAmtgjYUAnUAn3AZVAWWg");
	var mask_graphics_64 = new cjs.Graphics().p("EhCIAeyUAZggciAqDghkUAq4AmBAV2AYog");
	var mask_graphics_65 = new cjs.Graphics().p("EhCKAfBUAWJgezAtZgfxUAudAkLASWAa8g");
	var mask_graphics_66 = new cjs.Graphics().p("EhCMAfPUASyghBAwvgeAUAyBAiVAO3AdPg");
	var mask_graphics_67 = new cjs.Graphics().p("EhCOAfdUAPbgjQA0FgcNUA1lAgeALYAfjg");
	var mask_graphics_68 = new cjs.Graphics().p("EhCQAfsUAMFglhA3agaaUA5KAeqAH4Ah1g");
	var mask_graphics_69 = new cjs.Graphics().p("EhCSAf5UAIugnwA6wgYmUA8uAcyAEZAkJg");
	var mask_graphics_70 = new cjs.Graphics().p("EhCUAgIUAFXgp/A+GgW1UBATAa9AA5Amcg");
	var mask_graphics_71 = new cjs.Graphics().p("EhCZAgWUACBgsPBBbgVCUBD3AZHgCnAowg");
	var mask_graphics_72 = new cjs.Graphics().p("EhCmAglUgBWgugBExgTOUBHbAXRgGGArCg");
	var mask_graphics_73 = new cjs.Graphics().p("EhCzAgzUgEtgwvBIHgRcUBK/AVagJlAtXg");
	var mask_graphics_74 = new cjs.Graphics().p("EhC+AhBUgIEgy/BLdgPpUBOjATlgNFAvqg");
	var mask_graphics_75 = new cjs.Graphics().p("EhDwAhhUgH2gzGBMEgQjUBO8AUygMqAvfg");
	var mask_graphics_76 = new cjs.Graphics().p("EhEiAiDUgHpgzOBMsgRfUBPUAWBgMOAvTg");
	var mask_graphics_77 = new cjs.Graphics().p("EhFVAikUgHagzWBNTgSZUBPsAXOgLyAvJg");
	var mask_graphics_78 = new cjs.Graphics().p("EhGHAjEUgHMgzcBN6gTUUBQFAYcgLXAu+g");
	var mask_graphics_79 = new cjs.Graphics().p("EhG5AjlUgG/gzjBOigUQUBQdAZqgK8Auzg");
	var mask_graphics_80 = new cjs.Graphics().p("EhHsAkGUgGxgzrBPKgVKUBQ1Aa4gKgAung");
	var mask_graphics_81 = new cjs.Graphics().p("EhIeAknUgGjgzzBPwgWFUBROAcGgKFAudg");
	var mask_graphics_82 = new cjs.Graphics().p("EhJRAlIUgGVgz6BQYgXAUBRlAdUgJpAuRg");
	var mask_graphics_83 = new cjs.Graphics().p("EhKEAlpUgGHg0CBRAgX7UBR9AeigJNAuHg");
	var mask_graphics_84 = new cjs.Graphics().p("EhK3AmKUgF5g0KBRngY1UBSWAfwgIyAt7g");
	var mask_graphics_85 = new cjs.Graphics().p("EhLqAmrUgFrg0RBSOgZxUBSuAg+gIWAtxg");
	var mask_graphics_86 = new cjs.Graphics().p("EhMdAnMUgFdg0ZBS2garUBTGAiMgH7Atlg");
	var mask_graphics_87 = new cjs.Graphics().p("EhNQAnsUgFPg0gBTdgbmUBTeAjagHfAtbg");
	var mask_graphics_88 = new cjs.Graphics().p("EhODAoOUgFCg0oBUFgchUBT3AkogHEAtPg");
	var mask_graphics_89 = new cjs.Graphics().p("EhO2AouUgE0g0vBUsgdcUBUPAl2gGoAtFg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:251.725,y:284.925}).wait(1).to({graphics:mask_graphics_1,x:252.625,y:286.725}).wait(1).to({graphics:mask_graphics_2,x:253.525,y:288.525}).wait(1).to({graphics:mask_graphics_3,x:254.425,y:290.3}).wait(1).to({graphics:mask_graphics_4,x:255.3,y:292.1}).wait(1).to({graphics:mask_graphics_5,x:256.225,y:293.925}).wait(1).to({graphics:mask_graphics_6,x:257.1,y:295.725}).wait(1).to({graphics:mask_graphics_7,x:258,y:297.5}).wait(1).to({graphics:mask_graphics_8,x:258.9,y:299.3}).wait(1).to({graphics:mask_graphics_9,x:259.8,y:301.1}).wait(1).to({graphics:mask_graphics_10,x:259.425,y:298.4}).wait(1).to({graphics:mask_graphics_11,x:259,y:295.7}).wait(1).to({graphics:mask_graphics_12,x:258.625,y:293}).wait(1).to({graphics:mask_graphics_13,x:258.25,y:290.3}).wait(1).to({graphics:mask_graphics_14,x:257.875,y:287.65}).wait(1).to({graphics:mask_graphics_15,x:257.3968,y:284.95}).wait(1).to({graphics:mask_graphics_16,x:256.8619,y:282.25}).wait(1).to({graphics:mask_graphics_17,x:256.3177,y:279.55}).wait(1).to({graphics:mask_graphics_18,x:255.7422,y:276.85}).wait(1).to({graphics:mask_graphics_19,x:255.2028,y:274.0665}).wait(1).to({graphics:mask_graphics_20,x:255.0905,y:272.5493}).wait(1).to({graphics:mask_graphics_21,x:254.974,y:270.95}).wait(1).to({graphics:mask_graphics_22,x:254.8455,y:269.3}).wait(1).to({graphics:mask_graphics_23,x:254.7342,y:267.7}).wait(1).to({graphics:mask_graphics_24,x:254.5935,y:266.1}).wait(1).to({graphics:mask_graphics_25,x:254.4653,y:264.5}).wait(1).to({graphics:mask_graphics_26,x:254.3204,y:262.9}).wait(1).to({graphics:mask_graphics_27,x:254.177,y:261.25}).wait(1).to({graphics:mask_graphics_28,x:254.0151,y:259.65}).wait(1).to({graphics:mask_graphics_29,x:253.8914,y:258.05}).wait(1).to({graphics:mask_graphics_30,x:253.7189,y:256.45}).wait(1).to({graphics:mask_graphics_31,x:253.5406,y:254.85}).wait(1).to({graphics:mask_graphics_32,x:253.3728,y:253.2}).wait(1).to({graphics:mask_graphics_33,x:253.1885,y:251.6}).wait(1).to({graphics:mask_graphics_34,x:253.0189,y:250}).wait(1).to({graphics:mask_graphics_35,x:252.8146,y:248.4}).wait(1).to({graphics:mask_graphics_36,x:252.6342,y:246.8}).wait(1).to({graphics:mask_graphics_37,x:252.423,y:245.15}).wait(1).to({graphics:mask_graphics_38,x:252.2251,y:243.55}).wait(1).to({graphics:mask_graphics_39,x:252.0062,y:241.95}).wait(1).to({graphics:mask_graphics_40,x:251.275,y:240.325}).wait(1).to({graphics:mask_graphics_41,x:250.9,y:238.65}).wait(1).to({graphics:mask_graphics_42,x:250.575,y:237.025}).wait(1).to({graphics:mask_graphics_43,x:250.2,y:235.375}).wait(1).to({graphics:mask_graphics_44,x:249.825,y:233.75}).wait(1).to({graphics:mask_graphics_45,x:249.45,y:232.075}).wait(1).to({graphics:mask_graphics_46,x:249.075,y:230.45}).wait(1).to({graphics:mask_graphics_47,x:248.75,y:228.8}).wait(1).to({graphics:mask_graphics_48,x:248.375,y:227.175}).wait(1).to({graphics:mask_graphics_49,x:248,y:225.5}).wait(1).to({graphics:mask_graphics_50,x:247.625,y:223.875}).wait(1).to({graphics:mask_graphics_51,x:247.25,y:222.225}).wait(1).to({graphics:mask_graphics_52,x:246.925,y:220.6}).wait(1).to({graphics:mask_graphics_53,x:246.55,y:218.925}).wait(1).to({graphics:mask_graphics_54,x:246.1625,y:217.3}).wait(1).to({graphics:mask_graphics_55,x:246.475,y:215.85}).wait(1).to({graphics:mask_graphics_56,x:246.75,y:214.425}).wait(1).to({graphics:mask_graphics_57,x:247.05,y:212.975}).wait(1).to({graphics:mask_graphics_58,x:247.325,y:211.55}).wait(1).to({graphics:mask_graphics_59,x:247.625,y:210.1}).wait(1).to({graphics:mask_graphics_60,x:247.925,y:208.675}).wait(1).to({graphics:mask_graphics_61,x:248.2,y:207.225}).wait(1).to({graphics:mask_graphics_62,x:248.5,y:205.8}).wait(1).to({graphics:mask_graphics_63,x:248.775,y:204.35}).wait(1).to({graphics:mask_graphics_64,x:249.075,y:202.95}).wait(1).to({graphics:mask_graphics_65,x:249.375,y:201.5}).wait(1).to({graphics:mask_graphics_66,x:249.65,y:200.05}).wait(1).to({graphics:mask_graphics_67,x:249.95,y:198.625}).wait(1).to({graphics:mask_graphics_68,x:250.225,y:197.175}).wait(1).to({graphics:mask_graphics_69,x:250.525,y:195.75}).wait(1).to({graphics:mask_graphics_70,x:250.825,y:194.3}).wait(1).to({graphics:mask_graphics_71,x:251.4074,y:192.875}).wait(1).to({graphics:mask_graphics_72,x:252.8496,y:191.425}).wait(1).to({graphics:mask_graphics_73,x:254.2307,y:190}).wait(1).to({graphics:mask_graphics_74,x:255.4586,y:188.55}).wait(1).to({graphics:mask_graphics_75,x:255.2188,y:185.25}).wait(1).to({graphics:mask_graphics_76,x:254.984,y:181.9}).wait(1).to({graphics:mask_graphics_77,x:254.7603,y:178.6}).wait(1).to({graphics:mask_graphics_78,x:254.545,y:175.25}).wait(1).to({graphics:mask_graphics_79,x:254.3331,y:171.95}).wait(1).to({graphics:mask_graphics_80,x:254.1334,y:168.625}).wait(1).to({graphics:mask_graphics_81,x:253.9412,y:165.3}).wait(1).to({graphics:mask_graphics_82,x:253.7079,y:161.975}).wait(1).to({graphics:mask_graphics_83,x:253.5318,y:158.65}).wait(1).to({graphics:mask_graphics_84,x:253.3643,y:155.325}).wait(1).to({graphics:mask_graphics_85,x:253.2017,y:152.025}).wait(1).to({graphics:mask_graphics_86,x:253.0509,y:148.675}).wait(1).to({graphics:mask_graphics_87,x:252.9083,y:145.375}).wait(1).to({graphics:mask_graphics_88,x:252.7718,y:142.025}).wait(1).to({graphics:mask_graphics_89,x:252.6464,y:138.725}).wait(151));

	// car
	this.instance = new lib.car_fix();
	this.instance.setTransform(-4,-4,1.016,1.02);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(240));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-306,-29.3,1215,715.5);
// library properties:
lib.properties = {
	id: 'EDFB8D37D711064ABE8308DF65173028',
	width: 500,
	height: 400,
	fps: 30,
	color: "#273D44",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png", id:"index_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['EDFB8D37D711064ABE8308DF65173028'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;