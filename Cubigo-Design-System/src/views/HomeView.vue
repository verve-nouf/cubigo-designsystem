<template>
  <main>
    <div class="page-container">
      <SideBar></SideBar>
      <div class="home-wrapper">
        <section class="hero">
          <div class="hero-items">
            <div class="hero-banner">
              <h3>
                Design.
              </h3>
              <h3 id="develop-banner">
                Develop.
              </h3>
              <h3 id="deliver-banner">
                Deliver.
              </h3>
            </div>
            <div class="hero-image">
              <img src="/src/assets/hero-image.svg" alt="hero-image">
            </div>
          </div>
        </section>

        <section class="page-seperator">
          <hr>
        </section>

        <section class="hero-content-block">
          <div class="content-button">
            <h3>Figma UI-kit</h3>
            <p>Develop, construct and deliver seamless
              interactions using Cubigo’s latest design system.</p>
            <div class="tile">
              <img src="/src/assets/figma-block.svg" alt="figma-image-block">
            </div>
          </div>

          <div class="content-button">
            <h3>Guidelines</h3>
            <p>Develop, construct and deliver seamless
              interactions using Cubigo’s latest design system.</p>
            <div class="tile">
              <img src="/src/assets/guidelines-block.svg" alt="guidelines-image-block">
            </div>
          </div>
        </section>

        <section class="component-section-block">
          <div class="title-section">
            <h3>Components</h3>
          </div>

          <div class="content-section">
            <div class="text-section">
              <a>
                Buttons
              </a>
              <a>
                Inputs
              </a>
              <a>
                Grids
              </a>
            </div>
            <div class="animation-section">
              <img src="/src/assets/button-hover-image.svg" alt="">
            </div>
          </div>
        </section>


        <section class="resource-section-block">
          <div class="title-section">
            <h3>Resources</h3>
          </div>

          <div class="content-section">
            <div class="resource-image">
              <img src="/src/assets/img.png" alt="" srcset="">
            </div>
            <div class="resource-text">
              <div class="resource-item">
                <a>Linkje 1 </a>
                <hr>
              </div>
              <div class="resource-item">
                <a>Linkje 2 </a>
                <hr>
              </div>
              <div class="resource-item">
                <a>Linkje 3 </a>
                <hr>
              </div>

            </div>
            <div class="resource-text">
              <div class="resource-item">
                <a>Linkje 4 </a>
                <hr>
              </div>
              <div class="resource-item">
                <a>Linkje 5 </a>
                <hr>
              </div>
              <div class="resource-item">
                <a>Linkje 6 </a>
                <hr>
              </div>
            </div>
          </div>
        </section>


      </div>
    </div>

  </main>

  <footer>
    <Footer></Footer>
  </footer>
</template>

<script setup>
// Import Vue components
import SideBar from "@/components/SideBar.vue";
import Footer from "@/components/Footer.vue";

// Add event listener to handle hover effect
window.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.text-section a');
  const image = document.querySelector('.animation-section img');

  links.forEach(link => {
    link.addEventListener('mouseover', () => {
      image.style.opacity = '1'; // Ensure opacity is set to 1 initially
      image.style.right = '0'; // Ensure the image is fully visible initially
    });

    link.addEventListener('mouseout', () => {
      image.style.opacity = '0'; // Set opacity to 0 to fade out the image
      image.style.right = '-100%'; // Move the image out of the viewport to the right
    });
  });
});
</script>

<style scoped>
#deliver-banner {
  margin: 0;
  padding: 0;
  font-weight: 100;
}

#develop-banner {
  margin: 0;
  padding: 0;
  font-weight: 500;
}


.page-container {
  position: relative;
  min-height: 100vh;
}

.hero {
  padding: 0 80px 0 80px;
  margin-left: 20vw;
}

.hero-banner h3 {
  font-family: "Tiempos Fine", sans-serif;
  color: #000;
  font-size: 5.50rem;
  font-style: normal;
  font-weight: 700;
  line-height: 6.875rem;
}

.content-button {
  width: 40%;
}

.content-button h3, .content-button p {
  margin-bottom: 10px;
}

.content-button h3 {
  color: #000;
  font-family: "Tiempos Fine", sans-serif;
  font-size: 1.8875rem;
  font-style: normal;
  font-weight: 700;
}

.resource-image img {
  width: 250px;
}

.resource-text a {
  font-size: 1.25rem;
  font-family: Lato, sans-serif;
  display: block;

}

.resource-item {
  width: 200px;
}

.resource-item hr {
  margin-bottom: 10px;
  margin-top: 10px;
}

.content-button p {
  color: #000;
  font-family: Lato, sans-serif;
  font-size: 1.0625rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.03125rem;
}

.title-section h3 {
  margin-bottom: 10vh;
}

.text-section a {
  font-family: "Tiempos Fine", sans-serif;
  font-weight: 100;
  font-size: 5rem;
  margin-bottom: 15vh;
  text-decoration: none;
  display: block;
}

.content-section {
  display: flex;
  justify-content: space-between;
}

.animation-section img {

  top: 0;
  right: -100%; /* Initially position the image outside of the viewport */
  opacity: 0; /* Initially set opacity to 0 to hide the image */
  transition: opacity 0.75s ease, right 0.85s ease; /* Add transition for opacity and right position */
}



/*.tile {
  height: 125px;
  width: 100%;
  border: 1px black solid;
  border-radius: 5px;
}*/

.tile img {
  width: 100%;
}

.hero-items {
  display: flex;
  justify-content: space-between;
}

.hero h3 {
  margin-top: 8vh;
}

.hero img {
  margin-top: 8vh;
}

.hero-content-block {
  display: flex;
  justify-content: space-between;
  padding: 0 80px 0 80px;
  margin-left: 20vw;
}

.resource-section-block {
  padding: 0 80px 0 80px;
  margin-top: 15vh;
  margin-left: 20vw;
}

.component-section-block {
  padding: 0 80px 0 80px;
  margin-top: 15vh;
  margin-left: 20vw;
}

.title-section h3 {
  font-size: 2rem;
}

.page-seperator {
  padding: 0 80px 0 80px;
  margin-left: 20vw;
  margin-top: 45px;
  margin-bottom: 45px;
}

@media only screen and (max-width: 768px) {
  .page-seperator {
    margin-left: 25vw;
  }

  .hero-banner h3 {
    font-size: 3rem;
    line-height: 3.5rem;
  }

  .hero-image img {
    width: 200px;
  }

  .content-button h3 {
    font-size: 1rem;
  }

  .content-button p {
    font-size: 0.75rem;
  }

  .tile {
    height: 75px;
  }

  .hero {
    margin-left: 25vw;
  }

  .hero-content-block {
    margin-left: 25vw;
  }
}

@media only screen and (min-width: 1024px) {
  .hero-banner h3 {
    font-size: 4rem;
    line-height: 5rem;
  }

  .hero-image img {
    width: 315px;
  }
}

@media only screen and (min-width: 2000px) {
  .hero {
    padding: 0 300px 0 300px;
    margin-left: 20vw;
  }

  .hero-content-block {
    padding: 0 300px 0 300px;
  }

  .page-seperator {
    padding: 0 300px 0 300px;
    margin-top: 150px;
    margin-bottom: 150px;
  }

  .hero-banner h3 {
    font-size: 10rem;
    line-height: 11rem;
  }

  .hero-image img {
    width: 615px;
  }

  .content-button h3 {
    font-size: 3rem;
  }

  .content-button p {
    font-size: 1.50rem;
  }

  .tile {
    height: 220px;
  }

  .hero h3 {
    margin-top: 10vh;
  }

  .hero img {
    margin-top: 10vh;
  }


}

</style>
