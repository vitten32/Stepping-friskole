// src/mixins/metaMixin.ts
export default {
  props: {
    pageTitle: {
      type: String,
      required: true,
    },
    metaTags: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  watch: {
    pageTitle(newTitle) {
      document.title = newTitle;
    },
  },
  metaInfo() {
    const defaultMetaTags = [
      {
        name: 'description',
        content: 'Default description for the website.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:site_name',
        content: 'Default Site Name',
      },
    ];

    return {
      title: this.pageTitle,
      meta: [...defaultMetaTags, ...this.metaTags],
    };
  },
  mounted() {
    document.title = this.pageTitle; // Set initial title
  },
};
