<li data-id="{{id}}" class="cart__item">
  <section class="cart__item--titlecontainer">
    <h4 class="cart__item--title">{{name}}</h4>
  </section>
  <p class="cart__item--desc">{{options}}</p>

  <section class="cart__item--container">
    <ul class="cart__item--counter">
      <li data-value="minus" data-id="{{id}}" class="cart__item--counter-btn">
        <img src="./assets/img/minus.svg" alt="minus" />
      </li>
      <li data-id="{{id}}" class="cart__item--counter-amount">1</li>
      <li data-value="plus" data-id="{{id}}" class="cart__item--counter-btn">
        <img src="./assets/img/plus.svg" alt="plus" />
      </li>
    </ul>
  </section>
  <p class="cart__item--price">{{price}}</p>

  <a class="cart__item--modify" data-id="{{id}}" href="#"> Supprimer </a>
</li>