import e from"gsap";import"bootstrap/dist/css/bootstrap.min.css";import"bootstrap";e.from(".img1",{y:-10,opacity:0,duration:5,ease:"elastic",yoyo:!0,repeat:-1});let pulsateTimeline=e.timeline({repeat:-1,yoyo:!0});pulsateTimeline.to(customButton,{scale:1.02,duration:.5,ease:"power1.inOut"}),pulsateTimeline.play(),fetch("/prescriptionDrugs.json").then(e=>e.json()).then(t=>{let r=document.getElementById("searchInput"),i=document.getElementById("customButton"),a=document.getElementById("resultsList");function n(){let t=e.timeline({delay:.1}),r=document.createElement("div");r.classList.add("col"),r.innerHTML=`
        <div class="drug-container-error">
          <p>Sorry, we couldn’t find your medication, please call us at (847)-683-2244</p>
        </div>
      `,a.innerHTML="",a.appendChild(r),t.from(r,{duration:.5,opacity:0,y:-20,ease:"power2.out"},"-=0.1")}function o(t){a.innerHTML="";let r=e.timeline({delay:.1}),i=document.createElement("div");i.classList.add("row","row-cols-1","row-cols-md-3","g-2"),t.forEach(e=>{let t=document.createElement("div");t.classList.add("col"),t.innerHTML=`
          <div class="drug-container">
            <p>${e.brand}</p>
            <p>Generic for ${e.name}</p>
            <p>${e.strength}</p>
            <p>${e.form}</p>
            <p>$${e.price.toFixed(2)}</p>
          </div>
        `,i.appendChild(t),r.from(t,{duration:.5,opacity:0,y:-20,ease:"power2.out"},"-=0.1")}),a.appendChild(i)}document.getElementById("searchContainer"),i.addEventListener("click",()=>{event.preventDefault(),pulsateTimeline.pause();let e=r.value.trim().toLowerCase();if(e){let i=t.flatMap(t=>t.generics.filter(t=>t.brand.toLowerCase().startsWith(e)||t.name.toLowerCase().startsWith(e)));0===i.length?n():o(i)}}),r.addEventListener("focus",()=>{pulsateTimeline.restart()})}).catch(e=>console.error("Error fetching prescription drugs:",e));