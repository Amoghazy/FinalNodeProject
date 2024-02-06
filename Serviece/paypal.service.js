export const createPaymentJson = (cartId,  total,items=[]) => {
  return {
    intent: "sale",
    payer: {
      payment_method: "paypal",
    },
    redirect_urls: {
      return_url: "http://localhost:3000/payment/success",
      cancel_url: "http://localhost:3000/payment/cancel",
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
