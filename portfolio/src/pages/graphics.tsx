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
    { url: "https://i.imgur.com/lxzU9gG.png", alt: "Image description 5" },
    { url: "https://i.imgur.com/ehb6Tfg.jpeg", alt: "Image description 5" },
    { url: "https://i.imgur.com/eVL4xI4.png", alt: "Image description 5" },
    { url: "https://i.imgur.com/gzBuNMZ.png", alt: "Image description 5" },
    { url: "https://cdn.discordapp.com/attachments/1100832550420750347/1194719584473841764/Route.png", alt: "Image description 5" },
    { url: "https://cdn.discordapp.com/attachments/1100832550420750347/1194386890728685649/1_ITS.png?ex=65d51479&is=65c29f79&hm=b95dcc01b7e3d6f25a24e11b7b04108dcac2121184634a796ded5101495523c1&", alt: "Image description 5" },
    { url: "https://cdn.discordapp.com/attachments/1100832550420750347/1142815896147066930/ProfilebannerBio.png", alt: "Image description 5" },
    { url: "https://cdn.discordapp.com/attachments/1100832550420750347/1142810622296346624/Profilebanner.png", alt: "Image description 5" },
    { url: "https://cdn.discordapp.com/attachments/968076976084639776/1034938761076801727/KLSX.png", alt: "Image description 5" },
    { url: "https://cdn.discordapp.com/attachments/968076976084639776/1033039811512127618/KSSR.png", alt: "Image description 5" },
    { url: "https://cdn.discordapp.com/attachments/968076976084639776/1031254672163487805/Pfp.jpg?ex=65db7641&is=65c90141&hm=ddc116bf8a8e018512622e2c96a052af728198beb2cabee7ecee6b6cc6175c05&", alt: "Image description 5" },
    { url: "https://cdn.discordapp.com/attachments/1126129915192954921/1191416147657117696/ETS2-172.png?ex=65d38041&is=65c10b41&hm=d460d81f4b75dbb53767f9e98836a0cd893e3fbe640ecc8d82cab4805d890379&", alt: "eee" },   
    // Add more images as needed
  ];

  return (
    <main className='bg-base-200'>
        <Navbar />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-20 p-10">
          {images.map((image, index) => (
            // Directly place img elements under the main grid container
            <img key={index} className="h-auto max-w-full rounded-lg" src={image.url} alt={image.alt} />
          ))}
        </div>

        <Footer />
    </main>
  )
}

export default graphics