export type Locale = "en" | "id";

export type PublicationType =
  | "policy-brief"
  | "field-story"
  | "report-data"
  | "provincial-profile"
  | "podcast-video"
  | "booklet-infographic";

export type PillarId = "pillar-1" | "pillar-2" | "pillar-3";

export interface BilingualText {
  en: string;
  id: string;
}

export interface PublicationItem {
  id: string;
  skalaOneId: string;
  slug: string;
  type: PublicationType;
  pillar: PillarId;
  province: string;
  provinceLabel: BilingualText;
  year: number;
  publishedDate: string;
  title: BilingualText;
  summary: BilingualText;
  keyFindings: {
    en: string[];
    id: string[];
  };
  fileSize?: string;
  pages?: number;
  downloads: number;
  translationStatus: "ID & EN Synced" | "EN Primary • ID Reviewed";
  tags: string[];
  mediaDuration?: string;
  transcript?: {
    en: { time: string; speaker: string; text: string }[];
    id: { time: string; speaker: string; text: string }[];
  };
  chartData?: {
    title: BilingualText;
    unit: string;
    points: { label: string; baseline: number; current: number }[];
  };
}

export interface ProvinceProfile {
  id: string;
  code: string;
  name: BilingualText;
  region: BilingualText;
  x: number;
  y: number;
  population: string;
  basicServiceIndex: number;
  healthCoverage: number;
  gedsiParticipation: number;
  publicationsCount: number;
  focusAreas: { en: string[]; id: string[] };
  highlight: BilingualText;
}

export interface GlossaryEntry {
  term: string;
  letter: string;
  category: BilingualText;
  definition: BilingualText;
}

export interface NewsItem {
  id: string;
  date: string;
  category: BilingualText;
  province: string;
  title: BilingualText;
  excerpt: BilingualText;
  readTime: string;
}

export interface CareerVacancy {
  id: string;
  title: BilingualText;
  location: string;
  type: BilingualText;
  deadline: string;
  channel: string;
  summary: BilingualText;
}

export interface ProcurementNotice {
  ref: string;
  title: BilingualText;
  status: "Open" | "Evaluated" | "Upcoming";
  deadline: string;
  oneDriveNotice: BilingualText;
}

export const PUBLICATIONS: PublicationItem[] = [
  {
    id: "pub-1",
    skalaOneId: "SK1-PB-2027-014",
    slug: "accelerating-sub-national-fiscal-transfers-for-health",
    type: "policy-brief",
    pillar: "pillar-1",
    province: "National",
    provinceLabel: { en: "National • Bappenas & Kemenkeu", id: "Nasional • Bappenas & Kemenkeu" },
    year: 2027,
    publishedDate: "2027-02-18",
    title: {
      en: "Accelerating Sub-National Fiscal Transfers for Health & Basic Services",
      id: "Mempercepat Transfer Fiskal Daerah untuk Layanan Kesehatan & Layanan Dasar",
    },
    summary: {
      en: "Evidence-based policy options to align DAK Fisik and Dana Alokasi Umum (DAU) performance incentives with minimum service standards (SPM) across Eastern Indonesia.",
      id: "Opsi kebijakan berbasis bukti untuk menyelaraskan insentif kinerja DAK Fisik dan DAU dengan Standar Pelayanan Minimal (SPM) di Kawasan Timur Indonesia.",
    },
    keyFindings: {
      en: [
        "Inter-governmental fiscal coordination cut health facility disbursement delays by 28% across 6 pilot districts.",
        "Linking PFM dashboards to SPM outcome indicators improves budget tagging accuracy for stunting and maternal care.",
        "Joint Bappenas–Ministry of Finance technical clinics accelerate APBD alignment before Q3 budget cycles.",
      ],
      id: [
        "Koordinasi fiskal antar-pemerintah memangkas keterlambatan penyaluran dana fasilitas kesehatan sebesar 28% di 6 kabupaten percontohan.",
        "Penautan dasbor pengelolaan keuangan daerah ke indikator SPM meningkatkan akurasi penandaan anggaran stunting dan kesehatan ibu.",
        "Klinik teknis bersama Bappenas–Kemenkeu mempercepat penyelarasan APBD sebelum siklus anggaran triwulan III.",
      ],
    },
    fileSize: "2.1 MB",
    pages: 18,
    downloads: 1482,
    translationStatus: "ID & EN Synced",
    tags: ["Fiscal Transfers", "DAK", "Health SPM", "Pillar 1"],
    chartData: {
      title: {
        en: "District SPM Health Budget Execution Rate (%)",
        id: "Tingkat Realisasi Anggaran Kesehatan SPM Kabupaten (%)",
      },
      unit: "%",
      points: [
        { label: "2023", baseline: 61, current: 64 },
        { label: "2024", baseline: 63, current: 71 },
        { label: "2025", baseline: 65, current: 79 },
        { label: "2026", baseline: 66, current: 86 },
        { label: "2027", baseline: 68, current: 91 },
      ],
    },
  },
  {
    id: "pub-2",
    skalaOneId: "SK1-FS-2026-089",
    slug: "inclusive-planning-persons-with-disabilities-kupang",
    type: "field-story",
    pillar: "pillar-3",
    province: "NTT",
    provinceLabel: { en: "East Nusa Tenggara (NTT)", id: "Nusa Tenggara Timur (NTT)" },
    year: 2026,
    publishedDate: "2026-11-10",
    title: {
      en: "Inclusive Planning for Persons with Disabilities in Kupang Musrenbang",
      id: "Perencanaan Inklusif bagi Penyandang Disabilitas dalam Musrenbang Kupang",
    },
    summary: {
      en: "How Organisations of Persons with Disabilities (OPDs) partnered with Bappeda Kupang to embed accessible WASH facilities and assistive service budgets into annual village plans.",
      id: "Bagaimana Organisasi Penyandang Disabilitas (OPD) bermitra dengan Bappeda Kupang memasukkan fasilitas WASH aksesibel dan anggaran layanan bantu ke rencana desa tahunan.",
    },
    keyFindings: {
      en: [
        "14 sub-districts adopted disability-disaggregated registry data during Musrenbang RKPD 2026.",
        "Co-designed accessible puskesmas ramps and sign-language front-desk training reached 3,400+ residents.",
        "Women with disabilities chaired 42% of inclusive village planning working groups.",
      ],
      id: [
        "14 kecamatan mengadopsi data terpilah disabilitas selama Musrenbang RKPD 2026.",
        "Desain bersama jalur landai puskesmas dan pelatihan bahasa isyarat menjangkau 3.400+ warga.",
        "Perempuan penyandang disabilitas memimpin 42% kelompok kerja perencanaan desa inklusif.",
      ],
    },
    fileSize: "1.8 MB",
    pages: 12,
    downloads: 1129,
    translationStatus: "ID & EN Synced",
    tags: ["GEDSI", "OPD", "Musrenbang", "NTT", "Universal Design"],
  },
  {
    id: "pub-3",
    skalaOneId: "SK1-PP-2027-004",
    slug: "maluku-north-kalimantan-basic-services-snapshot",
    type: "provincial-profile",
    pillar: "pillar-2",
    province: "Maluku",
    provinceLabel: { en: "Maluku & North Kalimantan", id: "Maluku & Kalimantan Utara" },
    year: 2027,
    publishedDate: "2027-01-25",
    title: {
      en: "Maluku & North Kalimantan: Archipelagic & Border Basic Services Snapshot",
      id: "Maluku & Kalimantan Utara: Potret Layanan Dasar Kepulauan & Perbatasan",
    },
    summary: {
      en: "Comparative sub-national governance profile analysing archipelago logistics, teacher deployment, civil registration (Adminduk), and PFM readiness across Maluku and Kaltara.",
      id: "Profil tata kelola daerah komparatif yang menganalisis logistik kepulauan, penempatan guru, administrasi kependudukan (Adminduk), dan kesiapan keuangan daerah di Maluku dan Kaltara.",
    },
    keyFindings: {
      en: [
        "Mobile Adminduk boats increased birth certificate coverage in outer islands by 34 percentage points.",
        "District-level Satu Data Indonesia interoperability nodes reduced reporting duplication across 11 OPDs.",
        "Targeted remote-area allowances improved primary teacher retention in border sub-districts.",
      ],
      id: [
        "Perahu layanan Adminduk keliling meningkatkan cakupan akta kelahiran di pulau terluar sebesar 34 poin persentase.",
        "Simpul interoperabilitas Satu Data Indonesia tingkat kabupaten mengurangi duplikasi pelaporan di 11 OPD.",
        "Tunjangan daerah terpencil terarah meningkatkan retensi guru SD di kecamatan perbatasan.",
      ],
    },
    fileSize: "3.4 MB",
    pages: 28,
    downloads: 940,
    translationStatus: "ID & EN Synced",
    tags: ["Maluku", "Kaltara", "Adminduk", "Sub-National Governance"],
  },
  {
    id: "pub-4",
    skalaOneId: "SK1-AV-2026-014",
    slug: "dialogue-decentralised-governance-reform-ep14",
    type: "podcast-video",
    pillar: "pillar-2",
    province: "National",
    provinceLabel: { en: "National • Podcast & Video", id: "Nasional • Podcast & Video" },
    year: 2026,
    publishedDate: "2026-10-14",
    title: {
      en: "Dialogue on Decentralised Governance Reform & Digital Public Infrastructure (Ep. 14)",
      id: "Dialog Reformasi Tata Kelola Desentralisasi & Infrastruktur Publik Digital (Ep. 14)",
    },
    summary: {
      en: "Bappenas directors, provincial planners from Aceh and Gorontalo, and civil society advocates discuss interoperable data ecosystems for SKALA Phase II.",
      id: "Direktur Bappenas, perencana provinsi dari Aceh dan Gorontalo, serta pegiat masyarakat sipil membahas ekosistem data interoperabel untuk SKALA Fase II.",
    },
    keyFindings: {
      en: [
        "Open read-only APIs allow national KMC and provincial portals to reuse verified briefs without duplication.",
        "Accessible digital public services must embed WCAG 2.2 AA and screen-reader usability from sprint one.",
      ],
      id: [
        "API baca-saja terbuka memungkinkan KMC nasional dan portal daerah menggunakan ulang dokumen tanpa duplikasi.",
        "Layanan publik digital yang aksesibel harus menanamkan kepatuhan WCAG 2.2 AA sejak sprint pertama.",
      ],
    },
    mediaDuration: "24:15",
    downloads: 785,
    translationStatus: "ID & EN Synced",
    tags: ["Podcast", "WCAG 2.2 AA", "Interoperability", "Phase II"],
    transcript: {
      en: [
        {
          time: "00:12",
          speaker: "Moderator (SKALA KM)",
          text: "Welcome to Episode 14 of SKALA Dialogues. Today we explore how Phase II (2027–2030) connects national policy with sub-national basic service delivery.",
        },
        {
          time: "02:45",
          speaker: "Bappenas Directorate",
          text: "Regional disparity narrows fastest when Bappeda planners have real-time fiscal and SPM data in open, interoperable formats—without manual re-entry.",
        },
        {
          time: "07:18",
          speaker: "OPD Representative (Aceh)",
          text: "Accessibility is not an afterthought. Every policy brief, data chart, and audio dialogue needs full transcripts, captions, and screen-reader support.",
        },
      ],
      id: [
        {
          time: "00:12",
          speaker: "Moderator (SKALA KM)",
          text: "Selamat datang di Episode 14 Dialog SKALA. Hari ini kita membahas bagaimana Fase II (2027–2030) menghubungkan kebijakan nasional dengan layanan dasar daerah.",
        },
        {
          time: "02:45",
          speaker: "Direktorat Bappenas",
          text: "Kesenjangan wilayah paling cepat menyempit saat perencana Bappeda memiliki data fiskal dan SPM real-time dalam format terbuka yang interoperabel.",
        },
        {
          time: "07:18",
          speaker: "Perwakilan OPD (Aceh)",
          text: "Aksesibilitas bukan pelengkap akhir. Setiap ringkasan kebijakan, grafik data, dan dialog audio wajib disertai transkrip penuh, takarir, dan dukungan pembaca layar.",
        },
      ],
    },
  },
  {
    id: "pub-5",
    skalaOneId: "SK1-RD-2026-052",
    slug: "public-financial-management-readiness-index-2026",
    type: "report-data",
    pillar: "pillar-1",
    province: "NTB",
    provinceLabel: { en: "West Nusa Tenggara (NTB)", id: "Nusa Tenggara Barat (NTB)" },
    year: 2026,
    publishedDate: "2026-09-04",
    title: {
      en: "Sub-National PFM & Minimum Service Standards Synthesis Report (2023–2026)",
      id: "Laporan Sintesis Pengelolaan Keuangan Daerah & Standar Pelayanan Minimal (2023–2026)",
    },
    summary: {
      en: "Multi-year quantitative assessment of budget credibility, procurement transparency, and social protection targeting across 8 SKALA partner provinces.",
      id: "Penilaian kuantitatif multi-tahun atas kredibilitas anggaran, transparansi pengadaan, dan ketepatan sasaran perlindungan sosial di 8 provinsi mitra SKALA.",
    },
    keyFindings: {
      en: [
        "Budget execution variance dropped from 18.4% to 7.2% in districts adopting quarterly expenditure tracking.",
        "Open data portals linked with KMC cut research retrieval time for academic partners by half.",
      ],
      id: [
        "Deviasi realisasi anggaran turun dari 18,4% menjadi 7,2% di kabupaten yang menerapkan pelacakan belanja triwulanan.",
        "Portal data terbuka yang terhubung dengan KMC memangkas waktu penelusuran riset bagi akademisi hingga separuhnya.",
      ],
    },
    fileSize: "4.6 MB",
    pages: 54,
    downloads: 1894,
    translationStatus: "ID & EN Synced",
    tags: ["PFM", "SPM", "NTB", "Time Series"],
    chartData: {
      title: {
        en: "Partner Province Basic Service Composite Score (0–100)",
        id: "Skor Komposit Layanan Dasar Provinsi Mitra (0–100)",
      },
      unit: "pts",
      points: [
        { label: "Aceh", baseline: 64, current: 78 },
        { label: "NTB", baseline: 62, current: 77 },
        { label: "NTT", baseline: 54, current: 71 },
        { label: "Maluku", baseline: 57, current: 73 },
        { label: "Kaltara", baseline: 66, current: 81 },
        { label: "Gorontalo", baseline: 61, current: 76 },
      ],
    },
  },
  {
    id: "pub-6",
    skalaOneId: "SK1-BK-2025-031",
    slug: "gedsi-mainstreaming-handbook-subnational-governments",
    type: "booklet-infographic",
    pillar: "pillar-3",
    province: "Gorontalo",
    provinceLabel: { en: "Gorontalo & Aceh", id: "Gorontalo & Aceh" },
    year: 2025,
    publishedDate: "2025-12-03",
    title: {
      en: "Practical Booklet: GEDSI Budgeting & Universal Design for Regional Agencies",
      id: "Buklet Praktis: Penganggaran GEDSI & Desain Universal bagi Perangkat Daerah",
    },
    summary: {
      en: "Step-by-step operational guide for local planning agencies (Bappeda) and social affairs offices to conduct inclusive consultations and accessible public procurement.",
      id: "Panduan operasional langkah demi langkah bagi Bappeda dan dinas sosial dalam melaksanakan konsultasi inklusif dan pengadaan publik yang aksesibel.",
    },
    keyFindings: {
      en: [
        "Includes 12-point WCAG & physical accessibility checklist aligned with DFAT Universal Design principles.",
        "Adopted as core training material in Gorontalo, Aceh, and Papua provincial civil service academies.",
      ],
      id: [
        "Memuat daftar periksa aksesibilitas fisik dan WCAG 12 poin selaras dengan Prinsip Desain Universal DFAT.",
        "Diadopsi sebagai materi pelatihan utama di BPSDM Provinsi Gorontalo, Aceh, dan Papua.",
      ],
    },
    fileSize: "1.5 MB",
    pages: 24,
    downloads: 2105,
    translationStatus: "ID & EN Synced",
    tags: ["Booklet", "GEDSI", "DFAT Universal Design", "Gorontalo"],
  },
];

export const PROVINCES: ProvinceProfile[] = [
  {
    id: "aceh",
    code: "ID-AC",
    name: { en: "Aceh", id: "Aceh" },
    region: { en: "Sumatra", id: "Sumatra" },
    x: 9,
    y: 23,
    population: "5.48M",
    basicServiceIndex: 78,
    healthCoverage: 84,
    gedsiParticipation: 76,
    publicationsCount: 19,
    focusAreas: {
      en: ["Special Autonomy Fund (Otsus) Governance", "Inclusive Village Planning", "Stunting Reduction Data"],
      id: ["Tata Kelola Dana Otsus", "Perencanaan Desa Inklusif", "Data Penurunan Stunting"],
    },
    highlight: {
      en: "23 districts integrated gender & disability tagging into APBK budget systems.",
      id: "23 kabupaten/kota mengintegrasikan penandaan gender & disabilitas ke sistem APBK.",
    },
  },
  {
    id: "kaltara",
    code: "ID-KU",
    name: { en: "North Kalimantan (Kaltara)", id: "Kalimantan Utara (Kaltara)" },
    region: { en: "Kalimantan", id: "Kalimantan" },
    x: 43,
    y: 27,
    population: "0.74M",
    basicServiceIndex: 81,
    healthCoverage: 82,
    gedsiParticipation: 74,
    publicationsCount: 14,
    focusAreas: {
      en: ["Border-Area Service Logistics", "Satu Data Interoperability", "Education Workforce Planning"],
      id: ["Logistik Layanan Wilayah Perbatasan", "Interoperabilitas Satu Data", "Perencanaan Tenaga Pendidik"],
    },
    highlight: {
      en: "Cross-border civil registration & primary health tele-reporting deployed across 5 districts.",
      id: "Administrasi kependudukan perbatasan & pelaporan kesehatan primer diterapkan di 5 kabupaten/kota.",
    },
  },
  {
    id: "gorontalo",
    code: "ID-GO",
    name: { en: "Gorontalo", id: "Gorontalo" },
    region: { en: "Sulawesi", id: "Sulawesi" },
    x: 56,
    y: 41,
    population: "1.21M",
    basicServiceIndex: 76,
    healthCoverage: 80,
    gedsiParticipation: 79,
    publicationsCount: 16,
    focusAreas: {
      en: ["Poverty Data Integration (P3KE)", "Women's Leadership in Musrenbang", "Clean Water Governance"],
      id: ["Integrasi Data Kemiskinan (P3KE)", "Kepemimpinan Perempuan di Musrenbang", "Tata Kelola Air Bersih"],
    },
    highlight: {
      en: "Unified social protection registry reduced targeting errors across 6 regional agencies.",
      id: "Basis data perlindungan sosial terpadu menekan kesalahan sasaran di 6 perangkat daerah.",
    },
  },
  {
    id: "ntb",
    code: "ID-NB",
    name: { en: "West Nusa Tenggara (NTB)", id: "Nusa Tenggara Barat (NTB)" },
    region: { en: "Nusa Tenggara", id: "Nusa Tenggara" },
    x: 41,
    y: 74,
    population: "5.56M",
    basicServiceIndex: 77,
    healthCoverage: 81,
    gedsiParticipation: 82,
    publicationsCount: 22,
    focusAreas: {
      en: ["PFM & SPM Alignment", "Women Migrant Worker Protection", "Climate-Resilient WASH"],
      id: ["Penyelarasan PFM & SPM", "Perlindungan Pekerja Migran Perempuan", "WASH Tangguh Iklim"],
    },
    highlight: {
      en: "NTB Posyandu Keluarga platform links village health data directly to provincial planning.",
      id: "Platform Posyandu Keluarga NTB menghubungkan data kesehatan desa langsung ke perencanaan provinsi.",
    },
  },
  {
    id: "ntt",
    code: "ID-NT",
    name: { en: "East Nusa Tenggara (NTT)", id: "Nusa Tenggara Timur (NTT)" },
    region: { en: "Nusa Tenggara", id: "Nusa Tenggara" },
    x: 52,
    y: 77,
    population: "5.57M",
    basicServiceIndex: 71,
    healthCoverage: 75,
    gedsiParticipation: 85,
    publicationsCount: 27,
    focusAreas: {
      en: ["OPD-Led Accessibility Audits", "Island Health Supply Chains", "Fiscal Transfer Efficiency"],
      id: ["Audit Aksesibilitas Dipimpin OPD", "Rantai Pasok Kesehatan Kepulauan", "Efisiensi Transfer Fiskal"],
    },
    highlight: {
      en: "Kupang and 8 partner districts institutionalised OPD participation in annual RKPD budgeting.",
      id: "Kupang dan 8 kabupaten mitra melembagakan partisipasi OPD dalam penganggaran RKPD tahunan.",
    },
  },
  {
    id: "maluku",
    code: "ID-MA",
    name: { en: "Maluku", id: "Maluku" },
    region: { en: "Maluku Islands", id: "Kepulauan Maluku" },
    x: 69,
    y: 55,
    population: "1.90M",
    basicServiceIndex: 73,
    healthCoverage: 76,
    gedsiParticipation: 75,
    publicationsCount: 18,
    focusAreas: {
      en: ["Archipelagic Service Delivery", "Mobile Civil Registration", "Fiscal Decentralisation"],
      id: ["Penyediaan Layanan Kepulauan", "Adminduk Keliling", "Desentralisasi Fiskal"],
    },
    highlight: {
      en: "Gugus Pulau cluster model cuts inter-island education & health supervision costs by 22%.",
      id: "Model klaster Gugus Pulau memangkas biaya supervisi pendidikan & kesehatan antar-pulau sebesar 22%.",
    },
  },
  {
    id: "papua",
    code: "ID-PA",
    name: { en: "Papua & Tanah Papua", id: "Papua & Tanah Papua" },
    region: { en: "Papua", id: "Papua" },
    x: 86,
    y: 53,
    population: "4.41M",
    basicServiceIndex: 69,
    healthCoverage: 72,
    gedsiParticipation: 77,
    publicationsCount: 21,
    focusAreas: {
      en: ["Otsus Governance & New Autonomous Regions", "Indigenous Community Participation", "Primary Literacy & Health"],
      id: ["Tata Kelola Otsus & DOB", "Partisipasi Masyarakat Adat", "Literasi Dasar & Kesehatan"],
    },
    highlight: {
      en: "Technical assistance supports fiscal readiness across newly formed Tanah Papua provinces.",
      id: "Pendampingan teknis mendukung kesiapan fiskal di provinsi-provinsi baru Tanah Papua.",
    },
  },
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: "news-1",
    date: "2027-02-24",
    category: { en: "National Dialogue", id: "Dialog Nasional" },
    province: "National",
    title: {
      en: "Bappenas & Australian Embassy Launch SKALA Phase II Knowledge Exchange Roadmap",
      id: "Bappenas & Kedubes Australia Luncurkan Peta Jalan Pertukaran Pengetahuan SKALA Fase II",
    },
    excerpt: {
      en: "Senior central and sub-national planners aligned on open knowledge standards, Satu Data interoperability, and inclusive basic service delivery targets for 2027–2030.",
      id: "Perencana pusat dan daerah menyepakati standar pengetahuan terbuka, interoperabilitas Satu Data, dan target layanan dasar inklusif 2027–2030.",
    },
    readTime: "4 min",
  },
  {
    id: "news-2",
    date: "2027-02-11",
    category: { en: "Accessibility & GEDSI", id: "Aksesibilitas & GEDSI" },
    province: "NTT",
    title: {
      en: "Organisations of Persons with Disabilities Co-Test New Digital Public Services",
      id: "Organisasi Penyandang Disabilitas Uji Bersama Layanan Publik Digital Baru",
    },
    excerpt: {
      en: "Screen-reader users and disability advocates evaluated WCAG 2.2 AA navigation, high-contrast palettes, and bilingual transcripts ahead of regional portal rollout.",
      id: "Pengguna pembaca layar dan advokat disabilitas mengevaluasi navigasi WCAG 2.2 AA, palet kontras tinggi, dan transkrip dwibahasa menjelang peluncuran portal.",
    },
    readTime: "3 min",
  },
  {
    id: "news-3",
    date: "2027-01-29",
    category: { en: "Sub-National Governance", id: "Tata Kelola Daerah" },
    province: "Kaltara",
    title: {
      en: "North Kalimantan Integrates Remote Health Clinic Data into Provincial Budget Cycle",
      id: "Kalimantan Utara Integrasikan Data Puskesmas Terpencil ke Siklus Anggaran Provinsi",
    },
    excerpt: {
      en: "New quarterly expenditure and SPM tracking enables faster allocation of medical supplies to border sub-districts in Nunukan and Malinau.",
      id: "Pelacakan belanja triwulanan dan SPM memungkinkan penyaluran logistik medis lebih cepat ke kecamatan perbatasan di Nunukan dan Malinau.",
    },
    readTime: "5 min",
  },
];

export const GLOSSARY_ENTRIES: GlossaryEntry[] = [
  {
    term: "APBD (Anggaran Pendapatan dan Belanja Daerah)",
    letter: "A",
    category: { en: "Public Finance", id: "Keuangan Publik" },
    definition: {
      en: "Annual regional government budget formulated by the regional executive (Pemda) and approved by the regional legislature (DPRD).",
      id: "Rencana keuangan tahunan pemerintah daerah yang dibahas dan disetujui bersama oleh pemerintah daerah dan DPRD.",
    },
  },
  {
    term: "Bappenas",
    letter: "B",
    category: { en: "National Governance", id: "Tata Kelola Nasional" },
    definition: {
      en: "Ministry of National Development Planning / National Development Planning Agency, SKALA's primary Indonesian Government counterpart.",
      id: "Kementerian Perencanaan Pembangunan Nasional / Badan Perencanaan Pembangunan Nasional, mitra utama Pemerintah Indonesia untuk SKALA.",
    },
  },
  {
    term: "DAK (Dana Alokasi Khusus)",
    letter: "D",
    category: { en: "Fiscal Transfers", id: "Transfer Fiskal" },
    definition: {
      en: "Earmarked central government fiscal transfers to regions to fund specific national priorities such as health, education, and WASH infrastructure.",
      id: "Dana transfer pemerintah pusat yang dialokasikan ke daerah tertentu untuk mendanai kegiatan khusus prioritas nasional seperti kesehatan, pendidikan, dan sanitasi.",
    },
  },
  {
    term: "GEDSI",
    letter: "G",
    category: { en: "Inclusion • Pillar 3", id: "Inklusi • Pilar 3" },
    definition: {
      en: "Gender Equality, Disability, and Social Inclusion — a core cross-cutting SKALA pillar ensuring marginalised groups shape basic service policies.",
      id: "Kesetaraan Gender, Disabilitas, dan Inklusi Sosial — pilar utama lintas sektor SKALA untuk memastikan kelompok rentan berperan dalam kebijakan layanan dasar.",
    },
  },
  {
    term: "KMC (Knowledge Management Centre)",
    letter: "K",
    category: { en: "Interoperability", id: "Interoperabilitas" },
    definition: {
      en: "Bappenas/GoI Knowledge Management Centre platform receiving curated articles, policy briefs, and booklets from skala.or.id via versioned read-only REST APIs.",
      id: "Pusat Manajemen Pengetahuan yang menerima artikel, ringkasan kebijakan, dan buklet terkurasi dari skala.or.id melalui API REST baca-saja berversi.",
    },
  },
  {
    term: "OPD (Organisasi Penyandang Disabilitas / Perangkat Daerah)",
    letter: "O",
    category: { en: "Governance & Inclusion", id: "Tata Kelola & Inklusi" },
    definition: {
      en: "Refers in Indonesian governance to Regional Apparatus Organisations (Organisasi Perangkat Daerah) and in GEDSI contexts to Organisations of Persons with Disabilities.",
      id: "Merujuk pada Organisasi Perangkat Daerah (pelaksana teknis pemda) serta Organisasi Penyandang Disabilitas sebagai mitra uji aksesibilitas inklusif.",
    },
  },
  {
    term: "SKALA One",
    letter: "S",
    category: { en: "Internal KMS", id: "KMS Internal" },
    definition: {
      en: "SKALA's internal Azure-hosted Knowledge Management System serving as the canonical master source for taxonomy and publication metadata synced one-way to the website.",
      id: "Sistem Manajemen Pengetahuan internal SKALA yang menjadi sumber induk taksonomi dan metadata publikasi melalui sinkronisasi satu arah ke situs web.",
    },
  },
  {
    term: "SPM (Standar Pelayanan Minimal)",
    letter: "S",
    category: { en: "Basic Services", id: "Layanan Dasar" },
    definition: {
      en: "Minimum Service Standards mandated by Indonesian law defining basic education, health, public works, housing, social, and public order services every citizen must receive.",
      id: "Ketentuan mengenai jenis dan mutu Pelayanan Dasar yang merupakan urusan pemerintahan wajib yang berhak diperoleh setiap warga negara secara minimal.",
    },
  },
  {
    term: "UU PDP No. 27/2022",
    letter: "U",
    category: { en: "Data Privacy & Security", id: "Privasi & Keamanan Data" },
    definition: {
      en: "Indonesia's Personal Data Protection Law governing lawful consent, data minimisation, encryption, and breach notification across digital public platforms.",
      id: "Undang-Undang Pelindungan Data Pribadi Indonesia yang mengatur persetujuan sah, minimisasi data, enkripsi, dan pelaporan insiden kebocoran data.",
    },
  },
  {
    term: "WCAG 2.2 Level AA",
    letter: "W",
    category: { en: "Digital Accessibility", id: "Aksesibilitas Digital" },
    definition: {
      en: "Web Content Accessibility Guidelines 2.2 Level AA — international standard ensuring perceivable, operable, understandable, and robust digital access for assistive technologies.",
      id: "Pedoman Aksesibilitas Konten Web 2.2 Tingkat AA — standar internasional untuk memastikan akses digital bagi pengguna teknologi bantu.",
    },
  },
];

export const CAREERS: CareerVacancy[] = [
  {
    id: "car-1",
    title: {
      en: "Sub-National PFM & Fiscal Decentralisation Specialist",
      id: "Spesialis Pengelolaan Keuangan Daerah & Desentralisasi Fiskal",
    },
    location: "Jakarta (with travel to NTT & Maluku)",
    type: { en: "Full-Time • National Specialist", id: "Penuh Waktu • Tenaga Ahli Nasional" },
    deadline: "15 March 2027",
    channel: "DT Global Recruitment Portal (jobs.dt-global.com)",
    summary: {
      en: "Support Bappenas and partner provinces in aligning DAK/DAU fiscal mechanisms with basic service delivery outcomes.",
      id: "Mendampingi Bappenas dan provinsi mitra dalam menyelaraskan mekanisme fiskal DAK/DAU dengan capaian layanan dasar.",
    },
  },
  {
    id: "car-2",
    title: {
      en: "Provincial GEDSI & Civil Society Coordinator — Papua",
      id: "Koordinator GEDSI & Masyarakat Sipil Provinsi — Papua",
    },
    location: "Jayapura, Papua",
    type: { en: "Full-Time • Provincial Team", id: "Penuh Waktu • Tim Provinsi" },
    deadline: "28 March 2027",
    channel: "DT Global Recruitment Portal (jobs.dt-global.com)",
    summary: {
      en: "Facilitate meaningful participation of women's groups, OPDs, and indigenous organisations in provincial Musrenbang cycles.",
      id: "Memfasilitasi partisipasi bermakna kelompok perempuan, OPD, dan organisasi masyarakat adat dalam siklus Musrenbang provinsi.",
    },
  },
];

export const PROCUREMENTS: ProcurementNotice[] = [
  {
    ref: "SKALA-JK/032/RFT/2026",
    title: {
      en: "Provision of Development of the New SKALA Website and Website Maintenance Services (45 Months)",
      id: "Penyediaan Layanan Pengembangan Situs Web SKALA Baru dan Pemeliharaan (45 Bulan)",
    },
    status: "Open",
    deadline: "22 November 2026, 17:00 WIB",
    oneDriveNotice: {
      en: "Tender documents & addenda are hosted on DT Global's official OneDrive repository and mirrored via skala.or.id/en/procurement.",
      id: "Dokumen tender & adendum disimpan di repositori resmi OneDrive DT Global dan ditautkan melalui skala.or.id/id/pengadaan.",
    },
  },
  {
    ref: "SKALA-JK/041/RFP/2027",
    title: {
      en: "Inclusive WASH Accessibility Audit Study across NTT & NTB Primary Health Centres",
      id: "Studi Audit Aksesibilitas WASH Inklusif pada Puskesmas di NTT & NTB",
    },
    status: "Upcoming",
    deadline: "10 April 2027, 17:00 WIB",
    oneDriveNotice: {
      en: "Request for Proposals package will be published via DT Global OneDrive & SKALA Procurement Hub.",
      id: "Paket Permintaan Proposal akan diterbitkan melalui OneDrive DT Global & Pusat Pengadaan SKALA.",
    },
  },
];
