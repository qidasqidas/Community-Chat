var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})
// let time_obj = []
let msg_history = {}
let member = 0;
let ss = 0
evalute()
let code = ''
function evalute() {
    // console.log('hello')
    let kk = localStorage.getItem("user")
    let ss = localStorage.getItem('CODE')

    // console.log(ss,kk)
    if (ss) {
        code = ss
        alert('Welcome User')


    } else {
        alert('User or Code Not found')
        window.location.href = 'index.html';
    }




}
function abort() {
    let mm = localStorage.getItem('user')
    let sjk = localStorage.getItem('CODE')
    firebase
        .database()
        .ref(sjk + '/' + mm)
        .remove()
    // console.log(sjk+'/'+mm)
    setTimeout(() => {
        localStorage.clear();
        window.location.href = 'index.html'
    }, 2000)

}
function main_protocol() {
    let user = localStorage.getItem('user')
    let code = localStorage.getItem('CODE')
    let msg = document.getElementById('MSG').value
    let u = now()
    firebase
        .database()
        .ref(code + '/' + user)
        .update({
            msg1: { msg },
            time: u
        })
        document.getElementById('MSG').value = ''
}

function now() {
    let n = new Date()
    let hour = n.getHours()
    let min = n.getMinutes()
    let sec = n.getSeconds()
    let u = hour + ':' + min + ':' + sec

    return u
}
// window.onload = function(){

// }
// window.onload = function(){

// }

// function time_restriction() {
//     let code = localStorage.getItem('CODE')
//     let data = {}
//     let k = []
//     firebase
//         .database()
//         .ref(code + '/')
//         .on('value', function (snap) {
//             data = snap.val()
//             // console.log(snap.val())

//             let m = Object.keys(data)
//             // console.log(data,k,m)
//             for (i = 0; i < m.length; i++) {
//                 k[i] = data[m[i]]['time']
//                 //  console.log(data[m[i]]['time'] )
//             }
//             // console.log(k)
//         })



//     return k
// }

// window.onload = function(){

// }

function read(d) {

    let user = localStorage.getItem('user')
    let code = localStorage.getItem('CODE')
    let data = {}
    firebase
        .database()
        .ref(code + '/')
        .on('value', function (snap) {
            data = snap.val()
        })
    
   
    let data2 = Object.keys(data)
    setTimeout(() => {
        if(member < data2.length){
            ss = 0
            let hjh = data[data2[i]]['msg1']['msg']
            new_mem(hjh)
        }
        if (ss == 0) {
            msg_history = data

            ss = ss + 1
        }
    }, 5000);

    for (i = 0; i < data2.length; i++) {
        if (msg_history[data2[i]]['time'] == data[data2[i]]['time']) {
            member = data2.length
            continue
        } else {
            let mjk = Object.keys(msg_history[data2[i]]['msg1']).length
            var result = Object.keys(data[data2[i]]['msg1']).map((key) => [data[data2[i]]['msg1'][key]]);
            msg_history[data2[i]]['msg1'][mjk] = data[data2[i]]['msg1']['msg']
            msg_history[data2[i]]['time'] = data[data2[i]]['time']
            show(result, data2[i])
            member = data2.length
        }
    }
}
function new_mem(e){
    let o = document.getElementById('chatbox').innerHTML
    let bat = `<div style='width:100%;display:flex;justify-content:center;margin:10px;'><kbd>${e}</kbd></div>`
    document.getElementById('chatbox').innerHTML = o+ bat
}
function show(e, n) {
    let chat = ``
    let useres = localStorage.getItem('user')
    if (n.toLocaleLowerCase() == useres.toLocaleLowerCase()) {
        chat = `   <div class='com'>
        <div class = 'kk'>Space</div>
         <div class="cars bars">
         
            
            
            <div class="cady">
            ${e}
            <kbd style="margin-left: 10px;">${n}</kbd>
            </div>
           
            
           
                        </div>
        </div>
        `

    }else{
        chat = `   <div class='com'>  <div class="cars blue">
         
            
            
        <div class="cady">
        ${e}
        <kbd style="margin-left: 10px;">${n}</kbd>
        </div>
       
        
       
                    </div></div>`

    }
    let o = document.getElementById('chatbox').innerHTML
   document.getElementById('chatbox').innerHTML = o + chat

}



