// Load prescription drugs data from JSON file
fetch("prescriptionDrugs.json")
  .then((response) => response.json())
  .then((data) => {
    const searchInput = document.getElementById("searchInput");
    const customButton = document.getElementById("customButton");
    const resultsList = document.getElementById("resultsList");

    const pulsateTimeline = gsap.timeline({ repeat: -1, yoyo: true });
    pulsateTimeline.to(customButton, {
      scale: 1.02, // Scale up to 110%
      duration: 0.5, // Animation duration
      ease: "power1.inOut", // Easing function
    });

    pulsateTimeline.play();

    customButton.addEventListener("click", () => {
      // Pause the pulsating button because the user already searched
      event.preventDefault();
      pulsateTimeline.pause();
      const searchTerm = searchInput.value.trim().toLowerCase();
      const filteredDrugs = data.generics.filter(
        (drug) =>
          drug.name.toLowerCase().includes(searchTerm) ||
          drug.brand.toLowerCase().includes(searchTerm)
      );

      displayResults(filteredDrugs);
    });

    // Restart the pulsating button because the user is requesting or indicating an intent of searching again
    searchInput.addEventListener("focus", () => {
      pulsateTimeline.restart(); // Restart the pulsating animation
    });

    function displayResults(drugs) {
      resultsList.innerHTML = "";
      const tl = gsap.timeline({ delay: 0.1 });

      drugs.forEach((drug) => {
        // Create a div for each drug
        const drugDiv = document.createElement("div");
        drugDiv.classList.add("drug-container");

        // Create paragraphs for drug information
        const nameParagraph = document.createElement("p");
        nameParagraph.textContent = `${drug.brand}`;

        const brandParagraph = document.createElement("p");
        brandParagraph.textContent = `Generic for ${drug.name}`;

        const strengthParagraph = document.createElement("p");
        strengthParagraph.textContent = `${drug.strength}`;

        const formParagraph = document.createElement("p");
        formParagraph.textContent = `${drug.form}`;

        const priceParagraph = document.createElement("p");
        priceParagraph.textContent = `$${drug.price.toFixed(2)}`;

        // Append paragraphs to drug div
        drugDiv.appendChild(nameParagraph);
        drugDiv.appendChild(brandParagraph);
        drugDiv.appendChild(strengthParagraph);
        drugDiv.appendChild(formParagraph);
        drugDiv.appendChild(priceParagraph);

        // Append drug div to results list
        resultsList.appendChild(drugDiv);
        tl.from(
          drugDiv,
          {
            duration: 0.5, // Animation duration
            opacity: 0, // Start opacity
            y: -20, // Y position offset
            ease: "power2.out", // Easing function
          },
          "-=0.1"
        ); // Staggered delay
      });
    }
  })
  .catch((error) => console.error("Error fetching prescription drugs:", error));
