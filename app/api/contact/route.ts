import type { ContactSubmission } from "@/lib/adapters/contact-adapter";

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

  const name = payload.name.trim();
  const email = payload.email.trim();
  const message = payload.message.trim();
  if (name.length > 160 || email.length > 254 || message.length > 5000 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;

  return {
    name,
    email,
    message,
    source: typeof payload.source === "string" ? payload.source.trim().slice(0, 80) : "website",
  };
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type")?.split(";")[0].trim().toLowerCase();
  if (contentType !== "application/json") {
    return Response.json({ error: "Content-Type must be application/json." }, { status: 415 });
  }

  const lengthHeader = request.headers.get("content-length");
  const contentLength = lengthHeader && /^\d+$/.test(lengthHeader) ? Number(lengthHeader) : 0;
  if ((lengthHeader && !/^\d+$/.test(lengthHeader)) || contentLength > 16_384) {
    return Response.json({ error: "Request body is too large." }, { status: 413 });
  }

  let body: unknown;

  try {
    const reader = request.body?.getReader();
    if (!reader) {
      return Response.json({ error: "Invalid JSON payload." }, { status: 400 });
    }

    const chunks: Uint8Array[] = [];
    let totalBytes = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      totalBytes += value.byteLength;
      if (totalBytes > 16_384) {
        await reader.cancel();
        return Response.json({ error: "Request body is too large." }, { status: 413 });
      }
      chunks.push(value);
    }

    const bytes = new Uint8Array(totalBytes);
    let offset = 0;
    for (const chunk of chunks) {
      bytes.set(chunk, offset);
      offset += chunk.byteLength;
    }
    body = JSON.parse(new TextDecoder().decode(bytes)) as unknown;
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

  // No persistent contact provider is configured in this release. The previous
  // process-local memory adapter could acknowledge a lead without retaining it.
  return Response.json(
    { error: "Contact form unavailable. Please use the published email or WhatsApp channels." },
    { status: 503, headers: { "Cache-Control": "no-store" } },
  );
}
