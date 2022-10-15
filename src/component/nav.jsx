import React from "react";

export function Nav({name, text}) {
  return (
    <nav>
      <div class="nav">{name}</div>
      <p>{text}</p>
    </nav>
  );
}
