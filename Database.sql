--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.1
-- Dumped by pg_dump version 9.5.1

-- Started on 2016-02-26 10:37:21 EST

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 1 (class 3079 OID 12623)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner:
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2401 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner:
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 182 (class 1259 OID 16397)
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
-- TOC entry 186 (class 1259 OID 16409)
-- Name: RepEmails; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "RepEmails" (
    "EMAIL_ID" numeric(11,0) NOT NULL,
    "REP_ID" numeric(11,0) NOT NULL
);


ALTER TABLE "RepEmails" OWNER TO postgres;

--
-- TOC entry 183 (class 1259 OID 16400)
-- Name: Reps; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "Reps" (
    "ID" numeric(11,0),
    "Name" text,
    "Party" text,
    "pictureLink" text,
    email text
);


ALTER TABLE "Reps" OWNER TO postgres;

--
-- TOC entry 185 (class 1259 OID 16406)
-- Name: Templetes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "Templetes" (
    "ID" numeric(11,0),
    "Title" text,
    "Description" text,
    "Templete Text" text
);


ALTER TABLE "Templetes" OWNER TO postgres;

--
-- TOC entry 184 (class 1259 OID 16403)
-- Name: Topics; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "Topics" (
    "Name" text,
    "Description" text,
    "ID" numeric(11,0)
);


ALTER TABLE "Topics" OWNER TO postgres;

--
-- TOC entry 181 (class 1259 OID 16394)
-- Name: Users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "Users" (
);


ALTER TABLE "Users" OWNER TO postgres;

--
-- TOC entry 2389 (class 0 OID 16397)
-- Dependencies: 182
-- Data for Name: Emails; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "Emails" ("ID", "User_ID", "Subject", "Message", "Template_ID", "Topic_ID") FROM stdin;
\.


--
-- TOC entry 2393 (class 0 OID 16409)
-- Dependencies: 186
-- Data for Name: RepEmails; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "RepEmails" ("EMAIL_ID", "REP_ID") FROM stdin;
\.


--
-- TOC entry 2390 (class 0 OID 16400)
-- Dependencies: 183
-- Data for Name: Reps; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "Reps" ("ID", "Name", "Party", "pictureLink", email) FROM stdin;
\.


--
-- TOC entry 2392 (class 0 OID 16406)
-- Dependencies: 185
-- Data for Name: Templetes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "Templetes" ("ID", "Title", "Description", "Templete Text") FROM stdin;
\.


--
-- TOC entry 2391 (class 0 OID 16403)
-- Dependencies: 184
-- Data for Name: Topics; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "Topics" ("Name", "Description", "ID") FROM stdin;
\.


--
-- TOC entry 2388 (class 0 OID 16394)
-- Dependencies: 181
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "Users"  FROM stdin;
\.


--
-- TOC entry 2270 (class 2606 OID 16416)
-- Name: ID; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Emails"
    ADD CONSTRAINT "ID" PRIMARY KEY ("ID");


--
-- TOC entry 2272 (class 2606 OID 16436)
-- Name: RepEmails_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "RepEmails"
    ADD CONSTRAINT "RepEmails_pkey" PRIMARY KEY ("EMAIL_ID", "REP_ID");


--
-- TOC entry 2273 (class 2606 OID 16437)
-- Name: RepEmails_EMAIL_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "RepEmails"
    ADD CONSTRAINT "RepEmails_EMAIL_ID_fkey" FOREIGN KEY ("EMAIL_ID") REFERENCES "Emails"("ID");


--
-- TOC entry 2400 (class 0 OID 0)
-- Dependencies: 6
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


-- Completed on 2016-02-26 10:37:21 EST

--
-- PostgreSQL database dump complete
--
