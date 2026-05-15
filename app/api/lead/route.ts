import { z } from "zod";

// Resend is deferred until DeShea sets up the account.
// import { Resend } from "resend";
// const resend = new Resend(process.env.RESEND_API_KEY);

const leadSchema = z.object({
  name: z.string().min(2).max(100),
  phone: z.string().min(10).max(20),
  problem: z.string().max(500).optional(),
  source: z.string().optional(),
  neighborhood: z.string().optional(),
  urgency: z.string().optional(),
  tcpaConsent: z.boolean(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = leadSchema.parse(body);

    if (!validated.tcpaConsent) {
      return Response.json({ error: "TCPA consent required" }, { status: 400 });
    }

    // TEMPORARY: Log to Vercel function console until Resend is set up.
    // Check Vercel dashboard > Logs to see submissions.
    console.log("=== NEW LEAD ===");
    console.log(`Name: ${validated.name}`);
    console.log(`Phone: ${validated.phone}`);
    console.log(`Problem: ${validated.problem ?? "Not specified"}`);
    console.log(`Neighborhood: ${validated.neighborhood ?? "Not specified"}`);
    console.log(`Urgency: ${validated.urgency ?? "Not specified"}`);
    console.log(`Source page: ${validated.source ?? "Unknown"}`);
    console.log(`Submitted: ${new Date().toISOString()}`);
    console.log("================");

    // FUTURE: When DeShea sets up Resend, uncomment this block and add env vars.
    /*
    await resend.emails.send({
      from: "contact@vegasachvac.com",
      to: process.env.LEAD_EMAIL_TO!,
      subject: `New Vegas HVAC Lead: ${validated.name}`,
      text: [
        `Name: ${validated.name}`,
        `Phone: ${validated.phone}`,
        `Problem: ${validated.problem ?? "Not specified"}`,
        `Neighborhood: ${validated.neighborhood ?? "Not specified"}`,
        `Urgency: ${validated.urgency ?? "Not specified"}`,
        `Source page: ${validated.source ?? "Unknown"}`,
        `Submitted: ${new Date().toISOString()}`,
      ].join("\n"),
    });
    */

    return Response.json({ success: true });
  } catch (error) {
    console.error("Lead submission error:", error);
    return Response.json({ error: "Submission failed" }, { status: 500 });
  }
}
