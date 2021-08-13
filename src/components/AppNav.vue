
<!-- Navigate between pages -->

<template>
  <nav class="navbar navbar-expand-sm navbar-light navbar-jw">
    <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#appnav"
        aria-controls="appnav"
        aria-expanded="false"
        aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <a class="navbar-brand" href="#">
       Project Pros
    </a>

    <div class="collapse navbar-collapse" id="appnav">
      <div class="nav navbar-nav">
        <router-link
            to="/"
            class="nav-item nav-link"
            active-class="active"
            exact
        >
          Login
        </router-link>
<!--        <router-link-->
<!--            v-if="$auth.isAuthenticated"-->
<!--            to="/tasks"-->
<!--            class="nav-item nav-link"-->
<!--            active-class="active"-->
<!--            exact-->
<!--        >-->
<!--          Tasks-->
<!--        </router-link>-->
        <router-link
            v-if="$auth.isAuthenticated"
            to="/kanban"
            class="nav-item nav-link"
            active-class="active"
            exact
        >
          Kanban Board
        </router-link>
        <router-link
            v-if="$auth.isAuthenticated"
            to="/calendar"
            class="nav-item nav-link"
            active-class="active"
            exact
        >
          Calendar
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
/**
 * A component that renders the app navigation bar at the top of the page.
 */
export default {}
</script>