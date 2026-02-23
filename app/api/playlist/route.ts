import { supabase } from '@/utils/supabase';

export async function GET() {
  const { data, error } = await supabase.from('playlists').select(`
      *,
      tracks (*)
    `);

  if (error) {
    return Response.json({ error }, { status: 500 });
  }

  return Response.json(data);
}
