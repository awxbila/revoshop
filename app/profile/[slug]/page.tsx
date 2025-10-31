import { Metadata } from "next";

type ProfilePageParams = {
  slug: string;
};

async function getProfileInfo(id: string) {
  return {
    id,
    name: `User ${id}`,
    bio: "This is a demo profile",
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<ProfilePageParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const profile = await getProfileInfo(slug);

  return {
    title: `${profile.name}’s profile`,
  };
}

export default async function ProfilePage({
  params,
}: {
  params: Promise<ProfilePageParams>;
}) {
  const { slug } = await params;
  const profile = await getProfileInfo(slug);

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">{profile.name}</h1>
      <p>{profile.bio}</p>
    </main>
  );
}
