import { Locale } from "./skalaData";

export const UI_COPY: Record<
  Locale,
  {
    skipLink: string;
    contrastToggle: string;
    contrastActive: string;
    fontDecrease: string;
    fontReset: string;
    fontIncrease: string;
    brandTagline: string;
    nav: {
      about: string;
      ourWork: string;
      publications: string;
      provinces: string;
      news: string;
      glossary: string;
      careers: string;
      procurement: string;
      searchBtn: string;
    };
    hero: {
      eyebrow: string;
      title: string;
      subtitle: string;
      searchPlaceholder: string;
      findBtn: string;
      phaseTitle: string;
      phaseSub: string;
      phaseStats: { label: string; value: string }[];
    };
    repo: {
      heading: string;
      subheading: string;
      viewAll: string;
      filterByFacets: string;
      clearFilters: string;
      typeLabel: string;
      pillarLabel: string;
      provinceLabel: string;
      yearLabel: string;
      allProvinces: string;
      allYears: string;
      types: Record<string, string>;
      pillars: Record<string, string>;
      previewPdf: string;
      downloadPdf: string;
      playEmbed: string;
      readTranscript: string;
      viewDataChart: string;
      resultsCount: string;
      searchLatency: string;
      noResults: string;
    };
    pillarsSection: {
      heading: string;
      subheading: string;
      items: { id: string; badge: string; title: string; desc: string }[];
    };
    provincesSection: {
      heading: string;
      subheading: string;
      mapHint: string;
      basicServiceLabel: string;
      healthLabel: string;
      gedsiLabel: string;
      focusLabel: string;
      filterPubsBtn: string;
    };
    newsSection: {
      heading: string;
      readMore: string;
    };
    glossarySection: {
      heading: string;
      subheading: string;
      searchPlaceholder: string;
    };
    opportunitiesSection: {
      careersTitle: string;
      procurementTitle: string;
      deadlineLabel: string;
      channelLabel: string;
      openOneDrive: string;
      textOnlyNotice: string;
    };
    stayConnected: {
      heading: string;
      subheading: string;
      emailPlaceholder: string;
      namePlaceholder: string;
      consentText: string;
      subscribeBtn: string;
      whatsappBtn: string;
      subscribedMsg: string;
      contactHeading: string;
      messagePlaceholder: string;
      sendContactBtn: string;
      contactSentMsg: string;
    };
    footer: {
      cobranding: string;
      implementedBy: string;
      privacy: string;
      accessibility: string;
      apiRss: string;
      llmsTxt: string;
    };
  }
> = {
  en: {
    skipLink: "Skip to main content",
    contrastToggle: "High Contrast",
    contrastActive: "High Contrast: ON",
    fontDecrease: "Decrease text size",
    fontReset: "Reset text size",
    fontIncrease: "Increase text size",
    brandTagline: "Australia–Indonesia Partnership",
    nav: {
      about: "About",
      ourWork: "Our Work",
      publications: "Publications",
      provinces: "Provinces",
      news: "News & Media",
      glossary: "Glossary",
      careers: "Careers",
      procurement: "Procurement",
      searchBtn: "Search",
    },
    hero: {
      eyebrow: "SKALA PHASE II (2027–2030) • BILINGUAL PUBLIC KNOWLEDGE HUB",
      title: "Synergy and Collaboration for Basic Service Acceleration",
      subtitle:
        "Strengthening national enabling environments, sub-national governance, and GEDSI participation across Indonesia's decentralised system.",
      searchPlaceholder: "Search publications, policy briefs, provinces, glossary...",
      findBtn: "Find",
      phaseTitle: "SKALA PHASE II",
      phaseSub: "2027 – 2030",
      phaseStats: [
        { label: "Strategic Pillars", value: "3 Pillars" },
        { label: "Partner Provinces", value: "7+ Regions" },
        { label: "Accessibility", value: "WCAG 2.2 AA" },
        { label: "Interoperability", value: "SKALA One + KMC" },
      ],
    },
    repo: {
      heading: "Knowledge & Publication Repository",
      subheading: "Synced one-way with SKALA One • Preserves canonical IDs for KMC",
      viewAll: "Reset & View All",
      filterByFacets: "Filter by Facets",
      clearFilters: "Clear all",
      typeLabel: "Document & Media Type",
      pillarLabel: "Pillar / Theme",
      provinceLabel: "Province",
      yearLabel: "Publication Year",
      allProvinces: "All Provinces",
      allYears: "2023 – 2027 (All)",
      types: {
        "policy-brief": "Policy Briefs",
        "field-story": "Field Stories",
        "report-data": "Reports & Data",
        "provincial-profile": "Provincial Profiles",
        "podcast-video": "Podcasts & Videos",
        "booklet-infographic": "Booklets & Infographics",
      },
      pillars: {
        "pillar-1": "National Policy (Pillar 1)",
        "pillar-2": "Sub-National Gov (Pillar 2)",
        "pillar-3": "GEDSI Inclusion (Pillar 3)",
      },
      previewPdf: "Preview PDF",
      downloadPdf: "Download",
      playEmbed: "Play Embed",
      readTranscript: "Read Transcript",
      viewDataChart: "Interactive Chart",
      resultsCount: "resources matched",
      searchLatency: "Meilisearch index • <18ms",
      noResults: "No publications match the selected facets. Clear one or more filters to explore the archive.",
    },
    pillarsSection: {
      heading: "Three Strategic Pillars of SKALA Phase II",
      subheading:
        "Building on 17 years of Australia–Indonesia decentralisation partnership to narrow regional basic service disparities.",
      items: [
        {
          id: "pillar-1",
          badge: "PILLAR 1",
          title: "Stronger National Enabling Environment",
          desc: "Aligning central fiscal transfers (DAK/DAU), regulatory frameworks, and Satu Data standards with Bappenas and line ministries.",
        },
        {
          id: "pillar-2",
          badge: "PILLAR 2",
          title: "Better Sub-National Governance",
          desc: "Strengthening provincial and district public financial management (PFM), planning, and Minimum Service Standards (SPM) delivery.",
        },
        {
          id: "pillar-3",
          badge: "PILLAR 3",
          title: "GEDSI Participation & Influence",
          desc: "Advancing meaningful leadership and representation for women, persons with disabilities (OPDs), and vulnerable communities.",
        },
      ],
    },
    provincesSection: {
      heading: "Interactive Provincial Profiles",
      subheading: "Select a partner province on the archipelago map or list to inspect service indicators and regional briefs.",
      mapHint: "Click any province node to inspect regional governance indicators",
      basicServiceLabel: "Basic Service Composite",
      healthLabel: "Health SPM Readiness",
      gedsiLabel: "GEDSI Participation",
      focusLabel: "Priority Focus Areas",
      filterPubsBtn: "Filter Repository by Province",
    },
    newsSection: {
      heading: "Latest News & Activities",
      readMore: "Read activity summary",
    },
    glossarySection: {
      heading: "Searchable A–Z Governance & Knowledge Glossary",
      subheading: "Key Indonesian decentralisation, fiscal, and accessibility terminology.",
      searchPlaceholder: "Filter glossary terms (e.g., SPM, GEDSI, KMC, UU PDP)...",
    },
    opportunitiesSection: {
      careersTitle: "Careers & Specialist Vacancies",
      procurementTitle: "Procurement & Tenders",
      deadlineLabel: "Closing Date",
      channelLabel: "Application Channel",
      openOneDrive: "View Tender Pack (DT Global OneDrive)",
      textOnlyNotice: "Vacancies link directly to DT Global's official recruitment channel (no public file uploads).",
    },
    stayConnected: {
      heading: "Stay Connected (UU PDP 27/2022 Consent Verified)",
      subheading: "Receive bilingual policy brief alerts, activity updates, or join SKALA's official broadcast channel.",
      emailPlaceholder: "your.email@institution.go.id",
      namePlaceholder: "Full name / Institution",
      consentText:
        "I consent to SKALA / DT Global processing my email strictly for knowledge newsletter updates under Indonesia UU PDP No. 27/2022.",
      subscribeBtn: "Subscribe Newsletter",
      whatsappBtn: "Join WhatsApp Channel",
      subscribedMsg: "Subscription recorded with verifiable UU PDP consent timestamp.",
      contactHeading: "Direct Inquiry & Feedback (Anti-Spam Protected)",
      messagePlaceholder: "Share a question about SKALA publications, API access, or regional partnerships...",
      sendContactBtn: "Send Inquiry",
      contactSentMsg: "Your inquiry passed validation & sanitisation and was logged for the SKALA KM team.",
    },
    footer: {
      cobranding: "Co-Branding: Australian Aid  |  Bappenas / Government of Indonesia  |  SKALA",
      implementedBy: "Supported by the Australian Government and implemented by DT Global • Proposed by PT Inovasi Digital Terdepan",
      privacy: "Privacy Policy (UU PDP 27/2022)",
      accessibility: "Accessibility Statement (WCAG 2.2 AA)",
      apiRss: "Read-Only API / RSS",
      llmsTxt: "AIO (llms.txt)",
    },
  },
  id: {
    skipLink: "Langsung ke konten utama",
    contrastToggle: "Kontras Tinggi",
    contrastActive: "Kontras Tinggi: AKTIF",
    fontDecrease: "Perkecil teks",
    fontReset: "Ukuran normal",
    fontIncrease: "Perbesar teks",
    brandTagline: "Kemitraan Australia–Indonesia",
    nav: {
      about: "Tentang",
      ourWork: "Program Kami",
      publications: "Publikasi",
      provinces: "Provinsi",
      news: "Berita & Media",
      glossary: "Glosarium",
      careers: "Karier",
      procurement: "Pengadaan",
      searchBtn: "Cari",
    },
    hero: {
      eyebrow: "SKALA FASE II (2027–2030) • PUSAT PENGETAHUAN PUBLIK DWIBAHASA",
      title: "Sinergi dan Kolaborasi untuk Akselerasi Layanan Dasar",
      subtitle:
        "Memperkuat lingkungan pendukung nasional, tata kelola pemerintahan daerah, serta partisipasi GEDSI dalam sistem desentralisasi Indonesia.",
      searchPlaceholder: "Cari publikasi, ringkasan kebijakan, provinsi, glosarium...",
      findBtn: "Cari",
      phaseTitle: "SKALA FASE II",
      phaseSub: "2027 – 2030",
      phaseStats: [
        { label: "Pilar Strategis", value: "3 Pilar" },
        { label: "Provinsi Mitra", value: "7+ Wilayah" },
        { label: "Aksesibilitas", value: "WCAG 2.2 AA" },
        { label: "Interoperabilitas", value: "SKALA One + KMC" },
      ],
    },
    repo: {
      heading: "Repositori Pengetahuan & Publikasi",
      subheading: "Tersinkron satu arah dengan SKALA One • Mempertahankan ID kanonik untuk KMC",
      viewAll: "Reset & Lihat Semua",
      filterByFacets: "Filter Berfacet",
      clearFilters: "Hapus semua",
      typeLabel: "Jenis Dokumen & Media",
      pillarLabel: "Pilar / Tema",
      provinceLabel: "Provinsi",
      yearLabel: "Tahun Terbit",
      allProvinces: "Semua Provinsi",
      allYears: "2023 – 2027 (Semua)",
      types: {
        "policy-brief": "Ringkasan Kebijakan",
        "field-story": "Cerita Lapangan",
        "report-data": "Laporan & Data",
        "provincial-profile": "Profil Provinsi",
        "podcast-video": "Podcast & Video",
        "booklet-infographic": "Buklet & Infografis",
      },
      pillars: {
        "pillar-1": "Kebijakan Nasional (Pilar 1)",
        "pillar-2": "Tata Kelola Daerah (Pilar 2)",
        "pillar-3": "Inklusi GEDSI (Pilar 3)",
      },
      previewPdf: "Pratinjau PDF",
      downloadPdf: "Unduh",
      playEmbed: "Putar Media",
      readTranscript: "Baca Transkrip",
      viewDataChart: "Grafik Interaktif",
      resultsCount: "dokumen ditemukan",
      searchLatency: "Indeks Meilisearch • <18ms",
      noResults: "Tidak ada publikasi yang sesuai dengan filter terpilih. Hapus salah satu filter untuk melihat arsip.",
    },
    pillarsSection: {
      heading: "Tiga Pilar Strategis SKALA Fase II",
      subheading:
        "Melanjutkan 17 tahun kemitraan desentralisasi Australia–Indonesia untuk mempersempit kesenjangan layanan dasar regional.",
      items: [
        {
          id: "pillar-1",
          badge: "PILAR 1",
          title: "Lingkungan Pendukung Nasional Lebih Kuat",
          desc: "Menyelaraskan transfer fiskal pusat (DAK/DAU), kerangka regulasi, dan standar Satu Data bersama Bappenas dan kementerian teknis.",
        },
        {
          id: "pillar-2",
          badge: "PILAR 2",
          title: "Tata Kelola Daerah yang Lebih Baik",
          desc: "Memperkuat pengelolaan keuangan daerah (PFM), perencanaan, dan pemenuhan Standar Pelayanan Minimal (SPM) di provinsi dan kabupaten.",
        },
        {
          id: "pillar-3",
          badge: "PILAR 3",
          title: "Partisipasi & Pengaruh GEDSI",
          desc: "Mendorong kepemimpinan dan keterwakilan bermakna bagi perempuan, penyandang disabilitas (OPD), serta kelompok rentan.",
        },
      ],
    },
    provincesSection: {
      heading: "Profil Provinsi Interaktif",
      subheading: "Pilih provinsi mitra pada peta kepulauan atau daftar untuk melihat indikator layanan dan ringkasan daerah.",
      mapHint: "Klik simpul provinsi mana pun untuk meninjau indikator tata kelola daerah",
      basicServiceLabel: "Indeks Layanan Dasar",
      healthLabel: "Kesiapan SPM Kesehatan",
      gedsiLabel: "Partisipasi GEDSI",
      focusLabel: "Fokus Prioritas Daerah",
      filterPubsBtn: "Filter Repositori Provinsi Ini",
    },
    newsSection: {
      heading: "Berita & Kegiatan Terbaru",
      readMore: "Baca ringkasan kegiatan",
    },
    glossarySection: {
      heading: "Glosarium Tata Kelola & Pengetahuan A–Z",
      subheading: "Istilah kunci desentralisasi, fiskal daerah, dan aksesibilitas digital di Indonesia.",
      searchPlaceholder: "Saring istilah glosarium (mis. SPM, GEDSI, KMC, UU PDP)...",
    },
    opportunitiesSection: {
      careersTitle: "Karier & Lowongan Tenaga Ahli",
      procurementTitle: "Pengadaan & Tender",
      deadlineLabel: "Batas Waktu",
      channelLabel: "Saluran Lamaran",
      openOneDrive: "Buka Paket Tender (OneDrive DT Global)",
      textOnlyNotice: "Lowongan terhubung ke saluran rekrutmen resmi DT Global (tanpa unggah dokumen publik).",
    },
    stayConnected: {
      heading: "Tetap Terhubung (Terverifikasi Persetujuan UU PDP 27/2022)",
      subheading: "Terima buletin kebijakan dwibahasa atau bergabung dengan saluran resmi WhatsApp SKALA.",
      emailPlaceholder: "email.anda@instansi.go.id",
      namePlaceholder: "Nama lengkap / Instansi",
      consentText:
        "Saya menyetujui SKALA / DT Global memproses surel saya khusus untuk buletin pengetahuan sesuai UU PDP No. 27 Tahun 2022.",
      subscribeBtn: "Langganan Buletin",
      whatsappBtn: "Gabung Saluran WhatsApp",
      subscribedMsg: "Langganan tercatat dengan stempel waktu persetujuan UU PDP yang dapat diaudit.",
      contactHeading: "Pertanyaan & Masukan Langsung (Dilindungi Anti-Spam)",
      messagePlaceholder: "Ajukan pertanyaan tentang publikasi SKALA, akses API, atau kemitraan daerah...",
      sendContactBtn: "Kirim Pertanyaan",
      contactSentMsg: "Pesan Anda lolos validasi & sanitasi dan telah dicatat untuk tim KM SKALA.",
    },
    footer: {
      cobranding: "Identitas Bersama: Australian Aid  |  Bappenas / Pemerintah Indonesia  |  SKALA",
      implementedBy: "Didukung oleh Pemerintah Australia dan diimplementasikan oleh DT Global • Diusulkan oleh PT Inovasi Digital Terdepan",
      privacy: "Kebijakan Privasi (UU PDP 27/2022)",
      accessibility: "Pernyataan Aksesibilitas (WCAG 2.2 AA)",
      apiRss: "API Baca-Saja / RSS",
      llmsTxt: "AIO (llms.txt)",
    },
  },
};
