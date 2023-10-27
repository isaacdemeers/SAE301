<article class="mainBanner main__banner">
      <img class="mainBanner__logo" src="./assets/img/logo.png" alt="Pepe Chicken" />
      <section class="mainBanner__section">
        <h2 class="mainBanner__title">Pepe Chicken Limoges</h2>
        <ul class="mainBanner__ul">
          <li class="mainBanner__subtitle">Click & Collect</li>
          <li class="mainBanner__button">Modifier le restaurant</li>
        </ul>
      </section>
    </article>
    <aside class="filters main__filters">
      <div class="filters__header">
        <h2 class="filters__title">Filtres</h2>
      </div>
      <div class="filters__subheader">
        <ul class="filters__list">
          <li class="filters__item">
            <label class="filters__text">Type</label>
          </li>
          <li class="filters__item" data-fav="0">
            <input class="filters__checkbox" type="checkbox" id="Favoris" type="text">
            <label class="filters__text" for="">Favoris</label>
          </li>
          <li class="filters__item" data-fav="1">
            <input class="filters__checkbox" type="checkbox" id="Menu" type="text">
            <label class="filters__text" for="">Menu</label>
          </li>
          <li class="filters__item" data-fav="2">
            <input class="filters__checkbox" type="checkbox" id="Plat" type="text">
            <label class="filters__text" for="">Plat</label>
          </li>
          <li class="filters__item" data-fav="4">
            <input class="filters__checkbox" type="checkbox" id="Accompagnement" type="text">
            <label class="filters__text" for="">Accompagnement</label>
          </li>
          <li class="filters__item" data-fav="3">
            <input class="filters__checkbox" type="checkbox" id="Boisson" type="text">
            <label class="filters__text" for="">Boisson</label>
          </li>
        </ul>
      </div>
    </aside>
    <div id="Products" class="products main__products">

    </div>
    <aside class="cart main__cart">
      <section class="cart__container">
        <h3 class="cart__title">Votre panier</h3>
        <ul class="cart__prices">
          <li>Total TTC :</li>
          <li>14,99€</li>
        </ul>
        <a class="cart__validate" href="#">Valider mon panier</a>
        <!-- cart__validate--disabled si le panier est vide -->
      </section>
      <ul class="cart__items">

      </ul>
    </aside>