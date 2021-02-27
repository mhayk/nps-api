# NPS - API

Net Promoter or Net Promoter Score (NPS) is the percentage of customers rating their likelihood to recommend a company, a product, or a service to a friend or colleague as 9 or 10 ("Promoters") minus the percentage rating this at 6 or below ("Detractors") on a scale from 0 to 10. Respondents who provide a score of 7 or 8 are referred to as "Passives" and do indeed enter into the overall percentage calculation. The result of the calculation is expressed without the percentage sign.

# typeORM

## Migrations
Creating user migration
```
$ yarn typeorm migration:create -n CreateUsers
$ yarn typeorm migration:run
```