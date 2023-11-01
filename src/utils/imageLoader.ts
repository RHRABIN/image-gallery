import image1 from "../assets/image-1.webp"
import image2 from "../assets/image-2.webp"
import image3 from "../assets/image-3.webp"
import image4 from "../assets/image-4.webp"
import image5 from "../assets/image-5.webp"
import image6 from "../assets/image-6.webp"
import image7 from "../assets/image-7.webp"
import image8 from "../assets/image-8.webp"
import image9 from "../assets/image-9.webp"
import image11 from "../assets/image-11.jpeg"
import image10 from "../assets/image-10.jpeg"

const importAllImages = () => {
    const images: { id: number, url: string }[] = [{ url: image11, id: 1 }, { url: image3, id: 2 }, { url: image2, id: 3 }, { url: image7, id: 4 }, { url: image9, id: 5 }, { url: image4, id: 6 }, { url: image5, id: 7 }, { url: image6, id: 8 }, { url: image8, id: 9 }, { url: image10, id: 10 }, { url: image1, id: 11 }];
    return images;
};

export default importAllImages;
