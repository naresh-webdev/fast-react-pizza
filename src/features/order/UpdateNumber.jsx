import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { useState } from "react";

function UpdateNumber({ totalPrice }) {
  const [tips, setTips] = useState(5);
  const fetcher = useFetcher();
  return (
    <fetcher.Form
      method="PATCH"
      className="flex items-center justify-center gap-2"
    >
      <input
        className="input"
        name="tips"
        value={tips}
        onChange={(e) => setTips(e.value)}
        required
        type="number"
      />
      <input className="hidden" name="totalPrice" value={totalPrice} />
      <input className="hidden" name="type" value={JSON.stringify(2)} />
      <Button type="small">Add tips</Button>
    </fetcher.Form>
  );
}

export default UpdateNumber;
