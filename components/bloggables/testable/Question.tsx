import React, { Component } from 'react'

export interface QuestionProps {
    callbackFunction: Function
}

// export interface QuestionState {}

// export abstract class Question<Props extends QuestionProps, State extends QuestionState> extends Component<Props, State> {
//     constructor(props: Props) {
//         super(props)
//     }

//     abstract getPoint(): number;
// }