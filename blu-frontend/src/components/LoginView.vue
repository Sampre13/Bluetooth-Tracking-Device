<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="p-8 bg-white rounded-lg shadow-md max-w-md w-full">
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-blue-600">BLU</h1>
        <p class="text-gray-500 text-sm">BLUETOOTH LOW ENERGY</p>
      </div>

      <form>
        <div class="mb-4">
          <label for="email" class="block text-gray-700">Email</label>
          <input
              type="email"
              id="email"
              placeholder="Value"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div class="mb-6">
          <label for="password" class="block text-gray-700">Password</label>
          <input
              type="password"
              id="password"
              placeholder="Value"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
            type="submit"
            class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Sign In
        </button>
      </form>

      <div class="text-center mt-4">
        <a href="#" class="text-blue-600 hover:underline">Forgot password?</a>
      </div>
      <div class="text-center mt-2">
        <a href="#" class="text-blue-600 hover:underline">Create an Account</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data(){
    return {
      input:{
        username: "",
        password: ""
      }
    }
  },
  methods: {
    login(){
      if(this.input.username != "" || this.input.password != ""){
        console.log("authenticated")
      }else{
        console.log("Username and Password cannot be empty")
      }
    }
  },
}
</script>