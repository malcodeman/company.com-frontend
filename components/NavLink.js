import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function NavLink(props) {
  const { href, children } = props;
  const router = useRouter();
  const className = router.pathname === href ? "active" : "";

  return (
    <Link {...props} href={href}>
      {React.cloneElement(children, { className })}
    </Link>
  );
}

export default NavLink;
