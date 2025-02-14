function handleAnswer(answer) {
    if (answer === 'no') {
        const noBtn = document.getElementById('noBtn');
        noBtn.style.position = 'absolute';
        noBtn.style.top = Math.random() * 80 + '%';
        noBtn.style.left = Math.random() * 80 + '%';
        setTimeout(() => {
            handleAnswer('no'); // Continue moving the button
        }, 100);
    } else {
        document.getElementById('page1').classList.add('hidden');
        document.getElementById('page2').classList.remove('hidden');
    }
}

function openLetter(message) {
    alert(`Message: ${message}\nLong message for my love goes here.`);
}