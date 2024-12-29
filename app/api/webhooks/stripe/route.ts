import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";
import { paymentSuccessEmailMarkup } from "@/constants/offers";

const STRIPE_SIGNATURE_STRING = "Stripe-Signature";
const EMAIL_FROM = "support@trendlee.agency";
const EMAIL_TO = "ezzatabdelrazek255@gmail.com";
const EMAIL_SUBJECT =
  "Thank You for Your Purchase! Please Complete the Form to Proceed – Trendlee";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const resendSecretKey = process.env.RESEND_KEY;

if (!stripeSecretKey) {
  throw new Error("Stripe secret key is not found");
}

if (!resendSecretKey) {
  throw new Error("Resend secret key is not found");
}

const stripe = new Stripe(stripeSecretKey);
const resend = new Resend(resendSecretKey);

export async function POST(req: NextRequest) {
  const payload = await req.text();
  const response = JSON.parse(payload);

  const sig = req.headers.get(STRIPE_SIGNATURE_STRING);
  console.log(response);
  console.log(sig);

  try {
    const webhookSecretKey = process.env.STRIPE_WEBHOOK_SECRET_KEY;
    if (!sig || !webhookSecretKey) {
      throw new Error("Stripe Signature or Webhook secret key is missing");
    }

    const event = stripe.webhooks.constructEvent(
      payload,
      sig,
      webhookSecretKey,
    );

    if (event.type === "payment_intent.succeeded") {
      const emailResponse = await resend.emails.send({
        from: EMAIL_FROM,
        to: EMAIL_TO,
        subject: EMAIL_SUBJECT,
        html: paymentSuccessEmailMarkup,
      });
      console.log(emailResponse);
    }

    return NextResponse.json({ status: "Success", event: event.type });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: "Failed", error });
  }
}
