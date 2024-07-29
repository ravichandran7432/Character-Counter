document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');
    const charCount = document.getElementById('charCount');

    textInput.addEventListener('input', () => {
        const length = textInput.value.length;
        charCount.textContent = `Characters: ${length}`;
    });
});