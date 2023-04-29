
// adding task
let addbtn = document.getElementById('inputbtn');
let addText = () => {
    const val = document.getElementById('inputtext');
    let txt = val.value;
    if(txt !== ""){
        addtodo(txt);
        val.value = "";
    }
}

let addtodo = (txt) => {
    const text1 = document.createElement('span');
    text1.innerHTML = txt;
    const text2 = document.createElement('a');
    text2.setAttribute('href', '#');
    text2.innerHTML = 'delete';
    text2.classList.add('material-symbols-outlined', 'dustbin');

    const singlelistdiv = document.createElement('div');
    singlelistdiv.classList.add('singlelist');
    singlelistdiv.appendChild(text1);
    singlelistdiv.appendChild(text2);

    const showlist = document.getElementById('showlistid');
    showlist.appendChild(singlelistdiv);
}


addEventListener('click', (e) => {

    // removing task 
    if(e.target.classList.contains('dustbin')){
        let rm = e.target.parentElement;
        let rmp = rm.parentElement;
        rmp.removeChild(rm);
    }

    // striking text
    if(e.target.classList.contains('singlelist')){
        let box = e.target;
        let st = e.target.firstElementChild;
        st.style.textDecoration = "line-through";
        box.style.backgroundColor = 'red';
        box.style.opacity = '50%';
    }
})

