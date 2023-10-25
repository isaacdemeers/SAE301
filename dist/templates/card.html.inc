<article class="product">
    <div class="product__svg">
      <input class="product__svg-check" type="checkbox" id="heart{{id}}" />
      <label class="product__svg-label" for="heart{{id}}">
        <svg class="product__svg-img" width="26" height="25" viewBox="0 0 26 25" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_252_22436)">
            <mask id="mask0_252_22436" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="1" y="1" width="24"
              height="24">
              <rect x="1" y="1" width="24" height="24" />
            </mask>
            <g mask="url(#mask0_252_22436)">
              <path
                d="M13 21.9999L11.55 20.6999C9.86667 19.1832 8.475 17.8749 7.375 16.7749C6.275 15.6749 5.4 14.6874 4.75 13.8124C4.1 12.9374 3.64583 12.1332 3.3875 11.3999C3.12917 10.6666 3 9.91657 3 9.1499C3 7.58324 3.525 6.2749 4.575 5.2249C5.625 4.1749 6.93333 3.6499 8.5 3.6499C9.36667 3.6499 10.1917 3.83324 10.975 4.1999C11.7583 4.56657 12.4333 5.08324 13 5.7499C13.5667 5.08324 14.2417 4.56657 15.025 4.1999C15.8083 3.83324 16.6333 3.6499 17.5 3.6499C19.0667 3.6499 20.375 4.1749 21.425 5.2249C22.475 6.2749 23 7.58324 23 9.1499C23 9.91657 22.8708 10.6666 22.6125 11.3999C22.3542 12.1332 21.9 12.9374 21.25 13.8124C20.6 14.6874 19.725 15.6749 18.625 16.7749C17.525 17.8749 16.1333 19.1832 14.45 20.6999L13 21.9999ZM13 19.2999C14.6 17.8666 15.9167 16.6374 16.95 15.6124C17.9833 14.5874 18.8 13.6957 19.4 12.9374C20 12.1791 20.4167 11.5041 20.65 10.9124C20.8833 10.3207 21 9.73324 21 9.1499C21 8.1499 20.6667 7.31657 20 6.6499C19.3333 5.98324 18.5 5.6499 17.5 5.6499C16.7167 5.6499 15.9917 5.87074 15.325 6.3124C14.6583 6.75407 14.2 7.31657 13.95 7.9999H12.05C11.8 7.31657 11.3417 6.75407 10.675 6.3124C10.0083 5.87074 9.28333 5.6499 8.5 5.6499C7.5 5.6499 6.66667 5.98324 6 6.6499C5.33333 7.31657 5 8.1499 5 9.1499C5 9.73324 5.11667 10.3207 5.35 10.9124C5.58333 11.5041 6 12.1791 6.6 12.9374C7.2 13.6957 8.01667 14.5874 9.05 15.6124C10.0833 16.6374 11.4 17.8666 13 19.2999Z" />
            </g>
          </g>
          <defs>
            <filter id="filter0_d_252_22436" x="-2" y="-2" width="30" height="30" filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha" />
              <feOffset />
              <feGaussianBlur stdDeviation="1.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_252_22436" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_252_22436" result="shape" />
            </filter>
          </defs>
        </svg>

    </div>
    <ul class="product__details">
      <li class="product__detail">
        <ul class="product__info">
          <li class="product__info-item">
            <h2 class="product__name">{{name}}</h2>
          </li>
          <li class="product__info-item">
            <a class="product__button" href=""><input type="button" name="" id="" value="Ajouter" /></a>
            <p class="product__price">{{price}}</p>
          </li>
          <li class="product__info-item">
            <p class="product__description">{{description}}</p>
          </li>
        </ul>
      </li>
      <li class="product__image">
        <img src="{{imgUrl}}" alt="" />
      </li>
    </ul>
    <img class="product__bg" src="{{imgUrl}}" alt="" />
  </article>