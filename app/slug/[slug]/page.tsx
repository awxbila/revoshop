interface BlogSearchParams {
  filter?: string;
  search?: string;
}

export default async function SlugPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<BlogSearchParams>;
}) {
  console.log();
  const { slug } = await params;
  const { filter, search } = await searchParams;

  console.log(filter, search);

  return <h1>Slug: {slug}</h1>;
}
