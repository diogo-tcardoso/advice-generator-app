const button = document.getElementsByClassName('button-img');
button[0].addEventListener('click', selectRandomAdvice);

async function selectAdvice (){
    const url = "https://api.adviceslip.com/advice";
    const response = await fetch(url);
    const responseJson = await response.json();
    return responseJson;
}

async function selectRandomAdvice (){
    const advice = await selectAdvice();
    const randomAdvice = advice.slip.advice
    const adviceId = advice.slip.id
    document.getElementById('advice-dice').innerHTML = "ADVICE #" + adviceId;
    document.getElementById('advice').innerHTML = randomAdvice;
}

selectRandomAdvice();