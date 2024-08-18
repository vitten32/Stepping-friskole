<template>
  <nav class="navbar">
    <div class="navbar-brand">Stepping Friskole</div>
    <ul class="navbar-menu">
      <li><router-link to="/">Hjem</router-link></li>

      <!-- Dropdown: Om Børnehuset -->
      <li class="dropdown" @mouseleave="closeDropdown('bornehuset')" @mouseover="openDropdown('bornehuset')">
        <span class="dropdown-trigger">Om Børnehuset</span>
        <ul v-show="dropdowns.bornehuset" class="dropdown-menu">
          <li><router-link to="/BoenehusetPage#maal">Mål</router-link></li>
          <li><router-link to="/BoenehusetPage#vaerdier">Værdier</router-link></li>
        </ul>
      </li>

      <!-- Dropdown: Om Skolen -->
      <li class="dropdown" @mouseleave="closeDropdown('skolen')" @mouseover="openDropdown('skolen')">
        <span class="dropdown-trigger">Om Skolen</span>
        <ul v-show="dropdowns.skolen" class="dropdown-menu">
          <li><router-link to="/SkolePage">Om skolen</router-link></li>
          <li><router-link to="/SkolePage#vaerdier">Værdier</router-link></li>
          <li><router-link to="/SkolePage#undervisningsmetoder">Undervisningsmetoder</router-link></li>
          <li><router-link to="/SkolePage#maalgrupper">Målgrupper</router-link></li>
          <li><router-link to="/SkolePage#laererstaben">Lærerstaben</router-link></li>
        </ul>
      </li>

      <!-- Dropdown: Om SFO -->
      <li class="dropdown" @mouseleave="closeDropdown('sfo')" @mouseover="openDropdown('sfo')">
        <span class="dropdown-trigger">Om SFO</span>
        <ul v-show="dropdowns.sfo" class="dropdown-menu">
          <li><router-link to="/SfoPage#aabningstider">Åbningstider</router-link></li>
          <li><router-link to="/SfoPage#aktiviteter">Aktiviteter</router-link></li>
        </ul>
      </li>

      <li><router-link to="/Kontact">Kontakt</router-link></li>
      <li><a href="https://steppingfriskole.viggo.dk/Basic/Account/Login" target="_blank">Viggo</a></li>
      <li><router-link to="/contact">Login</router-link></li>
    </ul>
  </nav>
</template>

<script>
  export default {
    data () {
      return {
        dropdowns: {
          bornehuset: false,
          skolen: false,
          sfo: false,
        },
      }
    },
    methods: {
      openDropdown (menu) {
        this.dropdowns[menu] = true
      },
      closeDropdown (menu) {
        this.dropdowns[menu] = false
      },
    },
  }
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: center; /* Center hele navbaren */
  align-items: center;
  padding: 1rem;

  background-color: var(--primary-color);
  color: var(--dark-text-color);
  z-index: 1000;
}

.navbar-brand {
  font-size: 1.5rem;
  font-family: 'Gloria Hallelujah', cursive;
  margin-right: 5rem; /* Giv lidt plads til højre for brand */
}

.navbar-menu {
  list-style: none;
  display: flex;
  gap: 1rem;
  font-family: 'Gloria Hallelujah', cursive;
  justify-content: center; /* Center linksene i navbaren */
}

.navbar-menu li {
  position: relative;
}

.navbar-menu a,
.navbar-menu .dropdown-trigger {
  color: var(--secondary-color); /* Gul */
  text-decoration: none;
  font-family: 'Gloria Hallelujah', cursive;
  font-size: 1rem;
  padding: 0.5rem 1rem; /* Juster padding for at centrere tekst */
}

.navbar-menu .dropdown-trigger {
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%); /* Center dropdown-menuen */
  background-color: var(--secondary-color); /* Gul */
  list-style: none;
  padding: 0.5rem 1rem;
  display: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.dropdown-menu li {
  margin-bottom: 0.5rem;
}

.dropdown-menu li:last-child {
  margin-bottom: 0;
}

.dropdown-menu a {
  color: var(--primary-color); /* Mørk blå */
}

.dropdown-menu a:hover {
  color: var(--dark-text-color); /* Hvid */
}

.dropdown:hover .dropdown-menu {
  display: block;
}
</style>
