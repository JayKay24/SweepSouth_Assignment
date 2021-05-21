import React from "react";
import Link from "next/link";
import NavigationContainer from "./containers/navigation.container";
import Search from "./search.component";
import ProfileQuantity from "../components/profiles/profile-quantity.component";

const NavBar = () => {
  return (
    <NavigationContainer>
      <Link href="/">
        <a>Home</a>
      </Link>
      <ProfileQuantity />
      <Search onSearch={() => {}} />
    </NavigationContainer>
  );
};

export default NavBar;
