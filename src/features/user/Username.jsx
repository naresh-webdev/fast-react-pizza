import { useSelector } from "react-redux";

function Username() {
  const username = useSelector((state) => {
    // console.log(state, "test1");
    return state.user.username;
  });

  if (!username) return null;
  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
}

export default Username;
