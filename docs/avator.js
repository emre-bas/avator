//############################################################################################//
//                                                                                            //
//            ##                                      ##                                      //
//          ##  ##                                    ##                                      //
//        ##      ##    ##      ##      ######      ######        ######      ##  ####        //
//        ##      ##    ##      ##            ##      ##        ##      ##    ####            //
//        ##########    ##      ##    ##########      ##        ##      ##    ##              //
//        ##      ##      ##  ##      ##      ##      ##        ##      ##    ##              //
//        ##      ##        ##          ######          ####      ######      ##              //
//                                                                                            //
//############################################################################################//
//                                                                                            //
//                          . . . : : !   Avator (v1.0)   ! : : . . .                         //
//                                                                                            //
//############################################################################################//

var avator = {}

// >>> Layers
avator.layers = [
	{ // Skin
		matrixes: [
			"0,0,0,0,3c0,7e0,ff0,ff0,ff0,1ff8,1ff8,ff0,ff0,7e0,7e0,3c0,0,0,0,0",
			"0,0,0,0,3c0,7e0,ff0,ff0,1ff8,1ff8,1ff8,ff0,ff0,7e0,7e0,3c0,0,0,0,0",
			"0,0,0,0,0,3c0,7e0,ff0,ff0,1ff8,1ff8,ff0,ff0,7e0,7e0,3c0,0,0,0,0",
			"0,0,0,0,0,3c0,7e0,ff0,1ff8,1ff8,1ff8,ff0,ff0,7e0,7e0,3c0,0,0,0,0",
			"0,0,0,0,3c0,7e0,ff0,ff0,ff0,1ff8,1ff8,ff0,ff0,ff0,7e0,3c0,0,0,0,0",
			"0,0,0,0,3c0,7e0,ff0,ff0,1ff8,1ff8,1ff8,ff0,ff0,ff0,7e0,3c0,0,0,0,0",
			"0,0,0,0,0,3c0,7e0,ff0,ff0,1ff8,1ff8,ff0,ff0,ff0,7e0,3c0,0,0,0,0",
			"0,0,0,0,0,3c0,7e0,ff0,1ff8,1ff8,1ff8,ff0,ff0,ff0,7e0,3c0,0,0,0,0",
		],
		colors: ["f8d5c2","efbba6","e6aa86","d2946b","c58f63","ae7142","845736","715031"],
		fg: { matrix: "0,0,0,0,0,0,0,0,0,180,180,180,0,0,0,0,0,0,0,0", color:"00000020" },
	},
	{ // Eyes
		bg: { matrix: "0,0,0,0,0,0,0,0,0,660,660,0,0,0,0,0,0,0,0,0", color:"f5ede9" },
		matrixes: [
			"0,0,0,0,0,0,0,0,0,420,0,0,0,0,0,0,0,0,0,0",
			"0,0,0,0,0,0,0,0,0,240,0,0,0,0,0,0,0,0,0,0",
			"0,0,0,0,0,0,0,0,0,0,420,0,0,0,0,0,0,0,0,0",
			"0,0,0,0,0,0,0,0,0,0,240,0,0,0,0,0,0,0,0,0",
			"0,0,0,0,0,0,0,0,0,220,0,0,0,0,0,0,0,0,0,0",
			"0,0,0,0,0,0,0,0,0,0,220,0,0,0,0,0,0,0,0,0",
			"0,0,0,0,0,0,0,0,0,440,0,0,0,0,0,0,0,0,0,0",
			"0,0,0,0,0,0,0,0,0,0,440,0,0,0,0,0,0,0,0,0",
		],
		colors: ["8c6f45","755742","ad4925","49998b","2e547f","2e5053","447e46","75884a"],
	},
	{ // beard
		matrixes: [
			"0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0",
			"0,0,0,0,0,0,0,0,0,0,0,0,0,0,180,0,0,0,0,0",
			"0,0,0,0,0,0,0,0,0,0,0,0,0,0,180,180,0,0,0,0",
			"0,0,0,0,0,0,0,0,0,0,0,0,0,0,3c0,3c0,180,0,0,0",
			"0,0,0,0,0,0,0,0,0,0,0,0,0,420,7e0,3c0,0,0,0,0",
			"0,0,0,0,0,0,0,0,0,0,0,0,810,c30,7e0,3c0,0,0,0,0",
			"0,0,0,0,0,0,0,0,0,0,0,0,0,c30,7e0,3c0,180,0,0,0",
			"0,0,0,0,0,0,0,0,0,0,0,1008,1008,1c38,1ff8,ff0,7e0,3c0,180,0",
		],
		colors: ["090806","533d32","fff5f5","fff69d","a56b46","b01109","f50057","00897b"],
	},
	{ // whiskers
		matrixes: [
			"0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0",
			"0,0,0,0,0,0,0,0,0,0,0,0,180,0,0,0,0,0,0,0",
			"0,0,0,0,0,0,0,0,0,0,0,0,3c0,0,0,0,0,0,0,0",
			"0,0,0,0,0,0,0,0,0,0,0,0,3c0,420,0,0,0,0,0,0",
			"0,0,0,0,0,0,0,0,0,0,0,0,7e0,420,0,0,0,0,0,0",
			"0,0,0,0,0,0,0,0,0,0,0,0,7e0,c30,0,0,0,0,0,0",
			"0,0,0,0,0,0,0,0,0,0,0,0,ff0,1c38,0,0,0,0,0,0",
			"0,0,0,0,0,0,0,0,0,0,0,c003,67e6,3c3c,0,0,0,0,0,0",
		],
		colors: ["090806","533d32","fff5f5","fff69d","a56b46","b01109","f50057","00897b"],
	},
	{ // Mouth
		matrixes: [
			"0,0,0,0,0,0,0,0,0,0,0,0,0,3c0,0,0,0,0,0,0",
			"0,0,0,0,0,0,0,0,0,0,0,0,0,3c0,3c0,0,0,0,0,0",
			"0,0,0,0,0,0,0,0,0,0,0,0,0,3c0,180,0,0,0,0,0",
			"0,0,0,0,0,0,0,0,0,0,0,0,0,180,3c0,0,0,0,0,0",
			"0,0,0,0,0,0,0,0,0,0,0,0,0,180,0,0,0,0,0,0",
			"0,0,0,0,0,0,0,0,0,0,0,0,0,180,180,0,0,0,0,0",
			"0,0,0,0,0,0,0,0,0,0,0,0,0,240,180,0,0,0,0,0",
			"0,0,0,0,0,0,0,0,0,0,0,0,0,180,240,0,0,0,0,0",
		],
		colors: ["d01615","b01109","e10032","880e4f","673ab7","2935b1","f68017","009688"],
	},
	{ // glasses
		matrixes: [
			"0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0",
			"0,0,0,0,0,0,0,0,660,0,0,0,0,0,0,0,0,0,0,0",
			"0,0,0,0,0,0,0,0,7e0,0,0,0,0,0,0,0,0,0,0,0",
			"0,0,0,0,0,0,0,0,660,990,990,660,0,0,0,0,0,0,0,0",
			"0,0,0,0,0,0,0,0,1e78,990,990,660,0,0,0,0,0,0,0,0",
			"0,0,0,0,0,0,0,0,ff0,990,990,660,0,0,0,0,0,0,0,0",
			"0,0,0,0,0,0,0,0,1ff8,990,990,660,0,0,0,0,0,0,0,0",
			"0,0,0,0,0,0,0,0,ff0,990,990,ff0,0,0,0,0,0,0,0,0",
		],
		colors: ["101010","f0f0f0","3e2622","ffc107","004d40","004d40","e61b23","4527a0"],
	},
	{ // hair
		matrixes: [
			"0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0",
			"0,0,0,3c0,7e0,c30,810,0,0,0,0,0,0,0,0,0,0,0,0,0",
			"0,0,3c0,7e0,ff0,1ff8,1818,1008,0,0,0,0,0,0,0,0,0,0,0,0",
			"0,3c0,7e0,ff0,1ff8,1c38,1818,1008,0,0,0,0,0,0,0,0,0,0,0,0",
			"0,0,7e0,ff0,1ff8,3ffc,381c,300c,300c,0,0,0,0,0,0,0,0,0,0,0",
			"0,0,3c0,7e0,ff0,1ff8,1f98,3e08,3800,2000,0,0,0,0,0,0,0,0,0,0",
			"0,0,7c0,fe0,1ff0,3ff8,7f98,7e08,f800,f000,e000,e000,e000,e000,c000,8000,0,0,0,0",
			"0,0,7e0,ff0,1ff8,3ffc,3e7c,781e,700e,6006,6006,700e,700e,700e,700e,700e,6006,4002,0,0",
		],
		colors: ["090806","533d32","fff5f5","fff69d","a56b46","b01109","f50057","00897b"],
	},
	{ // hat
		matrixes: [
			"0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0",
			"0,0,0,0,ff0,1ff8,1ff8,0,0,0,0,0,0,0,0,0,0,0,0,0",
			"0,0,ff0,ff0,ff0,1ff8,1ff8,0,0,0,0,0,0,0,0,0,0,0,0,0",
			"0,0,0,7e0,ff0,1ff8,1ff8,7e0,180,0,0,0,0,0,0,0,0,0,0,0",
			"0,0,2db4,2db4,3ffc,3ffc,1ff8,0,0,0,0,0,0,0,0,0,0,0,0,0",
			"0,0,0,0,400,e00,400,0,0,0,0,0,0,0,0,0,0,0,0,0",
			"0,0,0,0,20,70,20,0,0,0,0,0,0,0,0,0,0,0,0,0",
			"0,0,0,0,420,e70,420,0,0,0,0,0,0,0,0,0,0,0,0,0",
		],
		colors: ["101010","f0f0f0","3e2622","ffc107","004d40","004d40","e61b23","4527a0"],
	},
]

// >>> Library
avator.fn = {
	encodeMatrix : (matrix,fromBase=2,toBase=16) => {
		var text = "";
		matrix.forEach(y => {
			text +=  parseInt( y.toString().replace(/,/g,"") ,fromBase).toString(toBase) + ","
		});
		return text.replace(/,$/,"");
	},
	decodeMatrix : (code,column=16,fromBase=16,toBase=2) => {
		if(typeof code!="string") return code;
		var array = code.split(",")
		array.forEach( (row,row_i) => {
			row = parseInt( row ,fromBase).toString(toBase)
			for(var i=row.length; i<column; i++) row = "0"+row;
			array[row_i] = row.split("")
		});
		return array;
	},
	rgbToArray : (rgb) => {
		rgb = rgb.replace(/#/g,"").split("")
		var color = [0,0,0,255]
		if(rgb.length==3 || rgb.length==4){
			rgb.forEach((e,i)=>{ color[i]=parseInt(""+e+e,16).toString(10) })
		}
		if(rgb.length==6 || rgb.length==8){
			rgb.forEach((e,i)=>{
				if(!(i%2)){ color[Math.floor(i/2)]=parseInt(""+e+rgb[i+1],16).toString(10)}
			})
		}
		return color;
	},
	rgbFromArray : (array) => {
		var rgb = "#"
		array.forEach(i=>{ 
			i = parseInt( i ,10).toString(16);
			if(i.length==1) i = "0"+i;
			rgb += i;
		})
		return rgb
	},
	rgbCollect : (rgb1="#000",rgb2="#000") => {
		if(typeof rgb1=="string") rgb1 = avator.fn.rgbToArray(rgb1);
		if(typeof rgb2=="string") rgb2 = avator.fn.rgbToArray(rgb2);
		var rgb = []
		for(var i=0; i<3; i++){
			rgb[i] = ( ((rgb1[i]*rgb1[3]*(255-rgb2[3])/255)/255) + ((rgb2[i]*rgb2[3])/255) )
		}
		rgb[3] = rgb1[3] + (255-rgb1[3])/255*rgb2[3]
		return rgb
	},
	matrixColorize : (matrix,color) => {
		matrix.forEach((row,row_i)=>{
			row.forEach((column,column_i)=>{
				if(column==1) matrix[row_i][column_i]=color
				else matrix[row_i][column_i]=[255,255,255,0]
			})
		})
		return matrix
	},
	matrixCollect : (matrix1,matrix2) => {
		if(!matrix1 || !matrix1.length) return matrix2;
		matrix1.forEach((row,row_i)=>{
			row.forEach((column,column_i)=>{
				matrix1[row_i][column_i] = avator.fn.rgbCollect(matrix1[row_i][column_i],matrix2[row_i][column_i])
			})
		})
		return matrix1;
	},
	md5 : (d=Math.random()) => {
		d+="";
		function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}
		function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}
		function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}
		function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}
		function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}
		function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}
		function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}
		function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}
		function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}
		function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}
		function bit_rol(d,_){return d<<_|d>>>32-_}
		var result=M(V(Y(X(d),8*d.length)));return result.toLowerCase()
	}
}

// >>> Generate
avator.generate = (seed=""+Math.random(), layers=avator.layers, col=16, row=20 ) => {
	if(typeof seed=="string") seed = parseInt(avator.fn.md5(seed),16).toString(8).substr(0,layers.length*2).split("")
	var result = []
	for(var r=0; r<row; r++){
		result[r] = [];
		for(var c=0; c<col; c++){ result[r][c] = [0,0,0,0]; }
	}
	function addLayer(matrix,color){
		matrix = avator.fn.decodeMatrix(matrix)
		matrix = avator.fn.matrixColorize(matrix,color)
		avator.fn.matrixCollect(result,matrix)
	}
	layers.forEach((layer,i)=>{
		if(layer.bg && layer.bg.matrix && layer.bg.color) addLayer(layer.bg.matrix, layer.bg.color);
		if(layer.matrixes && layer.colors){
			addLayer(layer.matrixes[seed[i*2]], layer.colors[seed[i*2+1]]);
		}
		if(layer.fg && layer.fg.matrix && layer.fg.color) addLayer(layer.fg.matrix, layer.fg.color);
	})
	return {seed,matrix:result};
}