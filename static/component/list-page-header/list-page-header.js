// 文件路径
let baseUrl = '/FirstStaticWebProject/'
// let baseUrl = '/'

let header_html =
    '    <img src="{baseUrl}/static/component/list-page-header/images/return-ico.png">\n' +
    '    <div class="title">\n' +
    '        浏阳（长沙东）碧桂园高尔夫花园方案\n' +
    '    </div>\n' +
    '    <div class="subtitle">\n' +
    '        产品图纸\n' +
    '    </div>'

// 格式化字符串
String.prototype.format = function(args) {
    var result = this;
    if (arguments.length < 1) {
        return result;
    }
    var data = arguments;
    if (arguments.length == 1 && typeof (args) == "object") {
        data = args;
    }
    for (var key in data) {
        var value = data[key];
        if (undefined != value) {
            // result = result.replace("{" + key + "}", value);
            // 替换字符串中匹配到的所有字符
            result = result.replace(new RegExp("{" + key + "}", 'g'), value);
        }
    }
    return result;
}

header_html = header_html.format({'baseUrl': baseUrl});

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

