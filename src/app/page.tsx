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
    label: 'YT - Live clips',
    link: 'https://www.youtube.com/@DagerLive',
    icon: '/icons/youtube.svg',
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
    label: 'YT - Music',
    link: 'https://www.youtube.com/c/DagerMusic',
    icon: '/icons/youtube.svg',
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
    label: 'YT - El Antro de Dager',
    link: 'https://www.youtube.com/c/DagerXIV',
    icon: '/icons/youtube.svg',
  }
]

export default function Home() {
  return (
    <main className="flex w-2/3 justify-center mx-auto items-center mt-32">
      <div className="w-[380px]">
        <h1 className="text-6xl font-bold">Dot Dager.</h1>
        <h2 className="text-2xl font-semibold">
          Content creator. Developer. Guitarrist. Cat, pickles, and mystic falopita lover.
        </h2>

        <div className="flex flex-wrap ">
          {
            socialLinks.map(item => (
              <Link
                key={item.link}
                className="hover:bg-purple-950 text-sm flex items-center gap-1 bg-purple-800 px-2 py-1 m-1 rounded-md w-fit"
                href={item.link}
                passHref
              >
                <Image
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
        className="rounded-sm"
        src="/DagerHome.webp"
        alt="Dot Dager"
        width={380}
        height={380}
        priority
      />

    </main>
  );
}
