import React from 'react'
import renderer from 'react-test-renderer'
import { describe, expect, test } from 'vitest'
import Modal from './index'

describe('Modal', () => {
    test('Modal component renders correctly', () => {
        const component = renderer.create(
        <Modal />
        )

        const tree = component.toJSON()

        expect(tree).toMatchSnapshot()
    })

    test('The props works', () => {
        const component = renderer.create(
            <Modal isShowing={true}
                   type="error"
                   title="Ma modal"
                   message="Contact enregistré avec succés"
            >
                <a href="#" className="modal-action">Accueil</a>
                <button className="modal-action success">Retour</button>
            </Modal>
        )

        const tree = component.toJSON()

        expect(tree).toMatchSnapshot()
    })
})
