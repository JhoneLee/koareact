/*
* @Author: liyunjiao
* @Date:   2017-06-08 11:27:51
* @Last Modified by:   liyunjiao
* @Last Modified time: 2017-06-08 11:28:09
*/
import React, {Component} from 'react'
import SectionMain from '../components/SectionMain'
import styles from '../sass/App'

class App extends Component {
    constructor() {
        super()
    }

    render() {
        const {actions} = this.props

        return (
            <div className={styles.app}>
                <SectionMain actions={actions}></SectionMain>
            </div>
        )
    }
}

export default App