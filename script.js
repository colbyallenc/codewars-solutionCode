// Find the greatest corresponding sequence of 5 digit interger in given number
//Complete the solution so that it returns the largest five digit number found 
// within the number given.. The number will be passed in as a string of only digits.
//  It should return a five digit integer. The number passed may be as large as 1000 digits.
function solution(digits){
    var temp = String(digits);
    var greatest = parseInt(temp.slice(0,5));
  
  
    for (var i = 0;i<temp.length;i++){
   
      if(temp.slice(i, i+5) > greatest){ 
        greatest = parseInt(temp.slice(i,i+5))

        //for every index, i can join it with the next 4 characters
	//then i can convert it to an integer
	//and compare it to the previously stored largest number (0 if first index)
	//if the current is greater, assign the value to the largest number variable
	//else the variable retains the same value and we move onto the next index
       }
    }
     return greatest 
  }
  
  
  solution(1234567890);

//   ********************************************************************************************


// Triangular numbers are so called because of the equilateral triangular 
// shape that they occupy when laid out as dots. i.e.

// Return the nth triangular number
function triangular( n ) {
 
	var sum = 0;

	if (n <= 0) {
		return 0;
	} else {
		for (i = n; i > 0; i--) {
			sum += i
		}
	}
	return sum;
}


