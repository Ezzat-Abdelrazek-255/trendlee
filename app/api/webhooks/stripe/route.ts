import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";

const STRIPE_SIGNATURE_STRING = "Stripe-Signature";

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

export async function POST(req: NextRequest, res: NextResponse) {
  const payload = await req.text();
  const response = JSON.parse(payload);

  const sig = req.headers.get(STRIPE_SIGNATURE_STRING);

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
      resend.emails.send({
        from: "onboarding@resend.dev",
        to: "ezzatabdelrazek255@gmail.com",
        subject: "Hello World",
        html: "<p>Congrats on sending your <a href='https://forms.gle/mHBxNZopQBdAc2mr9'>first email</a>!</p>",
      });
    }

    return NextResponse.json({ status: "Success", event: event.type });
  } catch (error) {
    return NextResponse.json({ status: "Failed", error });
  }
}
