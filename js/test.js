var mycrypto = require('./crypto-module');

var str = 'hello world';
var password = "123";

var crypto_str = mycrypto.getEncAse192(str,password);
console.log("加密后的字符串：",crypto_str);

var encode_str = mycrypto.getDecAse192(crypto_str,password);
console.log('解密后的字符串：',encode_str);
