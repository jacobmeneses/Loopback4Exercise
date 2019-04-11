-- Adminer 4.6.3 PostgreSQL dump



DROP TABLE IF EXISTS "shop";
DROP SEQUENCE IF EXISTS shop_id_seq;
CREATE SEQUENCE shop_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 3 CACHE 1;

CREATE TABLE "public"."shop" (
    "id" integer DEFAULT nextval('shop_id_seq') NOT NULL,
    "name" character varying(50) NOT NULL,
    "description" character varying(255) NOT NULL,
    CONSTRAINT "unique_id" UNIQUE ("id")
) WITH (oids = false);


DROP TABLE IF EXISTS "product";
DROP SEQUENCE IF EXISTS product_id_seq;
CREATE SEQUENCE product_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 2 CACHE 1;

CREATE TABLE "public"."product" (
    "id" integer DEFAULT nextval('product_id_seq') NOT NULL,
    "name" character varying(50) NOT NULL,
    "description" character varying(255) NOT NULL,
    "score" double precision NOT NULL,
    "shop_id" integer,
    CONSTRAINT "product_shop_id_fkey" FOREIGN KEY (shop_id) REFERENCES shop(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE
) WITH (oids = false);

-- 2019-04-10 06:56:44.929601+00
