<template>
  <ying-page>
    <ying-table
      title="账户管理"
      request="/api/account/page-list"
      :columns="columns"
    >
      <template slot="batch-action" slot-scope="{ rows }">
        <ying-action
          text="创建"
          request="/api/account/save"
          action-type="primary"
        >
          <template slot-scope="{ model }">
            <a-form-model-item label="用户名" prop="username">
              <a-input v-model="model.username" />
            </a-form-model-item>
            <a-form-model-item label="密码" prop="password">
              <a-input v-model="model.password" />
            </a-form-model-item>
            <a-form-model-item label="角色" prop="roles">
              <ying-enum-select v-model="model.roles" request="/api/role/list"></ying-enum-select>
            </a-form-model-item>
            <a-form-model-item label="昵称" prop="nickname">
              <a-input v-model="model.nickname" />
            </a-form-model-item>
            <a-form-model-item label="邮箱" prop="email">
              <a-input v-model="model.email" />
            </a-form-model-item>
            <a-form-model-item label="电话" prop="tell">
              <a-input v-model="model.tell" />
            </a-form-model-item>
            <a-form-model-item label="别名" prop="alias">
              <a-input v-model="model.alias" />
            </a-form-model-item>
          </template>
        </ying-action>
        <ying-action
          text="批量删除"
          request="/api/account/batch-delete"
          action-type="danger"
          :disabled="rows.length == 0"
          :data="{ ids: rows.map((it) => it.name).join(',') }"
        >
          <div>
            你要删除这些账户么？
            <div v-for="(item, i) in rows" :key="i">
              <p>{{ item.username }}</p>
            </div>
          </div>
        </ying-action>
      </template>
      <template slot="action" slot-scope="{ record }">
        <ying-action
          text="编辑"
          :data="{ ...record }"
          request="/api/account/save"
          action-type="primary"
        >
          <template slot-scope="{ model }">
            <a-form-model-item label="用户名" prop="username">
              <a-input v-model="model.username" />
            </a-form-model-item>
             <a-form-model-item label="角色" prop="roles">
              <ying-enum-select v-model="model.roles" request="/api/role/list"></ying-enum-select>
            </a-form-model-item>
            <a-form-model-item label="昵称" prop="nickname">
              <a-input v-model="model.nickname" />
            </a-form-model-item>
            <a-form-model-item label="邮箱" prop="email">
              <a-input v-model="model.email" />
            </a-form-model-item>
            <a-form-model-item label="电话" prop="tell">
              <a-input v-model="model.tell" />
            </a-form-model-item>
            <a-form-model-item label="别名" prop="alias">
              <a-input v-model="model.alias" />
            </a-form-model-item>
          </template>
        </ying-action>

        <ying-action
          text="删除"
          :data="{ ...record }"
          request="/api/account/delete"
          action-type="danger"
        >
          <span>确定要删除么？</span>
        </ying-action>
      </template>
    </ying-table>
  </ying-page>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          dataIndex: "username",
          title: "用户名",
        },
        {
          dataIndex: "nickname",
          title: "昵称",
        },
        {
          dataIndex: "createTime",
          title: "创建时间",
        },
      ],
    };
  },
};
</script>