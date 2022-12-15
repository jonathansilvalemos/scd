export function blobToFile(imagem:Blob) {
     if (imagem){
        const blob = new Blob([imagem], {type: 'application/pdf'});
        const href = URL.createObjectURL(blob);
        console.log("href: "+href);
        
        const a = Object.assign(document.createElement('a'),{
            href,
            download: 'escala',
        });
        window.open(href);
        URL.revokeObjectURL(href);
        a.remove();
    }
}