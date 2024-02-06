export const createPaymentJson = (cartId, total, items = []) => {
  return {
    intent: "sale",
    payer: {
      payment_method: "paypal",
    },
    redirect_urls: {
      // return_url: "http://localhost:3000/payment/success",
      // cancel_url: "http://localhost:3000/payment/cancel"
      // in case try localhost use this url over
      return_url: "https://e-commerce-app-dkd7.onrender.com/payment/success",
      cancel_url: "https://e-commerce-app-dkd7.onrender.com/payment/cancel",
    },

    transactions: [
      {
        item_list: {
          items: items,
        },
        amount: {
          currency: "USD",
          total: `${total}`,
        },
        description: "This is the payment description.",
        custom: cartId,
      },
    ],
  };
};
