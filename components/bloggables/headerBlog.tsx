import React, { Component } from 'react'

import styles from '../../styles/e-portfolio/components/Bloggables.module.scss'

type Props = {
    children: React.ReactNode
}

type State = {}

export default class HeaderBlog extends Component<Props, State> {
  state = {}

  render() {
    return (
      <h1 className={styles.headMainDiv}>{this.props.children}</h1>
    )
  }
}