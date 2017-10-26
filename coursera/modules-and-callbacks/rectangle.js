
module.exports = (x,y,callback) => {

    if (x <= 0 || y <= 0) {
     
        setTimeout(() => 
            callback(new Error("Rectangle dimensions should be greater than zero: l = "
                + x + ", and b = " + y), 
            null),
            2000);
    }
    else {
     
        setTimeout(() => 
            callback(null, {
            	/* no arguments are needed because of closures */
            	/* the inner function will continue to have access to the
            	   variables from the outer scope even after the outer
            	   function has returned

            	   perimeter: (x,y) => (2*(x+y)),
                   area:(x,y) => (x*y)

                   x and y will be accesible in this callback because they were
                   already passed int the function (x,y,callback) => {
            	*/
                perimeter: () => (2*(x+y)),
                area:() => (x*y)
            }), 
	       2000);
    }

}