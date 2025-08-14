import { Link, useLocation } from "react-router-dom";
import { Menu as AntMenu } from "antd";

const items = [
  {
    key: "home",
    label: <Link to="/">Accueil</Link>,
  },
  {
    key: "cinema",
    label: <Link to="/cinema">Cinéma</Link>,
  },
  {
    key: "movies",
    label: <Link to="/movies">Films</Link>,
  },
];

const Menu = () => {
  const location = useLocation();
  // Détermine la clé active selon le chemin
  let selectedKey = "home";
  if (location.pathname.startsWith("/cinema")) selectedKey = "cinema";
  else if (location.pathname.startsWith("/movies")) selectedKey = "movies";

  return (
    <AntMenu mode="horizontal" items={items} selectedKeys={[selectedKey]} />
  );
};

export default Menu;
