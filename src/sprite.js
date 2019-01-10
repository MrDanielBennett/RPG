class Sprite () {
  constructor(options) {
    let that = {};
    that.context = options.context;
    that.width = options.width;
    that.height = options.height;
    that.image = options.image;
    return that;
  }
}
