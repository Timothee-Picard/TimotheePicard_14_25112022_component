import {useState} from 'react'
import Modal from './lib'

const App = () => {
    const [isShowing, setIsShowing] = useState(false)
    return (
        <>
            <button className="modal-toggle" onClick={() => setIsShowing(true)}>
                Login
            </button>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

            <Modal isShowing={isShowing}
                   hide={() => setIsShowing(false)}
                   type="error"
                   title="Ma modal"
                   messages={["Contact enregistré avec succés","message 2"]}
            >
                <a href="#" className="modal-action">Accueil</a>
                <button className="modal-action success">Retour</button>
            </Modal>
        </>
    )
}

export default App
