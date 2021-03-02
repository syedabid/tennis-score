# Tennis Score

tennis-score is a typescript scoring system for tennis players.

## Installation

Use the package manager [npm](https://www.npmjs.com) to install packages

```bash
npm install
```

## Usage

```typescript
npx ts-node src/index.ts
```
## Output
Should output the results below:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
0-0, 15 - 15
0-0, 40 - 15
0-0, Deuce
0-0, Advantage player one
1 - 0
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

## Testing
I have used Jest for testing the classes to execute the test please run the command below

```typescript
npm run test    
```

## Thought process
I have created these three classes Match, Player and Score. Match class creates the player object and calls the other two classes methods to create/update players information and also calls the methods from score class to calculate the results.

I have tried to create as small methods as possible so that the code can be well managed and readable the other developers. There could be different approach to design the Score class and set all the methods to private and do the unit testing on the top level classes.

## License
[MIT](https://choosealicense.com/licenses/mit/)