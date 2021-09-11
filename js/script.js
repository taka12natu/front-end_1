for (let count = 1; count <= 100; count++){
    if(count % 15 == 0 ){
        console.log(`処理回数：${count}回目　アホ犬`);
    }else if(count % 3 == 0 ){
        console.log(`処理回数：${count}回目　アホ`);
    }else if(count % 5 == 0 ){
        console.log(`処理回数：${count}回目　犬`);
    }else{
        console.log(`処理回数：${count}回目`);
    }
}



//チャレンジ課題
for (let count = 1; count <= 100; count++){
    if(count % 15 == 0 ){
        console.log(`処理回数：${count}回目　アホ犬`);
    }else if(count % 3 == 0 ){
        console.log(`処理回数：${count}回目　アホ`);
    }else if(count % 5 == 0 ){
        console.log(`処理回数：${count}回目　犬`);
    }else if(count % 2 == 0){
        console.log(`処理回数：${count}回目`);
    }
}