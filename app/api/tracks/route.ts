export async function GET() {
  return Response.json([
    {
      id: 1,
      imgPreview:
        'https://avatars.mds.yandex.net/i?id=6680e679524354ce1770e495457316ad_l-2465206-images-thumbs&n=13',
      title: 'Building Lights',
      listners: '20k',
      likes: '6.8k',
      artist: 'The Weekend',
      src: '/audio/TheWeekndBlinding.mp3',
    },
    {
      id: 2,
      imgPreview:
        'https://avatars.mds.yandex.net/i?id=1d287f834247f9dbe7b49d334cf77ca3_l-7333143-images-thumbs&n=13',
      title: 'Playboi Carti Madonna',
      listners: '20k',
      likes: '2.6k',
      artist: 'The Weekend',
      src: '/audio/The_Weeknd_Playboi.mp3',
    },
    {
      id: 3,
      imgPreview:
        'https://p1.music.126.net/s62JRTOjsO5zUwocst7VBw==/109951163596846404.jpg',
      title: 'Lana Del Rey',
      listners: '20k',
      likes: '3.2k',
      artist: 'The Weekend',
      src: '/audio/The_Weeknd_Lana.mp3',
    },
  ]);
}
