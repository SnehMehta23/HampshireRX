import e from "gsap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

e.from(".img1", {
  y: -10,
  opacity: 0,
  duration: 5,
  ease: "elastic",
  yoyo: !0,
  repeat: -1,
});

let pulsateTimeline = e.timeline({ repeat: -1, yoyo: !0 });
pulsateTimeline.to(customButton, {
  scale: 1.02,
  duration: 0.5,
  ease: "power1.inOut",
}),
  pulsateTimeline.play(),
  fetch("/prescriptionCatalog.json")
    .then((e) => e.json())
    .then((t) => {
      let i = document.getElementById("searchInput"),
        r = document.getElementById("customButton"),
        o = document.getElementById("resultsList");

      function n(e) {
        if (e.trim().length < 3) {
          return [];
        }
        let i = e.trim().toLowerCase(),
          r = t.filter(
            (e) =>
              e["Drug Name"].toLowerCase().startsWith(i) ||
              e["Generic For"].toLowerCase().startsWith(i)
          );

        const sortedResults = r.sort((a, b) => {
          const nameComparison = a["Drug Name"].localeCompare(b["Drug Name"]);
          if (nameComparison !== 0) {
            return nameComparison;
          }

          const sizeComparison = parseFloat(b["Size"]) - parseFloat(a["Size"]);
          if (sizeComparison !== 0) {
            return sizeComparison;
          }

          const countComparison = b["Count"] - a["Count"];
          return countComparison;
        });

        return sortedResults;
      }

      function s(t) {
        o.innerHTML = "";
        if (t.length === 0) {
          a();
          return;
        }
        let i = e.timeline({ delay: 0.1 }),
          r = document.createElement("div");
        r.classList.add("row", "g-2"),
          1 === t.length
            ? r.classList.add("row-cols-1")
            : 2 === t.length
            ? r.classList.add("row-cols-2", "two-results")
            : r.classList.add("row-cols-1", "row-cols-md-3"),
          t.forEach((e) => {
            let t = document.createElement("div");
            t.classList.add("col"),
              (t.innerHTML = `
                <div class="drug-container">
                  <p>${e["Drug Name"]}</p>
                  <p>Generic for ${e["Generic For"]}</p>
                  <p>${e.Size}</p>
                  <p>${e.Count} ${e["Count Unit"]}</p>
                  <p>$${e.Price.toFixed(2)}</p>
                </div>
              `),
              r.appendChild(t),
              i.from(
                t,
                { duration: 0.5, opacity: 0, y: -20, ease: "power2.out" },
                "-=0.1"
              );
          }),
          o.appendChild(r);
      }

      function a() {
        let t = document.createElement("div");
        t.classList.add("col"),
          (t.innerHTML = `
            <div class="drug-container-error">
              <p>Sorry, we couldn't find your medication, please call us at (847)-683-2244</p>
            </div>
          `);
        let i = e.timeline({ delay: 0.1 });
        (o.innerHTML = ""),
          o.appendChild(t),
          i.from(
            t,
            { duration: 0.5, opacity: 0, y: -20, ease: "power2.out" },
            "-=0.1"
          );
      }

      document
        .getElementById("searchContainer")
        .addEventListener("click", () => {
          event.preventDefault(), pulsateTimeline.pause();
          let e = i.value;
          if (e) {
            let t = n(e);
            s(t);
          }
        }),
        i.addEventListener("focus", () => {
          pulsateTimeline.restart();
        });
    })
    .catch((e) => console.error("Error fetching prescription drugs:", e));
