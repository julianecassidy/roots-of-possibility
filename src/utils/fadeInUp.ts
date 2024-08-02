// fade in grid items  ==================================

document.addEventListener("scroll", function () {
  const pageTop = scrollTop(document)
  const pageBottom = pageTop + window.innerHeight;
  const tags = document.querySelectorAll(".fadein");

  for (let i = 0; i < tags.length; i++) {
    const tag = tags[i];

    if (offset(tag).top < pageBottom) {
      tag.classList.add("visible");
    } else {
      tag.classList.remove("visible");
    }
  }
})

function scrollTop(el: any, value?: number) {
  let win;
  if (el.window === el) {
    win = el;
  } else if (el.nodeType === 9) {
    win = el.defaultView;
  }

  if (value === undefined) {
    return win ? win.scrollY : el.scrollTop;
  }

  if (win) {
    win.scrollTo(win.scrollX, value);
  } else {
    el.scrollTop = value;
  }
}

function offset(el: any) {
  let box = el.getBoundingClientRect();
  let docElem = document.documentElement;
  return {
    top: box.top + window.scrollY - docElem.clientTop,
    left: box.left + window.scrollX - docElem.clientLeft
  };
}

