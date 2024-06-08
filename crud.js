// function send(){
//     alert('hello')
// let inp = document.getElementById('MSG').value;
// console.log(inp)
// firebase
// .database()
// .ref('Chats/')
// .set({
//     'Jack':inp
// })
// }
let master = '';
function code_creator(){
    let alpha = ['a',"b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let CODE = '';
    for(i=0;i<11;i++){
    
         if(i == 3 || i == 7){
            CODE = CODE+'-'
         }else{
            let cho_alpha = Math.floor(Math.random()*25+1);
           
            CODE = CODE+alpha[cho_alpha]
            
         }
        
    }
    return CODE;
}
function host(){
    document.getElementById('modal1').click()
    master = 'h'
    let code = code_creator();
    document.getElementById("HOSTI").value = code;

}
function master_pro(){
    let hj = '';
    if(master == 'h'){
        hj = document.getElementById("HOSTI").value
    }else if(master == 'j'){
        hj = document.getElementById("JOINI").value
    }else{
        hj = 'Error Code Not found'
    }
    return hj
}
function join(){
    let amp = localStorage.getItem('user')
    master = 'j'
    let coded = master_pro()
    if(amp && coded != ''){
       
        let aj = [amp]
        let und = amp+' has joined the Chat Room'
        let cos = [];
        firebase
        .database()
        .ref()
        .on('value',function(snap){
          cos = snap.val()
        })
       setTimeout(()=>{
        // console.log(cos)
        let cos2 = Object.keys(cos)
        // console.log(cos2)
        for(i=0; i<cos2.length;i++){
            if(cos2[i] == coded){
          
                localStorage.setItem('CODE',coded)
                window.open("Chat_Room.html")
                break
            }else{
                continue
            }
        }alert('Code Provided Not found')
       },10000)
    
    
    }else{
      if(amp){
        alert('Enter Code')
      }else{
       
        document.getElementById('modal1').click()
      }
    }

}
function now(){
    let n = new Date()
    let hour = n.getHours()
    let min = n.getMinutes()
    let sec = n.getSeconds()
    let u = hour + ':' + min+':'+sec

    return u
}
function cid(coded){

    let user = document.getElementById('user').value
    if(user == ''){
        alert('Enter Username')
    }else{
    let coded = master_pro()
    // console.log(coded)
    let und = user+' has joined the Chat Room'
    let u = now()
    firebase
    .database()
    .ref(coded+'/'+user+'/')
    .update({
        msg1:{msg:und},
        time: u
    })

 localStorage.setItem('user',user)
    document.getElementById('closesd').click()

}
}


  