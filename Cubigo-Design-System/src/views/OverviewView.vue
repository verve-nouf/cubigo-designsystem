<template>
  <main>
    <div class="page-container">
      <SideBar></SideBar>
      <div class="content-wrapper">
        <div class="content-hero">
          <div class="hero-title">
            <div class="hero-title-contentblock">
              <p>Overview</p>
            </div>
            <div class="hero-title-contentblock">
              <h1>Overview</h1>
            </div>
            <div class="hero-title-contentblock">
              <p class="description">Clickable elements used to perform actions.</p>
            </div>
          </div>
          <div class="hero-content-block">
          </div>

          <div class="separator">
            <hr>
          </div>
        </div>
      </div>
    </div>

  </main>
  <footer>
    <Footer></Footer>
  </footer>


</template>

<script>
import Footer from "@/components/Footer.vue";
import SideBar from "@/components/SideBar.vue";

export default {
  name: "OverviewView",
  components: {SideBar, Footer}
}
</script>

<style scoped>
.page-container {
  position: relative;
  min-height: 100vh;
}

.content-hero {
  padding: 10vh 45px 0 45px;
  margin-left: 20vw;
}

.hero-title p {
  font-family: Lato, "sans-serif";
  color: #0092E1;
}

.hero-title h1 {
  font-family: "Tiempos Fine", sans-serif;
}

.hero-title-contentblock {
  margin-bottom: 15px;
}

.hero-title .description {
  color: #808080;
}

.separator {
  margin: 50px 0;
}

</style>