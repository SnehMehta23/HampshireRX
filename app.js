// import gsap from "gsap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap";

// gsap.from(".img1", {
//   y: -10,
//   opacity: 0,
//   duration: 5,
//   ease: "elastic",
//   yoyo: true,
//   repeat: -1,
// });

// let pulsateAnimation = gsap.timeline({ repeat: -1, yoyo: true });
// pulsateAnimation.to(customButton, {
//   scale: 1.02,
//   duration: 0.5,
//   ease: "power1.inOut",
// }),
//   pulsateAnimation.play(),
//   fetch("/prescriptionCatalog.json")
//     .then((response) => response.json())
//     .then((jsonData) => {
//       let searchInput = document.getElementById("searchInput"),
//         searchButton = document.getElementById("customButton"),
//         resultsContainer = document.getElementById("resultsList");

//         function filterAndSortResults(searchQuery, gramsFilter, quantityFilter) {
//           if (searchQuery.trim().length < 3) {
//             return [];
//           }
//           let lowercaseQuery = searchQuery.trim().toLowerCase(),
//             filteredResults = jsonData.filter((item) => {
//               const drugNameMatch =
//                 item["Drug Name"].toLowerCase().startsWith(lowercaseQuery) ||
//                 item["Generic For"].toLowerCase().startsWith(lowercaseQuery);
//               const gramsMatch = gramsFilter === "" || parseFloat(item["Size"]) === parseFloat(gramsFilter);
//               const quantityMatch = quantityFilter === "" || item["Count"] === parseInt(quantityFilter);
//               return drugNameMatch && gramsMatch && quantityMatch;
//             });

//           const sortedResults = filteredResults.sort((a, b) => {
//             const nameComparison = a["Drug Name"].localeCompare(b["Drug Name"]);
//             if (nameComparison !== 0) {
//               return nameComparison;
//             }

//             const sizeComparison = parseFloat(b["Size"]) - parseFloat(a["Size"]);
//             if (sizeComparison !== 0) {
//               return sizeComparison;
//             }

//             const countComparison = b["Count"] - a["Count"];
//             return countComparison;
//           });

//           return sortedResults;
//         }

//       function renderResults(results) {
//         resultsContainer.innerHTML = "";
//         if (results.length === 0) {
//           renderErrorMessage();
//           return;
//         }
//         let animationTimeline = gsap.timeline({ delay: 0.1 }),
//           resultRow = document.createElement("div");
//         resultRow.classList.add("row", "g-2"),
//           1 === results.length
//             ? resultRow.classList.add("row-cols-1")
//             : 2 === results.length
//             ? resultRow.classList.add("row-cols-2", "two-results")
//             : resultRow.classList.add("row-cols-1", "row-cols-md-3"),
//           results.forEach((result) => {
//             let resultCol = document.createElement("div");
//             resultCol.classList.add("col"),
//               (resultCol.innerHTML = `
//                 <div class="drug-container">
//                   <p>${result["Drug Name"]}</p>
//                   <p>Generic for ${result["Generic For"]}</p>
//                   <p>${result.Size}</p>
//                   <p>${result.Count} ${result["Count Unit"]}</p>
//                   <p>$${result.Price.toFixed(2)}</p>
//                 </div>
//               `),
//               resultRow.appendChild(resultCol),
//               animationTimeline.from(
//                 resultCol,
//                 { duration: 0.5, opacity: 0, y: -20, ease: "power2.out" },
//                 "-=0.1"
//               );
//           }),
//           resultsContainer.appendChild(resultRow);
//       }

//       function renderErrorMessage() {
//         let errorCol = document.createElement("div");
//         errorCol.classList.add("col"),
//           (errorCol.innerHTML = `
//             <div class="drug-container-error">
//               <p>Sorry, we couldn't find your medication, please call us at (847)-683-2244</p>
//             </div>
//           `);
//         let animationTimeline = gsap.timeline({ delay: 0.1 });
//         (resultsContainer.innerHTML = ""),
//           resultsContainer.appendChild(errorCol),
//           animationTimeline.from(
//             errorCol,
//             { duration: 0.5, opacity: 0, y: -20, ease: "power2.out" },
//             "-=0.1"
//           );
//       }

//       document
//         .getElementById("searchContainer")
//         .addEventListener("click", () => {
//           event.preventDefault(), pulsateAnimation.pause();
//           let searchValue = searchInput.value;
//           if (searchValue) {
//             let results = filterAndSortResults(searchValue);
//             renderResults(results);
//           }
//         });
//     })
//     .catch((error) =>
//       console.error("Error fetching prescription drugs:", error)
//     );

// import gsap from "gsap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap";

// gsap.from(".img1", {
//   y: -10,
//   opacity: 0,
//   duration: 5,
//   ease: "elastic",
//   yoyo: true,
//   repeat: -1,
// });

// let pulsateAnimation = gsap.timeline({ repeat: -1, yoyo: true });
// pulsateAnimation.to(customButton, {
//   scale: 1.02,
//   duration: 0.5,
//   ease: "power1.inOut",
// }),
//   pulsateAnimation.play(),
//   fetch("/prescriptionCatalog.json")
//     .then((response) => response.json())
//     .then((jsonData) => {
//       let searchInput = document.getElementById("searchInput"),
//         searchButton = document.getElementById("customButton"),
//         resultsContainer = document.getElementById("resultsList");

//       function filterAndSortResults(searchQuery, gramsFilter, quantityFilter) {
//         if (searchQuery.trim().length < 3) {
//           return [];
//         }
//         let lowercaseQuery = searchQuery.trim().toLowerCase(),
//           filteredResults = jsonData.filter((item) => {
//             const drugNameMatch =
//               item["Drug Name"].toLowerCase().startsWith(lowercaseQuery) ||
//               item["Generic For"].toLowerCase().startsWith(lowercaseQuery);
//             const gramsMatch = gramsFilter === "" || parseFloat(item["Size"]) === parseFloat(gramsFilter);
//             const quantityMatch = quantityFilter === "" || item["Count"] === parseInt(quantityFilter);
//             return drugNameMatch && gramsMatch && quantityMatch;
//           });

//         const sortedResults = filteredResults.sort((a, b) => {
//           const nameComparison = a["Drug Name"].localeCompare(b["Drug Name"]);
//           if (nameComparison !== 0) {
//             return nameComparison;
//           }

//           const sizeComparison = parseFloat(b["Size"]) - parseFloat(a["Size"]);
//           if (sizeComparison !== 0) {
//             return sizeComparison;
//           }

//           const countComparison = b["Count"] - a["Count"];
//           return countComparison;
//         });

//         return sortedResults;
//       }

//       function renderResults(results) {
//         resultsContainer.innerHTML = "";
//         if (results.length === 0) {
//           renderErrorMessage();
//           return;
//         }
//         let animationTimeline = gsap.timeline({ delay: 0.1 }),
//           resultRow = document.createElement("div");
//         resultRow.classList.add("row", "g-2"),
//           1 === results.length
//             ? resultRow.classList.add("row-cols-1")
//             : 2 === results.length
//             ? resultRow.classList.add("row-cols-2", "two-results")
//             : resultRow.classList.add("row-cols-1", "row-cols-md-3"),
//           results.forEach((result) => {
//             let resultCol = document.createElement("div");
//             resultCol.classList.add("col"),
//               (resultCol.innerHTML = `
//                 <div class="drug-container">
//                   <p>${result["Drug Name"]}</p>
//                   <p>Generic for ${result["Generic For"]}</p>
//                   <p>${result.Size}</p>
//                   <p>${result.Count} ${result["Count Unit"]}</p>
//                   <p>$${result.Price.toFixed(2)}</p>
//                 </div>
//               `),
//               resultRow.appendChild(resultCol),
//               animationTimeline.from(
//                 resultCol,
//                 { duration: 0.5, opacity: 0, y: -20, ease: "power2.out" },
//                 "-=0.1"
//               );
//           }),
//           resultsContainer.appendChild(resultRow);
//       }

//       function renderErrorMessage() {
//         let errorCol = document.createElement("div");
//         errorCol.classList.add("col"),
//           (errorCol.innerHTML = `
//             <div class="drug-container-error">
//               <p>Sorry, we couldn't find your medication, please call us at (847)-683-2244</p>
//             </div>
//           `);
//         let animationTimeline = gsap.timeline({ delay: 0.1 });
//         (resultsContainer.innerHTML = ""),
//           resultsContainer.appendChild(errorCol),
//           animationTimeline.from(
//             errorCol,
//             { duration: 0.5, opacity: 0, y: -20, ease: "power2.out" },
//             "-=0.1"
//           );
//       }

//       // Get a reference to the submit button
//       const submitButton = document.getElementById("customButton");

//       // Attach the event listener to the submit button
//       submitButton.addEventListener("click", (event) => {
//         event.preventDefault();
//         pulsateAnimation.pause();
//         const searchValue = searchInput.value.trim();
//         const gramsFilter = document.getElementById("gramsFilter").value;
//         const quantityFilter = document.getElementById("quantityFilter").value;
//         if (searchValue) {
//           const results = filterAndSortResults(searchValue, gramsFilter, quantityFilter);
//           renderResults(results);
//         }
//       });

//       // Attach the focus event listener to the search input
//       searchInput.addEventListener("focus", () => {
//         pulsateAnimation.restart();
//       });
//     })
//     .catch((error) =>
//       console.error("Error fetching prescription drugs:", error)
//     );

import gsap from "gsap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

gsap.from(".img1", {
  y: -10,
  opacity: 0,
  duration: 5,
  ease: "elastic",
  yoyo: true,
  repeat: -1,
});

let pulsateAnimation = gsap.timeline({ repeat: -1, yoyo: true });
pulsateAnimation.to(customButton, {
  scale: 1.02,
  duration: 0.5,
  ease: "power1.inOut",
}),
  pulsateAnimation.play(),
  fetch("/prescriptionCatalog.json")
    .then((response) => response.json())
    .then((jsonData) => {
      let searchInput = document.getElementById("searchInput"),
        searchButton = document.getElementById("customButton"),
        resultsContainer = document.getElementById("resultsList");

      function filterAndSortResults(searchQuery, gramsFilter, quantityFilter) {
        if (searchQuery.trim().length < 3) {
          return [];
        }
        let lowercaseQuery = searchQuery.trim().toLowerCase(),
          filteredResults = jsonData.filter((item) => {
            const drugNameMatch =
              item["Drug Name"].toLowerCase().startsWith(lowercaseQuery) ||
              item["Generic For"].toLowerCase().startsWith(lowercaseQuery);
            const gramsMatch =
              gramsFilter === "" ||
              parseFloat(item["Size"]) === parseFloat(gramsFilter);
            const quantityMatch =
              quantityFilter === "" ||
              item["Count"] === parseInt(quantityFilter);
            return drugNameMatch && gramsMatch && quantityMatch;
          });

        const sortedResults = filteredResults.sort((a, b) => {
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

      function renderResults(results) {
        resultsContainer.innerHTML = "";
        if (results.length === 0) {
          renderErrorMessage();
          return;
        }

        // Create filter dropdowns container
        let filterContainer = document.createElement("div");
        filterContainer.classList.add("filter-container");

        // Create grams filter dropdown
        let gramsFilterDiv = document.createElement("div");
        gramsFilterDiv.classList.add("col-auto");
        gramsFilterDiv.style.display = "block"; // Show the grams filter dropdown
        let gramsFilterSelect = document.createElement("select");
        gramsFilterSelect.id = "gramsFilter";
        gramsFilterSelect.classList.add("form-select");
        gramsFilterSelect.innerHTML = `
        <option value="">All Grams</option>
        <option value="10">10 mg</option>
        <option value="20">20 mg</option>
        <option value="30">30 mg</option>
        <option value="40">40 mg</option>
    <option value="50">50 mg</option>
    <option value="100">100 mg</option>
    <option value="150">150 mg</option>
    <option value="200">200 mg</option>
    <option value="250">250 mg</option>
    <option value="300">300 mg</option>
    <option value="350">350 mg</option>
    <option value="400">400 mg</option>
    <option value="450">450 mg</option>
    <option value="500">500 mg</option>
    <option value="550">550 mg</option>
    <option value="600">600 mg</option>
    <option value="650">650 mg</option>
    <option value="700">700 mg</option>
    <option value="750">750 mg</option>
    <option value="800">800 mg</option>
    <option value="850">850 mg</option>
    <option value="900">900 mg</option>
    <option value="950">950 mg</option>
    <option value="1000">1000 mg</option>
`;
        gramsFilterDiv.appendChild(gramsFilterSelect);
        filterContainer.appendChild(gramsFilterDiv);

        // Create quantity filter dropdown
        let quantityFilterDiv = document.createElement("div");
        quantityFilterDiv.classList.add("col-auto");
        quantityFilterDiv.style.display = "block"; // Show the quantity filter dropdown
        let quantityFilterSelect = document.createElement("select");
        quantityFilterSelect.id = "quantityFilter";
        quantityFilterSelect.classList.add("form-select");
        quantityFilterSelect.innerHTML = `
    <option value="">All Quantities</option>
    <option value="1">1</option>
    <option value="3">3</option>
    <option value="5">5</option>
    <option value="7">7</option>
    <option value="9">9</option>
    <option value="10">10</option>
    <option value="20">20</option>
    <option value="30">30</option>
    <option value="40">40</option>
    <option value="60">60</option>
    <option value="75">75</option>
    <option value="90">90</option>
    <option value="120">120</option>
`;
        quantityFilterDiv.appendChild(quantityFilterSelect);
        filterContainer.appendChild(quantityFilterDiv);

        // Create apply button
        let applyButton = document.createElement("button");
        applyButton.type = "button";
        applyButton.classList.add("custom-btn");
        applyButton.innerHTML =
          "<strong class='primary-font-color'>Apply</strong>";
        applyButton.addEventListener("click", () => {
          applyFilters();
        });
        filterContainer.appendChild(applyButton);

        // Add filter dropdowns container to results container
        resultsContainer.appendChild(filterContainer);

        let animationTimeline = gsap.timeline({ delay: 0.1 }),
          resultRow = document.createElement("div");
        resultRow.classList.add("row", "g-2"),
          1 === results.length
            ? resultRow.classList.add("row-cols-1")
            : 2 === results.length
            ? resultRow.classList.add("row-cols-2", "two-results")
            : resultRow.classList.add("row-cols-1", "row-cols-md-3"),
          results.forEach((result) => {
            let resultCol = document.createElement("div");
            resultCol.classList.add("col"),
              (resultCol.innerHTML = `
                <div class="drug-container">
                  <p>${result["Drug Name"]}</p>
                  <p>Generic for ${result["Generic For"]}</p>
                  <p>${result.Size}</p>
                  <p>${result.Count} ${result["Count Unit"]}</p>
                  <p>$${result.Price.toFixed(2)}</p>
                </div>
              `),
              resultRow.appendChild(resultCol),
              animationTimeline.from(
                resultCol,
                { duration: 0.5, opacity: 0, y: -20, ease: "power2.out" },
                "-=0.1"
              );
          }),
          resultsContainer.appendChild(resultRow);
      }

      function renderErrorMessage() {
        let errorCol = document.createElement("div");
        errorCol.classList.add("col"),
          (errorCol.innerHTML = `
            <div class="drug-container-error">
              <p>Sorry, we couldn't find your medication, please call us at (847)-683-2244</p>
            </div>
          `);
        let animationTimeline = gsap.timeline({ delay: 0.1 });
        (resultsContainer.innerHTML = ""),
          resultsContainer.appendChild(errorCol),
          animationTimeline.from(
            errorCol,
            { duration: 0.5, opacity: 0, y: -20, ease: "power2.out" },
            "-=0.1"
          );
      }

      function applyFilters() {
        const searchValue = searchInput.value.trim();
        const gramsFilter = document.getElementById("gramsFilter").value;
        const quantityFilter = document.getElementById("quantityFilter").value;
        if (searchValue) {
          const results = filterAndSortResults(
            searchValue,
            gramsFilter,
            quantityFilter
          );
          renderResults(results);
        }
      }

      // Get a reference to the submit button
      const submitButton = document.getElementById("customButton");

      // Attach the event listener to the submit button
      submitButton.addEventListener("click", (event) => {
        event.preventDefault();
        pulsateAnimation.pause();
        applyFilters();
      });

      // Attach the focus event listener to the search input
      searchInput.addEventListener("focus", () => {
        pulsateAnimation.restart();
      });
    })
    .catch((error) =>
      console.error("Error fetching prescription drugs:", error)
    );
