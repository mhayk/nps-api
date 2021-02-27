# NPS - API

Net Promoter or Net Promoter Score (NPS) is the percentage of customers rating their likelihood to recommend a company, a product, or a service to a friend or colleague as 9 or 10 ("Promoters") minus the percentage rating this at 6 or below ("Detractors") on a scale from 0 to 10. Respondents who provide a score of 7 or 8 are referred to as "Passives" and do indeed enter into the overall percentage calculation. The result of the calculation is expressed without the percentage sign.

# typeORM

## Migrations
Creating user migration
```
$ yarn typeorm migration:create -n CreateUsers
$ yarn typeorm migration:create -n CreateSurveys
$ yarn typeorm migration:run
```
# Tests(TDD)

1. Unit tests

2. Integration tests
```
-> request -> routes -> controller -> repository
<- repository <- controller <- response
```

3. E2E (End to End - front-end)

# Jest

## Create jest config file
```
$ yarn jest --init
```