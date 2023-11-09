import Image from 'next/image'
export default function Home() {
  return (
    <div>
      <div className="banner-container">
        {/* Kartunya */}
        <div className="header-banner-wrapper">
          {/* Foto Profil dan Nama */}
          <div className="profile-header-banner">
            {/* Foto Profil*/}
            <Image
              src="/assets/profile.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
          <div className="content-header-banner">
            {/* Nama dan Kawan2*/}
            <h1>Marcelinda Starlynn Runtono</h1>
            <div className="bio-nim-header-banner">
            {/* NIM dan BIO*/}
            <p>D121211036</p>
            <p>Bravo 6, going dark</p>
            </div>
          </div>
        </div>
        <div className="cta-banner-wrapper">
          {/* Tombol CTA */}
          <button>
            Halo!
          </button>
        </div>
      </div>
    </div>
  )
}