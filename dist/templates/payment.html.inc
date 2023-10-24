<form class="pay">
  <section class="pay__error">
    <h4>Erreur de Payment</h4>
  </section>

  <section class="pay__banner">
    <h1 class="pay__banner--title">Pepe Chicken Limoges</h1>
    <p class="pay__banner--desc">Click and Collect</p>
  </section>

  <section class="pay__selector">
    <h2 class="pay__selector--title">Options Click and Collect</h2>
    <ul class="pay__selector--items">
      <li class="pay__selector-container">
        <input class="pay__selector--checkbox" type="checkbox" id="Priorite" />
        <label class="pay__selector--item" for="Priorite">
          <img
            class="pay__selector--item-img"
            src="./assets/img/Lightning.svg"
            alt=""
          />

          <h3 class="pay__selector--item-title">Priorité</h3>
        </label>
      </li>
      <li class="pay__selector-container">
        <input class="pay__selector--checkbox" type="checkbox" id="Standar" />
        <label class="pay__selector--item" for="Standar">
          <img
            class="pay__selector--item-img"
            src="./assets/img/Cart.svg"
            alt=""
          />

          <h3 class="pay__selector--item-title">Standar</h3>
        </label>
      </li>
      <li class="pay__selector-container">
        <input class="pay__selector--checkbox" type="checkbox" id="Calendar" />
        <label class="pay__selector--item" for="Calendar">
          <img
            class="pay__selector--item-img"
            src="./assets/img/Calendar.svg"
            alt=""
          />

          <h3 class="pay__selector--item-title">Calendar</h3>
        </label>
      </li>
    </ul>
  </section>

  <section class="pay__selector">
    <h2 class="pay__selector--title">Moyen de Paiment</h2>
    <ul class="pay__selector--items">
      <li class="pay__selector-container">
        <input class="pay__selector--checkbox" type="checkbox" id="Bancaire" />
        <label class="pay__selector--item" for="Bancaire">
          <img
            class="pay__selector--item-img"
            src="./assets/img/Carte Banquaire.svg"
            alt=""
          />

          <h3 class="pay__selector--item-title">Carte Bancaire</h3>
        </label>
      </li>
      <li class="pay__selector-container">
        <input class="pay__selector--checkbox" type="checkbox" id="Espece" />
        <label class="pay__selector--item" for="Espece">
          <img
            class="pay__selector--item-img"
            src="./assets/img/Espece.svg"
            alt=""
          />

          <h3 class="pay__selector--item-title">Espece</h3>
        </label>
      </li>
      <li class="pay__selector-container">
        <input class="pay__selector--checkbox" type="checkbox" id="PayPal" />
        <label class="pay__selector--item" for="PayPal">
          <img
            class="pay__selector--item-img"
            src="./assets/img/PayPal.svg"
            alt=""
          />

          <h3 class="pay__selector--item-title">PayPal</h3>
        </label>
      </li>
    </ul>
  </section>

  <section class="pay__coupon">
    <h2 class="pay__coupon--title">Coupon</h2>
    <section class="pay__coupon--container">
      <input class="pay__coupon--input" type="text" placeholder="Coupon" />
      <a class="pay__coupon--validate">Valider</a>
    </section>
  </section>

  <section class="pay__accept">
    <input
      class="pay__accept--check"
      type="checkbox"
      id="checkbox"
      checked="checked"
    />
    <label for="checkbox"
      >Je reconnais avoir pris connaissance et accepté les CGV Click & Collect
      et Livraison de Pepe Chicken.</label
    >
  </section>

  <input class="pay__validate" type="submit" value="Pay 59,99€" />
</form>
