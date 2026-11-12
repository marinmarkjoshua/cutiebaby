const CORRECT_CODE = "1003";
let currentInput = "";

function updateBoxes() {
    for (let i = 0; i < 4; i++) {
        const box = document.getElementById(`box-${i}`);
        if (currentInput[i]) {
            box.textContent = currentInput[i];
        } else {
            box.textContent = "🤍";
        }
    }
}

function pressKey(num) {
    if (currentInput.length < 4) {
        currentInput += num;
        updateBoxes();

        if (currentInput.length === 4) {
            setTimeout(checkCode, 250);
        }
    }
}

function deleteKey() {
    currentInput = currentInput.slice(0, -1);
    updateBoxes();
}

function checkCode() {
    if (currentInput === CORRECT_CODE) {
        switchPage("page-menu");
        currentInput = "";
        updateBoxes();
    } else {
        document.getElementById("angry-modal").classList.remove("hidden");
    }
}

function closeAngryModal() {
    document.getElementById("angry-modal").classList.add("hidden");
    currentInput = "";
    updateBoxes();
}

function switchPage(pageId) {
    const pages = document.querySelectorAll(".page");
    pages.forEach((page) => page.classList.remove("active"));
    document.getElementById(pageId).classList.add("active");
    window.scrollTo(0, 0);
}

function openGift(giftPageId) {
    switchPage(giftPageId);
}

function goBack(targetPageId) {
    switchPage(targetPageId);
}