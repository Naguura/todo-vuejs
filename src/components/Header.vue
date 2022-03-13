<template>
  <div class="header">
    <div class="dashboard-title">DashBoard</div>
    <div class="user">Admin User</div>
</div>
</template>

<script>
export default {
  name: 'main-header'
}
</script>

<style lang="scss" scoped>
.header-item {
  width: 835px;
  height: 74px;
  left: 277px;
  top: 0px;

  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(43, 45, 55, 0.0105441);
}

.dashboard-title {
  height: 52px;
  left: 31.68%;
  right: 0.99%;
  top: calc(50% - 52px/2);

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 52px;
  /* identical to box height, or 371% */
  color: #74798C;
}

.user{
  height: 52px;
  left: 43.68%;
  right: 0%;
  top: calc(50% - 52px/2);

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 52px;
  /* identical to box height, or 371% */
  color: #74798C;
}
</style>