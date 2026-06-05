import { CheckCircle2, Send } from "lucide-react";
import { type FormEvent, useState } from "react";

import { SectionShell } from "@/components/section-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { type ContactFormData, submitContactForm } from "@/services/contact";

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  message: "",
};

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [status, setStatus] = useState<{
    tone: "idle" | "success" | "error";
    message: string;
  }>({
    tone: "idle",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus({
      tone: "idle",
      message: "",
    });

    try {
      await submitContactForm(formData);
      setFormData(initialFormData);
      setStatus({
        tone: "success",
        message: "Da gui thanh cong.",
      });
    } catch (error) {
      setStatus({
        tone: "error",
        message: error instanceof Error ? error.message : "Co loi xay ra. Vui long thu lai sau.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionShell
      id="contact"
      eyebrow="Liên hệ"
      title="Kết nối nhanh"
      description=""
    >
      <div className="mx-auto max-w-3xl">
        <Card className="p-6 md:p-7">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-[var(--text-secondary)]">
                  Họ và tên
                </label>
                <Input
                  id="name"
                  placeholder="Tên của bạn"
                  required
                  value={formData.name}
                  onChange={(event) =>
                    setFormData((current) => ({
                      ...current,
                      name: event.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-[var(--text-secondary)]">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  value={formData.email}
                  onChange={(event) =>
                    setFormData((current) => ({
                      ...current,
                      email: event.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm text-[var(--text-secondary)]">
                Nội dung
              </label>
              <Textarea
                id="message"
                placeholder="Nội dung..."
                required
                value={formData.message}
                onChange={(event) =>
                  setFormData((current) => ({
                    ...current,
                    message: event.target.value,
                  }))
                }
              />
            </div>
            {status.tone !== "idle" ? (
              status.tone === "success" ? (
                <div className="flex items-center gap-2 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 px-4 py-3 text-sm font-medium text-emerald-200">
                  <CheckCircle2 className="size-4 shrink-0" />
                  <span>{status.message}</span>
                </div>
              ) : (
                <div className="rounded-2xl border border-rose-400/20 bg-rose-400/10 px-4 py-3 text-sm text-rose-200">
                  {status.message}
                </div>
              )
            ) : null}
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Dang gui..." : "Gửi tin nhắn"} <Send className="size-4" />
            </Button>
          </form>
        </Card>
      </div>
    </SectionShell>
  );
}
