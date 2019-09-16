export default {
  getSiteData: () => ({
    title: 'K&amp;A | 2019 -> &#8734;',
  }),
  getRoutes: async () => {
//     const { data: posts } = await axios.get(
//       'https://jsonplaceholder.typicode.com/posts'
//     )
    return [
      {
        path: '/',
        component: 'src/pages/index',
      },
      {
        path: '/wedding',
        component: 'src/pages/wedding',
      },
      {
        path: '/wedding/videos',
        component: 'src/pages/weddingVideos',
      },
      {
        path: '/wedding/bachelor',
        component: 'src/pages/weddingBachelor',
      },
    ]
  },
  siteRoot: 'https://ka19.ca',
}
