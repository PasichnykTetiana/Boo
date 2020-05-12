function booWho(bool) {
    if(bool==true){
        console.log('1')
        return bool==true;
    }
    else if(bool==false){
        console.log('2')
        return bool==false;
    }
    else if(bool==1){
        return bool==0
    }
}

booWho(false);