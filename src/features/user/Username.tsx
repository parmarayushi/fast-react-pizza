import { useSelector } from "react-redux";

export default function Username() {
  const userName = useSelector((state: any) => state.user.userName);
  if (!userName) return null;

  return (
    <div className="hidden md:block text-sm font-semibold">{userName}</div>
  );
}
