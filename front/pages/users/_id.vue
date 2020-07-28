<template>
  <div>
    <h1>Hello, {{ name }}</h1>
    <nuxt-link to="/users">Back</nuxt-link>
  </div>
</template>

<script>
export default {
  asyncData({ $axios, params }) {
    return $axios.$get(`/api/users/${params.id}`).then((res) => {
      return { name: res.name };
    });
  },
};
</script>
