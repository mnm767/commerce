const API_URL = process.env.NEXT_PUBLIC_WOOCOMMERCE_API_URL;
const API_KEY = process.env.WOOCOMMERCE_CONSUMER_KEY;
const API_SECRET = process.env.WOOCOMMERCE_CONSUMER_SECRET;

export async function fetchProducts() {
  const response = await fetch(`${API_URL}/products`, {
    headers: {
      Authorization: `Basic ${Buffer.from(`${API_KEY}:${API_SECRET}`).toString('base64')}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}
