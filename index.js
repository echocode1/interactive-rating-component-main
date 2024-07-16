document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.getElementById('submit-btn');
    const successBtn = document.getElementById('success-response');
    const circleButton = document.querySelectorAll('#circular-btn  button')
    const successDisplay = document.querySelector('.rating-success__section');
    const mainDisplay = document.querySelector('.rating__section');
    const errorResponse = document.getElementById('error-response')
    let rateValue;

    circleButton.forEach(item => {
        item.addEventListener('click', () => {
        rateValue = item.textContent
        item.textContent < 5 ? item.style.backgroundColor = 'hsl(0, 0%, 100%)'
        :item.style.backgroundColor = 'hsl(25, 97%, 53%)';
        errorResponse.textContent = ''
        })
    })

    function submitRating(){
        if (!rateValue){
            errorResponse.textContent = `you havn't clicked any rating`
        }
        else{
            successDisplay.style.display = "flex";
            mainDisplay.style.display = 'none';
            circleButton.forEach(e => e.style.backgroundColor = 'hsl(213, 19%, 23%)')

            if(rateValue < 5){
                successBtn.textContent = `You selected ${rateValue} out of 5`;
            }
            else{
                successBtn.textContent = `You selected ${rateValue}`;
            }
        }
    }
    submitBtn.addEventListener('click', submitRating)

    successBtn.onclick = () => {
       
        successDisplay.style.display = "none";
        mainDisplay.style.display = 'block';
    }
})