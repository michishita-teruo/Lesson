// window.loadで読み込みが終わった2秒後にclassAddクラス付与

window.onload = () => {
    setTimeout(classAdd,2000)
    // const snipper = document.getElementById('loading');
    // snipper.classList.add('loaded')
}
const classAdd = () => {
    const snipper = document.getElementById('loading');
    snipper.classList.add('loaded')
}