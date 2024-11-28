<script setup lang="ts">
import type {SideItem} from "~/src/0_models/types/SideItem";

const props = defineProps<{
  listItem: SideItem[]
}>()

</script>

<template>
  <div class="sidebar">
    <ul>
      <li v-for="item in props.listItem" :key="item.id">
        <a :href="item.href">{{ item.label }}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.sidebar {
  background-color: #2c3e50;
  color: white;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  width: fit-content;
  flex-direction: column;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.sidebar ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.sidebar li {
  margin-bottom: 8px;
}

.sidebar li:last-child {
  margin-bottom: 0;
}

.sidebar a {
  color: white;
  text-decoration: none;
}

.sidebar a:hover {
  color: aliceblue;
  text-decoration: underline;
}

</style>