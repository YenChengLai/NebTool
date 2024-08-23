<template>
	<el-row>
		<el-col>
			<el-menu router :default-active="$route.name" class="el-menu-vertical-demo">
				<template v-for="(route, index) in filteredRoutes" :key="index">
					<el-menu-item
						v-if="!route.children"
						:index="route.meta.index"
						:route="route.path"
					>
						<el-icon :component="route.meta.icon" />
						<template #title>{{ route.meta.title }}</template>
					</el-menu-item>

					<!-- Handle routes with children (sub-menus) -->
					<el-sub-menu
						v-if="route.children"
						:index="'sub-' + route.meta.index"
						:key="'sub-' + route.meta.index"
					>
						<template #title>
							<el-icon :component="route.meta.icon" />
							{{ route.meta.title }}
						</template>
						<el-menu-item-group>
							<el-menu-item
								v-for="subItem in route.children"
								:key="subItem.path"
								:index="subItem.meta.index"
								:route="`${route.path}/${subItem.path}`"
							>
								{{ subItem.meta.title }}
							</el-menu-item>
						</el-menu-item-group>
					</el-sub-menu>
				</template>
			</el-menu>
		</el-col>
	</el-row>
</template>
<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
// import { Menu, HomeFilled, UploadFilled, Promotion } from "@element-plus/icons-vue";

const store = useStore();
const router = useRouter();
const filteredRoutes = computed(() => {
	return router.options.routes.filter((route) => route.meta && route.meta.visible);
});
</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
	width: 160px;
	min-height: 500px;
	height: 95%;
}
.el-sub-menu .el-menu-item {
	min-width: 160px;
}
</style>
