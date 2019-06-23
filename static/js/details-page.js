// 页面需要用到的全局变量
let arr_list = ['left', 'main', 'right'];
let project_folder = '/project-images/';
let product_folder = '/product-images/';
let presentation_folder = '/presentation-images/';
let strategy_folder = '/strategy-images/';
// 三个页面所有文件集合（有序）
let project_images_list = ['project-background.png', 'location-analysis.png', 'around-analysis.png'];
let product_images_list = ['same-advantage.png', 'a-type.png', 'b-type1.png', 'b-type2.png', 'c-type1.png', 'c-type2.png',
    'single-advantage.png', 'diepin1.png','diepin2.png','diepin3.png','diepin4.png', 'diepin-advantage.png',
    'townhouse1.png','townhouse2.png','townhouse3.png','townhouse4.png','townhouse5.png', 'townhouse-advantage.png'];
let strategy_images_list = ['golf-spirit.png', 'green-home1.png', 'green-home2.png', 'ecology-repaired1.png', 'ecology-repaired2.png', 'ecology-repaired3.png'];
let presentation_images_list = ['aerial-view.png', 'perspective.png', 'binary-aerial-view.png',
    'general-aerial-view.png', 'master-plan1.png', 'master-plan2.png', 'ksslzb.png', 'b-size.png', 'stage-planning.png', 'yard.png',
    'save.png', 'design.png', 'apartment.png', 'lighting.png', 'life1.png', 'life2.png', 'life3.png', 'life4.png', 'product.png', 'function-analysis.png',
    'landcape-analysis.png'];

// 设置页面需要展示的图片集合
let file_list = [];
let subTitle1 = getUrlPara('subTitle');
console.log(subTitle1);
if(subTitle1 == "项目背景"){
    $.each(project_images_list, function (index, value) {
        project_images_list[index] = project_folder + value;
    });
    file_list = project_images_list;
}
if(subTitle1 == "设计策略"){
    $.each(strategy_images_list, function (index, value) {
        strategy_images_list[index] = strategy_folder + value;
    });
    file_list = strategy_images_list;
}
if(subTitle1 == "设计成果"){
    $.each(presentation_images_list, function (index, value) {
        presentation_images_list[index] = presentation_folder + value;
    });
    file_list = presentation_images_list;
}
if(subTitle1 == "产品图纸"){
    $.each(product_images_list, function (index, value) {
        product_images_list[index] = product_folder + value;
    });
    file_list = product_images_list;
}
console.log(file_list);

// 获取到get请求中image_index
let image_index = parseInt(getUrlPara("image_index"));
if(image_index == '' || image_index == undefined){
    image_index = 0;
}

// 为页面添加图片
addImages();

// 页面加载时，需要根据image_index，加载相应的图片到页面中
function addImages(){
    if(file_list.length != 0){
        if(image_index == 0){
            // 隐藏左按钮
            $(".left-button").hide();
            removeAllImageFromLi();
            // 给第二个li添加图片
            let path = '<img src={details_page_images_path}{image_path}>'
                .format({'details_page_images_path': details_page_images_path, 'image_path': file_list[image_index]});
            addImageToLi(2, path);
            // 如果数组不越界,就给第三个li添加图片
            if(file_list[image_index+1] != undefined){
                let path = '<img src={details_page_images_path}{image_path}>'
                    .format({'details_page_images_path': details_page_images_path, 'image_path': file_list[image_index + 1]});
                addImageToLi(3, path);
            }else{
                // 隐藏右按钮
                $(".right-button").hide();
            }
        }else if (image_index == file_list.length - 1){
            // 隐藏右按钮
            $(".right-button").hide();
            removeAllImageFromLi();
            // 如果数组不越界,给第一个li添加图片
            if(file_list[image_index-1] != undefined){
                let path = '<img src={details_page_images_path}{image_path}>'
                    .format({'details_page_images_path': details_page_images_path, 'image_path': file_list[image_index - 1]});
                addImageToLi(1, path);
            }else{
                // 隐藏左按钮
                $(".left-button").hide();
            }
            // 给第二个li添加图片
            let path = '<img src={details_page_images_path}{image_path}>'
                .format({'details_page_images_path': details_page_images_path, 'image_path': file_list[image_index]});
            addImageToLi(2, path);
        }else{
            // 显示左右按钮
            $(".left-button").show();
            $(".right-button").show();
            removeAllImageFromLi();
            let left_image_path='<img src={details_page_images_path}{image_path}>'
                .format({'details_page_images_path': details_page_images_path, 'image_path': file_list[image_index-1]});
            let main_image_path = '<img src={details_page_images_path}{image_path}>'
                .format({'details_page_images_path': details_page_images_path, 'image_path': file_list[image_index]});
            let right_image_path = '<img src={details_page_images_path}{image_path}>'
                .format({'details_page_images_path': details_page_images_path, 'image_path': file_list[image_index+1]});
            addImageToLi(1, left_image_path);
            addImageToLi(2, main_image_path);
            addImageToLi(3, right_image_path);
        }
    }
}
function addImageToLi(whichLi, image_path){
    switch(whichLi){
        case 1:
            console.log("append1：" + image_path);
            $(".display-box li:first-child").append(image_path);
            break;
        case 2:
            console.log("append2"+ image_path);
            $(".display-box li:nth-child(2)").append(image_path);
            break;
        case 3:
            console.log("append3"+ image_path);
            $(".display-box li:nth-child(3)").append(image_path);
            break;
    }
}
function removeAllImageFromLi() {
    // 删除所有img标签
    removeImageFromLi(1);
    removeImageFromLi(2);
    removeImageFromLi(3);
}
function removeImageFromLi(whichLi){
    let doc;
    switch(whichLi){
        case 1:
            doc = $("ul li:first-child").children('img');
            break;
        case 2:
            doc = $("ul li:nth-child(2)").children('img');
            break;
        case 3:
            doc = $("ul li:nth-child(3)").children('img');
            break;
    }
    if(doc != null){
        doc.remove();
    }
}

// 按钮点击
$(".left-button").on('click', function () {
    $(".left-button").css("background", "rgba(23,23,23,0.7)");
    image_index --;
    addImages();
    setTimeout(function () {
        $(".left-button").css("background", "rgba(23,23,23,0.2)");
        //$(".display-content img").css("transform", "scale(0.8)")
    }, 500)
})
$(".right-button").on('click', function () {
    $(".right-button").css("background", "rgba(23,23,23,0.7)");
    image_index ++;
    addImages();
    setTimeout(function () {
        $(".right-button").css("background", "rgba(23,23,23,0.2)");
    }, 500)
})