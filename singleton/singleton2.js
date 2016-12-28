var mySingleton = (function(){
	var instance;
	function CreatSingleton(options){
		this.name = options.name;
		this.age = options.age;
	}
	
	return {
		getInstance : function( options ){
			if(instance === undefined){
				instance = new CreatSingleton(options);
			}
			return instance;
		}
	}
}())

//example
var singleton = mySingleton.getInstance({name:'1',age:'安安'});
console.log(singleton.name);
console.log(singleton.age);