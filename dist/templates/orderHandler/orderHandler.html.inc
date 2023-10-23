<section class="orderHandler">
  <i class="orderHandler__icons orderHandler__icons--close material-icons"
    >close</i
  >
  <i class="orderHandler__icons orderHandler__icons--favorite material-icons"
    >favorite</i
  >

  <figure class="orderHandler__preview">
    <img
      class="orderHandler__preview__img"
      src="{{orderHandlerPreview}}"
      alt="preview"
    />
  </figure>

  <figcaption class="orderHandler__infos">
    <h2 class="orderHandler__infos__title">{{orderHandlerTitle}}</h2>
    <h3 class="orderHandler__infos__price">{{orderHandlerPrice}}</h3>
    <p class="orderHandler__infos__description">{{orderHandlerDescription}}</p>
    <button class="button button--confirm orderHandler__button">
      Continuer
    </button>
  </figcaption>
</section>
