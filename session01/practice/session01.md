tepeof '' ===>   string
tepeof 'Ali' ===>   string
tepeof true ===>   boolean
tepeof function () {} ===>   function
tepeof (() => {} ) ===>   function
tepeof undefined ===>   undefined
tepeof null ===>   object
tepeof null ===>   object
tepeof tepeof null ===>   string
typeof typeof 'anythhing' ===>   string
typeof {name: 'Ali'} ===>   object
typeof NaN ===>   number
typeof new Date() ===>   object
typeof new BigInt('1000000000000') ===>   /
typeof class foo{} ===>   function
typeof Math ===>   object


======================================================================


Boolean (undefined) ===>   false
Boolean (null) ===>   false
Boolean (false) ===>   false
Boolean (-1) ===>   true
Boolean (+0) ===>   false
Boolean (-0) ===>   false
Boolean (0) ===>   false
Boolean (NaN) ===>   false
Boolean ('') ===>   false
Boolean ('hadi') ===>   false
Boolean (function () {}) ===>   true
Boolean ({name:'Ali'}) ===>   true



Number (undefined) ===>   NaN
Number (null) ===>   0
Number (false) ===>   0
Number (true) ===>   1
Number (10) ===>   10
Number (0) ===>   0
Number (+0) ===>   0
Number (-0) ===>   0
Number ('') ===>   0
Number ('Ali') ===>   NaN
Number ('true') ===>   NaN
Number (NaN) ===>   NaN
Number (function () {}) ===>   NaN
Number ({name:'hadi'}) ===>   NaN
Number (BigInt(1000000000000000000000000000000)) ===>   1e+30



String (null) ===> null
String (undefined) ===> undefined
String (false) ===> false
String (true) ===> true
String (10) ===> 10
String (NaN) ===> NaN
String (function(){}) ===> function(){}
String ({name:'Ali'}) ===> [object Object]
String (new Date()) ===> standard time in our area
String (BigInt('1000000000000000000000000000000')) ===>   1000000000000000000000000000000
String (BigInt(1000000000000000000000000000000)) ===>   1000000000000000019884624838656
String (BigInt(10000000000000000000000000000000)) ===>   9999999999999999635896294965248


======================================================================


10 + 2 ===>   12(number)
10 + '2' ===>   102(string)
10 - '2' ===>   8(number)
10 + '2' + 10 ===> 10210(string)
10 - '2' + 10 ===> 18(number)
10 + '' ===> 10(string)
null + '' ===> null(string)
undefined + '' ===> undefined(string)
null + undefined ===>   NaN
undefined + undefined ===>   NaN
null + null ===>   0(number)
true + 10 ===>   11(number)
false + 10 ===>   10(number)