// 模拟后端返回的Json
let list_page_data =
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
// 页面渲染
list_page_data = list_page_data.format({'baseUrl': baseUrl});
list_page_data = JSON.parse(list_page_data);
render_page();

function render_page(){
    // 根据相应的subTitle类型，渲染相应的页面
    let subTitle1 = getUrlPara('subTitle');
    let page_data = get_data(subTitle1);
    let main_box_html = doT.template($("#main-box-script").html())(page_data.subType[0]);
    let sub_box_html = doT.template($("#sub-box").html())(page_data.subType.slice(1));
    // console.log(main_box_html);
    // console.log(sub_box_html);
    $(".sub-box-group").html(sub_box_html);
    $(".main-box").html(main_box_html);
}
function get_data(subTitle){
    let result = '';
    for(let i=0; i<list_page_data.all_type.length; i++){
        if(list_page_data.all_type[i].name == subTitle){
            result = list_page_data.all_type[i];
        }
    }
    return result;
}

// 鼠标移入移出
$('.main-box').hover(show_black_screen, hide_black_screen)
function show_black_screen() {
    // $('.black-screen').show();
    $('.black-screen').css({'visibility': 'visible'});
}
function hide_black_screen() {
    // $('.black-screen').hide();
    $('.black-screen').css({'visibility': 'hidden'});
}

// 小图鼠标移入移出效果
$(".sub-box").hover(
    function (e) {
        // let target = $(e.target);
        let target = e.currentTarget;
        // debugger;
        target.children[1].style.visibility = 'visible';
    },
    function (e) {
        let target = e.currentTarget;
        target.children[1].style.visibility = 'hidden';
    })

// 点击图跳转
$(".display-content img").click(function (e) {
   let link = e.currentTarget.getAttribute("link");
   // 页面跳转
    window.location.href = link;
   // debugger
})

// 将右方导航栏下移
$(document).ready(function () {
    $(".right-sidebar-ico img").css({'top': '0.6rem'});
})