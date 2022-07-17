
     const container = this.document.getElementById("container");



 var opt = {
    margin: 0,
    filename: 'AnshulResume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 4 },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
};

function generateResume() {
    container.style.width="100%"
    container.style.height="100%"
    container.style.marginTop="2%"
    html2pdf(container, opt)
}

    document.getElementById("download")
        .addEventListener("click", () => {
            // console.log(invoice);
            // console.log(window);
            
           
            
            generateResume();

            window.onload = () => {
            html2pdf().from(container).set(opt).save();

            }
            

        })
