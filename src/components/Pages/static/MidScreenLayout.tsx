import React from 'react'

const MidScreenLayout = () => {
    return (
        <div className="flex items-center justify-center bg-gray-100 z-index-30 rounded-lg">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
                <h1 mat-dialog-title>Welcome to Safarnama</h1>
                <div mat-dialog-content>
                    <p>We recommend you use Google Chrome on a desktop to run this application.</p>
                    <p>To begin create a new or open an existing experience</p>
                </div>
                <div mat-dialog-actions>
                    <button mat-button >Create</button>
                    <button mat-button>Open</button>
                </div >
            </div >
        </div>
    )
}

export default MidScreenLayout