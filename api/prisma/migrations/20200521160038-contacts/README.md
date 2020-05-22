# Migration `20200521160038-contacts`

This migration has been generated at 5/21/2020, 4:00:38 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "quaint"."Contact" (
"createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP ,"email" TEXT NOT NULL  ,"id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,"message" TEXT NOT NULL  ,"name" TEXT NOT NULL  )

PRAGMA "quaint".foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200521120526-fix-create-post..20200521160038-contacts
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
@@ -11,9 +11,17 @@
 // Define your own datamodels here and run `yarn redwood db save` to create
 // migrations for them.
 // TODO: Please remove the following example:
 model Post {
-  id    Int     @id @default(autoincrement())
-  title String
-  body String
+  id        Int      @default(autoincrement()) @id
+  title     String
+  body      String
   createdAt DateTime @default(now())
 }
+
+model Contact {
+  id        Int      @default(autoincrement()) @id
+  name      String
+  email     String
+  message   String
+  createdAt DateTime @default(now())
+}
```


