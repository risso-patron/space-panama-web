import { resolveContactAdapter, type ContactSubmission } from "@/lib/adapters/contact-adapter";

function isString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function validateSubmission(body: unknown): ContactSubmission | null {
  if (!body || typeof body !== "object") {
    return null;
  }

  const payload = body as Partial<ContactSubmission>;

  if (!isString(payload.name) || !isString(payload.email) || !isString(payload.message)) {
    return null;
  }

  return {
    name: payload.name.trim(),
    email: payload.email.trim(),
    message: payload.message.trim(),
    source: typeof payload.source === "string" ? payload.source.trim() : "website",
  };
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const submission = validateSubmission(body);

  if (!submission) {
    return Response.json(
      { error: "Required fields: name, email, message." },
      { status: 422 },
    );
  }

  const receipt = await resolveContactAdapter().submit(submission);

  return Response.json({ ok: true, receipt }, { status: 202 });
}
