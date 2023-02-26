const tablist = document.getElementsByClassName('tab-items')
const tabContent = document.getElementsByClassName('tab-content')
const colorChoice = document.getElementsByClassName('color-disc')

Array.from(colorChoice).forEach(elem => {
    elem.addEventListener('click', e => {
        Array.from(colorChoice).forEach(ele => {
            ele.classList.remove('active')
        })
        e.target.classList.add('active')
    })
    
})

// Tab Code
Array.from(tabContent).forEach(elem => {
    let idItem = elem.children[0].innerText
    elem.setAttribute('id', idItem)
    elem.classList.add('hidden')
    tabContent[0].classList.remove('hidden')
})

Array.from(tablist).forEach(elem => {
    elem.addEventListener('click', (e) => {
        Array.from(tablist).forEach(element => {
            element.classList.remove('active')
        });
        e.target.classList.add('active')
        tabId = elem.innerText
        Array.from(tabContent).forEach(el => {
            el.classList.add('hidden')
            if (!tabId.localeCompare(el.id, undefined, {
                    sensitivity: 'accent'
                })) {
                el.classList.remove('hidden')
            }
        })
    })
})