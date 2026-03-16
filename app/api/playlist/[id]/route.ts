import { supabase } from '@/utils/supabase';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { data, error } = await supabase
    .from('playlist_tracks')
    .select(`track:tracks(*)`)
    .eq('playlist_id', params.id);

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json(data.map((row: any) => row.track));
}

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { trackId } = await req.json();

  const playlistId = Number(params.id);
  if (!playlistId || isNaN(playlistId)) {
    return Response.json({ error: 'Invalid playlist id' }, { status: 400 });
  }
  const trackIdNumber = Number(trackId);

  if (isNaN(playlistId) || isNaN(trackIdNumber)) {
    return Response.json({ error: 'Invalid id(s)' }, { status: 400 });
  }

  const { data: exists } = await supabase
    .from('playlist_tracks')
    .select('*')
    .eq('playlist_id', playlistId)
    .eq('track_id', trackIdNumber)
    .single();

  if (exists) return Response.json(exists);

  const { data, error } = await supabase
    .from('playlist_tracks')
    .insert([{ playlist_id: playlistId, track_id: trackIdNumber }])
    .select();

  if (error) return Response.json({ error: error.message }, { status: 500 });

  return Response.json(data);
}
