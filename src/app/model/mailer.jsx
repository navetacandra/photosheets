function verify(to, url) {
  window.fetch(`https://WordyLuckyWorkspaces.puppeteernaveta.repl.co/verify?to=${encodeURIComponent(to)}&uri=${encodeURIComponent(url)}`)
    .then(e => e.json())
    .then(res => {
      sessionStorage.setItem('success-alert', 'Account Verified!||');
      return res
    })
    .catch(err => { return err })
}

export {
  verify
}