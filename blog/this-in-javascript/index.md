---
title: 'this in JavaScript'
date: '2019-06-19'
---

`this` in JS is like a pronoun in a language.For example, in the sentence :” Elvina jumps higher that she will touch the ceiling.” the word “ she” refers to Elvina but in a different way.

Example :

```js
var child = {
    name: ”Elvina”,
    age: 4,
    fullName: function () {
        console.log(this.name + ” is “ + this.age);
        console.log(child.name + ” is “ + child.age);
    }
};

child.fullName();
```

The output will be the same: “Elvina is 4” for both console.logs.”this” in the above snippet belongs to the object “child”.

It takes different values depending upon the usage

1. Inside a method.
2. Inside a function.
3. Alone.
4. In a event.
5. call(), and apply()
