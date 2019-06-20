// 文件路径
if(typeof baseUrl != "undefined"? true: false){
    baseUrl = '/FirstStaticWebProject/'
}
// let baseUrl = '/'

let header_html =
    '    <img src="{baseUrl}/static/component/list-page-header/images/return-ico.png">\n' +
    '    <div class="title">\n' +
    '        浏阳（长沙东）碧桂园高尔夫花园方案\n' +
    '    </div>\n' +
    '    <div class="subtitle">\n' +
    '        {subTitle}\n' +
    '    </div>'

// 获取请求连接中携带的subTitle参数
function getUrlPara(paraName){
    let url = document.location.toString();
    let arrObj = url.split("?");
    if(arrObj.length > 1){
        let arr_list = arrObj[1].split("&");
        let arr;
        for(let i=0; i<arr_list.length; i++){
            arr = arr_list[i].split("=");
            if(arr != null && arr[0] == paraName){
                return arr[1];
            }
        }
    }
    else{
        return "";
    }
}
// 这里得进行URI解码，否则输出的是URI编码后的中文
let subTitle = decodeURI(getUrlPara("subTitle"));

// 格式化字符串
String.prototype.format = function(args) {
    let result = this;
    if (arguments.length < 1) {
        return result;
    }
    let data = arguments;
    if (arguments.length == 1 && typeof (args) == "object") {
        data = args;
    }
    for (let key in data) {
        let value = data[key];
        if (undefined != value) {
            // result = result.replace("{" + key + "}", value);
            // 替换字符串中匹配到的所有字符
            result = result.replace(new RegExp("{" + key + "}", 'g'), value);
        }
    }
    return result;
}

header_html = header_html.format({'baseUrl': baseUrl, 'subTitle': subTitle});
//console.log(header_html);

$("header").html(header_html);
// header样式
$("head").append("<link>");
css = $("head").children(":last");
css.attr({
    rel: "stylesheet",
    type: "text/css",
    // href: "/static/component/right-sidebar/css/right-sidebar.css",
    href: "{baseUrl}/static/component/list-page-header/css/list-page-header.css".format({'baseUrl': baseUrl}),
});

