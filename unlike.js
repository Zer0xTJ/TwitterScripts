const buttonsContainerClass = 'css-175oi2r r-1kbdv8c r-18u37iz r-1wtj0ep r-1ye8kvj r-1s2bzr4'
const likedPath = "M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z";
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
(async () => {
    while (true) {
        window.scroll(0, document.body.scrollHeight);
        await delay(2000);
        let elms = document.getElementsByClassName(buttonsContainerClass);
        for (let i = 0; i < elms.length; i++) {
            let elm = elms[i].getElementsByTagName('div')[15];
            let elmPath = elm.getElementsByTagName('path')[0];
            if (elmPath.getAttribute('d') == likedPath) {
                elm.click();
                await delay(1000 * Math.random() + 1000);
            }
        }
    }
})()
