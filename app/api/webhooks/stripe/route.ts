import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";
import { paymentSuccessEmailMarkup } from "@/constants/offers";

const STRIPE_SIGNATURE_STRING = "Stripe-Signature";
const EMAIL_FROM = "Trendlee Agency <no-reply@trendlee.agency>";
const EMAIL_SUBJECT =
  "Thank You for Your Purchase! Please Complete the Form to Proceed – Trendlee";

const stripeSecretKey =
  process.env.ENVIRONMENT === "development"
    ? process.env.DEV_STRIPE_SECRET_KEY
    : process.env.PROD_STRIPE_SECRET_KEY;

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
  const sig = req.headers.get(STRIPE_SIGNATURE_STRING);

  try {
    const webhookSecretKey =
      process.env.ENVIRONMENT === "development"
        ? process.env.DEV_STRIPE_WEBHOOK_SECRET_KEY
        : process.env.PROD_STRIPE_WEBHOOK_SECRET_KEY;

    if (!sig || !webhookSecretKey) {
      throw new Error("Stripe Signature or Webhook secret key is missing");
    }

    console.log(process.env.ENVIRONMENT);
    const event = stripe.webhooks.constructEvent(
      payload,
      sig,
      webhookSecretKey,
    );
    console.log(event.type);

    if (event.type === "charge.succeeded") {
      const charge = event.data.object; // This is a Stripe charge object
      const customerEmail = charge.billing_details?.email;

      if (!customerEmail) {
        throw new Error("Customer email not found in the charge object");
      }

      const emailResponse = await resend.emails.send({
        from: EMAIL_FROM,
        to: customerEmail,
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
