<template>
  <main>
    <div class="page-container">
      <SideBar></SideBar>
      <div class="home-wrapper">
        <section class="hero">
          <div class="hero-items">
            <div class="hero-banner">
              <h3 id="design-h3">
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
              <a href="https://www.figma.com/file/zJavukqccaSxJfIYMb2z4X/Cubigo-DS?type=design&node-id=142%3A3790&mode=design&t=14edcERkftiySLDD-1">
                <img src="/src/assets/figma-block.svg" alt="figma-image-block">
              </a>
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
            <h3>Some of our <span id="blue-part">components</span></h3>
          </div>

          <div class="content-section">
            <div class="text-section">
              <a id="hoverOne">
                Buttons
              </a>
              <a id="hoverTwo">
                Inputs
              </a>
              <a id="hoverThree">
                Tags
              </a>
            </div>
            <div class="animation-section">
              <img id="animation-block" src="/src/assets/button-hover-image.svg" alt="">
            </div>
          </div>
        </section>


        <section class="resource-section-block">
          <div class="title-section">
            <h3>Our <span id="blue-part">resources</span></h3>
          </div>

          <div class="content-section">
            <div class="resource-image">
              <img src="/src/assets/resources.svg" alt="" srcset="">
            </div>
            <div class="resource-text">
              <div class="resource-item">
                <a>Accesibility </a>
                <hr>
              </div>
              <div class="resource-item">
                <a>GitHub </a>
                <hr>
              </div>
              <div class="resource-item">
                <a>Figma </a>
                <hr>
              </div>

            </div>
            <div class="resource-text">
              <div class="resource-item">
                <a>Content design </a>
                <hr>
              </div>
              <div class="resource-item">
                <a>Design guidelines </a>
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


window.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.text-section a');
  const image = document.getElementById('animation-block');



  const hoverOne = document.getElementById('hoverOne');
  const hoverTwo = document.getElementById('hoverTwo');
  const hoverThree = document.getElementById('hoverThree');

  hoverOne.addEventListener('mouseover', () => {
    image.style.opacity = '1';
    image.style.right = '0';
    image.src = '/src/assets/button-hover-image.svg'
  });

  hoverOne.addEventListener('mouseout', () => {
    image.style.opacity = '0';
    image.style.right = '-100%';
    image.src = '/src/assets/button-hover-image.svg'
  });

  hoverTwo.addEventListener('mouseover', () => {
    image.style.opacity = '1';
    image.style.right = '0';
    image.src = '/src/assets/dropdown.svg'
  });

  hoverTwo.addEventListener('mouseout', () => {
    image.style.opacity = '0';
    image.style.right = '-100%';
    image.src = '/src/assets/dropdown.svg'
  });

  hoverThree.addEventListener('mouseover', () => {
    image.style.opacity = '1';
    image.style.right = '0';
    image.src = '/src/assets/pills.svg'
  });

  hoverThree.addEventListener('mouseout', () => {
    image.style.opacity = '0';
    image.style.right = '-100%';
    image.src = '/src/assets/pills.svg'
  });

  /*links.forEach(link => {
    link.addEventListener('mouseover', () => {
      image.style.opacity = '1';
      image.style.right = '0';
    });

    link.addEventListener('mouseout', () => {
      image.style.opacity = '0';
      image.style.right = '-100%';
    });
  });*/
});
</script>

<style scoped>
#deliver-banner {
  margin: 0;
  padding: 0;
  font-weight: 100;
}


#blue-part {
  color: #0092E1;
  font-weight: 500 !important;
}

#develop-banner {
  margin: 0;
  padding: 0;
  font-weight: 500;
}

#design-h3 {
  color: #0092E1;
}

.page-container {
  position: relative;
  min-height: 100vh;
}

.hero {
  padding: 0 80px 0 80px;
  margin-left: 20vw;
}

*:focus {
  outline: none;
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

.resource-text a:hover {
  color: #0092E1;
}


.resource-item {
  width: 250px;
}

.resource-item hr {
  margin-bottom: 20px;
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
  font-weight: 300;
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
  right: -100%;
  opacity: 0;
  transition: opacity 0.75s ease, right 0.85s ease;
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
  font-size: 3.75rem;
  font-weight: 300;

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

@media only screen and (min-width: 415px) {
  .hamburger-menu {
    display: none;
  }
}


@media only screen and (max-width: 414px) {
  .hamburger-menu {
    padding: 0 80px 0 80px;
  }

  .hero {
    margin-left: 0;
  }

  .hero-content-block {
    margin-left: 0;
    flex-direction: column;
  }

  .content-button {
    width: 100%;
    margin-bottom: 10vh;
  }

  .content-button h3 {
    font-size: 2rem;
  }

  .component-section-block {
    margin-left: 0;
  }

  .resource-section-block {
    margin-left: 0;
  }

  .page-seperator {
    margin-left: 0;
  }

  .text-section a {
    font-size: 3rem;
  }

  .hero-banner h3 {
    font-size: 4rem;
    line-height: 5rem;
  }

  .content-section {
    flex-direction: column;
  }


  .animation-section img {
    width: 100px;
  }

  .resource-image img {
    display: none;
  }

  .title-section h3 {
    margin-bottom: 50px;
    font-size: 2.75rem;
  }

  .resource-item {
    width: 100%;
    margin-bottom: 40px;
  }

  .hero-image img {
    display: none;
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

@media only screen and (min-width: 1024px) {
  .hero-banner h3 {
    font-size: 5.5rem;
    line-height: 6rem;
  }

  .hero-image img {
    width: 400px;
  }
}

@media only screen and (min-width: 2000px) {
  .hero {
    padding: 0 80px 0 80px;
    margin-left: 20vw;
  }

  .hero-content-block {
    padding: 0 80px 0 80px

  }

  .page-seperator {
    padding: 0 80px 0 80px;
    margin-top: 150px;
    margin-bottom: 150px;
  }

  .resource-item {
    width: 350px;
    margin-bottom: 35px;
  }

  .resource-item a {
    font-size: 2.3rem;
  }

  .animation-section img {
    width: 1250px;
  }

  .hero-banner h3 {
    font-size: 10rem;
    line-height: 11rem;
  }

  .hero-image img {
    width: 615px;
  }

  .content-button h3 {
    font-size: 4rem;
    margin-bottom: 20px;
  }

  .content-button p {
    font-size: 2.24rem;
    margin-bottom: 25px;
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
