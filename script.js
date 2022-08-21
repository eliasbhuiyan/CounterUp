let heading = document.querySelectorAll(".counter")

let arr = Array.from(heading)

arr.map((item)=>{
    let counter = 0
    let text = item.innerHTML
    function counterup (){
        counter++
        item.innerHTML = counter
        if(counter == text){
            clearInterval(stop)
        }
    }

    let stop = setInterval(()=>{
        counterup()
    },item.dataset.delay/text)
})