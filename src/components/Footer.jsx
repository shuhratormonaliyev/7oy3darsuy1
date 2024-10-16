
import React from 'react'

function Footer() {
  return (
    <div className="bg-gray-800 text-white p-10 mt-10">
      <footer className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <nav>
            <h6 className="footer-title text-lg font-bold mb-4">Xizmatlar</h6>
            <a className="link link-hover block mb-2">Brending</a>
            <a className="link link-hover block mb-2">Dizayn</a>
            <a className="link link-hover block mb-2">Marketing</a>
            <a className="link link-hover block mb-2">Reklama</a>
          </nav>
          <nav>
            <h6 className="footer-title text-lg font-bold mb-4">Kompaniya</h6>
            <a className="link link-hover block mb-2">Biz haqimizda</a>
            <a className="link link-hover block mb-2">Aloqa</a>
            <a className="link link-hover block mb-2">Ish o'rinlari</a>
            <a className="link link-hover block mb-2">Matbuot to'plami</a>
          </nav>
          <nav>
            <h6 className="footer-title text-lg font-bold mb-4">Huquqiy</h6>
            <a className="link link-hover block mb-2">Foydalanish shartlari</a>
            <a className="link link-hover block mb-2">Maxfiylik siyosati</a>
            <a className="link link-hover block mb-2">Cookie siyosati</a>
          </nav>
        </div>
        <div className="text-center mt-10">
          <p className="text-sm">© 2023 Sizning Kompaniya. Barcha huquqlar himoyalangan.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer