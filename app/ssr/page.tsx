export const dynamic = "force-dynamic";

export default async function SSRPage() {
  return <div> Page rendered on {new Date().toLocaleString()}</div>;
}
