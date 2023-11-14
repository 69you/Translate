document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('translateButton').addEventListener('click', function () {
        const textToTranslate = document.getElementById('inputText').value;
        if (textToTranslate) {
            translateText(textToTranslate, function (translatedText) {
                copyToClipboard(translatedText);
            });
        }
    });
});

function translateText(text, callback) {
    fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=zh-TW&tl=zh-CN&dt=t&q=${encodeURIComponent(text)}`)
        .then(response => response.json())
        .then(data => {
            const translatedText = data[0][0][0];
            callback(translatedText);
        })
        .catch(e => alert('Err while Translate', e));
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            alert(`Success Copied:\n${text}`);
        })
        .catch(e => {
            alert('Failed Copied', e);
        });
}