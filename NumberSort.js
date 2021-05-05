const test = ["001","003","004","019","020","025","026","030","036"]
const message = [];

test.forEach(number => {
    if(message.length === 0){
        //最初の要素を追加
        message.push(number)
    }else{
        if(number - message[message.length - 1]  > 1){
            //単数を追加
            message.push(",")
            message.push(number)
        }else if(number - message[message.length - 1] === 1){
            console.log(message[message.length - 1])
            console.log(number)
            //連番を設定する
            message.push("-")
            message.push(number)
        }else if(message[message.length - 2] === "-"){
            //連番の最後を更新する
            message[message.length - 1] = number;
        }
    }
});
console.log(message.join(""))
