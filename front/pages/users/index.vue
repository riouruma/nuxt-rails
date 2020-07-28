<template>
  <div>
    <h1>User List</h1>

    <ul>
      <li v-for="user in users" :key="user.id">
        <nuxt-link :to="{ name: 'users-id', params: { id: user.id } }">
          {{ user.name }}
        </nuxt-link>
      </li>
    </ul>
    <nuxt-link to="/users/new">create new user</nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.$axios.$get("/api/users").then((res) => {
      console.log(res);
      this.users = res;
    });
  },
};
</script>
