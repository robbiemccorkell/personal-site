import React from 'react'
import App from 'next/app'
import Router from 'next/router'

Router.events.on('routeChangeComplete', url => {
  // @ts-ignore
  window.analytics.page(url)
})

export default class MyApp extends App {
  // @ts-ignore
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Component {...pageProps} />
    )
  }
}