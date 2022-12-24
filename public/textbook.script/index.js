
(() => {
  const parent = document.getElementById("subjectIndexContainer");
  const [a, b] = [
    parent.getElementsByTagName("a"),
    parent.getElementsByClassName("subjectsBox")
  ];
  for (i = 0; i < b.length; i++) {
    b[i].style.backgroundColor = `hsla(${i * 360 / b.length}, 100%, 50%, 0.2)`;
  }
})();
