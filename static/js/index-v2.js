let user_data =
    `
{
    "company_logo": "./static/images/index-images/company-logo.png",
    "project_introduction": "./static/images/index-images/project-msg.png",
    "video": "./static/movies/Changsha%20Liuyang%20golf%20villa%20community-video.mp4",
    "video_image": "./static/images/index-images/video-background.png",
    "footer_image": "./static/images/index-images/footer-image.png",
    "background_image": "./static/images/index-images/background.jpg",
    "types": [
        {
            "nodeName": "项目背景",
            "link": "{baseUrl}/list-page-v2/list-page-v2.html?typeIndex=0",
            "iconPath": "{baseUrl}/static/images/index-images/project-background-ico.png",
            "children": [
                {
                    "nodeName": "项目背景",
                    "link": "{baseUrl}/details-page/details-page-v2.html?typeIndex=项目背景&image_index=0",
                    "imagesPath": ["{baseUrl}/static/images/details-page-images//project-images/project-background.png"]
                },
                {
                    "nodeName": "区位分析",
                    "link": "{baseUrl}/details-page/details-page-v2.html?typeIndex=项目背景&image_index=1",
                    "imagesPath": ["{baseUrl}/static/images/details-page-images//project-images/location-analysis.png"]
                },
                {
                    "nodeName": "周边现状",
                    "link": "{baseUrl}/details-page/details-page-v2.html?typeIndex=项目背景&image_index=2",
                    "imagesPath": ["{baseUrl}/static/images/details-page-images//project-images/around-analysis.png"]
                }
            ]
        },
        {
            "nodeName": "设计策略",
            "link": "{baseUrl}/list-page-v2/list-page-v2.html?typeIndex=1",
            "iconPath": "{baseUrl}/static/images/index-images/strategy-ico.png",
            "children": [
                {
                    "nodeName": "高尔夫精神",
                    "link": "{baseUrl}/details-page/details-page-v2.html?typeIndex=设计策略&image_index=0",
                    "imagesPath": ["{baseUrl}/static/images/details-page-images/strategy-images/golf-spirit.png"]
                },
                {
                    "nodeName": "绿色家园（多）",
                    "link": "{baseUrl}/details-page/details-page-v2.html?typeIndex=设计策略&image_index=1",
                    "imagesPath": [
                        "{baseUrl}/static/images/details-page-images/strategy-images/green-home1.png",
                        "{baseUrl}/static/images/details-page-images/strategy-images/green-home2.png"
                    ]
                },
                {
                    "nodeName": "生态修复",
                    "link": "{baseUrl}/details-page/details-page-v2.html?typeIndex=设计策略&image_index=3",
                    "imagesPath": ["{baseUrl}/static/images/details-page-images/strategy-images/ecology-repaired1.png"]
                }
            ]
        },
        {
            "nodeName": "设计成果",
            "link": "{baseUrl}/list-page-v2/list-page-v2.html?typeIndex=2",
            "iconPath": "{baseUrl}/static/images/index-images/gain-ico.png",
            "children": [
                {
                    "nodeName": "鸟瞰图",
                    "link": "{baseUrl}/details-page/details-page-v2.html?typeIndex=设计成果&image_index=0",
                    "imagesPath": ["{baseUrl}/static/images/details-page-images/presentation-images/aerial-view.png"]
                },
                {
                    "nodeName": "平台透视图",
                    "link": "{baseUrl}/details-page/details-page-v2.html?typeIndex=设计成果&image_index=1",
                    "imagesPath": ["{baseUrl}/static/images/details-page-images/presentation-images/perspective.png"]
                },
                {
                    "nodeName": "平台半鸟瞰图",
                    "link": "{baseUrl}/details-page/details-page-v2.html?typeIndex=设计成果&image_index=2",
                    "imagesPath": ["{baseUrl}/static/images/details-page-images/presentation-images/binary-aerial-view.png"]
                },
                {
                    "nodeName": "整体鸟瞰图",
                    "link": "{baseUrl}/details-page/details-page-v2.html?typeIndex=设计成果&image_index=3",
                    "imagesPath": ["{baseUrl}/static/images/details-page-images/presentation-images/general-aerial-view.png"]
                },
                {
                    "nodeName": "规划总平面（多）",
                    "link": "{baseUrl}/details-page/details-page-v2.html?typeIndex=设计成果&image_index=4",
                    "imagesPath": [
                        "{baseUrl}/static/images/details-page-images/presentation-images/master-plan1.png",
                        "{baseUrl}/static/images/details-page-images/presentation-images/master-plan2.png"
                    ]
                },
                {
                    "nodeName": "指标表",
                    "link": "{baseUrl}/details-page/details-page-v2.html?typeIndex=设计成果&image_index=6",
                    "imagesPath": ["{baseUrl}/static/images/details-page-images/presentation-images/ksslzb.png"]
                },
                {
                    "nodeName": "B区放大总平面",
                    "link": "{baseUrl}/details-page/details-page-v2.html?typeIndex=设计成果&image_index=7",
                    "imagesPath": ["{baseUrl}/static/images/details-page-images/presentation-images/b-size.png"]
                },
                {
                    "nodeName": "分期规划",
                    "link": "{baseUrl}/details-page/details-page-v2.html?typeIndex=设计成果&image_index=8",
                    "imagesPath": ["{baseUrl}/static/images/details-page-images/presentation-images/stage-planning.png"]
                },
                {
                    "nodeName": "围合院落",
                    "link": "{baseUrl}/details-page/details-page-v2.html?typeIndex=设计成果&image_index=9",
                    "imagesPath": ["{baseUrl}/static/images/details-page-images/presentation-images/yard.png"]
                },
                {
                    "nodeName": "土方节省",
                    "link": "{baseUrl}/details-page/details-page-v2.html?typeIndex=设计成果&image_index=10",
                    "imagesPath": ["{baseUrl}/static/images/details-page-images/presentation-images/save.png"]
                },
                {
                    "nodeName": "设计核心",
                    "link": "{baseUrl}/details-page/details-page-v2.html?typeIndex=设计成果&image_index=11",
                    "imagesPath": ["{baseUrl}/static/images/details-page-images/presentation-images/design.png"]
                },
                {
                    "nodeName": "户型分析",
                    "link": "{baseUrl}/details-page/details-page-v2.html?typeIndex=设计成果&image_index=12",
                    "imagesPath": ["{baseUrl}/static/images/details-page-images/presentation-images/apartment.png"]
                },
                {
                    "nodeName": "采光同风",
                    "link": "{baseUrl}/details-page/details-page-v2.html?typeIndex=设计成果&image_index=13",
                    "imagesPath": ["{baseUrl}/static/images/details-page-images/presentation-images/lighting.png"]
                },
                {
                    "nodeName": "回归生活（多）",
                    "link": "{baseUrl}/details-page/details-page-v2.html?typeIndex=设计成果&image_index=14",
                    "imagesPath": [
                        "{baseUrl}/static/images/details-page-images/presentation-images/life1.png",
                        "{baseUrl}/static/images/details-page-images/presentation-images/life2.png",
                        "{baseUrl}/static/images/details-page-images/presentation-images/life3.png",
                        "{baseUrl}/static/images/details-page-images/presentation-images/life4.png"
                    ]
                },
                {
                    "nodeName": "产品参数",
                    "link": "{baseUrl}/details-page/details-page-v2.html?typeIndex=设计成果&image_index=18",
                    "imagesPath": ["{baseUrl}/static/images/details-page-images/presentation-images/product.png"]
                },
                {
                    "nodeName": "功能分析图",
                    "link": "{baseUrl}/details-page/details-page-v2.html?typeIndex=设计成果&image_index=19",
                    "imagesPath": ["{baseUrl}/static/images/details-page-images/presentation-images/function-analysis.png"]
                },
                {
                    "nodeName": "景观分析",
                    "link": "{baseUrl}/details-page/details-page-v2.html?typeIndex=设计成果&image_index=20",
                    "imagesPath": ["{baseUrl}/static/images/details-page-images/presentation-images/landcape-analysis.png"]
                }
            ]
        },
        {
            "nodeName": "产品图纸",
            "link": "{baseUrl}/list-page-v2/list-page-v2.html?typeIndex=3",
            "iconPath": "{baseUrl}/static/images/index-images/drawing-ico.png",
            "children": [
                {
                    "nodeName": "别墅共性优点",
                    "link": "{baseUrl}/details-page/details-page-v2.html?typeIndex=产品图纸&image_index=0",
                    "imagesPath": ["{baseUrl}/static/images/details-page-images/product-images/same-advantage.png"]
                },
                {
                    "nodeName": "独栋A型",
                    "link": "{baseUrl}/details-page/details-page-v2.html?typeIndex=产品图纸&image_index=1",
                    "imagesPath": ["{baseUrl}/static/images/details-page-images/product-images/a-type.png"]
                },
                {
                    "nodeName": "独栋B型（多）",
                    "link": "{baseUrl}/details-page/details-page-v2.html?typeIndex=产品图纸&image_index=2",
                    "imagesPath": [
                        "{baseUrl}/static/images/details-page-images/product-images/b-type1.png",
                        "{baseUrl}/static/images/details-page-images/product-images/b-type2.png"
                    ]
                },
                {
                    "nodeName": "独栋C型（多）",
                    "link": "{baseUrl}/details-page/details-page-v2.html?typeIndex=产品图纸&image_index=4",
                    "imagesPath": [
                        "{baseUrl}/static/images/details-page-images/product-images/c-type1.png",
                        "{baseUrl}/static/images/details-page-images/product-images/c-type2.png"
                    ]
                },
                {
                    "nodeName": "独栋别墅优点",
                    "link": "{baseUrl}/details-page/details-page-v2.html?typeIndex=产品图纸&image_index=6",
                    "imagesPath": ["{baseUrl}/static/images/details-page-images/product-images/single-advantage.png"]
                },
                {
                    "nodeName": "叠拼别墅（多）",
                    "link": "{baseUrl}/details-page/details-page-v2.html?typeIndex=产品图纸&image_index=7",
                    "imagesPath": [
                        "{baseUrl}/static/images/details-page-images/product-images/diepin1.png",
                        "{baseUrl}/static/images/details-page-images/product-images/diepin2.png",
                        "{baseUrl}/static/images/details-page-images/product-images/diepin3.png",
                        "{baseUrl}/static/images/details-page-images/product-images/diepin4.png"
                    ]
                },
                {
                    "nodeName": "叠拼别墅优点",
                    "link": "{baseUrl}/details-page/details-page-v2.html?typeIndex=产品图纸&image_index=11",
                    "imagesPath": ["{baseUrl}/static/images/details-page-images/product-images/diepin-advantage.png"]
                },
                {
                    "nodeName": "联排别墅（多）",
                    "link": "{baseUrl}/details-page/details-page-v2.html?typeIndex=产品图纸&image_index=12",
                    "imagesPath": [
                        "{baseUrl}/static/images/details-page-images/product-images/townhouse1.png",
                        "{baseUrl}/static/images/details-page-images/product-images/townhouse2.png",
                        "{baseUrl}/static/images/details-page-images/product-images/townhouse3.png",
                        "{baseUrl}/static/images/details-page-images/product-images/townhouse4.png",
                        "{baseUrl}/static/images/details-page-images/product-images/townhouse5.png"
                    ]
                },
                {
                    "nodeName": "联排别墅优点",
                    "link": "{baseUrl}/details-page/details-page-v2.html?typeIndex=产品图纸&image_index=17",
                    "imagesPath": ["{baseUrl}/static/images/details-page-images/product-images/townhouse-advantage.png"]
                }
            ]
        }
    ]
}
    `

// 页面加载时执行的方法
$("document").ready(function () {
    let data = getSetData();
    data = JSON.parse(data);
    render_main(data);
    render_footer(data);
    render_video(data);
    setBgImgWidthHeight();
    // 加载侧边栏JS渲染页面，解决数据没有请求成功，就加载侧边栏的情况，导致无法正常加载侧边栏
    $.getScript(`${baseUrl}/static/component/right-sidebar-v2/right-sidebar-v2.js`)
})
// 每次打开首页时，向后台发送请求，获取用户的数据并保存到浏览器本地数据中，以供列表页和详情页使用
function getSetData(){
    let projectId = getUrlPara('projectId');
    let data = null;
    if(projectId){
        $.ajax({
            type:"GET",
            url: `${requestUrl}/v1/project/pageJsonData?projectId=${projectId}`,
            async:false,
            dataType: "json",
            success: function (res) {
                if(res.code === 200){
                    // console.log(res.data);
                    // 为每一个type构造link连接，后端返回的数据中并没有该参数，需要前端构建
                    data = constructionLink(res.data, projectId);
                }else{
                    // console.log(res);
                    alert(res.msg);
                }
            },
            error:function (error) {
                alert("发生错误:" + error);
            }
        })
    }else{
        data = user_data.format({'baseUrl': baseUrl});
    }
    // 保存数据到sessionStorage中,key-value形式
    sessionStorage.setItem("user_data", data);
    return data;
}

// 为后端返回json数据中的types属性构造link连接，后端返回的数据中并没有该参数，需要前端构建
function constructionLink(jsonStr, projectId) {
    let imageList = [];
    let jsonData = JSON.parse(jsonStr);
    for(let i=0; i<jsonData.types.length; i++){
        let image_index = 0;
        // 顶级类的链接，格式如下："link": "{baseUrl}/list-page-v2/list-page-v2.html?typeIndex=项目背景",
        jsonData.types[i]['link'] = `${baseUrl}/list-page-v2/list-page-v2.html?typeIndex=${i}&projectId=${projectId}`;
        // 将所有图片放入imageList集合中
        for(let j=0; j<jsonData.types[i].children.length; j++){
            if('imagesPath' in jsonData.types[i].children[j]){
                // 第二级类别的链接，格式如下"link": "{baseUrl}/details-page/details-page-v2.html?typeIndex=设计成果&image_index=0&projectId",
                jsonData.types[i].children[j]['link'] = `${baseUrl}/details-page/details-page-v2.html?typeIndex=${i}&projectId=${projectId}&image_index=${image_index}`
                for(let k=0; k<jsonData.types[i].children[j].imagesPath.length; k++){
                    image_index ++;
                    imageList.push(jsonData.types[i].children[j].imagesPath[k]);
                }
            }
        }
    }
    sessionStorage.setItem("image_list", JSON.stringify(imageList));
    return JSON.stringify(jsonData);
}
// 渲染页面主体内容
function render_main(data) {
    // 添加logo
    if('company_logo' in data){
        let img = `<img src="${data.company_logo}">`;
        $(".company-logo").append(img);
    }
    // 添加项目信息
    if('project_introduction' in data){
        let projectMsg = `<img src="${data.project_introduction}">`
        $(".project-msg").append(projectMsg)
    }
    // 添加背景图片
    if('background_image' in data){
        let backgroundImg = `<img src="${data.background_image}">`
        $(".background-image").append(backgroundImg);
    }
}
// 渲染底部导航栏
function render_footer(data){
    // 渲染页面
    let footer_html = doT.template($("#footer-script").html())(data);
    //console.log(footer_html);
    $("body").append(footer_html);
    // 为底部导航栏计算宽度
    let width = 100/data.types.length + '%';
    $(".footer-navigation-content a").css({'width': width});
}
// 渲染video
function render_video(data){
    // 渲染页面
    if('video' in data){
        let video_html = doT.template($("#video-script").html())(data);
        $("body").append(video_html);
        // 必须先将元素添加到body中再执行以下js,否则会无法渲染video
        $.getScript(`${baseUrl}/static/js/render-video.js`)
    }
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

// 动态修改背景图片
window.onresize = setBgImgWidthHeight
function setBgImgWidthHeight(){
    let height = document.documentElement.clientHeight;
    let width = document.documentElement.clientWidth;
    $(".background-image img").css({
        "height": height,
        "width": width
    })
}
