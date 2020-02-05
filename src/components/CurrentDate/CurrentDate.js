import React from 'react'

export default function CurrentDate() {
    let newDate = new Date()
    let day = newDate.getDate()
    let month = newDate.toLocaleDateString('default', { month: 'short'})
    let year = newDate.getFullYear()
    let currentDate = `${month} ${day}, ${year} `
    return (
        <div>
            <h2>{currentDate}</h2>
        </div>
    )
}
