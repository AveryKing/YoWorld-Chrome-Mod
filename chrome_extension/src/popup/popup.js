let display = 'main';
let selected = 0;
let outfitItems = {};
let outfitImages = document.getElementById("outfitImages");
let itemIdArr = [];
let selectedOutfits = [];
chrome.runtime.onMessage.addListener(
    async (response, sender, sendResponse) => {
        if (response.cmd === 'setupOutfitSwitcher') {
            let outfitData = response.data;
            outfitData.forEach(outfit => {
                    itemIdArr.push(outfit.items)
                    outfitItems[outfit.outfitId] = itemIdArr;
                    let img = document.createElement("img");
                    img.src = outfit.image;
                    img.alt = outfit.outfitId;
                    img.classList.add("image");
                    img.style.width = '75%';
                    let container = document.createElement("div");
                    container.classList.add("container");
                    container.appendChild(img);
                    outfitImages.appendChild(container)
                    let div = document.createElement("div");
                    div.classList.add("middle");
                    div.onclick = () => {
                        if (selected > 0) {
                            let containerClassList =  div.parentElement.classList
                            containerClassList.remove('container')
                            containerClassList.add('container-selected');
                            setTimeout(() => {
                                fadeOut(outfitImages, 0);
                                fadeOut(document.getElementById("outfitText"), 0);
                                fadeIn(document.getElementById("currentlySwitching"), 700);
                            }, 200);
                            [].forEach.call(document.querySelectorAll('.container-selected'), (el) => {
                                let cln = el.cloneNode(true);
                                let subArr = []
                                let switchingOutfits = document.getElementById('switchingOutfits');
                                subArr.push(outfitItems[el.childNodes[0].alt])
                                selectedOutfits.push(subArr);
                                cln.style.width = '150px';
                                cln.classList.remove('container-selected');
                                switchingOutfits.style.display = "inline-flex";
                                switchingOutfits.appendChild(cln);
                                sessionStorage.setItem('switchingOutfits', 'true');
                            });
                            chrome.tabs.query({active: true, currentWindow: true}, async (tabs) => {
                                chrome.tabs.sendMessage(tabs[0].id, {
                                    cmd: 'startOutfitSwitcher',
                                    data: selectedOutfits
                                })
                            });
                        } else {
                            div.parentElement.classList.remove('container');
                            div.parentElement.classList.add('container-selected');
                            selected += 1
                        }
                    }
                    let div2 = document.createElement("div");
                    div2.classList.add("text");
                    div2.innerText = "Select";
                    div.appendChild(div2);
                    container.appendChild(div);
                }
            )
        }
    })


document.getElementById('showCommands').onclick = () => {
    document.getElementById('mainDiv').style.display = 'none';
    document.getElementById('headerDiv').style.display = 'none';
    document.getElementById('txtDiv').style.display = 'none';
    document.getElementById('commandsDiv').style.display = 'block';
    display = 'commands';
}

document.getElementById('goBack').onclick = () => {
    document.getElementById('commandsDiv').style.display = 'none';
    document.getElementById('mainDiv').style.display = 'block';
    document.getElementById('txtDiv').style.display = 'block';
    document.getElementById('headerDiv').style.display = 'block';


    display = 'main';
}

document.getElementById('showPermissions').onclick = () => {
    document.getElementById('headerDiv').style.display = 'none';

    document.getElementById('txtDiv').style.display = 'none';
    document.getElementById('commandsDiv').style.display = 'none';
    document.getElementById('mainDiv').style.display = 'none';
    document.getElementById('permissionsDiv').style.display = 'block';
}

document.getElementById('openSwitcher').onclick = () => {
    document.getElementById('headerDiv').style.display = 'none';

    document.getElementById('txtDiv').style.display = 'none';
    document.getElementById('commandsDiv').style.display = 'none';
    document.getElementById('mainDiv').style.display = 'none';
    document.getElementById('permissionsDiv').style.display = 'none';
    document.getElementById('outfitSwitcher').style.display = 'block';
    chrome.tabs.query({active: true, currentWindow: true}, async (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {cmd: 'getOutfitData'});
    });


}

function fadeIn(elem, ms) {
    if (!elem)
        return;

    elem.style.opacity = 0;
    elem.style.filter = "alpha(opacity=0)";
    elem.style.display = "inline-block";
    elem.style.visibility = "visible";

    if (ms) {
        var opacity = 0;
        var timer = setInterval(function () {
            opacity += 50 / ms;
            if (opacity >= 1) {
                clearInterval(timer);
                opacity = 1;
            }
            elem.style.opacity = opacity;
            elem.style.filter = "alpha(opacity=" + opacity * 100 + ")";
        }, 50);
    } else {
        elem.style.opacity = 1;
        elem.style.filter = "alpha(opacity=1)";
    }
}

function fadeOut(elem, ms) {
    if (!elem)
        return;

    if (ms) {
        var opacity = 1;
        var timer = setInterval(function () {
            opacity -= 50 / ms;
            if (opacity <= 0) {
                clearInterval(timer);
                opacity = 0;
                elem.style.display = "none";
                elem.style.visibility = "hidden";
            }
            elem.style.opacity = opacity;
            elem.style.filter = "alpha(opacity=" + opacity * 100 + ")";
        }, 50);
    } else {
        elem.style.opacity = 0;
        elem.style.filter = "alpha(opacity=0)";
        elem.style.display = "none";
        elem.style.visibility = "hidden";
    }
}

function fadeOut(elem, ms) {
    if (!elem)
        return;

    if (ms) {
        var opacity = 1;
        var timer = setInterval(function () {
            opacity -= 50 / ms;
            if (opacity <= 0) {
                clearInterval(timer);
                opacity = 0;
                elem.style.display = "none";
                elem.style.visibility = "hidden";
            }
            elem.style.opacity = opacity;
            elem.style.filter = "alpha(opacity=" + opacity * 100 + ")";
        }, 50);
    } else {
        elem.style.opacity = 0;
        elem.style.filter = "alpha(opacity=0)";
        elem.style.display = "none";
        elem.style.visibility = "hidden";
    }
}