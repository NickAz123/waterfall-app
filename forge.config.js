module.exports = {
  packagerConfig: {
    name: 'Waterfall',
    executableName: 'waterfall',
    author: 'NickAzz2013'
  },
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      platforms: ['win32'],
      config: {
        name: 'waterfall',
        authors: 'NickAzz2013',
        description: 'A simple log viewer application'
      }
    },
    {
      name: '@electron-forge/maker-dmg',
      platforms: ['darwin'],
      config: {
        format: 'ULFO'
      }
    },
    {
      name: '@electron-forge/maker-deb',
      platforms: ['linux'],
      config: {
        options: {
          maintainer: 'NickAzz2013',
          homepage: 'https://github.com/NickAz123/waterfall-app',
          description: 'A simple log viewer application'
        }
      }
    }
  ]
};