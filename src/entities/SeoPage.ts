export interface SeoPage {
  id: number;
  name: string;
  content: string;
  enabled: boolean;
}

export interface SeoPageContent {
  metadataForm: {
    name: string;
    params: { metadescription: string; title: string };
  };
  bannerForm: {
    name: string;
    params: {
      title: string;
      description: string;
      img: string;
      cta: string;
      urlcta: string;
    };
  };
  banner2Form: {
    name: string;
    params: {
      title: string;
      description: string;
      img: string;
      cta: string;
      urlcta: string;
    };
  };
  card1Form: {
    name: string;
    params: {
      title: string;
      items: { title: string; description: string; icon: string }[];
    };
  };
  faqForm: {
    name: string;
    params: {
      title: string;
      items: { title: string; description: string }[];
    };
  };
  card2Form: {
    name: string;
    params: {
      title: string;
      items: { title: string; description: string; icon: string }[];
    };
  };
  characterList: {
    name: string;
    params: {
      title: string;
    };
  };
  redirects: {
    name: string;
    params: {
      title: string;
      items: { title: string; url: string }[];
    };
  };
  reviewsForm: {
    name: string;
    params: {
      title: string;
      items: { title: string; description: string; icon: string }[];
    };
  };
}
