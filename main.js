document.addEventListener("DOMContentLoaded", () => {

    let day = document.querySelector(".day");
    let month = document.querySelector(".month");
    let year = document.querySelector(".year");
    let form = document.querySelector(".form");
    let button = document.querySelector(".btn")
    // let errorMessage = document.querySelector(".errorMsg");
    // let label = document.querySelector(".label");

    form.addEventListener("submit", (event)=> {
        event.preventDefault();
        checkEmpty([day, month, year]);
        checkInValid(day);
    })

    // const showError = () => {

    // }

    const checkEmpty = (elements) =>{
        elements.forEach( (element) =>{
            let parent = element.closest(".form-control");
            let errorMessage = parent.querySelector(".errorMsg");
            let label = parent.querySelector(".label");
            let input = parent.querySelector(".input");

            if(element.value===''){
                errorMessage.innerText = "This field is required"
                errorMessage.style.display = "block"
                label.style.color = "#FF5959";
                input.style.border = "1px solid #FF5959";
            }
            else{
                errorMessage.style.display = "none";
                label.style.color = '';
                input.style.border = '';
            }
        })
    }

    const checkInValid = (day) => {
        validateDay(day)
    }

    const validateDay = (day) => {
        let parent = day.closest(".form-control");
        let errorMessage = parent.querySelector(".errorMsg");
        let label = parent.querySelector(".label");
        let input = parent.querySelector(".input");

        if(day.value < 1 || day.value > 31 & day.value === NaN){
            errorMessage.innerText = `Must be a valid day`
            errorMessage.style.display = "block"
            label.style.color = "#FF5959";
            input.style.border = "1px solid #FF5959";
        }
        else {
            errorMessage.style.display = "none";
            label.style.color = '';
            input.style.border = '';
        }
    }
})