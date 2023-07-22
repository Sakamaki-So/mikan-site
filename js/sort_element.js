const fruitsList = ["mikan", "kanpei", "kiyomi", "busshukan", "benimadonna"];
const sugerContentSort = ["kanpei", "benimadonna", "kiyomi", "mikan", "busshukan"];
const scentContentSort = ["busshukan", "kiyomi", "mikan", "benimadonna", "kanpei"];
const sourContentSort = ["busshukan", "kanpei", "mikan", "kiyomi", "benimadonna"];
const seedFilter = ["mikan", "kiyomi"];

let sortMode = 0;

function initSort() {
    fruitsList.forEach(element => document.getElementById(element).style.display = "block");
}

function sortElement(sortList) {
    initSort();
    let ulList = document.getElementById("citrus-list");
    let liArr = Array.prototype.slice.call(ulList.getElementsByTagName("li"));
    let resultList = [];
    sortList.forEach(element => resultList.push(liArr.find(e => e.id === element)));
    resultList.forEach(element => ulList.appendChild(ulList.removeChild(element)));
}

function filterElement(filterList) {
    filterList.forEach(element => document.getElementById(element).style.display = "none");
}

function sort(mode, className) {
    clickable = false;
    setTimeout(() => clickable = true, 300);
    sortMode = sortMode === mode ? 0 : mode;
    document.getElementsByClassName("sort-menu")[0]
            .querySelectorAll("button").forEach(
                element => element.style.backgroundColor = "#f5f5f5");
    if(sortMode !== 0) {
        document.getElementsByClassName(className)[0].style.backgroundColor = "#dddddd";
    }
    switch (sortMode) {
        case 0:
            sortElement(fruitsList);
            break;
        case 1:
            sortElement(sugerContentSort);
            break;
        case 2:
            sortElement(scentContentSort);
            break;
        case 3:
            sortElement(sourContentSort);
            break;
        case 4:
            filterElement(seedFilter);
            break;
        default:
            sortElement(fruitsList);
            break;
    }
}

let buttonSort = () => {
    $(".suger-content-sort").on("click",
        () => sort(1, "suger-content-sort"));
    $(".scent-content-sort").on("click",
        () => sort(2, "scent-content-sort"));
    $(".sour-content-sort").on("click",
        () => sort(3, "sour-content-sort"));
    $(".seed-filter").on("click",
        () => sort(4, "seed-filter"));
}
jQuery(() => buttonSort());