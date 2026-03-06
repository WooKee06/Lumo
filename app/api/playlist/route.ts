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

export async function POST(req: Request) {
  const formData = await req.formData();

  const title = formData.get('title') as string;
  const file = formData.get('image') as File;

  if (!file) {
    return Response.json({ error: 'No image' }, { status: 400 });
  }

  const fileName = `${Date.now()}-${file.name}`;

  const bytes = await file.arrayBuffer();

  const { error: uploadError } = await supabase.storage
    .from('playlist-images')
    .upload(fileName, bytes, {
      contentType: file.type,
    });

  if (uploadError) {
    return Response.json({ error: uploadError.message }, { status: 500 });
  }

  const { data: urlData } = supabase.storage
    .from('playlist-images')
    .getPublicUrl(fileName);

  const imageUrl = urlData.publicUrl;

  const { data, error } = await supabase
    .from('playlists')
    .insert([
      {
        title,
        image: imageUrl,
        author: 'Kamil',
      },
    ])
    .select();

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json(data);
}
