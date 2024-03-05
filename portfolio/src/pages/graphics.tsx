import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const graphics = () => {
  // Array of image URLs and alt texts
  const images = [
    { url: "https://i.imgur.com/b6rfQwH.jpeg", alt: "Image description 1" },
    { url: "https://i.imgur.com/ced3P03.jpeg", alt: "Image description 2" },
    { url: "https://i.imgur.com/ebabvE6.jpeg", alt: "Image description 3" },
    { url: "https://i.imgur.com/4JXUtqF.jpeg", alt: "Image description 4" },
    { url: "https://i.imgur.com/ehb6Tfg.jpeg", alt: "Image description 5" },
    { url: "https://i.imgur.com/eVL4xI4.png", alt: "Image description 5" },
    { url: "https://i.imgur.com/gzBuNMZ.png", alt: "Image description 5" }, // TE
    { url: "https://gallery.titanvtc.com/E8/TEPartners.png", alt: "Image description 5" },
    { url: "https://gallery.titanvtc.com/1yr/Route.png", alt: "Image description 5" },
    { url: "https://i.imgur.com/lxzU9gG.png", alt: "Image description 5" },
    { url: "https://titanvtc.com/profileimg/profilebanner.png", alt: "Image description 5" },
    { url: "/work/ETS2-IMG.png", alt: "Image description 5" }, 
    { url: "https://titanvtc.com/profileimg/valcord/bio.png", alt: "Image description 5" },
    { url: "/work/KLSX.png", alt: "Image description 5" }, // CHARTS
    { url: "/work/KPBR.png", alt: "Image description 5" },
    { url: "/work/KSSR.png", alt: "Image description 5" },
    // Add more images as needed
  ];

  return (
    <main className='bg-base-200'>
        <Navbar />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-20 p-10">
          {images.map((image, index) => (
            // Directly place img elements under the main grid container
            <Image key={index} className="h-auto max-w-full rounded-lg" src={image.url} alt={image.alt} width={500} height={300} />
          ))}
        </div>

        <Footer />
    </main>
  )
}

export default graphics