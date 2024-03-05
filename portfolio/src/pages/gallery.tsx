import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const gallery = () => {
  // Array of image URLs and alt texts
  const images = [
    { url: "https://i.imgur.com/pxXdrtZ.jpeg", alt: "Image description 1" },
    { url: "https://i.imgur.com/3gyxXxr.jpeg", alt: "Image description 2" },
    { url: "https://i.imgur.com/jC4bTBI.jpeg", alt: "Image description 3" },
    { url: "https://i.imgur.com/uP5cYbR.jpeg", alt: "Image description 3" },
    { url: "https://i.imgur.com/rBq0Cd3.jpeg", alt: "Image description 3" },
    { url: "https://i.imgur.com/4WUmmJ9.jpeg", alt: "Image description 3" },
    { url: "https://i.imgur.com/0fEHvO1.jpeg", alt: "Image description 3" },
    { url: "https://i.imgur.com/rtTfeHk.jpeg", alt: "Image description 3" },
    { url: "https://i.imgur.com/6PEQZEn.jpeg", alt: "Image description 3" },
    { url: "https://i.imgur.com/noGu9Tx.jpeg", alt: "Image description 3" },
    { url: "https://i.imgur.com/ex5mAVs.jpeg", alt: "Image description 3" },
    { url: "https://i.imgur.com/Jpxq04z.jpeg", alt: "Image description 3" },
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

export default gallery