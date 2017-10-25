# markdown-it-mdi
[Markdown-it][markdown-it] plugin that adds [Materialdesign](https://materialdesignicons.com/) icons support.

Turn this:

```md
Hello World! :mdi-barcode:
```

Into this:

```html
<p>Hello World! <i class="mdi mdi-barcode"></i></p>
```


## Install
```bash
$ npm install markdown-it-mdi --save
```



## Usage


### Enable plugin

```js
var md = require('markdown-it');
var mdi = require('markdown-it-mdi');

md().use(mdi);
```

 > originally taken from [markdown-it-fontawesome](https://github.com/nunof07/markdown-it-fontawesome) by @nunof07

[markdown-it]: https://github.com/markdown-it/markdown-it
[fontawesome]: https://fortawesome.github.io/Font-Awesome/
