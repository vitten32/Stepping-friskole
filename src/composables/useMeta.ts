// src/composables/useMeta.ts
import { onMounted, Ref, ref, watch } from 'vue'

export function useMeta (pageTitle: Ref<string>, metaTags: Ref<Array<{ name?: string; property?: string; content: string }>>) {
  // Watch for changes to pageTitle and update document title
  watch(pageTitle, newTitle => {
    document.title = newTitle
  })

  // Update meta tags dynamically
  const updateMetaTags = () => {
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

    const tags = [...defaultMetaTags, ...metaTags.value]
    tags.forEach(tag => {
      const metaElement = tag.name
        ? document.querySelector(`meta[name='${tag.name}']`)
        : document.querySelector(`meta[property='${tag.property}']`)
      if (metaElement) {
        metaElement.setAttribute('content', tag.content)
      } else {
        const newMetaElement = document.createElement('meta')
        if (tag.name) newMetaElement.setAttribute('name', tag.name)
        if (tag.property) newMetaElement.setAttribute('property', tag.property)
        newMetaElement.setAttribute('content', tag.content)
        document.head.appendChild(newMetaElement)
      }
    })
  }

  onMounted(() => {
    document.title = pageTitle.value
    updateMetaTags()
  })

  return { updateMetaTags }
}
