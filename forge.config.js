module.exports = {
  packagerConfig: {
    name: 'Waterfall',
    executableName: 'waterfall'
  },
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      platforms: ['win32'],
      config: {
        name: 'waterfall'
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
          maintainer: 'Nick',
          homepage: 'https://github.com/NickAz123/waterfall-app'
        }
      }
    }
  ]
};