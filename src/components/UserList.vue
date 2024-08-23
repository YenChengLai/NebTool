<template>
  <el-table :data="users">
    <el-table-column prop="username" label="Email" width="200%" />
    <el-table-column prop="is_active" label="Active" type="boolean" />
    <el-table-column label="Groups" width="150%" >
      <template #default="scope">
        {{
          scope.row.groups
            .map((groupId) => {
              const matchingGroup = this.groups.find(
                (group) => group.id === groupId
              );
              return matchingGroup ? matchingGroup.name : "Unknown"; // Handle missing groups
            })
            .join(", ")
        }}
      </template>
    </el-table-column>
  </el-table>
  <br>
  <div style="align:'center'">
    <el-button type="primary" @click="fetchData" round>Fetch Data</el-button>
    <el-button type="danger" @click="clearData" round>Clear Data</el-button>
  </div>
</template>

<script>
import userService from "@/services/userService";

export default {
  name: "UserList",
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async fetchData() {
      const users = await userService.getUsers();
      const groups = await userService.getGroups();
      this.users = users.data;
      this.groups = groups.data;
    },
    async clearData() {
      this.users = [];
      this.groups = [];
    },
  }
};
</script>