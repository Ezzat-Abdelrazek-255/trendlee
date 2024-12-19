"use client";

import React, { HTMLAttributes } from "react";
import { LinkProps } from "next/link";
import Link from "next/link";
import { useLenis } from "@/libs/lenis";

type ScrollToLinkProps = LinkProps & HTMLAttributes<HTMLAnchorElement>;

const ScrollToLink = (props: ScrollToLinkProps) => {
  const lenis = useLenis();
  const handleClick = function (e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const element = e.target as HTMLAnchorElement;
    const elementHref = element.href.split("/");
    lenis?.scrollTo(elementHref[elementHref.length - 1]);
  };

  return (
    <Link onClick={handleClick} {...props}>
      {props.children}
    </Link>
  );
};

export default ScrollToLink;
