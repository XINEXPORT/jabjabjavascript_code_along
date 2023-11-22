/////////Social Media Liker from JabJabJavascript

function likes(names){
  switch(names.length){
    case 0: 
      return "no one likes this fossil";
      break;
      case 1:
        return `${names[0]} like this`;
        break;
        case 2:
          return `${names[0]} and ${names[1]} like this.`
          break;
          case 3:
            return `${names[0]}, ${names[1]}, and  ${names[2]} like this.`
  }
  
  if(names.length>3){
    return `${names[0]}, ${names[1]}, and ${names.length-2} other like this.`
  }
}

// likes(["Peter"]);
likes(["Peter", "john", "Zoe", "Skipper", "Howard"]);


////////COUNT VOWELS USING A FOR LOOP////////
function countVowels(str){
    const vowels = "aeiou";
    let counter = 0;
    for (let i=0; i<str.length; i++){
    if (vowels.includes(str[i])){
        counter++;
        }
    }
    return counter;
  }

  console.log(countVowels("racecar"))

  ////////COUNT VOWELS USING A FOR OFLOOP////////

  function countVowels(str){
    const vowels = "aeiou";
    let counter = 0;
    for (let elem of str){
    if (vowels.includes(elem)){
        counter++;
        }
    }
    return counter;
  }

  console.log(countVowels("racecar"))

  /////Return an Opposite number/////

function opposite(num){
    return -num
  }
  
  console.log(opposite(-14))

//////Even or Odd?//////////////

function checkEvenOrOdd(num){
    if (num % 2 === 0){
    return "It's even!";
    } else {
    return "It's odd";
  }}
  
  checkEvenOrOdd(8);
  checkEvenOrOdd(7);

///or//////

function checkEvenOrOdd(num){
    if (num % 2 === 0){
    return "It's even!";
    }
    return "It's odd";
  }
  
  checkEvenOrOdd(8);
  checkEvenOrOdd(7);

  ///or/////

  function checkEvenOrOdd(num){
    return num % 2 === 0 ? "Even" : "Odd";
  }

///take in the string that returns the middle characters for that string////
///if an even amount of characters? Return 1 character at the middle of the string
///if an odd amount of characters? Return 2 characters at the middle of the string


//FUNCTION TO CAPITALIZE EACH WORD IN THE ARRAY
function capitalize(word){
    return (word[0].toUpperCase() + word.slice(1).toLowerCase());
  }

//FUNCTION TO CONVERT A STRING INTO AN ARRAY
//CALL BACK FUNCTION TO CAPITALIZE EACH WORD IN THE ARRAY
//CONVERTS THE ARRAY BACK TO A STRING

  function jadenCase(str){
      let words = str.split(" ");
      let result = [];
  for (let word of words){
    result.push(capitalize(word))
  }
   return result.join(" ");
  }

  jadenCase("How can mirrors be real")

  



