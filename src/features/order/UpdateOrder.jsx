import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder({ order }) {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <input className="hidden" name="type" value={JSON.stringify(1)} />
      <Button type="primary">Make Priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ request, params }) {
  const res = await request.formData();
  const data = Object.fromEntries(res);
  const type = JSON.parse(data.type);
  if (type === 1) {
    console.log("type is :", type, typeof type);
    await updateOrder(params.orderId, { priority: true });
  } else {
    console.log("type is :", type, typeof type);
    const totalPrice = JSON.parse(data.totalPrice);
    const updatedPrice = JSON.parse(data.tips) + totalPrice;
    await updateOrder(params.orderId, { priorityPrice: updatedPrice });
  }
  return null;
}
