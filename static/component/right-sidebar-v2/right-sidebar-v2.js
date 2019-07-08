let data =
    `
{
    "company_logo": "",
    "project_introduction": "",
    "video": "./static/movies/Changsha%20Liuyang%20golf%20villa%20community-video.mp4",
    "video_image_path": "{baseUrl}/static/images/index-images/closeico.png",
    "footer_image_path": "{baseUrl}/static/images/index-images/footer-image.png",
    "all_type": [
        {
            "name": "项目背景",
            "link": "{baseUrl}/list-page-v2/list-page-v2.html?subTitle=项目背景",
            "image_path": "{baseUrl}/static/images/index-images/project-background-ico.png",
            "subType": [
                {
                    "name": "项目背景",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=项目背景&image_index=0",
                    "image_path": ["{baseUrl}/static/images/details-page-images//project-images/project-background.png"]
                },
                {
                    "name": "区位分析",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=项目背景&image_index=1",
                    "image_path": ["{baseUrl}/static/images/details-page-images//project-images/location-analysis.png"]
                },
                {
                    "name": "周边现状",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=项目背景&image_index=2",
                    "image_path": ["{baseUrl}/static/images/details-page-images//project-images/around-analysis.png"]
                }
            ]
        },
        {
            "name": "设计策略",
            "link": "{baseUrl}/list-page-v2/list-page-v2.html?subTitle=设计策略",
            "image_path": "{baseUrl}/static/images/index-images/strategy-ico.png",
            "subType": [
                {
                    "name": "高尔夫精神",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=设计策略&image_index=0",
                    "image_path": ["{baseUrl}/static/images/details-page-images/strategy-images/golf-spirit.png"]
                },
                {
                    "name": "绿色家园（多）",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=设计策略&image_index=1",
                    "image_path": [
                        "{baseUrl}/static/images/details-page-images/strategy-images/green-home1.png",
                        "{baseUrl}/static/images/details-page-images/strategy-images/green-home2.png"
                    ]
                },
                {
                    "name": "生态修复",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=设计策略&image_index=3",
                    "image_path": ["{baseUrl}/static/images/details-page-images/strategy-images/ecology-repaired1.png"]
                }
            ]
        },
        {
            "name": "设计成果",
            "link": "{baseUrl}/list-page-v2/list-page-v2.html?subTitle=设计成果",
            "image_path": "{baseUrl}/static/images/index-images/gain-ico.png",
            "subType": [
                {
                    "name": "鸟瞰图",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=设计成果&image_index=0",
                    "image_path": ["{baseUrl}/static/images/details-page-images/presentation-images/aerial-view.png"]
                },
                {
                    "name": "平台透视图",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=设计成果&image_index=1",
                    "image_path": ["{baseUrl}/static/images/details-page-images/presentation-images/perspective.png"]
                },
                {
                    "name": "平台半鸟瞰图",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=设计成果&image_index=2",
                    "image_path": ["{baseUrl}/static/images/details-page-images/presentation-images/binary-aerial-view.png"]
                },
                {
                    "name": "整体鸟瞰图",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=设计成果&image_index=3",
                    "image_path": ["{baseUrl}/static/images/details-page-images/presentation-images/general-aerial-view.png"]
                },
                {
                    "name": "规划总平面（多）",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=设计成果&image_index=4",
                    "image_path": [
                        "{baseUrl}/static/images/details-page-images/presentation-images/master-plan1.png",
                        "{baseUrl}/static/images/details-page-images/presentation-images/master-plan2.png"
                    ]
                },
                {
                    "name": "指标表",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=设计成果&image_index=6",
                    "image_path": ["{baseUrl}/static/images/details-page-images/presentation-images/ksslzb.png"]
                },
                {
                    "name": "B区放大总平面",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=设计成果&image_index=7",
                    "image_path": ["{baseUrl}/static/images/details-page-images/presentation-images/b-size.png"]
                },
                {
                    "name": "分期规划",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=设计成果&image_index=8",
                    "image_path": ["{baseUrl}/static/images/details-page-images/presentation-images/stage-planning.png"]
                },
                {
                    "name": "围合院落",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=设计成果&image_index=9",
                    "image_path": ["{baseUrl}/static/images/details-page-images/presentation-images/yard.png"]
                },
                {
                    "name": "土方节省",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=设计成果&image_index=10",
                    "image_path": ["{baseUrl}/static/images/details-page-images/presentation-images/save.png"]
                },
                {
                    "name": "设计核心",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=设计成果&image_index=11",
                    "image_path": ["{baseUrl}/static/images/details-page-images/presentation-images/design.png"]
                },
                {
                    "name": "户型分析",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=设计成果&image_index=12",
                    "image_path": ["{baseUrl}/static/images/details-page-images/presentation-images/apartment.png"]
                },
                {
                    "name": "采光同风",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=设计成果&image_index=13",
                    "image_path": ["{baseUrl}/static/images/details-page-images/presentation-images/lighting.png"]
                },
                {
                    "name": "回归生活（多）",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=设计成果&image_index=14",
                    "image_path": [
                        "{baseUrl}/static/images/details-page-images/presentation-images/life1.png",
                        "{baseUrl}/static/images/details-page-images/presentation-images/life2.png",
                        "{baseUrl}/static/images/details-page-images/presentation-images/life3.png",
                        "{baseUrl}/static/images/details-page-images/presentation-images/life4.png"
                    ]
                },
                {
                    "name": "产品参数",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=设计成果&image_index=18",
                    "image_path": ["{baseUrl}/static/images/details-page-images/presentation-images/product.png"]
                },
                {
                    "name": "功能分析图",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=设计成果&image_index=19",
                    "image_path": ["{baseUrl}/static/images/details-page-images/presentation-images/function-analysis.png"]
                },
                {
                    "name": "景观分析",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=设计成果&image_index=20",
                    "image_path": ["{baseUrl}/static/images/details-page-images/presentation-images/landcape-analysis.png"]
                }
            ]
        },
        {
            "name": "产品图纸",
            "link": "{baseUrl}/list-page-v2/list-page-v2.html?subTitle=产品图纸",
            "image_path": "{baseUrl}/static/images/index-images/drawing-ico.png",
            "subType": [
                {
                    "name": "别墅共性优点",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=产品图纸&image_index=0",
                    "image_path": ["{baseUrl}/static/images/details-page-images/product-images/same-advantage.png"]
                },
                {
                    "name": "独栋A型",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=产品图纸&image_index=1",
                    "image_path": ["{baseUrl}/static/images/details-page-images/product-images/a-type.png"]
                },
                {
                    "name": "独栋B型（多）",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=产品图纸&image_index=2",
                    "image_path": [
                        "{baseUrl}/static/images/details-page-images/product-images/b-type1.png",
                        "{baseUrl}/static/images/details-page-images/product-images/b-type2.png"
                    ]
                },
                {
                    "name": "独栋C型（多）",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=产品图纸&image_index=4",
                    "image_path": [
                        "{baseUrl}/static/images/details-page-images/product-images/c-type1.png",
                        "{baseUrl}/static/images/details-page-images/product-images/c-type2.png"
                    ]
                },
                {
                    "name": "独栋别墅优点",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=产品图纸&image_index=6",
                    "image_path": ["{baseUrl}/static/images/details-page-images/product-images/single-advantage.png"]
                },
                {
                    "name": "叠拼别墅（多）",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=产品图纸&image_index=7",
                    "image_path": [
                        "{baseUrl}/static/images/details-page-images/product-images/diepin1.png",
                        "{baseUrl}/static/images/details-page-images/product-images/diepin2.png",
                        "{baseUrl}/static/images/details-page-images/product-images/diepin3.png",
                        "{baseUrl}/static/images/details-page-images/product-images/diepin4.png"
                    ]
                },
                {
                    "name": "叠拼别墅优点",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=产品图纸&image_index=11",
                    "image_path": ["{baseUrl}/static/images/details-page-images/product-images/diepin-advantage.png"]
                },
                {
                    "name": "联排别墅（多）",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=产品图纸&image_index=12",
                    "image_path": [
                        "{baseUrl}/static/images/details-page-images/product-images/townhouse1.png",
                        "{baseUrl}/static/images/details-page-images/product-images/townhouse2.png",
                        "{baseUrl}/static/images/details-page-images/product-images/townhouse3.png",
                        "{baseUrl}/static/images/details-page-images/product-images/townhouse4.png",
                        "{baseUrl}/static/images/details-page-images/product-images/townhouse5.png"
                    ]
                },
                {
                    "name": "联排别墅优点",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=产品图纸&image_index=17",
                    "image_path": ["{baseUrl}/static/images/details-page-images/product-images/townhouse-advantage.png"]
                }
            ]
        }
    ]
}
    `

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
        {{~it.all_type:value:index}}
        <a href="{{=value.link}}" class="main-sidebar-button">{{=value.name}}</a>
        {{~}}
    </div>
    <div class="secondary-sidebar" style="display: none;">
        <div class="secondary-button-group"></div>
    </div>
</div>
`
// 页面渲染
render_right_sidebar();
function render_right_sidebar(){
    // 从sessionStorage
    let sessionStorageData = sessionStorage.getItem("user_data");
    if(sessionStorageData != null){
        data = sessionStorageData;
    }
    // 格式化字符串
    data = data.format({'baseUrl': baseUrl});
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
            <a href="{{=value.link}}">{{=value.name}}</a>
        </div>
    {{~}}
    `;

// 鼠标滑过时显示相应的导航栏
$(".main-sidebar a").hover(function (e) {
        // 显示子导航栏
        $('.secondary-sidebar').show();
        let type_name = e.currentTarget.innerText;
        for(let i=0; i<data.all_type.length; i++){
            if(data.all_type[i].name == type_name){
                // console.log(data.all_type[i]);
                let html = doT.template(secondary_sidebar)(data.all_type[i].subType);
                // console.log(html);
                // 删除添加子元素
                $('.secondary-button-group').empty();
                $('.secondary-button-group').append(html);
            }
        }
    },
    function () {
        // $('.secondary-button-group').empty();
        // 离开时隐藏
        // $('.secondary-sidebar').hide();
    })
// $(".main-sidebar").mouseenter(function () {
//     $('.secondary-sidebar').hide();
// })

