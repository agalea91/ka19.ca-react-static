import axios from 'axios'

export default {
  getSiteData: () => ({
    title: 'K&amp;A | 2019 -> &#8734;',
  }),
  getRoutes: async () => {
    const { data: posts } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )
    return [
      {
        path: '/',
        component: 'src/pages/index',
      },
      {
        path: '/wedding',
        component: 'src/pages/wedding',
      }
    ]
  },
  siteRoot: 'http://ka19.ca',
}
