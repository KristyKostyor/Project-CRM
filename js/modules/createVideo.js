export const loader = {
    loader: `
      <video  autoplay muted loop preload style="display: block; margin: 0 auto;">
        <source src="./assets/loader.mp4" type="video/mp4">
    </video>
    `,
    overlay: document.createElement('div'),

    show() {
        this.overlay.style.cssText = 'width: 100%;position: fixed;top: 0;left: 0;right: 0;bottom: 0;background-color: white;';
        this.overlay.innerHTML = this.loader;
        document.body.append(this.overlay);
    },
    remove() {
        this.overlay.remove();
    }
}