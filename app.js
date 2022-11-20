// Click on Go
document.querySelector("#create").addEventListener("click", () => {
    const data = document.querySelector("#url").value;
    const qr = `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${data}`
    document.querySelector(".qr-code img").src = qr
})