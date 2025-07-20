export function createImage(src){
    const img = document.createElement("img");
    img.src = src;
    return img;
}

export function createLink(url){
    const link = document.createElement("a");
    link.textContent = url;
    link.href = url;
    link.target = "_blank";
    return link;
}

export function insertRow(table, elements, onclick){
    const row = table.insertRow();
    for (const element of elements){
        const column = row.insertCell();
        column.append(element);
    }
    row.onclick = onclick;
}

export async function getRemoteData(endPoint) {
    try {
        const apiUrl = "https://api.github.com/";
        const response = await fetch(apiUrl + endPoint);
        const result = await response.json();
        return result;
    } catch (ex) {
        console.log(ex);
    }
}