import { createPaymentJson } from "../Serviece/paypal.service.js";
import Cart from "../models/cart.model.js";
import Payment from "../models/paymentmodel.js";
import Product from "../models/products.model.js";
import createError from "../utlis/createError.js";
import wrappedError from "./../utlis/errorHandling.js";
import paypal from "paypal-rest-sdk";
let total;
const createPayment = wrappedError(async (req, res, next) => {
  let cartId = req.params.cartId;
  let cart = await Cart.findById(cartId);
  if (!cart) {
    return next(
      createError.createError(400, "failed", "the cart does not exist")
    );
  }
  if (cart.accepted) {
    return next(
      createError.createError(400, "failed", "the cart is already accepted")
    );
  }

  for (const product of cart.products) {
    let founded = await Product.findById(product);
    if (!founded) {
      return next(
        createError.createError(400, "failed", "the product does not exist")
      );
    }
    // itemsArray.push({
    //   name: founded.productName,
    //   price: founded.priceAfterDiscount,
    //   quantity: 1,
    //   currency: "USD",
    //   sku: founded._id,
    // });
  }
  total = cart.priceAfterDiscount;
  //   total = itemsArray.reduce((acc, item) => {
  //     return acc + item.price;
  //   }, 0);
  console.log(total);
  console.log(cart.priceAfterDiscount);
  paypal.configure({
    mode: process.env.PAYPAL_MODE, //sandbox or live
    client_id: process.env.PAYPAL_CLIENT_KEY,
    client_secret: process.env.PAYPAL_SECRET_KEY,
  });

  paypal.payment.create(
    createPaymentJson(cartId, total),
    function (error, payment) {
      console.log(payment.transactions[0]);
      if (error) {
        throw error;
      } else {
        payment.links.forEach((link) => {
          if (link.rel === "approval_url") {
            res.json(link.href);
          }
        });
      }
    }
  );
});
const successPayment = wrappedError(async (req, res, next) => {
  let paymentId = req.query.paymentId;
  let payerId = req.query.PayerID;

  let excute_payment = {
    payer_id: payerId,
    transactions: [
      {
        amount: {
          currency: "USD",
          total: `${total}`,
        },
      },
    ],
  };
  paypal.payment.execute(
    paymentId,
    excute_payment,
    async function (error, payment) {
      if (error) {
        return next(createError.createError(400, "FAILED FOR PAYMENT", error));
      } else {
        const cartId = payment.transactions[0].custom;
        const email = payment.payer.payer_info.email;
        const amount = payment.transactions[0].amount.total;
        const state = payment.state;
        const total = payment.transactions[0].amount.currency;
        const paymentMethod = payment.payer.payment_method;
        const status = payment.payer.status;
        const createTime = payment.create_time;
        const payerId = payment.payer.payer_info.payer_id;
        const paymentId = payment.id;
        let data = {
          cartId,
          email,
          amount,
          state,
          total,
          paymentMethod,
          status,
          createTime,
          payerId,
          paymentId,
        };

        await Cart.findByIdAndUpdate(cartId, {
          accepted: true,
        }).exec();
        const addPayment = new Payment(data);
        await addPayment.save();
        res.json({
          status: "SUCCESS",
          message: "Payment success",
          addPayment,
        });
      }
    }
  );
});
const cancelPayment = wrappedError(async (req, res, next) => {
  res.status(200).json({
    status: "FAILED",
    message: "Payment canceled ",
    data: null,
  });
});
export { createPayment, successPayment, cancelPayment };
/*
{
  cartId: '65be32e3bfef570d0d182c95',
  email: 'sb-gl4g329494406@business.example.com',
  amount: '560.00',
  state: 'approved',
  total: 'USD',
  paymentMethod: 'paypal',
  status: 'VERIFIED',
  createTime: '2024-02-04T22:58:30Z',
  payerId: 'L4GUYWH6LCLHJ',
  paymentId: 'PAYID-MXABNFQ1H283266896197015'
}
*/
