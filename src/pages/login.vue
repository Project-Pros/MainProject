<template>
  <div class="login-wrap">

    <div class="login-html">
      <h1> Welcome to Project Pros Website</h1>

       <div class="group" v-if="!$auth.loading">
         <!-- show login when not authenticated -->
         <button class="button" v-if="!$auth.isAuthenticated" @click="login">Log in</button>
         <!-- show logout when authenticated -->
         <button class="button" v-if="$auth.isAuthenticated" @click="logout">Log out</button>
       </div>

        </div>
      </div>
</template>

<script>
import {mapMutations, mapState} from "vuex";
// import Users from "../resources/users.json";
// import * as fs from 'fs';


/**
 * Login page to oAuth0 and the project pros application
 */
export default {
  name: "login.vue",
  computed: {
    ...mapState(['arrBackLog', 'arrTodo', 'arrDoing', 'arrDone', 'userEmail'])
  },
  methods: {
    ...mapMutations(['setBacklog', 'setTodo', 'setDoing', 'setDone', 'setUserEmail']),

    /**
     * Logs user into oAuth
     */
    async login() {
      await this.$auth.loginWithRedirect();
    },
    /**
     * Logs user our of oAuth
     */
    logout() {
      // const FileSystem = require(fs);
      // let saveData = {};
      // let userData = Users;
      // for (let x in userData.users) {
      //   if(userData.users[x].email === this.userEmail)
      //   {
      //     saveData = {
      //       "email": this.userEmail,
      //       "arrBacklog": this.arrBacklog,
      //       "arrTodo": this.arrTodo,
      //       "arrDoing": this.arrDoing,
      //       "arrDone": this.arrDone
      //     };
      //   }
      //   else {
      //     saveData += userData.users[x];
      //   }
      // }
      // FileSystem.writeFile('../resources/users.json', JSON.stringify(saveData), (err) => {
      //   if (err) throw err;
      // });
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  }
}
</script>

<style scoped>
body{
  margin:0;
  color:#697A66;
  background:#fff;
  font:600 16px/18px 'Open Sans',sans-serif;
}
*,:after,:before{box-sizing:border-box}
.clearfix:after,.clearfix:before{content:'';display:table}
.clearfix:after{clear:both;display:block}
a{color:inherit;text-decoration:none}

.login-wrap{
  width:100%;
  margin:auto;
  max-width:670px;
  min-height:750px;
  position:relative;
  box-shadow:0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19);
}
.login-html{
  width:100%;
  height:100%;
  position:absolute;
  padding:90px 70px 50px 70px;
  background:rgba(40,57,101,.9);
}
.button{
  border:none;
  padding:15px 20px;
  border-radius:25px;
  background:white;
}
.login-form .group input[data-type="password"]{
  text-security:circle;
  -webkit-text-security:circle;
}
.login-form .group .check:checked + label{
  color:#fff;
}

select {
  background: rgba(255,255,255,0.1);
  border: none;
  font-size: 16px;
  height: auto;
  margin: 0;
  outline: 0;
  padding: 15px;
  width: 100%;
  background-color: #e8eeef;
  color: #8a97a0;
  box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
  margin-bottom: 30px;
}



select {
  padding: 6px;
  height: 32px;
  border-radius: 2px;
}


fieldset {
  margin-bottom: 35px;
  border: none;
}


label {
  display: white;
  margin-bottom: 8px;
}

h1
{
  color: #fff;
  text-align: center;
  display: inline-block;

}
label.light {
  font-weight: 300;
  display: inline;
}

.number {
  background-color: #5fcf80;
  color: #fff;
  height: 30px;
  width: 30px;
  display: inline-block;
  font-size: 0.8em;
  margin-right: 4px;
  line-height: 30px;
  text-align: center;
  text-shadow: 0 1px 0 rgba(255,255,255,0.2);
  border-radius: 100%;
}

@media screen and (min-width: 480px) {

  form {
    max-width: 44px;
  }

}
</style>