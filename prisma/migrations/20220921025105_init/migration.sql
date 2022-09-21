-- CreateTable
CREATE TABLE "Breeder" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "profileImage" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Breeder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Customer" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "profileImage" TEXT NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pet" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "dateOfBirth" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "profileImage" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "gender" TEXT NOT NULL,
    "breederId" INTEGER NOT NULL,

    CONSTRAINT "Pet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PetCategory" (
    "id" SERIAL NOT NULL,
    "pureBreed" BOOLEAN NOT NULL,
    "breedName" TEXT NOT NULL,
    "categoryName" TEXT NOT NULL,
    "petId" INTEGER NOT NULL,

    CONSTRAINT "PetCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sale" (
    "id" SERIAL NOT NULL,
    "salesDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "breederId" INTEGER NOT NULL,
    "customerId" INTEGER NOT NULL,
    "petId" INTEGER NOT NULL,
    "paymentStatus" TEXT NOT NULL,
    "amountPayed" INTEGER NOT NULL,
    "refNumber" INTEGER NOT NULL,

    CONSTRAINT "Sale_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" SERIAL NOT NULL,
    "rating" DECIMAL(65,30) NOT NULL,
    "review" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "breederId" INTEGER NOT NULL,
    "customerId" INTEGER NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Breeder_email_key" ON "Breeder"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Breeder_firstName_lastName_email_phoneNumber_address_key" ON "Breeder"("firstName", "lastName", "email", "phoneNumber", "address");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_email_key" ON "Customer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_firstName_lastName_phoneNumber_address_key" ON "Customer"("firstName", "lastName", "phoneNumber", "address");

-- CreateIndex
CREATE UNIQUE INDEX "Sale_refNumber_key" ON "Sale"("refNumber");

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_breederId_fkey" FOREIGN KEY ("breederId") REFERENCES "Breeder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PetCategory" ADD CONSTRAINT "PetCategory_petId_fkey" FOREIGN KEY ("petId") REFERENCES "Pet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_breederId_fkey" FOREIGN KEY ("breederId") REFERENCES "Breeder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_petId_fkey" FOREIGN KEY ("petId") REFERENCES "Pet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_breederId_fkey" FOREIGN KEY ("breederId") REFERENCES "Breeder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
