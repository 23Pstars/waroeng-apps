class DWButtonLiked extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <button aria-label="unlike this" id="likeButton" class="like">
          <i class="fa fa-heart" aria-hidden="true"></i>
        </button>
        `;
  }
}

if (!customElements.get('dw-button-liked')) {
  customElements.define('dw-button-liked', DWButtonLiked);
}
