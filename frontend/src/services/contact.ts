import { buildApiUrl, parseJsonResponse } from "@/lib/api";

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

type ContactApiResponse = {
  error?: string;
  message?: string;
};

export async function submitContactForm(payload: ContactFormData) {
  const response = await fetch(buildApiUrl("/contact"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  let data: ContactApiResponse | null;
  try {
    data = await parseJsonResponse<ContactApiResponse>(response);
  } catch {
    data = {
      error: "Phan hoi tu server khong hop le.",
    };
  }

  if (!response.ok) {
    throw new Error(data?.error || "Gui tin nhan that bai.");
  }

  return data;
}
