import React, { Component, ReactNode } from 'react'
import styles from "../../styles/e-portfolio/components/Bloggables.module.sass"

type Props = {
    children: ReactNode,
    style?: React.CSSProperties | undefined,
    // className?: string | undefined
    stretchInner?: boolean
}

type State = {}

export default class ContentBlog extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div className={
        this.props.stretchInner ? styles.contentMainDivStretch : styles.contentMainDiv
        // styles.contentMainDiv
      } style={this.props.style}>
        {this.props.children}
      </div>
    )
  }
}