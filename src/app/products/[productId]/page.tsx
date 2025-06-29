import { Card } from "@/components/ui";

export default async function page({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const data = await params;
  return (
    <Card
      title="This is detail page"
      subTitle={`Some text about details ${data.productId}`}
    />
  );
}
