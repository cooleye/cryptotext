// new CBPFWTabs( document.querySelectorAll( '.tabs' )[0] );
(function() {

    [].slice.call( document.querySelectorAll( '.tabs' ) ).forEach( function( el ) {
        new CBPFWTabs( el );
    });

})();

/**
 * 加密
 */
var crypto_str;
$("#encBtn").click(function(){

    var str = $("#msg").val();
    var password = $("#password");

    crypto_str = tools.getEncAse192(str,password);
    console.log("加密后的字符串：",crypto_str);
    $("#ciphertext").text(crypto_str)

})



/**
 * 解密
 */
var encode_str;
$("#decBtn").click(function(){

    var str = $("#msg2").val();
    var password = $("#password2");

    encode_str = tools.getDecAse192(str,password);
    console.log('解密后的字符串：',encode_str);

    $("#origintext").text(encode_str)

})


/**
 * 下载加密后的文件
 */
$("#download1").click(function(){

    if(crypto_str){
        var filename = '加密文件.txt';
        var content = crypto_str;
        _download(filename,content);
    }
    
})


/**
 * 下载解密后的文件
 */
$("#download2").click(function(){

    if(encode_str){
        var filename = '解密文件.txt';
        var content = encode_str;
        _download(filename,content);
    }
    
})



//下载文件
function _download(filename,content){
    var blob = new Blob([content], {type: 'text'}); 
    var a =document.getElementById('downloadFtsetBtn');
    if(a==undefined){
        a=document.createElement('a');
        a.id='downloadFtsetBtn';
        a.style.display='none';
        a.target='_blank';  
        document.body.appendChild(a);
    }
    try {
        var URL=window.URL || window.webkitURL;
        a.href=URL.createObjectURL(blob);
        a.download = filename;  
        if (typeof navigator.msSaveBlob == "function"){
            navigator.msSaveBlob(blob,filename);
　　　　　}
        a.click();
    } 
    catch (error) {
        console.error(error)
    }

}


