import { NextRequest, NextResponse } from "next/server";
import { cateringSchema } from "@/lib/validators";
import { sendEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const json = await request.json();
    const parsed = cateringSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          message: "Invalid request payload.",
          errors: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    const data = parsed.data;

    const subject = `New Catering Inquiry - ${data.name}`;
    const text = [
      "New catering inquiry received:",
      "",
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Event Date: ${data.eventDate}`,
      `Guest Count: ${data.guestCount}`,
      `Service Type: ${data.serviceType}`,
      `Notes: ${data.notes || "N/A"}`,
    ].join("\n");

    await sendEmail({
      to: "catering@bellanotte.com",
      subject,
      text,
    });

    return NextResponse.json(
      {
        ok: true,
        message: "Thanks—your catering request is in. We’ll reply within 1 business day.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("POST /api/catering error:", error);
    return NextResponse.json(
      {
        ok: false,
        message: "Something went wrong. Please email catering@bellanotte.com.",
      },
      { status: 500 }
    );
  }
}
