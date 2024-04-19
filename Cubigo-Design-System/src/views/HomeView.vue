<template>
  <main>
    <div class="page-container">
      <SideBar></SideBar>
      <div class="home-wrapper">
        <section class="hero">
          <div class="hero-items">
            <div class="hero-banner">
              <h3>Design.<br>
                Develop.<br>
                Deliver.</h3>

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
            <h3>Get Started</h3>
            <p>Develop, construct and deliver seamless
              interactions using Cubigo’s latest design system.</p>
            <div class="tile">

            </div>
          </div>

          <div class="content-button">
            <h3>Figma UI-kit</h3>
            <p>Develop, construct and deliver seamless
              interactions using Cubigo’s latest design system.</p>
            <div class="tile">

            </div>
          </div>
        </section>

      </div>
    </div>

  </main>

  <footer>
    <Footer> </Footer>
  </footer>
</template>

<script setup>
import SideBar from "@/components/SideBar.vue";
import Footer from "@/components/Footer.vue";
</script>

<style scoped>

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
  font-size: 2.1875rem;
  font-style: normal;
  font-weight: 700;
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

.tile {
  height: 125px;
  width: 100%;
  border: 1px black solid;
  border-radius: 5px;
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

.page-seperator {
  padding: 0 80px 0 80px;
  margin-left: 20vw;
  margin-top: 45px;
  margin-bottom: 45px;
}

@media only screen and (max-width: 767px) {

}

@media only screen and (min-width: 768px) and (max-width: 1023px) {
}

@media only screen and (min-width: 1024px) and (max-width: 1279px) {
}

@media only screen and (min-width: 1280px) and (max-width: 1439px) {
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

  .hero h3 {
    margin-top: 10vh;
  }

  .hero img {
    margin-top: 10vh;
  }

  .tile {
    height: 220px;
  }
}

</style>
