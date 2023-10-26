<section class="orderHandler">
  <i class="orderHandler__icons orderHandler__icons--close material-icons"
    >close</i
  >
  

  <figure class="orderHandler__preview">
    <img class="orderHandler__preview__img" src="./assets/img/{{mealImage}}" alt="preview" />
  </figure>

  <figcaption class="orderHandler__infos">
    <i class="orderHandler__icons orderHandler__icons--back material-icons"
      >chevron_left</i
    >
    <h2 class="orderHandler__infos__title orderHandler__infos__title--center">
      {{mealName}}
    </h2>
    <!-- <ul class="orderHandler__statut">
  <span class="orderHandler__statut__line"></span>
  <span
    class="orderHandler__statut__line orderHandler__statut__line--red"
  ></span>

  <li class="orderHandler__statut__item orderHandler__statut__item--active">
    <span class="orderHandler__statut__dot"></span>
    <p class="orderHandler__statut__text">Plat</p>
  </li>

  <li class="orderHandler__statut__item orderHandler__statut__item--active">
    <span class="orderHandler__statut__dot"></span>
    <p class="orderHandler__statut__text">Sauce</p>
  </li>

  <li class="orderHandler__statut__item">
    <span class="orderHandler__statut__dot"></span>
    <p class="orderHandler__statut__text">accompagnement</p>
  </li>

  <li class="orderHandler__statut__item">
    <span class="orderHandler__statut__dot"></span>
    <p class="orderHandler__statut__text">Boisson</p>
  </li>
</ul> -->

    {{des}}

    <section class="orderHandler__content">
      <ul class="orderHandler__content__list">
        {{orderHandlerContent}}
      </ul>
    </section>

    <button class="button button--confirm orderHandler__button">
      Continuer
    </button>
  </figcaption>
</section>
