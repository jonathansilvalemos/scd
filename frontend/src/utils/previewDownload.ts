document.getElementsByTagName("input")[0].addEventListener("change", previewFile);
document.getElementsByTagName("textarea")[0].addEventListener("input", previewText);
document.getElementsByTagName("button")[0].addEventListener("click", downloadFile);

let preview = document.querySelector('img');
function previewFile(event: any) {
    let reader = new FileReader();
    let file = event.target.files[0];
  
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        if (preview){
      preview.src = reader.result;
      document.getElementsByTagName("textarea")[0].value = reader.result;}
    };
  }
  
  // Improve file type using this
  // https://stackoverflow.com/questions/71967186/how-to-get-file-extension-from-base64-string-in-flutter-dart?noredirect=1&lq=1
  function previewText(event) {
    let file = event.target.value.replace(/^data:image\/[a-z]+;base64,/, "");
    preview.src = `data:image/png;base64,${file}`;
  }
  
  function downloadFile() {
    let nameFile = "Image.png";
    var a = document.createElement("a");
    a.href = preview.src;
    a.download = nameFile;
    a.click();
  }
export function previewText(event: any) {
    let file = event.target.value.replace(/^data:image\/[a-z]+;base64,/, "");
    if (preview) {
        preview.src = `data:image/png;base64,${file}`;
    }
}

export function downloadFile() {
    let nameFile = "Image.png";
    var a = document.createElement("a");
    a.href = preview.src;
    a.download = nameFile;
    a.click();
}