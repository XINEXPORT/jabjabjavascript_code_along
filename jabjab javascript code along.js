////Social Media Liker from JabJabJavascript

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