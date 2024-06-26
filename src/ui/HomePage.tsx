import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

export default function HomePage() {
  const userName = useSelector((state: any) => state.user.userName);

  return (
    <div className="my-10 sm:my-16 text-center px-4">
      <h1 className="text-xl font-semibold mb-8 md:text-3xl">
        <div>The best pizza.</div>
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {userName === "" ? (
        <CreateUser />
      ) : (
        <Button path="/menu" type="primary">
          Go to Menu
        </Button>
      )}
    </div>
  );
}
