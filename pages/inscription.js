import React, { useState } from "react";
import Head from "next/head";
import Layout from "../layout/layout";
import Link from "next/link";
import styles from "../styles/Form.module.css";
import Image from "next/image";
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";
import { useFormik } from "formik";
import { inscriptionValidate } from "../lib/validate";

export default function Inscription() {
  const [show, setShow] = useState({ password: false, cpassword: false });
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      cpassword: "",
    },
    validate: inscriptionValidate,
    onSubmit,
  });

  async function onSubmit(values) {
    console.log(values);
  }

  return (
    <Layout>
      <Head>
        <title>Inscription</title>
      </Head>
      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font bold py-4">Inscription</h1>
          <p className="w-3/4 mx-auto text-gray-400">
            CANAAN SECURITE & GARDIENNAGE vous garantit une prestation de
            qualité sûre, régulière, dans le respect et en conformité avec les
            clauses du contrat de collaboration.
          </p>
        </div>

        {/* form */}
        <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
          <div className={styles.input_group}>
            <input
              type="text"
              nom="Nom d'utilisateur"
              placeholder="Nom d'utilisateur"
              className={styles.input_text}
              {...formik.getFieldProps("username")}
            />
            <span className="icon flex items-center px-4">
              <HiOutlineUser size={25} />
            </span>
          </div>
          {formik.errors.username && formik.touched.username ? (
            <span className="text-rose-500">{formik.errors.username}</span>
          ) : (
            <></>
          )}
          <div className={styles.input_group}>
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
          {formik.errors.email && formik.touched.email ? (
            <span className="text-rose-500">{formik.errors.email}</span>
          ) : (
            <></>
          )}
          <div className={styles.input_group}>
            <input
              type={`${show.password ? "text" : "password"}`}
              nom="mot de passe"
              placeholder="Mot de passe"
              className={styles.input_text}
              {...formik.getFieldProps("password")}
            />
            <span
              className="icon flex items-center px-4"
              onClick={() => setShow({ ...show, password: !show.password })}
            >
              <HiFingerPrint size={25} />
            </span>
          </div>
          {formik.errors.password && formik.touched.password ? (
            <span className="text-rose-500">{formik.errors.password}</span>
          ) : (
            <></>
          )}

          <div className={styles.input_group}>
            <input
              type={`${show.cpassword ? "text" : "password"}`}
              nom="cmot de passe"
              placeholder="Confirmer le Mot de passe"
              className={styles.input_text}
              {...formik.getFieldProps("cpassword")}
            />
            <span
              className="icon flex items-center px-4"
              onClick={() => setShow({ ...show, cpassword: !show.cpassword })}
            >
              <HiFingerPrint size={25} />
            </span>
          </div>
          {formik.errors.cpassword && formik.touched.cpassword ? (
            <span className="text-rose-500">{formik.errors.cpassword}</span>
          ) : (
            <></>
          )}

          {/*login buttons*/}
          <div className="input-button">
            <button type="submit" className={styles.button}>
              Créer mon compte
            </button>
          </div>
        </form>
        {/*bottom*/}
        <p className="text-center test-gray-400">
          Vous avez déjà un compte ?
          <Link href={"/connexion"}>
            <a className="text-blue-700"> Connectez-vous</a>
          </Link>
        </p>
      </section>
    </Layout>
  );
}
