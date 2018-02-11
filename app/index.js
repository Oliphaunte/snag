import React             from 'react'
import ReactDOM          from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App               from "@/app/components/app.js"

const supportsHistory = "pushState" in window.history

// require("@/app/assets/css/app.scss")

if (typeof window !== 'undefined') {
  ReactDOM.render (
    <BrowserRouter basename={process.env.BASE_URL} forceRefresh={!supportsHistory}>
        <App />
    </BrowserRouter>,
    document.getElementById('app')
  );
}