<template>
  <div class="paypal-wrapper">
    <div id="paypal-button-container"></div>
  </div>
 
</template>

<script>
export default {
  props: {
    amount: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.loadPaypalSdk();
  },
  methods: {
    loadPaypalSdk() {
      const script = document.createElement("script");
      script.src = "https://sandbox.paypal.com/sdk/js?client-id=AWHwwiRTlVaI1cVBxlhvcPC6BFEnchAyI6V-QSGztXegwjtVERtkYL_ZCPf5W_bYgeK3BeMF9JrAIxxt&components=buttons";
      script.async = true;
      script.onload = this.renderPaypalButton;
      document.body.appendChild(script);
    },
    renderPaypalButton() {
      paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: this.amount,
                },
              },
            ],
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then((details) => {
            this.$emit("paymentSuccess", details);
          });
        },
        onError: (err) => {
          this.$emit("paymentError", err);
        },
      }).render("#paypal-button-container");
    },
  },
};
</script>

<style scoped>
.paypal-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh; 
  width: 100%;
}

#paypal-button-container {
  width: auto;
}
</style>