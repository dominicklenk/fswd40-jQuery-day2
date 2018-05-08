var object1 = {
	 name : "ring",
	 price : 20,
	 count : 1 ,
	 countsum1 : function(){
	 	return this.count ++ ;
	 }
	 countminus1 : function(){
		return this.count -- ;
	}
}

var object2 = {
	name : "watch",
	price : 60,
	count : 1,
	countsum2 : function(){
		return this.count ++ ;
	}
	countminus2: function(){
		return this.count -- ;
	}
}

var object3 = {
	name : "bracelet",
	price : 40,
	count : 1,
	countsum3 : function(){
		return this.count ++ ;
	}
	countminus3: function(){
		return this.count -- ;
	}
}
