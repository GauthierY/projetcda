import React, { useState } from "react";
import Head from "next/head";
import Layout from "../src/components/layout/layout";
import Link from "next/link";
import styles from "../styles/Form.module.css";
import Image from "next/image";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { signIn, signOut } from "next-auth/react";
import { useFormik } from "formik";
import connexion_validate from "../lib/validate";

export default function Connexion() {
  const [show, setShow] = useState(false);
  //formik hook
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: connexion_validate,
    onSubmit,
  });

  console.log(formik.errors);

  async function onSubmit(values) {
    console.log(values);
  }

  //Google Handler function
  async function handleGoogleSignin() {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  }

  return (
    <Layout>
      <Head>
        <title>Connexion</title>
      </Head>

      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font bold py-4">
            Canaan Sécurité & Gardiennage
          </h1>
          <p className="w-3/4 mx-auto text-gray-400">
            CANAAN SECURITE & GARDIENNAGE vous garantit une prestation de
            qualité sûre, régulière, dans le respect et en conformité avec les
            clauses du contrat de collaboration.
          </p>
        </div>

        {/* form */}
        <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
          <div
            className={`${styles.input_group} ${
              formik.errors.email && formik.touched.email
                ? "border-rose-600"
                : ""
            }`}
          >
            <input
              type="email"
              nom="email"
              placeholder="Email"
              className={styles.input_text}
              {...formik.getFieldProps("email")}
            />
            <span className="icon flex items-center px-4">
              <HiAtSymbol size={25} />
            </span>
          </div>
          {/*formik.errors.email && formik.touched.email ? (
            <span className="text-rose-500">{formik.errors.email}</span>
          ) : (
            <></>
          )*/}
          <div
            className={`${styles.input_group} ${
              formik.errors.password && formik.touched.password
                ? "border-rose-600"
                : ""
            }`}
          >
            <input
              type={`${show ? "text" : "password"}`}
              nom="mot de passe"
              placeholder="Mot de passe"
              className={styles.input_text}
              {...formik.getFieldProps("password")}
            />
            <span
              className="icon flex items-center px-4"
              onClick={() => setShow(!show)}
            >
              <HiFingerPrint size={25} />
            </span>
          </div>

          {/*formik.errors.password && formik.touched.password ? (
            <span className="text-rose-500">{formik.errors.password}</span>
          ) : (
            <></>
          )}
          {/*login buttons*/}
          <div className="input-button">
            <button type="button" className={styles.button}>
              Connexion
            </button>
          </div>
          <div className="input-button">
            <button
              type="button"
              onClick={handleGoogleSignin}
              className={styles.button_custom}
            >
              Continuer avec Google
              <Image
                src={"/assets/img/logos/google1.svg"}
                width="50"
                height={20}
              ></Image>
            </button>
          </div>
        </form>
        {/*bottom*/}
        <p className="text-center text-gray-400">
          Vous êtes un nouvel utilisateur ?
          <Link href={"/inscription"}>
            <a className="text-blue-700"> Créez un compte</a>
          </Link>
        </p>
      </section>
    </Layout>
  );
}
