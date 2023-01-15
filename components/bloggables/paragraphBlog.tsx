import React, { Component, ReactNode } from 'react'
import styles from "../../styles/e-portfolio/components/Bloggables.module.sass";

type Props = {
    children: ReactNode
}

type State = {}

export default class ParagraphBlog extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div className={styles.paraMainDiv}>
        {this.props.children}
      </div>
    )
  }
}