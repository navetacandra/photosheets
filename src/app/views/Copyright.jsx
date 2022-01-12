import React from 'react'

function Copyright() {
    let year = new Date().getFullYear()
    return (
        <footer className="footer fixed-bottom copyright mt-auto py-3 shadow-lg">
            <div className="container">
                <span className="text-muted">Copyright &copy; PhotoSheets {year}</span>
            </div>
        </footer>
    )
}

export default Copyright
