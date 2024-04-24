<template>
  <div class="sidebar">
    <div class="sidebar-content">
      <div class="sidebar-logo">
        <img src="/src/assets/cubigo-logo.svg" alt="cubigo-logo">
      </div>
      <div class="search-bar">
        <input type="text" placeholder="Search...">
      </div>
      <div class="sidebar-separator">
        <hr>
      </div>

      <div class="sidebar-items">
        <input type="checkbox" id="item1-toggle" class="toggle-checkbox">
        <div class="item" id="item1">
          <label for="item1-toggle" class="item-label">
            <div class="item-header">
              <h3>Components</h3>
              <div class="indicator-icon">
                <img src="/src/assets/indicator-closed.svg" alt="indicator-closed-image">
              </div>
            </div>
          </label>
          <div class="sub-items">
            <div class="sub-item">
              <router-link to="/overview">
                <a class="active">
                    Buttons
                </a>
              </router-link>
            </div>
            <div class="sub-item">
              <a class="active">
                  Sub-Item 1.2
              </a>
            </div>
          </div>
        </div>

        <input type="checkbox" id="item2-toggle" class="toggle-checkbox">
        <div class="item" id="item2">
          <label for="item2-toggle" class="item-label">
            <div class="item-header">
              <h3>Fonts</h3>
              <div class="indicator-icon">
                <img src="/src/assets/indicator-closed.svg" alt="indicator-closed-image">
              </div>
            </div>
          </label>
          <div class="sub-items">
            <div class="sub-item">Sub-Item 2.1</div>
            <div class="sub-item">Sub-Item 2.2</div>
          </div>
        </div>

        <input type="checkbox" id="item3-toggle" class="toggle-checkbox">
        <div class="item" id="item3">
          <label for="item3-toggle" class="item-label">
            <div class="item-header">
              <h3>Icons</h3>
              <div class="indicator-icon">
                <img src="/src/assets/indicator-closed.svg" alt="indicator-closed-image">
              </div>
            </div>
          </label>
          <div class="sub-items">
            <div class="sub-item">Sub-Item 3.1</div>
            <div class="sub-item">Sub-Item 3.2</div>
          </div>
        </div>

        <input type="checkbox" id="item4-toggle" class="toggle-checkbox">
        <div class="item" id="item4">
          <label for="item4-toggle" class="item-label">
            <div class="item-header">
              <h3>Design Language</h3>
              <div class="indicator-icon">
                <img src="/src/assets/indicator-closed.svg" alt="indicator-closed-image">
              </div>
            </div>
          </label>
          <div class="sub-items">
            <div class="sub-item">Sub-Item 4.1</div>
            <div class="sub-item">Sub-Item 4.2</div>
          </div>
        </div>

        <input type="checkbox" id="item5-toggle" class="toggle-checkbox">
        <div class="item" id="item5">
          <label for="item5-toggle" class="item-label">
            <div class="item-header">
              <h3>Overview</h3>
              <div class="indicator-icon">
                <img src="/src/assets/indicator-closed.svg" alt="indicator-closed-image">
              </div>
            </div>
          </label>
          <div class="sub-items">
            <div class="sub-item">Sub-Item 5.1</div>
            <div class="sub-item">Sub-Item 5.2</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar"
};
</script>

<style scoped>
.sidebar {
  padding: 0;
  margin: 0;
  position: fixed;
  height: 100vh;
  border: 0.5px solid #DFDFDF;
  box-shadow: 1px 0 4px 0 rgba(0, 0, 0, 0.25);
}

.sidebar-logo {
  margin-top: 25px;
  margin-bottom: 25px;
}

.search-bar input {
  height: 36px;
  width: 100%;
  border-radius: 50px;
  background-color: transparent;
  border: solid 1px #007AFF;
  padding-left: 15px;
  color: #007AFF;
  font-family: Lato, "sans-serif";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.sidebar-separator {
  margin-top: 30px;
  margin-bottom: 45px;
}

.sidebar-items .item {
  margin: 8px 0;
}

.sidebar-items .toggle-checkbox {
  display: none;
}

.sidebar-items .indicator-icon img {
  transition: transform 0.3s ease;
}

.sidebar-items .toggle-checkbox:checked + .item .indicator-icon img {
  transform: rotate(90deg);
}

.sidebar-items .toggle-checkbox:checked + .item .sub-items {
  display: block;
}


.sidebar-items .sub-items {
  display: none;
}

.sidebar-items .item h3 {
  margin: 0;
  cursor: pointer;
}

.sidebar-items .item-header {
  display: flex;
  align-items: center;
}

.sidebar-items .indicator-icon {
  margin-left: auto;
}

.sidebar-items .indicator-icon img {
  width: 12px;
}

.sidebar-items .sub-item {
  margin: 4px 0;
}

.sidebar-content {
  padding: 0 32px 0 32px;
  width: 20vw;
}

.item-header h3 {
  color: #000;
  font-family: Lato, sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.indicator-icon img {
  height: 15px;
}

.item-header:hover h3 {
  color: #0092E1;
}

.sub-items .sub-item {
  color: #0092E1;
  font-family: Lato, sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding-top: 5px;
  padding-bottom: 5px;
}


a:active {
}

.sub-items .sub-item a {
  text-decoration: none;
  color: #0092E1;
}

.sidebar-items .sub-items {
  display: block;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
}

.sidebar-items .toggle-checkbox:checked + .item .sub-items {
  max-height: 1000px;
}

.sidebar-items .toggle-checkbox:not(:checked) + .item .sub-items {
  max-height: 0;
}

.item {
  padding-bottom: 15px;
}


@media only screen and (max-width: 768px) {
  .sidebar-content {
    width: 30vw;
  }
}

@media only screen and (min-width: 2000px) {
  .sidebar-logo img {
    width: 180px;
  }

  .item-header h3 {
    color: #000;
    font-family: Lato, sans-serif;
    font-size: 2.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .item-header img {
    width: 25px;
  }

  .search-bar input {
    height: 40px;
  }

  .sub-items .sub-item {
    font-size: 1.5rem;
  }

}
</style>
