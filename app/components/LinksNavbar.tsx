import React from 'react'

export default function LinksNavbar({ className }: any) {
    return (
        <ul className={`${className}`}>
            <li>
                <a href="#">Programmes</a>
            </li>
            <li>
                <a href="#">Exercices</a>
            </li>
            <li>
                <a href="#">L'histoire</a>
            </li>
            <li>
                <a href="#">Tarifs</a>
            </li>
        </ul>
    )
}
