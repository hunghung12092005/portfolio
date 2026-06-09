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
      title="Cùng xây thứ gì đó đáng nhớ"
      description="Nếu bạn đang cần một người vừa làm sản phẩm, vừa hiểu backend và AI workflow, mình sẵn sàng trao đổi."
    >
      <div className="grid gap-4 xl:grid-cols-[0.86fr_1.14fr]">
        <div data-reveal="card">
          <Card className="h-full p-6 md:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">Collaboration note</p>
            <h3 className="mt-4 text-[2rem] font-semibold leading-tight tracking-[-0.04em] text-[var(--text-primary)]">
              Mình hợp với các bài toán cần cả tư duy sản phẩm lẫn triển khai kỹ thuật rõ ràng.
            </h3>
            <div className="mt-6 grid gap-3">
              <div className="rounded-[1.6rem] border border-white/60 bg-white/80 px-4 py-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">Phù hợp nhất</p>
                <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">AI application, internal tools, backend-heavy product, automation workflow.</p>
              </div>
              <div className="rounded-[1.6rem] border border-white/60 bg-white/80 px-4 py-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">Cách làm việc</p>
                <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">Ưu tiên yêu cầu rõ, milestone gọn và khả năng bàn giao tiếp tục được.</p>
              </div>
              <div className="rounded-[1.6rem] border border-white/60 bg-white/80 px-4 py-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">Phản hồi</p>
                <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">Bạn có thể gửi brief ngắn, nhu cầu tuyển dụng hoặc ý tưởng hợp tác.</p>
              </div>
            </div>
          </Card>
        </div>

        <Card data-reveal="card" className="p-6 md:p-7">
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
                <div className="flex items-center gap-2 rounded-2xl border border-[rgba(101,210,244,0.28)] bg-[rgba(101,210,244,0.12)] px-4 py-3 text-sm font-medium text-[var(--text-primary)]">
                  <CheckCircle2 className="size-4 shrink-0" />
                  <span>{status.message}</span>
                </div>
              ) : (
                <div className="rounded-2xl border border-[rgba(255,126,126,0.28)] bg-[rgba(255,126,126,0.12)] px-4 py-3 text-sm text-[rgb(255,205,205)]">
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
