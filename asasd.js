document.getElementById('student-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const program = document.getElementById('program').value;

    const card = document.createElement('div');
    card.className = 'student-card';
    card.innerHTML = `<h3>${name}</h3><p>${program}</p>`;

    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.className = 'remove-btn';
    removeBtn.textContent = 'Remove';
    removeBtn.onclick = () => card.remove();
    card.appendChild(removeBtn);

    document.getElementById('grid').appendChild(card);
    e.target.reset();
});