export default async function CatchAllPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  return <h1>[...slug]: {JSON.stringify(slug)}</h1>;
}
