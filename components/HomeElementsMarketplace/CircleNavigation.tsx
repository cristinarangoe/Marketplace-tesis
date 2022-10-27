import React from "react";

const CircleNavigation = ({ href }: { href: string }) => {
  return (
    <a href={href}>
      <div className="rounded-full bg-fuchsia-400 h-3.5 w-3.5 mt-3"></div>
    </a>
  );
};

export default CircleNavigation;