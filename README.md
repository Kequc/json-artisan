JSON Artisan
===

A JSON deep extend library

![JSON Artisan](https://github.com/Kequc/json-artisan/blob/master/img/tools.jpg?raw=true)

### Install the module from npm

```
npm i json-artisan --save
```

### Usage

In its basic form JSON Artisan extends objects.

```javascript
const artisan = require('json-artisan');

artisan({
    name: 'ruddiger',
    age: 37,
    pets: {
        dogs: ['murphey'],
        cats: ['tammy', 'jupiter']
    }
}, {
    age: 27,
    pets: {
        cats: ['jupiter', 'felix']
    }
}, {
    age: 28,
    canDraw: true
});
#=> {
    name: 'ruddigar',
    age: 28,
    pets: {
        dogs: ['murphey'],
        cats: ['jupiter', 'felix'],
    },
    canDraw: true
}
```

Unset keys by providing a value of undefined.

```javascript
const target = {
    name: 'ruddiger',
    age: 37,
    income: 3000
};

artisan(target, {
    income: undefined
});
#=> {
    name: 'ruddiger',
    age: 37
}
```

### Extensions

JSON Artisan accepts functions as properties, enabling you to do things like this:

```javascript
const target = {
    age: 37,
    cats: ['tammy', 'jupiter']
};

artisan(target, {
    cats: (cats) => cats.map(cat => cat + '-cat')
});
#=> {
    age: 37,
    cats: ['tammy-cat', 'jupiter-cat']
}
```

The library comes with a useful set of extensions available via the `$` object.

```javascript
const $ = require('json-artisan').$;
```

#### $.Array.Insert

Insert provided values at the beginning of the array.

```javascript
artisan({
    dogs: ['rex']
}, {
    dogs: $.Array.Insert('jacob', 'murphey')
});
#=> {
    dogs: ['jacob', 'murphey', 'rex']
}
```

#### $.Array.Splice

Splice the array.

```javascript
artisan({
    dogs: ['jacob', 'murphey', 'rex']
}, {
    dogs: $.Array.Splice(1, 1, 'alex', 'fredrick')
});
#=> {
    dogs: ['jacob', 'alex', 'fredrick', 'rex']
}
```

#### $.Array.Concat

Adds provided values to the end of the array.

```javascript
artisan({
    dogs: ['rex']
}, {
    dogs: $.Array.Concat('jacob', 'murphey')
});
#=> {
    dogs: ['rex', 'jacob', 'murphey']
}
```

#### $.Array.AddToSet

Adds provided values to the end of the array only if they do not already exist.

```javascript
artisan({
    dogs: ['rex']
}, {
    dogs: $.Array.AddToSet('murphey', 'rex')
});
#=> {
    dogs: ['rex', 'murphey']
}
```

#### $.Array.Map

Performs the provided method on every item in the array.

```javascript
artisan({
    dogs: ['rex', 'catalina']
}, {
    dogs: $.Array.Map(dog => dog + '-dog')
});
#=> {
    dogs: ['rex-dog', 'catalina-dog']
}
```

### $.Boolean.toggle

Reverses the value of the boolean (default: true).

```javascript
artisan({
    isParent: true
}, {
    isParent: $.Boolean.Toggle()
});
#=> {
    isParent: false
}
```

### $.Number.Inc $.Number.Dec

Increments or decrements the number by the provided amount (default: 1).

```javascript
artisan({
    foundTreasuresCount: 10
}, {
    foundTreasuresCount: $.Number.Inc()
});
#=> {
    foundTreasuresCount: 11
}
```

### $.Number.Mul $.Number.Div

Multiplies or divides the number by the provided amount (default: 1).

```javascript
artisan({
    awesomeness: 5
}, {
    awesomeness: $.Number.Mul(3)
});
#=> {
    awesomeness: 15
}
```

### $.Number.Max $.Number.Min

Sets the number to the highers or lowest number (default: 0).

```javascript
artisan({
    health: 120
}, {
    health: $.Number.Max(100)
});
#=> {
    health: 100
}
```

### $.Object.Set

Replaces the object rather than extending it (default: {}).

```javascript
artisan({
    toys: { racers: 3, stuffedAnimals: 1 }
}, {
    toys: $.Object.Set({ racers: 5, baseballs: 2 })
});
#=> {
    toys: { racers: 5, baseballs: 2 }
}
```

### $.String.Append $.String.Prepend

Appends or prepends a string with an optional separator (default: '').

```javascript
artisan({
    fullName: 'rodrigo'
}, {
    fullName: $.String.Append('kangaroo', ', ')
});
#=> {
    fullName: 'rodrigo, kangaroo'
}
```

### Contribute

If you like what you see please feel encouraged to [get involved](https://github.com/Kequc/json-artisan/issues) report problems and submit pull requests! As of the time of this writing the project is new with one maintainer.
