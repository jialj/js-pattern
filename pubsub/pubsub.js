/**
 * according to https://github.com/addyosmani/pubsubz
 */
var pubsub = {};
(function (ps){
	var themess = {},
		subUid = -1;
		
	//发布者发布通知
	ps.publish = function(theme, args){
		if(themess[theme] === undefined){
			return false;
		}
		
		var subscriberss = themess[theme],
			len = subscriberss ?subscriberss.length : 0;
			
		while (len--){
			subscriberss[len].func(theme, args);
		}
	};
	
	//订阅通知
	ps.subscribe = function(theme, func){
		if(!themess[theme]){
			themess[theme] = [];
		}
		
		var token = (++subUid)+"" ;
		themess[theme].push({
			func : func,
			token : token
		})
		
		return token;
	};
	
	//取消订阅
	ps.unsubscribe = function(token){
		for(var m in themess){
			if(themess[m]){
				for(var i=0,j=themess[m].length; i<j; i++){
					if(themess[m][i].token === token){
						themess[m].splice(i,1);
						return token
					}
				}
			}
		}
		return false;
	}
	
}(pubsub))


var test = function(theme,data){
	console.log( theme+ ":" + data);
}

var subscription = pubsub.subscribe('theme test',test);

pubsub.publish('theme test','Hello anan');
pubsub.publish('theme test',[1,2,3,4]);
pubsub.publish('theme test',{name:'anan',age:'1'});
