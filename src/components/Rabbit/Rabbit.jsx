import React from "react";

import "./Rabbit.css";
import "./Rabbit--animations.css";

export function Rabbit({ className }) {
  return (
    <div class={`rabbit ${className}`}>
      <div class="left-ear--outer"></div>
      <div class="left-ear--inner"></div>
      <div class="right-ear--outer"></div>
      <div class="right-ear--inner"></div>
      <div class="head">
        <div class="head__eye head__eye--left"></div>
        <div class="head__eye head__eye--right"></div>
      </div>
    </div>
  );
}