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

let originalData = undefined;
let originalGramFilter = undefined;
let originalSizeFilter = undefined;
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

      function filterAndSortResults(
        searchQuery,
        gramsFilter,
        quantityFilter,
        originalResults
      ) {
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

        // console.log(results);
        // Arrays to store count and size
        let countArray = [];
        let sizeArray = [];
        
        if (!originalData) {
          results.forEach((result) => {
            const { Count: count, Size: size } = result;
            countArray.push(count);
            sizeArray.push(size);
          });
          originalGramFilter = sizeArray; // Grams
          originalSizeFilter = countArray; // Quantity
          originalData = results;
        } else {
          sizeArray = sizeArray.length ? sizeArray : originalGramFilter; // Grams
          countArray = countArray.length ? countArray : originalSizeFilter; // Quantity
        }

        // Remove duplicates from countArray and sizeArray
        let uniqueCountArray = [...new Set(countArray)];
        let uniqueSizeArray = [...new Set(sizeArray)];

        // Sort the uniqueSizeArray in ascending order based on their numerical values
        uniqueSizeArray.sort((a, b) => {
          // Extract numeric part of size (e.g., "40 mg" -> 40)
          const sizeA = parseInt(a);
          const sizeB = parseInt(b);
          return sizeA - sizeB;
        });

        // Sort the uniqueCountArray in ascending order
        uniqueCountArray.sort((a, b) => a - b);

        // Displaying the sorted arrays without duplicates (for testing)
        // console.log("Unique Count Array (Sorted):", uniqueCountArray);
        // console.log("Unique Size Array (Sorted):", uniqueSizeArray);

        // Create filter dropdowns container
        let filterContainer = document.createElement("div");
        filterContainer.classList.add("filter-container");

        // Create grams filter dropdown - testing comment for upload
        let gramsFilterDiv = document.createElement("div");
        gramsFilterDiv.classList.add("col-auto");
        gramsFilterDiv.style.display = "block"; // Show the grams filter dropdown
        let gramsFilterSelect = document.createElement("select");
        gramsFilterSelect.id = "gramsFilter";
        gramsFilterSelect.classList.add("form-select");
        let innerSizeHTML = ``;
        uniqueSizeArray.forEach((size) => {
          innerSizeHTML += `<option value="${size}">${size}</option>`;
        });
        gramsFilterSelect.innerHTML =
          `<option value="">All Grams</option>` + innerSizeHTML;

        gramsFilterDiv.appendChild(gramsFilterSelect);
        filterContainer.appendChild(gramsFilterDiv);

        // Create quantity filter dropdown
        let quantityFilterDiv = document.createElement("div");
        quantityFilterDiv.classList.add("col-auto");
        quantityFilterDiv.style.display = "block"; // Show the quantity filter dropdown
        let quantityFilterSelect = document.createElement("select");
        quantityFilterSelect.id = "quantityFilter";
        quantityFilterSelect.classList.add("form-select");
        let innerQuantityHTML = ``;
        uniqueCountArray.forEach((count) => {
          innerQuantityHTML += `<option value="${count}">${count}</option>`;
        });
        quantityFilterSelect.innerHTML =
          `<option value="">All Quantities</option>` + innerQuantityHTML;
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
        resultsContainer.style.height = "auto"; // Reset height to auto to fit content
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
        resultsContainer.style.height = "auto";
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
        const gramsFilter = document.getElementById("gramsFilter")
          ? document.getElementById("gramsFilter").value
          : "";
        const quantityFilter = document.getElementById("quantityFilter")
          ? document.getElementById("quantityFilter").value
          : "";
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
