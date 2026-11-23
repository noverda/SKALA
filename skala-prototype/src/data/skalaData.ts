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
  sourceUrl: BilingualText;
  coverImage: {
    en: string;
    id: string;
  };
  coverAlt: BilingualText;
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
  translationStatus: "ID & EN Synced" | "EN & ID Verified";
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
  image: string;
  imageAlt: BilingualText;
  sourceUrl: BilingualText;
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

export const PARTNER_LOGOS = [
  {
    name: "Australian Aid",
    src: "/images/logo-australian-aid.png",
    alt: "Australian Government — Australian Aid",
  },
  {
    name: "Kementerian PPN / Bappenas",
    src: "/images/logo-bappenas.png",
    alt: "Kementerian PPN / Bappenas Republik Indonesia",
  },
  {
    name: "Kementerian Dalam Negeri",
    src: "/images/logo-kemendagri.png",
    alt: "Kementerian Dalam Negeri Republik Indonesia",
  },
  {
    name: "Kementerian Keuangan",
    src: "/images/logo-kemenkeu.png",
    alt: "Kementerian Keuangan Republik Indonesia",
  },
];

export const PUBLICATIONS: PublicationItem[] = [
  {
    id: "pub-1",
    skalaOneId: "SK1-PB-2026-112",
    slug: "korbinwas-strategic-lever-minimum-service-standards",
    sourceUrl: {
      en: "https://skala.or.id/en/publications/korbinwas-a-strategic-lever-to-strengthen-minimum-service-standards-lessons-from-north-kalimantan-east-nusa-tenggara-and-papua-barat-daya/",
      id: "https://skala.or.id/en/publications/korbinwas-a-strategic-lever-to-strengthen-minimum-service-standards-lessons-from-north-kalimantan-east-nusa-tenggara-and-papua-barat-daya/",
    },
    coverImage: {
      en: "/images/pub-korbinwas.jpg",
      id: "/images/pub-korbinwas.jpg",
    },
    coverAlt: {
      en: "Cover of SKALA knowledge brief on Korbinwas strengthening Minimum Service Standards",
      id: "Sampul ringkasan pengetahuan SKALA tentang Korbinwas untuk memperkuat Standar Pelayanan Minimal",
    },
    type: "policy-brief",
    pillar: "pillar-1",
    province: "National",
    provinceLabel: {
      en: "National • Kaltara, NTT & Papua Barat Daya",
      id: "Nasional • Kaltara, NTT & Papua Barat Daya",
    },
    year: 2026,
    publishedDate: "2026-09-24",
    title: {
      en: "Korbinwas: A Strategic Lever to Strengthen Minimum Service Standards (SPM)",
      id: "Korbinwas: Pengungkit Strategis untuk Memperkuat Standar Pelayanan Minimal (SPM)",
    },
    summary: {
      en: "Captures lessons from North Kalimantan, East Nusa Tenggara, and Papua Barat Daya on using Kemendagri's Korbinwas coordination mechanism as a strategic lever for Minimum Service Standards delivery.",
      id: "Merangkum pembelajaran dari Kalimantan Utara, Nusa Tenggara Timur, dan Papua Barat Daya dalam mengoptimalkan Korbinwas sebagai pengungkit strategis pemenuhan Standar Pelayanan Minimal (SPM).",
    },
    keyFindings: {
      en: [
        "Shifts Korbinwas from routine administrative supervision toward outcome-driven SPM bottleneck resolution.",
        "Harmonises provincial governor-representative oversight with district APBD planning and budgeting.",
        "Documents scalable SOPs across North Kalimantan, NTT, and Papua Barat Daya.",
      ],
      id: [
        "Menggeser fungsi Korbinwas dari pengawasan administratif rutin menjadi penyelesaian hambatan capaian SPM berbasis hasil.",
        "Menyelaraskan pembinaan gubernur sebagai wakil pemerintah pusat dengan perencanaan dan penganggaran APBD kabupaten/kota.",
        "Mendokumentasikan praktik baik lintas Kalimantan Utara, NTT, dan Papua Barat Daya.",
      ],
    },
    fileSize: "2.1 MB",
    pages: 16,
    downloads: 1482,
    translationStatus: "ID & EN Synced",
    tags: ["Korbinwas", "SPM", "Kemendagri", "Kaltara", "NTT"],
    chartData: {
      title: {
        en: "Local Tax Ratio & Fiscal Autonomy Benchmark (%)",
        id: "Tolok Ukur Rasio Pajak Daerah & Kemandirian Fiskal (%)",
      },
      unit: "%",
      points: [
        { label: "2023", baseline: 1.18, current: 1.24 },
        { label: "2024", baseline: 1.22, current: 1.31 },
        { label: "2025", baseline: 1.12, current: 1.35 },
        { label: "2026", baseline: 1.15, current: 1.44 },
      ],
    },
  },
  {
    id: "pub-2",
    skalaOneId: "SK1-PB-2026-109",
    slug: "selected-policy-briefs-inclusive-basic-services-inaki",
    sourceUrl: {
      en: "https://skala.or.id/publikasi/kumpulan-dokumen-risalah-kebijakan-policy-brief-terpilih-tentang-layanan-dasar-yang-inklusif/",
      id: "https://skala.or.id/publikasi/kumpulan-dokumen-risalah-kebijakan-policy-brief-terpilih-tentang-layanan-dasar-yang-inklusif/",
    },
    coverImage: {
      en: "/images/pub-inaki-brief.jpg",
      id: "/images/pub-inaki-brief.jpg",
    },
    coverAlt: {
      en: "Cover of Selected Policy Briefs on Inclusive Basic Services (INAKI)",
      id: "Sampul Kumpulan Dokumen Risalah Kebijakan Terpilih tentang Layanan Dasar yang Inklusif",
    },
    type: "policy-brief",
    pillar: "pillar-3",
    province: "National",
    provinceLabel: {
      en: "National • Ministries & Regional Analysts",
      id: "Nasional • Kementerian, Lembaga & Daerah",
    },
    year: 2026,
    publishedDate: "2026-11-23",
    title: {
      en: "Selected Policy Briefs on Inclusive Basic Services (National & Sub-National Analysts)",
      id: "Kumpulan Dokumen Risalah Kebijakan (Policy Brief) Terpilih tentang Layanan Dasar yang Inklusif",
    },
    summary: {
      en: "Compendium of 30 selected policy briefs authored by policy analysts from ministries, national agencies, and regional governments through the Inclusive Basic Services Workshop.",
      id: "Kumpulan ini memuat 30 risalah kebijakan (policy brief) terpilih yang ditulis para analis kebijakan dari berbagai kementerian, lembaga, dan daerah dalam Lokakarya Layanan Dasar Inklusif.",
    },
    keyFindings: {
      en: [
        "Synthesises 30 evidence-backed briefs linking social protection, health, education, and disability inclusion.",
        "Demonstrates cross-ministry policy analyst collaboration supported by Bappenas and SKALA.",
      ],
      id: [
        "Menghimpun 30 risalah kebijakan berbasis bukti yang menghubungkan perlindungan sosial, kesehatan, pendidikan, dan inklusi disabilitas.",
        "Menunjukkan kolaborasi analis kebijakan lintas kementerian/lembaga bersama Bappenas dan SKALA.",
      ],
    },
    fileSize: "3.4 MB",
    pages: 68,
    downloads: 1920,
    translationStatus: "ID & EN Synced",
    tags: ["Policy Brief", "GEDSI", "Bappenas", "Inclusive Services"],
  },
  {
    id: "pub-3",
    skalaOneId: "SK1-PB-2026-098",
    slug: "institutionalising-meaningful-participation-regional-planning",
    sourceUrl: {
      en: "https://skala.or.id/en/publications/institutionalising-meaningful-participation-in-regional-development-planning/",
      id: "https://skala.or.id/en/publications/institutionalising-meaningful-participation-in-regional-development-planning/",
    },
    coverImage: {
      en: "/images/pub-musrenbang.jpg",
      id: "/images/pub-musrenbang.jpg",
    },
    coverAlt: {
      en: "Cover of Policy Brief on Institutionalising Meaningful Participation in Regional Development Planning",
      id: "Sampul Risalah Kebijakan Pelembagaan Partisipasi Bermakna dalam Perencanaan Pembangunan Daerah",
    },
    type: "policy-brief",
    pillar: "pillar-3",
    province: "NTT",
    provinceLabel: {
      en: "East Nusa Tenggara (NTT) & Partner Provinces",
      id: "Nusa Tenggara Timur (NTT) & Provinsi Mitra",
    },
    year: 2026,
    publishedDate: "2026-09-08",
    title: {
      en: "Institutionalising Meaningful Participation in Regional Development Planning (Musrenbang)",
      id: "Melembagakan Partisipasi Bermakna dalam Perencanaan Pembangunan Daerah (Musrenbang)",
    },
    summary: {
      en: "How Thematic Musrenbang has emerged as a vital space ensuring that the voices of women, persons with disabilities, and vulnerable groups are genuinely reflected in regional budgets.",
      id: "Bagaimana Musrenbang Tematik menjadi ruang strategis memastikan suara perempuan, penyandang disabilitas, dan kelompok rentan benar-benar terakomodasi dalam APBD daerah.",
    },
    keyFindings: {
      en: [
        "Thematic Musrenbang forums provide structured entry points for OPDs and women's organisations before RKPD finalisation.",
        "Budget-tracking dashboards verify whether community proposals convert into funded regional programs.",
      ],
      id: [
        "Forum Musrenbang Tematik membuka jalur terstruktur bagi OPD dan organisasi perempuan sebelum penetapan RKPD.",
        "Pemantauan anggaran memastikan usulan kelompok rentan terwujud menjadi program daerah yang didanai.",
      ],
    },
    fileSize: "1.9 MB",
    pages: 14,
    downloads: 1345,
    translationStatus: "ID & EN Synced",
    tags: ["GEDSI", "Musrenbang", "OPD", "Pillar 3"],
  },
  {
    id: "pub-4",
    skalaOneId: "SK1-BK-2026-114",
    slug: "sepakat-better-targeted-stories-data-use",
    sourceUrl: {
      en: "https://skala.or.id/en/publications/sepakat-for-better-targeted-stories-of-data-use-from-across-the-regions/",
      id: "https://skala.or.id/publikasi/sepakat-untuk-perencanaan-yang-lebih-tepat-sasaran-cerita-pemanfaatan-data-dari-berbagai-daerah/",
    },
    coverImage: {
      en: "/images/pub-sepakat-en.jpg",
      id: "/images/pub-sepakat-id.jpg",
    },
    coverAlt: {
      en: "Cover of SEPAKAT for Better-Targeted: Stories of Data Use from Across the Regions",
      id: "Sampul buklet SEPAKAT untuk Perencanaan yang Lebih Tepat Sasaran",
    },
    type: "booklet-infographic",
    pillar: "pillar-2",
    province: "NTB",
    provinceLabel: {
      en: "National & Partner Provinces (SEPAKAT / DTSEN)",
      id: "Nasional & Provinsi Mitra (SEPAKAT / DTSEN)",
    },
    year: 2026,
    publishedDate: "2026-11-17",
    title: {
      en: "SEPAKAT for Better-Targeted: Stories of Data Use from Across the Regions",
      id: "SEPAKAT untuk Perencanaan yang Lebih Tepat Sasaran: Cerita Pemanfaatan Data dari Berbagai Daerah",
    },
    summary: {
      en: "Brings together stories of how SEPAKAT is used across Indonesia to turn socioeconomic data from the National Single Socio-Economic Data (DTSEN) into targeted regional basic service planning.",
      id: "Merangkum cerita pemanfaatan SEPAKAT di berbagai daerah, menunjukkan bagaimana data sosial ekonomi dari Data Tunggal Sosial dan Ekonomi Nasional (DTSEN) mendorong perencanaan layanan dasar yang tepat sasaran.",
    },
    keyFindings: {
      en: [
        "Regional Bappeda planners use SEPAKAT analytics to pinpoint underserved villages for stunting, sanitation, and social protection.",
        "Links national DTSEN socioeconomic registries directly with district poverty reduction action plans.",
      ],
      id: [
        "Perencana Bappeda memanfaatkan analitik SEPAKAT untuk memetakan desa prioritas penanganan stunting, sanitasi, dan perlindungan sosial.",
        "Menghubungkan data DTSEN nasional langsung dengan rencana aksi penanggulangan kemiskinan daerah.",
      ],
    },
    fileSize: "2.8 MB",
    pages: 36,
    downloads: 2105,
    translationStatus: "ID & EN Synced",
    tags: ["SEPAKAT", "DTSEN", "Data-Driven Planning", "Bappenas"],
    chartData: {
      title: {
        en: "Partner Province Basic Service Readiness Index (2023 vs 2026)",
        id: "Indeks Kesiapan Layanan Dasar Provinsi Mitra (2023 vs 2026)",
      },
      unit: "pts",
      points: [
        { label: "Aceh", baseline: 64, current: 78 },
        { label: "NTB", baseline: 62, current: 79 },
        { label: "NTT", baseline: 54, current: 71 },
        { label: "Maluku", baseline: 57, current: 73 },
        { label: "Kaltara", baseline: 66, current: 82 },
        { label: "Gorontalo", baseline: 61, current: 76 },
      ],
    },
  },
  {
    id: "pub-5",
    skalaOneId: "SK1-FS-2026-107",
    slug: "navigating-waves-reaching-community-maluku",
    sourceUrl: {
      en: "https://skala.or.id/en/publications/navigating-the-waves-reaching-the-community-collaboration-strengthens-basic-services-in-maluku/",
      id: "https://skala.or.id/publikasi/menembus-ombak-menjangkau-masyarakat-kolaborasi-menguatkan-layanan-dasar-di-kepulauan-maluku/",
    },
    coverImage: {
      en: "/images/pub-maluku-en.jpg",
      id: "/images/pub-maluku-en.jpg",
    },
    coverAlt: {
      en: "Cover of Navigating The Waves, Reaching The Community: Maluku Basic Services Booklet",
      id: "Sampul buklet Menembus Ombak, Menjangkau Masyarakat: Layanan Dasar Kepulauan Maluku",
    },
    type: "field-story",
    pillar: "pillar-2",
    province: "Maluku",
    provinceLabel: { en: "Maluku Islands", id: "Kepulauan Maluku" },
    year: 2026,
    publishedDate: "2026-11-04",
    title: {
      en: "Navigating The Waves, Reaching The Community: Collaboration Strengthens Basic Services in Maluku",
      id: "Menembus Ombak, Menjangkau Masyarakat: Kolaborasi Menguatkan Layanan Dasar di Kepulauan Maluku",
    },
    summary: {
      en: "As an archipelagic province, Maluku faces uneven access to basic services due to inter-island isolation. This booklet documents collaborative Gugus Pulau solutions reaching remote island communities.",
      id: "Sebagai provinsi kepulauan, Maluku menghadapi tantangan akses layanan dasar akibat keterpisahan antarpulau. Buklet ini mendokumentasikan kolaborasi klaster Gugus Pulau menjangkau masyarakat terpencil.",
    },
    keyFindings: {
      en: [
        "Gugus Pulau island-cluster planning bridges geographic barriers in health, education, and civil registration.",
        "Supports Kemendagri and Bappenas dialogue on archipelagic fiscal transfer formulas.",
      ],
      id: [
        "Perencanaan berbasis klaster Gugus Pulau menjembatani kendala geografis layanan kesehatan, pendidikan, dan kependudukan.",
        "Mendukung dialog Kemendagri dan Bappenas terkait formulasi transfer fiskal daerah kepulauan.",
      ],
    },
    fileSize: "3.1 MB",
    pages: 28,
    downloads: 1129,
    translationStatus: "ID & EN Synced",
    tags: ["Maluku", "Archipelago", "Field Story", "SPM"],
  },
  {
    id: "pub-6",
    skalaOneId: "SK1-RD-2026-105",
    slug: "pera-inclusive-public-expenditure-revenue-analysis-kaltara",
    sourceUrl: {
      en: "https://skala.or.id/publikasi/kumpulan-naskah-risalah-kebijakan-policy-brief-terpilih-tentang-analisis-belanja-dan-pendapatan-publik-pera-yang-inklusif-provinsi-kalimantan-utara/",
      id: "https://skala.or.id/publikasi/kumpulan-naskah-risalah-kebijakan-policy-brief-terpilih-tentang-analisis-belanja-dan-pendapatan-publik-pera-yang-inklusif-provinsi-kalimantan-utara/",
    },
    coverImage: {
      en: "/images/pub-pera-kaltara.jpg",
      id: "/images/pub-pera-kaltara.jpg",
    },
    coverAlt: {
      en: "Cover of Inclusive PERA Policy Briefs for North Kalimantan Province",
      id: "Sampul Kumpulan Risalah Kebijakan PERA Inklusif Provinsi Kalimantan Utara",
    },
    type: "report-data",
    pillar: "pillar-2",
    province: "Maluku",
    provinceLabel: {
      en: "North Kalimantan (Kaltara)",
      id: "Kalimantan Utara (Kaltara)",
    },
    year: 2026,
    publishedDate: "2026-11-12",
    title: {
      en: "Inclusive Public Expenditure and Revenue Analysis (PERA): North Kalimantan Policy Briefs",
      id: "Analisis Belanja dan Pendapatan Publik (PERA) yang Inklusif: Provinsi Kalimantan Utara",
    },
    summary: {
      en: "Selected regional fiscal policy briefs examining inclusive public expenditure quality, own-source revenue mobilisation (PAD), and border-district basic service financing in North Kalimantan.",
      id: "Kumpulan naskah risalah kebijakan fiskal daerah yang mengkaji kualitas belanja publik inklusif, optimalisasi PAD, serta pembiayaan layanan dasar wilayah perbatasan di Kalimantan Utara.",
    },
    keyFindings: {
      en: [
        "Identifies fiscal space for targeted primary healthcare and education in border sub-districts.",
        "Pairs revenue reforms such as Watercraft Motor Vehicle Tax (PKAA) with inclusive APBD allocation.",
      ],
      id: [
        "Mengidentifikasi ruang fiskal bagi layanan kesehatan dan pendidikan dasar di kecamatan perbatasan.",
        "Memadukan inovasi pajak daerah (seperti PKAA) dengan alokasi APBD yang inklusif.",
      ],
    },
    fileSize: "2.6 MB",
    pages: 32,
    downloads: 940,
    translationStatus: "ID & EN Synced",
    tags: ["PERA", "Kaltara", "PFM", "Local Revenue"],
  },
  {
    id: "pub-7",
    skalaOneId: "SK1-PP-2024-042",
    slug: "at-a-glance-skala-in-maluku",
    sourceUrl: {
      en: "https://skala.or.id/en/publications/provincial-profiles/at-a-glance-skala-in-maluku/",
      id: "https://skala.or.id/en/publications/provincial-profiles/at-a-glance-skala-in-maluku/",
    },
    coverImage: {
      en: "/images/pub-maluku-profile.png",
      id: "/images/pub-maluku-profile.png",
    },
    coverAlt: {
      en: "At a Glance: SKALA in Maluku Provincial Profile thumbnail",
      id: "Gambar mini Profil Provinsi Sekilas SKALA di Maluku",
    },
    type: "provincial-profile",
    pillar: "pillar-2",
    province: "Maluku",
    provinceLabel: { en: "Maluku Provincial Profile", id: "Profil Provinsi Maluku" },
    year: 2025,
    publishedDate: "2024-12-12",
    title: {
      en: "At a Glance: SKALA in Maluku — Archipelagic Governance & Service Delivery",
      id: "Sekilas SKALA di Maluku — Tata Kelola Kepulauan & Layanan Dasar",
    },
    summary: {
      en: "Official provincial profile detailing Maluku's demographic baseline, fiscal transfer dynamics, and collaborative SKALA workplans across Ambon and outer island regencies.",
      id: "Profil resmi provinsi yang memuat data dasar demografi Maluku, dinamika transfer fiskal, dan rencana kerja kolaboratif SKALA di Ambon serta kabupaten kepulauan.",
    },
    keyFindings: {
      en: [
        "Maps SPM baselines across education, health, and civil registration in central and southern Maluku.",
        "Highlights joint governance priorities with Maluku Provincial Bappeda.",
      ],
      id: [
        "Memetakan capaian awal SPM pendidikan, kesehatan, dan kependudukan di wilayah Maluku tengah dan selatan.",
        "Menyoroti prioritas tata kelola bersama Bappeda Provinsi Maluku.",
      ],
    },
    fileSize: "1.7 MB",
    pages: 8,
    downloads: 874,
    translationStatus: "ID & EN Synced",
    tags: ["Provincial Profile", "Maluku", "SPM"],
  },
  {
    id: "pub-8",
    skalaOneId: "SK1-AV-2024-019",
    slug: "breaking-boundaries-identity-disability-changing-stereotypes",
    sourceUrl: {
      en: "https://skala.or.id/en/podcast-en/breaking-boundaries-perspectives-on-identity-disability-and-changing-stereotypes/",
      id: "https://skala.or.id/en/podcast-en/breaking-boundaries-perspectives-on-identity-disability-and-changing-stereotypes/",
    },
    coverImage: {
      en: "/images/pub-breaking-barriers.png",
      id: "/images/pub-breaking-barriers.png",
    },
    coverAlt: {
      en: "Breaking Boundaries Podcast cover art on disability inclusion and changing stereotypes",
      id: "Sampul Podcast Breaking Boundaries tentang inklusi disabilitas dan perubahan stereotip",
    },
    type: "podcast-video",
    pillar: "pillar-3",
    province: "National",
    provinceLabel: { en: "National • SKALA Podcast", id: "Nasional • Podcast SKALA" },
    year: 2025,
    publishedDate: "2024-12-12",
    title: {
      en: "Breaking Boundaries: Perspectives on Identity, Disability, and Changing Stereotypes",
      id: "Menembus Batas: Perspektif tentang Identitas, Disabilitas, dan Mengubah Stereotip",
    },
    summary: {
      en: "Produced for the International Day of Persons with Disabilities, this podcast amplifies lived experiences, advocacy leadership, and universal access across Indonesian public services.",
      id: "Diproduksi memperingati Hari Disabilitas Internasional, podcast ini mengangkat pengalaman nyata, kepemimpinan advokasi, dan akses universal dalam layanan publik Indonesia.",
    },
    keyFindings: {
      en: [
        "Organisations of Persons with Disabilities (OPDs) are indispensable partners in testing physical and digital public services.",
        "WCAG 2.2 AA compliance, captions, and full transcripts make knowledge products genuinely inclusive.",
      ],
      id: [
        "Organisasi Penyandang Disabilitas (OPD) adalah mitra utama dalam menguji layanan publik fisik maupun digital.",
        "Kepatuhan WCAG 2.2 AA, takarir, dan transkrip penuh menjadikan produk pengetahuan benar-benar inklusif.",
      ],
    },
    mediaDuration: "22:40",
    downloads: 785,
    translationStatus: "ID & EN Synced",
    tags: ["Podcast", "Disability Inclusion", "OPD", "WCAG 2.2 AA"],
    transcript: {
      en: [
        {
          time: "00:15",
          speaker: "Host (SKALA GEDSI Team)",
          text: "Welcome to Breaking Boundaries. Today we speak with disability advocates on transforming basic services from charity models into rights-based universal design.",
        },
        {
          time: "04:10",
          speaker: "OPD Advocate",
          text: "When local governments invite us into Musrenbang and digital usability testing early, accessibility becomes built-in rather than an expensive afterthought.",
        },
        {
          time: "11:35",
          speaker: "Regional Planner",
          text: "Every SKALA podcast, data dashboard, and policy brief pairs visual storytelling with screen-reader friendly structure and bilingual transcripts.",
        },
      ],
      id: [
        {
          time: "00:15",
          speaker: "Moderator (Tim GEDSI SKALA)",
          text: "Selamat datang di Menembus Batas. Hari ini kita berbincang dengan pegiat disabilitas tentang transformasi layanan dasar berbasis desain universal.",
        },
        {
          time: "04:10",
          speaker: "Perwakilan OPD",
          text: "Saat pemerintah daerah melibatkan kami sejak awal dalam Musrenbang dan uji coba digital, aksesibilitas menjadi bagian utama sejak awal.",
        },
        {
          time: "11:35",
          speaker: "Perencana Daerah",
          text: "Setiap podcast, dasbor data, dan risalah kebijakan SKALA memadukan visualisasi dengan struktur ramah pembaca layar serta transkrip dwibahasa.",
        },
      ],
    },
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
      en: ["Special Autonomy Fund (Otsus) Governance", "SEPAKAT Poverty & Data Use", "Inclusive Village Planning"],
      id: ["Tata Kelola Dana Otsus", "Pemanfaatan Data SEPAKAT", "Perencanaan Desa Inklusif"],
    },
    highlight: {
      en: "Districts across Aceh leverage SEPAKAT socioeconomic data and Otsus governance reforms to strengthen basic services.",
      id: "Kabupaten/kota di Aceh memanfaatkan data SEPAKAT dan tata kelola Otsus untuk memperkuat layanan dasar.",
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
    basicServiceIndex: 82,
    healthCoverage: 83,
    gedsiParticipation: 75,
    publicationsCount: 16,
    focusAreas: {
      en: ["Inclusive PERA Fiscal Analysis", "Watercraft Motor Vehicle Tax (PKAA)", "Korbinwas & Border SPM"],
      id: ["Analisis Fiskal PERA Inklusif", "Inovasi Pajak PKAA", "Korbinwas & SPM Perbatasan"],
    },
    highlight: {
      en: "North Kalimantan pioneers inclusive PERA briefs and Watercraft Motor Vehicle Tax (PKAA) to finance border basic services.",
      id: "Kalimantan Utara memelopori risalah kebijakan PERA inklusif dan pajak PKAA guna membiayai layanan dasar perbatasan.",
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
      en: ["Social Protection Data Integration", "Thematic Musrenbang Inclusion", "SPM Acceleration"],
      id: ["Integrasi Data Perlindungan Sosial", "Inklusi Musrenbang Tematik", "Percepatan SPM"],
    },
    highlight: {
      en: "Collaborative regional data governance aligns social protection registries with provincial basic service targets.",
      id: "Kolaborasi tata kelola data daerah menyelaraskan basis data perlindungan sosial dengan target layanan dasar provinsi.",
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
    basicServiceIndex: 79,
    healthCoverage: 82,
    gedsiParticipation: 82,
    publicationsCount: 22,
    focusAreas: {
      en: ["NTB Executive Dashboard", "Data-Driven APBD Planning", "GEDSI Service Accessibility"],
      id: ["Dashboard Eksekutif NTB", "Perencanaan APBD Berbasis Data", "Aksesibilitas Layanan GEDSI"],
    },
    highlight: {
      en: "NTB launched an Executive Dashboard in Mataram to strengthen real-time, data-driven development planning.",
      id: "NTB meluncurkan Dashboard Eksekutif di Mataram untuk memperkuat perencanaan pembangunan berbasis data.",
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
      en: ["Korbinwas SPM Coordination", "OPD Meaningful Participation", "Rural WASH & Health"],
      id: ["Koordinasi SPM via Korbinwas", "Partisipasi Bermakna OPD", "Sanitasi & Kesehatan Pedesaan"],
    },
    highlight: {
      en: "NTT institutionalises Korbinwas SPM oversight and active participation of Organisations of Persons with Disabilities.",
      id: "NTT melembagakan pembinaan SPM melalui Korbinwas serta partisipasi aktif Organisasi Penyandang Disabilitas.",
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
      en: ["Archipelagic Gugus Pulau Delivery", "Inter-Island Basic Service Access", "Fiscal Decentralisation"],
      id: ["Layanan Gugus Pulau Kepulauan", "Akses Layanan Antar-Pulau", "Desentralisasi Fiskal"],
    },
    highlight: {
      en: "Collaborative Gugus Pulau solutions overcome inter-island isolation across Maluku's archipelago.",
      id: "Kolaborasi klaster Gugus Pulau mengatasi keterisolasian geografis layanan dasar di kepulauan Maluku.",
    },
  },
  {
    id: "papua",
    code: "ID-PA",
    name: { en: "Tanah Papua (6 Provinces)", id: "Tanah Papua (6 Provinsi)" },
    region: { en: "Papua", id: "Papua" },
    x: 86,
    y: 53,
    population: "5.65M",
    basicServiceIndex: 70,
    healthCoverage: 73,
    gedsiParticipation: 78,
    publicationsCount: 24,
    focusAreas: {
      en: ["ORISUN Indigenous Elderly Social Assistance", "Cenderawasih Planning Portal", "Papua Barat Daya & Papua Selatan Data"],
      id: ["Bansos ORISUN Lansia OAP", "Portal Perencanaan Cenderawasih", "Data Papua Barat Daya & Selatan"],
    },
    highlight: {
      en: "Raja Ampat disburses ORISUN assistance to 1,738 Indigenous Papuan elders, while Papua Barat Daya launches the Cenderawasih Portal.",
      id: "Raja Ampat menyalurkan bansos ORISUN kepada 1.738 lansia OAP, dan Papua Barat Daya meluncurkan Portal Cenderawasih.",
    },
  },
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: "news-1",
    date: "2026-11-19",
    category: { en: "Activity Information", id: "Informasi Kegiatan" },
    province: "Papua Barat Daya",
    image: "/images/news-raja-ampat.jpg",
    imageAlt: {
      en: "Disbursement of ORISUN social assistance for older Indigenous Papuans in Raja Ampat",
      id: "Penyaluran bantuan sosial ORISUN bagi lansia Orang Asli Papua di Kabupaten Raja Ampat",
    },
    sourceUrl: {
      en: "https://skala.or.id/en/activity-information/raja-ampat-begins-disbursing-orisun-social-assistance-to-older-indigenous-papuans/",
      id: "https://skala.or.id/informasi-kegiatan/pemkab-raja-ampat-mulai-menyalurkan-bantuan-sosial-orisun-bagi-lansia-orang-asli-papua/",
    },
    title: {
      en: "Raja Ampat Begins Disbursing ORISUN Social Assistance to Older Indigenous Papuans",
      id: "Pemkab Raja Ampat Mulai Menyalurkan Bantuan Sosial ORISUN bagi Lansia Orang Asli Papua",
    },
    excerpt: {
      en: "The Raja Ampat Regency Government has begun disbursing ORISUN social assistance to 1,738 Indigenous Papuans aged 65 and over, providing IDR 250,000 per month.",
      id: "Pemerintah Kabupaten Raja Ampat mulai menyalurkan bantuan sosial ORISUN kepada 1.738 lansia Orang Asli Papua berusia 65 tahun ke atas sebesar Rp250.000 per bulan.",
    },
    readTime: "4 min",
  },
  {
    id: "news-2",
    date: "2026-11-13",
    category: { en: "Activity Information", id: "Informasi Kegiatan" },
    province: "National",
    image: "/images/news-transition.jpg",
    imageAlt: {
      en: "Kemendagri and SKALA policy discussion on maintaining basic services during leadership transitions",
      id: "Diskusi Kemendagri dan SKALA tentang menjaga layanan dasar saat transisi kepemimpinan daerah",
    },
    sourceUrl: {
      en: "https://skala.or.id/en/activity-information/keeping-basic-services-running-during-regional-leadership-transitions/",
      id: "https://skala.or.id/informasi-kegiatan/menjaga-layanan-dasar-di-tengah-transisi-kepemimpinan-daerah/",
    },
    title: {
      en: "Keeping Basic Services Running during Regional Leadership Transitions",
      id: "Menjaga Layanan Dasar di Tengah Transisi Kepemimpinan Daerah",
    },
    excerpt: {
      en: "A joint Kemendagri–SKALA learning study documents how regional governments protect education, healthcare, and civil registration continuity during executive transitions.",
      id: "Studi pembelajaran Kemendagri bersama SKALA mendokumentasikan cara pemda menjaga kesinambungan layanan pendidikan, kesehatan, dan adminduk saat pergantian kepala daerah.",
    },
    readTime: "5 min",
  },
  {
    id: "news-3",
    date: "2026-11-08",
    category: { en: "Data & Governance", id: "Data & Tata Kelola" },
    province: "NTB",
    image: "/images/news-ntb-dashboard.jpg",
    imageAlt: {
      en: "Launch of the NTB Executive Dashboard in Mataram for data-driven development",
      id: "Peluncuran Dashboard Eksekutif NTB di Mataram untuk pembangunan berbasis data",
    },
    sourceUrl: {
      en: "https://skala.or.id/informasi-kegiatan/ntb-luncurkan-dashboard-eksekutif-untuk-memperkuat-pembangunan-berbasis-data/",
      id: "https://skala.or.id/informasi-kegiatan/ntb-luncurkan-dashboard-eksekutif-untuk-memperkuat-pembangunan-berbasis-data/",
    },
    title: {
      en: "NTB Launches Executive Dashboard to Strengthen Data-Driven Development",
      id: "NTB Luncurkan Dashboard Eksekutif untuk Memperkuat Pembangunan Berbasis Data",
    },
    excerpt: {
      en: "Launched in Mataram, the NTB Executive Dashboard integrates cross-sector socioeconomic and SPM indicators to support faster provincial decision-making.",
      id: "Diluncurkan di Mataram, Dashboard Eksekutif NTB mengintegrasikan indikator sosial ekonomi dan SPM lintas sektor guna mempercepat pengambilan keputusan provinsi.",
    },
    readTime: "4 min",
  },
  {
    id: "news-4",
    date: "2026-11-06",
    category: { en: "Public Participation", id: "Partisipasi Publik" },
    province: "National",
    image: "/images/news-sekar.jpg",
    imageAlt: {
      en: "Launch of SEKAR Inklusif Learning Management System by Bappenas, FITRA, and SKALA",
      id: "Peluncuran Sistem Manajemen Pembelajaran SEKAR Inklusif oleh Bappenas, FITRA, dan SKALA",
    },
    sourceUrl: {
      en: "https://skala.or.id/en/activity-information/sekar-inklusif-a-learning-management-system-to-strengthen-public-participation-in-development/",
      id: "https://skala.or.id/informasi-kegiatan/sekar-inklusif-sistem-manajemen-pembelajaran-untuk-memperkuat-partisipasi-masyarakat-dalam-proses-pembangunan/",
    },
    title: {
      en: "SEKAR Inklusif: A Learning Management System to Strengthen Public Participation",
      id: "SEKAR Inklusif: Sistem Manajemen Pembelajaran untuk Memperkuat Partisipasi Masyarakat",
    },
    excerpt: {
      en: "Bappenas, FITRA, and SKALA launched SEKAR Inklusif, an online learning platform expanding meaningful citizen, women, and OPD participation in development.",
      id: "Kementerian PPN/Bappenas, FITRA, dan SKALA meluncurkan SEKAR Inklusif, platform pembelajaran daring untuk memperkuat partisipasi bermakna warga, perempuan, dan OPD.",
    },
    readTime: "3 min",
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
    term: "Bappenas (Kementerian PPN/Bappenas)",
    letter: "B",
    category: { en: "National Governance", id: "Tata Kelola Nasional" },
    definition: {
      en: "Ministry of National Development Planning, SKALA's lead Indonesian Government counterpart alongside Kemendagri and Kemenkeu.",
      id: "Kementerian Perencanaan Pembangunan Nasional, mitra utama Pemerintah Indonesia untuk SKALA bersama Kemendagri dan Kemenkeu.",
    },
  },
  {
    term: "DTSEN & SEPAKAT",
    letter: "D",
    category: { en: "Socioeconomic Data", id: "Data Sosial Ekonomi" },
    definition: {
      en: "National Single Socio-Economic Data (DTSEN) analysed through Bappenas' SEPAKAT platform to target basic services and poverty reduction.",
      id: "Data Tunggal Sosial dan Ekonomi Nasional (DTSEN) yang dianalisis melalui platform SEPAKAT Bappenas untuk perencanaan layanan dasar tepat sasaran.",
    },
  },
  {
    term: "GEDSI",
    letter: "G",
    category: { en: "Inclusion • EOPO 3", id: "Inklusi • EOPO 3" },
    definition: {
      en: "Gender Equality, Disability, and Social Inclusion — ensuring women, people with disabilities, and vulnerable groups shape basic service delivery.",
      id: "Kesetaraan Gender, Disabilitas, dan Inklusi Sosial — memastikan perempuan, penyandang disabilitas, dan kelompok rentan berperan dalam layanan dasar.",
    },
  },
  {
    term: "Korbinwas",
    letter: "K",
    category: { en: "Sub-National Oversight", id: "Pembinaan & Pengawasan" },
    definition: {
      en: "Coordination of Guidance and Supervision (Koordinasi Pembinaan dan Pengawasan) led by Kemendagri and governors to improve regional SPM compliance.",
      id: "Koordinasi Pembinaan dan Pengawasan oleh Kemendagri dan gubernur sebagai wakil pemerintah pusat untuk memperkuat pemenuhan SPM daerah.",
    },
  },
  {
    term: "KMC (Knowledge Management Centre)",
    letter: "K",
    category: { en: "Interoperability", id: "Interoperabilitas" },
    definition: {
      en: "Knowledge Management Centre receiving curated articles, policy briefs, and booklets from skala.or.id via versioned read-only REST APIs.",
      id: "Pusat Manajemen Pengetahuan yang menerima artikel, risalah kebijakan, dan buklet dari skala.or.id melalui API REST baca-saja berversi.",
    },
  },
  {
    term: "OPD (Organisasi Penyandang Disabilitas / Perangkat Daerah)",
    letter: "O",
    category: { en: "Governance & Inclusion", id: "Tata Kelola & Inklusi" },
    definition: {
      en: "Refers to Regional Apparatus Organisations (Organisasi Perangkat Daerah) and Organisations of Persons with Disabilities partnering in accessibility audits.",
      id: "Merujuk pada Organisasi Perangkat Daerah (pelaksana teknis pemda) serta Organisasi Penyandang Disabilitas sebagai mitra uji aksesibilitas inklusif.",
    },
  },
  {
    term: "PERA (Public Expenditure and Revenue Analysis)",
    letter: "P",
    category: { en: "Public Finance", id: "Keuangan Publik" },
    definition: {
      en: "Analytical framework assessing how sub-national governments raise revenues and allocate expenditures for equitable basic service outcomes.",
      id: "Kerangka analisis yang menilai cara pemerintah daerah menggali pendapatan dan membelanjakan anggaran untuk pemerataan layanan dasar.",
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
      en: "Minimum Service Standards mandated by Law No. 23/2014 covering education, health, public works, housing, social affairs, and public order.",
      id: "Standar Pelayanan Minimal sesuai UU No. 23/2014 yang mencakup pendidikan, kesehatan, pekerjaan umum, perumahan, sosial, dan trantibumlinmas.",
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
      en: "Web Content Accessibility Guidelines 2.2 Level AA — international standard ensuring perceivable, operable, understandable, and robust digital access.",
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
      en: "Support Bappenas, Kemenkeu, and partner provinces in aligning DAK/DAU fiscal mechanisms and PERA evidence with basic service delivery outcomes.",
      id: "Mendampingi Bappenas, Kemenkeu, dan provinsi mitra dalam menyelaraskan mekanisme fiskal DAK/DAU dan kajian PERA dengan capaian layanan dasar.",
    },
  },
  {
    id: "car-2",
    title: {
      en: "Provincial GEDSI & Civil Society Coordinator — Tanah Papua",
      id: "Koordinator GEDSI & Masyarakat Sipil Provinsi — Tanah Papua",
    },
    location: "Sorong / Jayapura, Tanah Papua",
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
      en: "Tender documents & addenda are stored on DT Global's official OneDrive repository and linked via skala.or.id/en/procurement.",
      id: "Dokumen tender & adendum disimpan di repositori resmi OneDrive DT Global dan ditautkan melalui skala.or.id/peluang/pengadaan.",
    },
  },
  {
    ref: "SKALA-JK/035/RFT/2026",
    title: {
      en: "Provision of Office Support Services for SKALA Provincial Offices (Maluku, NTB, NTT, Kaltara, Aceh, Gorontalo & Papua)",
      id: "Pengadaan Layanan Dukungan Operasional Kantor Provinsi SKALA",
    },
    status: "Evaluated",
    deadline: "18 November 2026, 17:00 WIB",
    oneDriveNotice: {
      en: "Published on skala.or.id Live Procurement Activity with tender pack hosted on DT Global OneDrive.",
      id: "Diterbitkan pada kanal Pengadaan skala.or.id dengan paket dokumen di OneDrive DT Global.",
    },
  },
];
