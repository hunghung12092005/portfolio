export type Project = {
  title: string;
  period: string;
  role: string;
  description: string;
  techStack: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Hệ thống AI hỗ trợ giao tiếp giáo viên - phụ huynh",
    period: "04/2026 - Nay",
    role: "Full Stack Developer / AI Engineer",
    featured: true,
    techStack: [
      "LangGraph",
      "FastAPI",
    ],
    description:
      "Phân tích yêu cầu và trực tiếp xây dựng hệ thống hỗ trợ giáo viên tự động tạo báo cáo tuần cá nhân hóa cho từng học sinh, phân loại thông báo và hỗ trợ giao tiếp với phụ huynh.",
  },
  {
    title: "Phần mềm Omichat quản lý doanh nghiệp và chat đa kênh",
    period: "05/2025 - 03/2026",
    role: "Lập trình viên Full Stack",
    techStack: ["Next.js", "Node.js", "Zalo", "Facebook", "Whatsapp", "Tiktok"],
    description:
      "Phát triển giao diện và API cho hệ thống chat đa kênh, xử lý luồng hội thoại, đồng bộ dữ liệu và tối ưu trải nghiệm sử dụng cho doanh nghiệp.",
  },
  {
    title: "Phần mềm ứng dụng AI tính lương",
    period: "2024 - 2025",
    role: "Trưởng nhóm, Lập trình viên Full Stack",
    techStack: ["Python", "Flask", "OCR", "REST API"],
    description:
      "Thiết kế kiến trúc hệ thống, xây dựng API xử lý dữ liệu và phát triển chức năng hỗ trợ tính lương bằng AI theo dữ liệu đầu vào của doanh nghiệp.",
  },
  {
    title: "Phần mềm quản lý khách sạn Hồ Xuân Hương",
    period: "2024 - 2025",
    role: "Trưởng nhóm, Lập trình viên Full Stack",
    techStack: ["React.js", "Laravel", "Booking Flow", "Reporting"],
    description:
      "Phân tích yêu cầu, phân chia công việc cho nhóm và trực tiếp xây dựng các chức năng quản lý phòng, khách hàng, đặt phòng và báo cáo vận hành.",
  },
];
