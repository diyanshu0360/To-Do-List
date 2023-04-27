
let addbtn = document.getElementById('inputbtn');

addbtn.addEventListener('click', addText = () => {
    const val = document.getElementById('inputtext');
    let txt = val.value;
    addtodo(txt);
    val.value = "";
})

const addtodo = (txt) => {
    const text1 = document.createElement('span');
    text1.innerHTML = txt;
    const text2 = document.createElement('a');
    text2.setAttribute('href', '#')
    text2.innerHTML = 'delete';
    text2.classList.add('material-symbols-outlined', 'dustbin');

    const singlelistdiv = document.createElement('div');
    singlelistdiv.classList.add('singlelist');
    singlelistdiv.appendChild(text1);
    singlelistdiv.appendChild(text2);

    const showlist = document.getElementById('showlistid');
    showlist.appendChild(singlelistdiv);
}
