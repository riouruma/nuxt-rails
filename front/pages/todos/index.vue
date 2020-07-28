<template>
  <div>
    <v-container>
      <v-list>
        <v-list-item-group color="primary">
          <v-list-item v-for="(todo, i) in todos" :key="i">
            <v-list-item-content>
              <v-list-item-title>{{ todo.name }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon @click="destroyTask(todo.id)">
                <v-icon color="grey lighten-1">mdi-trash-can-outline</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <v-form ref="form" @submit.prevent>
        <v-text-field
          label="タスク名"
          v-model="todo.name"
          @change="(value) => (name = value)"
        >
        </v-text-field>
        <v-btn color="success" class="mr-4" @click="createTask">
          createTask!
        </v-btn>
      </v-form>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [],
      todo: {
        name: "",
      },
    };
  },

  created() {
    this.fetchAllTasks();
  },

  methods: {
    fetchAllTasks: function() {
      this.$axios.$get("/api/todos").then((res) => {
        console.log(res);
        this.todos = res;
      });
    },
    createTask: function() {
      this.$axios
        .$post("/api/todos", {
          name: this.todo.name,
        })
        .then((res) => {
          console.log(res);
          this.fetchAllTasks();
          this.todo.name = "";
        });
    },
    destroyTask: function(id) {
      if (confirm("削除しますか？")) {
        this.$axios.$delete(`/api/todos/${id}`).then((res) => {
          this.fetchAllTasks();
        });
      }
    },
  },
};
</script>

<style scoped></style>
