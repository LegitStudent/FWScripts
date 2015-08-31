// take a string, remove all non-alphanumeric characters, split into array, copy the array to another (what if I compare it to its .reverse()?) if one doesn't match, return false.


H E L L O
0 1 2 3 4

4, 			O
3 4, 		L O
2 3 4, 		L L O
1 2 3 4, 	E L L O
0 1 2 3 4, 	H E L L O
check if llo is in the string

substr(start, length)

//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a multidimensional array.
	
// chunky function - this took a long time to solve.
	function chunk(arr, size) {
	  // Break it up.
	  // divide the array (numerically) so we can know
		
        var bigArray = [];
        var groups = Math.ceil(arr.length / size);
        for (var i = 0; i < groups; i++) {
			start = i * size;
			var ctr = 0;
			var tArray = [];
            for (var j = start; j < start + size; j++) {
				if (j < arr.length) {
                  tArray[ctr] = arr[j];
				  ctr += 1;
                }
            }
			bigArray.push(tArray);
		}
	  console.log(bigArray);
      return bigArray;
	}
	  // .push() returns the new length of an array
		
	console.log(chunk(['a', 'b', 'c', 'd'], 2));
    
	
//Roman Numerals

function convert(num) {
 // make an array for ones, tens, and hundredths
 var onesroman = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]; 
 var tensroman = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
 var hunsroman = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
 // separate the number into digits, ones to ones, tens to tens, hundreds to hundreds
 // 36 = 3 tens 6 ones
 // 3 - XXX
 // 6 -  VI
 // loop modulo until digits
 var snum = num.toString();
 var digitarray = [];
 for (var i = 0; i < snum.length; i++) {
	digitarray.push(Number(snum[i]));
 }
 //reverse the array
 digitarray = digitarray.reverse();
 // ones place would be at index 0, tens at index 1, hundreds at index 2
 var ones = "";
 var tens = "";
 var hundreds = "";
 var romanstring = "";
 if (digitarray.length === 3) {
	hundreds = hunsroman[digitarray[2]];
	tens = tensroman[digitarray[1]];
	ones = onesroman[digitarray[0]];
	romanstring = hundreds + tens + ones;
 }
 else if (digitarray.length === 2) {
	tens = tensroman[digitarray[1]];
	ones = onesroman[digitarray[0]];
	romanstring = tens + ones;
 }
 else {
	ones = onesroman[digitarray[0]];
	romanstring = ones;
 }
 
 return romanstring;
}

convert(36);

//pig latin translator
function translate(str) {
 var vowels = ["a","e","i","o","u","A","E","I","O","U"];
  var vowelstart = false;
 for (var i = 0; i < 10; i++) {
   if (str.charAt(0) === vowels[i]) {
     vowelstart = true;
   }
 }
 
  if (vowelstart) {
    return str + "way";
  }
  //else
  //take the first letter of the word
  //consonant index:
  var consonantindex = 5;
  var wordarray = str.split("");
  
  for (var j = 0; j < 10; j++) {
    if (wordarray.indexOf(vowels[j]) >= 0 && wordarray.indexOf(vowels[j]) < consonantindex) {
      consonantindex = j;
      console.log(consonantindex);
    }
  }
  
  console.log(consonantindex);
  //how do i extract the consonant?
  var firstletter = str.substr(0, consonantindex + 1);
  wordarray = wordarray.slice(consonantindex + 1);
  console.log(firstletter);
  wordarray.push(firstletter + "ay");
  str = wordarray.join("");
  
 return str;
}

translate("glove");

function pairwise(arr, arg) {
  if (arr.length < 1) {
    return 0;
  }
  
  // think about using the reduce method to
  // make a function that iterates through arr and subtracts it from arg
  var indices = [];
  for (var i = 0; i < arr.length; i++) {
    var findthis = arg - arr[i];
    // if it can find it, put its index into an array
    console.log("arr index: " + i);
    console.log("first con: " + arr.indexOf(findthis) >= 0);
    console.log("second con: " + indices.indexOf(arr.indexOf(findthis)) === -1);
    
    if (arr.indexOf(findthis) >= 0 && indices.indexOf(arr.indexOf(findthis)) === -1 && arr.indexOf(findthis) !== i) {
      indices.push(i);
      indices.push(arr.indexOf(findthis));
      
      arr[i] = undefined;
      arr[arr.indexOf(findthis)] = undefined;
    }
  }
  
  console.log("indices: " + indices);
  // reduce indices to return the sum
  var sum = indices.reduce(function(a, b) {
    return a + b;
  });
  
  return sum;
}

pairwise([0, 0, 0, 0, 1, 1], 1);

function() {
	var movieLists = [
			{
				name: "Instant Queue",
				videos : [
					{
						"id": 70111470,
						"title": "Die Hard",
						"boxarts": [
							{ width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
							{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 4.0,
						"bookmark": []
					},
					{
						"id": 654356453,
						"title": "Bad Boys",
						"boxarts": [
							{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
							{ width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 5.0,
						"bookmark": [{ id:432534, time:65876586 }]
					}
				]
			},
			{
				name: "New Releases",
				videos: [
					{
						"id": 65432445,
						"title": "The Chamber",
						"boxarts": [
							{ width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
							{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 4.0,
						"bookmark": []
					},
					{
						"id": 675465,
						"title": "Fracture",
						"boxarts": [
							{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
							{ width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
							{ width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 5.0,
						"bookmark": [{ id:432534, time:65876586 }]
					}
				]
			}
		];


	// Use one or more map, concatAll, and filter calls to create an array with the following items
	// [
	//	 {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
	//	 {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
	//	 {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
	//	 {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
	// ];
	// Complete this expression!
  
  return movieLists.
    map(function(list) {
    return list.videos;
    }).
    concatAll().
    map(function(video) {
    return {"id": video["id"],
            "title": video["title"],
            "boxart": video["boxarts"].
            filter(function(boxart) {
              return (boxart["width"] === 150 && boxart["height"] === 200);
            }).
            map(function(boxart) {
              return boxart["url"];
            }).toString()
           };
    });
}
		