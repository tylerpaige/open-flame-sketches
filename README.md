# Open Flame website sketches
### beta testing [sketchbook-static boilerplate](https://github.com/tylerpaige/sketchbook-static)

## Viewing sketches

Having some trouble getting `webpack-dev-server` to work with my inline svg plugin, so in the meantime, you can manually set up a server. 

```sh
npm run serve
```

The index will be a list of links to all the sketches stored in `routes.js`.

## Developing

Discrete sketches should live in their own directory inside `src/sketches/`. You can, however, store as many iterations of the same idea as you want in the same folder (think color schemes, slightly different animations, etc). 

Every sketch will need a template (handlebars) and a js file. The js file can then import the necessary styles. 

Paths to these files should be stored in the `routes.js` array. Webpack reads this configuration to compile all the assets. `name` refers to the projects display name in the automatically generated. `path` refers to the filename at which the sketch should be saved.

If a sketch's template needs to use `img` tags or otherwise link to images, you'll have to create a directory for imgs. Then, add a property `img` using the path to the directory (relative to the project root) as the value. In your template, path to your images as if they are in the same directory. Webpack will automatically copy everything in your specified `img` directory and copy it to the dist folder. All files in the dist folder are in a single layer.

`routes.js`

```js
module.exports = [
  {
    name : 'demo',
    path : 'demo.html',
    js : './src/sketches/demo/js/index.js',
    template : './src/sketches/demo/templates/template.hbs',
    img : './src/sketches/demo/img/'
  }
]
```

`src/sketch/demo/template.hbs`

```hbs
<!-- wrong -->
<img src="../img/logo.png" />

<!-- right -->
<img src="./logo.png" />
```

If a sketch needs a data file for its rendering, list the path to the data file under the value `data`. 

`routes.js`

```js
module.exports = [
  {
    name : 'demo',
    path : 'demo.html',
    js : './src/sketches/demo/js/index.js',
    template : './src/sketches/demo/templates/template.hbs',
    data : './src/sketches/demo/data.json'
  }
]
```

Unfortunately, because of how `html-webpack-plugin` works, the reference to your data is sort of verbose.

```hbs
<h1>{{htmlWebpackPlugin.options.data.heading}}</h1>
```

I have, therefore, included a simple snippet for shortening the reference. Just include this call to the `var` helper at the top of your template.

```hbs
{{var "data" htmlWebpackPlugin.options.data}}

<h1>{{data.heading}}</h1>
```

## Updating github pages

```sh
git subtree push --prefix dist origin gh-pages
```


