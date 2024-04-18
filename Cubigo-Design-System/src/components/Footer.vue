<template>
<footer>
  <div class="footer">
    <div class="footer-sepator">
      <hr>
    </div>

    <div class="footer-content">
      <h3>© Cubigo 2023</h3>
      <ul class="external-links">
        <li><a>Accesibility</a></li>
        <li><a>Terms of Use</a></li>
        <li><a>GitHub</a></li>
      </ul>
    </div>
  </div>
</footer>


</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

footer {
  bottom: 0;
}

.footer {
  margin-left: 20vw;
  margin-top: 5vh;
  background-color: #F4F4F4;
  font-family: Lato, sans-serif;
}

.footer hr {
  display: flex;
  margin: 0 45px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  padding: 45px;
}

.external-links {
  display: flex;
  list-style: none;
  column-gap: 1em;
}

.footer-sepator {
  padding-top: 65px;
}

/* Styles for screens smaller than 768px (e.g., smartphones in portrait mode) */
@media only screen and (max-width: 767px) {
}

/* Styles for screens between 768px and 1023px (e.g., tablets in portrait mode) */
@media only screen and (min-width: 768px) and (max-width: 1023px) {
}

/* Styles for screens between 1024px and 1279px (e.g., tablets in landscape mode, smaller desktops) */
@media only screen and (min-width: 1024px) and (max-width: 1279px) {
}

/* Styles for screens between 1280px and 1439px (e.g., larger desktops) */
@media only screen and (min-width: 1280px) and (max-width: 1439px) {
}

/* Styles for screens 1440px and larger (e.g., widescreen desktops) */
@media only screen and (min-width: 2000px) {

}

</style>