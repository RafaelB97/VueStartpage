const state = {
  groups: [
    {
      id: 1,
      title: 'SocialNetworks',
      bookmarks: [
        {
          title: 'Facebook',
          link: 'https://www.facebook.com'
        },
        {
          title: 'Twitter',
          link: 'https://www.twitter.com'
        },
        {
          title: 'Instagram',
          link: 'https://www.instagram.com'
        },
        {
          title: 'Reddit',
          link: 'https://www.reddit.com'
        },
        {
          title: 'Goodreads',
          link: 'https://www.goodreads.com/'
        },
        {
          title: 'Reddit3',
          link: 'https://www.reddit.com'
        }
      ]
    },
    {
      id: 2,
      title: 'Videos',
      bookmarks: [
        {
          title: 'YouTube',
          link: 'https://www.YouTube.com'
        },
        {
          title: 'Twitch',
          link: 'https://www.twitch.tv'
        },
        {
          title: 'Netflix',
          link: 'https://www.netflix.com'
        },
        {
          title: 'Prime Video',
          link: 'https://www.primevideo.com'
        }
      ]
    },
    {
      id: 3,
      title: 'Utilities',
      bookmarks: [
        {
          title: 'GitHub',
          link: 'https://www.github.com'
        },
        {
          title: 'Bitwarden',
          link: 'https://www.bitwarden.com'
        },
        {
          title: 'Columns',
          link: 'https://www.columns.app'
        },
        {
          title: 'Pocket',
          link: 'https://www.getpocket.com'
        }
      ]
    },
    {
      id: 4,
      title: 'SocialNetworks',
      bookmarks: [
        {
          title: 'Facebook',
          link: 'www.facebook.com'
        },
        {
          title: 'Twitter',
          link: 'www.twitter.com'
        }
      ]
    }
  ]
}

const getters = {
  allGroups: store => store.groups
}

const mutations = {}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions
}
