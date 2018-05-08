var object1 = {
	 name : "ring",
	 price : 20,
	 count : 1,
	 countsum1 : function(){
	 	return this.count ++ ;
	 },
	 countminus1 : function(){
		return this.count -- ;
	}
};

var object2 = {
	name : "watch",
	price : 60,
	count : 1,
	countsum2 : function(){
		return this.count ++ ;
	},
	countminus2: function(){
		return this.count -- ;
	}
};

var object3 = {
	name : "bracelet",
	price : 40,
	count : 1,
	countsum3 : function(){
		return this.count ++ ;
	},
	countminus3: function(){
		return this.count -- ;
	}
};
var array =[];
var sum =0;
 function addtocart1(){
    array.push(object1);
    result();
 }

 function addtocart2(){
    array.push(object2);
    result();
 }

 function addtocart3(){
   array.push(object3);
   result();
 }
var sum =0;

function result(){
	
for(var i=0; i<array.length; i++){
	sum += array[i].price;
}
document.getElementById("result").innerHTML =
	 sum;
}


