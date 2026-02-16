import Image from 'next/image'
import Link from 'next/link'

interface MainDispalyProps {
  list: {
    _id: string,
    title: string,
    description: string,
    image: string,
    rating: number,
    url: string,
    media: {
      media_url: string
    }[],
  }[]
}

export default function MainDisplay({list}: MainDispalyProps) {
  console.log("🚀 ~ MainDisplay ~ list:", list)
  return (
    <main className='flex flex-wrap gap-4 justify-center mt-10'>
      {list.map((item) => (
        <Link href={`/anime/${item._id}`} key={item._id} className="relative w-[200px] h-[300px] group overflow-hidden rounded-md shadow-2xl">
          <Image
            src={item.media[0]?.media_url}
            alt={item.title}
            width={200}
            height={300}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105 cursor-pointer"
          />
          <h2 className="absolute bottom-0 left-0 w-full text-center text-white p-3 bg-linear-to-t from-black/80 to-transparent transform translate-y-full group-hover:translate-y-0 transition-all duration-300 cursor-pointer">
            {item.title}
          </h2>
        </Link>
      ))}
    </main>
  )
}
