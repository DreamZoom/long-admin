<template>
  <div>
    <a-form-model-item label="应用名" prop="appName">
      <a-input v-model="model.appName" />
    </a-form-model-item>
    <a-form-model-item label="应用描述" prop="appDesc">
      <a-input v-model="model.appDesc" />
    </a-form-model-item>
    <a-form-model-item label="clientId" prop="clientId">
      <a-input v-model="model.clientId" />
    </a-form-model-item>
    <a-form-model-item label="clientSecret" prop="clientSecret">
      <a-input v-model="model.clientSecret" />
    </a-form-model-item>
    <a-form-model-item label="scopes" prop="scopes">
      <a-input v-model="model.scopes" />
    </a-form-model-item>
    <a-form-model-item label="resourceIds" prop="resourceIds">
      <a-input v-model="model.resourceIds" />
    </a-form-model-item>
    <a-form-model-item label="authorizedGrantTypes" prop="authorizedGrantTypes">
      <a-input v-model="model.authorizedGrantTypes" />
    </a-form-model-item>
    <a-form-model-item
      label="registeredRedirectUris"
      prop="registeredRedirectUris"
    >
      <a-input v-model="model.registeredRedirectUris" />
    </a-form-model-item>
    <a-form-model-item label="autoApproveScopes" prop="autoApproveScopes">
      <a-input v-model="model.autoApproveScopes" />
    </a-form-model-item>
    <a-form-model-item
      label="accessTokenValiditySeconds"
      prop="accessTokenValiditySeconds"
    >
      <a-input v-model="model.accessTokenValiditySeconds" />
    </a-form-model-item>
    <a-form-model-item
      label="refreshTokenValiditySeconds"
      prop="refreshTokenValiditySeconds"
    >
      <a-input v-model="model.refreshTokenValiditySeconds" />
    </a-form-model-item>
    <a-form-model-item
      label="additionalInformation"
      prop="additionalInformation"
    >
      <a-input v-model="model.additionalInformation" />
    </a-form-model-item>
  </div>
</template>

<script>
export default {
  props: {
    model: Object,
  },
};
</script>