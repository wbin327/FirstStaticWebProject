let user_data =
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


$("document").ready(function () {
    let data = get_set_local_data();
    render_footer(data);
    render_video(data);
})
// 每次打开首页时，向后台发送请求，获取用户的数据并保存到浏览器本地数据中，以供列表页和详情页使用
function get_set_local_data() {
    // 向后台发送数据，先跳过

    // 格式化数据
    user_data = user_data.format({'baseUrl': baseUrl});
    // 保存数据到sessionStorage中,key-value形式
    sessionStorage.setItem("user_data", user_data);
    return data;
}
// 渲染底部导航栏
function render_footer(data){
    // 渲染页面
    let footer_html = doT.template($("#footer-script").html())(data);
    //console.log(footer_html);
    $("body").append(footer_html);
    // 为底部导航栏计算宽度
    let width = 100/data.all_type.length + '%';
    $(".footer-navigation-content a").css({'width': width});
}
// 渲染video
function render_video(data){
    // 渲染页面
    // let video_html = doT.template($("#video-script").html())(data);
    // //console.log(video_html);
    // $("body").append(video_html);
    // console.log(data.video, data.video_image_path);
    $("#video-play").attr("poster", data.video_image_path);
    $("#video-play source").attr("src", data.video);
    // console.log($("#video-play").html());
}

// 视频播放相关JS
let options = {
    autoplay: false,
    controls: true,
    loop: true,
    preload: 'auto',
    height: 360,
    width: 639,
};
let player = videojs("video-play", options);;
$("#video-ico").click(function () {
    $("#video-group").show();
});
$("#video-close").click(function () {
    player.pause();
    $("#video-group").hide();
})
