<template>
    <div id="app">
        <div class="login">
            <!-- <div class="login-img"><img src="../assets/login-img.png"></div> -->
            <div class="login-content">  
                <div class="login-logo"><img src="../assets/login_logo.png"></div>  
                <div class="login-name">
                    <p>Backstage Management System</p>
                </div>            
                <div class="form-item"><Input v-model="username" placeholder="Username"  /></div>
                <div class="form-item"><Input type="password" v-model="password" placeholder="Password" /></div>
                <div class="form-item"><Button @on-click="logined">Login</Button></div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        data(){
            return {
                username: '',
                password: ''
            }
        },
        mounted() {
            const self = this
            document.onkeydown=function(event){ 
                const e = event || window.event || arguments.callee.caller.arguments[0];           
                if(e && e.keyCode==13){ // enter 键 
                    self.logined()
                }
            }; 
        },
        methods: {
            async logined(){
                const users = await this.$http.get('user', {username: this.username})
                let user = users[0]
                if(user.password == this.password){
                    user.accessToken = 'eyJpZCI6IjEyMzEwMzkzMDE1NDUyNzA1MzU3NTFkYzU4OWQwZDJmZmIwMTkyNGQyZWM2Yzk2ODc5NDhjNzU5Mzc0ZWIzIiwibmlja25hbWUiOiJzdXBlciIsInRva2VuIjoiMjMxMDM5MzAiLCJmbGFnIjoiMSIsImV4cGlyZSI6IjE1NDUyNzA1MzU3NTEifQ=='
                    delete user.password
                    this.Login(user)
                    this.$Message.newInstance({type: 'success', text: `Login success`})
                    setTimeout(() => {
                        this.$router.push('/')
                    }, 1000)
                    
                }else{
                    this.$Message.newInstance({type: 'error', text: `Your username or password is error`})
                }
            },
            ...mapActions(['Login'])
        },
    }
</script>

<style lang="less">
@import './main.less';
body{
    background: #93defe;
    background-size: cover;
    margin: 0;
}
body, html{
    height: 100%;
    overflow: hidden;
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
.login{
    text-align:center;

    &-content{
        height: 300px;
        width: 400px;
        display: inline-block;
        background-color: #ffffff;
        box-sizing: border-box;
        border-radius: 6px;
        top: 200px;
        position: relative;
    }

    &-img{
        display: inline-block;
        top: 200px;
    }

    &-logo{
        width:120px; 
        height:120px; 
        border:5px solid #93defe;
        border-radius:100px; 
        background:#fff; 
        text-align:center; 
        line-height:110px; 
        position:absolute; 
        top:-60px; 
        right:140px;

        img{
            vertical-align: middle;
        }
    }
    &-name{
        margin-top: 90px;
        font-size: 24px;
    }
}

.form-item{
    padding: 8px;
}

</style>
