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

function sleep(second) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, second * 1000)
    })
}

async function syncLoop() {
    for (let i = 0; i < 10; i++) {
        let rarity = generateElem();
        $('#' + i.toString()).html(rarity).fadeIn(500);
        await sleep(0.4);
    }
}

$('#btn').on('click',()=>{
    $('.content-item').css("display","none");
    money +=3000;
    $('.money').text(money.toString() + '円');

    (async ()=>{
        console.log("同期的に呼び出す")
        await syncLoop()
    }).call();

    $('.ssr-num').text(ssr.toString() + '枚');
    $('.sr-num').text(sr.toString() + '枚');
})
