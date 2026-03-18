import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validators";
import { sendEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const json = await request.json();
    const parsed = contactSchema.safeParse(json);

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

    const subject = `New Contact Message - ${data.topic}`;
    const text = [
      "New contact message received:",
      "",
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Topic: ${data.topic}`,
      "Message:",
      data.message,
    ].join("\n");

    await sendEmail({
      to: "hello@bellanotte.com",
      subject,
      text,
    });

    return NextResponse.json(
      {
        ok: true,
        message: "Message sent. Thanks for reaching out—talk soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("POST /api/contact error:", error);
    return NextResponse.json(
      {
        ok: false,
        message: "Something went wrong. Please email hello@bellanotte.com.",
      },
      { status: 500 }
    );
  }
}
