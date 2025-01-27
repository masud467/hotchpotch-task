import React from 'react'

function Footer() {
  return (
    <div className='container mx-auto '>
      <footer className="footer text-neutral-content p-10 flex items-center justify-around">
    <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About</a>
    <a className="link link-hover">Features</a>
    <a className="link link-hover">Works</a>
    <a className="link link-hover">Career</a>
  </nav>
  <nav>
    <h6 className="footer-title">Help</h6>
    <a className="link link-hover">Customer Support</a>
    <a className="link link-hover">Delivery Details</a>
    <a className="link link-hover">Terms & Conditions</a>
    <a className="link link-hover">Privacy Policy</a>
  </nav>
  
  <nav>
    <h6 className="footer-title">Resources</h6>
    <a className="link link-hover">Free eBooks</a>
    <a className="link link-hover">Development Tutorial</a>
    <a className="link link-hover">How to Blog</a>
    <a className="link link-hover">Youtube Playlist</a>
  </nav>
  <nav>
    <h6 className="footer-title">Links</h6>
    <a className="link link-hover">Free eBooks</a>
    <a className="link link-hover">Development Tutorial</a>
    <a className="link link-hover">How to Blog</a>
    <a className="link link-hover">Youtube Playlist</a>
  </nav>
</footer>
    </div>
  )
}

export default Footer