
let data = null
// 导航栏html
let sidebar_html = `
<div class="right-sidebar-ico" id="right-sidebar-ico">
    <img src="{baseUrl}/static/component/right-sidebar/images/homeico.png">
</div>
<div class="right-sidebar" style="display: none;">
    <div class="main-sidebar">
        <div class="sidebar-close" id="sidebar-close">
            <img src="{baseUrl}/static/component/right-sidebar/images/closeico.png">
        </div>
        <div class="sidebar-logo">
            <img src="{baseUrl}/static/component/right-sidebar/images/right-sidebar-logo.png">
        </div>
        {{~it.types:value:index}}
        <a href="{{=value.link}}" class="main-sidebar-button" index="{{=index}}">{{=value.nodeName}}</a>
        {{~}}
    </div>
    <div class="secondary-sidebar" style="display: none;">
        <div class="secondary-button-group"></div>
    </div>
</div>
`

// 渲染侧边栏
render_right_sidebar()
function render_right_sidebar(){
    // 从sessionStorage中获取用户数据
    let sessionStorageData = sessionStorage.getItem("user_data");
    if(sessionStorageData){
        data = sessionStorageData;
    }
    data = JSON.parse(data);

    // console.log(data);
    sidebar_html = sidebar_html.format({'baseUrl': baseUrl});
    // 内容渲染
    sidebar_html =  doT.template(sidebar_html)(data);
    // console.log(sidebar_html);
    // 为页面添加侧边栏,只需要在页面中声明<div class="right-sidebar" id="right-sidebar></div>,自动往该标签中添加元素
    $(".right-sidebar-component").html(sidebar_html);
    // 引入导航栏样式
    $("head").append("<link>");
    css = $("head").children(":last");
    css.attr({
        rel: "stylesheet",
        type: "text/css",
        // href: "/static/component/right-sidebar/css/right-sidebar.css",
        href: "{baseUrl}/static/component/right-sidebar-v2/css/right-sidebar.css".format({'baseUrl': baseUrl}),
    });
}


// 侧边栏相关JS
$("#sidebar-close img").click(function () {
    $(".right-sidebar").fadeOut();
    $('.secondary-sidebar').hide();
})
$("#right-sidebar-ico").click(function () {
    $(".right-sidebar").fadeIn();
})

let secondary_sidebar =
    `
    {{~it:value:index}}
        <div class="secondary-button">
            <a href="{{=value.link}}">{{=value.nodeName}}</a>
        </div>
    {{~}}
    `;

// 鼠标滑过时显示相应的导航栏
$(".main-sidebar a").hover(function (e) {
        // 显示子导航栏
        $('.secondary-sidebar').show();
        // let type_name = e.currentTarget.innerText;
        // 获取当前元素的索引
        let index = e.currentTarget.getAttribute("index");
        let html = doT.template(secondary_sidebar)(data.types[index].children);
        // 删除添加子元素
        $('.secondary-button-group').empty();
        $('.secondary-button-group').append(html);
    },
    function () {
        // $('.secondary-button-group').empty();
        // 离开时隐藏
        // $('.secondary-sidebar').hide();
    })
// $(".main-sidebar").mouseenter(function () {
//     $('.secondary-sidebar').hide();
// })

