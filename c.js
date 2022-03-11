// Sukhdev Pawar4:33 PM
// <script>

//  const url1 = 'https://www.javascripttutorial.net/pic1.jpg';
//  const url2 = 'https://www.javascripttutorial.net/pic2.jpg';
//  const url3 = 'https://www.javascripttutorial.net/pic3.jpg';
 

//     function download(url, callback) {
//         setTimeout(() => {
//             // script to download the picture here
//             console.log(`Downloading ${url} ...`);
//             // process the picture once it is completed
//             callback(url);
            
//         }, 3000);
    // }


//     download(u
// -----------------------------------
 const url1 = 'https://www.javascripttutorial.net/pic1.jpg';
 const url2 = 'https://www.javascripttutorial.net/pic2.jpg';
 const url3 = 'https://www.javascripttutorial.net/pic3.jpg';
function download(url, callback) {
        setTimeout(() => {
            // script to download the picture here
            console.log(`Downloading ${url} ...`);
            // process the picture once it is completed
            callback(url);
            
        }, 3000);
    }
download(url1, function(picture){
    console.log(`Downloaded-1 ${picture}`);
        // download 2nd img
        download(url2, function(picture){
            console.log(`Downloaded-2 ${picture}`);

            download(url3, function(picture){
                console.log(`Downloaded-3 ${picture}`);
            });
        });
   });
// avc-qnku-yts