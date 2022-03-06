<script setup lang="ts">
import { useApi } from "@/composables/useApi";

const { shows, exercises } = useApi();
</script>

<template>
  <main>
    <ul>
      <li v-for="show in shows" :key="show.id">{{ show.title }}</li>
    </ul>
    <ul>
      <li v-for="exercise in exercises" :key="exercise.id">
        {{ exercise.title }}
      </li>
    </ul>
  </main>
</template>
