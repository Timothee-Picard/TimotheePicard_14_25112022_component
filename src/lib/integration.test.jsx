import * as React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import { describe, expect, test, afterEach } from 'vitest'
import Modal from "./index";

describe('Integration test', () => {
    afterEach(cleanup)

    test('Expected title is displayed', () => {
        const title = 'Titre'
        render(<Modal isShowing={true} title={title} />)
        expect(screen.queryByText(`${title}`))
    })

    test('Expected title is not displayed', () => {
        const title = 'Titre'
        render(<Modal isShowing={false} title={title} />)
        expect(screen.queryByText(`${title}`)).toBeNull()
    })

    test('Expected message is displayed', () => {
        const message = 'Une erreur est survenue'
        render(<Modal isShowing={true} message={message} />)
        expect(screen.queryByText(`${message}`))
    })

    test('Expected message is not displayed', () => {
        const message = 'Une erreur est survenue'
        render(<Modal isShowing={false} message={message} />)
        expect(screen.queryByText(`${message}`)).toBeNull()
    })

    test('Expected children is displayed', () => {
        const child = 'child element'
        render(<Modal isShowing={true}>{child}</Modal>)
        expect(screen.queryByText(`${child}`))
    })

    test('Expected children is not displayed', () => {
        const child = 'child element'
        render(<Modal isShowing={false}>{child}</Modal>)
        expect(screen.queryByText(`${child}`)).toBeNull()
    })
})
