import { supabase } from '@/utils/supabase';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { data, error } = await supabase
    .from('playlists')
    .select('*')
    .eq('id', params.id)
    .single();

  if (error) {
    return Response.json({ error }, { status: 500 });
  }

  return Response.json(data);
}
