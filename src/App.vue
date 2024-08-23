<template>
	<div id="app">
		<Header />
		<el-container>
			<!-- Sidebar -->
			<Sidebar />

			<!-- Content Area -->
			<el-main>
				<router-view />
			</el-main>
		</el-container>
		<Footer />
	</div>
</template>

<script setup>
import Sidebar from "@/components/layout/Sidebar.vue";
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import userService from "./services/userService";
import { onMounted } from "vue";

onMounted(() => {
	async function fetchData() {
		const users = await userService.getUsers();
		const groups = await userService.getGroups();

		localStorage.setItem("users", JSON.stringify(users));
		localStorage.setItem("groups", JSON.stringify(groups));
	}

	fetchData();
});
</script>
