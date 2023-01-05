const ratings = document.querySelectorAll(".votebtn")
const submitButton = document.getElementById("submit")
let selectedRating;

function selectRating(e){
    selectedRating = Number(e.target.innerText) ;
}

ratings.forEach(function(select){
    select.addEventListener("click", selectRating);
})

function submitRating(){
    if(selectedRating !== undefined){
        document.getElementById("container").classList.add("hidden");
        document.getElementById("containerNew").classList.remove("hidden");
        document.getElementById("rating").innerText =selectedRating;
    }
}
submitButton.addEventListener("click",submitRating)









