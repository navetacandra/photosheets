import React from 'react';
import BerandaPage from '../views/Beranda';
import Posts from './Post';
import Feed from './Feed';
import Footer from '../views/Component/Footer';

export default function Beranda() {
    return (
        <div className="bg bg-light" style={{ width: '100%', height: '100vh', overflowX: 'hidden' }}>
            <BerandaPage />
            {
                window.isMobile ? (
                    <div>
                        <Posts />
                        <Feed />
                        <Footer mt='80vh' />
                    </div>
                ) : (
                    <div style={{marginTop: '4em'}}>
                        <Posts />
                        <Feed />
                        <Footer mt='80vh' />
                    </div>
                )
            }
        </div>
    )
}