import { supabase } from '@/utils/supabase';

export async function GET() {
  const { data, error } = await supabase.from('tracks').select(`*`);
  if (error) {
    return Response.json({ error }, { status: 500 });
  }
  return Response.json(data);
}
