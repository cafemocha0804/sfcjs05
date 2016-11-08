/* 練習問題２
数値を 1 つ引数としてとる関数
偶数なら true 、そうでない場合は false を返す*/
function isEvenNumber(n){
    if(n % 2 == 0){
        return true;
    }else{
        return false;
    }
}

//練習問題３　与えられた整数を偶数にする関数
function toEvenNumber(n){
    if(n % 2 == 0){
        return n;
    }else{
        return n + 1;
    }
}

//練習問題４　与えられた整数を奇数にする関数
function toOddNumber(n){
    if(n % 2 ==! 0){
        return n;
    }else{
        return n + 1;
    }
}

/*練習問題７
1から引数で指定された数以下の整数を全て返す関数
引数には負の数が指定されることもある*/
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
