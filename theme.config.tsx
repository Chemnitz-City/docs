import React from 'react'

const basePath = ''

const config = {
  logo: (
    <>
      <img src={`${basePath}/cc.png`} width="36" />
      <h1 className="nx-font-bold nx-text-2xl">Chemnitz City Regelwerke</h1>
    </>
  ),
  head: (
    <>
      <link rel="icon" type="image/png" href={`${basePath}/cc.png`} />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s –Chemnitz City',
    }
  },
  editLink: {
    component: () => <></>,
  },
  feedback: {
    content: () => <></>,
  },
  project: {
    link: 'https://github.com/Chemnitz-City/docs/',
  },
  docsRepositoryBase: 'https://github.com/Chemnitz-City/docs/',
  footer: {
    text: '© 2025 GamingLuke1337.',
  },
}

export default config
