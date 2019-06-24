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

// 侧边栏相关JS
$("#sidebar-close img").click(function () {
    $(".right-sidebar").fadeOut();
})
$("#right-sidebar-ico").click(function () {
    $(".right-sidebar").fadeIn();
})
// $("body").hover(function () {
//     // 放大1.3
//     $("body").css({
//         'transform': 'translate(0, 0) scale(1.5)',
//         'transition': 'all 1s ease'
//     });
//     setTimeout(function () {
//         $("body").css({
//             'transform': 'translate(0, 0) scale(1)',
//             'transition': 'all 1s ease'
//         });
//     }, 1)
// })