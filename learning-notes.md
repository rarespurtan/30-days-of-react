<!-- @format -->

## Hello

This is my not yet finished portfolio application.

## Tech Stack at the moment:

[React, TypeScript, Node.js, Scss]

## Work log

### Learned about TypeScript and how to use it within React.

TypeScript vs JavaScript

Pros:

- compiler catches errors
- smaller feedback loop
- makes refactoring easier
- autocompletion/autoimports

Cons

- Error messages
- Library support
- More time to learn

### Creating components

```typescript
interface IProps {
  text: string;
  ok: boolean;
  n?: number;
  fn?: (param: string) => number;
  obj?: {
    f1: string;
  };
  person: Person;
}
interface Person {
  firstName: string;
  lastName: string;
}

interface IState {
  name: string;
  email: string;
  message: string;
}

export default class ComponentExample extends React.Component<IProps, IState> {}
```

Props are properties that are being used to pass data from one component to another. e.g. when using <ComponentExample /> in <App>, I will have to pass the Props specified to avoid errors such as: <ComponentExample text="Text" ok="True" person={{firstName:"Jane", lastName:"Doe"}} />
Declaring Optional props using ? :

```typescript
interface Example {
  ok?: boolean;
}
```

### Hooks

```typescript

export default class ComponentExample extends React.Component<IProps, IState> {
    const [count, setCount] = useState<number | null >(5);
    setCount(5);
    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null);
    return (
        <div ref={divRef}>
            <input ref={inputRef} />
        </div>
    )
}

```

Hooks allow us to use state and other features without writing a class.
In the example above, I am declaring count as a number or null variable, and setCount as a setter function to set the count variable to different values. In the next line of code, I am setting the count to 5. I can also use interfaces when declaring the type of useState<>.

```javascript
useEffect(() => {
  const lastIndex = people.length - 1;
  if (index < 0) {
    setIndex(lastIndex);
  } else if (index == people.length) {
    setIndex(0);
  }
}, [index, people]);

useEffect(() => {
  let slider = setInterval(() => {
    setIndex(index + 1);
  }, 3000);
  return () => clearInterval(slider);
}, [index]);

useEffect(() => {
  const timeout = setTimeout(() => {
    setAlert(false);
  }, 3000);
  return () => clearTimeout(timeout);
}, [alert]);
```

useEffect code that changes index every 3 seconds.
Returns cleanup function that clears the interval while the index changes.

```javascript
 className={`${error ? "error" : null}`}
```

Conditional class name assignment.
