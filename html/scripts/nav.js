// html/scripts/nav.ts
var navLinks = [];
var activeLink = null;
var headings = Array.from(document.querySelectorAll("#content h2, #content h3, #thisweek"));
var hasPageNav = false;
function initNav() {
  const toc = document.createElement("ul");
  headings = headings.filter((h) => h.id);
  if (headings.length <= 1) {
    return;
  }
  for (const heading of headings) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#" + heading.id;
    a.textContent = heading.textContent;
    a.className = heading.tagName.toLowerCase();
    if (heading.id === "thisweek") {
      a.textContent = "This week's mutation";
      a.className = "h3";
    }
    li.append(a);
    navLinks.push(a);
    toc.append(li);
  }
  const nav = document.createElement("nav");
  nav.id = "toc";
  nav.ariaLabel = "Contents";
  nav.innerHTML = '<a class="nav-show" href="#nav-show">Contents</a>';
  nav.append(toc);
  document.getElementById("content")?.classList.add("has-toc");
  document.getElementById("content")?.before(nav);
  hasPageNav = true;
}
function updateScroll() {
  if (!hasPageNav)
    return;
  const scrollTop = window.scrollY;
  activeLink?.classList.remove("active");
  let low = 0, high = headings.length - 1, result = -1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (scrollTop > headings[mid].offsetTop - 75) {
      result = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  if (result !== -1) {
    if (!headings[result].offsetTop) {
      result = 1;
    }
    activeLink = navLinks[result] || null;
    activeLink.classList.add("active");
  }
}
initNav();
window.addEventListener("scroll", updateScroll);
window.addEventListener("resize", updateScroll);
