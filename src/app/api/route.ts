import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export async function POST(
  req: Request
) {

  try {

    const body =
      await req.json();

    const {
      email,
      orderId,
      total,
    } = body;

    const data =
      await resend.emails.send({

        from:
          "Nature's Crate <onboarding@resend.dev>",

        to: [email],

        subject:
          `Order Confirmation #${orderId}`,

        html: `
          <div style="font-family:sans-serif;padding:30px;">
            
            <h1 style="color:#6DBB04;">
              Nature's Crate
            </h1>

            <h2>
              Order Confirmed 🎉
            </h2>

            <p>
              Your order has been placed successfully.
            </p>

            <p>
              <strong>Order ID:</strong>
              ${orderId}
            </p>

            <p>
              <strong>Total:</strong>
              ₹${total}
            </p>

            <p>
              Fresh vegetables are on the way 🚚
            </p>

          </div>
        `,
      });

    return Response.json(data);

  } catch (error) {

    return Response.json(
      { error }
    );
  }
}