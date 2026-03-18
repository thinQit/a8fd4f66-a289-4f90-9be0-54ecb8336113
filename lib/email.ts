type SendEmailParams = {
  to: string;
  subject: string;
  text: string;
};

const RESEND_API_URL = "https://api.resend.com/emails";

export async function sendEmail({ to, subject, text }: SendEmailParams): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;

  if (!apiKey) {
    throw new Error("Missing RESEND_API_KEY environment variable");
  }

  if (!from) {
    throw new Error("Missing EMAIL_FROM environment variable");
  }

  const response = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject,
      text,
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Email provider error: ${response.status} ${errorBody}`);
  }
}
