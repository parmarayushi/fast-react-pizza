import { Link } from "react-router-dom";

export default function Button({
  children,
  disabled,
  path,
  type,
  onClick,
}: any) {
  const styles: any = {
    primary: "button py-3 px-4 md:px-6 md:py-4",
    small: "button px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      "button bg-transparent text-stone-400 border-2 border-stone-300 hover:bg-stone-300  hover:text-stone-800 focus:text-stone-800 focus:ring-stone-200 focus:bg-stone-300 py-2.5 px-4 md:px-6 md:py-3.5",
    round: "button px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
  };

  if (path) {
    return (
      <Link to={path} className={styles[type]}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button disabled={disabled} className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
