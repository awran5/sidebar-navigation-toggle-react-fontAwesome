<<<<<<< HEAD
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faCogs, faTable, faList, faUser } from '@fortawesome/free-solid-svg-icons'

import './styles.css'

function App() {
	const [ isOpen, setIsOpen ] = useState(false)

	const handleTrigger = () => setIsOpen(!isOpen)

	return (
		<div className="App">
			<div className="page">
				<div className="content">
					<a target="_blank" rel="noopener noreferrer" href="https://codepen.io/mejdej93/pen/eYYJGjd">
						original Pen
					</a>
				</div>

				<div className={`sidebar${isOpen ? ' sidebar--open' : ''}`}>
					<div className="trigger" onClick={handleTrigger}>
						<FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
					</div>

					<div className="sidebar-position">
						<FontAwesomeIcon icon={faUser} />
						<span>Home</span>
					</div>
					<div className="sidebar-position">
						<FontAwesomeIcon icon={faCogs} />
						<span>Menu item 2</span>
					</div>
					<div className="sidebar-position">
						<FontAwesomeIcon icon={faTable} />
						<span>Menu item 3</span>
					</div>

					<div className="sidebar-position">
						<FontAwesomeIcon icon={faList} />
						<span>Position 4</span>
					</div>
				</div>
			</div>
		</div>
	)
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
=======
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faCogs,
  faTable,
  faList,
  faUser
} from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleTrigger = () => setIsOpen(!isOpen);

  return (
    <div className="App">
      <div className="page">
        <div className="content">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://codepen.io/mejdej93/pen/eYYJGjd"
          >
            original Pen
          </a>
        </div>

        <div className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
          <div className="trigger" onClick={handleTrigger}>
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </div>

          <div className="sidebar-position">
            <FontAwesomeIcon icon={faUser} />
            <span>Home</span>
          </div>
          <div className="sidebar-position">
            <FontAwesomeIcon icon={faCogs} />
            <span>Menu item 2</span>
          </div>
          <div className="sidebar-position">
            <FontAwesomeIcon icon={faTable} />
            <span>Menu item 3</span>
          </div>

          <div className="sidebar-position">
            <FontAwesomeIcon icon={faList} />
            <span>Position 4</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
>>>>>>> a5347c07e3147f8be046a12aaa589f4218a65a68
