import { loadStripe } from "@stripe/stripe-js";

// const publishablekey = 'pk_test_51IfAwgF7VDSpoZmOV8VtWIwE4hJOLce3ch0DPT5DkwR8Gm0g8DWhqqxGmI3qkSywYrnGEbdIbhaNNXpbTTpzWgGO00J2aOGAhi';
//const secretkey = 'sk_test_51IfAwgF7VDSpoZmO90Kbmy03DFqIOQxE6r6niC190Z79kp94GJIILU8bGTjlFlOIN9TD4LTxdaoFCeQ3HzkPLXiw00sifdGSKj';
export const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
);
