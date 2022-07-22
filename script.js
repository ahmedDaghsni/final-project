
const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
var order = document.getElementsByClassName("plus-btn");
var priceIphone =parseInt( document.getElementById("p1").innerHTML)
var priceShoes =parseInt( document.getElementById("p2").innerHTML)
var pricewatch =parseInt( document.getElementById("p3").innerHTML)


for (let i = 0; i < plusBtn.length; i++) {
  plusBtn[i].addEventListener("click", function () {
    let cout = plusBtn[i].previousElementSibling.value++;
    if(i===0){
        let sommeIphone = priceIphone * (cout+1)
        document.getElementById("p1").innerHTML = sommeIphone
    }
    if(i===1){
        let sommeshoes = priceShoes * (cout+1)
        document.getElementById("p2").innerHTML = sommeshoes
    }    if(i===2){
        let somewatch = pricewatch * (cout+1)
        document.getElementById("p3").innerHTML = somewatch
    }
  });
}
