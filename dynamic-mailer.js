function printLetter(to) {
	// from and to object
	// {name, street, city, state, zip}
	// ========================================
	// | Zach Mays                            |
	// | 124 NW 20th                          |
	// | OKC, OK 73106                        |
	// |                                      |
	// |						Name                      |
	// |						Address                   |
	// |						City, State, Zip          |
	// ========================================
    console.log("========================================")
    dynamicLine(2, from.name);
    dynamicLine(2, from.street);
    dynamicLine(2, `${from.city}, ${from.state}, ${from.zip}`)
    dynamicLine(2,"");
    dynamicLine(2, to.name);
	dynamicLine(2,to.street);
    dynamicLine(2, `${to.city}, ${to.state}, ${to.zip}`)
	console.log("========================================")
}

const from = {
	name: "Zach Mays",
	street: "1234 NW 20th",
	state: "OK",
	city: "OKC",
	zip: "73106"
}

const to = {
	name: "Bobby Rockers",
	street: "1589 NW 4th St",
	state: "OK",
	city: "OKC",
	zip: "73105"
}

console.log(printLetter(to))



function dynamicLine(left, content) {  
  const width = 38;
  const right = width - left - content.length;  
  var line = pad(content, left);
  line += content;
 
  var line = pad(content, right);
  line += "|";
  return line;
}


function pad(string, amount){
    for(let i = 0; i < amount; i++){
        string += " ";
    }
    return string;
}
printLetter(to);