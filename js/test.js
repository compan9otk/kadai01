let money = 0;
let ssr = 0;
let sr = 0;

const generateElem = ()=>{
    let a = Math.random()*100;
    if(a < 3){
        ssr += 1;
        return '<div class="ssr">SSR</div>';
    }else if(a < 21){
        sr += 1;
        return '<div class="sr">SR</div>';
    }else{
        return '<div class="r">R</div>';
    }
};
$('#btn').on('click',()=>{
    $('.content-item').css("display","none");
    money +=3000;
    $('.money').text(money.toString() + '円');
    for(i = 0 ; i < 10 ; i ++){
        let rarity = generateElem();
        $('#' + i.toString()).html(rarity).fadeIn(400*(i +1));
    }
    $('.ssr-num').text(ssr.toString() + '枚');
    $('.sr-num').text(sr.toString() + '枚');
})