## scopes_test

Refrenced to [this](https://github.com/sequelize/sequelize/issues/3657).

### Produced SQL

#### Step 1

```coffeescript
db.User
  .create(name: "John Doe")
```

SQL:

```sql
Executing (default): INSERT INTO "Users" ("id","name","updatedAt","createdAt") VALUES (DEFAULT,'John Doe','2015-05-10 03:01:25.239 +00:00','2015-05-10 03:01:25.239 +00:00') RETURNING *;
```

#### Step 2

From User model definition
```coffeescript
hooks:
  afterCreate: (user, options, fn) ->
    user.createAvatar
      url: 'http://domain.com/avatar.png'
    .then (avatar) ->
      fn null, avatar
```

SQL:

```sql
Executing (default): INSERT INTO "Avatars" ("id","url","AvatarableId","updatedAt","createdAt") VALUES (DEFAULT,'http://domain.com/avatar.png',1,'2015-05-10 03:01:25.265 +00:00','2015-05-10 03:01:25.265 +00:00') RETURNING *;
```

#### Step 3

```coffeescript
.then (user) ->
  user.getAvatars()
```

SQL:

```sql
Executing (default): SELECT "id", "url", "createdAt", "updatedAt", "AvatarableId" FROM "Avatars" AS "Avatar" WHERE ("Avatar"."AvatarableId" = 1 AND "Avatar"."Avatarable" = 'User');
```

### Expected SQL

### Step 2

SQL:

```sql
Executing (default): INSERT INTO "Avatars" ("id","url","AvatarableId","Avatarable","updatedAt","createdAt") VALUES (DEFAULT,'http://domain.com/avatar.png',1,"User",'2015-05-10 03:01:25.265 +00:00','2015-05-10 03:01:25.265 +00:00') RETURNING *;
```
