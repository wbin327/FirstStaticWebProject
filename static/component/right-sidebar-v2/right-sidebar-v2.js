let data = `
[
    {
        "name": "项目背景",
        "link": "{baseUrl}/list-page/list-page-project.html?subTitle=项目背景",
        "subType": [
            {
                "name": "项目背景",
                "link": "{baseUrl}/details-page/details-page.html?subTitle=项目背景&image_index=0"
            },
            {
                "name": "区位分析",
                "link": "{baseUrl}/details-page/details-page.html?subTitle=项目背景&image_index=1"
            },
            {
                "name": "项目背景",
                "link": "{baseUrl}/details-page/details-page.html?subTitle=项目背景&image_index=2"
            }
        ]
    },
    {
        "name": "设计策略",
        "link": "{baseUrl}/list-page/list-page-strategy.html?subTitle=设计策略",
        "subType": [
            {
                "name": "高尔夫精神",
                "link": "{baseUrl}/details-page/details-page.html?subTitle=设计策略&image_index=0"
            },
            {
                "name": "绿色家园（多）",
                "link": "{baseUrl}/details-page/details-page.html?subTitle=设计策略&image_index=1"
            },
            {
                "name": "生态修复",
                "link": "{baseUrl}/details-page/details-page.html?subTitle=设计策略&image_index=3"
            }
        ]
    },
    {
        "name": "设计成果",
        "link": "{baseUrl}/list-page/list-page-presentation1.html?subTitle=设计成果",
        "subType": [
            {
                "name": "鸟瞰图",
                "link": "{baseUrl}/details-page/details-page.html?subTitle=设计成果&image_index=0"
            },
            {
                "name": "平台透视图",
                "link": "{baseUrl}/details-page/details-page.html?subTitle=设计成果&image_index=1"
            },
            {
                "name": "平台半鸟瞰图",
                "link": "{baseUrl}/details-page/details-page.html?subTitle=设计成果&image_index=2"
            },
            {
                "name": "整体鸟瞰图",
                "link": "{baseUrl}/details-page/details-page.html?subTitle=设计成果&image_index=3"
            },
            {
                "name": "规划总平面（多）",
                "link": "{baseUrl}/details-page/details-page.html?subTitle=设计成果&image_index=4"
            },
            {
                "name": "指标表",
                "link": "{baseUrl}/details-page/details-page.html?subTitle=设计成果&image_index=6"
            },
            {
                "name": "B区放大总平面",
                "link": "{baseUrl}/details-page/details-page.html?subTitle=设计成果&image_index=7"
            },
            {
                "name": "分期规划",
                "link": "{baseUrl}/details-page/details-page.html?subTitle=设计成果&image_index=8"
            },
            {
                "name": "围合院落",
                "link": "{baseUrl}/details-page/details-page.html?subTitle=设计成果&image_index=9"
            },
            {
                "name": "土方节省",
                "link": "{baseUrl}/details-page/details-page.html?subTitle=设计成果&image_index=10"
            },
            {
                "name": "设计核心",
                "link": "{baseUrl}/details-page/details-page.html?subTitle=设计成果&image_index=11"
            },
            {
                "name": "户型分析",
                "link": "{baseUrl}/details-page/details-page.html?subTitle=设计成果&image_index=12"
            },
            {
                "name": "采光同风",
                "link": "{baseUrl}/details-page/details-page.html?subTitle=设计成果&image_index=13"
            },
            {
                "name": "回归生活（多）",
                "link": "{baseUrl}/details-page/details-page.html?subTitle=设计成果&image_index=14"
            },
            {
                "name": "产品参数",
                "link": "{baseUrl}/details-page/details-page.html?subTitle=设计成果&image_index=18"
            },
            {
                "name": "功能分析图",
                "link": "{baseUrl}/details-page/details-page.html?subTitle=设计成果&image_index=19"
            },
            {
                "name": "景观分析",
                "link": "{baseUrl}/details-page/details-page.html?subTitle=设计成果&image_index=20"
            }
        ]
    },
    {
        "name": "产品图纸",
        "link": "{baseUrl}/list-page/list-page-product1.html?subTitle=产品图纸",
        "subType": [
            {
                "name": "别墅共性优点",
                "link": "{baseUrl}/details-page/details-page.html?subTitle=产品图纸&image_index=0"
            },
            {
                "name": "独栋A型",
                "link": "{baseUrl}/details-page/details-page.html?subTitle=产品图纸&image_index=1"
            },
            {
                "name": "独栋B型（多）",
                "link": "{baseUrl}/details-page/details-page.html?subTitle=产品图纸&image_index=2"
            },
            {
                "name": "独栋C型（多）",
                "link": "{baseUrl}/details-page/details-page.html?subTitle=产品图纸&image_index=4"
            },
            {
                "name": "独栋别墅优点",
                "link": "{baseUrl}/details-page/details-page.html?subTitle=产品图纸&image_index=6"
            },
            {
                "name": "叠拼别墅（多）",
                "link": "{baseUrl}/details-page/details-page.html?subTitle=产品图纸&image_index=7"
            },
            {
                "name": "叠拼别墅优点",
                "link": "{baseUrl}/details-page/details-page.html?subTitle=产品图纸&image_index=11"
            },
            {
                "name": "联排别墅（多）",
                "link": "{baseUrl}/details-page/details-page.html?subTitle=产品图纸&image_index=12"
            },
            {
                "name": "联排别墅优点",
                "link": "{baseUrl}/details-page/details-page.html?subTitle=产品图纸&image_index=17"
            }
        ]
    }
]
`

// 格式化字符串
// secondary_sidebar_product = secondary_sidebar_product.format({'baseUrl': baseUrl});
// secondary_sidebar_presentation = secondary_sidebar_presentation.format({'baseUrl': baseUrl});
// secondary_sidebar_strategy = secondary_sidebar_strategy.format({'baseUrl': baseUrl});
// secondary_sidebar_project = secondary_sidebar_project.format({'baseUrl': baseUrl});
data = data.format({'baseUrl': baseUrl});
// data = JSON.parse(data);
// console.log(data);

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
        <% for(let i = 0; i < data.length; i++){ %>
            <a href="<%= data[i].link %>" class="main-sidebar-button"><%= data[i].name %></a>
         <% } %>
    </div>
    <div class="secondary-sidebar" style="display: none;">
        <div class="secondary-button-group"></div>
    </div>
</div>
`

//     <% for(let i=0; i < data.length - 1; i++){ %>
// <a href="<%= data[i].link %>" class="main-sidebar-button"><%= data[i].name %></a>
//         <% } %>
// {{ each data}}
// <a href="{{$data.link}}" class="main-sidebar-button">{{$data.name}}</a>
// {{/each}}

sidebar_html = sidebar_html.format({'baseUrl': baseUrl});
sidebar_html = template.render(sidebar_html, {data: data});
console.log(sidebar_html);

// 为页面添加侧边栏,只需要在页面中声明<div class="right-sidebar" id="right-sidebar></div>,自动往该标签中添加元素
$(".right-sidebar-component").html(sidebar_html);

// 导航栏样式
$("head").append("<link>");
css = $("head").children(":last");
css.attr({
    rel: "stylesheet",
    type: "text/css",
    // href: "/static/component/right-sidebar/css/right-sidebar.css",
    href: "{baseUrl}/static/component/right-sidebar/css/right-sidebar.css".format({'baseUrl': baseUrl}),
});

// 侧边栏相关JS
$("#sidebar-close img").click(function () {
    $(".right-sidebar").fadeOut();
})
$("#right-sidebar-ico").click(function () {
    $(".right-sidebar").fadeIn();
})

// 鼠标滑过时显示相应的导航栏
$(".main-sidebar a:eq(0)").hover(function (e) {
    getText(e);
        // 显示子导航栏
        $('.secondary-sidebar').show();
        // 删除所有子元素
        $('.secondary-button-group').empty();
        $('.secondary-button-group').append(secondary_sidebar_project);
    },
    function () {
        // 离开时隐藏
        $('.secondary-sidebar').hide();
    })
$(".main-sidebar a:eq(1)").hover(function () {
        // 显示子导航栏
        $('.secondary-sidebar').show();
        // 删除所有子元素
        $('.secondary-button-group').empty();
        $('.secondary-button-group').append(secondary_sidebar_strategy);
    },
    function () {
        // 离开时隐藏
        $('.secondary-sidebar').hide();
    })
$(".main-sidebar a:eq(2)").hover(function () {
        // 显示子导航栏
        $('.secondary-sidebar').show();
        // 删除所有子元素
        $('.secondary-button-group').empty();
        $('.secondary-button-group').append(secondary_sidebar_presentation);
    },
    function () {
        // 离开时隐藏
        $('.secondary-sidebar').hide();
    })
$(".main-sidebar a:eq(3)").hover(function () {
        // 显示子导航栏
        $('.secondary-sidebar').show();
        // 删除所有子元素
        $('.secondary-button-group').empty();
        $('.secondary-button-group').append(secondary_sidebar_product);
    },
    function () {
        // 离开时隐藏
        $('.secondary-sidebar').hide();
    }
)
// 获取元素文本
function getText(e){
    console.log(e);
    console.log($(e.currentTarget).innerText);
}


