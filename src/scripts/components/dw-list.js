import './dw-item';

class DWList extends HTMLElement {

    set value(data) {
        this._data = data;
        this._render();
    }

    _render() {
        const _content = document.createElement('section');
        _content.className = 'content';

        const _latest = document.createElement('div');
        _latest.className = 'latest';

        const _label = document.createElement('h1');
        _label.className = 'latest__label';
        _label.innerHTML = 'Discover';

        const _posts = document.createElement('div');
        _posts.className = 'posts';

        this._data.forEach((item) => {
            const _item = document.createElement('dw-item');
            _item.value = item;
            _posts.appendChild(_item);
        });

        _latest.appendChild(_label);
        _latest.appendChild(_posts);
        _content.appendChild(_latest);

        this.appendChild(_content);
    }

}

customElements.define('dw-list', DWList);