function byID(id) {
  return document.getElementById(id);
}

byID("toggle").onclick = function () {
  if (byID("container").classList.contains("closed")) {
    byID("container").classList.remove("closed");
  } else {
    byID("container").classList.add("closed");
  }
};
