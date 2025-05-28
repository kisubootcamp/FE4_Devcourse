<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-900">
    <div
      class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8"
    >
      <form class="space-y-6" action="#" @submit="checkValidation">
        <h5 class="text-xl font-medium text-gray-900">Sign in to our platform</h5>
        <div>
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
          <input
            name="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@company.com"
            autocomplete="off"
            required
            v-model="email"
          />
          <p v-if="errors.email" class="text-red-500 text-xs mt-1">{{ errors.email }}</p>
        </div>
        <div>
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900"
            >Your password</label
          >
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
            v-model="password"
          />
          <p v-if="errors.password" class="text-red-500 text-xs mt-1">{{ errors.password }}</p>
        </div>
        <div class="flex items-start">
          <div class="flex items-start">
            <div class="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                v-model="rememberCheck"
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
              />
            </div>
            <label for="remember" class="ms-2 text-sm font-medium text-gray-900">Remember me</label>
          </div>
          <a href="#" class="ms-auto text-sm text-blue-700 hover:underline">Lost Password?</a>
        </div>
        <p v-if="errors.rememberCheck" class="text-green-500 text-xs">{{ errors.rememberCheck }}</p>
        <button
          :disabled="isButtonDisabled"
          type="submit"
          class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Login to your account
        </button>
        <p v-if="errors.submit" class="text-green-600 text-xs text-center">{{ errors.submit }}</p>
        <div class="text-sm font-medium text-gray-500">
          Not registered?
          <a href="#" class="text-blue-700 hover:underline">Create account</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      rememberCheck: false,
      errors: {
        email: '',
        password: '',
        rememberCheck: '',
      },
    }
  },
  computed: {
    isButtonDisabled() {
      return this.email === '' || this.password === ''
    },
    isEmailValidated() {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)
    },
    isPasswordValidated() {
      return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{4,}$/.test(
        this.password,
      )
    },
  },
  mounted() {
    const savedEmail = localStorage.getItem('savedEmail')
    if (savedEmail) {
      this.email = savedEmail
    }
  },
  methods: {
    checkValidation(e) {
      e.preventDefault()
      this.errors.email = ''
      this.errors.password = ''
      this.errors.rememberCheck = ''

      if (!this.isEmailValidated) {
        this.errors.email = 'Please enter a valid email address'
      }
      if (!this.isPasswordValidated) {
        this.errors.password =
          'Password must be at least 4 characters long and contain at least one letter and one number'
      }
      if (this.rememberCheck) {
        this.errors.rememberCheck = 'Remember me is Checked!'
      }
      if (this.isEmailValidated && this.isPasswordValidated && this.rememberCheck) {
        alert('Form submitted successfully!')
        localStorage.setItem('savedEmail', this.email)
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
