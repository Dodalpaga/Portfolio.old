"use strict";

function about_in_animations() {
  window.addEventListener("scroll", (e) => {
    in_animation_check();
  });

  window.addEventListener("resize", (e) => {
    in_animation_check();
  });

  in_animation_check();
}
