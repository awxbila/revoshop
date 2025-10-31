export default async function ContactPage() {
  await new Promise((r) => setTimeout(r, 2000));
  return <h1>📞 Contact Page</h1>;
}
