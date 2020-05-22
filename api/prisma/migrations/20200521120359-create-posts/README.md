# Migration `20200521120359-create-posts`

This migration has been generated at 5/21/2020, 12:03:59 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "quaint"."UserExample" (
"email" TEXT NOT NULL  ,"id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,"name" TEXT   )

CREATE UNIQUE INDEX "quaint"."UserExample.email" ON "UserExample"("email")

PRAGMA "quaint".foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200521120359-create-posts
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,18 @@
+datasource DS {
+  provider = "sqlite"
+  url      = env("DATABASE_URL")
+}
+
+generator client {
+  provider      = "prisma-client-js"
+  binaryTargets = env("BINARY_TARGET")
+}
+
+// Define your own datamodels here and run `yarn redwood db save` to create
+// migrations for them.
+// TODO: Please remove the following example:
+model UserExample {
+  id    Int     @id @default(autoincrement())
+  email String  @unique
+  name  String?
+}
```


