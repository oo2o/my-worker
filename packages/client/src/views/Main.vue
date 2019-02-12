<template>
  <div id="app">     
  <Layout>
    <Header>
      <Content>
      <div style="position: relative;">
        <img alt="logo" src="../assets/logo/logo.svg" style="height: 40px;">
        <DropDown :isIcon="true" style="float: right; right: 10px;position: absolute;" @on-click="click">
            <img src="../assets/logo/avatar.jpg" style="height: 40px;border-radius: 50%;" slot="content">
            <DropDownMenu>
              <DropDownItem name="Profile">Profile</DropDownItem>
              <DropDownItem name="Sign Out">Sign Out</DropDownItem>
            </DropDownMenu>
        </DropDown>
      </div>
       
      </Content>
    </Header>
    <Content :hasSider="true">
      <Sider v-model="visible">
        <div style="min-height: 50%;">
        <Menu activeName="AGENT" @on-select="menuSelect">
          <MenuItem v-for="item in menus" :key="item.name" :name="item.children[0].name">
            <Icon size="20" :type="item.icon"></Icon> &nbsp; &nbsp;  {{item.title}}
          </MenuItem>
        
        </Menu>
        </div>
        <div class="sider-history">
            <span>History</span>
            <ul>
              <li :key="index" v-for=" (item, index) in historyDatas"><div>{{item.text}}</div></li>
            </ul>
        </div>
      </Sider> 
      <ContentRight>
        <router-view></router-view>
      </ContentRight>      
    </Content>
    <Footer>©Copyright 2019 LiuMiaoXiang</Footer>
  </Layout>
  </div>
</template>

<script>
import { appRouter } from '../router/router.js'
import { mapActions } from 'vuex'
export default {
  name: 'app',
  data(){
    return {
      menus: appRouter,
      historyDatas: [],
      visible: false,
    }
  },
  mounted(){
    this.getHIstoryData()
  },  
  methods: {
    async getHIstoryData(){
      this.historyDatas = await this.$http.get('history') 
    },
    click(name){
      this.$Message.newInstance({type: 'info', text: `Click ${name}`})
      if(name == 'Sign Out'){
        this.$router.push('/login')
      }      
    },
    menuSelect(name){
      this.$Message.newInstance({type: 'info', text: `Menu Select ${name}`})
      this.$router.push({name})
      this.visible = false
    },
    ...mapActions(['Logout'])
  }
}
</script>

<style lang="less">
@import './main.less';
body{
  background-color: #f3f3f3;
  margin: 0;
}
body, html{
  height: 100%;
}
#app {
  font-family: @font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 14px;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
