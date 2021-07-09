import Image from "next/image";
import { FiUser, FiMail, FiLock } from "react-icons/fi";

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
            IconComponent={<FiUser />}
          />
          <InputField
            name="email"
            type="email"
            placeholder="Email"
            IconComponent={<FiMail />}
          />
          <InputField
            name="password"
            type="text"
            placeholder="Password"
            IconComponent={<FiLock />}
          />
        </form>
      </section>
    </main>
  )
}