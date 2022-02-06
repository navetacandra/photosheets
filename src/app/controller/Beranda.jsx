import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import BerandaPage from '../views/Beranda';
import Posts from './Post';
import Feed from './Feed';
import Footer from '../views/Component/Footer';

export default function Beranda() {
    return (
        <div className="bg bg-light" style={{ width: '100%', height: '100vh', overflowX: 'hidden' }}>
            <>
                <BerandaPage />
                <div style={{ marginTop: '4em' }}>
                    <Posts />
                    <Feed />
                </div>
            </>
        </div >
    )
}