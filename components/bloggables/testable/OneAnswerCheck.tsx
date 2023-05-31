import React, { Component, useState } from 'react'
import styles from '../../../styles/e-portfolio/components/Bloggables.module.sass'
import { QuestionProps } from './Question'

interface Props extends QuestionProps {
    isRemovePoint: boolean
    children: string
}

// class OneAnswerCheck extends Question<Props, State> {
//     state = {
//         isChecked: false
//     }

//     render() {
//         return (
//             <div className={styles.contentMainDiv}>
//                 <input 
//                     type={'checkbox'} 
//                     title={this.props.children?.toString()} 
//                     checked={this.state.isChecked} 
//                     onChange={()=>this.setState({isChecked: !this.state.isChecked})} />

//                 {this.props.children}
//             </div>
//         );
//     }

//     getPoint() {
//         return this.state.isChecked ? this.props.isRemovePoint ? -1 : 1 : 0;
//     }
// }

const OneAnswerCheck = (props: Props) => {
    const [isChecked, setIsChecked] = useState(false);

    function valueChanged() {
        setIsChecked(!isChecked)

        let adjustable: number = isChecked ? (props.isRemovePoint ? -1 : 1) : (props.isRemovePoint ? 1 : -1)

        props.callbackFunction(adjustable)
    }

    return (
        <div className={styles.contentMainDiv}>
            <input 
                type={'checkbox'} 
                title={props.children} 
                onChange={ valueChanged } />

            {props.children}
        </div>
    )
}

export default OneAnswerCheck;