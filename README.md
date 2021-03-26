# Sentinel
**KILL ALL MUTANTS**

Playground for mutation tests

Exemplify how 100% of code coverage does not ensure test quality.

On `main` branch we have 100% code coverage but tested in a way that
we may have several code changes breaking our business rules but our
tests cannot protect us from commiting these failures.

On `kill_the_mutants` branch we have 100% code coverage as well but
our tests are focused on the main responsibility of each function.
This way any minor change on the function responsibility results in
a test failure.

## Install Dependencies

```sh
$ npm ci
```

## Run the application

```sh
$ chmod +x mutant-detector.js
$ ./mutant-detector.js '[{"name":"Dr. Xavier","brain_activity":50000}]'
[{"name":"Dr. Xavier","diagnostic":"mutant"}]
```

## Run tests

Unit tests

```sh
$ npm run test
```

Code coverage

```sh
$ npm run test:coverage
```

Mutation test

```sh
$ npm run test:mutation
```

## Kill All the Mutants!

Go to `kill_the_mutants` branch and execute unit, coverage and mutation tests
to see the difference.

Compare `test/mutant-detector-service.spec.js` on `main` and `kill_the_muntants`
branches.
