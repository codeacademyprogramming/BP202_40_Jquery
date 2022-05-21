let imgBox = document.querySelector('.imgBox');

imgBox.ondragover = function(e){
    e.preventDefault();
}

imgBox.ondrop = function(e){
    e.preventDefault();

    [...e.dataTransfer.files].forEach(x => {

        let reader = new FileReader();

        reader.onload = function(e){
            let img = document.createElement('img');
            img.setAttribute('src',reader.result)
            imgBox.appendChild(img);
        }

        reader.readAsDataURL(x)
    });
}