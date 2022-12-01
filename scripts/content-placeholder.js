const settings = {
  loadingDuration: 2000,
}

const cardHeaderEl = document.querySelector(`[data-card-header]`)
const cardTitleEl = document.querySelector(`[data-card-title]`)
const cardExcerptEl = document.querySelector(`[data-card-excerpt]`)

const profileImgEl = document.querySelector(`[data-profile-img]`)
const profileNameEl = document.querySelector(`[data-profile-name]`)
const profileDataEl = document.querySelector(`[data-profile-date]`)

const animatedBgs = document.querySelectorAll(`[data-animated-bg]`)
const animatedBgTexts = document.querySelectorAll(`[data-animated-text]`)

setTimeout(getData, settings.loadingDuration)

function getData() {
  cardHeaderEl.innerHTML = `
    <img
      src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
      alt="Laptop"
      class="card-header-image"
    />
  `
  cardTitleEl.innerHTML = `Lorem ipsum dolor sit amet.`
  cardExcerptEl.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, ipsum.`

  profileImgEl.innerHTML = `
    <img
      src="https://randomuser.me/api/portraits/men/45.jpg"
      alt="Footer Avatar"
    />
  `
  profileNameEl.innerHTML = `John Doe`
  profileDataEl.innerHTML = `<small>11 Aug 2022</small>`

  animatedBgs.forEach((animatedBg) =>
    animatedBg.removeAttribute(`data-animated-bg`)
  )
  animatedBgTexts.forEach((animatedText) =>
    animatedText.removeAttribute(`data-animated-text`)
  )
}
