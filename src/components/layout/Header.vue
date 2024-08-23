<template>
	<el-header>
		<el-row class="space-between">
			<el-col :span="12"> <h1>NebTool</h1></el-col>
			<el-col :span="4" class="right">
				<DarkMode />
				<el-button @click.prevent="logout()">Logout</el-button>
			</el-col>
			<el-col :span="6" class="left">
				<el-col :span="18">
					<el-descriptions title="" :column="1" size="small" class-name="zero-padding">
						<el-descriptions-item
							label="Username"
							class-name="zero-padding"
							label-class-name="zero-padding"
						>
							{{ username }}
						</el-descriptions-item>
						<div v-if="group">
							<el-descriptions-item label="Groups">
								<el-tag size="small">
									{{ group }}
								</el-tag>
							</el-descriptions-item>
						</div>
					</el-descriptions>
				</el-col>
				<el-col :span="6">
					<div>
						<el-avatar :size="'small'" :icon="UserFilled" />
					</div>
				</el-col>
			</el-col>
		</el-row>
	</el-header>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { ref, onMounted } from "vue";
import { UserFilled } from "@element-plus/icons-vue";
import DarkMode from "../dark-mode.vue";

// import { messageWarningTextOnly } from "@/utils/Message.js";

const store = useStore();
const group = ref("");
const username = ref("");
const router = useRouter();
const logout = () => {
	sessionStorage.clear();
	store.commit("clearUserData");
	navigate("login");
	sessionStorage.setItem("status", "login");
};

const navigate = (path) => {
	console.log("path", path);
	router.push({
		name: path,
	});
};

onMounted(() => {
	try {
		store.commit("setUserData", JSON.parse(sessionStorage.getItem("data")));
		group.value = sessionStorage.getItem("group");
		username.value = sessionStorage.getItem("username");
	} catch (e) {
		// messageWarningTextOnly("Please login first");
		store.commit("clearUserData");
		// navigate("login");
	}
});
</script>

<style scoped>
.right {
	display: flex;
	flex-direction: row-reverse;
	align-items: center;
	padding-right: 20px;
}
.left {
	display: flex;
	flex-direction: row-reverse;
	align-items: center;
}
.space-between {
	justify-content: space-between;
}
</style>
