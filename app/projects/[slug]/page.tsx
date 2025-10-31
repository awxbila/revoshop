import { notFound } from "next/navigation";
export const dynamicParams = false;

type Project = {
  slug: string;
  title: string;
  description: string;
};

const projects: Project[] = [
  {
    slug: "lms-redesign",
    title: "LMS Redesign",
    description: "Project redesign platform LMS untuk tampilan dan UX baru.",
  },
  {
    slug: "mobile-app",
    title: "Mobile App",
    description:
      "Pembuatan aplikasi mobile cross-platform dengan React Native.",
  },
  {
    slug: "admin-dashboard",
    title: "Admin Dashboard",
    description: "Dashboard internal untuk tim operasional dan support.",
  },
];

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return notFound();
  }

  return (
    <main style={{ padding: "2rem", maxWidth: "600px" }}>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <small>Generated at build: {new Date().toLocaleString()}</small>
    </main>
  );
}
