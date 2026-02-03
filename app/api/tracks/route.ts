export async function GET() {
  return Response.json([
    {
      id: 1,
      title: 'Building Lights',
      listners: '20k',
      likes: '6.8k',
      artist: 'The Weekend',
      src: '/audio/The_Weeknd_-_Blinding_Lights_67509023.mp3',
    },
    {
      id: 2,
      title: 'Playboi Carti Madonna',
      listners: '20k',
      likes: '2.6k',
      artist: 'The Weekend',
      src: '/audio/The_Weeknd_Playboi_Carti_Madonna_-_Popular_78165204.mp3',
    },
    {
      id: 3,
      title: 'Lana Del Rey',
      listners: '20k',
      likes: '3.2k',
      artist: 'The Weekend',
      src: '/audio/The_Weeknd_Lana_Del_Rey_-_The_Abyss_79082956.mp3',
    },
  ]);
}
