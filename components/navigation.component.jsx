import React from "react";
import Link from "next/link";
import NavigationContainer from "./containers/navigation.container";
import Search from "./search.component";

const NavBar = () => {
  return (
    <NavigationContainer>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Search onSearch={() => {}} />
    </NavigationContainer>
  );
};

export default NavBar;
