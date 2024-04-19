<template>
  <main>
    <div class="page-container">
      <SideBar></SideBar>
      <div class="content-wrapper">
        <div class="content-hero">
          <div class="hero-title">
            <div class="hero-title-contentblock">
              <p class="mini-title">Components</p>
            </div>
            <div class="hero-title-contentblock">
              <h1>Buttons</h1>
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

          <article class="article-content">
            <div class="article-header">
              <h2>Usage</h2>
            </div>
            <div class="article-paragraph">
              <p>
                A button is a user interface (UI) element that users can interact with to trigger an action or perform a specific function within a digital interface. Buttons are a fundamental part of web and software design, providing a clear and actionable way for users to engage with an application.
              </p>
              <br>
              <p>
                They typically consist of a clickable area that responds to user input, such as a mouse click or a tap on a touchscreen device.
              </p>
            </div>
          </article>

          <div class="separator">
            <hr>
          </div>

          <article class="article-content">
            <div class="article-header">
              <h2>Types</h2>
            </div>
            <div class="article-subheader">
              <h3>
                Plain buttons
              </h3>
            </div>
            <div class="article-paragraph">
              <p>
                Buttons with ready to use Normal, Hover, Clicked, Loading and Disabled states. All for you to easily understand the magic of “States” layers within the symbols.
              </p>
            </div>
            <div class="article-image">
              <img src="/src/assets/button-image.svg" alt="button-image">
            </div>
          </article>

          <article class="article-content">
            <div class="article-subheader">
              <h3>
                Button with icon
              </h3>
            </div>
            <div class="article-paragraph">
              <p>
                Buttons with ready to use Normal, Hover, Clicked, Loading and Disabled states. All for you to easily understand the magic of “States” layers within the symbols.              </p>
            </div>
            <div class="article-image">
              <img src="/src/assets/button-image.svg" alt="button-image">
            </div>
          </article>

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
  name: "AvatarView",
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

.hero-title-contentblock {
  margin-bottom: 15px;
}

.separator {
  margin: 75px 0;
}

.hero-title-contentblock h1 {
  color: #000;
  font-family: "Tiempos Fine", sans-serif;
  font-size: 3rem;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 3.6rem */
}

.hero-title-contentblock .mini-title {
  color: rgba(0, 146, 225, 0.50);
  font-family: Lato, sans-serif;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 1.35rem */
  letter-spacing: -0.09375rem;
}

.hero-title-contentblock .description {
  color: rgba(0, 0, 0, 0.50);
  font-family: Lato, sans-serif;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 1.35rem */
}

.article-content .article-header h2 {
  color: #000;
  font-family: "Tiempos Fine", sans-serif;
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 2.4rem */
  margin-bottom: 10px;
}

.article-paragraph p {
  color: rgba(0, 0, 0, 0.50);
  font-family: Lato, sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 1.2rem */
  max-width: 75%;
}

.article-subheader h3  {
  color: #000;
  font-family: "Tiempos Fine", sans-serif;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 1.8rem */
  margin-bottom: 10px;
}

.article-content .article-image {
  margin-top: 30px;
  margin-bottom: 120px;
}

</style>