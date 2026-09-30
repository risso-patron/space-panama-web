export type ContactSubmission = {
  name: string;
  email: string;
  message: string;
  source?: string;
};

export type ContactReceipt = {
  id: string;
  acceptedAt: string;
  adapter: "memory";
};

export type ContactAdapter = {
  submit: (submission: ContactSubmission) => Promise<ContactReceipt>;
};

const submissions: Array<ContactSubmission & ContactReceipt> = [];

function createId() {
  return `lead_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

export const memoryContactAdapter: ContactAdapter = {
  async submit(submission) {
    const receipt: ContactReceipt = {
      id: createId(),
      acceptedAt: new Date().toISOString(),
      adapter: "memory",
    };

    submissions.push({ ...submission, ...receipt });
    return receipt;
  },
};

export function resolveContactAdapter(): ContactAdapter {
  const adapter = process.env.SPACE_CONTACT_ADAPTER ?? "memory";

  if (adapter === "memory") {
    return memoryContactAdapter;
  }

  if (adapter === "supabase") {
    throw new Error(
      "Supabase contact adapter is intentionally not connected yet. Design RLS policies before writing leads to Supabase.",
    );
  }

  throw new Error(`Unknown SPACE_CONTACT_ADAPTER: ${adapter}`);
}
