function isEvenNumber(n){
    if(n % 2 == 0){
        return true;
    }else{
        return false;
    }
}


function toEvenNumber(n){
    if(n % 2 == 0){
        return n;
    }else{
        return n + 1;
    }
}


function toOddNumber(n){
    if(n % 2 ==! 0){
        return n;
    }else{
        return n + 1;
    }
}


function sumN(n) {
  var a = [];
  if (n>0) {
    for (var i = 1; i <= n; i++) {
      a.push(i);
    }
  }else {
    for (var i = n; i <= 1; i++) {
      a.push(i);
    }
  }
  return a;
}
