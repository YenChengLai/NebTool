<template>
	<el-switch
		@click="toggleDark()"
		v-model="isLight"
		class="mt-2"
		style="margin-left: 24px"
		inline-prompt
		:active-icon="Sunny"
		:inactive-icon="Moon"
	/>
</template>

<script setup>
import { ref } from "vue";
import { useDark, useToggle } from "@vueuse/core";
import { Sunny, Moon } from "@element-plus/icons-vue";
const isDark = useDark();
const toggleDark = useToggle(isDark);
const isLight = ref(true);
</script>
