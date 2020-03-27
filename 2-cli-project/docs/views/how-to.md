[< Back to menu](../../README.md)

# How to create?
- [Components](#components) 
- [Containers](#containers) 
- [Architecture](./architecture.md)

### Components
When a new component is created, is also created a new folder with this specification:

`directory name it´s always in **CamelCase**

    |__ MyComponent
            |__ index.js 
            |__ styles.scss


`index.js` contains all the jsx code

`styles.scss` contains all the sass code


#### Functional component
It´s a component that don´t need to be initialized


```javascript
 
 const MyComponent = () => {
   return <div className="my-component"></div>;
 }

```

#### Class component
It´s a component that need to be initialized

```javascript
export default class MyComponent extends Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <div className="my-component"></div>
    );
  }
}
```


#### Containers
It´s a smart component that it´s connected to the store

**Directory name it´s always in CamelCase**

    |__ MyComponent
            |__ index.js 
            |__ actions.js
            |__ reducer.ts
            |__ styles.scss


In addition to the rest of components, through containers it´s added:

`actions.js` contains all the actions connected to the container

`reducer.ts` contains the reducer that it´s connected to the store 


``` javascript
class MyComponent extends Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="my-component"></div>
    );
  }
}

export default connect(mapStateToProps, dispatchMapToProps)(MyComponent);
```

By all `components` and `containers` we´ll be define always as this

_Style name it´s in *lowercase* and separated with `-`_

```scss
.my-component {
  attribute: value;
}
```


