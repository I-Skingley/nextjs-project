-- CreateTable
CREATE TABLE "Meals" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "meal" TEXT,
    "protein" TEXT,
    "kid_friendly" BOOLEAN,
    "recipe" TEXT
);

-- CreateIndex
Pragma writable_schema=1;
CREATE UNIQUE INDEX "sqlite_autoindex_Meals_1" ON "Meals"("id");
Pragma writable_schema=0;
