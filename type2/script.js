var palette = [
		// Hex , HSL , RGB [, Description ]
		['4cadeb','203,80,61','76,173,235','Background color.'],
		['7ac2f0','203,80,71','122,194,240'],
		['a8d7f5','203,79,81','168,215,245'],
		['eb8a4c','23,80,61','235,138,76','Hyperlinks.'],
		['f0a87a','23,80,71','240,168,122'],
		['f5c6a8','23,79,81','245,198,168'],
		['9b9b9b','0,0,61','155,155,155','Font color.'],
		['b5b5b5','0,0,71','181,181,181']
  ];

	var frame = function(hex, hsl, rgb, info){
		if( info ) info = '<h3>Usage information</h3>' + info;
		return $('<div>', { 
			'class': 'color', 
			'html': [
				$('<div>', { 
					'class': 'dot', 
					'css': { 'background-color' : '#' + hex }
				}),
				$('<dl>', { 
					'class': 'info', 
					'html': [
						$('<dt>', { 'html': 'Hex' }),
						$('<dd>', { 'html': '#' + hex }),
						$('<dt>', { 'html': 'HSL' }),
						$('<dd>', { 'html': hsl }),
						$('<dt>', { 'html': 'RGB' }),
						$('<dd>', { 'html': rgb }),
						$('<div>', { 'html': info })
					]
				})
			]
		})
	};

	var $b = $('body'),
	    $p = $('.palette'),
      p = palette;

	for (i in p ) {
		$p.append( frame( p[i][0], p[i][1], p[i][2], p[i][3] ) );
	};

	$(".color").hover(function() {
    $(this).animate({ 'top':'5px' }, 200);
    	$b.stop().animate({ 
        'background-color': $('.dot', this).css("background-color") 
      }, 300);
  },function(){
    $(this).animate({ 'top':'0' }, 200);
  });

	$('.palette').mouseleave(function(){
		$b.stop().animate({ 'background-color': '#222' }, 500);
	});

	$('.info dd').click(function(){
		$(this).selectText();
	});

	$('.info dt').click(function(){
		$(this).next('dd').selectText();
	});

// Select Text
// By Jason Edelman
// http://jsfiddle.net/edelman/KcX6A/1506/

jQuery.fn.selectText = function(){
    var doc = document
        , element = this[0]
        , range, selection
    ;
    if (doc.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();        
        range = document.createRange();
        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);
    }
};

// jQuery Color Plugin

(function(d){d.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","color","outlineColor"],function(f,e){d.fx.step[e]=function(g){if(!g.colorInit){g.start=c(g.elem,e);g.end=b(g.end);g.colorInit=true}g.elem.style[e]="rgb("+[Math.max(Math.min(parseInt((g.pos*(g.end[0]-g.start[0]))+g.start[0]),255),0),Math.max(Math.min(parseInt((g.pos*(g.end[1]-g.start[1]))+g.start[1]),255),0),Math.max(Math.min(parseInt((g.pos*(g.end[2]-g.start[2]))+g.start[2]),255),0)].join(",")+")"}});function b(f){var e;if(f&&f.constructor==Array&&f.length==3){return f}if(e=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(f)){return[parseInt(e[1]),parseInt(e[2]),parseInt(e[3])]}if(e=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(f)){return[parseFloat(e[1])*2.55,parseFloat(e[2])*2.55,parseFloat(e[3])*2.55]}if(e=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(f)){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}if(e=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(f)){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}if(e=/rgba\(0, 0, 0, 0\)/.exec(f)){return a.transparent}return a[d.trim(f).toLowerCase()]}function c(g,e){var f;do{f=d.css(g,e);if(f!=""&&f!="transparent"||d.nodeName(g,"body")){break}e="backgroundColor"}while(g=g.parentNode);return b(f)}var a={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]}})(jQuery);