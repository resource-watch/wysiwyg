<a name="wysiwyg-items"></a>
## Item types
### Text
```js static
{
  id: 1,
  type: 'text',
  content: '<h1>This is a title</h1>'
}
```

### Image
```js static
{
  id: 2,
  type: 'image',
  content: {
    src: 'https://media.istockphoto.com/photos/jordanian-dessert-at-sunrise-picture-id185099703?s=2048x2048',
    alt: 'Testing'
  }
}
```

### Video
```js static
{
  id: 3,
  type: 'video',
  content: {
    src: 'https://www.youtube.com/watch?v=1JC0NJdfbsA',
    alt: 'Video'
  }
}
```

### Embed
```js static
{
  id: 4,
  type: 'embed',
  content: {
    src: 'https://resourcewatch.org/embed/widget/7592da9e-8844-429d-9f2b-0147dde29ff5'
  }
}
```

### Grid
```js static
{
  id: 5,
  type: 'grid',
  content: [
    {
      id: 51,
      type: 'embed',
      content: {
        src: 'https://resourcewatch.org/embed/widget/7592da9e-8844-429d-9f2b-0147dde29ff5'
      }
    },
    {
      id: 52,
      type: 'embed',
      content: {
        src: 'https://resourcewatch.org/embed/widget/acf093a0-c627-4ca7-9963-9cf1cc0c563e'
      }
    }
  ]
}
```

<a name="wysiwyg-blocks"></a>
## Block types
### Text
```js static
text: {
  Component: Text,
  // Placeholder
  placeholder: 'Type your text',
  theme: 'bubble',
  modules: {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link']
    ]
  }
},
```

### Image
```js static
image: {
  Component: Image,
  EditionComponent: ImageEdition,
  renderer: 'tooltip',
  model: {
    src: {
      type: 'text',
      id: 'src',
      label: 'Src',
      validations: {
        presence: { allowEmpty: false },
        url: true
      }
    },
    alt: {
      type: 'text',
      id: 'alt',
      label: 'Alt',
      validations: {
        presence: { allowEmpty: false }
      }
    }
  },

  options: {
  }
},
```

### Video
```js static
video: {
  Component: Video,
  EditionComponent: VideoEdition,
  renderer: 'tooltip',
  model: {
    url: {
      type: 'text',
      id: 'url',
      label: 'Url',
      validations: {
        presence: { allowEmpty: false },
        url: true
      }
    }
  },

  // react player props
  // https://github.com/CookPete/react-player#props
  options: {
    controls: true
  }
},
```

### Embed
```js static
embed: {
  Component: Embed,
  EditionComponent: EmbedEdition,
  renderer: 'tooltip',
  model: {
    src: {
      type: 'text',
      id: 'src',
      label: 'Src',
      validations: {
        presence: { allowEmpty: false },
        url: true
      }
    }
  },

  options: {
  }
},
```

### Grid
```js static
grid: {
  Component: Grid,
  EditionComponent: GridEdition,
  renderer: 'tooltip',
  model: {
    columns: {
      type: 'select',
      id: 'columns',
      label: 'Columns',
      defaultValue: 2,
      options: [
        { label: 2, value: 2 },
        { label: 3, value: 3 }
      ],
      validations: {
        presence: { allowEmpty: false }
      }
    }
  },

  options: {
  }
}
```

## Example
```js
<Wysiwyg
  items={[{"id":1,"type":"text","content":"<h1>This is a title</h1>"},{"id":2,"type":"text","content":"\"<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p><p>asdfasdfasd</p><p><br></p>\""},{"id":3,"type":"text","content":"\"<p><code style=\\\"background-color: rgba(220, 220, 220, 0.5);\\\"><strong>espacio</strong></code></p><p>Es un objeto de tipo String o Number que es usado para insertar un espacio en blanco dentro de la cadena de salida JSON para su mejor comprensión. Si es un número, se entiende que representa el número de espacios a agregar; este número tiene un límite de 10 espacios; números menores que 1 implican que no se utiliza espacio alguno. Si es un cadena (sólo los 10 primeros caracteres son tomados en cuenta), esta&nbsp;es usada como espacios en blanco. Si este parámetro no se define o este es nulo, no se agrega ningún espacio.</p>\""},{"id":1525360240528,"type":"grid","content":[[{"id":1525360242856,"type":"text","content":"<h1>Column 1</h1><p>This is content for the first column</p>"}],[{"id":1525360244680,"type":"text","content":"<h1>Column 2</h1><p>This is content for the second column</p>"}],[{"id":1525360246783,"type":"text","content":"<h1>Column 3</h1><p>This is content for the third column</p>"}]]},{"id":4,"type":"image","content":{"src":"https://media.istockphoto.com/photos/jordanian-dessert-at-sunrise-picture-id185099703?s=2048x2048","alt":"Placeholder"}},{"id":5,"type":"video","content":{"url":"https://www.youtube.com/watch?v=IAaGFLWQQjw"}},{"id":6,"type":"grid","content":[[{"id":61,"type":"embed","content":{"src":"https://resourcewatch.org/embed/map/564c6d71-c432-44e0-88cd-bef73b37a4cb"}},{"id":1525360153282,"type":"text","content":"<p><strong>I would like to add a content here</strong></p>"}],{"id":62,"type":"embed","content":{"src":"https://resourcewatch.org/embed/widget/e3dc7745-bac9-4bdf-937b-1fcd45ba6794"}}]}]}
/>
```
