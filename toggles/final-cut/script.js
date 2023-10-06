const imageElement = document.getElementById("image");
        let isImage1 = true;

        function toggleImage() {
            if (isImage1) {
                imageElement.src = "light.png";
            } else {
                imageElement.src = "dark.png";
            }

            isImage1 = !isImage1;
        }