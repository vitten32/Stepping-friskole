// src/mixins/metaMixin.ts
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    pageTitle: {
      type: String,
      required: true,
    },
    metaTags: {
      type: Array as () => Array<{ name?: string; property?: string; content: string }>,
      required: false,
      default: () => [],
    },
  },
  watch: {
    pageTitle (newTitle: string) {
      document.title = newTitle
    },
  },
  mounted () {
    document.title = this.pageTitle // Set initial title
  },
  methods: {
    metaInfo (): { title: string; meta: Array<{ name?: string; property?: string; content: string }> } { // Specify return type
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
      ]

      return {
        title: this.pageTitle,
        meta: [...defaultMetaTags, ...this.metaTags],
      }
    },
  },
})
