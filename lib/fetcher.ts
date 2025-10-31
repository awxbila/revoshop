export async function fetcher<T = any>(url: string): Promise<T> {
  const res = await fetch(url);

  console.log(`[FETCH] ${res.url} → ${res.status} ${res.statusText}`);

  if (!res.ok) {
    let errorBody: any = null;
    try {
      errorBody = await res.json();
    } catch (err) {
      console.warn("[FETCH] Gagal parse error JSON", err);
    }

    console.error("[FETCH ERROR]", {
      url: res.url,
      status: res.status,
      statusText: res.statusText,
      body: errorBody,
    });

    const message =
      errorBody?.error ||
      errorBody?.message ||
      `Request failed with status ${res.status}`;
    const error = new Error(message);
    (error as any).info = errorBody;
    (error as any).status = res.status;
    throw error;
  }

  const data = await res.json();
  console.log("[FETCH DATA]", data);
  return data;
}
