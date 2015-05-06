## scopes_test

Refrenced to [this](https://github.com/sequelize/sequelize/issues/3657).

### Produced SQL

```sql
Executing (default): INSERT INTO "Bots" ("id","name","updatedAt","createdAt") VALUES (DEFAULT,'John Doe','2015-05-06 09:31:03.773 +00:00','2015-05-06 09:31:03.774 +00:00') RETURNING *;
Executing (default): INSERT INTO "Avatars" ("id","url","AvatarableId","updatedAt","createdAt") VALUES (DEFAULT,'http://domain.com/avatar.png',8,'2015-05-06 09:31:03.799 +00:00','2015-05-06 09:31:03.800 +00:00') RETURNING *;
```

```json
{ "id": 8,
  "name": "John Doe",
  "updatedAt": "Wed May 06 2015 09:31:03 GMT+0000 (UTC)",
  "createdAt": "Wed May 06 2015 09:31:03 GMT+0000 (UTC)" }
```

### Expected behavior

```sql
Executing (default): INSERT INTO "Avatars" ("id","url","AvatarableId","Avatarable","updatedAt","createdAt") VALUES (DEFAULT,'http://domain.com/avatar.png',8,"Bot",'2015-05-06 09:31:03.799 +00:00','2015-05-06 09:31:03.800 +00:00') RETURNING *;
```
