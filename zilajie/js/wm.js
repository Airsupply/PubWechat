/**

 * Created by WQ on 2014/9/3.

 */

window.data = {};

window.data.userPicData = [

	

	{

		avatar : "images/page1-zenghang.jpg",

		name : "老婆饼",

		duty : "老婆...香浓"

	},

	{

		avatar : "images/page1-chaike.jpg",

		name : "蚵仔煎",

		duty : "蚵仔煎-闻名的台湾小吃。"

	}, {

		avatar : "images/page1-chenqi.jpg",

		name : "大肠包小肠",

		duty : "源于花莲的传统台湾小食"

	}, {

		avatar : "images/page1-chentong.jpg",

		name : "灯泡黑糖珍珠奶茶",

		duty : "慈禧太后进贡的献寿礼,家喻户晓的甜点。"

	}, {

		avatar : "images/page1-qinglonglaozei.jpg",

		name : "酸辣粉",

		duty : "传统手工漏制。"

	}, {

		avatar : "images/page1-diaoye.jpg",

		name : "章鱼烧",

		duty : "源于日本大阪"

	},

	{

		avatar : "images/page1-qinglonglaozei.jpg",

		name : "青龙粉",

		duty : "看着就有食欲"

	},

	{

		avatar : "images/page1-fengdahui.jpg",

		name : "帅哥黄金雕冰淇淋",

		duty : "既精致且新鲜的甜品"

	}, {

		avatar : "images/page1-gejia.jpg",

		name : "雷门烧麻薯",

		duty : "客家米食代表性食品"

	}, {

		avatar : "images/page1-guijiaoqi.jpg",

		name : "车轮饼",

		duty : "豐富樣式與口味。"

	}, {

		avatar : "images/page1-guodingqi.jpg",

		name : "法式可丽饼",

		duty : "搭配十分多样化咸食甜食皆各占一方"

	}, {

		avatar : "images/page1-lilin.jpg",

		name : "南翔小笼包",

		duty : "皮薄、馅多、卤重、味鲜。"

	}, {

		avatar : "images/page1-liya.jpg",

		name : "米粉",

		duty : "洁白、细嫩、软滑、爽口。"

	}, {

		avatar : "images/page1-lizhiguo.jpg",

		name : "清补凉",

		duty : "以红豆(绿豆)、薏米、花生、空心粉等做成。"

	}, {

		avatar : "images/page1-liujiangfeng.jpg",

		name : "丝袜奶茶",

		duty : "丝袜奶茶的方式泡制。"

	}, {

		avatar : "images/page1-liuliang.jpg",

		name : "葡式蛋挞",

		duty : "奶油酥皮满嘴香。"

	}, {

		avatar : "images/page1-longwei.jpg",

		name : "鸭血粉丝",

		duty : "口感鲜香，爽口宜人。"

	}, {

		avatar : "images/page1-luwei.jpg",

		name : "土笋冻",

		duty : "特有产品加工而成的冻品。"

	}, {

		avatar : "images/page1-lvguihua.jpg",

		name : "海城馅饼",

		duty : "香料十余种煮制"

	}, {

		avatar : "images/page1-mouguixian.jpg",

		name : "碗耳糕",

		duty : "形状像一个小茶碗"

	},

	{

		avatar : "images/page1-fangyu.jpg",

		name : "阿里山爱玉",

		duty : "养颜美容又美白。"

	},



	{

		avatar : "images/page1-wanggaofei.jpg",

		name : "三大炮",

		duty : "主要由糯米制成"

	}, {

		avatar : "images/page1-wangjiang.jpg",

		name : "虾饺",

		duty : "配上猪肉、竹笋，制成肉馅。"

	}, {

		avatar : "images/page1-wubixuan.jpg",

		name : "辣鱼蛋",

		duty : "在HK辣鱼蛋一直够辣"

	}, {

		avatar : "images/page1-wuxiaobo.jpg",

		name : "多一波",

		duty : "清爽但刺激"

	}, {

		avatar : "images/page1-xvwei.jpg",

		name : "砵仔糕",

		duty : "如糖果一样。很Q。"

	}, {

		avatar : "images/page1-yanghaoyong.jpg",

		name : "鸡蛋仔",

		duty : "包裹着鸡蛋，甜甜的味道。"

	}, {

		avatar : "images/page1-zhangchaoyang.jpg",

		name : "富豪软雪糕",

		duty : "用料很足，纯奶油哦！"

	}, {

		avatar : "images/page1-zhangyiming.jpg",

		name : "狗仔粉",

		duty : "传说中的狗仔粉。"

	}, {

		avatar : "images/page1-zhaoguocheng.jpg",

		name : "太极饼",

		duty : "山药、红薯泥、分别制作八卦。"

	}, {

		avatar : "images/page1-zhouhang.jpg",

		name : "面窝",

		duty : "四周厚中间薄、呈凹状，而叫它面窝。"

	}, {

		avatar : "images/page1-chenxiaohua.jpg",

		name : "润饼卷",

		duty : "集结了各种蔬菜，肉丝，花生糖粉，薄饼卷一切，"

	}




];

(function () {

	var layout = document.querySelector( "#layout" );

	var pages = document.querySelectorAll( ".page" );

	var Height = layout.offsetHeight;

	var Width = layout.offsetWidth;



	var audio = document.querySelector( "audio" );

	var musicLogo = document.querySelector( ".music-logo" );

	var isStart = false;



	window.spHeight = Height;

	Z.onTouchStart( pages[0], function () {

		if ( isStart == false ) {

			musicLogo.classList.add( "playing" );

			audio.src = "images/bg.mp3";

			audio.play();

		}

		isStart = true;

	} );

	Z.onTap( musicLogo, function () {

		musicLogo.classList.contains( "playing" ) ? audio.pause() : audio.play();

		musicLogo.classList.toggle( "playing" );

	} );





	var page5MapWidth = Height * 0.3194 * 511 / 384;

	Z.insertCSSRules( {

		".page5-arrow-point" : {

			left : (Width - page5MapWidth) / 2 + page5MapWidth * 0.3189 + "px"

		},

		".page2-bh" : {

			left : (Width - Height * 0.45) / 2 + "px"

		},

		".page3-circle-point.a" : {

			top : (Height * 0.4375 - 15) + "px",

			left : (Width / 2 - 15) + "px"

		},

		".page3-circle-point.b" : {

			top : (Height * 0.5952 - 15) + "px",

			left : (Width / 2 + Height * 0.09 - 15) + "px"

		},

		".page3-circle-point.c" : {

			top : (Height * 0.7529 - 30) + "px",

			left : (Width / 2 - Height * 0.09 - 15) + "px"

		},

		".page3-img2" : {

			bottom : (Height * 0.4048 + 15) + "px",

			left : (Width / 2 + Height * 0.09 ) + "px",

			"-webkit-transform" : "translate3d(-50%,0,0)"

		},

		".page3-img3" : {

			bottom : (Height * 0.2471 + 30) + "px",

			left : (Width / 2 - Height * 0.09 ) + "px",

			"-webkit-transform" : "translate3d(-50%,0,0)"

		}

	} );



	// 第0页

	pages[0].onCut = function () {

		setTimeout( function () {

			pages[0].classList.add( "animate" );

		}, 0 );

	};

	pages[0].onRemove = function () {

		this.classList.remove( "animate" );

	};





	var commentWall = sp.commentWall( document.querySelector( ".comment-wall" ), data.userPicData );

	sp.onPointerDown( commentWall.querySelector( ".sphere-parent" ), function ( event ) {

		event.preventDefault();

		event.stopPropagation();

	} );



	// 第1页

	pages[1].onCut = function () {

		commentWall.runAnimate();

		pages[1].classList.add( "animate" );

	};

	pages[1].onRemove = function () {

		commentWall.removeTips();

		commentWall.stopAnimate();

		this.classList.remove( "animate" );

	};



	var Page2Aniamte = null;

	var lines = [];



	function setPage2( page ) {

		var Height = page.offsetHeight;

		var offsetH = page.offsetHeight * 0.2232;

		var border = page.querySelector( ".page2-border" );

		var css = Z.css;

		var y = 0;

		Z.loop( 33, function ( i ) {

			var img = new Image();

			if ( i == 11 ) {

				return;

			}

			if ( i == 0 ) {

				img.src = "images/page2-title1.png";

				img.wheight = Height * 0.0952;

				img.classList.add( "page2-title" );

			}

			else if ( i == 13 ) {

				img.src = "images/page2-title2.png";

				img.wheight = Height * 0.0952;

				img.classList.add( "page2-title" );

			}

			else {

				img.src = "img/page2-" + (i > 13 ? i - 1 : i) + ".png";

				img.wheight = Height * 0.0773;

				img.classList.add( "page2-line" );

			}

			css( img, {

				"-webkit-transform" : "translate3d(-50%," + (1.6 * offsetH + y) + "px,0) scale(" + (y / 500 + 1) + ")"

			} );

			img.wy = offsetH + y;

			y = y + img.wheight;

			lines.push( img );

			border.appendChild( img );

		} );

		Page2Aniamte = Z.requestAnimate( function () {

			Z.loopArray( lines, function ( line, i ) {

				if ( line.wy > 0 ) {

					line.wy = line.wy - 0.7;

					css( line, {

						"-webkit-transform" : "translate3d(-50%," + line.wy + "px,0) scale(" + (line.wy / 500 + 1 - 1.6 * offsetH / 500) + ")"

					} );

				}

				else {

					css( line, {

						"opacity" : 0

					} );

				}

			} );

		} );

		Page2Aniamte.stop();

		Z.onTouchStart( page, function () {

			Page2Aniamte.stop();

		} );



		Z.onTouchEnd( page, function () {

			Page2Aniamte.start();

		} );

	}



	setPage2( pages[2] );

	// 第2页

	pages[2].onCut = function () {

		this.classList.add( "animate" );

		Page2Aniamte.start();

	};

	pages[2].onRemove = function () {



		var y = 0;

		var offsetH = pages[2].offsetHeight * 0.2232;



		Z.loopArray( lines, function ( line ) {

			Z.css( line, {

				"-webkit-transform" : "translate3d(-50%," + (1.6 * offsetH + y) + "px,0) scale(" + (y / 500 + 1) + ")",

				"opacity" : "1"

			} );

			line.wy = offsetH + y;

			y = y + line.wheight;

		} );

		this.classList.remove( "animate" );

		setTimeout( function () {

			Page2Aniamte.stop();

		}, 0 );

	};





	function setPage4( page ) {

		var points = page.querySelectorAll( ".page3-circle-point" );

		var imgs = [];

		Z.loopArray( points, function ( point, i ) {

			Z.onTap( point, function () {

				if ( !imgs[i] ) {

					// 生成

					var img = new Image();

					img.src = "img/page3-img" + (i + 1) + ".png";

					img.classList.add( "page3-img" + (i + 1) );

					Z.onTap( img, function () {

						page.removeChild( img );

					} );

					imgs[i] = img;

				}

				page.appendChild( imgs[i] );

			} );

		} );

	}



	setPage4( pages[4] );

	// 第3页

	pages[3].onCut = function () {

		this.classList.add( "animate" );

	};

	pages[3].onRemove = function () {

		this.classList.remove( "animate" );

	};



	//第4页

	pages[4].onCut = function () {

		this.classList.add( "animate" );

	};

	pages[4].onRemove = function () {

		this.classList.remove( "animate" );

	};





	//第5页

	pages[5].onCut = function () {

		this.classList.add( "animate" );

	};

	pages[5].onRemove = function () {

		this.classList.remove( "animate" );

	};



	var mapPage = null;



	function openMapPage() {

		if ( mapPage == null ) {

			// 生成地图页面

			mapPage = template.make( "page-map" );

			document.body.appendChild( mapPage );

			var position = new AMap.LngLat( 116.308093, 39.944489 );

			new AMap.Marker( {

				map : new AMap.Map( mapPage.querySelector( "#container" ), {

					view : new AMap.View2D( {

						center : position,

						zoom : 15,

						rotation : 0

					} ),

					lang : "zh_cn"//设置语言类型，中文简体

				} ),

				position : position,

				offset : new AMap.Pixel( -10, -34 ),

				icon : "images/0.png"

			} );

			Z.onTap( mapPage.querySelector( ".c-title-bar" ), function () {

				document.body.removeChild( mapPage );

			} );

		}

		else {

			document.body.appendChild( mapPage );

		}

	}



	Z.onTap( pages[6].querySelector( ".page5-map" ), openMapPage );

	//第6页

	pages[6].onCut = function () {

		this.classList.add( "animate" );

	};

	pages[6].onRemove = function () {

		this.classList.remove( "animate" );

	};



	//第7页

	pages[7].onCut = function () {

		this.classList.add( "animate" );

	};

	pages[7].onRemove = function () {

		this.classList.remove( "animate" );

	};



	Z.onTap( document.querySelector( ".page5-btn" ), function () {

		location.href = "/";

	} );





	document.querySelector( ".page6-href" ).href = Z.ua.ios ? Z.ua.MicroMessenger ? "/" : "/" : "/";

	Z.onTap( document.querySelector( ".page6-btn" ), function () {

		if ( Z.ua.ios ) {

			if ( Z.ua.MicroMessenger ) {

				location.href = "/";

			}

			else {

				location.href = "/";

			}

		}

		else {

			location.href = "/";

		}

	} );





	setTimeout( function () {

		document.body.removeChild( document.querySelector( ".page-loading" ) );

		lib.ScreenSystem( document.getElementById( "layout" ) );

	}, 3000 );



})();



document.addEventListener( 'WeixinJSBridgeReady', function () {

	var WeixinJSBridge = window.WeixinJSBridge;



	// 发送给好友;

	WeixinJSBridge.on( 'menu:share:appmessage', function () {

		WeixinJSBridge.invoke( 'sendAppMessage', {

			"appid" : dataForWeixin.appId,

			"img_url" : dataForWeixin.picture,

			"img_width" : "120",

			"img_height" : "120",

			"link" : dataForWeixin.url,

			"desc" : dataForWeixin.desc,

			"title" : dataForWeixin.title

		}, function ( res ) {

		} );

	} );



	// 分享到朋友圈;

	WeixinJSBridge.on( 'menu:share:timeline', function () {

		WeixinJSBridge.invoke( 'shareTimeline', {

			"img_url" : dataForWeixin.picture,

			"img_width" : "120",

			"img_height" : "120",

			"link" : dataForWeixin.url,

			"desc" : dataForWeixin.desc,

			"title" : dataForWeixin.title

		}, function ( res ) {

		} );

	} );



	// 分享到微博;

	WeixinJSBridge.on( 'menu:share:weibo', function () {

		WeixinJSBridge.invoke( 'shareWeibo', {

			"content" : dataForWeixin.title + ' ' + dataForWeixin.url,

			"url" : dataForWeixin.url

		}, function ( res ) {

		} );

	} );



	// 分享到Facebook

	WeixinJSBridge.on( 'menu:share:facebook', function () {

		WeixinJSBridge.invoke( 'shareFB', {

			"img_url" : dataForWeixin.picture,

			"img_width" : "120",

			"img_height" : "120",

			"link" : dataForWeixin.url,

			"desc" : dataForWeixin.desc,

			"title" : dataForWeixin.title

		}, function ( res ) {

		} );

	} );

}, false );

