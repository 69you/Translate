document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('translateButton').addEventListener('click', function () {
        const textToTranslate = document.getElementById('inputText').value;
        if (textToTranslate) {
            fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=zh-TW&tl=zh-CN&dt=t&q=${encodeURIComponent(textToTranslate)}`)
            .then(response => response.json())
            .then(data => {
                const text = data[0][0][0];
                navigator.clipboard.writeText(text)
                .then(() => {
                    alert(`Success Copied:\n${text}`);
                })
                .catch(e => {
                    alert('Failed Copied', e);
                });
            })
            .catch(e => alert('Err while Translate', e));
        }
    });
});