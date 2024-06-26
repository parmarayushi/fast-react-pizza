import { Link, useNavigate } from "react-router-dom";

export default function LinkButton({ children, path }: any) {
  const navigate = useNavigate();
  const className = "text-sm text-blue-500 hover:text-blue-600";

  if (path === "-1")
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  return (
    <Link to={path} className={className}>
      {children}
    </Link>
  );
}
