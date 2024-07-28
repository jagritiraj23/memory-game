let level = 1;
const emojis = ["😍", "😍", "😎", "😎", "😇", "😇", "😝", "😝", "🤣", "🤣", "🤩", "🤩", "🥳", "🥳", "😡", "😡"];
let shuf_emojis;

function initializeGame() {
    const gameContainer = document.querySelector('.game');
    gameContainer.innerHTML = '';
    shuf_emojis = emojis.sort(() => Math.random() - 0.5);
    shuf_emojis.forEach((emoji) => {
        let box = document.createElement('div');
        box.className = 'item';
        box.innerHTML = emoji;

        box.onclick = function () {
            if (this.classList.contains('boxOpen') || this.classList.contains('boxMatch')) return;

                this.classList.add('boxOpen');
                setTimeout(function () {
                    let openBoxes = document.querySelectorAll('.boxOpen:not(.boxMatch)');
                    if (openBoxes.length === 2) {
                        if (openBoxes[0].innerHTML === openBoxes[1].innerHTML) {
                            openBoxes.forEach(box => {
                                box.classList.add('boxMatch');
                                box.classList.remove('boxOpen');
                            });
                        } else {
                            setTimeout(() => {
                                openBoxes.forEach(box => box.classList.remove('boxOpen'));
                            }, 500);
                        }
                    }
                    if (document.querySelectorAll('.boxMatch').length === emojis.length) {
                        setTimeout(() => {
                            alert('You win! Level: ${level}');
                            level++;
                            document.getElementById('level').innerText = level;
                            initializeGame();
                        }, 500);
                    }
                }, 500);
            };
gameContainer.appendChild(box);
        });
}

function resetGame() {
    level = 1;
    document.getElementById('level').innerText = level;
    initializeGame();
}

initializeGame();
