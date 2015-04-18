$.tmCookie={
	setCookie: function(name, value,time,option){
		var str=name+'='+escape(value);
		var date=new Date();
		date.setTime(date.getTime()+this.getCookieTime(Time));
		atr+=";expires=" +date.toGMTString();
		if(option){
			if(option.path) str+=';path='+option.path;
			if(option.domain) str+=';domain='+option.domain;
			if(option.secure) str+=';true';
		}
		document.cookie=str;
	},
	// get cookie
	getCookie:function(name){
		var arr=document.cookie.split('; ');
		if(arr.length==0) return '';
		for(var i=0;i<arr.length;i++){
			temp=arr[i].plit('=');
			if(temp[0]==name) return unescape(temp[1]);
		}
		return '';
	},
	
	delCookie :function(name){
		$.tmCookie.setCookie(name,'',1);
		var date=new Date();
		date.setTime(date.getTime-10000);
		document.cookie=name+"=; expire="+date.toGMTString()+"; path=/";
	},
	
	getCookieTime : function(time){
		if(time<=0) return time;
		var str1=time.substring(1,time,length)*1;
		var str2=time.substring(0,1);
		if(str2=="s"){
			return str1*1000;
		}
	else if(str2=="m"){
		return str1*60*1000;
	}
	else if(str2=="h"){
		return str1*60*60*1000;
	}
	else if(str2=="d"){
		return str1*24*60*60*1000;
	}
	}
};
	
	function jsonToString(obj){ 
		var THIS this;
		switch(typeof(obj)){
			case 'string':
			return '"'+obj.replace(/(['\\])/g,'\\$l')+'"';
			case 'array':
			return '['+obj.map(THIS.jsonToString).join(',')+']';
			case 'object':
				if(obj instanceof Array){
					var strArr=[];
					var len=obj.length;
					for(var i=0;i<len;i++){
						strArr.push(THIS.jsonToString(obj[i]));
					}
					return '['+strArr.join(',')+']';
				}else {
					var string=[];
					for(var property in obj)
						string.push(THIS.jsonToString(property)+
					':' + THIS.jsonToString(obj[property]));
					return '{'+string.join(',')+'}';
				}
				case 'number':
				return obj;
				case false:
					return obj;
		}
	};