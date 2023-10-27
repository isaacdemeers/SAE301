<article class="product">
<span class="banner {{stock}}"></span>
    <div class="product__svg">
      <input class="product__svg-check" type="checkbox" id="heart{{id}}" />
      <label data-id="{{id}}" class="product__svg-label" for="heart{{id}}">
        <svg width="22" height="20" viewBox="0 0 22 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.2044 3.45508C15.2315 -2.53856 30.4921 6.19497 11.2044 18.3534C-8.08333 6.19497 7.1773 -2.53856 11.2044 3.45508Z" stroke-width="2"/>
        </svg>
      </label>
    </div>

</svg>
    </div>
    <ul class="product__details">
      <li class="product__detail">
        <ul class="product__info">
          <li class="product__info-item">
            <h2 class="product__name">{{name}}</h2>
          </li>
          <li class="product__info-item">
            <button data-id="{{id}}" class="product__button">Ajouter</button>
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