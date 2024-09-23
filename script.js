color = "";
score = 0;

result_list = []
user_list = []

const numberWords = {
    1: 'green', 2: 'blue', 3: 'red', 4: 'yellow',
};

const colorCode = {
    'green': '#4CAF50', 'blue': '#2196F3', 'red': '#f44336', 'yellow': '#FFC107'
}

function getRandomIntInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateNext(){
    num = getRandomIntInRange(1, 4);
    color = numberWords[num];
    document.getElementById('score').style.color = colorCode[color];
    result_list.push(color)
}

generateNext()

document.addEventListener('DOMContentLoaded', () => {
  
    const buttons = document.querySelectorAll('#form input');

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {

            event.preventDefault();
            selected = event.target.id;
            user_list.push(selected)

            flag = 0;

            if (result_list.length == user_list.length){

                for (let i = 0; i < result_list.length; i++) {
                    if (user_list[i] !== result_list[i]) {
                        flag = 1;
                        const element = document.getElementById('result');
                        element.innerHTML = "Game Over";
                    }
                }

                if (flag == 0) {
                    score = score + 1;
                    user_list = []
                    generateNext();
                    const element = document.getElementById('score');
                    element.innerHTML = "Score: "+score;
                }
            }
        });
    });
});
