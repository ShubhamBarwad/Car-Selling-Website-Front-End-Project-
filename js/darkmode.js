const modeBtn = document.querySelector('#darkmode-btn')
const body = document.getElementsByTagName('body')[0]
const bodyClass = body.classList
const entries = Object.entries(localStorage)

const isDark = ()=>{
    if(bodyClass.length > 0 && bodyClass.contains('dark')){
        return true
    }
    return false
}
const onRefresh = ()=>{
    console.log(isDark())
    let prefMode = localStorage.getItem('mode')
    if(prefMode == 'dark'){
        if(!isDark()){
            bodyClass.add('dark')
        }
    }
}
onRefresh()
// Dark Mode toggle
modeBtn.onclick = () => {
    let dark = isDark()
    console.log(dark)
    
    body.classList.toggle('dark')
   
    if(dark){
        localStorage.setItem('mode', 'light')
    }else if(!dark){
        localStorage.setItem('mode', 'dark')
    }

}




// Dark Mode toggle ends