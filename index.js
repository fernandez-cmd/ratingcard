


const test = () => {
    document.getElementById('contentholder').style.display = "none";
    document.getElementById('thankYou').style.display = "block";



}
document.getElementById("submit").addEventListener("click", test);


const ratings = document.querySelectorAll(".btn");

const ofcRating = document.getElementById('rate');



ratings.forEach((rate) => {
    rate.addEventListener("click" , ()=>{
        console.log(rate.innerText)
        ofcRating.innerText = rate.innerText


    } )

})