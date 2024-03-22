-- CreateTable
CREATE TABLE "Email" (
    "id" SERIAL NOT NULL,
    "subject" TEXT NOT NULL,
    "preview" TEXT NOT NULL,
    "deployment" TIMESTAMP(3) NOT NULL,
    "sent" BOOLEAN NOT NULL,

    CONSTRAINT "Email_pkey" PRIMARY KEY ("id")
);
