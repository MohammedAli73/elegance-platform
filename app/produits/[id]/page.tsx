import ProductDetailPage from "@/components/ProductDetails";
import { products } from "@/lib/data";
import { ProductDetailPageProps } from "@/components/ProductDetails";

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}
export default async function Page({ params }: { params: { id: string } }) {
  return <ProductDetailPage params={params} />;
}
