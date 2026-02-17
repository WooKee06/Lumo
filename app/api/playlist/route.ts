export async function GET() {
  return Response.json([
    {
      id: 1,
      playlistTitle: 'Мой плейлист',
      playlistImg: '',
      playlistTracks: [
        {
          id: 1,
          title: 'Только не плачь',
          artist: 'Хасан Абубакаров',
          imgPreview:
            'https://music.pesni.fm/_next/image?url=https%3A%2F%2Fs3img.pesni.fm%2Fcollection%2F000%2F137%2F991%2F349238_large.jpg&w=256&q=75',
          src: '/audio/Хасан Абубакаров - Только не плачь (pesni.fm).mp3',
        },
        {
          id: 2,
          title: 'вредина',
          artist: 'алёна швец.',
          imgPreview:
            'https://images.genius.com/30512d6701e2121320637663f7ee9bfd.1000x1000x1.png',
          src: '/audio/aljona_shvec_-_vredina_73344045.mp3',
        },
        {
          id: 3,
          title: 'Worthless (Slowed)',
          artist: 'theqwix',
          imgPreview:
            'https://avatars.yandex.net/get-music-content/9868087/4a2640dd.a.32752110-1/600x600',
          src: '/audio/theqwix_-_Worthless_Slowed_78166069.mp3',
        },
        {
          id: 4,
          title: 'Нуар',
          artist: 'Moriko',
          imgPreview:
            'https://avatars.yandex.net/get-music-content/139444/0c3e0a94.a.6399933-1/200x200',
          src: '/audio/Moriko_-_Nuar_73554450.mp3',
        },
      ],
    },
    {
      id: 2,
      playlistTitle: 'Мои песенки',
      playlistImg: '',
      playlistTracks: [
        {
          id: 1,
          title: 'КУПЕР',
          artist: 'SQWOZ BAB',
          imgPreview:
            'https://avatars.yandex.net/get-music-content/17681324/b5be34ad.a.39856262-2/200x200',
          src: '/audio/SQWOZ_BAB_-_KUPER_80616287.mp3',
        },
        {
          id: 2,
          title: 'цветы',
          artist: 'тёмный принц',
          imgPreview:
            'https://avatars.yandex.net/get-music-content/15682289/25e5c893.a.36949141-1/200x200',
          src: '/audio/tjomnyjj_princ_-_cvety_79225579.mp3',
        },
        {
          id: 3,
          title: 'Лишь утратив все до конца, мы обретаем свободу...',
          artist: 'Skyvault',
          imgPreview:
            'https://avatars.yandex.net/get-music-content/14270105/72770f95.a.36915252-1/200x200',
          src: '/audio/Louna-Bojjcovskijj_kluB_-_Lish_utrativ_vse_do_konca_my_obretaem_svobodu_66762403.mp3',
        },
        {
          id: 4,
          title: 'тысячи причин',
          artist: 'SunThugga',
          imgPreview:
            'https://avatars.yandex.net/get-music-content/13663712/da32255c.a.33141803-1/m1000x1000',
          src: '/audio/SunThugga_-_tysyachi_prichin_77559877.mp3',
        },
        {
          id: 5,
          title: 'Wait A Minute - Slowed',
          artist: 'Bitis',
          imgPreview:
            'https://avatars.yandex.net/get-music-content/15317937/669c023a.a.37094214-1/200x200',
          src: '/audio/Willow_Smith_-_wait_a_minute_slowed_68497712.mp3',
        },
        {
          id: 6,
          title: 'гладиатор/рыцарь',
          artist: 'fallen777angel',
          imgPreview:
            'https://avatars.yandex.net/get-music-content/13529784/6ef6fee2.a.32902817-1/200x200',
          src: '/audio/fallen777angel_-_gladiatorrycar_78213332.mp3',
        },
      ],
    },
  ]);
}
