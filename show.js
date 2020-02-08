//生成按钮和显示生肖数字DOM
let showButton = document.querySelector('.showButton');
let show = document.querySelector('.show');
var showButtonText = document.querySelector('.showButtonText')

//生成生肖和数字
function animalFunction() {
    //生肖
    var myAniaml = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'];
    var myChoiceAn = Math.floor(Math.random() * 11);
    var exTractAn = myAniaml.slice(myChoiceAn, myChoiceAn + 1);
    //数字
    var myNumber = Math.floor(Math.random() * 40);
    show.value = exTractAn + " " + myNumber;
}

//生成按钮事件触发器
showButton.onclick = function () {
    animalFunction();
    setTimeout("copyShow()", 500)

}

//自动复制到粘贴版
function copyShow() {
    //聚焦并且选择input内容
    show.focus();
    show.select();
    //尝试进行复制到粘贴板
    //进行复制到粘贴版
    if (document.execCommand("copy", "false", null)) {
        //如果复制成功
        alert("已复制到粘贴板！" + "结果为 " + show.value);
    }
}