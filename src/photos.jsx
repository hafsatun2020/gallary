import PhotoAlbum from "react-photo-album";
const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];
import p1 from "./images/p1.jpg"
import p2 from "./images/2.jpg"
import p3 from "./images/p3.jpg"
import p4 from "./images/p4.jpg"
import p5 from "./images/p5.jpg"
import p6 from "./images/p1.jpg"
const photoLinks = [
    { src: p1, width: 300, height: 300 },
    { src: p2, width: 300, height: 300 },
    { src: p3, width: 300, height: 300 },
    { src:p4, width: 300, height: 300 },
    { src: p6, width: 300, height: 300 },
    { src: p5, width: 300, height: 300 },
];


const photos = photoLinks.map((photo) => (
    console.log(photo),
    {
    
    src: photo.src,
    width: photo.width,
    height: photo.height,
  
}));

export default photos;