class DWButtonLiked extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <button aria-label="unlike this" id="likeButton" class="like">
          <i class="fa fa-heart" aria-hidden="true"></i>
        </button>
        `;
  }
}

customElements.define('dw-button-liked', DWButtonLiked);
