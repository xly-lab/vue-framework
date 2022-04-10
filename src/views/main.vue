<template>
  <div>
    {{ hello.name }}
    <v-alert type="error" :value="showAlert"> I'm an error alert. </v-alert>
  </div>
</template>

<script>
import services from '../sevices';

export default {
  name: 'MainPage',
  data() {
    return {
      hello: { name: '' },
      showAlert: false,
    };
  },
  mounted() {
    const that = this;
    setTimeout(() => {
      that.hello = {
        name: 'aa',
      };
    }, 1000);
    console.log('asd');
    this.reqZhuanLan();
  },
  methods: {

    async reqZhuanLan() {
      this.showAlert = true;
      try {
        const res = await services.getZhuanLan();
        console.log('res?.data ======>', res?.data);
        this.showAlert = false;
      } catch (error) {
        console.log(error);
        this.showAlert = false;
      }
    },
  },
};
</script>

<style>
</style>
