import { NextRequest, NextResponse } from "next/server";
import { reservationSchema } from "@/lib/validators";
import { sendEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const json = await request.json();
    const parsed = reservationSchema.safeParse(json);

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

    const subject = `New Reservation Request - ${data.name}`;
    const text = [
      "New reservation request received:",
      "",
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`,
      `Date: ${data.date}`,
      `Time: ${data.time}`,
      `Party Size: ${data.partySize}`,
      `Occasion: ${data.occasion || "N/A"}`,
      `Notes: ${data.notes || "N/A"}`,
    ].join("\n");

    await sendEmail({
      to: "reservations@bellanotte.com",
      subject,
      text,
    });

    return NextResponse.json(
      {
        ok: true,
        message: "Reservation request sent. We’ll confirm shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("POST /api/reservations error:", error);
    return NextResponse.json(
      {
        ok: false,
        message: "Something went wrong. Please call us at (512) 555-0198.",
      },
      { status: 500 }
    );
  }
}
