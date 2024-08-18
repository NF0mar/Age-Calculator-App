document.addEventListener("DOMContentLoaded", () => {

    let day = document.querySelector(".day");
    let month = document.querySelector(".month");
    let year = document.querySelector(".year");
    let form = document.querySelector(".form");
    let button = document.querySelector(".btn")
    let results = document.querySelector(".results");
    let results__num = document.querySelectorAll(".results__num");

    form.addEventListener("submit", (event)=> {
        event.preventDefault();
        checkEmpty([day, month, year]);
        checkInValid([day, month, year]);
        displayResults();
    })


    const displayError = (element, message) => {
        let parent = element.closest(".form-control");
        let errorMessage = parent.querySelector(".errorMsg");
        let label = parent.querySelector(".label");
        let input = parent.querySelector(".input");

        errorMessage.innerText = message;
        errorMessage.style.display = "block";
        label.style.color = "#FF5959";
        input.style.border = "1px solid #FF5959";
    };
    const clearError = (element) => {
        let parent = element.closest(".form-control");
        let errorMessage = parent.querySelector(".errorMsg");
        let label = parent.querySelector(".label");
        let input = parent.querySelector(".input");

        errorMessage.style.display = "none";
        label.style.color = '';
        input.style.border = '';
    };

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
    const isNumeric = (value) => {
        return /^\d+$/.test(value);
    };
    const checkInValid = (elements) => {
        elements.forEach(element => {
            if (element.value === ''){
                return;
            }
            if (!isNumeric(element.value)) {
                displayError(element, `Must be a valid number`);
                return;
            }
            else {
                clearError(element);
                if (element.classList.contains("day")) validateDay(element);
                if (element.classList.contains("month")) validateMonth(element);
                if (element.classList.contains("year")) validateYear(element);
            }
        });
    }

    const validateDay = (day) => {
        const dayValue = parseInt(day.value);
        if(dayValue < 1 || dayValue > 31){
            displayError(day, `Must be a valid date`)
            return;
        }
        else {
            clearError(day)
        }
    }

    const validateMonth = (month) => {
        const monthValue = parseInt(month.value);
        if (monthValue < 1 || monthValue > 12) {
            displayError(month, `Must be a valid month`);
            return;
        } else {
            clearError(month)
        }
    }

    const validateYear = (year) => {
        const yearValue = parseInt(year.value);
        const currentYear = new Date().getFullYear();
        if (yearValue > currentYear) {
            displayError(year, `Must be in the past`)
            return;
        } else {
            clearError(year)
        }
    }



    const displayResults = () => {
        const yearValue = parseInt(year.value);
        const monthValue = parseInt(month.value) - 1; // JavaScript months are 0-indexed (January is 0)
        const dayValue = parseInt(day.value);

        const currentDate = new Date();
        const inputDate = new Date(yearValue, monthValue, dayValue);

        // if (inputDate > currentDate) {
        //     alert("The date provided is in the future. Please provide a valid past date.");
        //     return;
        // }

        let years = currentDate.getFullYear() - inputDate.getFullYear();
        let months = currentDate.getMonth() - inputDate.getMonth();
        let days = currentDate.getDate() - inputDate.getDate();

        if (days < 0) {
            months--;
            days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        results__num[0].innerText = years;
        results__num[1].innerText = months;
        results__num[2].innerText = days;

    }


})