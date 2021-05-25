import Link from "next/link";
import NavigationContainer from "./containers/navigation.container";
import Search from "./search.component";
import ProfileQuantity from "../components/profiles/profile-quantity.component";

const NavBar = () => {
  return (
    <NavigationContainer className="navbar navbar-dark bg-dark">
      <Link href="/" className="home-link navbar-brand">
        <a>Home</a>
      </Link>
      <ProfileQuantity />
      <Search />
    </NavigationContainer>
  );
};

export default NavBar;
