import Image from "next/image";

import { InputField } from "src/components/form-components/input-field";
import styles from "src/styles/pages/sign-up/styles.module.scss";

export function SignUpPage() {
  return (
    <main className={styles.signupMain}>
      <section className={styles.signupContainer}>
        <div className="logo">
          <Image
            width={130}
            height={130}
            objectFit="cover"
            alt="Book manager logo"
            src="/images/logo-large.svg"
          />
        </div>
        <form>
          <InputField
            name="name"
            type="text"
            placeholder="Name"
          />
        </form>
      </section>
    </main>
  )
}