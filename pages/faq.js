export async function getStaticProps() {
  return {
    props: {},
  };
}

export default function FAQ() {
  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h1>❓ Frequently Asked Questions</h1>
      <p>RevoShop adalah toko online fiktif untuk latihan Next.js.</p>
      <p>
        Semua data produk diambil dari{" "}
        <a href="https://fakestoreapi.com">FakeStoreAPI</a>.
      </p>
    </div>
  );
}
