import { useEffect, useState } from "react";
import { MenuItems } from "../../modals/modal";
import { getMenu } from "../../services/apiRestaurant";
import Loader from "../../ui/Loader";
import MenuItem from "./MenuItem";

export default function Menu() {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const menuData = await getMenu();
        setMenu(menuData.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching menu:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza: MenuItems) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}
