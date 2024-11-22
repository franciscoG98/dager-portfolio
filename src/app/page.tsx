import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/dager.32',
    icon: '/icons/instagram.svg',
  },
  {
    label: 'TikTok',
    link: 'https://www.tiktok.com/@elantrodedager',
    icon: '/icons/tiktok.svg',
  },
  {
    label: 'Discord',
    link: 'https://www.discord.gg/4NFk6TamAB',
    icon: '/icons/discord.svg',
  },
  {
    label: 'Github',
    link: 'https://www.github.com/MarianoVilla',
    icon: '/icons/github.svg',
  },
  {
    label: 'Twitch',
    link: 'https://www.twitch.tv/dagerxiv',
    icon: '/icons/twitch.svg',
  },
  {
    label: 'Spotify',
    link: 'https://www.open.spotify.com/artist/6bkClBMJd4qKxJp0J5vHsz?si=mbfNHqvBT9SKSQ-ZNhXHJg&nd=1',
    icon: '/icons/spotify.svg',
  },
  {
    label: 'X (former Twitter)',
    link: 'https://www.twitter.com/Dager_32',
    icon: '/icons/twitterx.svg',
  },
  {
    label: 'Dot Dager (main)',
    link: 'https://www.youtube.com/@DotDager',
    icon: '/icons/youtube.svg',
  },
  {
    label: 'Live clips',
    link: 'https://www.youtube.com/@DagerLive',
    icon: '/icons/youtube.svg',
  },
  {
    label: 'Music',
    link: 'https://www.youtube.com/c/DagerMusic',
    icon: '/icons/youtube.svg',
  },
  {
    label: 'DagerClips',
    link: 'https://www.youtube.com/@DagerClips',
    icon: '/icons/youtube.svg',
  },
  {
    label: 'El Antro de Dager',
    link: 'https://www.youtube.com/c/DagerXIV',
    icon: '/icons/youtube.svg',
  }
]

export default function Home() {
  return (
    <main className="flex w-2/3 flex-col lg:flex-row justify-center mx-auto mb-24 items-center mt-12 lg:mt-32">
      <div className="w-full mx-4 lg:w-1/2">
        <h1 className="text-5xl text-center lg:text-left lg:text-6xl font-bold text-purple-600">Dot Dager</h1>
        <h2 className="text-xl lg:text-2xl font-semibold">
          Content creator. Developer. Guitarist. Cat, pickles, and trav.. lover.
        </h2>

        <Image
          className="rounded-sm lg:hidden my-4 mx-auto"
          src="/DagerHome.webp"
          alt="Dot Dager"
          width={380}
          height={380}
          priority
        />

        <div className="flex flex-wrap w-full">
          {
            socialLinks.map(item => (
              <Link
                key={item.link}
                className="font-semibold text-black text-sm flex items-center gap-1 bg-purple-600 hover:bg-purple-700 px-3 py-1 m-1 rounded-lg w-fit"
                href={item.link}
                passHref
              >
                <Image
                  className="bg-white rounded-sm"
                  src={item.icon}
                  alt={`${item.label}`}
                  width={24}
                  height={24}
                  priority
                />
                {item.label}
              </Link>
            ))
          }
        </div>
      </div>

      <Image
        className="rounded-sm hidden lg:flex"
        src="/DagerHome.webp"
        alt="Dot Dager"
        width={380}
        height={380}
        priority
      />

    </main>
  );
}
