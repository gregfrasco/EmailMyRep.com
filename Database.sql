--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.1
-- Dumped by pg_dump version 9.5.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: emailMyRep; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE "emailMyRep" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C' LC_CTYPE = 'C';


ALTER DATABASE "emailMyRep" OWNER TO postgres;

\connect "emailMyRep"

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner:
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner:
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: Emails; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "Emails" (
    "ID" numeric(11,0) NOT NULL,
    "User_ID" numeric(11,0),
    "Subject" text,
    "Message" text,
    "Template_ID" numeric,
    "Topic_ID" numeric
);


ALTER TABLE "Emails" OWNER TO postgres;

--
-- Name: RepEmails; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "RepEmails" (
    "EMAIL_ID" numeric(11,0) NOT NULL,
    "REP_ID" numeric(11,0) NOT NULL
);


ALTER TABLE "RepEmails" OWNER TO postgres;

--
-- Name: Reps; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "Reps" (
    "ID" numeric(11,0) NOT NULL,
    "Name" text,
    "Party" text,
    "pictureLink" text,
    email text
);


ALTER TABLE "Reps" OWNER TO postgres;

--
-- Name: Templetes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "Templetes" (
    "ID" numeric(11,0) NOT NULL,
    "Title" text,
    "Description" text,
    "Templete Text" text,
    "TOPIC_ID" numeric(11,0)
);


ALTER TABLE "Templetes" OWNER TO postgres;

--
-- Name: Topics; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "Topics" (
    "Name" text,
    "Description" text,
    "ID" numeric(11,0) NOT NULL
);


ALTER TABLE "Topics" OWNER TO postgres;

--
-- Name: Users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "Users" (
);


ALTER TABLE "Users" OWNER TO postgres;

--
-- Name: ID; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Emails"
    ADD CONSTRAINT "ID" PRIMARY KEY ("ID");


--
-- Name: RepEmails_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "RepEmails"
    ADD CONSTRAINT "RepEmails_pkey" PRIMARY KEY ("EMAIL_ID", "REP_ID");


--
-- Name: Reps_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Reps"
    ADD CONSTRAINT "Reps_pkey" PRIMARY KEY ("ID");


--
-- Name: Templetes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Templetes"
    ADD CONSTRAINT "Templetes_pkey" PRIMARY KEY ("ID");


--
-- Name: Topics_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Topics"
    ADD CONSTRAINT "Topics_pkey" PRIMARY KEY ("ID");


--
-- Name: RepEmails_EMAIL_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "RepEmails"
    ADD CONSTRAINT "RepEmails_EMAIL_ID_fkey" FOREIGN KEY ("EMAIL_ID") REFERENCES "Emails"("ID");


--
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--
