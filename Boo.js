function booWho(bool) {
    if(bool===1){
        console.log(bool==0);
        return bool==0

    }
    else if(bool==false){
        console.log('2')
        return bool==false;
    }
    else if(bool==true){
        console.log('1')
        return bool==true;
    }
    else{
        return false
    }
}
booWho(1);
booWho(false);
// function booWho(bool) {
//
//     if(typeof(bool)==="boolean"){
//         console.log(typeof(bool)==="boolean")
//         return true;
//     }
//     else{
//         console.log('2')
//         return false;
//     }
// }
// booWho(false);