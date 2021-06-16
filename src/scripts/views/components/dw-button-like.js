class DWButtonLike extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <button aria-label="like this" id="likeButton" class="like">
          <i class="fa fa-heart-o" aria-hidden="true"></i>
        </button>
        `;
  }
}

customElements.define('dw-button-like', DWButtonLike);
