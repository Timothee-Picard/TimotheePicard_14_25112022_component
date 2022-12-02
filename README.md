# Component

![logo](./public/logo.jpg)

## Install

Install using `npm i my-react-modal`

## Usage

In a React app, use the Modal components:
`import { Modal } from 'my-react-modal'`

## Modal props

| Name      | Description                                                                                                                                                                           |
|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| isShowing | Type: `Boolean` State will display/hide modal                                                                                                                                         |
| hide      | Type: `Function` Function that sets the state to false                                                                                                                                |
| type      | Type: `String&vert;null` Can be success, warning or error                                                                                                                             |
| title     | Type: `String&vert;null`  Set the title of modal                                                                                                                                      |
| messages  | Type: `Array.<String>&vert;null ` Displays children at the bottom of the modal. <br />Can add class modal-action for button design and class success, warning or error for error type |

##  Children

children are added right-aligned in the footer we can add class to set custom design:

| class                | Description                                              |
|----------------------|----------------------------------------------------------|
| modal-action         | Set design to modal button design                        |
| modal-action success | Set design to modal button design and add success color  |
| modal-action error   | Set design to modal button design and add error color    |
| modal-action warning | Set design to modal button design and add warning color  |


## Use it exemple
```
import {useState} from 'react'
import Modal from './lib'

const App = () => {
    const [isShowing, setIsShowing] = useState(false)
    return (
        <>
            <button onClick={() => setIsShowing(true)}>
                Open modal
            </button>
            <Modal isShowing={isShowing}
                   hide={() => setIsShowing(false)}
                   type="error"
                   title="Ma modal"
                   messages={["Modal message 1","My custom message 2"]}
            >
                <button className="modal-action success" onClick={() => setIsShowing(false)}>Return</button>
                <a href="#" className="modal-action">Home</a>
            </Modal>
        </>
    )
}

export default App
```
