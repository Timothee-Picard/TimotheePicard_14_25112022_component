import React from 'react'
export default function Modal({ isShowing, hide, type, title, messages, ...props }) {
    return isShowing? (
        <>
            <div className="modal-container">
                <div className={"modal " + "modal-" + type}>
                    <div className="modal-header">
                        <h2 className="modal-title">{title}</h2>
                        <button className="modal-close" onClick={hide} tabIndex="1"></button>
                    </div>
                    <div className="modal-content">
                        {messages && messages.map((message) => (
                            <p key={message}>{message}</p>
                        ))}
                    </div>
                    <div className="modal-actions">
                        {props.children}
                    </div>
                </div>
            </div>
            <style jsx="true">{`
              .modal-container {
                position: fixed;
                background-color: rgba(0, 0, 0, 0.25);
                height: 100vh;
                width: 100vw;
                left: 0;
                top: 0;
                z-index: 9999;
                display: flex;
                justify-content: center;
                align-items: center;
              }

              .modal {
                position: relative;
                background-color: white;
                padding: 2em;
                width: clamp(220px, 75%, 600px);
                font-family: sans-serif;
              }

              .modal-success {
                border: 4px solid #339900;
              }

              .modal-warning {
                border: 4px solid #ffcc00;
              }

              .modal-error {
                border: 4px solid #cc3300;
              }

              .modal-header {
                display: flex;
                justify-content: space-between;
              }

              .modal-title {
                margin: 0;
              }

              .modal-close {
                position: relative;
                height: 1.5em;
                width: 1.5em;
                border: none;
                cursor: pointer;
                background: none;
              }

              .modal-close:before {
                position: absolute;
                top: 43%;
                left: 0;
                transform: translate(-50%, -50%);
                outline: none;
                content: "";
                width: 100%;
                border-radius: 20px;
                border-bottom: 3px solid black;
                transform: rotate(45deg);
              }

              .modal-close:after {
                position: absolute;
                top: 43%;
                left: 0;
                transform: translate(-50%, -50%);
                outline: none;
                content: "";
                width: 100%;
                border-radius: 20px;
                border-bottom: 3px solid black;
                transform: rotate(-45deg);
              }

              .modal-actions {
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-end;
                gap: 1em;
              }

              .modal-action {
                color: inherit;
                background: none;
                border: none;
                text-decoration: none;
                font-size: 0.9em;
                font-weight: 600;
                text-transform: uppercase;
                padding: 0.4em 1em;
                border-radius: 4px;
                border: 2px solid black;
                cursor: pointer;
              }

              .modal-action.success {
                border: 2px solid #339900;
              }

              .modal-action.warning {
                border: 2px solid #ffcc00;
              }

              .modal-action.error {
                border: 2px solid #cc3300;
              }

              .modal-action:hover {
                background-color: #0130b6;
                color: white;
              }

              .modal-action.success:hover {
                background-color: #339900;
              }

              .modal-action.warning:hover {
                background-color: #ffcc00;
              }

              .modal-action.error:hover {
                background-color: #cc3300;
              }
            `}
            </style>
        </>
    ) : null;
}
