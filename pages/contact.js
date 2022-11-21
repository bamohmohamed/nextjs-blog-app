import Head from "next/head";
import { Fragment } from "react";
import ContactForm from "../components/contact/contact-form";

function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name="descritpion" content="Send me your messages!" />
      </Head>
      <ContactForm />
    </Fragment>
  );
}

export default ContactPage;
