# Migration `20200521120526-fix-create-post`

This migration has been generated at 5/21/2020, 12:05:26 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "quaint"."Post" (
"body" TEXT NOT NULL  ,"createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP ,"id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,"title" TEXT NOT NULL  )

PRAGMA "quaint".foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200521120359-create-posts..20200521120526-fix-create-post
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource DS {
   provider = "sqlite"
-  url = "***"
+  url      = env("DATABASE_URL")
 }
 generator client {
   provider      = "prisma-client-js"
@@ -10,9 +10,10 @@
 // Define your own datamodels here and run `yarn redwood db save` to create
 // migrations for them.
 // TODO: Please remove the following example:
-model UserExample {
+model Post {
   id    Int     @id @default(autoincrement())
-  email String  @unique
-  name  String?
+  title String
+  body String
+  createdAt DateTime @default(now())
 }
```


