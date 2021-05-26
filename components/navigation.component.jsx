import Link from "next/link";
import NavigationContainer from "./containers/navigation.container";
import Search from "./search.component";
import ProfileQuantity from "../components/profiles/profile-quantity.component";
import SortBy from "./sortBy.component";

const NavBar = () => {
  return (
    <NavigationContainer className="navbar bg-light">
      <Link href="/">
        <a className="home-link navbar-brand">Home</a>
      </Link>
      <ProfileQuantity />
      <SortBy />
      <Search />
    </NavigationContainer>
  );
};

export default NavBar;
