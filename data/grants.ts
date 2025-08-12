export type Grant = {
  slug: string;
  title: string;
  org?: string;
  country?: string;
  format?: string;
  age?: string;
  deadline?: string;
  fee?: string;
  coverage?: string[];
  eligibility?: string[];
  documents?: string[];
  how_to_apply?: string[];
  apply_url?: string;
  official_url?: string;
  tags?: string[];
  summary?: string;
};

export const grants: Grant[] = [
  {
    slug: "unesco-youth-hackathon-2025",
    title: "UNESCO Youth Hackathon 2025",
    org: "UNESCO",
    country: "Colombia",
    format: "Online",
    age: "18–30",
    deadline: "2025-09-10",
    fee: "No application fee",
    coverage: ["Certificate","Mentorship","Networking","Prizes"],
    eligibility: ["Open to all nationalities","Team or individual projects"],
    documents: ["CV/Resume","Project description","ID/Passport"],
    how_to_apply: [
      "Official page orqali ro‘yxatdan o‘ting",
      "Loyiha haqida qisqa ta’rif yuklang",
      "Deadlinegacha arizani tasdiqlang"
    ],
    apply_url: "https://example.com/apply",
    official_url: "https://example.com",
    tags: ["hackathon","UNESCO","youth"],
    summary: "Xalqaro onlayn hackathon: yoshlar uchun loyiha ishlab chiqish, mentorlik va mukofotlar."
  }
];
