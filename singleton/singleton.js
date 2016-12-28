var mySingleton = (function(){
	//单例对象保持者
	var instance;
	
	function init(){
		var randomNum = Math.random();
		return {
			getRandomNum: function(){
				randomNum;
			}
		}
	}
	
	return {
		getInstance: function(){
			if(!instance){
				instance = init();
			}
			return instance;
		}
	}
}());

//example
var singleton1 = mySingleton.getInstance();
var singleton2 = mySingleton.getInstance();
console.log(singleton1 === singleton2);
console.log(singleton1.getRandomNum() === singleton2.getRandomNum());
