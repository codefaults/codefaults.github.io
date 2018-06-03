(function () {
    'use strict';
    
    var agent = navigator.userAgent
    var app = navigator.appName

    function jump(url) {
        var meta = document.createElement('meta');
        meta.setAttribute('http-equiv', 'refresh');
        meta.setAttribute('content', '0;URL=' + (/^(http|https):\/\//.test(url.substr(0, 8)) ? url : 'http://' + url));
        document.getElementsByTagName('head')[0].appendChild(meta);
    }

    if (/Internet Explorer/i.test(agent)) {
        jump('https://www.baidu.com');
    }

})()